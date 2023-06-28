import React from 'react';
// eslint-disable-next-line no-unused-vars
import { injectIntl } from 'react-intl';
import { getScaleUrl, getPath } from './utils';
import { Image } from 'semantic-ui-react';

// import { SocialLinks } from '@package/components';

const SiteDataView = (props) => {
  return (
    <div id="footer-preview-wrapper">
      <div className="site-data-preview">
        <div className="site-logo">
          <Image
            src={getScaleUrl(getPath(props.data.siteLogo), 'preview')}
            alt={props.data.siteLogo}
          />
        </div>
        <div className="information-columns">
          <div className="column">
            <div className="row">
              <h3>
                <b>{props.data.colOneTitle}</b>
              </h3>
              <p>{props.data.rowOne}</p>
              <p>{props.data.rowTwo}</p>
              <p>{props.data.rowThree}</p>
              <p>{props.data.rowFour}</p>
            </div>

            <div className="row">
              <h3>
                <b>{props.data.colTwoTitle}</b>
              </h3>
              <p>{props.data.secLine1}</p>
              <p>{props.data.secLine2}</p>
              <p>{props.data.secLine3}</p>
              <p>{props.data.planYourVisit}</p>
            </div>

            <div className="row">
              <Image
                src={getScaleUrl(getPath(props.data.colOneImage), 'preview')}
                alt={props.data.colOneImage}
              ></Image>
            </div>

            <div className="row">
              <Image
                src={getScaleUrl(getPath(props.data.colTwoImage), 'preview')}
                alt={props.data.colTwoImage}
              ></Image>
              <p id="photo-credit" className="photo-credit">
                {props.data.secondImageCap}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default injectIntl(SiteDataView);
