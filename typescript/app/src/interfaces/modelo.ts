import { Comparavel } from "./comparavel.js";
import { Imprimivel } from "../utils/imprimivel.js";

export interface Modelo<T> extends Imprimivel, Comparavel<T> {}
