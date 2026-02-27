import type { ViewProps } from 'react-native';

import { VideoCanvas } from './AgoraBase';
import { RtcConnection } from './IAgoraRtcEngineEx';
import IAgoraRtcRenderView from './internal/IAgoraRtcRenderView';
import AgoraRtcSurfaceViewNativeComponent from './specs/AgoraRtcSurfaceViewNativeComponent';
import AgoraRtcTextureViewNativeComponent from './specs/AgoraRtcTextureViewNativeComponent';

/**
 * @ignore
 */
export interface RtcRendererViewProps extends ViewProps {
  /**
   * @ignore
   */
  canvas: VideoCanvas;

  /**
   * @ignore
   */
  connection?: RtcConnection;
}

/**
 * @ignore
 */
export interface RtcSurfaceViewProps extends RtcRendererViewProps {
  /**
   * @ignore
   */
  zOrderOnTop?: boolean;

  /**
   * @ignore
   */
  zOrderMediaOverlay?: boolean;
}

/**
 * @ignore
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
 * @ignore
 */
export class RtcTextureView extends IAgoraRtcRenderView<RtcRendererViewProps> {
  /**
   * @ignore
   */
  get view() {
    return AgoraRtcTextureViewNativeComponent;
  }
}
