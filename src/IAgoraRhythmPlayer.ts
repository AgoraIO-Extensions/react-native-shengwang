import './extension/IAgoraRhythmPlayerExtension';

/**
 * @ignore
 */
export enum RhythmPlayerStateType {
  /**
   * @ignore
   */
  RhythmPlayerStateIdle = 810,
  /**
   * @ignore
   */
  RhythmPlayerStateOpening = 811,
  /**
   * @ignore
   */
  RhythmPlayerStateDecoding = 812,
  /**
   * @ignore
   */
  RhythmPlayerStatePlaying = 813,
  /**
   * @ignore
   */
  RhythmPlayerStateFailed = 814,
}

/**
 * @ignore
 */
export enum RhythmPlayerReason {
  /**
   * @ignore
   */
  RhythmPlayerReasonOk = 0,
  /**
   * @ignore
   */
  RhythmPlayerReasonFailed = 1,
  /**
   * @ignore
   */
  RhythmPlayerReasonCanNotOpen = 801,
  /**
   * @ignore
   */
  RhythmPlayerReasonCanNotPlay = 802,
  /**
   * @ignore
   */
  RhythmPlayerReasonFileOverDurationLimit = 803,
}

/**
 * @ignore
 */
export class AgoraRhythmPlayerConfig {
  /**
   * @ignore
   */
  beatsPerMeasure?: number;
  /**
   * @ignore
   */
  beatsPerMinute?: number;
}
