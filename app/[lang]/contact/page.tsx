import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ContactForm from '@/components/contact-form';
import { PageProps } from '../layout';
import { getDictionary } from '@/lib/dictionary';
import SectionHeader from '@/components/ui/section-header';

export default async function ContactPage({ params: { lang } }: PageProps) {
  const {
    intl: { page },
  } = await getDictionary(lang);

  return (
    <section>
      <ToastContainer />
      <SectionHeader title={page.contact.title} />
      <ContactForm dictionary={page.contact} />

      {/* <div className='bg-white mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h2 className='text-xl font-bold mb-4'>Contact Us</h2>
        <form className='space-y-4'>
          <div>
            <label htmlFor='name' className='block text-gray-700'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Your Name'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
            />
          </div>
          <div>
            <label htmlFor='email' className='block text-gray-700'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Your Email'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
            />
          </div>
          <div>
            <label htmlFor='message' className='block text-gray-700'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              rows={4}
              placeholder='Your Message'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
            ></textarea>
          </div>
          <div>
            <button
              type='submit'
              className='bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600'
            >
              Submit
            </button>
          </div>
        </form>
      </div> */}
    </section>
  );
}
