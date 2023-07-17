import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    // означает, что абсолютные пути в приоритете
    preferAbsolute: true,
    // Необходимо передать путь до папки src и node_modules
    modules: [options.paths.src, "node_modules"],
    // для каждого модуля главным файлом будет являться index
    mainFiles: ["index"],

    // Алиасы можно указать для того, чтобы при импортах использовать @
    // как указатель корня. Можно и не указывать
    alias: {},
  };
}
