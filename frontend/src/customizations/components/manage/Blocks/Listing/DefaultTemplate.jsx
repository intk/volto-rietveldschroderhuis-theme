import React from 'react';
import PropTypes from 'prop-types';
import { flattenToAppURL } from '@plone/volto/helpers';
import { PreviewImage } from '@plone/volto/components';
import { ConditionalLink, UniversalLink } from '@plone/volto/components';
import { isInternalURL } from '@plone/volto/helpers/Url/Url';
import { useIntl } from 'react-intl';

const getDateRangeDescription = (lang, start, end) => {
  const endDate = new Date(end || Date.now());
  const startDate = new Date(start || Date.now());

  const format = (date, options) =>
    new Intl.DateTimeFormat(lang, options).format(date);
  const defaultOptions = { day: 'numeric', month: 'short', year: 'numeric' };
  const dayOptions = { day: 'numeric' };

  if (
    !endDate ||
    (startDate.getDate() === endDate.getDate() &&
      startDate.getMonth() === endDate.getMonth() &&
      startDate.getFullYear() === endDate.getFullYear())
  ) {
    return format(startDate, defaultOptions);
  }

  if (
    startDate.getMonth() === endDate.getMonth() &&
    startDate.getFullYear() === endDate.getFullYear()
  ) {
    return `${format(startDate, dayOptions)} — ${format(
      endDate,
      defaultOptions,
    )}`;
  }

  return `${format(startDate, defaultOptions)} — ${format(
    endDate,
    defaultOptions,
  )}`;
};

const getHourRangeDescription = (lang, start, end, open_end, whole_day) => {
  const endDate = new Date(end || Date.now());
  const startDate = new Date(start || Date.now());

  if (whole_day) return '';

  const format = new Intl.DateTimeFormat(lang, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  const startHour = format.format(startDate);

  return open_end ? startHour : `${startHour} - ${format.format(endDate)}`;
};

const DefaultTemplate = ({ items, linkTitle, linkHref, isEditMode }) => {
  let link = null;
  let href = linkHref?.[0]?.['@id'] || '';
  const intl = useIntl();

  if (isInternalURL(href)) {
    link = (
      <ConditionalLink to={flattenToAppURL(href)} condition={!isEditMode}>
        {linkTitle || href}
      </ConditionalLink>
    );
  } else if (href) {
    link = <UniversalLink href={href}>{linkTitle || href}</UniversalLink>;
  }
  return (
    <>
      <div id="page-listing">
        <section id="content-core">
          {items.map((item) => (
            <div key={item.url} className="listing-items">
              {item.image_field && (
                <UniversalLink item={item}>
                  <PreviewImage
                    item={item}
                    size="large"
                    alt={item.image_caption ? item.image_caption : item.title}
                    className="ui image"
                  />
                </UniversalLink>
              )}
              {['Event'].includes(item['@type']) ? (
                <div className="listing-date-time">
                  <div className="listing-dates-wrapper">
                    {item.start && !item.open_end ? (
                      <span className="listing-dates">
                        {getDateRangeDescription(
                          intl.locale,
                          item.start,
                          item.end,
                        )}
                      </span>
                    ) : (
                      item.start && (
                        <span className="listing-dates">
                          {getDateRangeDescription(intl.locale, item.start)}
                        </span>
                      )
                    )}
                    {item.start && !item.whole_day && (
                      <span className="listing-dates">
                        {', '}
                        {getHourRangeDescription(
                          intl.locale,
                          item.start,
                          item.end,
                          item.open_end,
                          item.whole_day,
                        )}{' '}
                      </span>
                    )}
                  </div>
                </div>
              ) : (
                ''
              )}
              <div id="jaarverslag-title">
                <h2>
                  <UniversalLink item={item}>{item.title}</UniversalLink>
                </h2>
                {item.description && <p>{item.description}</p>}
              </div>
            </div>
          ))}
        </section>
      </div>

      {link && <div className="footer">{link}</div>}
    </>
  );
};

DefaultTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkMore: PropTypes.any,
  isEditMode: PropTypes.bool,
};

export default DefaultTemplate;
