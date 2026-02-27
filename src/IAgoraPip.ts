import { RtcRendererViewProps } from './AgoraRtcRenderView';

/**
 * 画中画视频流的布局配置。
 *
 * 自从 自 v4.6.2 版本新增。 该类定义多个视频流在流式布局中的排列方式，视频流从左到右、从上到下依次排列。
 */
export class AgoraPipContentViewLayout {
  /**
   * 整个布局周围的内边距，单位为像素。用于在布局边缘和视频流之间创建空间。如果为 null，则不应用内边距。
   */
  padding?: number;

  /**
   * 视频流之间的水平和垂直间距，单位为像素。用于在相邻视频流之间创建一致的间距。如果为 null，视频流将直接相邻放置。
   */
  spacing?: number;

  /**
   * 布局中允许的最大行数。达到最大行数后，即使存在更多视频流，也不会创建新行。如果为 null，将根据需要创建行以容纳所有视频流。必须大于 0 或为 null。
   */
  row?: number;

  /**
   * 每行的最大视频流数量。达到最大数量后，将开始新行。如果为 null，视频流将流动填充可用宽度。必须大于 0 或为 null。
   */
  column?: number;
}

/**
 * 声网画中画模式的配置选项。
 *
 * 自从 自 v4.6.2 版本新增。 该类提供平台特定的选项来配置 Android 和 iOS 平台的画中画行为。
 */
export class AgoraPipOptions {
  /**
   * 是否自动进入画中画模式。
   */
  autoEnterEnabled?: boolean;

  /**
   * 画中画窗口的水平宽高比。
   *
   * 仅适用于 Android 平台。
   */
  aspectRatioX?: number;

  /**
   * 画中画窗口的垂直宽高比。
   *
   * 仅适用于 Android 平台。
   */
  aspectRatioY?: number;

  /**
   * 源矩形提示的左坐标。
   *
   * 用于指定画中画窗口的初始位置。
   * 仅适用于 Android 平台。
   */
  sourceRectHintLeft?: number;

  /**
   * 源矩形提示的上坐标。
   *
   * 用于指定画中画窗口的初始位置。
   * 仅适用于 Android 平台。
   */
  sourceRectHintTop?: number;

  /**
   * 源矩形提示的右坐标。
   *
   * 用于指定画中画窗口的初始位置。
   * 仅适用于 Android 平台。
   */
  sourceRectHintRight?: number;

  /**
   * 源矩形提示的下坐标。
   *
   * 用于指定画中画窗口的初始位置。
   * 仅适用于 Android 平台。
   */
  sourceRectHintBottom?: number;

  /**
   * 是否启用画中画窗口的无缝调整大小。
   *
   * 启用后，画中画窗口将平滑调整大小。
   * 默认为 false 。
   * 仅适用于 Android 平台。
   */
  seamlessResizeEnabled?: boolean;

  /**
   * 是否使用外部状态监控。
   *
   * 启用后，创建专用线程来监控画中画窗口状态。使用 externalStateMonitorInterval 配置监控频率。
   * 默认为 true 。
   * 仅适用于 Android 平台。
   */
  useExternalStateMonitor?: boolean;

  /**
   * 外部状态监控的间隔，单位为毫秒。
   *
   * 仅在 useExternalStateMonitor 为 true 时生效。
   * 默认为 100ms。
   * 仅适用于 Android 平台。
   */
  externalStateMonitorInterval?: number;

  /**
   * 视频转码配置。
   *
   * 仅在 contentView 设置为 0 时生效。当用户让 SDK 管理视图时，所有视频流将放置在画中画窗口的根视图中。
   * 仅适用于 iOS 平台。
   */
  videoStreams?: RtcRendererViewProps[];

  /**
   * 画中画视频流的布局配置。
   *
   * 仅在 contentView 设置为 0 时生效。
   * 仅适用于 iOS 平台。
   */
  contentViewLayout?: AgoraPipContentViewLayout;

  /**
   * sourceContentView 确定画中画动画的源帧和恢复目标。传递 0 以使用应用的根视图。为了获得最佳动画效果，请将此设置为包含视频内容的视图。系统使用此视图进行画中画进入/退出动画，并在返回应用或停止画中画时作为恢复目标。
   */
  sourceContentView?: number;

