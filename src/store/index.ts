// 修改 store.js
import { defineStore } from "pinia";
import { getToken, setToken, removeToken } from '@/utils/auth'
import Cookies from 'js-cookie'
import Config from '@/settings'

// 类型
import { LoginUserInfo } from "../type"
// 接口
import { login } from "@/api/login"
export const useStore = defineStore({
  id: "myGlobalState",
  state: () => ({
    token: '',
    user: {},
    tagsList: [],
    collapse: false
  }),
  //NOTE:因为是js转的，之前data类型没加，自己写的会写详细类型
  actions: {
    delTagsItem(data: any) {
      this.tagsList.splice(data.index, 1);
    },
    setTagsItem(data: any) {
      this.tagsList.push((data as never));
    },
    clearTags() {
      this.tagsList = [];
    },
    closeTagsOther(data: any) {
      this.tagsList = data;
    },
    closeCurrentTag(data: any) {
      for (let i = 0, len = this.tagsList.length; i < len; i++) {
        const item: any = this.tagsList[i];
        if (item.path === data.$route.fullPath) {
          if (i < len - 1) {
            data.$router.push(this.tagsList[i + 1].path);
          } else if (i > 0) {
            data.$router.push(this.tagsList[i - 1].path);
          } else {
            data.$router.push("/");
          }
          this.tagsList.splice(i, 1);
          break;
        }
      }
    },
    // 侧边栏折叠
    handleCollapse(data: any) {
      this.collapse = data;
    },
    // 登录
    Login(type: string, userInfo: LoginUserInfo) {
      return new Promise((resolve, reject) => {
        login(type, userInfo).then(res => {
          this.user = res.data;
          this.token = res.data.token;
          //NOTE:可以进行对称加密，我这里没做
          setToken(res.data.token)
          Cookies.set('user', JSON.stringify(this.user), { expires: Config.passCookieExpires })
          resolve(res.data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 退出
    loout() {
      Cookies.remove('user');
      this.user={};
      this.token='';
      removeToken()
    },
    // 刷新重新加载pinia
    RefreshVuex() {
      const token = Cookies.get("token")
      const userInfo = Cookies.get("user")
      if (token) {
        this.token=token
      }
      if (userInfo) {
        this.user=JSON.parse(userInfo)
      }

    }
  }
});

