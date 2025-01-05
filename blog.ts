export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'subheading',
        type: 'string',
        title: 'Subheading',
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description',
      },
      {
        name: 'author',
        type: 'string',
        title: 'Author',
      },
      {
        name: 'caption',
        type: 'string',
        title: 'Caption',
      },
      {
        name: 'attribution',
        type: 'string',
        title: 'Attribution',
      },
      {
        title: "Poster",
        name: "poster",
        type: "image",
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: "caption",
            type: "string",
            title: "Caption"
          },
          {
            name: "attribution",
            type: "string",
            title: "Attribution"
          }
        ]
      }
    ],
  };
  