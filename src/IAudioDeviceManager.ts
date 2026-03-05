import './extension/IAudioDeviceManagerExtension';
import { AudioDeviceInfo } from './IAgoraRtcEngine';

/**
 * 设备 ID 的最大长度。
 */
export enum MaxDeviceIdLengthType {
  /**
   * 设备 ID 的最大长度为 512 个字符。
   */
  MaxDeviceIdLength = 512,
}

/**
 * 音频设备管理方法。
 */
export abstract class IAudioDeviceManager {
  /**
   * @ignore
   */
  abstract enumeratePlaybackDevices(): AudioDeviceInfo[];

  /**
   * @ignore
   */
  abstract enumerateRecordingDevices(): AudioDeviceInfo[];

  /**
   * @ignore
   */
  abstract setPlaybackDevice(deviceId: string): number;

  /**
   * @ignore
   */
  abstract getPlaybackDevice(): string;

  /**
   * @ignore
   */
  abstract getPlaybackDeviceInfo(): AudioDeviceInfo;

  /**
   * @ignore
   */
  abstract setPlaybackDeviceVolume(volume: number): number;

  /**
   * @ignore
   */
  abstract getPlaybackDeviceVolume(): number;

  /**
   * @ignore
   */
  abstract setRecordingDevice(deviceId: string): number;

  /**
   * @ignore
   */
  abstract getRecordingDevice(): string;

  /**
   * @ignore
   */
  abstract getRecordingDeviceInfo(): AudioDeviceInfo;

  /**
   * @ignore
   */
  abstract setRecordingDeviceVolume(volume: number): number;

  /**
   * @ignore
   */
  abstract getRecordingDeviceVolume(): number;

  /**
   * @ignore
   */
  abstract setLoopbackDevice(deviceId: string): number;

  /**
   * @ignore
   */
  abstract getLoopbackDevice(): string;

  /**
   * @ignore
   */
  abstract setPlaybackDeviceMute(mute: boolean): number;

  /**
   * @ignore
   */
  abstract getPlaybackDeviceMute(): boolean;

  /**
   * @ignore
   */
  abstract setRecordingDeviceMute(mute: boolean): number;

  /**
   * @ignore
   */
  abstract getRecordingDeviceMute(): boolean;

  /**
   * 启动音频播放设备测试。
   *
   * 该方法用于测试本地音频播放设备是否能正常工作。启动测试后，SDK 播放指定的音频文件，测试者如果能听到声音，说明播放设备能正常工作。
   * 调用该方法后，SDK 会每隔 100 毫秒触发一次 onAudioVolumeIndication 回调，报告 uid = 1 及播放设备的音量信息。
   * 该方法和 startEchoTest 的区别在于该方法检测本地的音频播放设备能否正常工作，后者可以检测音视频设备及网络是否正常。 该方法需要在加入频道前调用。测试完成后，如需加入频道，请确保先调用 stopPlaybackDeviceTest 停止设备测试。
   *
   * @param testAudioFilePath 音频文件的绝对路径，路径字符串使用 UTF-8 编码格式。
   *  支持文件格式: wav、mp3、m4a、aac。
   *  支持文件采样率: 8000、16000、32000、44100、48000。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/rn/error-code)了解详情和解决建议。
   */
  abstract startPlaybackDeviceTest(testAudioFilePath: string): number;

  /**
   * 停止音频播放设备测试。
   *
   * 该方法用于停止音频播放设备测试。调用 startPlaybackDeviceTest 后，必须调用该方法停止测试。 该方法需要在加入频道前调用。
   *
   * @returns
   * 0: 方法调用成功。
   *  < 0: 方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/rn/error-code)了解详情和解决建议。
   */
  abstract stopPlaybackDeviceTest(): number;

  /**
   * @ignore
   */
  abstract startRecordingDeviceTest(indicationInterval: number): number;

  /**
   * @ignore
   */
  abstract stopRecordingDeviceTest(): number;

  /**
   * @ignore
   */
  abstract startAudioDeviceLoopbackTest(indicationInterval: number): number;

  /**
   * @ignore
   */
  abstract stopAudioDeviceLoopbackTest(): number;

  /**
   * @ignore
   */
  abstract followSystemPlaybackDevice(enable: boolean): number;

  /**
   * @ignore
   */
  abstract followSystemRecordingDevice(enable: boolean): number;

  /**
   * @ignore
   */
  abstract followSystemLoopbackDevice(enable: boolean): number;

  /**
   * @ignore
   */
  abstract release(): void;

  /**
   * @ignore
   */
  abstract getPlaybackDefaultDevice(): AudioDeviceInfo;

  /**
   * @ignore
   */
  abstract getRecordingDefaultDevice(): AudioDeviceInfo;
}
