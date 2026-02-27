import './extension/IAgoraMediaEngineExtension';
import {
  AudioTrackConfig,
  AudioTrackType,
  EncodedVideoFrameInfo,
  SenderOptions,
} from './AgoraBase';
import {
  AudioFrame,
  ExternalVideoFrame,
  ExternalVideoSourceType,
  IAudioFrameObserver,
  IFaceInfoObserver,
  IVideoEncodedFrameObserver,
  IVideoFrameObserver,
} from './AgoraMediaBase';

/**
 * @ignore
 */
export enum AudioMixingDualMonoMode {
  /**
   * @ignore
   */
  AudioMixingDualMonoAuto = 0,
  /**
   * @ignore
   */
  AudioMixingDualMonoL = 1,
  /**
   * @ignore
   */
  AudioMixingDualMonoR = 2,
  /**
   * @ignore
   */
  AudioMixingDualMonoMix = 3,
}

/**
 * @ignore
 */
export abstract class IMediaEngine {
  /**
   * @ignore
   */
  abstract registerAudioFrameObserver(observer: IAudioFrameObserver): number;

  /**
   * @ignore
   */
  abstract registerVideoFrameObserver(observer: IVideoFrameObserver): number;

  /**
   * @ignore
   */
  abstract registerVideoEncodedFrameObserver(
    observer: IVideoEncodedFrameObserver
  ): number;

  /**
   * @ignore
   */
  abstract registerFaceInfoObserver(observer: IFaceInfoObserver): number;

  /**
   * @ignore
   */
  abstract pushAudioFrame(frame: AudioFrame, trackId?: number): number;

  /**
   * @ignore
   */
  abstract pullAudioFrame(frame: AudioFrame): number;

  /**
   * @ignore
   */
  abstract setExternalVideoSource(
    enabled: boolean,
    useTexture: boolean,
    sourceType?: ExternalVideoSourceType,
    encodedVideoOption?: SenderOptions
  ): number;

  /**
   * @ignore
   */
  abstract setExternalRemoteEglContext(eglContext: any): number;

  /**
   * @ignore
   */
  abstract setExternalAudioSource(
    enabled: boolean,
    sampleRate: number,
    channels: number,
    localPlayback?: boolean,
    publish?: boolean
  ): number;

  /**
   * @ignore
   */
  abstract createCustomAudioTrack(
    trackType: AudioTrackType,
    config: AudioTrackConfig
  ): number;

  /**
   * @ignore
   */
  abstract destroyCustomAudioTrack(trackId: number): number;

  /**
   * @ignore
   */
  abstract setExternalAudioSink(
    enabled: boolean,
    sampleRate: number,
    channels: number
  ): number;

  /**
   * @ignore
   */
  abstract enableCustomAudioLocalPlayback(
    trackId: number,
    enabled: boolean
  ): number;

  /**
   * @ignore
   */
  abstract pushVideoFrame(
    frame: ExternalVideoFrame,
    videoTrackId?: number
  ): number;

  /**
   * @ignore
   */
  abstract pushEncodedVideoImage(
    imageBuffer: Uint8Array,
    length: number,
    videoEncodedFrameInfo: EncodedVideoFrameInfo,
    videoTrackId?: number
  ): number;

  /**
   * @ignore
   */
  abstract release(): void;

  /**
   * @ignore
   */
  abstract unregisterAudioFrameObserver(observer: IAudioFrameObserver): number;

  /**
   * @ignore
   */
  abstract unregisterVideoFrameObserver(observer: IVideoFrameObserver): number;

  /**
   * @ignore
   */
  abstract unregisterVideoEncodedFrameObserver(
    observer: IVideoEncodedFrameObserver
  ): number;

  /**
   * @ignore
   */
  abstract unregisterFaceInfoObserver(observer: IFaceInfoObserver): number;
}
