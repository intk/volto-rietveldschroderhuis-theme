import React, { useState, useEffect } from 'react';
import { injectIntl } from 'react-intl';

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
    <div id="vimeo-block" className="block align imagecards-block full">
      <div className="full-width">
        <div className="slider-wrapper" style={{ height: '600px' }}>
          <div className="slider-slide">
            <div className="slide-img">
              <iframe
                src={videoLink}
                frameborder="0"
                title="vimeo"
                fullscreen
                style={{ width: '100%', height: '100%' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default injectIntl(VimeoBlockView);
