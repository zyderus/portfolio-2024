'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { trips } from '@/lib/constants/trips';
import SectionHeader from '@/components/ui/section-header';
import TestTimeline from '@/components/ui/test-timeline';

const PropertyPage = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(trips.find((trip) => trip.id === +id));

  if (!trip)
    return (
      <h1 className='text-center text-2xl font-bold mt-10'>Trip Not Found</h1>
    );

  return (
    <section>
      <SectionHeader title={trip.title} />
      <TestTimeline list={trip.points_of_interest} />
    </section>
  );
};

export default PropertyPage;
