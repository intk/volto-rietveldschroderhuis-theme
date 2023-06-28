import { defineMessages } from 'react-intl';

// export const SocialLink = (props) => ({
//   title: 'Social link',
//   fieldsets: [
//     {
//       id: 'default',
//       title: 'Default',
//       fields: ['href', 'title'],
//     },
//   ],
//   properties: {
//     title: {
//       title: 'Link title',
//     },
//     href: {
//       title: 'Social link',
//       widget: 'url',
//     },
//   },
//   required: ['title', 'href'],
// });

const messages = defineMessages({
  sectionTitle: {
    id: 'Section title',
    defaultMessage: 'Address Section Title',
  },
  name: {
    id: 'Name',
    defaultMessage: 'Name of the museum',
  },
  address: {
    id: 'Address',
    defaultMessage: 'Address 1. line',
  },
  addressSecond: {
    id: 'AddressSecond',
    defaultMessage: 'Address 2. line',
  },
  contactSectionTitle: {
    id: 'Contact title',
    defaultMessage: 'Contact Section Title',
  },
  phone: {
    id: 'Phone',
    defaultMessage: 'Phone',
  },
  email: {
    id: 'E-mail',
    defaultMessage: 'E-mail',
  },
  contact: {
    id: 'Contact',
    defaultMessage: 'Contact',
  },
  openingHours: {
    id: 'Opening hours',
    defaultMessage: 'Opening hours',
  },
  openingHoursDescription: {
    id: 'Opening hours are displayed in the header',
    defaultMessage: 'Opening hours are displayed in the header',
  },
  SiteData: {
    id: 'SiteData',
    defaultMessage: 'Global site settings',
  },
  timeLine1: {
    id: 'TimeLine1',
    defaultMessage: 'First line',
  },
  timeLine2: {
    id: 'TimeLine2',
    defaultMessage: 'Second line',
  },
  timeLine3: {
    id: 'TimeLine3',
    defaultMessage: 'Third line',
  },
  planYourVisit: {
    id: 'PlanYourVisit',
    defaultMessage: 'Plan your visit',
  },
  // SocialLinks: {
  //   id: 'Social links',
  //   defaultMessage: 'Social links',
  // },
  // buttonTitle: {
  //   id: 'Button title',
  //   defaultMessage: 'Button title',
  // },
  // buttonHrefTitle: {
  //   id: 'Button call to action',
  //   defaultMessage: 'Button call to action',
  // },
  // buttonDescription: {
  //   id: 'Tickets button. Displayed in the header',
  //   defaultMessage: 'Tickets button. Displayed in the header',
  // },
  // addressButton: {
  //   id: 'Address Button',
  //   defaultMessage: 'Address Button',
  // },
  // contactButton: {
  //   id: 'Contact Button',
  //   defaultMessage: 'Contact Button',
  // },
  // newsletterTitle: {
  //   id: 'Newsletter Title',
  //   defaultMessage: 'Newsletter Title',
  // },
  // newsletterText: {
  //   id: 'Newsletter Text',
  //   defaultMessage: 'Newsletter Text',
  // },
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
      id: 'sectionTitle',
      title: 'Defaults',
      fields: ['addressTitle', 'name', 'address', 'addressSecond', 'email', 'contactImage'],
    },
    {
      id: 'contact',
      title: intl.formatMessage(messages.contact),
      fields: ['contactTitle', 'timeLine1', 'timeLine2', 'timeLine3', 'planYourVisit', 'timesImage', 'timesImageCaption'],
    },
  ],

  properties: {
    addressTitle: {
      title: intl.formatMessage(messages.sectionTitle),
    },
    name: {
      title: intl.formatMessage(messages.name),
    },
    address: {
      title: intl.formatMessage(messages.address),
    },
    addressSecond: {
      title: intl.formatMessage(messages.addressSecond),
    },
    // addressButton: {
    //   title: intl.formatMessage(messages.addressButton),
    // },
    contactTitle: {
      title: intl.formatMessage(messages.contactSectionTitle),
    },
    // phone: {
    //   title: intl.formatMessage(messages.phone),
    // },
    email: {
      title: intl.formatMessage(messages.email),
    },
    // contactButton: {
    //   title: intl.formatMessage(messages.contactButton),
    // },
    // newsletterTitle: {
    //   title: intl.formatMessage(messages.newsletterTitle),
    // },
    // newsletterText: {
    //   title: intl.formatMessage(messages.newsletterText),
    // },
    openingHours: {
      title: intl.formatMessage(messages.openingHours),
    },
    openingHoursTitle: {
      title: intl.formatMessage(messages.openingHoursDescription),
    },
    timeLine1: {
      title: intl.formatMessage(messages.timeLine1),
    },
    timeLine2: {
      title: intl.formatMessage(messages.timeLine2),
    },
    timeLine3: {
      title: intl.formatMessage(messages.timeLine3),
    },
    planYourVisit: {
      title: intl.formatMessage(messages.planYourVisit),
    },
    // socialLinksTitle: {
    //   title: intl.formatMessage(messages.sectionTitle),
    // },
    // socialLinks: {
    //   title: intl.formatMessage(messages.SocialLinks),
    //   widget: 'object_list',
    //   schema: SocialLink(),
    // },
    // buttonTitle: {
    //   title: intl.formatMessage(messages.buttonTitle),
    //   default: 'Tickets',
    // },
    // buttonHref: {
    //   title: intl.formatMessage(messages.buttonHrefTitle),
    //   widget: 'object_browser',
    //   mode: 'link',
    //   selectedItemAttrs: ['Title', 'Description'],
    //   allowExternals: true,
    //   description: intl.formatMessage(messages.buttonDescription),
    // },
    contactImage: {
      title: 'first image',
      widget: 'attachedimage',
    },
    timesImage: {
      title: 'second image',
      widget: 'attachedimage',
    },
    siteLogo: {
      title: 'Site Logo',
      widget: 'attachedimage',
    },
    timesImageCaption: {
      title: 'Image Caption',
    },
  },
  required: [],
});

export default SiteDataSchema;
