import './extension/AgoraMediaBaseExtension';
import { EncodedVideoFrameInfo } from './AgoraBase';

/**
 * @ignore
 */
export class ExtensionContext {
  /**
   * @ignore
   */
  isValid?: boolean;
  /**
   * @ignore
   */
  uid?: number;
  /**
   * @ignore
   */
  providerName?: string;
  /**
   * @ignore
   */
  extensionName?: string;
}

/**
 * @ignore
 */
export enum VideoSourceType {
  /**
   * @ignore
   */
  VideoSourceCameraPrimary = 0,
  /**
   * @ignore
   */
  VideoSourceCamera = 0,
  /**
   * @ignore
   */
  VideoSourceCameraSecondary = 1,
  /**
   * @ignore
   */
  VideoSourceScreenPrimary = 2,
  /**
   * @ignore
   */
  VideoSourceScreen = 2,
  /**
   * @ignore
   */
  VideoSourceScreenSecondary = 3,
  /**
   * @ignore
   */
  VideoSourceCustom = 4,
  /**
   * @ignore
   */
  VideoSourceMediaPlayer = 5,
  /**
   * @ignore
   */
  VideoSourceRtcImagePng = 6,
  /**
   * @ignore
   */
  VideoSourceRtcImageJpeg = 7,
  /**
   * @ignore
   */
  VideoSourceRtcImageGif = 8,
  /**
   * @ignore
   */
  VideoSourceRemote = 9,
  /**
   * @ignore
   */
  VideoSourceTranscoded = 10,
  /**
   * @ignore
   */
  VideoSourceCameraThird = 11,
  /**
   * @ignore
   */
  VideoSourceCameraFourth = 12,
  /**
   * @ignore
   */
  VideoSourceScreenThird = 13,
  /**
   * @ignore
   */
  VideoSourceScreenFourth = 14,
  /**
   * @ignore
   */
  VideoSourceSpeechDriven = 15,
  /**
   * @ignore
   */
  VideoSourceUnknown = 100,
}

/**
 * @ignore
 */
export enum AudioSourceType {
  /**
   * @ignore
   */
  AudioSourceMicrophone = 0,
  /**
   * @ignore
   */
  AudioSourceCustom = 1,
  /**
   * @ignore
   */
  AudioSourceMediaPlayer = 2,
  /**
   * @ignore
   */
  AudioSourceLoopbackRecording = 3,
  /**
   * @ignore
   */
  AudioSourceMixedStream = 4,
  /**
   * @ignore
   */
  AudioSourceRemoteUser = 5,
  /**
   * @ignore
   */
  AudioSourceRemoteChannel = 6,
  /**
   * @ignore
   */
  AudioSourceUnknown = 100,
}

/**
 * @ignore
 */
export enum AudioRoute {
  /**
   * @ignore
   */
  RouteDefault = -1,
  /**
   * @ignore
   */
  RouteHeadset = 0,
  /**
   * @ignore
   */
  RouteEarpiece = 1,
  /**
   * @ignore
   */
  RouteHeadsetnomic = 2,
  /**
   * @ignore
   */
  RouteSpeakerphone = 3,
  /**
   * @ignore
   */
  RouteLoudspeaker = 4,
  /**
   * @ignore
   */
  RouteBluetoothDeviceHfp = 5,
  /**
   * @ignore
   */
  RouteUsb = 6,
  /**
   * @ignore
   */
  RouteHdmi = 7,
  /**
   * @ignore
   */
  RouteDisplayport = 8,
  /**
   * @ignore
   */
  RouteAirplay = 9,
  /**
   * @ignore
   */
  RouteBluetoothDeviceA2dp = 10,
}

/**
 * @ignore
 */
export enum BytesPerSample {
  /**
   * @ignore
   */
  TwoBytesPerSample = 2,
}

/**
 * @ignore
 */
export class AudioParameters {
  /**
   * @ignore
   */
  sample_rate?: number;
  /**
   * @ignore
   */
  channels?: number;
  /**
   * @ignore
   */
  frames_per_buffer?: number;
}

/**
 * @ignore
 */
