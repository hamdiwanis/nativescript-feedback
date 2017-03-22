import { Color } from "color";
export declare const enum FeedbackPosition {
    Top = 1,
    Bottom = 2,
}
export declare const enum FeedbackType {
    Success = 1,
    Error = 2,
    Warning = 3,
    Info = 4,
    Custom = 5,
}
export interface FeedbackShowOptions {
    title?: string;
    titleColor?: Color;
    message?: string;
    messageColor?: Color;
    duration?: number;
    type?: FeedbackType;
    position?: FeedbackPosition;
    backgroundColor?: Color;
    icon?: string;
    onTap?: Function;
}
export interface FeedbackHideOptions {
}
export interface FeedbackApi {
    show(options: FeedbackShowOptions): Promise<any>;
    hide(options?: FeedbackHideOptions): Promise<any>;
    success(options: FeedbackShowOptions): Promise<any>;
    warning(options: FeedbackShowOptions): Promise<any>;
    error(options: FeedbackShowOptions): Promise<any>;
    info(options: FeedbackShowOptions): Promise<any>;
}
export declare abstract class FeedbackCommon implements FeedbackApi {
    abstract show(options: FeedbackShowOptions): Promise<any>;
    abstract hide(options?: FeedbackHideOptions): Promise<any>;
    success(options: FeedbackShowOptions): Promise<any>;
    warning(options: FeedbackShowOptions): Promise<any>;
    error(options: FeedbackShowOptions): Promise<any>;
    info(options: FeedbackShowOptions): Promise<any>;
}