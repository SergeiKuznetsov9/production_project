import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin  from "mini-css-extract-plugin";

export function buildPlugins({
  paths,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    // для включения в бандл HTML, необходимо использовать дополнительный плагин HTMLWebpackPlugin()
    // Если мы хотим использовать какой то HTML-файл как шаблон, чтобы в него встраивались скрипты, нужно
    // передать в этот плагин объект конфига (в доке есть инфа по конфигу)

    // для отображения прогресса сборки можно использовать плагин webpack.ProgressPlugin()

    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
  ];
}
