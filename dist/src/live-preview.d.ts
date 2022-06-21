import { IInitData } from "./utils/types";
export default class LivePreview {
    /**
     * @hideconstructor
     */
    private config;
    private tooltip;
    private currentElementBesideTooltip;
    private tooltipChild;
    private tooltipCurrentChild;
    constructor(initData?: Partial<IInitData>);
    private addEditStyleOnHover;
    private generateRedirectUrl;
    private scrollHandler;
    private linkClickHandler;
    private handleUserChange;
    setOnChangeCallback(onChangeCallback: () => void): void;
    private resolveIncomingMessage;
    private createCslpTooltip;
    private requestDataSync;
    private updateTooltipPosition;
    private removeDataCslp;
}
//# sourceMappingURL=live-preview.d.ts.map