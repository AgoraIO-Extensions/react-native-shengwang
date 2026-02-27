import './extension/IAgoraMediaPlayerExtension';
import { SpatialAudioParams } from './AgoraBase';
import {
  AudioDualMonoMode,
  IAudioPcmFrameSink,
  IAudioSpectrumObserver,
  RawAudioFrameOpModeType,
  RenderModeType,
  VideoFrame,
} from './AgoraMediaBase';
import {
  MediaPlayerState,
  MediaSource,
  PlayerStreamInfo,
} from './AgoraMediaPlayerTypes';
import { IMediaPlayerSourceObserver } from './IAgoraMediaPlayerSource';

/**
 * @ignore
 */
export abstract class IMediaPlayer {
  /**
   * @ignore
   */
  abstract getMediaPlayerId(): number;

  /**
   * @ignore
   */
  abstract open(url: string, startPos: number): number;

  /**
   * @ignore
   */
  abstract openWithMediaSource(source: MediaSource): number;

  /**
   * @ignore
   */
  abstract play(): number;

  /**
   * @ignore
   */
  abstract pause(): number;

  /**
   * @ignore
   */
  abstract stop(): number;

  /**
   * @ignore
   */
  abstract resume(): number;

  /**
   * @ignore
   */
  abstract seek(newPos: number): number;

  /**
   * @ignore
   */
  abstract setAudioPitch(pitch: number): number;

  /**
   * @ignore
   */
  abstract getDuration(): number;

  /**
   * @ignore
   */
  abstract getPlayPosition(): number;

  /**
   * @ignore
   */
  abstract getStreamCount(): number;

  /**
   * @ignore
   */
  abstract getStreamInfo(index: number): PlayerStreamInfo;

  /**
   * @ignore
   */
  abstract setLoopCount(loopCount: number): number;

  /**
   * @ignore
   */
  abstract setPlaybackSpeed(speed: number): number;

  /**
   * @ignore
   */
  abstract selectAudioTrack(index: number): number;

  /**
   * @ignore
   */
  abstract selectMultiAudioTrack(
    playoutTrackIndex: number,
    publishTrackIndex: number
  ): number;

  /**
   * @ignore
   */
  abstract takeScreenshot(filename: string): number;

  /**
   * @ignore
   */
  abstract selectInternalSubtitle(index: number): number;

  /**
   * @ignore
   */
  abstract setExternalSubtitle(url: string): number;

  /**
   * @ignore
   */
  abstract getState(): MediaPlayerState;

  /**
   * @ignore
   */
  abstract mute(muted: boolean): number;

  /**
   * @ignore
   */
  abstract getMute(): boolean;

  /**
   * @ignore
   */
  abstract adjustPlayoutVolume(volume: number): number;

  /**
   * @ignore
   */
  abstract getPlayoutVolume(): number;

  /**
   * @ignore
   */
  abstract adjustPublishSignalVolume(volume: number): number;

  /**
   * @ignore
   */
  abstract getPublishSignalVolume(): number;

  /**
   * @ignore
   */
  abstract setView(view: any): number;

  /**
   * @ignore
   */
  abstract setRenderMode(renderMode: RenderModeType): number;

  /**
   * @ignore
   */
  abstract registerPlayerSourceObserver(
    observer: IMediaPlayerSourceObserver
  ): number;

  /**
   * @ignore
   */
  abstract unregisterPlayerSourceObserver(
    observer: IMediaPlayerSourceObserver
  ): number;

  /**
   * @ignore
   */
  abstract registerAudioFrameObserver(
    observer: IAudioPcmFrameSink,
    mode?: RawAudioFrameOpModeType
  ): number;

  /**
   * @ignore
   */
  abstract unregisterAudioFrameObserver(observer: IAudioPcmFrameSink): number;

  /**
   * @ignore
   */
  abstract registerVideoFrameObserver(
    observer: IMediaPlayerVideoFrameObserver
  ): number;

  /**
   * @ignore
   */
  abstract unregisterVideoFrameObserver(
    observer: IMediaPlayerVideoFrameObserver
  ): number;

  /**
   * @ignore
   */
  abstract registerMediaPlayerAudioSpectrumObserver(
    observer: IAudioSpectrumObserver,
    intervalInMS: number
  ): number;

  /**
   * @ignore
   */
  abstract unregisterMediaPlayerAudioSpectrumObserver(
    observer: IAudioSpectrumObserver
  ): number;

  /**
   * @ignore
   */
  abstract setAudioDualMonoMode(mode: AudioDualMonoMode): number;

  /**
   * @ignore
   */
  abstract getPlayerSdkVersion(): string;

  /**
   * @ignore
   */
  abstract getPlaySrc(): string;

  /**
   * @ignore
   */
  abstract openWithAgoraCDNSrc(src: string, startPos: number): number;

  /**
   * @ignore
   */
  abstract getAgoraCDNLineCount(): number;

  /**
   * @ignore
   */
  abstract switchAgoraCDNLineByIndex(index: number): number;

  /**
   * @ignore
   */
  abstract getCurrentAgoraCDNIndex(): number;

  /**
   * @ignore
   */
  abstract enableAutoSwitchAgoraCDN(enable: boolean): number;

  /**
   * @ignore
   */
  abstract renewAgoraCDNSrcToken(token: string, ts: number): number;

  /**
   * @ignore
   */
  abstract switchAgoraCDNSrc(src: string, syncPts?: boolean): number;

  /**
   * @ignore
   */
  abstract switchSrc(src: string, syncPts?: boolean): number;

  /**
   * @ignore
   */
  abstract preloadSrc(src: string, startPos: number): number;

  /**
   * @ignore
   */
  abstract playPreloadedSrc(src: string): number;

  /**
   * @ignore
   */
  abstract unloadSrc(src: string): number;

  /**
   * @ignore
   */
  abstract setSpatialAudioParams(params: SpatialAudioParams): number;

  /**
   * @ignore
   */
  abstract setSoundPositionParams(pan: number, gain: number): number;

  /**
   * @ignore
   */
  abstract getAudioBufferDelay(): number;

  /**
   * @ignore
   */
  abstract setPlayerOptionInInt(key: string, value: number): number;

  /**
   * @ignore
   */
  abstract setPlayerOptionInString(key: string, value: string): number;
}

/**
 * @ignore
 */
export abstract class IMediaPlayerCacheManager {
  /**
   * @ignore
   */
  abstract removeAllCaches(): number;

  /**
   * @ignore
   */
  abstract removeOldCache(): number;

  /**
   * @ignore
   */
  abstract removeCacheByUri(uri: string): number;

  /**
   * @ignore
   */
  abstract setCacheDir(path: string): number;

  /**
   * @ignore
   */
  abstract setMaxCacheFileCount(count: number): number;

  /**
   * @ignore
   */
  abstract setMaxCacheFileSize(cacheSize: number): number;

  /**
   * @ignore
   */
  abstract enableAutoRemoveCache(enable: boolean): number;

  /**
   * @ignore
   */
  abstract getCacheDir(length: number): string;

  /**
   * @ignore
   */
  abstract getMaxCacheFileCount(): number;

  /**
   * @ignore
   */
  abstract getMaxCacheFileSize(): number;

  /**
   * @ignore
   */
  abstract getCacheFileCount(): number;
}

/**
 * @ignore
 */
export interface IMediaPlayerVideoFrameObserver {
  /**
   * @ignore
   */
  onFrame?(frame: VideoFrame): void;
}
