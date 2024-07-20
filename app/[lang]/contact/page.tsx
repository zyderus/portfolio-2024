import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ContactForm from '@/components/contact-form';
import { PageProps } from '../layout';
import { getDictionary } from '@/lib/dictionary';
import SectionHeader from '@/components/ui/section-header';

export default async function ContactPage({ params: { lang } }: PageProps) {
  const {
    intl: {
      page: { contact },
    },
  } = await getDictionary(lang);

  return (
    <section>
      <ToastContainer />
      <SectionHeader title={contact?.title} />
      <ContactForm
        dictionary={{ ...contact, email: { ...contact.email, lang } }}
      />
    </section>
  );
}
