import './extension/IAgoraRtcEngineExtension';
import {
  AudienceLatencyLevelType,
  AudioAinsMode,
  AudioEffectPreset,
  AudioEncodedFrameObserverConfig,
  AudioProfileType,
  AudioRecordingConfiguration,
  AudioSampleRateType,
  AudioScenarioType,
  AudioSessionOperationRestriction,
  AudioVolumeInfo,
  BeautyOptions,
  CameraFocalLengthType,
  CameraStabilizationMode,
  CaptureBrightnessLevelType,
  ChannelMediaRelayConfiguration,
  ChannelMediaRelayError,
  ChannelMediaRelayState,
  ChannelProfileType,
  ClientRoleChangeFailedReason,
  ClientRoleOptions,
  ClientRoleType,
  CodecCapInfo,
  ColorEnhanceOptions,
  ConnectionChangedReasonType,
  ConnectionStateType,
  DataStreamConfig,
  DeviceInfo,
  EarMonitoringFilterType,
  EchoTestConfiguration,
  EncryptionConfig,
  EncryptionErrorType,
  ErrorCodeType,
  FaceShapeArea,
  FaceShapeAreaOptions,
  FaceShapeBeautyOptions,
  FilterEffectOptions,
  FocalLengthInfo,
  HdrCapability,
  HeadphoneEqualizerPreset,
  IAudioEncodedFrameObserver,
  LastmileProbeConfig,
  LastmileProbeResult,
  LicenseErrorType,
  LiveTranscoding,
  LocalAccessPointConfiguration,
  LocalAudioMixerConfiguration,
  LocalAudioStats,
  LocalAudioStreamReason,
  LocalAudioStreamState,
  LocalTranscoderConfiguration,
  LocalVideoEventType,
  LocalVideoStreamReason,
  LocalVideoStreamState,
  LowlightEnhanceOptions,
  MediaTraceEvent,
  MultipathMode,
  MultipathStats,
  MultipathType,
  NetworkType,
  PermissionType,
  QualityAdaptIndication,
  QualityType,
  RdtState,
  RdtStreamType,
  RecorderStreamInfo,
  Rectangle,
  RemoteAudioState,
  RemoteAudioStateReason,
  RemoteVideoState,
  RemoteVideoStateReason,
  RenewTokenErrorCode,
  RtcStats,
  RtmpStreamPublishReason,
  RtmpStreamPublishState,
  RtmpStreamingEvent,
  ScreenCaptureParameters,
  ScreenCaptureParameters2,
  ScreenScenarioType,
  SegmentationProperty,
  SenderOptions,
  SimulcastConfig,
  SimulcastStreamConfig,
  SimulcastStreamMode,
  SpatialAudioParams,
  StreamPublishState,
  StreamSubscribeState,
  ThreadPriorityType,
  TranscodingVideoStream,
  UplinkNetworkInfo,
  UploadErrorReason,
  UserInfo,
  UserOfflineReasonType,
  VideoApplicationScenarioType,
  VideoCanvas,
  VideoCodecType,
  VideoContentHint,
  VideoDenoiserOptions,
  VideoDimensions,
  VideoEncoderConfiguration,
  VideoFormat,
  VideoLayout,
  VideoMirrorModeType,
  VideoModuleType,
  VideoOrientation,
  VideoQoePreferenceType,
  VideoRenderingTracingInfo,
  VideoStreamType,
  VideoSubscriptionOptions,
  VideoTranscoderError,
  VirtualBackgroundSource,
  VoiceAiTunerType,
  VoiceBeautifierPreset,
  VoiceConversionPreset,
  WatermarkConfig,
  WatermarkOptions,
} from './AgoraBase';
import {
  ContentInspectConfig,
  ContentInspectResult,
  ExtensionContext,
  IAudioSpectrumObserver,
  MediaSourceType,
  RawAudioFrameOpModeType,
  RenderModeType,
  SnapshotConfig,
  VideoSourceType,
} from './AgoraMediaBase';
import { IH265Transcoder } from './IAgoraH265Transcoder';
import { LogConfig, LogFilterType, LogLevel } from './IAgoraLog';
import { AudioMixingDualMonoMode, IMediaEngine } from './IAgoraMediaEngine';
import { IMediaPlayer } from './IAgoraMediaPlayer';
import { IMediaRecorder } from './IAgoraMediaRecorder';
import { IMusicContentCenter } from './IAgoraMusicContentCenter';
import {
  AgoraRhythmPlayerConfig,
  RhythmPlayerReason,
  RhythmPlayerStateType,
} from './IAgoraRhythmPlayer';
import { RtcConnection } from './IAgoraRtcEngineEx';
import { ILocalSpatialAudioEngine } from './IAgoraSpatialAudio';
import { IAudioDeviceManager } from './IAudioDeviceManager';

/**
 * @ignore
 */
export enum MediaDeviceType {
  /**
   * @ignore
   */
  UnknownAudioDevice = -1,
  /**
   * @ignore
   */
  AudioPlayoutDevice = 0,
  /**
   * @ignore
   */
  AudioRecordingDevice = 1,
  /**
   * @ignore
   */
  VideoRenderDevice = 2,
  /**
   * @ignore
   */
  VideoCaptureDevice = 3,
  /**
   * @ignore
   */
  AudioApplicationPlayoutDevice = 4,
  /**
   * @ignore
   */
  AudioVirtualPlayoutDevice = 5,
  /**
   * @ignore
   */
  AudioVirtualRecordingDevice = 6,
}

/**
 * @ignore
 */
export enum AudioMixingStateType {
  /**
   * @ignore
   */
  AudioMixingStatePlaying = 710,
  /**
   * @ignore
   */
  AudioMixingStatePaused = 711,
  /**
   * @ignore
   */
  AudioMixingStateStopped = 713,
  /**
   * @ignore
   */
  AudioMixingStateFailed = 714,
}

/**
 * @ignore
 */
export enum AudioMixingReasonType {
  /**
   * @ignore
   */
  AudioMixingReasonCanNotOpen = 701,
  /**
   * @ignore
   */
  AudioMixingReasonTooFrequentCall = 702,
  /**
   * @ignore
   */
  AudioMixingReasonInterruptedEof = 703,
  /**
   * @ignore
   */
  AudioMixingReasonOneLoopCompleted = 721,
  /**
   * @ignore
   */
  AudioMixingReasonAllLoopsCompleted = 723,
  /**
   * @ignore
   */
  AudioMixingReasonStoppedByUser = 724,
  /**
   * @ignore
   */
  AudioMixingReasonResumedByUser = 726,
  /**
   * @ignore
   */
  AudioMixingReasonOk = 0,
}

/**
 * @ignore
 */
export enum InjectStreamStatus {
  /**
   * @ignore
   */
  InjectStreamStatusStartSuccess = 0,
  /**
   * @ignore
   */
  InjectStreamStatusStartAlreadyExists = 1,
  /**
   * @ignore
   */
  InjectStreamStatusStartUnauthorized = 2,
  /**
   * @ignore
   */
  InjectStreamStatusStartTimedout = 3,
  /**
   * @ignore
   */
  InjectStreamStatusStartFailed = 4,
  /**
   * @ignore
   */
  InjectStreamStatusStopSuccess = 5,
  /**
   * @ignore
   */
  InjectStreamStatusStopNotFound = 6,
  /**
   * @ignore
   */
  InjectStreamStatusStopUnauthorized = 7,
  /**
   * @ignore
   */
  InjectStreamStatusStopTimedout = 8,
  /**
   * @ignore
   */
  InjectStreamStatusStopFailed = 9,
  /**
   * @ignore
   */
  InjectStreamStatusBroken = 10,
}

/**
 * @ignore
 */
export enum AudioEqualizationBandFrequency {
  /**
   * @ignore
   */
  AudioEqualizationBand31 = 0,
  /**
   * @ignore
   */
  AudioEqualizationBand62 = 1,
  /**
   * @ignore
   */
  AudioEqualizationBand125 = 2,
  /**
   * @ignore
   */
  AudioEqualizationBand250 = 3,
  /**
   * @ignore
   */
  AudioEqualizationBand500 = 4,
  /**
   * @ignore
   */
  AudioEqualizationBand1k = 5,
  /**
   * @ignore
   */
  AudioEqualizationBand2k = 6,
  /**
   * @ignore
   */
  AudioEqualizationBand4k = 7,
  /**
   * @ignore
   */
  AudioEqualizationBand8k = 8,
  /**
   * @ignore
   */
  AudioEqualizationBand16k = 9,
}

/**
 * @ignore
 */
export enum AudioReverbType {
  /**
   * @ignore
   */
  AudioReverbDryLevel = 0,
  /**
   * @ignore
   */
  AudioReverbWetLevel = 1,
  /**
   * @ignore
   */
  AudioReverbRoomSize = 2,
  /**
   * @ignore
   */
  AudioReverbWetDelay = 3,
  /**
   * @ignore
   */
  AudioReverbStrength = 4,
}

/**
 * @ignore
 */
export enum StreamFallbackOptions {
  /**
   * @ignore
   */
  StreamFallbackOptionDisabled = 0,
  /**
   * @ignore
   */
  StreamFallbackOptionVideoStreamLow = 1,
  /**
   * @ignore
   */
  StreamFallbackOptionAudioOnly = 2,
  /**
   * @ignore
   */
  StreamFallbackOptionVideoStreamLayer1 = 3,
  /**
   * @ignore
   */
  StreamFallbackOptionVideoStreamLayer2 = 4,
  /**
   * @ignore
   */
  StreamFallbackOptionVideoStreamLayer3 = 5,
  /**
   * @ignore
   */
  StreamFallbackOptionVideoStreamLayer4 = 6,
  /**
   * @ignore
   */
  StreamFallbackOptionVideoStreamLayer5 = 7,
  /**
   * @ignore
   */
  StreamFallbackOptionVideoStreamLayer6 = 8,
}

/**
 * @ignore
 */
export enum PriorityType {
  /**
   * @ignore
   */
  PriorityHigh = 50,
  /**
   * @ignore
   */
  PriorityNormal = 100,
}

/**
 * @ignore
 */
export class LocalVideoStats {
  /**
   * @ignore
   */
  uid?: number;
  /**
   * @ignore
   */
  sentBitrate?: number;
  /**
   * @ignore
   */
  sentFrameRate?: number;
  /**
   * @ignore
   */
  captureFrameRate?: number;
  /**
   * @ignore
   */
  captureFrameWidth?: number;
  /**
   * @ignore
   */
  captureFrameHeight?: number;
  /**
   * @ignore
   */
  regulatedCaptureFrameRate?: number;
  /**
   * @ignore
   */
  regulatedCaptureFrameWidth?: number;
  /**
   * @ignore
   */
  regulatedCaptureFrameHeight?: number;
  /**
   * @ignore
   */
  encoderOutputFrameRate?: number;
  /**
   * @ignore
   */
  encodedFrameWidth?: number;
  /**
   * @ignore
   */
  encodedFrameHeight?: number;
  /**
   * @ignore
   */
  rendererOutputFrameRate?: number;
  /**
   * @ignore
   */
  targetBitrate?: number;
  /**
   * @ignore
   */
  targetFrameRate?: number;
  /**
   * @ignore
   */
  qualityAdaptIndication?: QualityAdaptIndication;
  /**
   * @ignore
   */
  encodedBitrate?: number;
  /**
   * @ignore
   */
  encodedFrameCount?: number;
  /**
   * @ignore
   */
  codecType?: VideoCodecType;
  /**
   * @ignore
   */
  txPacketLossRate?: number;
  /**
   * @ignore
   */
  captureBrightnessLevel?: CaptureBrightnessLevelType;
  /**
   * @ignore
   */
  dualStreamEnabled?: boolean;
  /**
   * @ignore
   */
  hwEncoderAccelerating?: number;
  /**
   * @ignore
   */
  simulcastDimensions?: VideoDimensions[];
  /**
   * @ignore
   */
  encodedFrameDepth?: number;
}

