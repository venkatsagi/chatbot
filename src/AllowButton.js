import React, { useState, useCallback } from 'react';
import { ensureMediaPermissions } from "./permission";

const AllowButton = ({triggerNextStep, onClick}) => {
    const [showAllow, setShowAllow] = useState(false);
  const [showPermissionNotAllowed, setShowPermissionNotAllowed] = useState(
    false
  );

  const [permissionAllowed, setPermissionAllowed] = useState(false);
  const [noDeviceFound, setNoDeviceFound] = useState(false);

  const okClickAllow = useCallback(() => {
    ensureMediaPermissions()
      .then((a) => {
        //console.log("reached here", a);
        setPermissionAllowed(true);
        triggerNextStep({trigger: '14', value: 'Okay!'});
      })
      .catch((a) => {
        // if (showPermissionNotAllowed === false)
        //   setShowPermissionNotAllowed(true);

        const { message, code, name } = a || {};
        console.log({ code, name, message });

        if (message && message.indexOf("NotFoundError") > -1)
          setNoDeviceFound(true);
        else setShowPermissionNotAllowed(true);
        triggerNextStep({trigger: '15', value: 'Okay!'});
      });
  }, [showAllow]);

    return (<button onClick={okClickAllow}>Okay!</button>)
}

export default AllowButton;