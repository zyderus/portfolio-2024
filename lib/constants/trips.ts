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
};

export const trips: Trip[] = [
  {
    id: 1088,
    title: 'US trip',
    type: ['business', 'pleasure'],
    description:
      'A trip from Tashkent to San Francisco includes the meeting and contract signing, followed by a visit to friends in Denver. The journey concludes with a road trip across California, featuring various leisure activities, before returning to Tashkent.',
    departure_location: 'Tashkent, Uzbekistan',
    destination_location: 'San Francisco, CA, USA',
    start_date: '12 September, 2024',
    end_date: '2 October, 2024',
  },
];