/**
 * @ignore
 */
export class RemoteAudioStats {
  /**
   * @ignore
   */
  uid?: number;
  /**
   * @ignore
   */
  quality?: number;
  /**
   * @ignore
   */
  networkTransportDelay?: number;
  /**
   * @ignore
   */
  jitterBufferDelay?: number;
  /**
   * @ignore
   */
  audioLossRate?: number;
  /**
   * @ignore
   */
  numChannels?: number;
  /**
   * @ignore
   */
  receivedSampleRate?: number;
  /**
   * @ignore
   */
  receivedBitrate?: number;
  /**
   * @ignore
   */
  totalFrozenTime?: number;
  /**
   * @ignore
   */
  frozenRate?: number;
  /**
   * @ignore
   */
  mosValue?: number;
  /**
   * @ignore
   */
  frozenRateByCustomPlcCount?: number;
  /**
   * @ignore
   */
  plcCount?: number;
  /**
   * @ignore
   */
  frozenCntByCustom?: number;
  /**
   * @ignore
   */
  frozenTimeByCustom?: number;
  /**
   * @ignore
   */
  totalActiveTime?: number;
  /**
   * @ignore
   */
  publishDuration?: number;
  /**
   * @ignore
   */
  qoeQuality?: number;
  /**
   * @ignore
   */
  qualityChangedReason?: number;
  /**
   * @ignore
   */
  rxAudioBytes?: number;
  /**
   * @ignore
   */
  e2eDelay?: number;
}

/**
 * @ignore
 */
export class RemoteVideoStats {
  /**
   * @ignore
   */
  uid?: number;
  /**
   * @ignore
   */
  delay?: number;
  /**
   * @ignore
   */
  e2eDelay?: number;
  /**
   * @ignore
   */
  width?: number;
  /**
   * @ignore
   */
  height?: number;
  /**
   * @ignore
   */
  receivedBitrate?: number;
  /**
   * @ignore
   */
  decoderInputFrameRate?: number;
  /**
   * @ignore
   */
  decoderOutputFrameRate?: number;
  /**
   * @ignore
   */
  rendererOutputFrameRate?: number;
  /**
   * @ignore
   */
  frameLossRate?: number;
  /**
   * @ignore
   */
  packetLossRate?: number;
  /**
   * @ignore
   */
  rxStreamType?: VideoStreamType;
  /**
   * @ignore
   */
  totalFrozenTime?: number;
  /**
   * @ignore
   */
  frozenRate?: number;
  /**
   * @ignore
   */
  avSyncTimeMs?: number;
  /**
   * @ignore
   */
  totalActiveTime?: number;
  /**
   * @ignore
   */
  publishDuration?: number;
  /**
   * @ignore
   */
  mosValue?: number;
  /**
   * @ignore
   */
  rxVideoBytes?: number;
}

/**
 * @ignore
 */
export class Region {
  /**
   * @ignore
   */
  uid?: number;
  /**
   * @ignore
   */
  x?: number;
  /**
   * @ignore
   */
  y?: number;
  /**
   * @ignore
   */
  width?: number;
  /**
   * @ignore
   */
  height?: number;
  /**
   * @ignore
   */
  zOrder?: number;
  /**
   * @ignore
   */
  alpha?: number;
  /**
   * @ignore
   */
  renderMode?: RenderModeType;
}

/**
 * @ignore
 */
export class VideoCompositingLayout {
  /**
   * @ignore
   */
  canvasWidth?: number;
  /**
   * @ignore
   */
  canvasHeight?: number;
  /**
   * @ignore
   */
  backgroundColor?: string;
  /**
   * @ignore
   */
  regions?: Region[];
  /**
   * @ignore
   */
  regionCount?: number;
  /**
   * @ignore
   */
  appData?: Uint8Array;
  /**
   * @ignore
   */
  appDataLength?: number;
}

/**
 * @ignore
 */
export class InjectStreamConfig {
  /**
   * @ignore
   */
  width?: number;
  /**
   * @ignore
   */
  height?: number;
  /**
   * @ignore
   */
  videoGop?: number;
  /**
   * @ignore
   */
  videoFramerate?: number;
  /**
   * @ignore
   */
  videoBitrate?: number;
  /**
   * @ignore
   */
  audioSampleRate?: AudioSampleRateType;
  /**
   * @ignore
   */
  audioBitrate?: number;
  /**
   * @ignore
   */
  audioChannels?: number;
}

/**
 * @ignore
 */
export enum RtmpStreamLifeCycleType {
  /**
   * @ignore
   */
  RtmpStreamLifeCycleBind2channel = 1,
  /**
   * @ignore
   */
  RtmpStreamLifeCycleBind2owner = 2,
}

/**
 * @ignore
 */
export class PublisherConfiguration {
  /**
   * @ignore
   */
  width?: number;
  /**
   * @ignore
   */
  height?: number;
  /**
   * @ignore
   */
  framerate?: number;
  /**
   * @ignore
   */
  bitrate?: number;
  /**
   * @ignore
   */
  defaultLayout?: number;
  /**
   * @ignore
   */
  lifecycle?: number;
  /**
   * @ignore
   */
  owner?: boolean;
  /**
   * @ignore
   */
  injectStreamWidth?: number;
  /**
   * @ignore
   */
  injectStreamHeight?: number;
  /**
   * @ignore
   */
  injectStreamUrl?: string;
  /**
   * @ignore
   */
  publishUrl?: string;
  /**
   * @ignore
   */
  rawStreamUrl?: string;
  /**
   * @ignore
   */
  extraInfo?: string;
}

/**
 * @ignore
 */
export enum CameraDirection {
  /**
   * @ignore
   */
  CameraRear = 0,
  /**
   * @ignore
   */
  CameraFront = 1,
}

/**
 * @ignore
 */
export enum CloudProxyType {
  /**
   * @ignore
   */
  NoneProxy = 0,
  /**
   * @ignore
   */
  UdpProxy = 1,
  /**
   * @ignore
   */
  TcpProxy = 2,
}

/**
 * @ignore
 */
export class CameraCapturerConfiguration {
  /**
   * @ignore
   */
  cameraDirection?: CameraDirection;
  /**
   * @ignore
   */
  cameraFocalLengthType?: CameraFocalLengthType;
  /**
   * @ignore
   */
  deviceId?: string;
  /**
   * @ignore
   */
  cameraId?: string;
  /**
   * @ignore
   */
  followEncodeDimensionRatio?: boolean;
  /**
   * @ignore
   */
  format?: VideoFormat;
}

/**
 * @ignore
 */
export class ScreenCaptureConfiguration {
  /**
   * @ignore
   */
  isCaptureWindow?: boolean;
  /**
   * @ignore
   */
  displayId?: number;
  /**
   * @ignore
   */
  screenRect?: Rectangle;
  /**
   * @ignore
   */
  windowId?: number;
  /**
   * @ignore
   */
  params?: ScreenCaptureParameters;
  /**
   * @ignore
   */
  regionRect?: Rectangle;
}

/**
 * @ignore
 */
export class Size {
  /**
   * @ignore
   */
  width?: number;
  /**
   * @ignore
   */
  height?: number;
}

/**
 * @ignore
 */
export class ThumbImageBuffer {
  /**
   * @ignore
   */
  buffer?: Uint8Array;
  /**
   * @ignore
   */
  length?: number;
  /**
   * @ignore
   */
  width?: number;
  /**
   * @ignore
   */
  height?: number;
}

/**
 * @ignore
 */
export enum ScreenCaptureSourceType {
  /**
   * @ignore
   */
  ScreencapturesourcetypeUnknown = -1,
  /**
   * @ignore
   */
  ScreencapturesourcetypeWindow = 0,
  /**
   * @ignore
   */
  ScreencapturesourcetypeScreen = 1,
  /**
   * @ignore
   */
  ScreencapturesourcetypeCustom = 2,
}

/**
 * @ignore
 */
export class ScreenCaptureSourceInfo {
  /**
   * @ignore
   */
  type?: ScreenCaptureSourceType;
  /**
   * @ignore
   */
  sourceId?: number;
  /**
   * @ignore
   */
  sourceName?: string;
  /**
   * @ignore
   */
  thumbImage?: ThumbImageBuffer;
  /**
   * @ignore
   */
  iconImage?: ThumbImageBuffer;
  /**
   * @ignore
   */
  processPath?: string;
  /**
   * @ignore
   */
  sourceTitle?: string;
  /**
   * @ignore
   */
  primaryMonitor?: boolean;
  /**
   * @ignore
   */
  isOccluded?: boolean;
  /**
   * @ignore
   */
  position?: Rectangle;
  /**
   * @ignore
   */
  minimizeWindow?: boolean;
  /**
   * @ignore
   */
  sourceDisplayId?: number;
}

/**
 * @ignore
 */
export class AdvancedAudioOptions {
  /**
   * @ignore
   */
  audioProcessingChannels?: number;
}

/**
 * @ignore
 */
export class ImageTrackOptions {
  /**
   * @ignore
   */
  imageUrl?: string;
  /**
   * @ignore
   */
  fps?: number;
  /**
   * @ignore
   */
  mirrorMode?: VideoMirrorModeType;
}

/**
 * @ignore
 */
