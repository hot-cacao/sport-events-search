import { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',
  // This is only for the purpose of demoing don't do this in produciton
  access: {
    read: () => true,
    update: () => true,
  },
  admin: {
    useAsTitle: 'eventName',
  },
  fields: [
    {
      name: 'eventName',
      type: 'text',
      required: true,
    },
    {
      name: 'locationStreet',
      type: 'text',
      required: true,
    },
    {
      name: 'locationCity',
      type: 'text',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'dateStart',
          type: 'date',
          admin: {
            date: {
              pickerAppearance: 'dayAndTime',
            },
          },
          required: true,
        },
        {
          name: 'dateEnd',
          type: 'date',
          admin: {
            date: {
              pickerAppearance: 'dayAndTime',
            },
          },
          required: true,
        },
      ],
    },
    {
      name: 'urlLink',
      type: 'text',
      required: true,
    },
    {
      name: 'slotLeft',
      type: 'number',
      required: true,
    },
  ],
}
