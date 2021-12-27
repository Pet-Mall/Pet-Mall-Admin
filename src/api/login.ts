import request from "../utils/request";
import { LoginUserInfo } from "@/type"
export const login = (isAdminOfPet='admin',query:LoginUserInfo) => {
  return request({
    url: `/api/${isAdminOfPet}/login`,
    method: "post",
    data: {
      ...query
    }
  });
};
