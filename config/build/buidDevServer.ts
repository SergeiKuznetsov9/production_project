import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,

    // автоматически открывает в браузере страницу с приложением
    open: true,

    // Эта настройка нужно для того, чтобы при перезагрузке страницы на каком либо маршруте,
    // у нас открывалась соответствующая страничка, а не показывалсь запись о невозможности
    // получить данные
    historyApiFallback: true,
  };
}
