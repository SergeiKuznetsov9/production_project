import { BuildOptions } from "./types/config";
import webpack from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { buildDevServer } from "./buidDevServer";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode, isDev} = options;

  return {
    // mode: 'production' или development
    mode,

    // стартовая точка приложения
    // если стартовых точек несколько - то пишется объект
    // path используется для склейки кусков пути для его полного формирования
    entry: paths.entry,

    // Настройки того куда и как будет сделана сборка
    output: {
      // в этот параметр можно пихать различные названия, уточнения в доке.
      // [name] - означает, что будет взято имя файла
      // [contenthash] - используется для избежания проблемы того, что после обновления  юзеру
      // будет отдаваться старый файл из кеша, т.к. у него одинаковое название
      // clean: true - для удаления мусорных файлов после сборки
      filename: "[name].[contenthash].js",
      // можно и так написать filename: 'bundle.js',
      path: paths.build,
      clean: true,
    },

    // функция возвращает массив плагинов
    plugins: buildPlugins(options),

    // настройки модулей
    module: {
      // В свойстве rules отражаются лоудеры. Это такие штуки, которые обрабатывают файлы,
      // не являющиейся js
      // Этот лоудер позволяет обрабатывать ts файлы
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),

    // в случае возникновения в коде ошибки, позволяет указать где она имелась в исходном
    // коде, а не в сбилженом варианте
    devtool: isDev ? "inline-source-map" : undefined,

    // девСервер нужен для того, чтобы бил происходил автоматически всякий раз, когда
    // изменились какие либо файлы
    devServer: isDev ? buildDevServer(options) : undefined
  };
}
