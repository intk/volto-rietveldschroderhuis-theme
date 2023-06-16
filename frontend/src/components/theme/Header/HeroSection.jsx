import React from 'react';
import { Container } from 'semantic-ui-react';
import { BodyClass } from '@plone/volto/helpers';
import Image from '../../Image/Image';
// eslint-disable-next-line no-unused-vars
import { defineMessages, useIntl } from 'react-intl';

// const messages = defineMessages({
//   pastExibition: {
//     id: 'Past exhibition',
//     defaultMessage: 'Past exhibition',
//   },
//   nowOnDisplay: {
//     id: 'Now on display',
//     defaultMessage: 'Now on display',
//   },
//   future: {
//     id: 'Future',
//     defaultMessage: 'Future',
//   },
// });

const getDateRangeDescription = (lang, start, end) => {
  if (
    !end ||
    (start.getMonth() === end.getMonth() &&
      start.getFullYear() === end.getFullYear() &&
      start.getDate() === end.getDate())
  ) {
    return new Intl.DateTimeFormat(lang, {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }).format(start);
  }

  if (
    start.getMonth() === end.getMonth() &&
    start.getFullYear() === end.getFullYear()
  ) {
    return `${new Intl.DateTimeFormat(lang, {
      day: 'numeric',
    }).format(start)} ${lang === 'nl' ? 't/m' : 'to'} ${new Intl.DateTimeFormat(
      lang,
      {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      },
    ).format(end)}`;
  }

  return `${new Intl.DateTimeFormat(lang, {
    day: 'numeric',
    month: 'short',
  }).format(start)} ${lang === 'nl' ? 't/m' : 'to'} ${new Intl.DateTimeFormat(
    lang,
    {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    },
  ).format(end)}`;
};

const getHourRangeDescription = (lang, start, end, open_end, whole_day) => {
  let formatter = new Intl.DateTimeFormat(lang, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  if (whole_day) {
    return '';
  } else if (!open_end) {
    return `${formatter.format(start)} - ${formatter.format(end)}`;
  } else {
    return `${formatter.format(start)}`;
  }
};

function HeroSection(props) {
  const intl = useIntl();
  const { image_url, content } = props;
  const {
    title,
    description,
    preview_caption,
    multiple_content_view,
    start,
    end,
  } = content || {};

  const isEvent = content?.['@type'] === 'Event';
  const open_end = content?.open_end;
  const whole_day = content?.whole_day;

  const endDate = new Date(end || Date.now());
  const startDate = new Date(start || Date.now());

  // const isCurrentEvent = startDate <= Date.now() && endDate >= Date.now();
  // const isFutureEvent = startDate > Date.now();

  return (
    <div className="herosection">
      {multiple_content_view && <BodyClass className="multiple-content-view" />}
      <div className="herosection-content-wrapper">
        {content?.preview_image ? (
          <>
            <BodyClass className="has-hero-image" />
            <figure className="herosection-content-image document-image">
              <Image
                image={content.preview_image}
                width="100vw"
                height="90vh"
              />
              {preview_caption && (
                <figcaption className="content-image-caption">
                  {preview_caption}
                </figcaption>
              )}
            </figure>
            <div className="header-title-dates">
              {/* {startDate && isEvent && (
                <div className="event-label">
                  <span
                    className={
                      isFutureEvent
                        ? 'future'
                        : isCurrentEvent
                        ? 'current'
                        : 'past'
                    }
                  >
                    {isFutureEvent
                      ? intl.formatMessage(messages.future)
                      : isCurrentEvent
                      ? intl.formatMessage(messages.nowOnDisplay)
                      : intl.formatMessage(messages.pastExibition)}
                  </span>
                </div>
              )} */}
              <div className="hero-dates-wrapper">
                {startDate && isEvent && !open_end ? (
                  <span className="hero-dates">
                    {getDateRangeDescription(intl.locale, startDate, endDate)}
                  </span>
                ) : (
                  startDate &&
                  isEvent && (
                    <span className="hero-dates">
                      {getDateRangeDescription(intl.locale, startDate)}
                    </span>
                  )
                )}

                {startDate && isEvent && !whole_day && (
                  <span className="hero-dates">
                    {', '}
                    {getHourRangeDescription(
                      intl.locale,
                      startDate,
                      endDate,
                      open_end,
                      whole_day,
                    )}{' '}
                  </span>
                )}
              </div>
              <h1 className="hero-title-floating">{title}</h1>
              <div className="description-container">
                <Container>
                  {description && (
                    <p className="content-description">{description}</p>
                  )}
                </Container>
              </div>
            </div>
          </>
        ) : (
          <div className="herosection-missing-image"></div>
        )}
      </div>
      {title && !image_url && (
        <Container>
          {/* {startDate && isEvent && (
            <div className="event-label">
              <span
                className={
                  isFutureEvent ? 'future' : isCurrentEvent ? 'current' : 'past'
                }
              >
                {isFutureEvent
                  ? intl.formatMessage(messages.future)
                  : isCurrentEvent
                  ? intl.formatMessage(messages.nowOnDisplay)
                  : intl.formatMessage(messages.pastExibition)}
              </span>
            </div>
          )} */}
          <h1 className="documentFirstHeading">{title}</h1>
          {startDate && isEvent && (
            <p className="hero-dates">
              {getDateRangeDescription(intl.locale, startDate, endDate)}
            </p>
          )}
        </Container>
      )}
    </div>
  );
}

export default HeroSection;