export class ChannelMediaOptions {
  /**
   * @ignore
   */
  publishCameraTrack?: boolean;
  /**
   * @ignore
   */
  publishSecondaryCameraTrack?: boolean;
  /**
   * @ignore
   */
  publishThirdCameraTrack?: boolean;
  /**
   * @ignore
   */
  publishFourthCameraTrack?: boolean;
  /**
   * @ignore
   */
  publishMicrophoneTrack?: boolean;
  /**
   * @ignore
   */
  publishScreenCaptureAudio?: boolean;
  /**
   * @ignore
   */
  publishScreenCaptureVideo?: boolean;
  /**
   * @ignore
   */
  publishScreenTrack?: boolean;
  /**
   * @ignore
   */
  publishSecondaryScreenTrack?: boolean;
  /**
   * @ignore
   */
  publishThirdScreenTrack?: boolean;
  /**
   * @ignore
   */
  publishFourthScreenTrack?: boolean;
  /**
   * @ignore
   */
  publishCustomAudioTrack?: boolean;
  /**
   * @ignore
   */
  publishCustomAudioTrackId?: number;
  /**
   * @ignore
   */
  publishCustomVideoTrack?: boolean;
  /**
   * @ignore
   */
  publishEncodedVideoTrack?: boolean;
  /**
   * @ignore
   */
  publishMediaPlayerAudioTrack?: boolean;
  /**
   * @ignore
   */
  publishMediaPlayerVideoTrack?: boolean;
  /**
   * @ignore
   */
  publishTranscodedVideoTrack?: boolean;
  /**
   * @ignore
   */
  publishMixedAudioTrack?: boolean;
  /**
   * @ignore
   */
  publishLipSyncTrack?: boolean;
  /**
   * @ignore
   */
  autoSubscribeAudio?: boolean;
  /**
   * @ignore
   */
  autoSubscribeVideo?: boolean;
  /**
   * @ignore
   */
  enableAudioRecordingOrPlayout?: boolean;
  /**
   * @ignore
   */
  publishMediaPlayerId?: number;
  /**
   * @ignore
   */
  clientRoleType?: ClientRoleType;
  /**
   * @ignore
   */
  audienceLatencyLevel?: AudienceLatencyLevelType;
  /**
   * @ignore
   */
  defaultVideoStreamType?: VideoStreamType;
  /**
   * @ignore
   */
  channelProfile?: ChannelProfileType;
  /**
   * @ignore
   */
  audioDelayMs?: number;
  /**
   * @ignore
   */
  mediaPlayerAudioDelayMs?: number;
  /**
   * @ignore
   */
  token?: string;
  /**
   * @ignore
   */
  enableBuiltInMediaEncryption?: boolean;
  /**
   * @ignore
   */
  publishRhythmPlayerTrack?: boolean;
  /**
   * @ignore
   */
  isInteractiveAudience?: boolean;
  /**
   * @ignore
   */
  customVideoTrackId?: number;
  /**
   * @ignore
   */
  isAudioFilterable?: boolean;
  /**
   * @ignore
   */
  parameters?: string;
  /**
   * @ignore
   */
  enableMultipath?: boolean;
  /**
   * @ignore
   */
  uplinkMultipathMode?: MultipathMode;
  /**
   * @ignore
   */
  downlinkMultipathMode?: MultipathMode;
  /**
   * @ignore
   */
  preferMultipathType?: MultipathType;
}

/**
 * @ignore
 */
export enum ProxyType {
  /**
   * @ignore
   */
  NoneProxyType = 0,
  /**
   * @ignore
   */
  UdpProxyType = 1,
  /**
   * @ignore
   */
  TcpProxyType = 2,
  /**
   * @ignore
   */
  LocalProxyType = 3,
  /**
   * @ignore
   */
  TcpProxyAutoFallbackType = 4,
  /**
   * @ignore
   */
  HttpProxyType = 5,
  /**
   * @ignore
   */
  HttpsProxyType = 6,
}

/**
 * @ignore
 */
export enum FeatureType {
  /**
   * @ignore
   */
  VideoVirtualBackground = 1,
  /**
   * @ignore
   */
  VideoBeautyEffect = 2,
}

/**
 * @ignore
 */
export class LeaveChannelOptions {
  /**
   * @ignore
   */
  stopAudioMixing?: boolean;
  /**
   * @ignore
   */
  stopAllEffect?: boolean;
  /**
   * @ignore
   */
  stopMicrophoneRecording?: boolean;
}

/**
 * @ignore
 */
export interface IRtcEngineEventHandler {
  /**
   * @ignore
   */
  onJoinChannelSuccess?(connection: RtcConnection, elapsed: number): void;

  /**
   * @ignore
   */
  onRejoinChannelSuccess?(connection: RtcConnection, elapsed: number): void;

  /**
   * @ignore
   */
  onProxyConnected?(
    channel: string,
    uid: number,
    proxyType: ProxyType,
    localProxyIp: string,
    elapsed: number
  ): void;

  /**
   * @ignore
   */
  onError?(err: ErrorCodeType, msg: string): void;

  /**
   * @ignore
   */
  onAudioQuality?(
    connection: RtcConnection,
    remoteUid: number,
    quality: QualityType,
    delay: number,
    lost: number
  ): void;

  /**
   * @ignore
   */
  onLastmileProbeResult?(result: LastmileProbeResult): void;

  /**
   * @ignore
   */
  onAudioVolumeIndication?(
    connection: RtcConnection,
    speakers: AudioVolumeInfo[],
    speakerNumber: number,
    totalVolume: number
  ): void;

  /**
   * @ignore
   */
  onLeaveChannel?(connection: RtcConnection, stats: RtcStats): void;

  /**
   * @ignore
   */
  onRtcStats?(connection: RtcConnection, stats: RtcStats): void;

  /**
   * @ignore
   */
  onAudioDeviceStateChanged?(
    deviceId: string,
    deviceType: MediaDeviceType,
    deviceState: MediaDeviceStateType
  ): void;

  /**
   * @ignore
   */
  onAudioMixingPositionChanged?(position: number): void;

  /**
   * @ignore
   */
  onAudioMixingFinished?(): void;

  /**
   * @ignore
   */
  onAudioEffectFinished?(soundId: number): void;

  /**
   * @ignore
   */
  onVideoDeviceStateChanged?(
    deviceId: string,
    deviceType: MediaDeviceType,
    deviceState: MediaDeviceStateType
  ): void;

  /**
   * @ignore
   */
  onNetworkQuality?(
    connection: RtcConnection,
    remoteUid: number,
    txQuality: QualityType,
    rxQuality: QualityType
  ): void;

  /**
   * @ignore
   */
  onIntraRequestReceived?(connection: RtcConnection): void;

  /**
   * @ignore
   */
  onUplinkNetworkInfoUpdated?(info: UplinkNetworkInfo): void;

  /**
   * @ignore
   */
  onLastmileQuality?(quality: QualityType): void;

  /**
   * @ignore
   */
  onFirstLocalVideoFrame?(
    source: VideoSourceType,
    width: number,
    height: number,
    elapsed: number
  ): void;

  /**
   * @ignore
   */
  onFirstLocalVideoFramePublished?(
    connection: RtcConnection,
    elapsed: number
  ): void;

  /**
   * @ignore
   */
  onFirstRemoteVideoDecoded?(
    connection: RtcConnection,
    remoteUid: number,
    width: number,
    height: number,
    elapsed: number
  ): void;

  /**
   * @ignore
   */
  onVideoSizeChanged?(
    connection: RtcConnection,
    sourceType: VideoSourceType,
    uid: number,
    width: number,
    height: number,
    rotation: number
  ): void;

  /**
   * @ignore
   */
  onLocalVideoEvent?(source: VideoSourceType, event: LocalVideoEventType): void;

  /**
   * @ignore
   */
  onLocalVideoStateChanged?(
    source: VideoSourceType,
    state: LocalVideoStreamState,
    reason: LocalVideoStreamReason
  ): void;

  /**
   * @ignore
   */
  onRemoteVideoStateChanged?(
    connection: RtcConnection,
    remoteUid: number,
    state: RemoteVideoState,
    reason: RemoteVideoStateReason,
    elapsed: number
  ): void;

  /**
   * @ignore
   */
  onFirstRemoteVideoFrame?(
    connection: RtcConnection,
    remoteUid: number,
    width: number,
    height: number,
    elapsed: number
  ): void;

  /**
   * @ignore
   */
  onUserJoined?(
    connection: RtcConnection,
    remoteUid: number,
    elapsed: number
  ): void;

  /**
   * @ignore
   */
  onUserOffline?(
    connection: RtcConnection,
    remoteUid: number,
    reason: UserOfflineReasonType
  ): void;

  /**
   * @ignore
   */
  onUserMuteAudio?(
    connection: RtcConnection,
    remoteUid: number,
    muted: boolean
  ): void;

  /**
   * @ignore
   */
  onUserMuteVideo?(
    connection: RtcConnection,
    remoteUid: number,
    muted: boolean
  ): void;

  /**
   * @ignore
   */
  onUserEnableVideo?(
    connection: RtcConnection,
    remoteUid: number,
    enabled: boolean
  ): void;

  /**
   * @ignore
   */
  onUserStateChanged?(
    connection: RtcConnection,
    remoteUid: number,
    state: number
  ): void;

  /**
   * @ignore
   */
  onUserEnableLocalVideo?(
    connection: RtcConnection,
    remoteUid: number,
    enabled: boolean
  ): void;

  /**
   * @ignore
   */
  onRemoteAudioStats?(connection: RtcConnection, stats: RemoteAudioStats): void;

  /**
   * @ignore
   */
  onLocalAudioStats?(connection: RtcConnection, stats: LocalAudioStats): void;

  /**
   * @ignore
   */
  onLocalVideoStats?(
    connection: RtcConnection,
    sourceType: VideoSourceType,
    stats: LocalVideoStats
  ): void;

  /**
   * @ignore
   */
  onRemoteVideoStats?(connection: RtcConnection, stats: RemoteVideoStats): void;

  /**
   * @ignore
   */
  onCameraReady?(): void;

  /**
   * @ignore
   */
  onCameraFocusAreaChanged?(
    x: number,
    y: number,
    width: number,
    height: number
  ): void;

  /**
   * @ignore
   */
  onCameraExposureAreaChanged?(
    x: number,
    y: number,
    width: number,
    height: number
  ): void;

  /**
   * @ignore
   */
  onFacePositionChanged?(
    imageWidth: number,
    imageHeight: number,
    vecRectangle: Rectangle[],
    vecDistance: number[],
    numFaces: number
  ): void;

  /**
   * @ignore
   */
  onVideoStopped?(): void;

  /**
   * @ignore
   */
  onAudioMixingStateChanged?(
    state: AudioMixingStateType,
    reason: AudioMixingReasonType
  ): void;

  /**
   * @ignore
   */
  onRhythmPlayerStateChanged?(
    state: RhythmPlayerStateType,
    reason: RhythmPlayerReason
  ): void;

  /**
   * @ignore
   */
  onConnectionLost?(connection: RtcConnection): void;

  /**
   * @ignore
   */
  onConnectionInterrupted?(connection: RtcConnection): void;

  /**
   * @ignore
   */
  onConnectionBanned?(connection: RtcConnection): void;

  /**
   * @ignore
   */
  onStreamMessage?(
    connection: RtcConnection,
    remoteUid: number,
    streamId: number,
    data: Uint8Array,
    length: number,
    sentTs: number
  ): void;

  /**
   * @ignore
   */
  onStreamMessageError?(
    connection: RtcConnection,
    remoteUid: number,
    streamId: number,
    code: ErrorCodeType,
    missed: number,
    cached: number
  ): void;

  /**
   * @ignore
   */
  onRdtMessage?(
    connection: RtcConnection,
    userId: number,
    type: RdtStreamType,
    data: string,
    length: number
  ): void;

  /**
   * @ignore
   */
  onRdtStateChanged?(
    connection: RtcConnection,
    userId: number,
    state: RdtState
  ): void;

  /**
   * @ignore
   */
  onMediaControlMessage?(
    connection: RtcConnection,
    userId: number,
    data: string,
    length: number
  ): void;

  /**
   * @ignore
   */
  onRequestToken?(connection: RtcConnection): void;

  /**
   * @ignore
   */
  onTokenPrivilegeWillExpire?(connection: RtcConnection, token: string): void;

  /**
   * @ignore
   */
  onLicenseValidationFailure?(
    connection: RtcConnection,
    reason: LicenseErrorType
  ): void;

  /**
   * @ignore
   */
  onFirstLocalAudioFramePublished?(
    connection: RtcConnection,
    elapsed: number
  ): void;

  /**
   * @ignore
   */
  onFirstRemoteAudioDecoded?(
    connection: RtcConnection,
    uid: number,
    elapsed: number
  ): void;

