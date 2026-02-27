import './extension/IAgoraRtcEngineExExtension';
import {
  ChannelMediaRelayConfiguration,
  ConnectionStateType,
  DataStreamConfig,
  EncryptionConfig,
  LiveTranscoding,
  RdtStreamType,
  SimulcastConfig,
  SimulcastStreamConfig,
  SimulcastStreamMode,
  SpatialAudioParams,
  UserInfo,
  VideoCanvas,
  VideoEncoderConfiguration,
  VideoMirrorModeType,
  VideoStreamType,
  VideoSubscriptionOptions,
  WatermarkConfig,
  WatermarkOptions,
} from './AgoraBase';
import {
  ContentInspectConfig,
  RenderModeType,
  SnapshotConfig,
} from './AgoraMediaBase';
import {
  ChannelMediaOptions,
  IRtcEngine,
  LeaveChannelOptions,
  StreamFallbackOptions,
} from './IAgoraRtcEngine';

/**
 * @ignore
 */
export class RtcConnection {
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
export abstract class IRtcEngineEx extends IRtcEngine {
  /**
   * @ignore
   */
  abstract joinChannelEx(
    token: string,
    connection: RtcConnection,
    options: ChannelMediaOptions
  ): number;

  /**
   * @ignore
   */
  abstract leaveChannelEx(
    connection: RtcConnection,
    options?: LeaveChannelOptions
  ): number;

  /**
   * @ignore
   */
  abstract leaveChannelWithUserAccountEx(
    channelId: string,
    userAccount: string,
    options?: LeaveChannelOptions
  ): number;

  /**
   * @ignore
   */
  abstract updateChannelMediaOptionsEx(
    options: ChannelMediaOptions,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract setVideoEncoderConfigurationEx(
    config: VideoEncoderConfiguration,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract setupRemoteVideoEx(
    canvas: VideoCanvas,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract muteRemoteAudioStreamEx(
    uid: number,
    mute: boolean,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract muteRemoteVideoStreamEx(
    uid: number,
    mute: boolean,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract setRemoteVideoStreamTypeEx(
    uid: number,
    streamType: VideoStreamType,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract muteLocalAudioStreamEx(
    mute: boolean,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract muteLocalVideoStreamEx(
    mute: boolean,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract muteAllRemoteAudioStreamsEx(
    mute: boolean,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract muteAllRemoteVideoStreamsEx(
    mute: boolean,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract setSubscribeAudioBlocklistEx(
    uidList: number[],
    uidNumber: number,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract setSubscribeAudioAllowlistEx(
    uidList: number[],
    uidNumber: number,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract setSubscribeVideoBlocklistEx(
    uidList: number[],
    uidNumber: number,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract setSubscribeVideoAllowlistEx(
    uidList: number[],
    uidNumber: number,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract setRemoteVideoSubscriptionOptionsEx(
    uid: number,
    options: VideoSubscriptionOptions,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract setRemoteVoicePositionEx(
    uid: number,
    pan: number,
    gain: number,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract setRemoteUserSpatialAudioParamsEx(
    uid: number,
    params: SpatialAudioParams,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract setRemoteRenderModeEx(
    uid: number,
    renderMode: RenderModeType,
    mirrorMode: VideoMirrorModeType,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract enableLoopbackRecordingEx(
    connection: RtcConnection,
    enabled: boolean,
    deviceName?: string
  ): number;

  /**
   * @ignore
   */
  abstract adjustRecordingSignalVolumeEx(
    volume: number,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract muteRecordingSignalEx(
    mute: boolean,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract adjustUserPlaybackSignalVolumeEx(
    uid: number,
    volume: number,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract getConnectionStateEx(connection: RtcConnection): ConnectionStateType;

  /**
   * @ignore
   */
  abstract enableEncryptionEx(
    connection: RtcConnection,
    enabled: boolean,
    config: EncryptionConfig
  ): number;

  /**
   * @ignore
   */
  abstract createDataStreamEx(
    config: DataStreamConfig,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract sendStreamMessageEx(
    streamId: number,
    data: Uint8Array,
    length: number,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract sendRdtMessageEx(
    uid: number,
    type: RdtStreamType,
    data: string,
    length: number,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract sendMediaControlMessageEx(
    uid: number,
    data: string,
    length: number,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract addVideoWatermarkEx(
    watermarkUrl: string,
    options: WatermarkOptions,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract removeVideoWatermarkEx(
    id: string,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract clearVideoWatermarkEx(connection: RtcConnection): number;

  /**
   * @ignore
   */
  abstract sendCustomReportMessageEx(
    id: string,
    category: string,
    event: string,
    label: string,
    value: number,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract enableAudioVolumeIndicationEx(
    interval: number,
    smooth: number,
    reportVad: boolean,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract startRtmpStreamWithoutTranscodingEx(
    url: string,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract startRtmpStreamWithTranscodingEx(
    url: string,
    transcoding: LiveTranscoding,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract updateRtmpTranscodingEx(
    transcoding: LiveTranscoding,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract stopRtmpStreamEx(url: string, connection: RtcConnection): number;

  /**
   * @ignore
   */
  abstract startOrUpdateChannelMediaRelayEx(
    configuration: ChannelMediaRelayConfiguration,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract stopChannelMediaRelayEx(connection: RtcConnection): number;

  /**
   * @ignore
   */
  abstract pauseAllChannelMediaRelayEx(connection: RtcConnection): number;

  /**
   * @ignore
   */
  abstract resumeAllChannelMediaRelayEx(connection: RtcConnection): number;

  /**
   * @ignore
   */
  abstract getUserInfoByUserAccountEx(
    userAccount: string,
    connection: RtcConnection
  ): UserInfo;

  /**
   * @ignore
   */
  abstract getUserInfoByUidEx(uid: number, connection: RtcConnection): UserInfo;

  /**
   * @ignore
   */
  abstract enableDualStreamModeEx(
    enabled: boolean,
    streamConfig: SimulcastStreamConfig,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract setDualStreamModeEx(
    mode: SimulcastStreamMode,
    streamConfig: SimulcastStreamConfig,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract setSimulcastConfigEx(
    simulcastConfig: SimulcastConfig,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract setHighPriorityUserListEx(
    uidList: number[],
    uidNum: number,
    option: StreamFallbackOptions,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract takeSnapshotEx(
    connection: RtcConnection,
    uid: number,
    filePath: string
  ): number;

  /**
   * @ignore
   */
  abstract enableContentInspectEx(
    enabled: boolean,
    config: ContentInspectConfig,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract startMediaRenderingTracingEx(connection: RtcConnection): number;

  /**
   * @ignore
   */
  abstract setParametersEx(
    connection: RtcConnection,
    parameters: string
  ): number;

  /**
   * @ignore
   */
  abstract getCallIdEx(connection: RtcConnection): string;

  /**
   * @ignore
   */
  abstract sendAudioMetadataEx(
    connection: RtcConnection,
    metadata: string,
    length: number
  ): number;

  /**
   * @ignore
   */
  abstract preloadEffectEx(
    connection: RtcConnection,
    soundId: number,
    filePath: string,
    startPos?: number
  ): number;

  /**
   * @ignore
   */
  abstract playEffectEx(
    connection: RtcConnection,
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
  abstract takeSnapshotWithConfigEx(
    connection: RtcConnection,
    uid: number,
    config: SnapshotConfig
  ): number;

  /**
   * @ignore
   */
  abstract addVideoWatermarkWithConfigEx(
    config: WatermarkConfig,
    connection: RtcConnection
  ): number;
}
