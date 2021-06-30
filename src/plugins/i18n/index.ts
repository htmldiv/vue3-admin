// 多组件库的国际化和本地项目国际化兼容

import { App } from "vue";
import { createI18n } from "vue-i18n";
import { localesConfigs } from "./config";

export const i18n = createI18n({
  locale: "zh", // 默认语言
  fallbacklocale: "en", // 
  messages: localesConfigs,
})

export function usI18(app: App) {
  app.use(i18n)
}