  /**
   * @ignore
   */
  onFirstRemoteAudioFrame?(
    connection: RtcConnection,
    userId: number,
    elapsed: number
  ): void;

  /**
   * @ignore
   */
  onLocalAudioStateChanged?(
    connection: RtcConnection,
    state: LocalAudioStreamState,
    reason: LocalAudioStreamReason
  ): void;

  /**
   * @ignore
   */
  onRemoteAudioStateChanged?(
    connection: RtcConnection,
    remoteUid: number,
    state: RemoteAudioState,
    reason: RemoteAudioStateReason,
    elapsed: number
  ): void;

  /**
   * @ignore
   */
  onActiveSpeaker?(connection: RtcConnection, uid: number): void;

  /**
   * @ignore
   */
  onContentInspectResult?(result: ContentInspectResult): void;

  /**
   * @ignore
   */
  onSnapshotTaken?(
    connection: RtcConnection,
    uid: number,
    filePath: string,
    width: number,
    height: number,
    errCode: number
  ): void;

  /**
   * @ignore
   */
  onClientRoleChanged?(
    connection: RtcConnection,
    oldRole: ClientRoleType,
    newRole: ClientRoleType,
    newRoleOptions: ClientRoleOptions
  ): void;

  /**
   * @ignore
   */
  onClientRoleChangeFailed?(
    connection: RtcConnection,
    reason: ClientRoleChangeFailedReason,
    currentRole: ClientRoleType
  ): void;

  /**
   * @ignore
   */
  onAudioDeviceVolumeChanged?(
    deviceType: MediaDeviceType,
    volume: number,
    muted: boolean
  ): void;

  /**
   * @ignore
   */
  onRtmpStreamingStateChanged?(
    url: string,
    state: RtmpStreamPublishState,
    reason: RtmpStreamPublishReason
  ): void;

  /**
   * @ignore
   */
  onRtmpStreamingEvent?(url: string, eventCode: RtmpStreamingEvent): void;

  /**
   * @ignore
   */
  onTranscodingUpdated?(): void;

  /**
   * @ignore
   */
  onAudioRoutingChanged?(routing: number): void;

  /**
   * @ignore
   */
  onChannelMediaRelayStateChanged?(
    state: ChannelMediaRelayState,
    code: ChannelMediaRelayError
  ): void;

  /**
   * @ignore
   */
  onRemoteSubscribeFallbackToAudioOnly?(
    uid: number,
    isFallbackOrRecover: boolean
  ): void;

  /**
   * @ignore
   */
  onRemoteAudioTransportStats?(
    connection: RtcConnection,
    remoteUid: number,
    delay: number,
    lost: number,
    rxKBitRate: number
  ): void;

  /**
   * @ignore
   */
  onRemoteVideoTransportStats?(
    connection: RtcConnection,
    remoteUid: number,
    delay: number,
    lost: number,
    rxKBitRate: number
  ): void;

  /**
   * @ignore
   */
  onConnectionStateChanged?(
    connection: RtcConnection,
    state: ConnectionStateType,
    reason: ConnectionChangedReasonType
  ): void;

  /**
   * @ignore
   */
  onNetworkTypeChanged?(connection: RtcConnection, type: NetworkType): void;

  /**
   * @ignore
   */
  onEncryptionError?(
    connection: RtcConnection,
    errorType: EncryptionErrorType
  ): void;

  /**
   * @ignore
   */
  onPermissionError?(permissionType: PermissionType): void;

  /**
   * @ignore
   */
  onPermissionGranted?(permissionType: PermissionType): void;

  /**
   * @ignore
   */
  onLocalUserRegistered?(uid: number, userAccount: string): void;

  /**
   * @ignore
   */
  onUserInfoUpdated?(uid: number, info: UserInfo): void;

  /**
   * @ignore
   */
  onUserAccountUpdated?(
    connection: RtcConnection,
    remoteUid: number,
    remoteUserAccount: string
  ): void;

  /**
   * @ignore
   */
  onVideoRenderingTracingResult?(
    connection: RtcConnection,
    uid: number,
    currentEvent: MediaTraceEvent,
    tracingInfo: VideoRenderingTracingInfo
  ): void;

  /**
   * @ignore
   */
  onLocalVideoTranscoderError?(
    stream: TranscodingVideoStream,
    error: VideoTranscoderError
  ): void;

  /**
   * @ignore
   */
  onUploadLogResult?(
    connection: RtcConnection,
    requestId: string,
    success: boolean,
    reason: UploadErrorReason
  ): void;

  /**
   * @ignore
   */
  onAudioSubscribeStateChanged?(
    channel: string,
    uid: number,
    oldState: StreamSubscribeState,
    newState: StreamSubscribeState,
    elapseSinceLastState: number
  ): void;

  /**
   * @ignore
   */
  onVideoSubscribeStateChanged?(
    channel: string,
    uid: number,
    oldState: StreamSubscribeState,
    newState: StreamSubscribeState,
    elapseSinceLastState: number
  ): void;

  /**
   * @ignore
   */
  onAudioPublishStateChanged?(
    channel: string,
    oldState: StreamPublishState,
    newState: StreamPublishState,
    elapseSinceLastState: number
  ): void;

  /**
   * @ignore
   */
  onVideoPublishStateChanged?(
    source: VideoSourceType,
    channel: string,
    oldState: StreamPublishState,
    newState: StreamPublishState,
    elapseSinceLastState: number
  ): void;

  /**
   * @ignore
   */
  onTranscodedStreamLayoutInfo?(
    connection: RtcConnection,
    uid: number,
    width: number,
    height: number,
    layoutCount: number,
    layoutlist: VideoLayout[]
  ): void;

  /**
   * @ignore
   */
  onAudioMetadataReceived?(
    connection: RtcConnection,
    uid: number,
    metadata: string,
    length: number
  ): void;

  /**
   * @ignore
   */
  onExtensionEventWithContext?(
    context: ExtensionContext,
    key: string,
    value: string
  ): void;

  /**
   * @ignore
   */
  onExtensionStartedWithContext?(context: ExtensionContext): void;

  /**
   * @ignore
   */
  onExtensionStoppedWithContext?(context: ExtensionContext): void;

  /**
   * @ignore
   */
  onExtensionErrorWithContext?(
    context: ExtensionContext,
    error: number,
    message: string
  ): void;

  /**
   * @ignore
   */
  onSetRtmFlagResult?(connection: RtcConnection, code: number): void;

  /**
   * @ignore
   */
  onMultipathStats?(connection: RtcConnection, stats: MultipathStats): void;

  /**
   * @ignore
   */
  onRenewTokenResult?(
    connection: RtcConnection,
    token: string,
    code: RenewTokenErrorCode
  ): void;
}

/**
 * @ignore
 */
export abstract class IVideoDeviceManager {
  /**
   * @ignore
   */
  abstract enumerateVideoDevices(): VideoDeviceInfo[];

  /**
   * @ignore
   */
  abstract setDevice(deviceIdUTF8: string): number;

  /**
   * @ignore
   */
  abstract getDevice(): string;

  /**
   * @ignore
   */
  abstract numberOfCapabilities(deviceIdUTF8: string): number;

  /**
   * @ignore
   */
  abstract getCapability(
    deviceIdUTF8: string,
    deviceCapabilityNumber: number
  ): VideoFormat;

  /**
   * @ignore
   */
  abstract startDeviceTest(hwnd: any): number;

  /**
   * @ignore
   */
  abstract stopDeviceTest(): number;

  /**
   * @ignore
   */
  abstract release(): void;
}

/**
 * @ignore
 */
export enum VideoEffectNodeId {
  /**
   * @ignore
   */
  Beauty = 1 << 0,
  /**
   * @ignore
   */
  StyleMakeup = 1 << 1,
  /**
   * @ignore
   */
  Filter = 1 << 2,
}

/**
 * @ignore
 */
export enum VideoEffectAction {
  /**
   * @ignore
   */
  Save = 1,
  /**
   * @ignore
   */
  Reset = 2,
}

/**
 * @ignore
 */
export abstract class IVideoEffectObject {
  /**
   * @ignore
   */
  abstract addOrUpdateVideoEffect(nodeId: number, templateName: string): number;

  /**
   * @ignore
   */
  abstract removeVideoEffect(nodeId: number): number;

  /**
   * @ignore
   */
  abstract performVideoEffectAction(
    nodeId: number,
    actionId: VideoEffectAction
  ): number;

  /**
   * @ignore
   */
  abstract setVideoEffectFloatParam(
    option: string,
    key: string,
    param: number
  ): number;

  /**
   * @ignore
   */
  abstract setVideoEffectIntParam(
    option: string,
    key: string,
    param: number
  ): number;

  /**
   * @ignore
   */
  abstract setVideoEffectBoolParam(
    option: string,
    key: string,
    param: boolean
  ): number;

  /**
   * @ignore
   */
  abstract getVideoEffectFloatParam(option: string, key: string): number;

  /**
   * @ignore
   */
  abstract getVideoEffectIntParam(option: string, key: string): number;

  /**
   * @ignore
   */
  abstract getVideoEffectBoolParam(option: string, key: string): boolean;
}

/**
 * @ignore
 */
export class RtcEngineContext {
  /**
   * @ignore
   */
  appId?: string;
  /**
   * @ignore
   */
  channelProfile?: ChannelProfileType;
  /**
   * @ignore
   */
  license?: string;
  /**
   * @ignore
   */
  audioScenario?: AudioScenarioType;
  /**
   * @ignore
   */
  areaCode?: number;
  /**
   * @ignore
   */
  logConfig?: LogConfig;
  /**
   * @ignore
   */
  threadPriority?: ThreadPriorityType;
  /**
   * @ignore
   */
  useExternalEglContext?: boolean;
  /**
   * @ignore
   */
  domainLimit?: boolean;
  /**
   * @ignore
   */
  autoRegisterAgoraExtensions?: boolean;
}

/**
 * @ignore
 */
export enum MetadataType {
  /**
   * @ignore
   */
  UnknownMetadata = -1,
  /**
   * @ignore
   */
  VideoMetadata = 0,
}

/**
 * @ignore
 */
export enum MaxMetadataSizeType {
  /**
   * @ignore
   */
  InvalidMetadataSizeInByte = -1,
  /**
   * @ignore
   */
  DefaultMetadataSizeInByte = 512,
  /**
   * @ignore
   */
  MaxMetadataSizeInByte = 1024,
}

/**
 * @ignore
 */
export class Metadata {
  /**
   * @ignore
   */
  channelId?: string;
  /**
   * @ignore
   */
  uid?: number;
  /**
   * @ignore
   */
  size?: number;
  /**
   * @ignore
   */
  buffer?: Uint8Array;
  /**
   * @ignore
   */
  timeStampMs?: number;
}

/**
 * @ignore
 */
export interface IMetadataObserver {
  /**
   * @ignore
   */
  onMetadataReceived?(metadata: Metadata): void;
}

/**
 * @ignore
 */
export enum DirectCdnStreamingReason {
  /**
   * @ignore
   */
  DirectCdnStreamingReasonOk = 0,
  /**
   * @ignore
   */
  DirectCdnStreamingReasonFailed = 1,
  /**
   * @ignore
   */
  DirectCdnStreamingReasonAudioPublication = 2,
  /**
   * @ignore
   */
  DirectCdnStreamingReasonVideoPublication = 3,
  /**
   * @ignore
   */
  DirectCdnStreamingReasonNetConnect = 4,
  /**
   * @ignore
   */
  DirectCdnStreamingReasonBadName = 5,
}

