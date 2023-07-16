import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  // Последовательность лоудеров имеет значение, поэтому выводим их в отдельные константы:

  // Этот лоудер позволяет обрабатывать ts файлы
  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,

      // Лоудеры можно импортировать объектом, если необходимо добавить опции
      {
        // Translates CSS into CommonJS
        loader: "css-loader",

        // Эта настройка нейобходима для возможности использования CSS модулей
        options: {
          modules: {
            // Для того, чтобы инкапсуляция стилей осуществлялась только при использовании module.scss,
            // добавим следующую настройку, в которую передадим функцию, возвращающую boolean
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),

            // Для того, чтобы в дев сборке имена классов были не захешированы полностью, добавим следую-
            // щую настройку

            localIdentName: options.isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
          },
        },
      },

      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  return [typeScriptLoader, cssLoaders];
}
