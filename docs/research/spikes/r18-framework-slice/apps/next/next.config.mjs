import {fileURLToPath} from "node:url";
import path from "node:path";
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"../..");
export default {output:"standalone",outputFileTracingRoot:root,reactStrictMode:true,devIndicators:false};