/**
 * @ignore
 */
export enum DirectCdnStreamingState {
  /**
   * @ignore
   */
  DirectCdnStreamingStateIdle = 0,
  /**
   * @ignore
   */
  DirectCdnStreamingStateRunning = 1,
  /**
   * @ignore
   */
  DirectCdnStreamingStateStopped = 2,
  /**
   * @ignore
   */
  DirectCdnStreamingStateFailed = 3,
  /**
   * @ignore
   */
  DirectCdnStreamingStateRecovering = 4,
}

/**
 * @ignore
 */
export class DirectCdnStreamingStats {
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
  fps?: number;
  /**
   * @ignore
   */
  videoBitrate?: number;
  /**
   * @ignore
   */
  audioBitrate?: number;
}

/**
 * @ignore
 */
export interface IDirectCdnStreamingEventHandler {
  /**
   * @ignore
   */
  onDirectCdnStreamingStateChanged?(
    state: DirectCdnStreamingState,
    reason: DirectCdnStreamingReason,
    message: string
  ): void;

  /**
   * @ignore
   */
  onDirectCdnStreamingStats?(stats: DirectCdnStreamingStats): void;
}

/**
 * @ignore
 */
export class DirectCdnStreamingMediaOptions {
  /**
   * @ignore
   */
  publishCameraTrack?: boolean;
  /**
   * @ignore
   */
  publishMicrophoneTrack?: boolean;
  /**
   * @ignore
   */
  publishCustomAudioTrack?: boolean;
  /**
   * @ignore
   */
  publishCustomVideoTrack?: boolean;
  /**
   * @ignore
   */
  publishMediaPlayerAudioTrack?: boolean;
  /**
   * @ignore
   */
  publishMediaPlayerId?: number;
  /**
   * @ignore
   */
  customVideoTrackId?: number;
}

/**
 * @ignore
 */
export class ExtensionInfo {
  /**
   * @ignore
   */
  mediaSourceType?: MediaSourceType;
  /**
   * @ignore
   */
  remoteUid?: number;
  /**
   * @ignore
   */
  channelId?: string;
  /**
   * @ignore
   */
  localUid?: number;
}

/**
 * @ignore
 */
export abstract class IRtcEngine {
  /**
   * @ignore
   */
  abstract initialize(context: RtcEngineContext): number;

  /**
   * @ignore
   */
  abstract getVersion(): SDKBuildInfo;

  /**
   * @ignore
   */
  abstract getErrorDescription(code: number): string;

  /**
   * @ignore
   */
  abstract queryCodecCapability(): { codecInfo: CodecCapInfo[]; size: number };

  /**
   * @ignore
   */
  abstract queryDeviceScore(): number;

  /**
   * @ignore
   */
  abstract preloadChannel(
    token: string,
    channelId: string,
    uid: number
  ): number;

  /**
   * @ignore
   */
  abstract preloadChannelWithUserAccount(
    token: string,
    channelId: string,
    userAccount: string
  ): number;

  /**
   * @ignore
   */
  abstract updatePreloadChannelToken(token: string): number;

  /**
   * @ignore
   */
  abstract joinChannel(
    token: string,
    channelId: string,
    uid: number,
    options: ChannelMediaOptions
  ): number;

  /**
   * @ignore
   */
  abstract updateChannelMediaOptions(options: ChannelMediaOptions): number;

  /**
   * @ignore
   */
  abstract leaveChannel(options?: LeaveChannelOptions): number;

  /**
   * @ignore
   */
  abstract renewToken(token: string): number;

  /**
   * @ignore
   */
  abstract setChannelProfile(profile: ChannelProfileType): number;

  /**
   * @ignore
   */
  abstract setClientRole(
    role: ClientRoleType,
    options?: ClientRoleOptions
  ): number;

  /**
   * @ignore
   */
  abstract startEchoTest(config: EchoTestConfiguration): number;

  /**
   * @ignore
   */
  abstract stopEchoTest(): number;

  /**
   * @ignore
   */
  abstract enableMultiCamera(
    enabled: boolean,
    config: CameraCapturerConfiguration
  ): number;

  /**
   * @ignore
   */
  abstract enableVideo(): number;

  /**
   * @ignore
   */
  abstract disableVideo(): number;

  /**
   * @ignore
   */
  abstract startPreview(sourceType?: VideoSourceType): number;

  /**
   * @ignore
   */
  abstract stopPreview(sourceType?: VideoSourceType): number;

  /**
   * @ignore
   */
  abstract startLastmileProbeTest(config: LastmileProbeConfig): number;

  /**
   * @ignore
   */
  abstract stopLastmileProbeTest(): number;

  /**
   * @ignore
   */
  abstract setVideoEncoderConfiguration(
    config: VideoEncoderConfiguration
  ): number;

  /**
   * @ignore
   */
  abstract setBeautyEffectOptions(
    enabled: boolean,
    options: BeautyOptions,
    type?: MediaSourceType
  ): number;

  /**
   * @ignore
   */
  abstract setFaceShapeBeautyOptions(
    enabled: boolean,
    options: FaceShapeBeautyOptions,
    type?: MediaSourceType
  ): number;

  /**
   * @ignore
   */
  abstract setFaceShapeAreaOptions(
    options: FaceShapeAreaOptions,
    type?: MediaSourceType
  ): number;

  /**
   * @ignore
   */
  abstract getFaceShapeBeautyOptions(
    type?: MediaSourceType
  ): FaceShapeBeautyOptions;

  /**
   * @ignore
   */
  abstract getFaceShapeAreaOptions(
    shapeArea: FaceShapeArea,
    type?: MediaSourceType
  ): FaceShapeAreaOptions;

  /**
   * @ignore
   */
  abstract setFilterEffectOptions(
    enabled: boolean,
    options: FilterEffectOptions,
    type?: MediaSourceType
  ): number;

  /**
   * @ignore
   */
  abstract createVideoEffectObject(
    bundlePath: string,
    type?: MediaSourceType
  ): IVideoEffectObject;

  /**
   * @ignore
   */
  abstract destroyVideoEffectObject(
    videoEffectObject: IVideoEffectObject
  ): number;

  /**
   * @ignore
   */
  abstract setLowlightEnhanceOptions(
    enabled: boolean,
    options: LowlightEnhanceOptions,
    type?: MediaSourceType
  ): number;

  /**
   * @ignore
   */
  abstract setVideoDenoiserOptions(
    enabled: boolean,
    options: VideoDenoiserOptions,
    type?: MediaSourceType
  ): number;

  /**
   * @ignore
   */
  abstract setColorEnhanceOptions(
    enabled: boolean,
    options: ColorEnhanceOptions,
    type?: MediaSourceType
  ): number;

  /**
   * @ignore
   */
  abstract enableVirtualBackground(
    enabled: boolean,
    backgroundSource: VirtualBackgroundSource,
    segproperty: SegmentationProperty,
    type?: MediaSourceType
  ): number;

  /**
   * @ignore
   */
  abstract setupRemoteVideo(canvas: VideoCanvas): number;

  /**
   * @ignore
   */
  abstract setupLocalVideo(canvas: VideoCanvas): number;

  /**
   * @ignore
   */
  abstract setVideoScenario(scenarioType: VideoApplicationScenarioType): number;

  /**
   * @ignore
   */
  abstract setVideoQoEPreference(qoePreference: VideoQoePreferenceType): number;

  /**
   * @ignore
   */
  abstract enableAudio(): number;

  /**
   * @ignore
   */
  abstract disableAudio(): number;

  /**
   * @ignore
   */
  abstract setAudioProfile(
    profile: AudioProfileType,
    scenario?: AudioScenarioType
  ): number;

  /**
   * @ignore
   */
  abstract setAudioScenario(scenario: AudioScenarioType): number;

  /**
   * @ignore
   */
  abstract enableLocalAudio(enabled: boolean): number;

  /**
   * @ignore
   */
  abstract muteLocalAudioStream(mute: boolean): number;

  /**
   * @ignore
   */
  abstract muteAllRemoteAudioStreams(mute: boolean): number;

  /**
   * @ignore
   */
  abstract muteRemoteAudioStream(uid: number, mute: boolean): number;

  /**
   * @ignore
   */
  abstract muteLocalVideoStream(mute: boolean): number;

  /**
   * @ignore
   */
  abstract enableLocalVideo(enabled: boolean): number;

  /**
   * @ignore
   */
  abstract muteAllRemoteVideoStreams(mute: boolean): number;

  /**
   * @ignore
   */
  abstract setRemoteDefaultVideoStreamType(streamType: VideoStreamType): number;

  /**
   * @ignore
   */
  abstract muteRemoteVideoStream(uid: number, mute: boolean): number;

  /**
   * @ignore
   */
  abstract setRemoteVideoStreamType(
    uid: number,
    streamType: VideoStreamType
  ): number;

  /**
   * @ignore
   */
  abstract setRemoteVideoSubscriptionOptions(
    uid: number,
    options: VideoSubscriptionOptions
  ): number;

  /**
   * @ignore
   */
  abstract setSubscribeAudioBlocklist(
    uidList: number[],
    uidNumber: number
  ): number;

  /**
   * @ignore
   */
  abstract setSubscribeAudioAllowlist(
    uidList: number[],
    uidNumber: number
  ): number;

  /**
   * @ignore
   */
  abstract setSubscribeVideoBlocklist(
    uidList: number[],
    uidNumber: number
  ): number;

  /**
   * @ignore
   */
  abstract setSubscribeVideoAllowlist(
    uidList: number[],
    uidNumber: number
  ): number;

  /**
   * @ignore
   */
  abstract enableAudioVolumeIndication(
    interval: number,
    smooth: number,
    reportVad: boolean
  ): number;

  /**
   * @ignore
   */
  abstract startAudioRecording(config: AudioRecordingConfiguration): number;

  /**
   * @ignore
   */
  abstract registerAudioEncodedFrameObserver(
    config: AudioEncodedFrameObserverConfig,
    observer: IAudioEncodedFrameObserver
  ): number;

  /**
   * @ignore
   */
  abstract stopAudioRecording(): number;

  /**
   * @ignore
   */
  abstract createMediaPlayer(): IMediaPlayer;

  /**
   * @ignore
   */
  abstract destroyMediaPlayer(mediaPlayer: IMediaPlayer): number;

  /**
   * @ignore
   */
  abstract createMediaRecorder(info: RecorderStreamInfo): IMediaRecorder;

  /**
   * @ignore
   */
  abstract destroyMediaRecorder(mediaRecorder: IMediaRecorder): number;

  /**
   * @ignore
   */
  abstract startAudioMixing(
    filePath: string,
    loopback: boolean,
    cycle: number,
    startPos?: number
  ): number;

  /**
   * @ignore
   */
  abstract stopAudioMixing(): number;

  /**
   * @ignore
   */
  abstract pauseAudioMixing(): number;

  /**
   * @ignore
   */
  abstract resumeAudioMixing(): number;

  /**
   * @ignore
   */
  abstract selectAudioTrack(index: number): number;

  /**
   * @ignore
   */
  abstract getAudioTrackCount(): number;

  /**
   * @ignore
   */
  abstract adjustAudioMixingVolume(volume: number): number;

