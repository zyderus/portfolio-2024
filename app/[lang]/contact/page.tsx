import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ContactForm from '@/components/contact-form';
import { PageProps } from '../layout';
import { getDictionary } from '@/lib/dictionary';

export default async function ContactPage({ params: { lang } }: PageProps) {
  const {
    intl: { page },
  } = await getDictionary(lang);

  return (
    <div className='px-16'>
      <ToastContainer />
      <h1 className='text-3xl font-bold mb-6'>{page.contact.title}</h1>
      <ContactForm dictionary={page.contact} />
    </div>
  );
}
