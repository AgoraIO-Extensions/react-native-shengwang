import './extension/AgoraBaseExtension';
import {
  AudioSourceType,
  RenderModeType,
  VideoModulePosition,
  VideoPixelFormat,
  VideoSourceType,
} from './AgoraMediaBase';

/**
 * @ignore
 */
export enum ChannelProfileType {
  /**
   * @ignore
   */
  ChannelProfileCommunication = 0,
  /**
   * @ignore
   */
  ChannelProfileLiveBroadcasting = 1,
  /**
   * @ignore
   */
  ChannelProfileGame = 2,
  /**
   * @ignore
   */
  ChannelProfileCloudGaming = 3,
  /**
   * @ignore
   */
  ChannelProfileCommunication1v1 = 4,
}

/**
 * @ignore
 */
export enum WarnCodeType {
  /**
   * @ignore
   */
  WarnInvalidView = 8,
  /**
   * @ignore
   */
  WarnInitVideo = 16,
  /**
   * @ignore
   */
  WarnPending = 20,
  /**
   * @ignore
   */
  WarnNoAvailableChannel = 103,
  /**
   * @ignore
   */
  WarnLookupChannelTimeout = 104,
  /**
   * @ignore
   */
  WarnLookupChannelRejected = 105,
  /**
   * @ignore
   */
  WarnOpenChannelTimeout = 106,
  /**
   * @ignore
   */
  WarnOpenChannelRejected = 107,
  /**
   * @ignore
   */
  WarnSwitchLiveVideoTimeout = 111,
  /**
   * @ignore
   */
  WarnSetClientRoleTimeout = 118,
  /**
   * @ignore
   */
  WarnOpenChannelInvalidTicket = 121,
  /**
   * @ignore
   */
  WarnOpenChannelTryNextVos = 122,
  /**
   * @ignore
   */
  WarnChannelConnectionUnrecoverable = 131,
  /**
   * @ignore
   */
  WarnChannelConnectionIpChanged = 132,
  /**
   * @ignore
   */
  WarnChannelConnectionPortChanged = 133,
  /**
   * @ignore
   */
  WarnChannelSocketError = 134,
  /**
   * @ignore
   */
  WarnAudioMixingOpenError = 701,
  /**
   * @ignore
   */
  WarnAdmRuntimePlayoutWarning = 1014,
  /**
   * @ignore
   */
  WarnAdmRuntimeRecordingWarning = 1016,
  /**
   * @ignore
   */
  WarnAdmRecordAudioSilence = 1019,
  /**
   * @ignore
   */
  WarnAdmPlayoutMalfunction = 1020,
  /**
   * @ignore
   */
  WarnAdmRecordMalfunction = 1021,
  /**
   * @ignore
   */
  WarnAdmRecordAudioLowlevel = 1031,
  /**
   * @ignore
   */
  WarnAdmPlayoutAudioLowlevel = 1032,
  /**
   * @ignore
   */
  WarnAdmWindowsNoDataReadyEvent = 1040,
  /**
   * @ignore
   */
  WarnApmHowling = 1051,
  /**
   * @ignore
   */
  WarnAdmGlitchState = 1052,
  /**
   * @ignore
   */
  WarnAdmImproperSettings = 1053,
  /**
   * @ignore
   */
  WarnAdmPopState = 1055,
  /**
   * @ignore
   */
  WarnAdmWinCoreNoRecordingDevice = 1322,
  /**
   * @ignore
   */
  WarnAdmWinCoreNoPlayoutDevice = 1323,
  /**
   * @ignore
   */
  WarnAdmWinCoreImproperCaptureRelease = 1324,
}

/**
 * @ignore
 */
export enum ErrorCodeType {
  /**
   * @ignore
   */
  ErrOk = 0,
  /**
   * @ignore
   */
  ErrFailed = 1,
  /**
   * @ignore
   */
  ErrInvalidArgument = 2,
  /**
   * @ignore
   */
  ErrNotReady = 3,
  /**
   * @ignore
   */
  ErrNotSupported = 4,
  /**
   * @ignore
   */
  ErrRefused = 5,
  /**
   * @ignore
   */
  ErrBufferTooSmall = 6,
  /**
   * @ignore
   */
  ErrNotInitialized = 7,
  /**
   * @ignore
   */
  ErrInvalidState = 8,
  /**
   * @ignore
   */
  ErrNoPermission = 9,
  /**
   * @ignore
   */
  ErrTimedout = 10,
  /**
   * @ignore
   */
  ErrCanceled = 11,
  /**
   * @ignore
   */
  ErrTooOften = 12,
  /**
   * @ignore
   */
  ErrBindSocket = 13,
  /**
   * @ignore
   */
  ErrNetDown = 14,
  /**
   * @ignore
   */
  ErrJoinChannelRejected = 17,
  /**
   * @ignore
   */
  ErrLeaveChannelRejected = 18,
  /**
   * @ignore
   */
  ErrAlreadyInUse = 19,
  /**
   * @ignore
   */
  ErrAborted = 20,
  /**
   * @ignore
   */
  ErrInitNetEngine = 21,
  /**
   * @ignore
   */
  ErrResourceLimited = 22,
  /**
   * @ignore
   */
  ErrFuncIsProhibited = 23,
  /**
   * @ignore
   */
  ErrInvalidAppId = 101,
  /**
   * @ignore
   */
  ErrInvalidChannelName = 102,
  /**
   * @ignore
   */
  ErrNoServerResources = 103,
  /**
   * @ignore
   */
  ErrTokenExpired = 109,
  /**
   * @ignore
   */
  ErrInvalidToken = 110,
  /**
   * @ignore
   */
  ErrConnectionInterrupted = 111,
  /**
   * @ignore
   */
  ErrConnectionLost = 112,
  /**
   * @ignore
   */
  ErrNotInChannel = 113,
  /**
   * @ignore
   */
  ErrSizeTooLarge = 114,
  /**
   * @ignore
   */
  ErrBitrateLimit = 115,
  /**
   * @ignore
   */
  ErrTooManyDataStreams = 116,
  /**
   * @ignore
   */
  ErrStreamMessageTimeout = 117,
  /**
   * @ignore
   */
  ErrSetClientRoleNotAuthorized = 119,
  /**
   * @ignore
   */
  ErrDecryptionFailed = 120,
  /**
   * @ignore
   */
  ErrInvalidUserId = 121,
  /**
   * @ignore
   */
  ErrDatastreamDecryptionFailed = 122,
  /**
   * @ignore
   */
  ErrClientIsBannedByServer = 123,
  /**
   * @ignore
   */
  ErrEncryptedStreamNotAllowedPublish = 130,
  /**
   * @ignore
   */
  ErrLicenseCredentialInvalid = 131,
  /**
   * @ignore
   */
  ErrInvalidUserAccount = 134,
  /**
   * @ignore
   */
  ErrModuleNotFound = 157,
  /**
   * @ignore
   */
  ErrCertRaw = 157,
  /**
   * @ignore
   */
  ErrCertJsonPart = 158,
  /**
   * @ignore
   */
  ErrCertJsonInval = 159,
  /**
   * @ignore
   */
  ErrCertJsonNomem = 160,
  /**
   * @ignore
   */
  ErrCertCustom = 161,
  /**
   * @ignore
   */
  ErrCertCredential = 162,
  /**
   * @ignore
   */
  ErrCertSign = 163,
  /**
   * @ignore
   */
  ErrCertFail = 164,
  /**
   * @ignore
   */
  ErrCertBuf = 165,
  /**
   * @ignore
   */
  ErrCertNull = 166,
  /**
   * @ignore
   */
  ErrCertDuedate = 167,
  /**
   * @ignore
   */
  ErrCertRequest = 168,
  /**
   * @ignore
   */
  ErrPcmsendFormat = 200,
  /**
   * @ignore
   */
  ErrPcmsendBufferoverflow = 201,
  /**
   * @ignore
   */
  ErrRdtUserNotExist = 250,
  /**
   * @ignore
   */
  ErrRdtUserNotReady = 251,
  /**
   * @ignore
   */
  ErrRdtDataBlocked = 252,
  /**
   * @ignore
   */
  ErrRdtCmdExceedLimit = 253,
  /**
   * @ignore
   */
  ErrRdtDataExceedLimit = 254,
  /**
   * @ignore
   */
  ErrRdtEncryption = 255,
  /**
   * @ignore
   */
  ErrLoginAlreadyLogin = 428,
  /**
   * @ignore
   */
  ErrLoadMediaEngine = 1001,
  /**
   * @ignore
   */
  ErrAdmGeneralError = 1005,
  /**
   * @ignore
   */
  ErrAdmInitPlayout = 1008,
  /**
   * @ignore
   */
  ErrAdmStartPlayout = 1009,
  /**
   * @ignore
   */
  ErrAdmStopPlayout = 1010,
  /**
   * @ignore
   */
  ErrAdmInitRecording = 1011,
  /**
   * @ignore
   */
  ErrAdmStartRecording = 1012,
  /**
   * @ignore
   */
  ErrAdmStopRecording = 1013,
  /**
   * @ignore
   */
  ErrVdmCameraNotAuthorized = 1501,
}

/**
 * @ignore
 */
export enum LicenseErrorType {
  /**
   * @ignore
   */
  LicenseErrInvalid = 1,
  /**
   * @ignore
   */
  LicenseErrExpire = 2,
  /**
   * @ignore
   */
  LicenseErrMinutesExceed = 3,
  /**
   * @ignore
   */
  LicenseErrLimitedPeriod = 4,
  /**
   * @ignore
   */
  LicenseErrDiffDevices = 5,
  /**
   * @ignore
   */
  LicenseErrInternal = 99,
}

/**
 * @ignore
 */
export enum AudioSessionOperationRestriction {
  /**
   * @ignore
   */
  AudioSessionOperationRestrictionNone = 0,
  /**
   * @ignore
   */
  AudioSessionOperationRestrictionSetCategory = 1,
  /**
   * @ignore
   */
  AudioSessionOperationRestrictionConfigureSession = 1 << 1,
  /**
   * @ignore
   */
  AudioSessionOperationRestrictionDeactivateSession = 1 << 2,
  /**
   * @ignore
   */
  AudioSessionOperationRestrictionAll = 1 << 7,
}

/**
 * @ignore
 */
export enum UserOfflineReasonType {
  /**
   * @ignore
   */
  UserOfflineQuit = 0,
  /**
   * @ignore
   */
  UserOfflineDropped = 1,
  /**
   * @ignore
   */
  UserOfflineBecomeAudience = 2,
}

/**
 * @ignore
 */
export enum InterfaceIdType {
  /**
   * @ignore
   */
  AgoraIidAudioDeviceManager = 1,
  /**
   * @ignore
   */
  AgoraIidVideoDeviceManager = 2,
  /**
   * @ignore
   */
  AgoraIidParameterEngine = 3,
  /**
   * @ignore
   */
  AgoraIidMediaEngine = 4,
  /**
   * @ignore
   */
  AgoraIidAudioEngine = 5,
  /**
   * @ignore
   */
  AgoraIidVideoEngine = 6,
  /**
   * @ignore
   */
  AgoraIidRtcConnection = 7,
  /**
   * @ignore
   */
  AgoraIidSignalingEngine = 8,
  /**
   * @ignore
   */
  AgoraIidMediaEngineRegulator = 9,
  /**
   * @ignore
   */
  AgoraIidLocalSpatialAudio = 11,
  /**
   * @ignore
   */
  AgoraIidStateSync = 13,
  /**
   * @ignore
   */
  AgoraIidMetaService = 14,
  /**
   * @ignore
   */
  AgoraIidMusicContentCenter = 15,
  /**
   * @ignore
   */
  AgoraIidH265Transcoder = 16,
}

/**
 * @ignore
 */
export enum QualityType {
  /**
   * @ignore
   */
  QualityUnknown = 0,
  /**
   * @ignore
   */
  QualityExcellent = 1,
  /**
   * @ignore
   */
  QualityGood = 2,
  /**
   * @ignore
   */
  QualityPoor = 3,
  /**
   * @ignore
   */
  QualityBad = 4,
  /**
   * @ignore
   */
  QualityVbad = 5,
  /**
   * @ignore
   */
  QualityDown = 6,
  /**
   * @ignore
   */
  QualityUnsupported = 7,
  /**
   * @ignore
   */
  QualityDetecting = 8,
}

/**
 * @ignore
 */
