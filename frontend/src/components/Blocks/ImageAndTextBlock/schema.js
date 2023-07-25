export const GridSchema = (props) => {
  return {
    title: 'Image and Text Block',
    block: '__grid',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['align'],
      },
    ],

    properties: {
      align: {
        title: 'Alignment',
        widget: 'align',
        type: 'string',
        default: 'left',
      },
    },
    required: [],
  };
};
