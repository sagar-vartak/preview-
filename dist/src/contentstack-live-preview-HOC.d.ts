import { IInitData, IStackSdk, OnEntryChangeCallback, OnEntryChangeCallbackUID } from "./utils/types";
import LivePreview from "./live-preview";
export declare class ContentstackLivePreview {
    static livePreview: LivePreview | null;
    static userConfig: Partial<IInitData> | null;
    static subscribers: {
        [uid: string]: OnEntryChangeCallback;
    };
    static init(userConfig?: Partial<IInitData>): Promise<LivePreview> | undefined;
    private static publish;
    private static subscribe;
    static onEntryChange(onChangeCallback: OnEntryChangeCallback): OnEntryChangeCallbackUID;
    static unsubscribeOnEntryChange(callback: string | OnEntryChangeCallback): void;
    static getGatsbyDataFormat(sdkQuery: IStackSdk, prefix: string): Promise<any>;
    static getSdkVersion(): string;
}
export default ContentstackLivePreview;
//# sourceMappingURL=contentstack-live-preview-HOC.d.ts.map