  /**
   * @ignore
   */
  abstract adjustAudioMixingPublishVolume(volume: number): number;

  /**
   * @ignore
   */
  abstract getAudioMixingPublishVolume(): number;

  /**
   * @ignore
   */
  abstract adjustAudioMixingPlayoutVolume(volume: number): number;

  /**
   * @ignore
   */
  abstract getAudioMixingPlayoutVolume(): number;

  /**
   * @ignore
   */
  abstract getAudioMixingDuration(): number;

  /**
   * @ignore
   */
  abstract getAudioMixingCurrentPosition(): number;

  /**
   * @ignore
   */
  abstract setAudioMixingPosition(pos: number): number;

  /**
   * @ignore
   */
  abstract setAudioMixingDualMonoMode(mode: AudioMixingDualMonoMode): number;

  /**
   * @ignore
   */
  abstract setAudioMixingPitch(pitch: number): number;

  /**
   * @ignore
   */
  abstract setAudioMixingPlaybackSpeed(speed: number): number;

  /**
   * @ignore
   */
  abstract getEffectsVolume(): number;

  /**
   * @ignore
   */
  abstract setEffectsVolume(volume: number): number;

  /**
   * @ignore
   */
  abstract preloadEffect(
    soundId: number,
    filePath: string,
    startPos?: number
  ): number;

  /**
   * @ignore
   */
  abstract playEffect(
    soundId: number,
    filePath: string,
    loopCount: number,
    pitch: number,
    pan: number,
    gain: number,
    publish?: boolean,
    startPos?: number
  ): number;

  /**
   * @ignore
   */
  abstract playAllEffects(
    loopCount: number,
    pitch: number,
    pan: number,
    gain: number,
    publish?: boolean
  ): number;

  /**
   * @ignore
   */
  abstract getVolumeOfEffect(soundId: number): number;

  /**
   * @ignore
   */
  abstract setVolumeOfEffect(soundId: number, volume: number): number;

  /**
   * @ignore
   */
  abstract pauseEffect(soundId: number): number;

  /**
   * @ignore
   */
  abstract pauseAllEffects(): number;

  /**
   * @ignore
   */
  abstract resumeEffect(soundId: number): number;

  /**
   * @ignore
   */
  abstract resumeAllEffects(): number;

  /**
   * @ignore
   */
  abstract stopEffect(soundId: number): number;

  /**
   * @ignore
   */
  abstract stopAllEffects(): number;

  /**
   * @ignore
   */
  abstract unloadEffect(soundId: number): number;

  /**
   * @ignore
   */
  abstract unloadAllEffects(): number;

  /**
   * @ignore
   */
  abstract getEffectDuration(filePath: string): number;

  /**
   * @ignore
   */
  abstract setEffectPosition(soundId: number, pos: number): number;

  /**
   * @ignore
   */
  abstract getEffectCurrentPosition(soundId: number): number;

  /**
   * @ignore
   */
  abstract enableSoundPositionIndication(enabled: boolean): number;

  /**
   * @ignore
   */
  abstract setRemoteVoicePosition(
    uid: number,
    pan: number,
    gain: number
  ): number;

  /**
   * @ignore
   */
  abstract enableSpatialAudio(enabled: boolean): number;

  /**
   * @ignore
   */
  abstract setRemoteUserSpatialAudioParams(
    uid: number,
    params: SpatialAudioParams
  ): number;

  /**
   * @ignore
   */
  abstract setVoiceBeautifierPreset(preset: VoiceBeautifierPreset): number;

  /**
   * @ignore
   */
  abstract setAudioEffectPreset(preset: AudioEffectPreset): number;

  /**
   * @ignore
   */
  abstract setVoiceConversionPreset(preset: VoiceConversionPreset): number;

  /**
   * @ignore
   */
  abstract setAudioEffectParameters(
    preset: AudioEffectPreset,
    param1: number,
    param2: number
  ): number;

  /**
   * @ignore
   */
  abstract setVoiceBeautifierParameters(
    preset: VoiceBeautifierPreset,
    param1: number,
    param2: number
  ): number;

  /**
   * @ignore
   */
  abstract setVoiceConversionParameters(
    preset: VoiceConversionPreset,
    param1: number,
    param2: number
  ): number;

  /**
   * @ignore
   */
  abstract setLocalVoicePitch(pitch: number): number;

  /**
   * @ignore
   */
  abstract setLocalVoiceFormant(formantRatio: number): number;

  /**
   * @ignore
   */
  abstract setLocalVoiceEqualization(
    bandFrequency: AudioEqualizationBandFrequency,
    bandGain: number
  ): number;

  /**
   * @ignore
   */
  abstract setLocalVoiceReverb(
    reverbKey: AudioReverbType,
    value: number
  ): number;

  /**
   * @ignore
   */
  abstract setHeadphoneEQPreset(preset: HeadphoneEqualizerPreset): number;

  /**
   * @ignore
   */
  abstract setHeadphoneEQParameters(lowGain: number, highGain: number): number;

  /**
   * @ignore
   */
  abstract enableVoiceAITuner(enabled: boolean, type: VoiceAiTunerType): number;

  /**
   * @ignore
   */
  abstract setLogFile(filePath: string): number;

  /**
   * @ignore
   */
  abstract setLogFilter(filter: LogFilterType): number;

  /**
   * @ignore
   */
  abstract setLogLevel(level: LogLevel): number;

  /**
   * @ignore
   */
  abstract setLogFileSize(fileSizeInKBytes: number): number;

  /**
   * @ignore
   */
  abstract uploadLogFile(): string;

  /**
   * @ignore
   */
  abstract writeLog(level: LogLevel, fmt: string): number;

  /**
   * @ignore
   */
  abstract setLocalRenderMode(
    renderMode: RenderModeType,
    mirrorMode?: VideoMirrorModeType
  ): number;

  /**
   * @ignore
   */
  abstract setRemoteRenderMode(
    uid: number,
    renderMode: RenderModeType,
    mirrorMode: VideoMirrorModeType
  ): number;

  /**
   * @ignore
   */
  abstract setLocalRenderTargetFps(
    sourceType: VideoSourceType,
    targetFps: number
  ): number;

  /**
   * @ignore
   */
  abstract setRemoteRenderTargetFps(targetFps: number): number;

  /**
   * @ignore
   */
  abstract setLocalVideoMirrorMode(mirrorMode: VideoMirrorModeType): number;

  /**
   * @ignore
   */
  abstract enableDualStreamMode(
    enabled: boolean,
    streamConfig?: SimulcastStreamConfig
  ): number;

  /**
   * @ignore
   */
  abstract setDualStreamMode(
    mode: SimulcastStreamMode,
    streamConfig?: SimulcastStreamConfig
  ): number;

  /**
   * @ignore
   */
  abstract setSimulcastConfig(simulcastConfig: SimulcastConfig): number;

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
  abstract setRecordingAudioFrameParameters(
    sampleRate: number,
    channel: number,
    mode: RawAudioFrameOpModeType,
    samplesPerCall: number
  ): number;

  /**
   * @ignore
   */
  abstract setPlaybackAudioFrameParameters(
    sampleRate: number,
    channel: number,
    mode: RawAudioFrameOpModeType,
    samplesPerCall: number
  ): number;

  /**
   * @ignore
   */
  abstract setMixedAudioFrameParameters(
    sampleRate: number,
    channel: number,
    samplesPerCall: number
  ): number;

  /**
   * @ignore
   */
  abstract setEarMonitoringAudioFrameParameters(
    sampleRate: number,
    channel: number,
    mode: RawAudioFrameOpModeType,
    samplesPerCall: number
  ): number;

  /**
   * @ignore
   */
  abstract setPlaybackAudioFrameBeforeMixingParameters(
    sampleRate: number,
    channel: number,
    samplesPerCall: number
  ): number;

  /**
   * @ignore
   */
  abstract enableAudioSpectrumMonitor(intervalInMS?: number): number;

  /**
   * @ignore
   */
  abstract disableAudioSpectrumMonitor(): number;

  /**
   * @ignore
   */
  abstract registerAudioSpectrumObserver(
    observer: IAudioSpectrumObserver
  ): number;

  /**
   * @ignore
   */
  abstract unregisterAudioSpectrumObserver(
    observer: IAudioSpectrumObserver
  ): number;

  /**
   * @ignore
   */
  abstract adjustRecordingSignalVolume(volume: number): number;

  /**
   * @ignore
   */
  abstract muteRecordingSignal(mute: boolean): number;

  /**
   * @ignore
   */
  abstract adjustPlaybackSignalVolume(volume: number): number;

  /**
   * @ignore
   */
  abstract adjustUserPlaybackSignalVolume(uid: number, volume: number): number;

  /**
   * @ignore
   */
  abstract setRemoteSubscribeFallbackOption(
    option: StreamFallbackOptions
  ): number;

  /**
   * @ignore
   */
  abstract setHighPriorityUserList(
    uidList: number[],
    uidNum: number,
    option: StreamFallbackOptions
  ): number;

  /**
   * @ignore
   */
  abstract enableExtension(
    provider: string,
    extension: string,
    enable?: boolean,
    type?: MediaSourceType
  ): number;

  /**
   * @ignore
   */
  abstract setExtensionProperty(
    provider: string,
    extension: string,
    key: string,
    value: string,
    type?: MediaSourceType
  ): number;

  /**
   * @ignore
   */
  abstract getExtensionProperty(
    provider: string,
    extension: string,
    key: string,
    bufLen: number,
    type?: MediaSourceType
  ): string;

  /**
   * @ignore
   */
  abstract enableLoopbackRecording(
    enabled: boolean,
    deviceName?: string
  ): number;

  /**
   * @ignore
   */
  abstract adjustLoopbackSignalVolume(volume: number): number;

  /**
   * @ignore
   */
  abstract getLoopbackRecordingVolume(): number;

  /**
   * @ignore
   */
  abstract enableInEarMonitoring(
    enabled: boolean,
    includeAudioFilters: EarMonitoringFilterType
  ): number;

  /**
   * @ignore
   */
  abstract setInEarMonitoringVolume(volume: number): number;

  /**
   * @ignore
   */
  abstract loadExtensionProvider(
    path: string,
    unloadAfterUse?: boolean
  ): number;

  /**
   * @ignore
   */
  abstract setExtensionProviderProperty(
    provider: string,
    key: string,
    value: string
  ): number;

  /**
   * @ignore
   */
  abstract registerExtension(
    provider: string,
    extension: string,
    type?: MediaSourceType
  ): number;

  /**
   * @ignore
   */
  abstract setCameraCapturerConfiguration(
    config: CameraCapturerConfiguration
  ): number;

  /**
   * @ignore
   */
  abstract createCustomVideoTrack(): number;

  /**
   * @ignore
   */
  abstract createCustomEncodedVideoTrack(senderOption: SenderOptions): number;

  /**
   * @ignore
   */
  abstract destroyCustomVideoTrack(videoTrackId: number): number;

  /**
   * @ignore
   */
  abstract destroyCustomEncodedVideoTrack(videoTrackId: number): number;

  /**
   * @ignore
   */
  abstract switchCamera(): number;

  /**
   * @ignore
   */
  abstract isCameraZoomSupported(): boolean;

  /**
   * @ignore
   */
  abstract isCameraFaceDetectSupported(): boolean;

  /**
   * @ignore
   */
  abstract isCameraTorchSupported(): boolean;

