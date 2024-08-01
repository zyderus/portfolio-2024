'use client';
import { useParams } from 'next/navigation';
import { trips } from '@/lib/constants/trips';
import SectionHeader from '@/components/ui/section-header';
import TestTimeline from '@/components/ui/test-timeline';

const PropertyPage = () => {
  const { id } = useParams();
  const trip = trips.find((trip) => trip.id === +id);

  if (!trip)
    return (
      <h1 className='text-center text-2xl font-bold mt-10'>Trip Not Found</h1>
    );

  return (
    <section>
      <SectionHeader title={trip.title} />
      <TestTimeline />
    </section>
  );
};

export default PropertyPage;
