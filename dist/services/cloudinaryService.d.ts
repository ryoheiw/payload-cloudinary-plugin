/// <reference types="node" />
import { ConfigOptions, DeliveryType, ResourceType, UploadApiOptions, UploadApiResponse } from "cloudinary";
import { Payload } from "payload";
import { SanitizedCollectionConfig } from "payload/types";
import { CloudinaryPluginRequest } from "../types";
export declare class CloudinaryService {
    private config?;
    private options?;
    private uploadResourceTypeHandler?;
    constructor(config?: ConfigOptions, options?: UploadApiOptions, uploadResourceTypeHandler?: Function);
    upload(filename: string, buffer: Buffer, payload: Payload, collectionConfig?: SanitizedCollectionConfig): Promise<UploadApiResponse>;
    delete(public_id: string, options?: {
        resource_type?: ResourceType;
        type?: DeliveryType;
        invalidate?: boolean;
    }): Promise<any>;
}
export declare function mediaManagement(config?: ConfigOptions, uploadApiOptions?: UploadApiOptions, uploadResourceTypeHandler?: Function): (req: CloudinaryPluginRequest, _: any, next: any) => void;
