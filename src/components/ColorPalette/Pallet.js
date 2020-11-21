import React, {useState ,useEffect, useRef} from 'react';
import {notification} from 'antd';
import {invertColor} from "../Helpers/Helpers";

export const Pallet = (props) => {
  const [colorClicked, setColorClicked] = useState(false);
  const palletInput = useRef(null);

  const openNotificationWithIcon = color => {
    notification['success']({
      message: `Copied ${color} to clipboard!`
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setColorClicked(false);
    }, 1001);

    return () => {
      clearTimeout(timer);
    }
  }, [colorClicked])

  const copyToClipboard = (e) => {
    palletInput.current.select();
    document.execCommand('copy');
    setColorClicked(true)
    openNotificationWithIcon(props.color)
  };

  return(
    <div
      className={'pallet' + (colorClicked ? ' animation': '' )} style={{ background: props.color , color: invertColor(props.color , props.color)}}
      onClick = {(e) => {copyToClipboard(e)}}
    >
      <input type="text" ref={palletInput} value={props.color} />
      {props.color}
    </div>
  )
}