  /**
   * @ignore
   */
  abstract isCameraFocusSupported(): boolean;

  /**
   * @ignore
   */
  abstract isCameraAutoFocusFaceModeSupported(): boolean;

  /**
   * @ignore
   */
  abstract setCameraZoomFactor(factor: number): number;

  /**
   * @ignore
   */
  abstract enableFaceDetection(enabled: boolean): number;

  /**
   * @ignore
   */
  abstract getCameraMaxZoomFactor(): number;

  /**
   * @ignore
   */
  abstract setCameraFocusPositionInPreview(
    positionX: number,
    positionY: number
  ): number;

  /**
   * @ignore
   */
  abstract setCameraTorchOn(isOn: boolean): number;

  /**
   * @ignore
   */
  abstract setCameraAutoFocusFaceModeEnabled(enabled: boolean): number;

  /**
   * @ignore
   */
  abstract isCameraExposurePositionSupported(): boolean;

  /**
   * @ignore
   */
  abstract setCameraExposurePosition(
    positionXinView: number,
    positionYinView: number
  ): number;

  /**
   * @ignore
   */
  abstract isCameraExposureSupported(): boolean;

  /**
   * @ignore
   */
  abstract setCameraExposureFactor(factor: number): number;

  /**
   * @ignore
   */
  abstract isCameraAutoExposureFaceModeSupported(): boolean;

  /**
   * @ignore
   */
  abstract setCameraAutoExposureFaceModeEnabled(enabled: boolean): number;

  /**
   * @ignore
   */
  abstract setCameraStabilizationMode(mode: CameraStabilizationMode): number;

  /**
   * @ignore
   */
  abstract setDefaultAudioRouteToSpeakerphone(
    defaultToSpeaker: boolean
  ): number;

  /**
   * @ignore
   */
  abstract setEnableSpeakerphone(speakerOn: boolean): number;

  /**
   * @ignore
   */
  abstract isSpeakerphoneEnabled(): boolean;

  /**
   * @ignore
   */
  abstract setRouteInCommunicationMode(route: number): number;

  /**
   * @ignore
   */
  abstract isCameraCenterStageSupported(): boolean;

  /**
   * @ignore
   */
  abstract enableCameraCenterStage(enabled: boolean): number;

  /**
   * @ignore
   */
  abstract getScreenCaptureSources(
    thumbSize: Size,
    iconSize: Size,
    includeScreen: boolean
  ): ScreenCaptureSourceInfo[];

  /**
   * @ignore
   */
  abstract setAudioSessionOperationRestriction(
    restriction: AudioSessionOperationRestriction
  ): number;

  /**
   * @ignore
   */
  abstract startScreenCaptureByDisplayId(
    displayId: number,
    regionRect: Rectangle,
    captureParams: ScreenCaptureParameters
  ): number;

  /**
   * @ignore
   */
  abstract startScreenCaptureByScreenRect(
    screenRect: Rectangle,
    regionRect: Rectangle,
    captureParams: ScreenCaptureParameters
  ): number;

  /**
   * @ignore
   */
  abstract getAudioDeviceInfo(): DeviceInfo;

  /**
   * @ignore
   */
  abstract startScreenCaptureByWindowId(
    windowId: number,
    regionRect: Rectangle,
    captureParams: ScreenCaptureParameters
  ): number;

  /**
   * @ignore
   */
  abstract setScreenCaptureContentHint(contentHint: VideoContentHint): number;

  /**
   * @ignore
   */
  abstract updateScreenCaptureRegion(regionRect: Rectangle): number;

  /**
   * @ignore
   */
  abstract updateScreenCaptureParameters(
    captureParams: ScreenCaptureParameters
  ): number;

  /**
   * @ignore
   */
  abstract startScreenCapture(captureParams: ScreenCaptureParameters2): number;

  /**
   * @ignore
   */
  abstract updateScreenCapture(captureParams: ScreenCaptureParameters2): number;

  /**
   * @ignore
   */
  abstract queryScreenCaptureCapability(): number;

  /**
   * @ignore
   */
  abstract queryCameraFocalLengthCapability(): {
    focalLengthInfos: FocalLengthInfo[];
    size: number;
  };

  /**
   * @ignore
   */
  abstract setExternalMediaProjection(mediaProjection: any): number;

  /**
   * @ignore
   */
  abstract setScreenCaptureScenario(screenScenario: ScreenScenarioType): number;

  /**
   * @ignore
   */
  abstract stopScreenCapture(): number;

  /**
   * @ignore
   */
  abstract getCallId(): string;

  /**
   * @ignore
   */
  abstract rate(callId: string, rating: number, description: string): number;

  /**
   * @ignore
   */
  abstract complain(callId: string, description: string): number;

  /**
   * @ignore
   */
  abstract startRtmpStreamWithoutTranscoding(url: string): number;

  /**
   * @ignore
   */
  abstract startRtmpStreamWithTranscoding(
    url: string,
    transcoding: LiveTranscoding
  ): number;

  /**
   * @ignore
   */
  abstract updateRtmpTranscoding(transcoding: LiveTranscoding): number;

  /**
   * @ignore
   */
  abstract startLocalVideoTranscoder(
    config: LocalTranscoderConfiguration
  ): number;

  /**
   * @ignore
   */
  abstract updateLocalTranscoderConfiguration(
    config: LocalTranscoderConfiguration
  ): number;

  /**
   * @ignore
   */
  abstract stopRtmpStream(url: string): number;

  /**
   * @ignore
   */
  abstract stopLocalVideoTranscoder(): number;

  /**
   * @ignore
   */
  abstract startLocalAudioMixer(config: LocalAudioMixerConfiguration): number;

  /**
   * @ignore
   */
  abstract updateLocalAudioMixerConfiguration(
    config: LocalAudioMixerConfiguration
  ): number;

  /**
   * @ignore
   */
  abstract stopLocalAudioMixer(): number;

  /**
   * @ignore
   */
  abstract startCameraCapture(
    sourceType: VideoSourceType,
    config: CameraCapturerConfiguration
  ): number;

  /**
   * @ignore
   */
  abstract stopCameraCapture(sourceType: VideoSourceType): number;

  /**
   * @ignore
   */
  abstract setCameraDeviceOrientation(
    type: VideoSourceType,
    orientation: VideoOrientation
  ): number;

  /**
   * @ignore
   */
  abstract setScreenCaptureOrientation(
    type: VideoSourceType,
    orientation: VideoOrientation
  ): number;

  /**
   * @ignore
   */
  abstract getConnectionState(): ConnectionStateType;

  /**
   * @ignore
   */
  abstract registerEventHandler(eventHandler: IRtcEngineEventHandler): boolean;

  /**
   * @ignore
   */
  abstract unregisterEventHandler(
    eventHandler: IRtcEngineEventHandler
  ): boolean;

  /**
   * @ignore
   */
  abstract setRemoteUserPriority(
    uid: number,
    userPriority: PriorityType
  ): number;

  /**
   * @ignore
   */
  abstract enableEncryption(enabled: boolean, config: EncryptionConfig): number;

  /**
   * @ignore
   */
  abstract createDataStream(config: DataStreamConfig): number;

  /**
   * @ignore
   */
  abstract sendStreamMessage(
    streamId: number,
    data: Uint8Array,
    length: number
  ): number;

  /**
   * @ignore
   */
  abstract sendRdtMessage(
    uid: number,
    type: RdtStreamType,
    data: string,
    length: number
  ): number;

  /**
   * @ignore
   */
  abstract sendMediaControlMessage(
    uid: number,
    data: string,
    length: number
  ): number;

  /**
   * @ignore
   */
  abstract addVideoWatermark(
    watermarkUrl: string,
    options: WatermarkOptions
  ): number;

  /**
   * @ignore
   */
  abstract removeVideoWatermark(id: string): number;

  /**
   * @ignore
   */
  abstract clearVideoWatermarks(): number;

  /**
   * @ignore
   */
  abstract pauseAudio(): number;

  /**
   * @ignore
   */
  abstract resumeAudio(): number;

  /**
   * @ignore
   */
  abstract enableWebSdkInteroperability(enabled: boolean): number;

  /**
   * @ignore
   */
  abstract sendCustomReportMessage(
    id: string,
    category: string,
    event: string,
    label: string,
    value: number
  ): number;

  /**
   * @ignore
   */
  abstract registerMediaMetadataObserver(
    observer: IMetadataObserver,
    type: MetadataType
  ): number;

  /**
   * @ignore
   */
  abstract unregisterMediaMetadataObserver(
    observer: IMetadataObserver,
    type: MetadataType
  ): number;

  /**
   * @ignore
   */
  abstract startAudioFrameDump(
    channelId: string,
    uid: number,
    location: string,
    uuid: string,
    passwd: string,
    durationMs: number,
    autoUpload: boolean
  ): number;

  /**
   * @ignore
   */
  abstract stopAudioFrameDump(
    channelId: string,
    uid: number,
    location: string
  ): number;

  /**
   * @ignore
   */
  abstract setAINSMode(enabled: boolean, mode: AudioAinsMode): number;

  /**
   * @ignore
   */
  abstract registerLocalUserAccount(appId: string, userAccount: string): number;

  /**
   * @ignore
   */
  abstract joinChannelWithUserAccount(
    token: string,
    channelId: string,
    userAccount: string,
    options?: ChannelMediaOptions
  ): number;

  /**
   * @ignore
   */
  abstract joinChannelWithUserAccountEx(
    token: string,
    channelId: string,
    userAccount: string,
    options: ChannelMediaOptions
  ): number;

  /**
   * @ignore
   */
  abstract getUserInfoByUserAccount(userAccount: string): UserInfo;

  /**
   * @ignore
   */
  abstract getUserInfoByUid(uid: number): UserInfo;

  /**
   * @ignore
   */
  abstract startOrUpdateChannelMediaRelay(
    configuration: ChannelMediaRelayConfiguration
  ): number;

  /**
   * @ignore
   */
  abstract stopChannelMediaRelay(): number;

  /**
   * @ignore
   */
  abstract pauseAllChannelMediaRelay(): number;

  /**
   * @ignore
   */
  abstract resumeAllChannelMediaRelay(): number;

  /**
   * @ignore
   */
  abstract setDirectCdnStreamingAudioConfiguration(
    profile: AudioProfileType
  ): number;

  /**
   * @ignore
   */
  abstract setDirectCdnStreamingVideoConfiguration(
    config: VideoEncoderConfiguration
  ): number;

  /**
   * @ignore
   */
  abstract startDirectCdnStreaming(
    eventHandler: IDirectCdnStreamingEventHandler,
    publishUrl: string,
    options: DirectCdnStreamingMediaOptions
  ): number;

  /**
   * @ignore
   */
  abstract stopDirectCdnStreaming(): number;

  /**
   * @ignore
   */
  abstract updateDirectCdnStreamingMediaOptions(
    options: DirectCdnStreamingMediaOptions
  ): number;

  /**
   * @ignore
   */
  abstract startRhythmPlayer(
    sound1: string,
    sound2: string,
    config: AgoraRhythmPlayerConfig
  ): number;

  /**
   * @ignore
   */
  abstract stopRhythmPlayer(): number;

  /**
   * @ignore
   */
  abstract configRhythmPlayer(config: AgoraRhythmPlayerConfig): number;

  /**
   * @ignore
   */
  abstract takeSnapshot(uid: number, filePath: string): number;

