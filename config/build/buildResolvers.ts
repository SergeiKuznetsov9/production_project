import { ResolveOptions } from "webpack";

export function buildResolvers(): ResolveOptions {
  return {
    // Это чтобы импортить без расширения))
    extensions: [".tsx", ".ts", ".js"],
  };
}