export enum FitModeType {
  /**
   * @ignore
   */
  ModeCover = 1,
  /**
   * @ignore
   */
  ModeContain = 2,
}

/**
 * @ignore
 */
export enum VideoOrientation {
  /**
   * @ignore
   */
  VideoOrientation0 = 0,
  /**
   * @ignore
   */
  VideoOrientation90 = 90,
  /**
   * @ignore
   */
  VideoOrientation180 = 180,
  /**
   * @ignore
   */
  VideoOrientation270 = 270,
}

/**
 * @ignore
 */
export enum FrameRate {
  /**
   * @ignore
   */
  FrameRateFps1 = 1,
  /**
   * @ignore
   */
  FrameRateFps7 = 7,
  /**
   * @ignore
   */
  FrameRateFps10 = 10,
  /**
   * @ignore
   */
  FrameRateFps15 = 15,
  /**
   * @ignore
   */
  FrameRateFps24 = 24,
  /**
   * @ignore
   */
  FrameRateFps30 = 30,
  /**
   * @ignore
   */
  FrameRateFps60 = 60,
}

/**
 * @ignore
 */
export enum FrameWidth {
  /**
   * @ignore
   */
  FrameWidth960 = 960,
}

/**
 * @ignore
 */
export enum FrameHeight {
  /**
   * @ignore
   */
  FrameHeight540 = 540,
}

/**
 * @ignore
 */
export enum VideoFrameType {
  /**
   * @ignore
   */
  VideoFrameTypeBlankFrame = 0,
  /**
   * @ignore
   */
  VideoFrameTypeKeyFrame = 3,
  /**
   * @ignore
   */
  VideoFrameTypeDeltaFrame = 4,
  /**
   * @ignore
   */
  VideoFrameTypeBFrame = 5,
  /**
   * @ignore
   */
  VideoFrameTypeDroppableFrame = 6,
  /**
   * @ignore
   */
  VideoFrameTypeUnknow = 7,
}

/**
 * @ignore
 */
export enum OrientationMode {
  /**
   * @ignore
   */
  OrientationModeAdaptive = 0,
  /**
   * @ignore
   */
  OrientationModeFixedLandscape = 1,
  /**
   * @ignore
   */
  OrientationModeFixedPortrait = 2,
}

/**
 * @ignore
 */
export enum DegradationPreference {
  /**
   * @ignore
   */
  MaintainAuto = -1,
  /**
   * @ignore
   */
  MaintainQuality = 0,
  /**
   * @ignore
   */
  MaintainFramerate = 1,
  /**
   * @ignore
   */
  MaintainBalanced = 2,
  /**
   * @ignore
   */
  MaintainResolution = 3,
  /**
   * @ignore
   */
  Disabled = 100,
}

/**
 * @ignore
 */
