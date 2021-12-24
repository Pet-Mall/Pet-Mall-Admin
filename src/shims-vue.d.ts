/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue" //DefineComponent表示一个组件类型
  const component: DefineComponent<{}, {}, any>
  export default component
}declare module '*.json' {
  const value: any;
  export default value;
}
