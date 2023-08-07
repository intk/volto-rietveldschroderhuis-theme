export const VimeoBlockSchema = (props) => {
  return {
    title: 'Vimeo Block',
    block: '__grid',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['VideoLink'],
      },
    ],

    properties: {
      VideoLink: {
        title: 'Video Link',
        widget: 'url',
      },
    },
    required: [],
  };
};

export default VimeoBlockSchema;