export enum RawAudioFrameOpModeType {
  /**
   * @ignore
   */
  RawAudioFrameOpModeReadOnly = 0,
  /**
   * @ignore
   */
  RawAudioFrameOpModeReadWrite = 2,
}

/**
 * @ignore
 */
export enum MediaSourceType {
  /**
   * @ignore
   */
  AudioPlayoutSource = 0,
  /**
   * @ignore
   */
  AudioRecordingSource = 1,
  /**
   * @ignore
   */
  PrimaryCameraSource = 2,
  /**
   * @ignore
   */
  SecondaryCameraSource = 3,
  /**
   * @ignore
   */
  PrimaryScreenSource = 4,
  /**
   * @ignore
   */
  SecondaryScreenSource = 5,
  /**
   * @ignore
   */
  CustomVideoSource = 6,
  /**
   * @ignore
   */
  MediaPlayerSource = 7,
  /**
   * @ignore
   */
  RtcImagePngSource = 8,
  /**
   * @ignore
   */
  RtcImageJpegSource = 9,
  /**
   * @ignore
   */
  RtcImageGifSource = 10,
  /**
   * @ignore
   */
  RemoteVideoSource = 11,
  /**
   * @ignore
   */
  TranscodedVideoSource = 12,
  /**
   * @ignore
   */
  SpeechDrivenVideoSource = 13,
  /**
   * @ignore
   */
  UnknownMediaSource = 100,
}

/**
 * @ignore
 */
export class PacketOptions {
  /**
   * @ignore
   */
  timestamp?: number;
  /**
   * @ignore
   */
  audioLevelIndication?: number;
}

/**
 * @ignore
 */
export class AudioEncodedFrameInfo {
  /**
   * @ignore
   */
  sendTs?: number;
  /**
   * @ignore
   */
  codec?: number;
}

/**
 * @ignore
 */
export class AudioPcmFrame {
  /**
   * @ignore
   */
  capture_timestamp?: number;
  /**
   * @ignore
   */
  samples_per_channel_?: number;
  /**
   * @ignore
   */
  sample_rate_hz_?: number;
  /**
   * @ignore
   */
  num_channels_?: number;
  /**
   * @ignore
   */
  audio_track_number_?: number;
  /**
   * @ignore
   */
  bytes_per_sample?: BytesPerSample;
  /**
   * @ignore
   */
  data_?: number[];
  /**
   * @ignore
   */
  is_stereo_?: boolean;
}

/**
 * @ignore
 */
export enum AudioDualMonoMode {
  /**
   * @ignore
   */
  AudioDualMonoStereo = 0,
  /**
   * @ignore
   */
  AudioDualMonoL = 1,
  /**
   * @ignore
   */
  AudioDualMonoR = 2,
  /**
   * @ignore
   */
  AudioDualMonoMix = 3,
}

/**
 * @ignore
 */
export enum VideoPixelFormat {
  /**
   * @ignore
   */
  VideoPixelDefault = 0,
  /**
   * @ignore
   */
  VideoPixelI420 = 1,
  /**
   * @ignore
   */
  VideoPixelBgra = 2,
  /**
   * @ignore
   */
  VideoPixelNv21 = 3,
  /**
   * @ignore
   */
  VideoPixelRgba = 4,
  /**
   * @ignore
   */
  VideoPixelNv12 = 8,
  /**
   * @ignore
   */
  VideoTexture2d = 10,
  /**
   * @ignore
   */
  VideoTextureOes = 11,
  /**
   * @ignore
   */
  VideoCvpixelNv12 = 12,
  /**
   * @ignore
   */
  VideoCvpixelI420 = 13,
  /**
   * @ignore
   */
  VideoCvpixelBgra = 14,
  /**
   * @ignore
   */
  VideoCvpixelP010 = 15,
  /**
   * @ignore
   */
  VideoPixelI422 = 16,
  /**
   * @ignore
   */
  VideoTextureId3d11texture2d = 17,
  /**
   * @ignore
   */
  VideoPixelI010 = 18,
}

/**
 * @ignore
 */