export class VideoDimensions {
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
export enum ScreenCaptureFramerateCapability {
  /**
   * @ignore
   */
  ScreenCaptureFramerateCapability15Fps = 0,
  /**
   * @ignore
   */
  ScreenCaptureFramerateCapability30Fps = 1,
  /**
   * @ignore
   */
  ScreenCaptureFramerateCapability60Fps = 2,
}

/**
 * @ignore
 */
export enum VideoCodecCapabilityLevel {
  /**
   * @ignore
   */
  CodecCapabilityLevelUnspecified = -1,
  /**
   * @ignore
   */
  CodecCapabilityLevelBasicSupport = 5,
  /**
   * @ignore
   */
  CodecCapabilityLevel1080p30fps = 10,
  /**
   * @ignore
   */
  CodecCapabilityLevel1080p60fps = 20,
  /**
   * @ignore
   */
  CodecCapabilityLevel4k60fps = 30,
}

/**
 * @ignore
 */
export enum VideoCodecType {
  /**
   * @ignore
   */
  VideoCodecNone = 0,
  /**
   * @ignore
   */
  VideoCodecVp8 = 1,
  /**
   * @ignore
   */
  VideoCodecH264 = 2,
  /**
   * @ignore
   */
  VideoCodecH265 = 3,
  /**
   * @ignore
   */
  VideoCodecGeneric = 6,
  /**
   * @ignore
   */
  VideoCodecGenericH264 = 7,
  /**
   * @ignore
   */
  VideoCodecAv1 = 12,
  /**
   * @ignore
   */
  VideoCodecVp9 = 13,
  /**
   * @ignore
   */
  VideoCodecGenericJpeg = 20,
}

/**
 * @ignore
 */
export enum CameraFocalLengthType {
  /**
   * @ignore
   */
  CameraFocalLengthDefault = 0,
  /**
   * @ignore
   */
  CameraFocalLengthWideAngle = 1,
  /**
   * @ignore
   */
  CameraFocalLengthUltraWide = 2,
  /**
   * @ignore
   */
  CameraFocalLengthTelephoto = 3,
}

/**
 * @ignore
 */
export enum TCcMode {
  /**
   * @ignore
   */
  CcEnabled = 0,
  /**
   * @ignore
   */
  CcDisabled = 1,
}

/**
 * @ignore
 */
export class SenderOptions {
  /**
   * @ignore
   */
  ccMode?: TCcMode;
  /**
   * @ignore
   */
  codecType?: VideoCodecType;
  /**
   * @ignore
   */
  targetBitrate?: number;
}

/**
 * @ignore
 */
export enum AudioCodecType {
  /**
   * @ignore
   */
  AudioCodecOpus = 1,
  /**
   * @ignore
   */
  AudioCodecPcma = 3,
  /**
   * @ignore
   */
  AudioCodecPcmu = 4,
  /**
   * @ignore
   */
  AudioCodecG722 = 5,
  /**
   * @ignore
   */
  AudioCodecAaclc = 8,
  /**
   * @ignore
   */
  AudioCodecHeaac = 9,
  /**
   * @ignore
   */
  AudioCodecJc1 = 10,
  /**
   * @ignore
   */
  AudioCodecHeaac2 = 11,
  /**
   * @ignore
   */
  AudioCodecLpcnet = 12,
  /**
   * @ignore
   */
  AudioCodecOpusmc = 13,
}

/**
 * @ignore
 */
export enum AudioEncodingType {
  /**
   * @ignore
   */
  AudioEncodingTypeAac16000Low = 0x010101,
  /**
   * @ignore
   */
  AudioEncodingTypeAac16000Medium = 0x010102,
  /**
   * @ignore
   */
  AudioEncodingTypeAac32000Low = 0x010201,
  /**
   * @ignore
   */
  AudioEncodingTypeAac32000Medium = 0x010202,
  /**
   * @ignore
   */
  AudioEncodingTypeAac32000High = 0x010203,
  /**
   * @ignore
   */
  AudioEncodingTypeAac48000Medium = 0x010302,
  /**
   * @ignore
   */
  AudioEncodingTypeAac48000High = 0x010303,
  /**
   * @ignore
   */
  AudioEncodingTypeOpus16000Low = 0x020101,
  /**
   * @ignore
   */
  AudioEncodingTypeOpus16000Medium = 0x020102,
  /**
   * @ignore
   */
  AudioEncodingTypeOpus48000Medium = 0x020302,
  /**
   * @ignore
   */
  AudioEncodingTypeOpus48000High = 0x020303,
}

/**
 * @ignore
 */
export enum WatermarkFitMode {
  /**
   * @ignore
   */
  FitModeCoverPosition = 0,
  /**
   * @ignore
   */
  FitModeUseImageRatio = 1,
}

/**
 * @ignore
 */
export class EncodedAudioFrameAdvancedSettings {
  /**
   * @ignore
   */
  speech?: boolean;
  /**
   * @ignore
   */
  sendEvenIfEmpty?: boolean;
}

/**
 * @ignore
 */
export class EncodedAudioFrameInfo {
  /**
   * @ignore
   */
  codec?: AudioCodecType;
  /**
   * @ignore
   */
  sampleRateHz?: number;
  /**
   * @ignore
   */
  samplesPerChannel?: number;
  /**
   * @ignore
   */
  numberOfChannels?: number;
  /**
   * @ignore
   */
  advancedSettings?: EncodedAudioFrameAdvancedSettings;
  /**
   * @ignore
   */
  captureTimeMs?: number;
}

/**
 * @ignore
 */
export class AudioPcmDataInfo {
  /**
   * @ignore
   */
  samplesPerChannel?: number;
  /**
   * @ignore
   */
  channelNum?: number;
  /**
   * @ignore
   */
  samplesOut?: number;
  /**
   * @ignore
   */
  elapsedTimeMs?: number;
  /**
   * @ignore
   */
  ntpTimeMs?: number;
}

/**
 * @ignore
 */
export enum H264PacketizeMode {
  /**
   * @ignore
   */
  NonInterleaved = 0,
  /**
   * @ignore
   */
  SingleNalUnit = 1,
}

/**
 * @ignore
 */
export enum VideoStreamType {
  /**
   * @ignore
   */
  VideoStreamHigh = 0,
  /**
   * @ignore
   */
  VideoStreamLow = 1,
  /**
   * @ignore
   */
  VideoStreamLayer1 = 4,
  /**
   * @ignore
   */
  VideoStreamLayer2 = 5,
  /**
   * @ignore
   */
  VideoStreamLayer3 = 6,
  /**
   * @ignore
   */
  VideoStreamLayer4 = 7,
  /**
   * @ignore
   */
  VideoStreamLayer5 = 8,
  /**
   * @ignore
   */
  VideoStreamLayer6 = 9,
}

/**
 * @ignore
 */
export class VideoSubscriptionOptions {
  /**
   * @ignore
   */
  type?: VideoStreamType;
  /**
   * @ignore
   */
  encodedFrameOnly?: boolean;
}

/**
 * @ignore
 */
export enum MaxUserAccountLengthType {
  /**
   * @ignore
   */
  MaxUserAccountLength = 256,
}

/**
 * @ignore
 */
export class EncodedVideoFrameInfo {
  /**
   * @ignore
   */
  codecType?: VideoCodecType;
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
  framesPerSecond?: number;
  /**
   * @ignore
   */
  frameType?: VideoFrameType;
  /**
   * @ignore
   */
  rotation?: VideoOrientation;
  /**
   * @ignore
   */
  trackId?: number;
  /**
   * @ignore
   */
  captureTimeMs?: number;
  /**
   * @ignore
   */
  decodeTimeMs?: number;
  /**
   * @ignore
   */
  streamType?: VideoStreamType;
  /**
   * @ignore
   */
  presentationMs?: number;
}

/**
 * @ignore
 */
export enum CompressionPreference {
  /**
   * @ignore
   */
  PreferCompressionAuto = -1,
  /**
   * @ignore
   */
  PreferLowLatency = 0,
  /**
   * @ignore
   */
  PreferQuality = 1,
}

/**
 * @ignore
 */
export enum EncodingPreference {
  /**
   * @ignore
   */
  PreferAuto = -1,
  /**
   * @ignore
   */
  PreferSoftware = 0,
  /**
   * @ignore
   */
  PreferHardware = 1,
}

/**
 * @ignore
 */
export class AdvanceOptions {
  /**
   * @ignore
   */
  encodingPreference?: EncodingPreference;
  /**
   * @ignore
   */
  compressionPreference?: CompressionPreference;
  /**
   * @ignore
   */
  encodeAlpha?: boolean;
}

/**
 * @ignore
 */
export enum VideoMirrorModeType {
  /**
   * @ignore
   */
  VideoMirrorModeAuto = 0,
  /**
   * @ignore
   */
  VideoMirrorModeEnabled = 1,
  /**
   * @ignore
   */
  VideoMirrorModeDisabled = 2,
}

/**
 * @ignore
 */
export enum CameraFormatType {
  /**
   * @ignore
   */
  CameraFormatNv12 = 0,
  /**
   * @ignore
   */
  CameraFormatBgra = 1,
}

/**
 * @ignore
 */
export enum VideoModuleType {
  /**
   * @ignore
   */
  VideoModuleCapturer = 0,
  /**
   * @ignore
   */
  VideoModuleSoftwareEncoder = 1,
  /**
   * @ignore
   */
  VideoModuleHardwareEncoder = 2,
  /**
   * @ignore
   */
  VideoModuleSoftwareDecoder = 3,
  /**
   * @ignore
   */
  VideoModuleHardwareDecoder = 4,
  /**
   * @ignore
   */
  VideoModuleRenderer = 5,
}

/**
 * @ignore
 */
export enum HdrCapability {
  /**
   * @ignore
   */
  HdrCapabilityUnknown = -1,
  /**
   * @ignore
   */
  HdrCapabilityUnsupported = 0,
  /**
   * @ignore
   */
  HdrCapabilitySupported = 1,
}

/**
 * @ignore
 */
export enum CodecCapMask {
  /**
   * @ignore
   */
  CodecCapMaskNone = 0,
  /**
   * @ignore
   */
  CodecCapMaskHwDec = 1 << 0,
  /**
   * @ignore
   */
  CodecCapMaskHwEnc = 1 << 1,
  /**
   * @ignore
   */
  CodecCapMaskSwDec = 1 << 2,
  /**
   * @ignore
   */
  CodecCapMaskSwEnc = 1 << 3,
}

/**
 * @ignore
 */
export class CodecCapLevels {
  /**
   * @ignore
   */
  hwDecodingLevel?: VideoCodecCapabilityLevel;
  /**
   * @ignore
   */
  swDecodingLevel?: VideoCodecCapabilityLevel;
}

/**
 * @ignore
 */
export class CodecCapInfo {
  /**
   * @ignore
   */
  codecType?: VideoCodecType;
  /**
   * @ignore
   */
  codecCapMask?: number;
  /**
   * @ignore
   */
  codecLevels?: CodecCapLevels;
}

/**
 * @ignore
 */
export class FocalLengthInfo {
  /**
   * @ignore
   */
  cameraDirection?: number;
  /**
   * @ignore
   */
  focalLengthType?: CameraFocalLengthType;
}

/**
 * @ignore
 */
export class VideoEncoderConfiguration {
  /**
   * @ignore
   */
  codecType?: VideoCodecType;
  /**
   * @ignore
   */
  dimensions?: VideoDimensions;
  /**
   * @ignore
   */
  frameRate?: number;
  /**
   * @ignore
   */
  bitrate?: number;
  /**
   * @ignore
   */
  minBitrate?: number;
  /**
   * @ignore
   */
  orientationMode?: OrientationMode;
  /**
   * @ignore
   */
  degradationPreference?: DegradationPreference;
  /**
   * @ignore
   */
  mirrorMode?: VideoMirrorModeType;
  /**
   * @ignore
   */
  advanceOptions?: AdvanceOptions;
}

/**
 * @ignore
 */
export class DataStreamConfig {
  /**
   * @ignore
   */
  syncWithAudio?: boolean;
  /**
   * @ignore
   */
  ordered?: boolean;
}

/**
 * @ignore
 */
export enum SimulcastStreamMode {
  /**
   * @ignore
   */
  AutoSimulcastStream = -1,
  /**
   * @ignore
   */
  DisableSimulcastStream = 0,
  /**
   * @ignore
   */
  EnableSimulcastStream = 1,
}

/**
 * @ignore
 */
export class SimulcastStreamConfig {
  /**
   * @ignore
   */
  dimensions?: VideoDimensions;
  /**
   * @ignore
   */
  kBitrate?: number;
  /**
   * @ignore
   */
  framerate?: number;
}

/**
 * @ignore
 */
export enum StreamLayerIndex {
  /**
   * @ignore
   */
  StreamLayer1 = 0,
  /**
   * @ignore
   */
  StreamLayer2 = 1,
  /**
   * @ignore
   */
  StreamLayer3 = 2,
  /**
   * @ignore
   */
  StreamLayer4 = 3,
  /**
   * @ignore
   */
  StreamLayer5 = 4,
  /**
   * @ignore
   */
  StreamLayer6 = 5,
  /**
   * @ignore
   */
  StreamLow = 6,
  /**
   * @ignore
   */
  StreamLayerCountMax = 7,
}

/**
 * @ignore
 */
export class StreamLayerConfig {
  /**
   * @ignore
   */
  dimensions?: VideoDimensions;
  /**
   * @ignore
   */
  framerate?: number;
  /**
   * @ignore
   */
  enable?: boolean;
}

/**
 * @ignore
 */
export class SimulcastConfig {
  /**
   * @ignore
   */
  configs?: StreamLayerConfig[];
  /**
   * @ignore
   */
  publish_fallback_enable?: boolean;
}

/**
 * @ignore
 */
export class Rectangle {
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
}

/**
 * @ignore
 */
export class WatermarkRatio {
  /**
   * @ignore
   */
  xRatio?: number;
  /**
   * @ignore
   */
  yRatio?: number;
  /**
   * @ignore
   */
  widthRatio?: number;
}

/**
 * @ignore
 */
export class WatermarkOptions {
  /**
   * @ignore
   */
  visibleInPreview?: boolean;
  /**
   * @ignore
   */
  positionInLandscapeMode?: Rectangle;
  /**
   * @ignore
   */
  positionInPortraitMode?: Rectangle;
  /**
   * @ignore
   */
  watermarkRatio?: WatermarkRatio;
  /**
   * @ignore
   */
  mode?: WatermarkFitMode;
  /**
   * @ignore
   */
  zOrder?: number;
}

/**
 * @ignore
 */
export enum WatermarkSourceType {
  /**
   * @ignore
   */
  Image = 0,
  /**
   * @ignore
   */
  Buffer = 1,
  /**
   * @ignore
   */
  Literal = 2,
  /**
   * @ignore
   */
  Timestamps = 3,
}

/**
 * @ignore
 */
export class WatermarkTimestamp {
  /**
   * @ignore
   */
  fontSize?: number;
  /**
   * @ignore
   */
  fontFilePath?: string;
  /**
   * @ignore
   */
  strokeWidth?: number;
  /**
   * @ignore
   */
  format?: string;
}

/**
 * @ignore
 */
export class WatermarkLiteral {
  /**
   * @ignore
   */
  fontSize?: number;
  /**
   * @ignore
   */
  strokeWidth?: number;
  /**
   * @ignore
   */
  wmLiteral?: string;
  /**
   * @ignore
   */
  fontFilePath?: string;
}

/**
 * @ignore
 */
export class WatermarkBuffer {
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
  length?: number;
  /**
   * @ignore
   */
  format?: VideoPixelFormat;
  /**
   * @ignore
   */
  buffer?: Uint8Array;
}

/**
 * @ignore
 */
export class WatermarkConfig {
  /**
   * @ignore
   */
  id?: string;
  /**
   * @ignore
   */
  type?: WatermarkSourceType;
  /**
   * @ignore
   */
  buffer?: WatermarkBuffer;
  /**
   * @ignore
   */
  timestamp?: WatermarkTimestamp;
  /**
   * @ignore
   */
  literal?: WatermarkLiteral;
  /**
   * @ignore
   */
  imageUrl?: string;
  /**
   * @ignore
   */
  options?: WatermarkOptions;
}

/**
 * @ignore
 */
export enum MultipathMode {
  /**
   * @ignore
   */
  Duplicate = 0,
  /**
   * @ignore
   */
  Dynamic = 1,
}

/**
 * @ignore
 */
export enum MultipathType {
  /**
   * @ignore
   */
  Lan = 0,
  /**
   * @ignore
   */
  Wifi = 1,
  /**
   * @ignore
   */
  Mobile = 2,
  /**
   * @ignore
   */
  Unknown = 99,
}

/**
 * @ignore
 */
export class PathStats {
  /**
   * @ignore
   */
  type?: MultipathType;
  /**
   * @ignore
   */
  txKBitRate?: number;
  /**
   * @ignore
   */
  rxKBitRate?: number;
}

/**
 * @ignore
 */
export class MultipathStats {
  /**
   * @ignore
   */
  lanTxBytes?: number;
  /**
   * @ignore
   */
  lanRxBytes?: number;
  /**
   * @ignore
   */
  wifiTxBytes?: number;
  /**
   * @ignore
   */
  wifiRxBytes?: number;
  /**
   * @ignore
   */
  mobileTxBytes?: number;
  /**
   * @ignore
   */
  mobileRxBytes?: number;
  /**
   * @ignore
   */
  activePathNum?: number;
  /**
   * @ignore
   */
  pathStats?: PathStats[];
}

/**
 * @ignore
 */
export class RtcStats {
  /**
   * @ignore
   */
  duration?: number;
  /**
   * @ignore
   */
  txBytes?: number;
  /**
   * @ignore
   */
  rxBytes?: number;
  /**
   * @ignore
   */
  txAudioBytes?: number;
  /**
   * @ignore
   */
  txVideoBytes?: number;
  /**
   * @ignore
   */
  rxAudioBytes?: number;
  /**
   * @ignore
   */
  rxVideoBytes?: number;
  /**
   * @ignore
   */
  txKBitRate?: number;
  /**
   * @ignore
   */
  rxKBitRate?: number;
  /**
   * @ignore
   */
  rxAudioKBitRate?: number;
  /**
   * @ignore
   */
  txAudioKBitRate?: number;
  /**
   * @ignore
   */
  rxVideoKBitRate?: number;
  /**
   * @ignore
   */
  txVideoKBitRate?: number;
  /**
   * @ignore
   */
  lastmileDelay?: number;
  /**
   * @ignore
   */
  userCount?: number;
  /**
   * @ignore
   */
  cpuAppUsage?: number;
  /**
   * @ignore
   */
  cpuTotalUsage?: number;
  /**
   * @ignore
   */
  gatewayRtt?: number;
  /**
   * @ignore
   */
  memoryAppUsageRatio?: number;
  /**
   * @ignore
   */
  memoryTotalUsageRatio?: number;
  /**
   * @ignore
   */
  memoryAppUsageInKbytes?: number;
  /**
   * @ignore
   */
  connectTimeMs?: number;
  /**
   * @ignore
   */
  firstAudioPacketDuration?: number;
  /**
   * @ignore
   */
  firstVideoPacketDuration?: number;
  /**
   * @ignore
   */
  firstVideoKeyFramePacketDuration?: number;
  /**
   * @ignore
   */
  packetsBeforeFirstKeyFramePacket?: number;
  /**
   * @ignore
   */
  firstAudioPacketDurationAfterUnmute?: number;
  /**
   * @ignore
   */
  firstVideoPacketDurationAfterUnmute?: number;
  /**
   * @ignore
   */
  firstVideoKeyFramePacketDurationAfterUnmute?: number;
  /**
   * @ignore
   */
  firstVideoKeyFrameDecodedDurationAfterUnmute?: number;
  /**
   * @ignore
   */
  firstVideoKeyFrameRenderedDurationAfterUnmute?: number;
  /**
   * @ignore
   */
  txPacketLossRate?: number;
  /**
   * @ignore
   */
  rxPacketLossRate?: number;
  /**
   * @ignore
   */
  lanAccelerateState?: number;
}

/**
 * @ignore
 */
export enum ClientRoleType {
  /**
   * @ignore
   */
  ClientRoleBroadcaster = 1,
  /**
   * @ignore
   */
  ClientRoleAudience = 2,
}

/**
 * @ignore
 */
export enum QualityAdaptIndication {
  /**
   * @ignore
   */
  AdaptNone = 0,
  /**
   * @ignore
   */
  AdaptUpBandwidth = 1,
  /**
   * @ignore
   */
  AdaptDownBandwidth = 2,
}

/**
 * @ignore
 */
export enum AudienceLatencyLevelType {
  /**
   * @ignore
   */
  AudienceLatencyLevelLowLatency = 1,
  /**
   * @ignore
   */
  AudienceLatencyLevelUltraLowLatency = 2,
}

/**
 * @ignore
 */
export class ClientRoleOptions {
  /**
   * @ignore
   */
  audienceLatencyLevel?: AudienceLatencyLevelType;
}

/**
 * @ignore
 */
export enum ExperienceQualityType {
  /**
   * @ignore
   */
  ExperienceQualityGood = 0,
  /**
   * @ignore
   */
  ExperienceQualityBad = 1,
}

/**
 * @ignore
 */
export enum ExperiencePoorReason {
  /**
   * @ignore
   */
  ExperienceReasonNone = 0,
  /**
   * @ignore
   */
  RemoteNetworkQualityPoor = 1,
  /**
   * @ignore
   */
  LocalNetworkQualityPoor = 2,
  /**
   * @ignore
   */
  WirelessSignalPoor = 4,
  /**
   * @ignore
   */
  WifiBluetoothCoexist = 8,
}

/**
 * @ignore
 */
export enum AudioAinsMode {
  /**
   * @ignore
   */
  AinsModeBalanced = 0,
  /**
   * @ignore
   */
  AinsModeAggressive = 1,
  /**
   * @ignore
   */
  AinsModeUltralowlatency = 2,
}

/**
 * @ignore
 */
export enum AudioProfileType {
  /**
   * @ignore
   */
  AudioProfileDefault = 0,
  /**
   * @ignore
   */
  AudioProfileSpeechStandard = 1,
  /**
   * @ignore
   */
  AudioProfileMusicStandard = 2,
  /**
   * @ignore
   */
  AudioProfileMusicStandardStereo = 3,
  /**
   * @ignore
   */
  AudioProfileMusicHighQuality = 4,
  /**
   * @ignore
   */
  AudioProfileMusicHighQualityStereo = 5,
  /**
   * @ignore
   */
  AudioProfileIot = 6,
  /**
   * @ignore
   */
  AudioProfileNum = 7,
}

/**
 * @ignore
 */
export enum AudioScenarioType {
  /**
   * @ignore
   */
  AudioScenarioDefault = 0,
  /**
   * @ignore
   */
  AudioScenarioGameStreaming = 3,
  /**
   * @ignore
   */
  AudioScenarioChatroom = 5,
  /**
   * @ignore
   */
  AudioScenarioChorus = 7,
  /**
   * @ignore
   */
  AudioScenarioMeeting = 8,
  /**
   * @ignore
   */
  AudioScenarioAiServer = 9,
  /**
   * @ignore
   */
  AudioScenarioAiClient = 10,
  /**
   * @ignore
   */
  AudioScenarioNum = 11,
}

/**
 * @ignore
 */
export class VideoFormat {
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
}

/**
 * @ignore
 */
export enum VideoContentHint {
  /**
   * @ignore
   */
  ContentHintNone = 0,
  /**
   * @ignore
   */
  ContentHintMotion = 1,
  /**
   * @ignore
   */
  ContentHintDetails = 2,
}

/**
 * @ignore
 */
export enum ScreenScenarioType {
  /**
   * @ignore
   */
  ScreenScenarioDocument = 1,
  /**
   * @ignore
   */
  ScreenScenarioGaming = 2,
  /**
   * @ignore
   */
  ScreenScenarioVideo = 3,
  /**
   * @ignore
   */
  ScreenScenarioRdc = 4,
}

/**
 * @ignore
 */
export enum VideoApplicationScenarioType {
  /**
   * @ignore
   */
  ApplicationScenarioGeneral = 0,
  /**
   * @ignore
   */
  ApplicationScenarioMeeting = 1,
  /**
   * @ignore
   */
  ApplicationScenario1v1 = 2,
  /**
   * @ignore
   */
  ApplicationScenarioLiveshow = 3,
}

/**
 * @ignore
 */
export enum VideoQoePreferenceType {
  /**
   * @ignore
   */
  VideoQoePreferenceBalance = 1,
  /**
   * @ignore
   */
  VideoQoePreferenceDelayFirst = 2,
  /**
   * @ignore
   */
  VideoQoePreferencePictureQualityFirst = 3,
  /**
   * @ignore
   */
  VideoQoePreferenceFluencyFirst = 4,
}

/**
 * @ignore
 */
export enum CaptureBrightnessLevelType {
  /**
   * @ignore
   */
  CaptureBrightnessLevelInvalid = -1,
  /**
   * @ignore
   */
  CaptureBrightnessLevelNormal = 0,
  /**
   * @ignore
   */
  CaptureBrightnessLevelBright = 1,
  /**
   * @ignore
   */
  CaptureBrightnessLevelDark = 2,
}

/**
 * @ignore
 */
export enum CameraStabilizationMode {
  /**
   * @ignore
   */
  CameraStabilizationModeOff = -1,
  /**
   * @ignore
   */
  CameraStabilizationModeAuto = 0,
  /**
   * @ignore
   */
  CameraStabilizationModeLevel1 = 1,
  /**
   * @ignore
   */
  CameraStabilizationModeLevel2 = 2,
  /**
   * @ignore
   */
  CameraStabilizationModeLevel3 = 3,
  /**
   * @ignore
   */
  CameraStabilizationModeMaxLevel = 3,
}

/**
 * @ignore
 */
export enum LocalAudioStreamState {
  /**
   * @ignore
   */
  LocalAudioStreamStateStopped = 0,
  /**
   * @ignore
   */
  LocalAudioStreamStateRecording = 1,
  /**
   * @ignore
   */
  LocalAudioStreamStateEncoding = 2,
  /**
   * @ignore
   */
  LocalAudioStreamStateFailed = 3,
}

/**
 * @ignore
 */
export enum LocalAudioStreamReason {
  /**
   * @ignore
   */
  LocalAudioStreamReasonOk = 0,
  /**
   * @ignore
   */
  LocalAudioStreamReasonFailure = 1,
  /**
   * @ignore
   */
  LocalAudioStreamReasonDeviceNoPermission = 2,
  /**
   * @ignore
   */
  LocalAudioStreamReasonDeviceBusy = 3,
  /**
   * @ignore
   */
  LocalAudioStreamReasonRecordFailure = 4,
  /**
   * @ignore
   */
  LocalAudioStreamReasonEncodeFailure = 5,
  /**
   * @ignore
   */
  LocalAudioStreamReasonNoRecordingDevice = 6,
  /**
   * @ignore
   */
  LocalAudioStreamReasonNoPlayoutDevice = 7,
  /**
   * @ignore
   */
  LocalAudioStreamReasonInterrupted = 8,
  /**
   * @ignore
   */
  LocalAudioStreamReasonRecordInvalidId = 9,
  /**
   * @ignore
   */
  LocalAudioStreamReasonPlayoutInvalidId = 10,
}

/**
 * @ignore
 */
export enum LocalVideoStreamState {
  /**
   * @ignore
   */
  LocalVideoStreamStateStopped = 0,
  /**
   * @ignore
   */
  LocalVideoStreamStateCapturing = 1,
  /**
   * @ignore
   */
  LocalVideoStreamStateEncoding = 2,
  /**
   * @ignore
   */
  LocalVideoStreamStateFailed = 3,
}

/**
 * @ignore
 */
export enum LocalVideoEventType {
  /**
   * @ignore
   */
  LocalVideoEventTypeScreenCaptureWindowHidden = 1,
  /**
   * @ignore
   */
  LocalVideoEventTypeScreenCaptureWindowRecoverFromHidden = 2,
  /**
   * @ignore
   */
  LocalVideoEventTypeScreenCaptureStoppedByUser = 3,
  /**
   * @ignore
   */
  LocalVideoEventTypeScreenCaptureSystemInternalError = 4,
}

/**
 * @ignore
 */
export enum LocalVideoStreamReason {
  /**
   * @ignore
   */
  LocalVideoStreamReasonOk = 0,
  /**
   * @ignore
   */
  LocalVideoStreamReasonFailure = 1,
  /**
   * @ignore
   */
  LocalVideoStreamReasonDeviceNoPermission = 2,
  /**
   * @ignore
   */
  LocalVideoStreamReasonDeviceBusy = 3,
  /**
   * @ignore
   */
  LocalVideoStreamReasonCaptureFailure = 4,
  /**
   * @ignore
   */
  LocalVideoStreamReasonCodecNotSupport = 5,
  /**
   * @ignore
   */
  LocalVideoStreamReasonCaptureInbackground = 6,
  /**
   * @ignore
   */
  LocalVideoStreamReasonCaptureMultipleForegroundApps = 7,
  /**
   * @ignore
   */
  LocalVideoStreamReasonDeviceNotFound = 8,
  /**
   * @ignore
   */
  LocalVideoStreamReasonDeviceDisconnected = 9,
  /**
   * @ignore
   */
  LocalVideoStreamReasonDeviceInvalidId = 10,
  /**
   * @ignore
   */
  LocalVideoStreamReasonDeviceInterrupt = 14,
  /**
   * @ignore
   */
  LocalVideoStreamReasonDeviceFatalError = 15,
  /**
   * @ignore
   */
  LocalVideoStreamReasonDeviceSystemPressure = 101,
  /**
   * @ignore
   */
  LocalVideoStreamReasonScreenCaptureWindowMinimized = 11,
  /**
   * @ignore
   */
  LocalVideoStreamReasonScreenCaptureWindowClosed = 12,
  /**
   * @ignore
   */
  LocalVideoStreamReasonScreenCaptureWindowOccluded = 13,
  /**
   * @ignore
   */
  LocalVideoStreamReasonScreenCaptureWindowNotSupported = 20,
  /**
   * @ignore
   */
  LocalVideoStreamReasonScreenCaptureFailure = 21,
  /**
   * @ignore
   */
  LocalVideoStreamReasonScreenCaptureNoPermission = 22,
  /**
   * @ignore
   */
  LocalVideoStreamReasonScreenCaptureAutoFallback = 24,
  /**
   * @ignore
   */
  LocalVideoStreamReasonScreenCaptureWindowHidden = 25,
  /**
   * @ignore
   */
  LocalVideoStreamReasonScreenCaptureWindowRecoverFromHidden = 26,
  /**
   * @ignore
   */
  LocalVideoStreamReasonScreenCaptureWindowRecoverFromMinimized = 27,
  /**
   * @ignore
   */
  LocalVideoStreamReasonScreenCapturePaused = 28,
  /**
   * @ignore
   */
  LocalVideoStreamReasonScreenCaptureResumed = 29,
  /**
   * @ignore
   */
  LocalVideoStreamReasonScreenCaptureDisplayDisconnected = 30,
  /**
   * @ignore
   */
  LocalVideoStreamReasonScreenCaptureStoppedByUser = 31,
  /**
   * @ignore
   */
  LocalVideoStreamReasonScreenCaptureInterruptedByOther = 32,
  /**
   * @ignore
   */
  LocalVideoStreamReasonScreenCaptureStoppedByCall = 33,
  /**
   * @ignore
   */
  LocalVideoStreamReasonScreenCaptureExcludeWindowFailed = 34,
}

/**
 * @ignore
 */
export enum RemoteAudioState {
  /**
   * @ignore
   */
  RemoteAudioStateStopped = 0,
  /**
   * @ignore
   */
  RemoteAudioStateStarting = 1,
  /**
   * @ignore
   */
  RemoteAudioStateDecoding = 2,
  /**
   * @ignore
   */
  RemoteAudioStateFrozen = 3,
  /**
   * @ignore
   */
  RemoteAudioStateFailed = 4,
}

/**
 * @ignore
 */
export enum RemoteAudioStateReason {
  /**
   * @ignore
   */
  RemoteAudioReasonInternal = 0,
  /**
   * @ignore
   */
  RemoteAudioReasonNetworkCongestion = 1,
  /**
   * @ignore
   */
  RemoteAudioReasonNetworkRecovery = 2,
  /**
   * @ignore
   */
  RemoteAudioReasonLocalMuted = 3,
  /**
   * @ignore
   */
  RemoteAudioReasonLocalUnmuted = 4,
  /**
   * @ignore
   */
  RemoteAudioReasonRemoteMuted = 5,
  /**
   * @ignore
   */
  RemoteAudioReasonRemoteUnmuted = 6,
  /**
   * @ignore
   */
  RemoteAudioReasonRemoteOffline = 7,
  /**
   * @ignore
   */
  RemoteAudioReasonNoPacketReceive = 8,
  /**
   * @ignore
   */
  RemoteAudioReasonLocalPlayFailed = 9,
}

/**
 * @ignore
 */
export enum RemoteVideoState {
  /**
   * @ignore
   */
  RemoteVideoStateStopped = 0,
  /**
   * @ignore
   */
  RemoteVideoStateStarting = 1,
  /**
   * @ignore
   */
  RemoteVideoStateDecoding = 2,
  /**
   * @ignore
   */
  RemoteVideoStateFrozen = 3,
  /**
   * @ignore
   */
  RemoteVideoStateFailed = 4,
}

/**
 * @ignore
 */
export enum RemoteVideoStateReason {
  /**
   * @ignore
   */
  RemoteVideoStateReasonInternal = 0,
  /**
   * @ignore
   */
  RemoteVideoStateReasonNetworkCongestion = 1,
  /**
   * @ignore
   */
  RemoteVideoStateReasonNetworkRecovery = 2,
  /**
   * @ignore
   */
  RemoteVideoStateReasonLocalMuted = 3,
  /**
   * @ignore
   */
  RemoteVideoStateReasonLocalUnmuted = 4,
  /**
   * @ignore
   */
  RemoteVideoStateReasonRemoteMuted = 5,
  /**
   * @ignore
   */
  RemoteVideoStateReasonRemoteUnmuted = 6,
  /**
   * @ignore
   */
  RemoteVideoStateReasonRemoteOffline = 7,
  /**
   * @ignore
   */
  RemoteVideoStateReasonAudioFallback = 8,
  /**
   * @ignore
   */
  RemoteVideoStateReasonAudioFallbackRecovery = 9,
  /**
   * @ignore
   */
  RemoteVideoStateReasonVideoStreamTypeChangeToLow = 10,
  /**
   * @ignore
   */
  RemoteVideoStateReasonVideoStreamTypeChangeToHigh = 11,
  /**
   * @ignore
   */
  RemoteVideoStateReasonSdkInBackground = 12,
  /**
   * @ignore
   */
  RemoteVideoStateReasonCodecNotSupport = 13,
}

/**
 * @ignore
 */
export enum RemoteUserState {
  /**
   * @ignore
   */
  UserStateMuteAudio = 1 << 0,
  /**
   * @ignore
   */
  UserStateMuteVideo = 1 << 1,
  /**
   * @ignore
   */
  UserStateEnableVideo = 1 << 4,
  /**
   * @ignore
   */
  UserStateEnableLocalVideo = 1 << 8,
}

/**
 * @ignore
 */
export class VideoTrackInfo {
  /**
   * @ignore
   */
  isLocal?: boolean;
  /**
   * @ignore
   */
  ownerUid?: number;
  /**
   * @ignore
   */
  trackId?: number;
  /**
   * @ignore
   */
  channelId?: string;
  /**
   * @ignore
   */
  codecType?: VideoCodecType;
  /**
   * @ignore
   */
  encodedFrameOnly?: boolean;
  /**
   * @ignore
   */
  sourceType?: VideoSourceType;
  /**
   * @ignore
   */
  observationPosition?: number;
}

/**
 * @ignore
 */
export enum RemoteVideoDownscaleLevel {
  /**
   * @ignore
   */
  RemoteVideoDownscaleLevelNone = 0,
  /**
   * @ignore
   */
  RemoteVideoDownscaleLevel1 = 1,
  /**
   * @ignore
   */
  RemoteVideoDownscaleLevel2 = 2,
  /**
   * @ignore
   */
  RemoteVideoDownscaleLevel3 = 3,
  /**
   * @ignore
   */
  RemoteVideoDownscaleLevel4 = 4,
}

/**
 * @ignore
 */
export class AudioVolumeInfo {
  /**
   * @ignore
   */
  uid?: number;
  /**
   * @ignore
   */
  volume?: number;
  /**
   * @ignore
   */
  vad?: number;
  /**
   * @ignore
   */
  voicePitch?: number;
}

/**
 * @ignore
 */
export class DeviceInfo {
  /**
   * @ignore
   */
  isLowLatencyAudioSupported?: boolean;
}

/**
 * @ignore
 */
export class Packet {
  /**
   * @ignore
   */
  buffer?: Uint8Array;
  /**
   * @ignore
   */
  size?: number;
}

/**
 * @ignore
 */
export enum AudioSampleRateType {
  /**
   * @ignore
   */
  AudioSampleRate32000 = 32000,
  /**
   * @ignore
   */
  AudioSampleRate44100 = 44100,
  /**
   * @ignore
   */
  AudioSampleRate48000 = 48000,
}

/**
 * @ignore
 */
export enum VideoCodecTypeForStream {
  /**
   * @ignore
   */
  VideoCodecH264ForStream = 1,
  /**
   * @ignore
   */
  VideoCodecH265ForStream = 2,
}

/**
 * @ignore
 */
export enum VideoCodecProfileType {
  /**
   * @ignore
   */
  VideoCodecProfileBaseline = 66,
  /**
   * @ignore
   */
  VideoCodecProfileMain = 77,
  /**
   * @ignore
   */
  VideoCodecProfileHigh = 100,
}

/**
 * @ignore
 */
export enum AudioCodecProfileType {
  /**
   * @ignore
   */
  AudioCodecProfileLcAac = 0,
  /**
   * @ignore
   */
  AudioCodecProfileHeAac = 1,
  /**
   * @ignore
   */
  AudioCodecProfileHeAacV2 = 2,
}

/**
 * @ignore
 */
export class LocalAudioStats {
  /**
   * @ignore
   */
  numChannels?: number;
  /**
   * @ignore
   */
  sentSampleRate?: number;
  /**
   * @ignore
   */
  sentBitrate?: number;
  /**
   * @ignore
   */
  internalCodec?: number;
  /**
   * @ignore
   */
  txPacketLossRate?: number;
  /**
   * @ignore
   */
  audioDeviceDelay?: number;
  /**
   * @ignore
   */
  audioPlayoutDelay?: number;
  /**
   * @ignore
   */
  earMonitorDelay?: number;
  /**
   * @ignore
   */
  aecEstimatedDelay?: number;
}

/**
 * @ignore
 */
export enum RtmpStreamPublishState {
  /**
   * @ignore
   */
  RtmpStreamPublishStateIdle = 0,
  /**
   * @ignore
   */
  RtmpStreamPublishStateConnecting = 1,
  /**
   * @ignore
   */
  RtmpStreamPublishStateRunning = 2,
  /**
   * @ignore
   */
  RtmpStreamPublishStateRecovering = 3,
  /**
   * @ignore
   */
  RtmpStreamPublishStateFailure = 4,
  /**
   * @ignore
   */
  RtmpStreamPublishStateDisconnecting = 5,
}

/**
 * @ignore
 */
export enum RtmpStreamPublishReason {
  /**
   * @ignore
   */
  RtmpStreamPublishReasonOk = 0,
  /**
   * @ignore
   */
  RtmpStreamPublishReasonInvalidArgument = 1,
  /**
   * @ignore
   */
  RtmpStreamPublishReasonEncryptedStreamNotAllowed = 2,
  /**
   * @ignore
   */
  RtmpStreamPublishReasonConnectionTimeout = 3,
  /**
   * @ignore
   */
  RtmpStreamPublishReasonInternalServerError = 4,
  /**
   * @ignore
   */
  RtmpStreamPublishReasonRtmpServerError = 5,
  /**
   * @ignore
   */
  RtmpStreamPublishReasonTooOften = 6,
  /**
   * @ignore
   */
  RtmpStreamPublishReasonReachLimit = 7,
  /**
   * @ignore
   */
  RtmpStreamPublishReasonNotAuthorized = 8,
  /**
   * @ignore
   */
  RtmpStreamPublishReasonStreamNotFound = 9,
  /**
   * @ignore
   */
  RtmpStreamPublishReasonFormatNotSupported = 10,
  /**
   * @ignore
   */
  RtmpStreamPublishReasonNotBroadcaster = 11,
  /**
   * @ignore
   */
  RtmpStreamPublishReasonTranscodingNoMixStream = 13,
  /**
   * @ignore
   */
  RtmpStreamPublishReasonNetDown = 14,
  /**
   * @ignore
   */
  RtmpStreamPublishReasonInvalidAppid = 15,
  /**
   * @ignore
   */
  RtmpStreamPublishReasonInvalidPrivilege = 16,
  /**
   * @ignore
   */
  RtmpStreamUnpublishReasonOk = 100,
}

/**
 * @ignore
 */
export enum RtmpStreamingEvent {
  /**
   * @ignore
   */
  RtmpStreamingEventFailedLoadImage = 1,
  /**
   * @ignore
   */
  RtmpStreamingEventUrlAlreadyInUse = 2,
  /**
   * @ignore
   */
  RtmpStreamingEventAdvancedFeatureNotSupport = 3,
  /**
   * @ignore
   */
  RtmpStreamingEventRequestTooOften = 4,
}

/**
 * @ignore
 */
export class RtcImage {
  /**
   * @ignore
   */
  url?: string;
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
}

/**
 * @ignore
 */
export class LiveStreamAdvancedFeature {
  /**
   * @ignore
   */
  featureName?: string;
  /**
   * @ignore
   */
  opened?: boolean;
}

/**
 * @ignore
 */
export enum ConnectionStateType {
  /**
   * @ignore
   */
  ConnectionStateDisconnected = 1,
  /**
   * @ignore
   */
  ConnectionStateConnecting = 2,
  /**
   * @ignore
   */
  ConnectionStateConnected = 3,
  /**
   * @ignore
   */
  ConnectionStateReconnecting = 4,
  /**
   * @ignore
   */
  ConnectionStateFailed = 5,
}

/**
 * @ignore
 */
export class TranscodingUser {
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
  audioChannel?: number;
}

/**
 * @ignore
 */
export class LiveTranscoding {
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
  videoBitrate?: number;
  /**
   * @ignore
   */
  videoFramerate?: number;
  /**
   * @ignore
   */
  lowLatency?: boolean;
  /**
   * @ignore
   */
  videoGop?: number;
  /**
   * @ignore
   */
  videoCodecProfile?: VideoCodecProfileType;
  /**
   * @ignore
   */
  backgroundColor?: number;
  /**
   * @ignore
   */
  videoCodecType?: VideoCodecTypeForStream;
  /**
   * @ignore
   */
  userCount?: number;
  /**
   * @ignore
   */
  transcodingUsers?: TranscodingUser[];
  /**
   * @ignore
   */
  transcodingExtraInfo?: string;
  /**
   * @ignore
   */
  metadata?: string;
  /**
   * @ignore
   */
  watermark?: RtcImage[];
  /**
   * @ignore
   */
  watermarkCount?: number;
  /**
   * @ignore
   */
  backgroundImage?: RtcImage[];
  /**
   * @ignore
   */
  backgroundImageCount?: number;
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
  /**
   * @ignore
   */
  audioCodecProfile?: AudioCodecProfileType;
  /**
   * @ignore
   */
  advancedFeatures?: LiveStreamAdvancedFeature[];
  /**
   * @ignore
   */
  advancedFeatureCount?: number;
}

/**
 * @ignore
 */
export class TranscodingVideoStream {
  /**
   * @ignore
   */
  sourceType?: VideoSourceType;
  /**
   * @ignore
   */
  remoteUserUid?: number;
  /**
   * @ignore
   */
  imageUrl?: string;
  /**
   * @ignore
   */
  mediaPlayerId?: number;
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
  mirror?: boolean;
}

/**
 * @ignore
 */
export class LocalTranscoderConfiguration {
  /**
   * @ignore
   */
  streamCount?: number;
  /**
   * @ignore
   */
  videoInputStreams?: TranscodingVideoStream[];
  /**
   * @ignore
   */
  videoOutputConfiguration?: VideoEncoderConfiguration;
  /**
   * @ignore
   */
  syncWithPrimaryCamera?: boolean;
}

/**
 * @ignore
 */
export enum VideoTranscoderError {
  /**
   * @ignore
   */
  VtErrVideoSourceNotReady = 1,
  /**
   * @ignore
   */
  VtErrInvalidVideoSourceType = 2,
  /**
   * @ignore
   */
  VtErrInvalidImagePath = 3,
  /**
   * @ignore
   */
  VtErrUnsupportImageFormat = 4,
  /**
   * @ignore
   */
  VtErrInvalidLayout = 5,
  /**
   * @ignore
   */
  VtErrInternal = 20,
}

/**
 * @ignore
 */
export class MixedAudioStream {
  /**
   * @ignore
   */
  sourceType?: AudioSourceType;
  /**
   * @ignore
   */
  remoteUserUid?: number;
  /**
   * @ignore
   */
  channelId?: string;
  /**
   * @ignore
   */
  trackId?: number;
}

/**
 * @ignore
 */
export class LocalAudioMixerConfiguration {
  /**
   * @ignore
   */
  streamCount?: number;
  /**
   * @ignore
   */
  audioInputStreams?: MixedAudioStream[];
  /**
   * @ignore
   */
  syncWithLocalMic?: boolean;
}

/**
 * @ignore
 */
export class LastmileProbeConfig {
  /**
   * @ignore
   */
  probeUplink?: boolean;
  /**
   * @ignore
   */
  probeDownlink?: boolean;
  /**
   * @ignore
   */
  expectedUplinkBitrate?: number;
  /**
   * @ignore
   */
  expectedDownlinkBitrate?: number;
}

/**
 * @ignore
 */
export enum LastmileProbeResultState {
  /**
   * @ignore
   */
  LastmileProbeResultComplete = 1,
  /**
   * @ignore
   */
  LastmileProbeResultIncompleteNoBwe = 2,
  /**
   * @ignore
   */
  LastmileProbeResultUnavailable = 3,
}

/**
 * @ignore
 */
export class LastmileProbeOneWayResult {
  /**
   * @ignore
   */
  packetLossRate?: number;
  /**
   * @ignore
   */
  jitter?: number;
  /**
   * @ignore
   */
  availableBandwidth?: number;
}

/**
 * @ignore
 */
export class LastmileProbeResult {
  /**
   * @ignore
   */
  state?: LastmileProbeResultState;
  /**
   * @ignore
   */
  uplinkReport?: LastmileProbeOneWayResult;
  /**
   * @ignore
   */
  downlinkReport?: LastmileProbeOneWayResult;
  /**
   * @ignore
   */
  rtt?: number;
}

/**
 * @ignore
 */
export enum ConnectionChangedReasonType {
  /**
   * @ignore
   */
  ConnectionChangedConnecting = 0,
  /**
   * @ignore
   */
  ConnectionChangedJoinSuccess = 1,
  /**
   * @ignore
   */
  ConnectionChangedInterrupted = 2,
  /**
   * @ignore
   */
  ConnectionChangedBannedByServer = 3,
  /**
   * @ignore
   */
  ConnectionChangedJoinFailed = 4,
  /**
   * @ignore
   */
  ConnectionChangedLeaveChannel = 5,
  /**
   * @ignore
   */
  ConnectionChangedInvalidAppId = 6,
  /**
   * @ignore
   */
  ConnectionChangedInvalidChannelName = 7,
  /**
   * @ignore
   */
  ConnectionChangedInvalidToken = 8,
  /**
   * @ignore
   */
  ConnectionChangedTokenExpired = 9,
  /**
   * @ignore
   */
  ConnectionChangedRejectedByServer = 10,
  /**
   * @ignore
   */
  ConnectionChangedSettingProxyServer = 11,
  /**
   * @ignore
   */
  ConnectionChangedRenewToken = 12,
  /**
   * @ignore
   */
  ConnectionChangedClientIpAddressChanged = 13,
  /**
   * @ignore
   */
  ConnectionChangedKeepAliveTimeout = 14,
  /**
   * @ignore
   */
  ConnectionChangedRejoinSuccess = 15,
  /**
   * @ignore
   */
  ConnectionChangedLost = 16,
  /**
   * @ignore
   */
  ConnectionChangedEchoTest = 17,
  /**
   * @ignore
   */
  ConnectionChangedClientIpAddressChangedByUser = 18,
  /**
   * @ignore
   */
  ConnectionChangedSameUidLogin = 19,
  /**
   * @ignore
   */
  ConnectionChangedTooManyBroadcasters = 20,
  /**
   * @ignore
   */
  ConnectionChangedLicenseValidationFailure = 21,
  /**
   * @ignore
   */
  ConnectionChangedCertificationVeryfyFailure = 22,
  /**
   * @ignore
   */
  ConnectionChangedStreamChannelNotAvailable = 23,
  /**
   * @ignore
   */
  ConnectionChangedInconsistentAppid = 24,
}

/**
 * @ignore
 */
export enum ClientRoleChangeFailedReason {
  /**
   * @ignore
   */
  ClientRoleChangeFailedTooManyBroadcasters = 1,
  /**
   * @ignore
   */
  ClientRoleChangeFailedNotAuthorized = 2,
  /**
   * @ignore
   */
  ClientRoleChangeFailedRequestTimeOut = 3,
  /**
   * @ignore
   */
  ClientRoleChangeFailedConnectionFailed = 4,
}

/**
 * @ignore
 */
export enum NetworkType {
  /**
   * @ignore
   */
  NetworkTypeUnknown = -1,
  /**
   * @ignore
   */
  NetworkTypeDisconnected = 0,
  /**
   * @ignore
   */
  NetworkTypeLan = 1,
  /**
   * @ignore
   */
  NetworkTypeWifi = 2,
  /**
   * @ignore
   */
  NetworkTypeMobile2g = 3,
  /**
   * @ignore
   */
  NetworkTypeMobile3g = 4,
  /**
   * @ignore
   */
  NetworkTypeMobile4g = 5,
  /**
   * @ignore
   */
  NetworkTypeMobile5g = 6,
}

/**
 * @ignore
 */
export enum VideoViewSetupMode {
  /**
   * @ignore
   */
  VideoViewSetupReplace = 0,
  /**
   * @ignore
   */
  VideoViewSetupAdd = 1,
  /**
   * @ignore
   */
  VideoViewSetupRemove = 2,
}

/**
 * @ignore
 */
export class VideoCanvas {
  /**
   * @ignore
   */
  uid?: number;
  /**
   * @ignore
   */
  subviewUid?: number;
  /**
   * @ignore
   */
  view?: any;
  /**
   * @ignore
   */
  backgroundColor?: number;
  /**
   * @ignore
   */
  renderMode?: RenderModeType;
  /**
   * @ignore
   */
  mirrorMode?: VideoMirrorModeType;
  /**
   * @ignore
   */
  setupMode?: VideoViewSetupMode;
  /**
   * @ignore
   */
  sourceType?: VideoSourceType;
  /**
   * @ignore
   */
  mediaPlayerId?: number;
  /**
   * @ignore
   */
  cropArea?: Rectangle;
  /**
   * @ignore
   */
  enableAlphaMask?: boolean;
  /**
   * @ignore
   */
  position?: VideoModulePosition;
}

/**
 * @ignore
 */
export enum LighteningContrastLevel {
  /**
   * @ignore
   */
  LighteningContrastLow = 0,
  /**
   * @ignore
   */
  LighteningContrastNormal = 1,
  /**
   * @ignore
   */
  LighteningContrastHigh = 2,
}

/**
 * @ignore
 */
export class BeautyOptions {
  /**
   * @ignore
   */
  lighteningContrastLevel?: LighteningContrastLevel;
  /**
   * @ignore
   */
  lighteningLevel?: number;
  /**
   * @ignore
   */
  smoothnessLevel?: number;
  /**
   * @ignore
   */
  rednessLevel?: number;
  /**
   * @ignore
   */
  sharpnessLevel?: number;
}

/**
 * @ignore
 */
export enum FaceShapeArea {
  /**
   * @ignore
   */
  FaceShapeAreaNone = -1,
  /**
   * @ignore
   */
  FaceShapeAreaHeadscale = 100,
  /**
   * @ignore
   */
  FaceShapeAreaForehead = 101,
  /**
   * @ignore
   */
  FaceShapeAreaFacecontour = 102,
  /**
   * @ignore
   */
  FaceShapeAreaFacelength = 103,
  /**
   * @ignore
   */
  FaceShapeAreaFacewidth = 104,
  /**
   * @ignore
   */
  FaceShapeAreaCheekbone = 105,
  /**
   * @ignore
   */
  FaceShapeAreaCheek = 106,
  /**
   * @ignore
   */
  FaceShapeAreaMandible = 107,
  /**
   * @ignore
   */
  FaceShapeAreaChin = 108,
  /**
   * @ignore
   */
  FaceShapeAreaEyescale = 200,
  /**
   * @ignore
   */
  FaceShapeAreaEyedistance = 201,
  /**
   * @ignore
   */
  FaceShapeAreaEyeposition = 202,
  /**
   * @ignore
   */
  FaceShapeAreaLowereyelid = 203,
  /**
   * @ignore
   */
  FaceShapeAreaEyepupils = 204,
  /**
   * @ignore
   */
  FaceShapeAreaEyeinnercorner = 205,
  /**
   * @ignore
   */
  FaceShapeAreaEyeoutercorner = 206,
  /**
   * @ignore
   */
  FaceShapeAreaNoselength = 300,
  /**
   * @ignore
   */
  FaceShapeAreaNosewidth = 301,
  /**
   * @ignore
   */
  FaceShapeAreaNosewing = 302,
  /**
   * @ignore
   */
  FaceShapeAreaNoseroot = 303,
  /**
   * @ignore
   */
  FaceShapeAreaNosebridge = 304,
  /**
   * @ignore
   */
  FaceShapeAreaNosetip = 305,
  /**
   * @ignore
   */
  FaceShapeAreaNosegeneral = 306,
  /**
   * @ignore
   */
  FaceShapeAreaMouthscale = 400,
  /**
   * @ignore
   */
  FaceShapeAreaMouthposition = 401,
  /**
   * @ignore
   */
  FaceShapeAreaMouthsmile = 402,
  /**
   * @ignore
   */
  FaceShapeAreaMouthlip = 403,
  /**
   * @ignore
   */
  FaceShapeAreaEyebrowposition = 500,
  /**
   * @ignore
   */
  FaceShapeAreaEyebrowthickness = 501,
}

/**
 * @ignore
 */
export class FaceShapeAreaOptions {
  /**
   * @ignore
   */
  shapeArea?: FaceShapeArea;
  /**
   * @ignore
   */
  shapeIntensity?: number;
}

/**
 * @ignore
 */
export enum FaceShapeBeautyStyle {
  /**
   * @ignore
   */
  FaceShapeBeautyStyleFemale = 0,
  /**
   * @ignore
   */
  FaceShapeBeautyStyleMale = 1,
  /**
   * @ignore
   */
  FaceShapeBeautyStyleNatural = 2,
}

/**
 * @ignore
 */
export class FaceShapeBeautyOptions {
  /**
   * @ignore
   */
  shapeStyle?: FaceShapeBeautyStyle;
  /**
   * @ignore
   */
  styleIntensity?: number;
}

/**
 * @ignore
 */
export class FilterEffectOptions {
  /**
   * @ignore
   */
  path?: string;
  /**
   * @ignore
   */
  strength?: number;
}

/**
 * @ignore
 */
export enum LowLightEnhanceMode {
  /**
   * @ignore
   */
  LowLightEnhanceAuto = 0,
  /**
   * @ignore
   */
  LowLightEnhanceManual = 1,
}

/**
 * @ignore
 */
export enum LowLightEnhanceLevel {
  /**
   * @ignore
   */
  LowLightEnhanceLevelHighQuality = 0,
  /**
   * @ignore
   */
  LowLightEnhanceLevelFast = 1,
}

/**
 * @ignore
 */
export class LowlightEnhanceOptions {
  /**
   * @ignore
   */
  mode?: LowLightEnhanceMode;
  /**
   * @ignore
   */
  level?: LowLightEnhanceLevel;
}

/**
 * @ignore
 */
export enum VideoDenoiserMode {
  /**
   * @ignore
   */
  VideoDenoiserAuto = 0,
  /**
   * @ignore
   */
  VideoDenoiserManual = 1,
}

/**
 * @ignore
 */
export enum VideoDenoiserLevel {
  /**
   * @ignore
   */
  VideoDenoiserLevelHighQuality = 0,
  /**
   * @ignore
   */
  VideoDenoiserLevelFast = 1,
}

/**
 * @ignore
 */
export class VideoDenoiserOptions {
  /**
   * @ignore
   */
  mode?: VideoDenoiserMode;
  /**
   * @ignore
   */
  level?: VideoDenoiserLevel;
}

/**
 * @ignore
 */
export class ColorEnhanceOptions {
  /**
   * @ignore
   */
  strengthLevel?: number;
  /**
   * @ignore
   */
  skinProtectLevel?: number;
}

/**
 * @ignore
 */
export enum BackgroundSourceType {
  /**
   * @ignore
   */
  BackgroundNone = 0,
  /**
   * @ignore
   */
  BackgroundColor = 1,
  /**
   * @ignore
   */
  BackgroundImg = 2,
  /**
   * @ignore
   */
  BackgroundBlur = 3,
  /**
   * @ignore
   */
  BackgroundVideo = 4,
}

/**
 * @ignore
 */
export enum BackgroundBlurDegree {
  /**
   * @ignore
   */
  BlurDegreeLow = 1,
  /**
   * @ignore
   */
  BlurDegreeMedium = 2,
  /**
   * @ignore
   */
  BlurDegreeHigh = 3,
}

/**
 * @ignore
 */
export class VirtualBackgroundSource {
  /**
   * @ignore
   */
  background_source_type?: BackgroundSourceType;
  /**
   * @ignore
   */
  color?: number;
  /**
   * @ignore
   */
  source?: string;
  /**
   * @ignore
   */
  blur_degree?: BackgroundBlurDegree;
}

/**
 * @ignore
 */
export enum SegModelType {
  /**
   * @ignore
   */
  SegModelAi = 1,
  /**
   * @ignore
   */
  SegModelGreen = 2,
}

/**
 * @ignore
 */
export enum ScreenColorType {
  /**
   * @ignore
   */
  ScreenColorAuto = 0,
  /**
   * @ignore
   */
  ScreenColorGreen = 1,
  /**
   * @ignore
   */
  ScreenColorBlue = 2,
}

/**
 * @ignore
 */
export class SegmentationProperty {
  /**
   * @ignore
   */
  modelType?: SegModelType;
  /**
   * @ignore
   */
  greenCapacity?: number;
  /**
   * @ignore
   */
  screenColorType?: ScreenColorType;
}

/**
 * @ignore
 */
export enum AudioTrackType {
  /**
   * @ignore
   */
  AudioTrackInvalid = -1,
  /**
   * @ignore
   */
  AudioTrackMixable = 0,
  /**
   * @ignore
   */
  AudioTrackDirect = 1,
}

/**
 * @ignore
 */
export class AudioTrackConfig {
  /**
   * @ignore
   */
  enableLocalPlayback?: boolean;
  /**
   * @ignore
   */
  enableAudioProcessing?: boolean;
}

/**
 * @ignore
 */
export enum VoiceBeautifierPreset {
  /**
   * @ignore
   */
  VoiceBeautifierOff = 0x00000000,
  /**
   * @ignore
   */
  ChatBeautifierMagnetic = 0x01010100,
  /**
   * @ignore
   */
  ChatBeautifierFresh = 0x01010200,
  /**
   * @ignore
   */
  ChatBeautifierVitality = 0x01010300,
  /**
   * @ignore
   */
  SingingBeautifier = 0x01020100,
  /**
   * @ignore
   */
  TimbreTransformationVigorous = 0x01030100,
  /**
   * @ignore
   */
  TimbreTransformationDeep = 0x01030200,
  /**
   * @ignore
   */
  TimbreTransformationMellow = 0x01030300,
  /**
   * @ignore
   */
  TimbreTransformationFalsetto = 0x01030400,
  /**
   * @ignore
   */
  TimbreTransformationFull = 0x01030500,
  /**
   * @ignore
   */
  TimbreTransformationClear = 0x01030600,
  /**
   * @ignore
   */
  TimbreTransformationResounding = 0x01030700,
  /**
   * @ignore
   */
  TimbreTransformationRinging = 0x01030800,
  /**
   * @ignore
   */
  UltraHighQualityVoice = 0x01040100,
}

/**
 * @ignore
 */
export enum AudioEffectPreset {
  /**
   * @ignore
   */
  AudioEffectOff = 0x00000000,
  /**
   * @ignore
   */
  RoomAcousticsKtv = 0x02010100,
  /**
   * @ignore
   */
  RoomAcousticsVocalConcert = 0x02010200,
  /**
   * @ignore
   */
  RoomAcousticsStudio = 0x02010300,
  /**
   * @ignore
   */
  RoomAcousticsPhonograph = 0x02010400,
  /**
   * @ignore
   */
  RoomAcousticsVirtualStereo = 0x02010500,
  /**
   * @ignore
   */
  RoomAcousticsSpacial = 0x02010600,
  /**
   * @ignore
   */
  RoomAcousticsEthereal = 0x02010700,
  /**
   * @ignore
   */
  RoomAcoustics3dVoice = 0x02010800,
  /**
   * @ignore
   */
  RoomAcousticsVirtualSurroundSound = 0x02010900,
  /**
   * @ignore
   */
  RoomAcousticsChorus = 0x02010d00,
  /**
   * @ignore
   */
  VoiceChangerEffectUncle = 0x02020100,
  /**
   * @ignore
   */
  VoiceChangerEffectOldman = 0x02020200,
  /**
   * @ignore
   */
  VoiceChangerEffectBoy = 0x02020300,
  /**
   * @ignore
   */
  VoiceChangerEffectSister = 0x02020400,
  /**
   * @ignore
   */
  VoiceChangerEffectGirl = 0x02020500,
  /**
   * @ignore
   */
  VoiceChangerEffectPigking = 0x02020600,
  /**
   * @ignore
   */
  VoiceChangerEffectHulk = 0x02020700,
  /**
   * @ignore
   */
  StyleTransformationRnb = 0x02030100,
  /**
   * @ignore
   */
  StyleTransformationPopular = 0x02030200,
  /**
   * @ignore
   */
  PitchCorrection = 0x02040100,
}

/**
 * @ignore
 */
export enum VoiceConversionPreset {
  /**
   * @ignore
   */
  VoiceConversionOff = 0x00000000,
  /**
   * @ignore
   */
  VoiceChangerNeutral = 0x03010100,
  /**
   * @ignore
   */
  VoiceChangerSweet = 0x03010200,
  /**
   * @ignore
   */
  VoiceChangerSolid = 0x03010300,
  /**
   * @ignore
   */
  VoiceChangerBass = 0x03010400,
  /**
   * @ignore
   */
  VoiceChangerCartoon = 0x03010500,
  /**
   * @ignore
   */
  VoiceChangerChildlike = 0x03010600,
  /**
   * @ignore
   */
  VoiceChangerPhoneOperator = 0x03010700,
  /**
   * @ignore
   */
  VoiceChangerMonster = 0x03010800,
  /**
   * @ignore
   */
  VoiceChangerTransformers = 0x03010900,
  /**
   * @ignore
   */
  VoiceChangerGroot = 0x03010a00,
  /**
   * @ignore
   */
  VoiceChangerDarthVader = 0x03010b00,
  /**
   * @ignore
   */
  VoiceChangerIronLady = 0x03010c00,
  /**
   * @ignore
   */
  VoiceChangerShinChan = 0x03010d00,
  /**
   * @ignore
   */
  VoiceChangerGirlishMan = 0x03010e00,
  /**
   * @ignore
   */
  VoiceChangerChipmunk = 0x03010f00,
}

/**
 * @ignore
 */
export enum HeadphoneEqualizerPreset {
  /**
   * @ignore
   */
  HeadphoneEqualizerOff = 0x00000000,
  /**
   * @ignore
   */
  HeadphoneEqualizerOverear = 0x04000001,
  /**
   * @ignore
   */
  HeadphoneEqualizerInear = 0x04000002,
}

/**
 * @ignore
 */
export enum VoiceAiTunerType {
  /**
   * @ignore
   */
  VoiceAiTunerMatureMale = 0,
  /**
   * @ignore
   */
  VoiceAiTunerFreshMale = 1,
  /**
   * @ignore
   */
  VoiceAiTunerElegantFemale = 2,
  /**
   * @ignore
   */
  VoiceAiTunerSweetFemale = 3,
  /**
   * @ignore
   */
  VoiceAiTunerWarmMaleSinging = 4,
  /**
   * @ignore
   */
  VoiceAiTunerGentleFemaleSinging = 5,
  /**
   * @ignore
   */
  VoiceAiTunerHuskyMaleSinging = 6,
  /**
   * @ignore
   */
  VoiceAiTunerWarmElegantFemaleSinging = 7,
  /**
   * @ignore
   */
  VoiceAiTunerPowerfulMaleSinging = 8,
  /**
   * @ignore
   */
  VoiceAiTunerDreamyFemaleSinging = 9,
}

/**
 * @ignore
 */
export class ScreenAudioParameters {
  /**
   * @ignore
   */
  sampleRate?: number;
  /**
   * @ignore
   */
  channels?: number;
  /**
   * @ignore
   */
  captureSignalVolume?: number;
  /**
   * @ignore
   */
  excludeCurrentProcessAudio?: boolean;
}

/**
 * @ignore
 */
export class ScreenCaptureParameters {
  /**
   * @ignore
   */
  captureAudio?: boolean;
  /**
   * @ignore
   */
  audioParams?: ScreenAudioParameters;
  /**
   * @ignore
   */
  dimensions?: VideoDimensions;
  /**
   * @ignore
   */
  frameRate?: number;
  /**
   * @ignore
   */
  bitrate?: number;
  /**
   * @ignore
   */
  captureMouseCursor?: boolean;
  /**
   * @ignore
   */
  windowFocus?: boolean;
  /**
   * @ignore
   */
  excludeWindowList?: any[];
  /**
   * @ignore
   */
  excludeWindowCount?: number;
  /**
   * @ignore
   */
  highLightWidth?: number;
  /**
   * @ignore
   */
  highLightColor?: number;
  /**
   * @ignore
   */
  enableHighLight?: boolean;
}

/**
 * @ignore
 */
export enum AudioRecordingQualityType {
  /**
   * @ignore
   */
  AudioRecordingQualityLow = 0,
  /**
   * @ignore
   */
  AudioRecordingQualityMedium = 1,
  /**
   * @ignore
   */
  AudioRecordingQualityHigh = 2,
  /**
   * @ignore
   */
  AudioRecordingQualityUltraHigh = 3,
}

/**
 * @ignore
 */
export enum AudioFileRecordingType {
  /**
   * @ignore
   */
  AudioFileRecordingMic = 1,
  /**
   * @ignore
   */
  AudioFileRecordingPlayback = 2,
  /**
   * @ignore
   */
  AudioFileRecordingMixed = 3,
}

/**
 * @ignore
 */
export enum AudioEncodedFrameObserverPosition {
  /**
   * @ignore
   */
  AudioEncodedFrameObserverPositionRecord = 1,
  /**
   * @ignore
   */
  AudioEncodedFrameObserverPositionPlayback = 2,
  /**
   * @ignore
   */
  AudioEncodedFrameObserverPositionMixed = 3,
}

/**
 * @ignore
 */
export class AudioRecordingConfiguration {
  /**
   * @ignore
   */
  filePath?: string;
  /**
   * @ignore
   */
  encode?: boolean;
  /**
   * @ignore
   */
  sampleRate?: number;
  /**
   * @ignore
   */
  fileRecordingType?: AudioFileRecordingType;
  /**
   * @ignore
   */
  quality?: AudioRecordingQualityType;
  /**
   * @ignore
   */
  recordingChannel?: number;
}

/**
 * @ignore
 */
export class AudioEncodedFrameObserverConfig {
  /**
   * @ignore
   */
  postionType?: AudioEncodedFrameObserverPosition;
  /**
   * @ignore
   */
  encodingType?: AudioEncodingType;
}

/**
 * @ignore
 */
export interface IAudioEncodedFrameObserver {
  /**
   * @ignore
   */
  onRecordAudioEncodedFrame?(
    frameBuffer: Uint8Array,
    length: number,
    audioEncodedFrameInfo: EncodedAudioFrameInfo
  ): void;

