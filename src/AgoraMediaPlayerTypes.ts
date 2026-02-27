import './extension/AgoraMediaPlayerTypesExtension';

/**
 * @ignore
 */
export enum MediaPlayerState {
  /**
   * @ignore
   */
  PlayerStateIdle = 0,
  /**
   * @ignore
   */
  PlayerStateOpening = 1,
  /**
   * @ignore
   */
  PlayerStateOpenCompleted = 2,
  /**
   * @ignore
   */
  PlayerStatePlaying = 3,
  /**
   * @ignore
   */
  PlayerStatePaused = 4,
  /**
   * @ignore
   */
  PlayerStatePlaybackCompleted = 5,
  /**
   * @ignore
   */
  PlayerStatePlaybackAllLoopsCompleted = 6,
  /**
   * @ignore
   */
  PlayerStateStopped = 7,
  /**
   * @ignore
   */
  PlayerStatePausingInternal = 50,
  /**
   * @ignore
   */
  PlayerStateStoppingInternal = 51,
  /**
   * @ignore
   */
  PlayerStateSeekingInternal = 52,
  /**
   * @ignore
   */
  PlayerStateGettingInternal = 53,
  /**
   * @ignore
   */
  PlayerStateNoneInternal = 54,
  /**
   * @ignore
   */
  PlayerStateDoNothingInternal = 55,
  /**
   * @ignore
   */
  PlayerStateSetTrackInternal = 56,
  /**
   * @ignore
   */
  PlayerStateFailed = 100,
}

/**
 * @ignore
 */
export enum MediaPlayerReason {
  /**
   * @ignore
   */
  PlayerReasonNone = 0,
  /**
   * @ignore
   */
  PlayerReasonInvalidArguments = -1,
  /**
   * @ignore
   */
  PlayerReasonInternal = -2,
  /**
   * @ignore
   */
  PlayerReasonNoResource = -3,
  /**
   * @ignore
   */
  PlayerReasonInvalidMediaSource = -4,
  /**
   * @ignore
   */
  PlayerReasonUnknownStreamType = -5,
  /**
   * @ignore
   */
  PlayerReasonObjNotInitialized = -6,
  /**
   * @ignore
   */
  PlayerReasonCodecNotSupported = -7,
  /**
   * @ignore
   */
  PlayerReasonVideoRenderFailed = -8,
  /**
   * @ignore
   */
  PlayerReasonInvalidState = -9,
  /**
   * @ignore
   */
  PlayerReasonUrlNotFound = -10,
  /**
   * @ignore
   */
  PlayerReasonInvalidConnectionState = -11,
  /**
   * @ignore
   */
  PlayerReasonSrcBufferUnderflow = -12,
  /**
   * @ignore
   */
  PlayerReasonInterrupted = -13,
  /**
   * @ignore
   */
  PlayerReasonNotSupported = -14,
  /**
   * @ignore
   */
  PlayerReasonTokenExpired = -15,
  /**
   * @ignore
   */
  PlayerReasonIpExpired = -16,
  /**
   * @ignore
   */
  PlayerReasonUnknown = -17,
}

/**
 * @ignore
 */
export enum MediaStreamType {
  /**
   * @ignore
   */
  StreamTypeUnknown = 0,
  /**
   * @ignore
   */
  StreamTypeVideo = 1,
  /**
   * @ignore
   */
  StreamTypeAudio = 2,
  /**
   * @ignore
   */
  StreamTypeSubtitle = 3,
}

/**
 * @ignore
 */