export enum RenderModeType {
  /**
   * @ignore
   */
  RenderModeHidden = 1,
  /**
   * @ignore
   */
  RenderModeFit = 2,
  /**
   * @ignore
   */
  RenderModeAdaptive = 3,
}

/**
 * @ignore
 */
export enum CameraVideoSourceType {
  /**
   * @ignore
   */
  CameraSourceFront = 0,
  /**
   * @ignore
   */
  CameraSourceBack = 1,
  /**
   * @ignore
   */
  VideoSourceUnspecified = 2,
}

/**
 * @ignore
 */
export enum MetaInfoKey {
  /**
   * @ignore
   */
  KeyFaceCapture = 0,
}

/**
 * @ignore
 */
export abstract class IVideoFrameMetaInfo {
  /**
   * @ignore
   */
  abstract getMetaInfoStr(key: MetaInfoKey): string;
}

/**
 * @ignore
 */
export enum PrimaryID {
  /**
   * @ignore
   */
  PrimaryidBt709 = 1,
  /**
   * @ignore
   */
  PrimaryidUnspecified = 2,
  /**
   * @ignore
   */
  PrimaryidBt470m = 4,
  /**
   * @ignore
   */
  PrimaryidBt470bg = 5,
  /**
   * @ignore
   */
  PrimaryidSmpte170m = 6,
  /**
   * @ignore
   */
  PrimaryidSmpte240m = 7,
  /**
   * @ignore
   */
  PrimaryidFilm = 8,
  /**
   * @ignore
   */
  PrimaryidBt2020 = 9,
  /**
   * @ignore
   */
  PrimaryidSmptest428 = 10,
  /**
   * @ignore
   */
  PrimaryidSmptest431 = 11,
  /**
   * @ignore
   */
  PrimaryidSmptest432 = 12,
  /**
   * @ignore
   */
  PrimaryidJedecp22 = 22,
}

/**
 * @ignore
 */
export enum RangeID {
  /**
   * @ignore
   */
  RangeidInvalid = 0,
  /**
   * @ignore
   */
  RangeidLimited = 1,
  /**
   * @ignore
   */
  RangeidFull = 2,
  /**
   * @ignore
   */
  RangeidDerived = 3,
}

/**
 * @ignore
 */
export enum MatrixID {
  /**
   * @ignore
   */
  MatrixidRgb = 0,
  /**
   * @ignore
   */
  MatrixidBt709 = 1,
  /**
   * @ignore
   */
  MatrixidUnspecified = 2,
  /**
   * @ignore
   */
  MatrixidFcc = 4,
  /**
   * @ignore
   */
  MatrixidBt470bg = 5,
  /**
   * @ignore
   */
  MatrixidSmpte170m = 6,
  /**
   * @ignore
   */
  MatrixidSmpte240m = 7,
  /**
   * @ignore
   */
  MatrixidYcocg = 8,
  /**
   * @ignore
   */
  MatrixidBt2020Ncl = 9,
  /**
   * @ignore
   */
  MatrixidBt2020Cl = 10,
  /**
   * @ignore
   */
  MatrixidSmpte2085 = 11,
  /**
   * @ignore
   */
  MatrixidCdncls = 12,
  /**
   * @ignore
   */
  MatrixidCdcls = 13,
  /**
   * @ignore
   */
  MatrixidBt2100Ictcp = 14,
}

/**
 * @ignore
 */
export enum TransferID {
  /**
   * @ignore
   */
  TransferidBt709 = 1,
  /**
   * @ignore
   */
  TransferidUnspecified = 2,
  /**
   * @ignore
   */
  TransferidGamma22 = 4,
  /**
   * @ignore
   */
  TransferidGamma28 = 5,
  /**
   * @ignore
   */
  TransferidSmpte170m = 6,
  /**
   * @ignore
   */
  TransferidSmpte240m = 7,
  /**
   * @ignore
   */
  TransferidLinear = 8,
  /**
   * @ignore
   */
  TransferidLog = 9,
  /**
   * @ignore
   */
  TransferidLogSqrt = 10,
  /**
   * @ignore
   */
  TransferidIec6196624 = 11,
  /**
   * @ignore
   */
  TransferidBt1361Ecg = 12,
  /**
   * @ignore
   */
  TransferidIec6196621 = 13,
  /**
   * @ignore
   */
  TransferidBt202010 = 14,
  /**
   * @ignore
   */
  TransferidBt202012 = 15,
  /**
   * @ignore
   */
  TransferidSmptest2084 = 16,
  /**
   * @ignore
   */
  TransferidSmptest428 = 17,
  /**
   * @ignore
   */
  TransferidAribStdB67 = 18,
}

