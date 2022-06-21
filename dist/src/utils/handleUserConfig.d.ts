import { IClientUrlParams, IConfig, IInitData, IStackSdk } from "./types";
export declare const handleInitData: (initData: Partial<IInitData> | Partial<IStackSdk>, config: IConfig) => void;
export declare const handleUserConfig: {
    clientUrlParams: (existingConfig: IConfig, userConfig: Partial<IClientUrlParams>) => void;
};
//# sourceMappingURL=handleUserConfig.d.ts.map