export enum MediaPlayerEvent {
  /**
   * @ignore
   */
  PlayerEventSeekBegin = 0,
  /**
   * @ignore
   */
  PlayerEventSeekComplete = 1,
  /**
   * @ignore
   */
  PlayerEventSeekError = 2,
  /**
   * @ignore
   */
  PlayerEventAudioTrackChanged = 5,
  /**
   * @ignore
   */
  PlayerEventBufferLow = 6,
  /**
   * @ignore
   */
  PlayerEventBufferRecover = 7,
  /**
   * @ignore
   */
  PlayerEventFreezeStart = 8,
  /**
   * @ignore
   */
  PlayerEventFreezeStop = 9,
  /**
   * @ignore
   */
  PlayerEventSwitchBegin = 10,
  /**
   * @ignore
   */
  PlayerEventSwitchComplete = 11,
  /**
   * @ignore
   */
  PlayerEventSwitchError = 12,
  /**
   * @ignore
   */
  PlayerEventFirstDisplayed = 13,
  /**
   * @ignore
   */
  PlayerEventReachCacheFileMaxCount = 14,
  /**
   * @ignore
   */
  PlayerEventReachCacheFileMaxSize = 15,
  /**
   * @ignore
   */
  PlayerEventTryOpenStart = 16,
  /**
   * @ignore
   */
  PlayerEventTryOpenSucceed = 17,
  /**
   * @ignore
   */
  PlayerEventTryOpenFailed = 18,
  /**
   * @ignore
   */
  PlayerEventHttpRedirect = 19,
}

/**
 * @ignore
 */
export enum PlayerPreloadEvent {
  /**
   * @ignore
   */
  PlayerPreloadEventBegin = 0,
  /**
   * @ignore
   */
  PlayerPreloadEventComplete = 1,
  /**
   * @ignore
   */
  PlayerPreloadEventError = 2,
}

/**
 * @ignore
 */
export class PlayerStreamInfo {
  /**
   * @ignore
   */
  streamIndex?: number;
  /**
   * @ignore
   */
  streamType?: MediaStreamType;
  /**
   * @ignore
   */
  codecName?: string;
  /**
   * @ignore
   */
  language?: string;
  /**
   * @ignore
   */
  videoFrameRate?: number;
  /**
   * @ignore
   */
  videoBitRate?: number;
  /**
   * @ignore
   */
  videoWidth?: number;
  /**
   * @ignore
   */
  videoHeight?: number;
  /**
   * @ignore
   */
  videoRotation?: number;
  /**
   * @ignore
   */
  audioSampleRate?: number;
  /**
   * @ignore
   */
  audioChannels?: number;
  /**
   * @ignore
   */
  audioBitsPerSample?: number;
  /**
   * @ignore
   */
  duration?: number;
}

/**
 * @ignore
 */
export class SrcInfo {
  /**
   * @ignore
   */
  bitrateInKbps?: number;
  /**
   * @ignore
   */
  name?: string;
}

/**
 * @ignore
 */
export enum MediaPlayerMetadataType {
  /**
   * @ignore
   */
  PlayerMetadataTypeUnknown = 0,
  /**
   * @ignore
   */
  PlayerMetadataTypeSei = 1,
}

/**
 * @ignore
 */
export class CacheStatistics {
  /**
   * @ignore
   */
  fileSize?: number;
  /**
   * @ignore
   */
  cacheSize?: number;
  /**
   * @ignore
   */
  downloadSize?: number;
}

/**
 * @ignore
 */
export class PlayerPlaybackStats {
  /**
   * @ignore
   */
  videoFps?: number;
  /**
   * @ignore
   */
  videoBitrateInKbps?: number;
  /**
   * @ignore
   */
  audioBitrateInKbps?: number;
  /**
   * @ignore
   */
  totalBitrateInKbps?: number;
}

/**
 * @ignore
 */
export class PlayerUpdatedInfo {
  /**
   * @ignore
   */
  internalPlayerUuid?: string;
  /**
   * @ignore
   */
  deviceId?: string;
  /**
   * @ignore
   */
  videoHeight?: number;
  /**
   * @ignore
   */
  videoWidth?: number;
  /**
   * @ignore
   */
  audioSampleRate?: number;
  /**
   * @ignore
   */
  audioChannels?: number;
  /**
   * @ignore
   */
  audioBitsPerSample?: number;
}

/**
 * @ignore
 */
export class MediaSource {
  /**
   * @ignore
   */
  url?: string;
  /**
   * @ignore
   */
  uri?: string;
  /**
   * @ignore
   */
  startPos?: number;
  /**
   * @ignore
   */
  autoPlay?: boolean;
  /**
   * @ignore
   */
  enableCache?: boolean;
  /**
   * @ignore
   */
  enableMultiAudioTrack?: boolean;
  /**
   * @ignore
   */
  isAgoraSource?: boolean;
  /**
   * @ignore
   */
  isLiveSource?: boolean;
}