/**
 * @ignore
 */
export class ColorSpace {
  /**
   * @ignore
   */
  primaries?: PrimaryID;
  /**
   * @ignore
   */
  transfer?: TransferID;
  /**
   * @ignore
   */
  matrix?: MatrixID;
  /**
   * @ignore
   */
  range?: RangeID;
}

/**
 * @ignore
 */
export class Hdr10MetadataInfo {
  /**
   * @ignore
   */
  redPrimaryX?: number;
  /**
   * @ignore
   */
  redPrimaryY?: number;
  /**
   * @ignore
   */
  greenPrimaryX?: number;
  /**
   * @ignore
   */
  greenPrimaryY?: number;
  /**
   * @ignore
   */
  bluePrimaryX?: number;
  /**
   * @ignore
   */
  bluePrimaryY?: number;
  /**
   * @ignore
   */
  whitePointX?: number;
  /**
   * @ignore
   */
  whitePointY?: number;
  /**
   * @ignore
   */
  maxMasteringLuminance?: number;
  /**
   * @ignore
   */
  minMasteringLuminance?: number;
  /**
   * @ignore
   */
  maxContentLightLevel?: number;
  /**
   * @ignore
   */
  maxFrameAverageLightLevel?: number;
}

/**
 * @ignore
 */
export enum AlphaStitchMode {
  /**
   * @ignore
   */
  NoAlphaStitch = 0,
  /**
   * @ignore
   */
  AlphaStitchUp = 1,
  /**
   * @ignore
   */
  AlphaStitchBelow = 2,
  /**
   * @ignore
   */
  AlphaStitchLeft = 3,
  /**
   * @ignore
   */
  AlphaStitchRight = 4,
}

/**
 * @ignore
 */
export enum EglContextType {
  /**
   * @ignore
   */
  EglContext10 = 0,
  /**
   * @ignore
   */
  EglContext14 = 1,
}

/**
 * @ignore
 */
export enum VideoBufferType {
  /**
   * @ignore
   */
  VideoBufferRawData = 1,
  /**
   * @ignore
   */
  VideoBufferArray = 2,
  /**
   * @ignore
   */
  VideoBufferTexture = 3,
}

/**
 * @ignore
 */
export class ExternalVideoFrame {
  /**
   * @ignore
   */
  type?: VideoBufferType;
  /**
   * @ignore
   */
  format?: VideoPixelFormat;
  /**
   * @ignore
   */
  buffer?: Uint8Array;
  /**
   * @ignore
   */
  stride?: number;
  /**
   * @ignore
   */
  height?: number;
  /**
   * @ignore
   */
  cropLeft?: number;
  /**
   * @ignore
   */
  cropTop?: number;
  /**
   * @ignore
   */
  cropRight?: number;
  /**
   * @ignore
   */
  cropBottom?: number;
  /**
   * @ignore
   */
  rotation?: number;
  /**
   * @ignore
   */
  timestamp?: number;
  /**
   * @ignore
   */
  eglType?: EglContextType;
  /**
   * @ignore
   */
  textureId?: number;
  /**
   * @ignore
   */
  fenceObject?: number;
  /**
   * @ignore
   */
  matrix?: number[];
  /**
   * @ignore
   */
  metadataBuffer?: Uint8Array;
  /**
   * @ignore
   */
  metadataSize?: number;
  /**
   * @ignore
   */
  alphaBuffer?: Uint8Array;
  /**
   * @ignore
   */
  fillAlphaBuffer?: boolean;
  /**
   * @ignore
   */
  alphaStitchMode?: AlphaStitchMode;
  /**
   * @ignore
   */
  d3d11Texture2d?: any;
  /**
   * @ignore
   */
  textureSliceIndex?: number;
  /**
   * @ignore
   */
  hdr10MetadataInfo?: Hdr10MetadataInfo;
  /**
   * @ignore
   */
  colorSpace?: ColorSpace;
}

