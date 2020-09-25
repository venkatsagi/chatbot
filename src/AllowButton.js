import React from 'react';
import { ensureMediaPermissions } from "./permission";

const AllowButton = ({triggerNextStep}) => {

  const okClickAllow = () => {
    ensureMediaPermissions()
      .then((a) => {
        triggerNextStep({trigger: '14', value: 'Okay!'});
      })
      .catch((a) => {
        const { message } = a || {};
        
        if (message && message.indexOf("NotFoundError") > -1)
            triggerNextStep({trigger: 'no-devices-message'});
        else 
            triggerNextStep({trigger: '15', value: 'Okay!'});
      });
    };

    return (<button onClick={okClickAllow}>Okay!</button>)
}

export default AllowButton;