  /**
   * contentView 确定将在画中画窗口中显示哪个视图。如果传递 0，画中画控制器将自动管理并显示所有视频流。如果传递特定的视图 ID，你需要负责管理画中画窗口中显示的内容。
   */
  contentView?: number;

  /**
   * 画中画内容的首选宽度。
   *
   * 仅适用于 iOS 平台。
   */
  preferredContentWidth?: number;

  /**
   * 画中画内容的首选高度。
   *
   * 仅适用于 iOS 平台。
   */
  preferredContentHeight?: number;

  /**
   * 画中画窗口的控制样式。
   * 可用样式：
   *  0：显示所有系统控件（默认）
   *  1：隐藏前进和后退按钮
   *  2：隐藏播放/暂停按钮和进度条（推荐）
   *  3：隐藏所有系统控件，包括关闭和恢复按钮 仅适用于 iOS 平台。
   */
  controlStyle?: number;
}

/**
 * 表示画中画模式的当前状态。
 *
 * 自从 自 v4.6.2 版本新增。
 */
export enum AgoraPipState {
  /**
   * 0：画中画模式已成功启动。
   */
  pipStateStarted = 0,

  /**
   * 1：画中画模式已停止。
   */
  pipStateStopped = 1,

  /**
   * 2：画中画模式启动失败或遇到错误。
   */
  pipStateFailed = 2,
}

/**
 * 画中画状态改变的观测器。
 *
 * 自从 自 v4.6.2 版本新增。 实现此类以接收画中画状态转换和潜在错误的通知。
 */
export interface AgoraPipStateChangedObserver {
  /**
   * @ignore
   */
  onPipStateChanged: (state: AgoraPipState, error: string | null) => void;
}

/**
 * 管理画中画功能的控制器接口。
 *
 * 自从 自 v4.6.2 版本新增。 此抽象类定义了控制画中画模式所需的方法，包括设置、状态管理和生命周期操作。
 */
export abstract class AgoraPip {
  /**
   * 释放画中画相关的资源。
   *
   * 自从 自 v4.6.2 版本新增。
   */
  abstract release(): void;

  /**
   * 注册画中画状态改变观测器。
   *
   * @param observer 画中画状态改变观测器，详见 AgoraPipStateChangedObserver 。
   */
  abstract registerPipStateChangedObserver(
    observer: AgoraPipStateChangedObserver
  ): void;

  /**
   * 取消注册画中画状态改变观测器。
   *
   * @param observer 画中画状态改变观测器，详见 AgoraPipStateChangedObserver 。
   */
  abstract unregisterPipStateChangedObserver(
    observer: AgoraPipStateChangedObserver
  ): void;

  /**
   * 检查当前设备是否支持画中画模式。
   *
   * 自从 自 v4.6.2 版本新增。
   *
   * @returns
   * true ：当前设备支持画中画模式。 false ：当前设备不支持画中画模式。
   */
  abstract pipIsSupported(): boolean;

  /**
   * 检查是否支持自动进入画中画模式。
   *
   * 自从 自 v4.6.2 版本新增。
   *
   * @returns
   * true ：支持自动进入画中画模式。 false ：不支持自动进入画中画模式。
   */
  abstract pipIsAutoEnterSupported(): boolean;

  /**
   * 检查画中画模式是否已激活。
   *
   * 自从 自 v4.6.2 版本新增。
   *
   * @returns
   * true ：画中画模式已激活。 false ：画中画模式未激活。
   */
  abstract isPipActivated(): boolean;

  /**
   * 配置画中画模式。
   *
   * 自从 自 v4.6.2 版本新增。
   *
   * @param options 画中画配置选项，详见 AgoraPipOptions 。
   *
   * @returns
   * true ：方法调用成功。 false ：方法调用失败。
   */
  abstract pipSetup(options: AgoraPipOptions): boolean;

  /**
   * 启动画中画模式。
   *
   * 自从 自 v4.6.2 版本新增。
   *
   * @returns
   * true ：方法调用成功。 false ：方法调用失败。
   */
  abstract pipStart(): boolean;

  /**
   * 停止画中画模式。
   *
   * 自从 自 v4.6.2 版本新增。
   */
  abstract pipStop(): void;

  /**
   * 释放画中画相关的资源。
   *
   * 自从 自 v4.6.2 版本新增。
   */
  abstract pipDispose(): void;
}
