import React from 'react';
// eslint-disable-next-line no-unused-vars
import { FormattedMessage, injectIntl } from 'react-intl';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Icon } from '@plone/volto/components';
import { getScaleUrl, getPath } from './utils';
import { Button, Image } from 'semantic-ui-react';

// import { SocialLinks } from '@package/components';

const SiteDataView = (props) => {
  // const { data } = props;

  return (
    <div id="footer-preview-wrapper">
      <div className="site-data-preview">
        <div className="site-logo">
          <Image src={getScaleUrl(getPath(props.data.siteLogo), 'preview')} alt={props.data.siteLogo} />
        </div>
        <div className="information-columns">
          <div className="column">
            <div className="row">
              <h3>
                <b>{props.data.addressTitle}</b>
              </h3>
              <p>{props.data.name}</p>
              <p>{props.data.address}</p>
              <p>{props.data.addressSecond}</p>
              <p>{props.data.email}</p>
            </div>

            <div className="row">
              <h3>
                <b>{props.data.contactTitle}</b>
              </h3>
              <p>{props.data.timeLine1}</p>
              <p>{props.data.timeLine2}</p>
              <p>{props.data.timeLine3}</p>
              <p>{props.data.planYourVisit}</p>
            </div>

            <div className="row">
              <Image src={getScaleUrl(getPath(props.data.contactImage), 'preview')} alt={props.data.contactImage}></Image>
            </div>

            <div className="row">
              <Image src={getScaleUrl(getPath(props.data.timesImage), 'preview')} alt={props.data.timesImages}></Image>
              <p id="photo-credit" className="photo-credit">
                {props.data.timesImageCaption}
              </p>
            </div>
          </div>
        </div>
        {/* <div>
        <h4>
          <FormattedMessage id="Social links" defaultMessage="Social links" />:
        </h4>
        <p>
          <SocialLinks {...data} />
        </p>
      </div> */}
      </div>
    </div>
  );
};

export default injectIntl(SiteDataView);
