import './extension/IAgoraMediaPlayerSourceExtension';
import {
  CacheStatistics,
  MediaPlayerEvent,
  MediaPlayerReason,
  MediaPlayerState,
  PlayerPlaybackStats,
  PlayerPreloadEvent,
  PlayerUpdatedInfo,
  SrcInfo,
} from './AgoraMediaPlayerTypes';

/**
 * @ignore
 */
export interface IMediaPlayerSourceObserver {
  /**
   * @ignore
   */
  onPlayerSourceStateChanged?(
    state: MediaPlayerState,
    reason: MediaPlayerReason
  ): void;

  /**
   * @ignore
   */
  onPositionChanged?(positionMs: number, timestampMs: number): void;

  /**
   * @ignore
   */
  onPlayerEvent?(
    eventCode: MediaPlayerEvent,
    elapsedTime: number,
    message: string
  ): void;

  /**
   * @ignore
   */
  onMetaData?(data: Uint8Array, length: number): void;

  /**
   * @ignore
   */
  onPlayBufferUpdated?(playCachedBuffer: number): void;

  /**
   * @ignore
   */
  onPreloadEvent?(src: string, event: PlayerPreloadEvent): void;

  /**
   * @ignore
   */
  onCompleted?(): void;

  /**
   * @ignore
   */
  onAgoraCDNTokenWillExpire?(): void;

  /**
   * @ignore
   */
  onPlayerSrcInfoChanged?(from: SrcInfo, to: SrcInfo): void;

  /**
   * @ignore
   */
  onPlayerInfoUpdated?(info: PlayerUpdatedInfo): void;

  /**
   * @ignore
   */
  onPlayerCacheStats?(stats: CacheStatistics): void;

  /**
   * @ignore
   */
  onPlayerPlaybackStats?(stats: PlayerPlaybackStats): void;

  /**
   * @ignore
   */
  onAudioVolumeIndication?(volume: number): void;
}
