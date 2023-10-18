import { Plugin } from "payload/config";
import { Field, CollectionBeforeChangeHook, CollectionAfterDeleteHook, CollectionAfterReadHook } from "payload/types";
import { PluginConfig } from "../types";
export declare const GROUP_NAME = "cloudinary";
export declare const DEFAULT_REQUIRED_FIELDS: {
    name: string;
    label: string;
}[];
export declare const getPartialField: (field: string | Partial<Field>) => Partial<Field>;
export declare const mapRequiredFields: (additionalFields?: Array<Partial<Field> | string>) => Field[];
export declare const beforeChangeHook: CollectionBeforeChangeHook;
export declare const afterDeleteHook: CollectionAfterDeleteHook;
export declare const afterReadHook: CollectionAfterReadHook;
declare const cloudinaryPlugin: (pluginConfig?: PluginConfig) => Plugin;
export default cloudinaryPlugin;