/**
 * @ignore
 */
export class VideoFrame {
  /**
   * @ignore
   */
  type?: VideoPixelFormat;
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
  yStride?: number;
  /**
   * @ignore
   */
  uStride?: number;
  /**
   * @ignore
   */
  vStride?: number;
  /**
   * @ignore
   */
  yBuffer?: Uint8Array;
  /**
   * @ignore
   */
  uBuffer?: Uint8Array;
  /**
   * @ignore
   */
  vBuffer?: Uint8Array;
  /**
   * @ignore
   */
  rotation?: number;
  /**
   * @ignore
   */
  renderTimeMs?: number;
  /**
   * @ignore
   */
  avsync_type?: number;
  /**
   * @ignore
   */
  metadata_buffer?: Uint8Array;
  /**
   * @ignore
   */
  metadata_size?: number;
  /**
   * @ignore
   */
  textureId?: number;
  /**
   * @ignore
   */
  matrix?: number[];
  /**
   * @ignore
   */
  alphaBuffer?: Uint8Array;
  /**
   * @ignore
   */
  alphaStitchMode?: AlphaStitchMode;
  /**
   * @ignore
   */
  pixelBuffer?: Uint8Array;
  /**
   * @ignore
   */
  metaInfo?: IVideoFrameMetaInfo;
  /**
   * @ignore
   */
  hdr10MetadataInfo?: Hdr10MetadataInfo;
  /**
   * @ignore
   */
  colorSpace?: ColorSpace;
}

/**
 * @ignore
 */
export enum MediaPlayerSourceType {
  /**
   * @ignore
   */
  MediaPlayerSourceDefault = 0,
  /**
   * @ignore
   */
  MediaPlayerSourceFullFeatured = 1,
  /**
   * @ignore
   */
  MediaPlayerSourceSimple = 2,
}

/**
 * @ignore
 */
export enum VideoModulePosition {
  /**
   * @ignore
   */
  PositionPostCapturer = 1 << 0,
  /**
   * @ignore
   */
  PositionPreRenderer = 1 << 1,
  /**
   * @ignore
   */
  PositionPreEncoder = 1 << 2,
  /**
   * @ignore
   */
  PositionPostCapturerOrigin = 1 << 3,
}

/**
 * @ignore
 */
export enum ContentInspectResult {
  /**
   * @ignore
   */
  ContentInspectNeutral = 1,
  /**
   * @ignore
   */
  ContentInspectSexy = 2,
  /**
   * @ignore
   */
  ContentInspectPorn = 3,
}

/**
 * @ignore
 */
export enum ContentInspectType {
  /**
   * @ignore
   */
  ContentInspectInvalid = 0,
  /**
   * @ignore
   */
  ContentInspectModeration = 1,
  /**
   * @ignore
   */
  ContentInspectSupervision = 2,
  /**
   * @ignore
   */
  ContentInspectImageModeration = 3,
}

/**
 * @ignore
 */
export class ContentInspectModule {
  /**
   * @ignore
   */
  type?: ContentInspectType;
  /**
   * @ignore
   */
  interval?: number;
  /**
   * @ignore
   */
  position?: VideoModulePosition;
}

/**
 * @ignore
 */
export class ContentInspectConfig {
  /**
   * @ignore
   */
  extraInfo?: string;
  /**
   * @ignore
   */
  serverConfig?: string;
  /**
   * @ignore
   */
  modules?: ContentInspectModule[];
  /**
   * @ignore
   */
  moduleCount?: number;
}

/**
 * @ignore
 */
export class SnapshotConfig {
  /**
   * @ignore
   */
  filePath?: string;
  /**
   * @ignore
   */
  position?: VideoModulePosition;
}

