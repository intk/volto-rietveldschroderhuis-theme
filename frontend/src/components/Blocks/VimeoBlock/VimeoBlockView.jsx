import React, { useState, useEffect } from 'react';
import { injectIntl } from 'react-intl';
import './css/vimeoblock.less';

const VimeoBlockView = (props) => {
  const [videoLink, setVideoLink] = useState('');

  useEffect(() => {
    if (props.data.VideoLink) {
      const linkWithParams = `${props.data.VideoLink}?dnt=1&loop=1&background=1`;
      setVideoLink(linkWithParams);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="vimeo-block">
      <div className="video-wrapper">
        <iframe
          src={videoLink}
          frameborder="0"
          title="vimeo"
          fullscreen
        ></iframe>
      </div>
      <div className="vimeo-buttons">
        {props.data.button1 && (
          <button className="button button1" href={props.data.button1link}>
            {props.data.button1}
          </button>
        )}
        {props.data.button2 && (
          <button className="button button2" href={props.data.button2link}>
            {props.data.button2}
          </button>
        )}
      </div>
    </div>
  );
};

export default injectIntl(VimeoBlockView);
