import { getDictionary } from '@/lib/dictionary';
import { PageProps } from '../layout';
import Projects from '@/components/projects';

export default async function ProjectPage({ params: { lang } }: PageProps) {
  const {
    intl: { page },
  } = await getDictionary(lang);

  return (
    <section className='py-24'>
      <div className='container px-16'>
        <h1 className='text-3xl font-bold'>Projects</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          veritatis? Corporis fugit voluptatum nisi doloremque? Quasi distinctio
          consequuntur, debitis corporis perferendis autem nesciunt doloribus
          soluta. Id quas laborum illo accusantium ut molestias iusto, impedit
          et laboriosam facilis odio nemo suscipit possimus officia ea explicabo
          deleniti, corrupti iste totam magnam earum labore ducimus consequatur
          quia!
        </p>

        <Projects />
      </div>
    </section>
  );
}
