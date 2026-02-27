import './extension/IAgoraSpatialAudioExtension';
import { RtcConnection } from './IAgoraRtcEngineEx';

/**
 * @ignore
 */
export class RemoteVoicePositionInfo {
  /**
   * @ignore
   */
  position?: number[];
  /**
   * @ignore
   */
  forward?: number[];
}

/**
 * @ignore
 */
export class SpatialAudioZone {
  /**
   * @ignore
   */
  zoneSetId?: number;
  /**
   * @ignore
   */
  position?: number[];
  /**
   * @ignore
   */
  forward?: number[];
  /**
   * @ignore
   */
  right?: number[];
  /**
   * @ignore
   */
  up?: number[];
  /**
   * @ignore
   */
  forwardLength?: number;
  /**
   * @ignore
   */
  rightLength?: number;
  /**
   * @ignore
   */
  upLength?: number;
  /**
   * @ignore
   */
  audioAttenuation?: number;
}

/**
 * @ignore
 */
export abstract class ILocalSpatialAudioEngine {
  /**
   * @ignore
   */
  abstract release(): void;

  /**
   * @ignore
   */
  abstract initialize(): number;

  /**
   * @ignore
   */
  abstract updateRemotePosition(
    uid: number,
    posInfo: RemoteVoicePositionInfo
  ): number;

  /**
   * @ignore
   */
  abstract updateRemotePositionEx(
    uid: number,
    posInfo: RemoteVoicePositionInfo,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract removeRemotePosition(uid: number): number;

  /**
   * @ignore
   */
  abstract removeRemotePositionEx(
    uid: number,
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract clearRemotePositionsEx(connection: RtcConnection): number;

  /**
   * @ignore
   */
  abstract updateSelfPositionEx(
    position: number[],
    axisForward: number[],
    axisRight: number[],
    axisUp: number[],
    connection: RtcConnection
  ): number;

  /**
   * @ignore
   */
  abstract setMaxAudioRecvCount(maxCount: number): number;

  /**
   * @ignore
   */
  abstract setAudioRecvRange(range: number): number;

  /**
   * @ignore
   */
  abstract setDistanceUnit(unit: number): number;

  /**
   * @ignore
   */
  abstract updateSelfPosition(
    position: number[],
    axisForward: number[],
    axisRight: number[],
    axisUp: number[]
  ): number;

  /**
   * @ignore
   */
  abstract updatePlayerPositionInfo(
    playerId: number,
    positionInfo: RemoteVoicePositionInfo
  ): number;

  /**
   * @ignore
   */
  abstract setParameters(params: string): number;

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
  abstract setRemoteAudioAttenuation(
    uid: number,
    attenuation: number,
    forceSet: boolean
  ): number;

  /**
   * @ignore
   */
  abstract setZones(zones: SpatialAudioZone[], zoneCount: number): number;

  /**
   * @ignore
   */
  abstract setPlayerAttenuation(
    playerId: number,
    attenuation: number,
    forceSet: boolean
  ): number;

  /**
   * @ignore
   */
  abstract clearRemotePositions(): number;
}
