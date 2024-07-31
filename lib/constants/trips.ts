export type PointOfInterest = {
  id: number;
  visitOrder?: number;
  section: string;
  title: string;
  location: {
    lat: number;
    lng: number;
  };
  description: string;
};

type Trip = {
  id: number;
  title: string;
  type: string[];
  description: string;
  departure_location: string;
  destination_location: String;
  start_date: string;
  end_date: string;
  points_of_interest: PointOfInterest[];
};

export const trips: Trip[] = [
  {
    id: 1088,
    title: 'Trip to the US',
    type: ['business', 'pleasure'],
    description:
      'A trip from Tashkent to San Francisco includes the meeting and contract signing, followed by a visit to friends in Denver. The journey concludes with a road trip across California, featuring various leisure activities, before returning to Tashkent.',
    departure_location: 'Tashkent, Uzbekistan',
    destination_location: 'San Francisco, CA, USA',
    start_date: '12 September, 2024',
    end_date: '2 October, 2024',
    points_of_interest: [
      {
        id: 101,
        visitOrder: 1,
        section: 'California',
        title: 'San Francisco',
        location: {
          lat: 37.7749,
          lng: -122.4194,
        },
        description: 'bla',
      },
      {
        id: 111,
        visitOrder: 1,
        section: 'California',
        title: 'San Francisco Chinatown',
        location: {
          lat: 37.7945,
          lng: -122.4048,
        },
        description: 'bla',
      },
      {
        id: 102,
        visitOrder: 2,
        section: 'Colorado',
        title: 'Denver',
        location: {
          lat: 39.7392,
          lng: -104.9903,
        },
        description: 'bla',
      },
      {
        id: 103,
        visitOrder: 3,
        section: 'Colorado',
        title: 'Boulder',
        location: {
          lat: 40.015,
          lng: -105.2705,
        },
        description: 'bla',
      },
      {
        id: 104,
        visitOrder: 4,
        section: 'Colorado',
        title: 'Golden',
        location: {
          lat: 39.7555,
          lng: -105.2211,
        },
        description: 'bla',
      },
      {
        id: 106,
        visitOrder: 6,
        section: 'Colorado',
        title: 'Red Rocks Amphitheatre',
        location: {
          lat: 39.6655,
          lng: -105.2052,
        },
        description: 'bla',
      },

      // delete repeated
      {
        id: 122,
        visitOrder: 2,
        section: 'Colorado',
        title: 'Denver',
        location: {
          lat: 39.7392,
          lng: -103.9903,
        },
        description: 'bla',
      },
      {
        id: 123,
        visitOrder: 3,
        section: 'Colorado',
        title: 'Boulder',
        location: {
          lat: 40.015,
          lng: -104.2705,
        },
        description: 'bla',
      },
      {
        id: 124,
        visitOrder: 4,
        section: 'Colorado',
        title: 'Golden',
        location: {
          lat: 39.7555,
          lng: -104.2211,
        },
        description: 'bla',
      },
      {
        id: 126,
        visitOrder: 6,
        section: 'Colorado',
        title: 'Red Rocks Amphitheatre',
        location: {
          lat: 39.6655,
          lng: -104.2052,
        },
        description: 'bla',
      },
    ],
  },
];
