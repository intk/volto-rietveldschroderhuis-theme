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
        <iframe src={videoLink} frameBorder="0" title="vimeo"></iframe>
        <div
          className="shadow"
          style={{
            backgroundImage:
              'linear-gradient(to bottom, rgba(46, 46, 46, 0) 0%, #242424 200%)',
            // zIndex: 1,
            height: '100%',
            width: '100vw',
            position: 'absolute',
          }}
        ></div>
      </div>
      <div className="vimeo-buttons">
        {props.data.button1 && (
          <a className="button button1" href={props.data.button1link}>
            {props.data.button1}
          </a>
        )}
        {props.data.button2 && (
          <a className="button button2" href={props.data.button2link}>
            {props.data.button2}
          </a>
        )}
      </div>
    </div>
  );
};

export default injectIntl(VimeoBlockView);
