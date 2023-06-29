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
          {!!props.data.siteLogo && (
            <Image
              src={getScaleUrl(getPath(props.data.siteLogo), 'preview')}
              alt={props.data.siteLogo}
            />
          )}
        </div>
        <div className="information-columns">
          <div className="column">
            <div className="row">
              {!!props.data.colOneTitle && <h3>{props.data.colOneTitle}</h3>}
              {!!props.data.rowOne && <p>{props.data.rowOne}</p>}
              {!!props.data.rowTwo && <p>{props.data.rowTwo}</p>}
              {!!props.data.rowThree && <p>{props.data.rowThree}</p>}
              {!!props.data.rowFour && (
                <a href={props.data.rowFour}>{props.data.rowFour}</a>
              )}
            </div>

            <div className="row">
              {!!props.data.colTwoTitle && <h3>{props.data.colTwoTitle}</h3>}
              {!!props.data.secLine1 && <p>{props.data.secLine1}</p>}
              {!!props.data.secLine2 && <p>{props.data.secLine2}</p>}
              {!!props.data.secLine3 && <p>{props.data.secLine3}</p>}
              {!!props.data.planYourVisit && (
                <a href={props.data.planYourVisitLink}>
                  {props.data.planYourVisit}
                </a>
              )}
            </div>

            <div className="row">
              {!!props.data.colOneImage && (
                <Image
                  src={getScaleUrl(getPath(props.data.colOneImage), 'preview')}
                  alt={props.data.colOneImage}
                ></Image>
              )}
            </div>

            <div className="row">
              {!!props.data.colTwoImage && (
                <Image
                  src={getScaleUrl(getPath(props.data.colTwoImage), 'preview')}
                  alt={props.data.colTwoImage}
                ></Image>
              )}
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
