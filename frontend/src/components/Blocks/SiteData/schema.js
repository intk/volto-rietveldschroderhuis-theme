import { defineMessages } from 'react-intl';

const messages = defineMessages({
  SiteData: {
    id: 'Site Data',
    defaultMessage: 'Footer Data',
  },
  siteLogo: {
    id: 'Site Logo',
    defaultMessages: 'Site Logo',
  },
  colOneTitle: {
    id: 'Column One Title',
    defaultMessage: 'Title of the first column',
  },
  rowOne: {
    id: 'rowOne',
    defaultMessage: 'First row',
  },
  rowTwo: {
    id: 'rowTwo',
    defaultMessage: 'Second row',
  },
  rowThree: {
    id: 'rowThree',
    defaultMessage: 'Third row',
  },
  rowFour: {
    id: 'rowFour',
    defaultMessage: 'Fourth row',
  },
  colOneImage: {
    id: 'Column One Image',
    defaultMessage: 'Image of the first column',
  },
  colTwoTitle: {
    id: 'Column Two Title',
    defaultMessage: 'Title of the second column',
  },
  secLine1: {
    id: 'secLine1',
    defaultMessage: 'First row',
  },
  secLine2: {
    id: 'secLine2',
    defaultMessage: 'Second row',
  },
  secLine3: {
    id: 'secLine3',
    defaultMessage: 'Third row',
  },
  planYourVisit: {
    id: 'planYourVisit',
    defaultMessage: 'Plan your visit',
  },
  planYourVisitLink: {
    id: 'planYourVisitLink',
    defaultMessage: 'Plan your visit link',
  },
  colTwoImage: {
    id: 'Column Two Image',
    defaultMessage: 'Image of the second column',
  },
  secondImageCap: {
    id: 'ImageCaption',
    defaultMessage: 'Image caption',
  },
});

const SiteDataSchema = ({ intl }) => ({
  title: intl.formatMessage(messages.SiteData),
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['siteLogo'],
    },
    {
      id: 'colOneTitle',
      title: intl.formatMessage(messages.colOneTitle),
      fields: [
        'colOneTitle',
        'rowOne',
        'rowTwo',
        'rowThree',
        'rowFour',
        'colOneImage',
      ],
    },
    {
      id: 'colTwoTitle',
      title: intl.formatMessage(messages.colTwoTitle),
      fields: [
        'colTwoTitle',
        'secLine1',
        'secLine2',
        'secLine3',
        'planYourVisit',
        'planYourVisitLink',
        'colTwoImage',
        'secondImageCap',
      ],
    },
  ],

  properties: {
    siteLogo: {
      title: 'Site Logo',
      widget: 'attachedimage',
    },
    colOneTitle: {
      title: intl.formatMessage(messages.colOneTitle),
    },
    rowOne: {
      title: intl.formatMessage(messages.rowOne),
    },
    rowTwo: {
      title: intl.formatMessage(messages.rowTwo),
    },
    rowThree: {
      title: intl.formatMessage(messages.rowThree),
    },
    rowFour: {
      title: intl.formatMessage(messages.rowFour),
    },
    colOneImage: {
      title: intl.formatMessage(messages.colOneImage),
      widget: 'attachedimage',
    },
    colTwoTitle: {
      title: intl.formatMessage(messages.colTwoTitle),
    },
    secLine1: {
      title: intl.formatMessage(messages.secLine1),
    },
    secLine2: {
      title: intl.formatMessage(messages.secLine2),
    },
    secLine3: {
      title: intl.formatMessage(messages.secLine3),
    },
    planYourVisit: {
      title: intl.formatMessage(messages.planYourVisit),
    },
    planYourVisitLink: {
      title: intl.formatMessage(messages.planYourVisitLink),
    },
    colTwoImage: {
      title: intl.formatMessage(messages.colTwoImage),
      widget: 'attachedimage',
    },
    secondImageCap: {
      title: intl.formatMessage(messages.secondImageCap),
    },
  },
  required: [],
});

export default SiteDataSchema;
