import { InfoModel } from "./infoModel";

export interface BaseSchema<T> {
    info: InfoModel;
    results: Array<T>;
}