/**
 * @ignore
 */
export interface IAudioPcmFrameSink {
  /**
   * @ignore
   */
  onFrame?(frame: AudioPcmFrame): void;
}

/**
 * @ignore
 */
export enum AudioFrameType {
  /**
   * @ignore
   */
  FrameTypePcm16 = 0,
}

/**
 * @ignore
 */
export class AudioFrame {
  /**
   * @ignore
   */
  type?: AudioFrameType;
  /**
   * @ignore
   */
  samplesPerChannel?: number;
  /**
   * @ignore
   */
  bytesPerSample?: BytesPerSample;
  /**
   * @ignore
   */
  channels?: number;
  /**
   * @ignore
   */
  samplesPerSec?: number;
  /**
   * @ignore
   */
  buffer?: Uint8Array;
  /**
   * @ignore
   */
  renderTimeMs?: number;
  /**
   * @ignore
   */
  avsync_type?: number;
  /**
   * @ignore
   */
  presentationMs?: number;
  /**
   * @ignore
   */
  audioTrackNumber?: number;
  /**
   * @ignore
   */
  rtpTimestamp?: number;
}

/**
 * @ignore
 */
export enum AudioFramePosition {
  /**
   * @ignore
   */
  AudioFramePositionNone = 0x0000,
  /**
   * @ignore
   */
  AudioFramePositionPlayback = 0x0001,
  /**
   * @ignore
   */
  AudioFramePositionRecord = 0x0002,
  /**
   * @ignore
   */
  AudioFramePositionMixed = 0x0004,
  /**
   * @ignore
   */
  AudioFramePositionBeforeMixing = 0x0008,
  /**
   * @ignore
   */
  AudioFramePositionEarMonitoring = 0x0010,
}

/**
 * @ignore
 */
export class AudioParams {
  /**
   * @ignore
   */
  sample_rate?: number;
  /**
   * @ignore
   */
  channels?: number;
  /**
   * @ignore
   */
  mode?: RawAudioFrameOpModeType;
  /**
   * @ignore
   */
  samples_per_call?: number;
}

/**
 * @ignore
 */
export interface IAudioFrameObserverBase {
  /**
   * @ignore
   */
  onRecordAudioFrame?(channelId: string, audioFrame: AudioFrame): void;

  /**
   * @ignore
   */
  onPlaybackAudioFrame?(channelId: string, audioFrame: AudioFrame): void;

  /**
   * @ignore
   */
  onMixedAudioFrame?(channelId: string, audioFrame: AudioFrame): void;

  /**
   * @ignore
   */
  onEarMonitoringAudioFrame?(audioFrame: AudioFrame): void;
}

/**
 * @ignore
 */
export interface IAudioFrameObserver extends IAudioFrameObserverBase {
  /**
   * @ignore
   */
  onPlaybackAudioFrameBeforeMixing?(
    channelId: string,
    uid: number,
    audioFrame: AudioFrame
  ): void;
}

/**
 * @ignore
 */
export class AudioSpectrumData {
  /**
   * @ignore
   */
  audioSpectrumData?: number[];
  /**
   * @ignore
   */
  dataLength?: number;
}

/**
 * @ignore
 */
export class UserAudioSpectrumInfo {
  /**
   * @ignore
   */
  uid?: number;
  /**
   * @ignore
   */
  spectrumData?: AudioSpectrumData;
}

/**
 * @ignore
 */
export interface IAudioSpectrumObserver {
  /**
   * @ignore
   */
  onLocalAudioSpectrum?(data: AudioSpectrumData): void;

  /**
   * @ignore
   */
  onRemoteAudioSpectrum?(
    spectrums: UserAudioSpectrumInfo[],
    spectrumNumber: number
  ): void;
}

/**
 * @ignore
 */
export interface IVideoEncodedFrameObserver {
  /**
   * @ignore
   */
  onEncodedVideoFrameReceived?(
    channelId: string,
    uid: number,
    imageBuffer: Uint8Array,
    length: number,
    videoEncodedFrameInfo: EncodedVideoFrameInfo
  ): void;
}

