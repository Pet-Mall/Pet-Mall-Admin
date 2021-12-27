import Cookies from 'js-cookie'
import Config from '@/settings'
const TokenKey = Config.TokenKey;
export function getToken() {
  return Cookies.get(TokenKey)
}
export function setToken(token: string) {
  return Cookies.set(TokenKey, token, { expires: Config.passCookieExpires })
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
