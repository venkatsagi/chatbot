import React, { useEffect } from "react";
import TwilioVideo from "twilio-video";

const IsBrowserSupported = ({ triggerNextStep }) => {
  useEffect(() => {
    if (TwilioVideo.isSupported) triggerNextStep({ trigger: "4" });
    else triggerNextStep({ trigger: "browserNotSupported_1" });
  }, []);

  return null;
};
export default IsBrowserSupported;