/**
 * @ignore
 */
export enum VideoFrameProcessMode {
  /**
   * @ignore
   */
  ProcessModeReadOnly = 0,
  /**
   * @ignore
   */
  ProcessModeReadWrite = 1,
}

/**
 * @ignore
 */
export interface IVideoFrameObserver {
  /**
   * @ignore
   */
  onCaptureVideoFrame?(
    sourceType: VideoSourceType,
    videoFrame: VideoFrame
  ): void;

  /**
   * @ignore
   */
  onPreEncodeVideoFrame?(
    sourceType: VideoSourceType,
    videoFrame: VideoFrame
  ): void;

  /**
   * @ignore
   */
  onMediaPlayerVideoFrame?(videoFrame: VideoFrame, mediaPlayerId: number): void;

  /**
   * @ignore
   */
  onRenderVideoFrame?(
    channelId: string,
    remoteUid: number,
    videoFrame: VideoFrame
  ): void;

  /**
   * @ignore
   */
  onTranscodedVideoFrame?(videoFrame: VideoFrame): void;
}

/**
 * @ignore
 */
export enum ExternalVideoSourceType {
  /**
   * @ignore
   */
  VideoFrame = 0,
  /**
   * @ignore
   */
  EncodedVideoFrame = 1,
}

/**
 * @ignore
 */
export enum MediaRecorderContainerFormat {
  /**
   * @ignore
   */
  FormatMp4 = 1,
}

/**
 * @ignore
 */
export enum MediaRecorderStreamType {
  /**
   * @ignore
   */
  StreamTypeAudio = 0x01,
  /**
   * @ignore
   */
  StreamTypeVideo = 0x02,
  /**
   * @ignore
   */
  StreamTypeBoth = 0x01 | 0x02,
}

/**
 * @ignore
 */
export enum RecorderState {
  /**
   * @ignore
   */
  RecorderStateError = -1,
  /**
   * @ignore
   */
  RecorderStateStart = 2,
  /**
   * @ignore
   */
  RecorderStateStop = 3,
}

/**
 * @ignore
 */
export enum RecorderReasonCode {
  /**
   * @ignore
   */
  RecorderReasonNone = 0,
  /**
   * @ignore
   */
  RecorderReasonWriteFailed = 1,
  /**
   * @ignore
   */
  RecorderReasonNoStream = 2,
  /**
   * @ignore
   */
  RecorderReasonOverMaxDuration = 3,
  /**
   * @ignore
   */
  RecorderReasonConfigChanged = 4,
}

/**
 * @ignore
 */
export class MediaRecorderConfiguration {
  /**
   * @ignore
   */
  storagePath?: string;
  /**
   * @ignore
   */
  containerFormat?: MediaRecorderContainerFormat;
  /**
   * @ignore
   */
  streamType?: MediaRecorderStreamType;
  /**
   * @ignore
   */
  maxDurationMs?: number;
  /**
   * @ignore
   */
  recorderInfoUpdateInterval?: number;
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
  fps?: number;
  /**
   * @ignore
   */
  sample_rate?: number;
  /**
   * @ignore
   */
  channel_num?: number;
  /**
   * @ignore
   */
  videoSourceType?: VideoSourceType;
}

/**
 * @ignore
 */
export interface IFaceInfoObserver {
  /**
   * @ignore
   */
  onFaceInfo?(outFaceInfo: string): void;
}

/**
 * @ignore
 */
export class RecorderInfo {
  /**
   * @ignore
   */
  fileName?: string;
  /**
   * @ignore
   */
  durationMs?: number;
  /**
   * @ignore
   */
  fileSize?: number;
}

/**
 * @ignore
 */
export interface IMediaRecorderObserver {
  /**
   * @ignore
   */
  onRecorderStateChanged?(
    channelId: string,
    uid: number,
    state: RecorderState,
    reason: RecorderReasonCode
  ): void;

  /**
   * @ignore
   */
  onRecorderInfoUpdated?(
    channelId: string,
    uid: number,
    info: RecorderInfo
  ): void;
}
