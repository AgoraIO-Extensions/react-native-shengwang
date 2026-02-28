import type { ViewProps } from 'react-native';

import { VideoCanvas } from './AgoraBase';
import { RtcConnection } from './IAgoraRtcEngineEx';
import IAgoraRtcRenderView from './internal/IAgoraRtcRenderView';
import AgoraRtcSurfaceViewNativeComponent from './specs/AgoraRtcSurfaceViewNativeComponent';
import AgoraRtcTextureViewNativeComponent from './specs/AgoraRtcTextureViewNativeComponent';

/**
 * RtcSurfaceView 和 RtcTextureView 的通用属性。
 */
export interface RtcRendererViewProps extends ViewProps {
  /**
   * 本地视频显示属性。详见 VideoCanvas 。
   */
  canvas: VideoCanvas;

  /**
   * Connection 信息。详见 RtcConnection 。
   */
  connection?: RtcConnection;
}

/**
 * RtcSurfaceView 的属性。
 */
export interface RtcSurfaceViewProps extends RtcRendererViewProps {
  /**
   * 是否将 RtcSurfaceView 视图的表层置于窗口上层： true : 置于窗口上层。 false : 不置于窗口上层。
   */
  zOrderOnTop?: boolean;

  /**
   * 是否将 RtcSurfaceView 视图的表层置于窗口中另一个 RtcSurfaceView 的上层（但依然位于窗口的下层）： true : 置于窗口中另一个 RtcSurfaceView 的上层。 false : 不置于窗口上层。
   */
  zOrderMediaOverlay?: boolean;
}

/**
 * RtcSurfaceView 类。
 *
 * 该类用于渲染：
 *  Android: 对应 Android 系统原生的 SurfaceView。
 *  iOS: 对应 iOS 系统原生的 UIView。 为保证渲染出图，调用该组件前，根据当前是否加入频道进行对应操作：
 *  不加入频道时：先调用 startPreview ，然后调用 enableVideo 。
 *  加入频道时：先开启采集，然后调用 enableVideo 。 相关参考： RtcSurfaceViewProps RtcRendererViewProps
 */
export class RtcSurfaceView extends IAgoraRtcRenderView<RtcSurfaceViewProps> {
  /**
   * @ignore
   */
  get view() {
    return AgoraRtcSurfaceViewNativeComponent;
  }
}

/**
 * RtcTextureView 类。
 *
 * 该类用于渲染。对应 Android 系统原生的 TextureView。
 * 为保证渲染出图，调用该组件前，根据当前是否加入频道进行对应操作：
 *  不加入频道时：先调用 startPreview ，然后调用 enableVideo 。
 *  加入频道时：先开启采集，然后调用 enableVideo 。 相关参考： RtcRendererViewProps RtcTextureView 类仅适用于 Android 平台，不适用于 iOS 平台。
 */
export class RtcTextureView extends IAgoraRtcRenderView<RtcRendererViewProps> {
  /**
   * @ignore
   */
  get view() {
    return AgoraRtcTextureViewNativeComponent;
  }
}
