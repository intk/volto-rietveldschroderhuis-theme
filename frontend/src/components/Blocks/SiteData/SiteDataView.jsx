import React from 'react';
// eslint-disable-next-line no-unused-vars
import { FormattedMessage, injectIntl } from 'react-intl';

// import { SocialLinks } from '@package/components';

const SiteDataView = (props) => {
  // const { data } = props;

  return (
    <div className="site-data-preview">
      <div>
        <div className="contact">
          <h3>
            <b>{props.data.addressTitle}</b>
          </h3>
          <p>{props.data.name}</p>
          <p>{props.data.address}</p>
          <p>{props.data.addressSecond}</p>
          <p>{props.data.email}</p>
        </div>
        <div className="openningtimes">
          <h3>
            <b>{props.data.contactTitle}</b>
          </h3>
          <p>{props.data.timeLine1}</p>
          <p>{props.data.timeLine2}</p>
          <p>{props.data.timeLine3}</p>
          <p>{props.data.planYourVisit}</p>
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
  );
};

export default injectIntl(SiteDataView);
