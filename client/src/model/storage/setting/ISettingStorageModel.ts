import IStorageBaseModel from '../IStorageBaseModel';

export type GuideViewMode = 'sequential' | 'minimum' | 'all';

export interface ISettingValue {
    isForceDarkTheme: boolean;
    isHalfWidthDisplayed: boolean;
    isOnAirTabListView: boolean;
    onAirM2TSViewURLScheme: string | null;
    guideMode: GuideViewMode;
    guideLength: number;
    isEnableDisplayForEachBroadcastWave: boolean;
    reservesLength: number;
    recordingLength: number;
    recordedLength: number;
    isShowTableMode: boolean;
    isPreferredPlayingOnWeb: boolean;
    shouldUseRecordedViewURLScheme: boolean;
    recordedViewURLScheme: string | null;
    shouldUseRecordedDownloadURLScheme: boolean;
    recordedDownloadURLScheme: string | null;
    searchLength: number;
    isEnableAutoScrollWhenEditingRule: boolean;
    isEnableCopyKeywordToDirectory: boolean;
    isCheckAvoidDuplicate: boolean;
    isEnableEncodingSettingWhenCreateRule: boolean;
    isCheckDeleteOriginalAfterEncode: boolean;
    rulesLength: number;
}

export default interface ISettingStorageModel extends IStorageBaseModel<ISettingValue> {}