  /**
   * @ignore
   */
  onPlaybackAudioEncodedFrame?(
    frameBuffer: Uint8Array,
    length: number,
    audioEncodedFrameInfo: EncodedAudioFrameInfo
  ): void;

  /**
   * @ignore
   */
  onMixedAudioEncodedFrame?(
    frameBuffer: Uint8Array,
    length: number,
    audioEncodedFrameInfo: EncodedAudioFrameInfo
  ): void;
}

/**
 * @ignore
 */
export enum AreaCode {
  /**
   * @ignore
   */
  AreaCodeCn = 0x00000001,
  /**
   * @ignore
   */
  AreaCodeNa = 0x00000002,
  /**
   * @ignore
   */
  AreaCodeEu = 0x00000004,
  /**
   * @ignore
   */
  AreaCodeAs = 0x00000008,
  /**
   * @ignore
   */
  AreaCodeJp = 0x00000010,
  /**
   * @ignore
   */
  AreaCodeIn = 0x00000020,
  /**
   * @ignore
   */
  AreaCodeGlob = 0xffffffff,
}

/**
 * @ignore
 */
export enum AreaCodeEx {
  /**
   * @ignore
   */
  AreaCodeOc = 0x00000040,
  /**
   * @ignore
   */
  AreaCodeSa = 0x00000080,
  /**
   * @ignore
   */
  AreaCodeAf = 0x00000100,
  /**
   * @ignore
   */
  AreaCodeKr = 0x00000200,
  /**
   * @ignore
   */
  AreaCodeHkmc = 0x00000400,
  /**
   * @ignore
   */
  AreaCodeUs = 0x00000800,
  /**
   * @ignore
   */
  AreaCodeRu = 0x00001000,
  /**
   * @ignore
   */
  AreaCodeOvs = 0xfffffffe,
}

/**
 * @ignore
 */
export enum ChannelMediaRelayError {
  /**
   * @ignore
   */
  RelayOk = 0,
  /**
   * @ignore
   */
  RelayErrorServerErrorResponse = 1,
  /**
   * @ignore
   */
  RelayErrorServerNoResponse = 2,
  /**
   * @ignore
   */
  RelayErrorNoResourceAvailable = 3,
  /**
   * @ignore
   */
  RelayErrorFailedJoinSrc = 4,
  /**
   * @ignore
   */
  RelayErrorFailedJoinDest = 5,
  /**
   * @ignore
   */
  RelayErrorFailedPacketReceivedFromSrc = 6,
  /**
   * @ignore
   */
  RelayErrorFailedPacketSentToDest = 7,
  /**
   * @ignore
   */
  RelayErrorServerConnectionLost = 8,
  /**
   * @ignore
   */
  RelayErrorInternalError = 9,
  /**
   * @ignore
   */
  RelayErrorSrcTokenExpired = 10,
  /**
   * @ignore
   */
  RelayErrorDestTokenExpired = 11,
}

/**
 * @ignore
 */
export enum ChannelMediaRelayState {
  /**
   * @ignore
   */
  RelayStateIdle = 0,
  /**
   * @ignore
   */
  RelayStateConnecting = 1,
  /**
   * @ignore
   */
  RelayStateRunning = 2,
  /**
   * @ignore
   */
  RelayStateFailure = 3,
}

/**
 * @ignore
 */
export class ChannelMediaInfo {
  /**
   * @ignore
   */
  uid?: number;
  /**
   * @ignore
   */
  channelName?: string;
  /**
   * @ignore
   */
  token?: string;
}

/**
 * @ignore
 */
export class ChannelMediaRelayConfiguration {
  /**
   * @ignore
   */
  srcInfo?: ChannelMediaInfo;
  /**
   * @ignore
   */
  destInfos?: ChannelMediaInfo[];
  /**
   * @ignore
   */
  destCount?: number;
}

/**
 * @ignore
 */
export class UplinkNetworkInfo {
  /**
   * @ignore
   */
  video_encoder_target_bitrate_bps?: number;
}

/**
 * @ignore
 */
export class PeerDownlinkInfo {
  /**
   * @ignore
   */
  userId?: string;
  /**
   * @ignore
   */
  stream_type?: VideoStreamType;
  /**
   * @ignore
   */
  current_downscale_level?: RemoteVideoDownscaleLevel;
  /**
   * @ignore
   */
  expected_bitrate_bps?: number;
}

/**
 * @ignore
 */
export class DownlinkNetworkInfo {
  /**
   * @ignore
   */
  lastmile_buffer_delay_time_ms?: number;
  /**
   * @ignore
   */
  bandwidth_estimation_bps?: number;
  /**
   * @ignore
   */
  total_downscale_level_count?: number;
  /**
   * @ignore
   */
  peer_downlink_info?: PeerDownlinkInfo[];
  /**
   * @ignore
   */
  total_received_video_count?: number;
}

/**
 * @ignore
 */
export enum EncryptionMode {
  /**
   * @ignore
   */
  Aes128Xts = 1,
  /**
   * @ignore
   */
  Aes128Ecb = 2,
  /**
   * @ignore
   */
  Aes256Xts = 3,
  /**
   * @ignore
   */
  Sm4128Ecb = 4,
  /**
   * @ignore
   */
  Aes128Gcm = 5,
  /**
   * @ignore
   */
  Aes256Gcm = 6,
  /**
   * @ignore
   */
  Aes128Gcm2 = 7,
  /**
   * @ignore
   */
  Aes256Gcm2 = 8,
  /**
   * @ignore
   */
  ModeEnd = 9,
}

/**
 * @ignore
 */
export class EncryptionConfig {
  /**
   * @ignore
   */
  encryptionMode?: EncryptionMode;
  /**
   * @ignore
   */
  encryptionKey?: string;
  /**
   * @ignore
   */
  encryptionKdfSalt?: number[];
  /**
   * @ignore
   */
  datastreamEncryptionEnabled?: boolean;
}

/**
 * @ignore
 */
export enum EncryptionErrorType {
  /**
   * @ignore
   */
  EncryptionErrorInternalFailure = 0,
  /**
   * @ignore
   */
  EncryptionErrorDecryptionFailure = 1,
  /**
   * @ignore
   */
  EncryptionErrorEncryptionFailure = 2,
  /**
   * @ignore
   */
  EncryptionErrorDatastreamDecryptionFailure = 3,
  /**
   * @ignore
   */
  EncryptionErrorDatastreamEncryptionFailure = 4,
}

/**
 * @ignore
 */
export enum UploadErrorReason {
  /**
   * @ignore
   */
  UploadSuccess = 0,
  /**
   * @ignore
   */
  UploadNetError = 1,
  /**
   * @ignore
   */
  UploadServerError = 2,
}

/**
 * @ignore
 */
export enum RenewTokenErrorCode {
  /**
   * @ignore
   */
  RenewTokenSuccess = 0,
  /**
   * @ignore
   */
  RenewTokenFailure = 1,
  /**
   * @ignore
   */
  RenewTokenTokenExpired = 2,
  /**
   * @ignore
   */
  RenewTokenInvalidToken = 3,
  /**
   * @ignore
   */
  RenewTokenInvalidChannelName = 4,
  /**
   * @ignore
   */
  RenewTokenInconsistentAppid = 5,
  /**
   * @ignore
   */
  RenewTokenCanceledByNewRequest = 6,
}

/**
 * @ignore
 */
export enum PermissionType {
  /**
   * @ignore
   */
  RecordAudio = 0,
  /**
   * @ignore
   */
  Camera = 1,
  /**
   * @ignore
   */
  ScreenCapture = 2,
}

/**
 * @ignore
 */
export enum StreamSubscribeState {
  /**
   * @ignore
   */
  SubStateIdle = 0,
  /**
   * @ignore
   */
  SubStateNoSubscribed = 1,
  /**
   * @ignore
   */
  SubStateSubscribing = 2,
  /**
   * @ignore
   */
  SubStateSubscribed = 3,
}

/**
 * @ignore
 */
export enum StreamPublishState {
  /**
   * @ignore
   */
  PubStateIdle = 0,
  /**
   * @ignore
   */
  PubStateNoPublished = 1,
  /**
   * @ignore
   */
  PubStatePublishing = 2,
  /**
   * @ignore
   */
  PubStatePublished = 3,
}

/**
 * @ignore
 */
export class EchoTestConfiguration {
  /**
   * @ignore
   */
  view?: any;
  /**
   * @ignore
   */
  enableAudio?: boolean;
  /**
   * @ignore
   */
  enableVideo?: boolean;
  /**
   * @ignore
   */
  token?: string;
  /**
   * @ignore
   */
  channelId?: string;
  /**
   * @ignore
   */
  intervalInSeconds?: number;
}

/**
 * @ignore
 */
export class UserInfo {
  /**
   * @ignore
   */
  uid?: number;
  /**
   * @ignore
   */
  userAccount?: string;
}

/**
 * @ignore
 */
export enum EarMonitoringFilterType {
  /**
   * @ignore
   */
  EarMonitoringFilterNone = 1 << 0,
  /**
   * @ignore
   */
  EarMonitoringFilterBuiltInAudioFilters = 1 << 1,
  /**
   * @ignore
   */
  EarMonitoringFilterNoiseSuppression = 1 << 2,
  /**
   * @ignore
   */
  EarMonitoringFilterReusePostProcessingFilter = 1 << 15,
}

/**
 * @ignore
 */
export enum ThreadPriorityType {
  /**
   * @ignore
   */
  Lowest = 0,
  /**
   * @ignore
   */
  Low = 1,
  /**
   * @ignore
   */
  Normal = 2,
  /**
   * @ignore
   */
  High = 3,
  /**
   * @ignore
   */
  Highest = 4,
  /**
   * @ignore
   */
  Critical = 5,
}

/**
 * @ignore
 */
export class ScreenVideoParameters {
  /**
   * @ignore
   */
  dimensions?: VideoDimensions;
  /**
   * @ignore
   */
  frameRate?: number;
  /**
   * @ignore
   */
  bitrate?: number;
  /**
   * @ignore
   */
  contentHint?: VideoContentHint;
}

/**
 * @ignore
 */
export class ScreenCaptureParameters2 {
  /**
   * @ignore
   */
  captureAudio?: boolean;
  /**
   * @ignore
   */
  audioParams?: ScreenAudioParameters;
  /**
   * @ignore
   */
  captureVideo?: boolean;
  /**
   * @ignore
   */
  videoParams?: ScreenVideoParameters;
}

/**
 * @ignore
 */
export enum MediaTraceEvent {
  /**
   * @ignore
   */
  MediaTraceEventVideoRendered = 0,
  /**
   * @ignore
   */
  MediaTraceEventVideoDecoded = 1,
}

/**
 * @ignore
 */
export class VideoRenderingTracingInfo {
  /**
   * @ignore
   */
  elapsedTime?: number;
  /**
   * @ignore
   */
  start2JoinChannel?: number;
  /**
   * @ignore
   */
  join2JoinSuccess?: number;
  /**
   * @ignore
   */
  joinSuccess2RemoteJoined?: number;
  /**
   * @ignore
   */
  remoteJoined2SetView?: number;
  /**
   * @ignore
   */
  remoteJoined2UnmuteVideo?: number;
  /**
   * @ignore
   */
  remoteJoined2PacketReceived?: number;
}

/**
 * @ignore
 */
export enum ConfigFetchType {
  /**
   * @ignore
   */
  ConfigFetchTypeInitialize = 1,
  /**
   * @ignore
   */
  ConfigFetchTypeJoinChannel = 2,
}

/**
 * @ignore
 */
export enum LocalProxyMode {
  /**
   * @ignore
   */
  ConnectivityFirst = 0,
  /**
   * @ignore
   */
  LocalOnly = 1,
}

/**
 * @ignore
 */
export class LogUploadServerInfo {
  /**
   * @ignore
   */
  serverDomain?: string;
  /**
   * @ignore
   */
  serverPath?: string;
  /**
   * @ignore
   */
  serverPort?: number;
  /**
   * @ignore
   */
  serverHttps?: boolean;
}

/**
 * @ignore
 */
export class AdvancedConfigInfo {
  /**
   * @ignore
   */
  logUploadServer?: LogUploadServerInfo;
}

/**
 * @ignore
 */
export class LocalAccessPointConfiguration {
  /**
   * @ignore
   */
  ipList?: string[];
  /**
   * @ignore
   */
  ipListSize?: number;
  /**
   * @ignore
   */
  domainList?: string[];
  /**
   * @ignore
   */
  domainListSize?: number;
  /**
   * @ignore
   */
  verifyDomainName?: string;
  /**
   * @ignore
   */
  mode?: LocalProxyMode;
  /**
   * @ignore
   */
  advancedConfig?: AdvancedConfigInfo;
  /**
   * @ignore
   */
  disableAut?: boolean;
}

/**
 * @ignore
 */
export enum RecorderStreamType {
  /**
   * @ignore
   */
  Rtc = 0,
  /**
   * @ignore
   */
  Preview = 1,
}

/**
 * @ignore
 */
export class RecorderStreamInfo {
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
  type?: RecorderStreamType;
}

/**
 * @ignore
 */
export enum RdtStreamType {
  /**
   * @ignore
   */
  RdtStreamCmd = 0,
  /**
   * @ignore
   */
  RdtStreamData = 1,
  /**
   * @ignore
   */
  RdtStreamCount = 2,
}

/**
 * @ignore
 */
export enum RdtState {
  /**
   * @ignore
   */
  RdtStateClosed = 0,
  /**
   * @ignore
   */
  RdtStateOpened = 1,
  /**
   * @ignore
   */
  RdtStateBlocked = 2,
  /**
   * @ignore
   */
  RdtStatePending = 3,
  /**
   * @ignore
   */
  RdtStateBroken = 4,
}

/**
 * @ignore
 */
export class SpatialAudioParams {
  /**
   * @ignore
   */
  speaker_azimuth?: number;
  /**
   * @ignore
   */
  speaker_elevation?: number;
  /**
   * @ignore
   */
  speaker_distance?: number;
  /**
   * @ignore
   */
  speaker_orientation?: number;
  /**
   * @ignore
   */
  enable_blur?: boolean;
  /**
   * @ignore
   */
  enable_air_absorb?: boolean;
  /**
   * @ignore
   */
  speaker_attenuation?: number;
  /**
   * @ignore
   */
  enable_doppler?: boolean;
}

/**
 * @ignore
 */
export class VideoLayout {
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
  strUid?: string;
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
  videoState?: number;
}
