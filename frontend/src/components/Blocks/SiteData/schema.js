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
    defaultMessage: 'FIRST COLUMN',
  },
  colOneTitleLink: {
    id: 'Column One Title Link',
    defaultMessage: 'First column title link',
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
    defaultMessage: 'Email',
  },
  colOneImage: {
    id: 'Column One Image',
    defaultMessage: 'Image of the first column',
  },
  colOneImageLink: {
    id: 'Column One Image Link',
    defaultMessage: 'Link for the Image',
  },
  colTwoTitle: {
    id: 'Column Two Title',
    defaultMessage: 'SECOND COLUMN',
  },
  colTwoTitleLink: {
    id: 'Column Two Title Link',
    defaultMessage: 'Second column title link',
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
  colTwoImageLink: {
    id: 'Column Two Image Link',
    defaultMessage: 'Link for the Image',
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
        'colOneTitleLink',
        'rowOne',
        'rowTwo',
        'rowThree',
        'rowFour',
        'colOneImage',
        'colOneImageLink',
      ],
    },
    {
      id: 'colTwoTitle',
      title: intl.formatMessage(messages.colTwoTitle),
      fields: [
        'colTwoTitle',
        'colTwoTitleLink',
        'secLine1',
        'secLine2',
        'secLine3',
        'planYourVisit',
        'planYourVisitLink',
        'colTwoImage',
        'colTwoImageLink',
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
    colOneTitleLink: {
      title: intl.formatMessage(messages.colOneTitleLink),
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
    colOneImageLink: {
      title: intl.formatMessage(messages.colOneImageLink),
    },
    colTwoTitle: {
      title: intl.formatMessage(messages.colTwoTitle),
    },
    colTwoTitleLink: {
      title: intl.formatMessage(messages.colTwoTitleLink),
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
    colTwoImageLink: {
      title: intl.formatMessage(messages.colTwoImageLink),
    },
    secondImageCap: {
      title: intl.formatMessage(messages.secondImageCap),
    },
  },
  required: [],
});

export default SiteDataSchema;
