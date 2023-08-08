export const VimeoBlockSchema = (props) => {
  return {
    title: 'Vimeo Block',
    block: '__grid',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: [
          'VideoLink',
          'button1',
          'button1link',
          'button2',
          'button2link',
        ],
      },
    ],

    properties: {
      VideoLink: {
        title: 'Video Link',
        widget: 'url',
      },
      button1: {
        type: 'sting',
        title: 'Button 1',
      },
      button1link: {
        type: 'sting',
        title: 'Button 1 Link',
      },
      button2: {
        type: 'sting',
        title: 'Button 2',
      },
      button2link: {
        type: 'sting',
        title: 'Button 2 Link',
      },
    },
    required: [],
  };
};

export default VimeoBlockSchema;