  /**
   * @ignore
   */
  abstract enableContentInspect(
    enabled: boolean,
    config: ContentInspectConfig
  ): number;

  /**
   * @ignore
   */
  abstract adjustCustomAudioPublishVolume(
    trackId: number,
    volume: number
  ): number;

  /**
   * @ignore
   */
  abstract adjustCustomAudioPlayoutVolume(
    trackId: number,
    volume: number
  ): number;

  /**
   * @ignore
   */
  abstract setCloudProxy(proxyType: CloudProxyType): number;

  /**
   * @ignore
   */
  abstract setLocalAccessPoint(config: LocalAccessPointConfiguration): number;

  /**
   * @ignore
   */
  abstract setAdvancedAudioOptions(
    options: AdvancedAudioOptions,
    sourceType?: number
  ): number;

  /**
   * @ignore
   */
  abstract setAVSyncSource(channelId: string, uid: number): number;

  /**
   * @ignore
   */
  abstract enableVideoImageSource(
    enable: boolean,
    options: ImageTrackOptions
  ): number;

  /**
   * @ignore
   */
  abstract getCurrentMonotonicTimeInMs(): number;

  /**
   * @ignore
   */
  abstract getNetworkType(): number;

  /**
   * @ignore
   */
  abstract setParameters(parameters: string): number;

  /**
   * @ignore
   */
  abstract startMediaRenderingTracing(): number;

  /**
   * @ignore
   */
  abstract enableInstantMediaRendering(): number;

  /**
   * @ignore
   */
  abstract getNtpWallTimeInMs(): number;

  /**
   * @ignore
   */
  abstract isFeatureAvailableOnDevice(type: FeatureType): boolean;

  /**
   * @ignore
   */
  abstract sendAudioMetadata(metadata: string, length: number): number;

  /**
   * @ignore
   */
  abstract queryHDRCapability(videoModule: VideoModuleType): HdrCapability;

  /**
   * @ignore
   */
  abstract addVideoWatermarkWithConfig(configs: WatermarkConfig): number;

  /**
   * @ignore
   */
  abstract startScreenCaptureBySourceType(
    sourceType: VideoSourceType,
    config: ScreenCaptureConfiguration
  ): number;

  /**
   * @ignore
   */
  abstract stopScreenCaptureBySourceType(sourceType: VideoSourceType): number;

  /**
   * @ignore
   */
  abstract release(sync?: boolean): void;

  /**
   * @ignore
   */
  abstract startPreviewWithoutSourceType(): number;

  /**
   * @ignore
   */
  abstract getAudioDeviceManager(): IAudioDeviceManager;

  /**
   * @ignore
   */
  abstract getVideoDeviceManager(): IVideoDeviceManager;

  /**
   * @ignore
   */
  abstract getMusicContentCenter(): IMusicContentCenter;

  /**
   * @ignore
   */
  abstract getMediaEngine(): IMediaEngine;

  /**
   * @ignore
   */
  abstract getLocalSpatialAudioEngine(): ILocalSpatialAudioEngine;

  /**
   * @ignore
   */
  abstract getH265Transcoder(): IH265Transcoder;

  /**
   * @ignore
   */
  abstract sendMetaData(
    metadata: Metadata,
    sourceType: VideoSourceType
  ): number;

  /**
   * @ignore
   */
  abstract setMaxMetadataSize(size: number): number;

  /**
   * @ignore
   */
  abstract destroyRendererByView(view: any): void;

  /**
   * @ignore
   */
  abstract destroyRendererByConfig(
    sourceType: VideoSourceType,
    channelId?: string,
    uid?: number
  ): void;

  /**
   * @ignore
   */
  abstract unregisterAudioEncodedFrameObserver(
    observer: IAudioEncodedFrameObserver
  ): number;

  /**
   * @ignore
   */
  abstract getNativeHandle(): number;

  /**
   * @ignore
   */
  abstract takeSnapshotWithConfig(uid: number, config: SnapshotConfig): number;
}

/**
 * @ignore
 */
export enum QualityReportFormatType {
  /**
   * @ignore
   */
  QualityReportJson = 0,
  /**
   * @ignore
   */
  QualityReportHtml = 1,
}

/**
 * @ignore
 */
export enum MediaDeviceStateType {
  /**
   * @ignore
   */
  MediaDeviceStateIdle = 0,
  /**
   * @ignore
   */
  MediaDeviceStateActive = 1,
  /**
   * @ignore
   */
  MediaDeviceStateDisabled = 2,
  /**
   * @ignore
   */
  MediaDeviceStatePluggedIn = 3,
  /**
   * @ignore
   */
  MediaDeviceStateNotPresent = 4,
  /**
   * @ignore
   */
  MediaDeviceStateUnplugged = 8,
}

/**
 * @ignore
 */
export enum VideoProfileType {
  /**
   * @ignore
   */
  VideoProfileLandscape120p = 0,
  /**
   * @ignore
   */
  VideoProfileLandscape120p3 = 2,
  /**
   * @ignore
   */
  VideoProfileLandscape180p = 10,
  /**
   * @ignore
   */
  VideoProfileLandscape180p3 = 12,
  /**
   * @ignore
   */
  VideoProfileLandscape180p4 = 13,
  /**
   * @ignore
   */
  VideoProfileLandscape240p = 20,
  /**
   * @ignore
   */
  VideoProfileLandscape240p3 = 22,
  /**
   * @ignore
   */
  VideoProfileLandscape240p4 = 23,
  /**
   * @ignore
   */
  VideoProfileLandscape360p = 30,
  /**
   * @ignore
   */
  VideoProfileLandscape360p3 = 32,
  /**
   * @ignore
   */
  VideoProfileLandscape360p4 = 33,
  /**
   * @ignore
   */
  VideoProfileLandscape360p6 = 35,
  /**
   * @ignore
   */
  VideoProfileLandscape360p7 = 36,
  /**
   * @ignore
   */
  VideoProfileLandscape360p8 = 37,
  /**
   * @ignore
   */
  VideoProfileLandscape360p9 = 38,
  /**
   * @ignore
   */
  VideoProfileLandscape360p10 = 39,
  /**
   * @ignore
   */
  VideoProfileLandscape360p11 = 100,
  /**
   * @ignore
   */
  VideoProfileLandscape480p = 40,
  /**
   * @ignore
   */
  VideoProfileLandscape480p3 = 42,
  /**
   * @ignore
   */
  VideoProfileLandscape480p4 = 43,
  /**
   * @ignore
   */
  VideoProfileLandscape480p6 = 45,
  /**
   * @ignore
   */
  VideoProfileLandscape480p8 = 47,
  /**
   * @ignore
   */
  VideoProfileLandscape480p9 = 48,
  /**
   * @ignore
   */
  VideoProfileLandscape480p10 = 49,
  /**
   * @ignore
   */
  VideoProfileLandscape720p = 50,
  /**
   * @ignore
   */
  VideoProfileLandscape720p3 = 52,
  /**
   * @ignore
   */
  VideoProfileLandscape720p5 = 54,
  /**
   * @ignore
   */
  VideoProfileLandscape720p6 = 55,
  /**
   * @ignore
   */
  VideoProfileLandscape1080p = 60,
  /**
   * @ignore
   */
  VideoProfileLandscape1080p3 = 62,
  /**
   * @ignore
   */
  VideoProfileLandscape1080p5 = 64,
  /**
   * @ignore
   */
  VideoProfileLandscape1440p = 66,
  /**
   * @ignore
   */
  VideoProfileLandscape1440p2 = 67,
  /**
   * @ignore
   */
  VideoProfileLandscape4k = 70,
  /**
   * @ignore
   */
  VideoProfileLandscape4k3 = 72,
  /**
   * @ignore
   */
  VideoProfilePortrait120p = 1000,
  /**
   * @ignore
   */
  VideoProfilePortrait120p3 = 1002,
  /**
   * @ignore
   */
  VideoProfilePortrait180p = 1010,
  /**
   * @ignore
   */
  VideoProfilePortrait180p3 = 1012,
  /**
   * @ignore
   */
  VideoProfilePortrait180p4 = 1013,
  /**
   * @ignore
   */
  VideoProfilePortrait240p = 1020,
  /**
   * @ignore
   */
  VideoProfilePortrait240p3 = 1022,
  /**
   * @ignore
   */
  VideoProfilePortrait240p4 = 1023,
  /**
   * @ignore
   */
  VideoProfilePortrait360p = 1030,
  /**
   * @ignore
   */
  VideoProfilePortrait360p3 = 1032,
  /**
   * @ignore
   */
  VideoProfilePortrait360p4 = 1033,
  /**
   * @ignore
   */
  VideoProfilePortrait360p6 = 1035,
  /**
   * @ignore
   */
  VideoProfilePortrait360p7 = 1036,
  /**
   * @ignore
   */
  VideoProfilePortrait360p8 = 1037,
  /**
   * @ignore
   */
  VideoProfilePortrait360p9 = 1038,
  /**
   * @ignore
   */
  VideoProfilePortrait360p10 = 1039,
  /**
   * @ignore
   */
  VideoProfilePortrait360p11 = 1100,
  /**
   * @ignore
   */
  VideoProfilePortrait480p = 1040,
  /**
   * @ignore
   */
  VideoProfilePortrait480p3 = 1042,
  /**
   * @ignore
   */
  VideoProfilePortrait480p4 = 1043,
  /**
   * @ignore
   */
  VideoProfilePortrait480p6 = 1045,
  /**
   * @ignore
   */
  VideoProfilePortrait480p8 = 1047,
  /**
   * @ignore
   */
  VideoProfilePortrait480p9 = 1048,
  /**
   * @ignore
   */
  VideoProfilePortrait480p10 = 1049,
  /**
   * @ignore
   */
  VideoProfilePortrait720p = 1050,
  /**
   * @ignore
   */
  VideoProfilePortrait720p3 = 1052,
  /**
   * @ignore
   */
  VideoProfilePortrait720p5 = 1054,
  /**
   * @ignore
   */
  VideoProfilePortrait720p6 = 1055,
  /**
   * @ignore
   */
  VideoProfilePortrait1080p = 1060,
  /**
   * @ignore
   */
  VideoProfilePortrait1080p3 = 1062,
  /**
   * @ignore
   */
  VideoProfilePortrait1080p5 = 1064,
  /**
   * @ignore
   */
  VideoProfilePortrait1440p = 1066,
  /**
   * @ignore
   */
  VideoProfilePortrait1440p2 = 1067,
  /**
   * @ignore
   */
  VideoProfilePortrait4k = 1070,
  /**
   * @ignore
   */
  VideoProfilePortrait4k3 = 1072,
  /**
   * @ignore
   */
  VideoProfileDefault = 30,
}

/**
 * @ignore
 */
export class SDKBuildInfo {
  /**
   * @ignore
   */
  build?: number;
  /**
   * @ignore
   */
  version?: string;
}

/**
 * @ignore
 */
export class VideoDeviceInfo {
  /**
   * @ignore
   */
  deviceId?: string;
  /**
   * @ignore
   */
  deviceName?: string;
}

/**
 * @ignore
 */
export class AudioDeviceInfo {
  /**
   * @ignore
   */
  deviceId?: string;
  /**
   * @ignore
   */
  deviceTypeName?: string;
  /**
   * @ignore
   */
  deviceName?: string;
}
