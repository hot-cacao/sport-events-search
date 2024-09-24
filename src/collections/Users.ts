import { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,

  admin: {
    useAsTitle: 'fullName',
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'fullName',
      type: 'text',
      required: true,
    },
    {
      name: 'roles',
      saveToJWT: true,
      type: 'select',
      hasMany: true,
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        { label: 'Event Organizer', value: 'eventOrganizer' },
      ],
    },
  ],
}
