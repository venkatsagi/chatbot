export function ensureMediaPermissions() {
    return navigator.mediaDevices
      .enumerateDevices()
      .then((devices) =>
        devices.every((device) => !(device.deviceId && device.label))
      )
      .then((shouldAskForMediaPermissions) => {
        console.log({ shouldAskForMediaPermissions });
        if (shouldAskForMediaPermissions) {
          return navigator.mediaDevices
            .getUserMedia({ audio: true, video: true })
            .then((mediaStream) =>
              mediaStream.getTracks().forEach((track) => track.stop())
            )
            .catch((err) => {
              console.log("Permission denied", err);
              throw new Error(err);
            });
        }
      });
  }
  