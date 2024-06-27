'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { RATE_LIMIT_INTERVAL } from '@/lib/constants';
import type { EmailTemplateProps } from '@/templates/email-template';
import type { JsonType } from '@/lib/types';
import { formatDate } from '@/lib/format-date';
import CountdownButton from '@/components/ui/countdown-button';

interface ContactFormProps {
  dictionary: JsonType;
}

export default function ContactForm({ dictionary }: ContactFormProps) {
  const [countdown, setCountdown] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<EmailTemplateProps>();

  async function onSubmit(data: EmailTemplateProps) {
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, date: formatDate(new Date()) }),
      });

      if (response.ok) {
        console.log('Email sent successfully!');
        toast.success(`${data.name}, ${dictionary.successfullySent} 🚀`);
        reset();
        setCountdown(RATE_LIMIT_INTERVAL);
      } else {
        toast(response.statusText);
        const remaining = response.headers.get('X-RateLimit-Remaining');
        console.log('Response error');
        if (remaining) {
          setCountdown(Math.ceil(+remaining / 1000));
        }
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error(`Error sending email: ${error}`);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='space-y-8 max-w-[640px] mx-auto'
    >
      <div className='mb-5'>
        <input
          type='text'
          id='name'
          autoComplete='on'
          placeholder={dictionary.name}
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-blue-500 focus:shadow-md'
          {...register('name', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <input
          // type='email'
          type='text'
          id='email'
          autoComplete='on'
          placeholder='example@domain.com'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-blue-500 focus:shadow-md'
          {...register('email')}
          // TODO: Update required when testing complete
          // {...register('email', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <textarea
          rows={4}
          id='message'
          placeholder={dictionary.message}
          className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-blue-500 focus:shadow-md'
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div>
        <CountdownButton
          loading={isSubmitting}
          countdown={countdown}
          setCountdown={setCountdown}
          dictionary={dictionary}
        />
      </div>
    </form>
  );
}
