'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { RATE_LIMIT_INTERVAL } from '@/lib/constants/constants';
import type { EmailTemplateProps } from '@/templates/email-template';
import type { JsonType } from '@/lib/types';
import { formatDate } from '@/lib/format-date';
import CountdownButton from '@/components/ui/countdown-button';

// TODO: add error text

interface FormField {
  id: keyof EmailTemplateProps;
  type: string;
  placeholder?: string;
  autocomplete?: 'on' | '';
  required: boolean;
}

const contactFormFields: FormField[] = [
  {
    id: 'name',
    type: 'text',
    placeholder: 'Name',
    autocomplete: 'on',
    required: true,
  },
  {
    id: 'email',
    type: 'email',
    placeholder: 'example@domain.com',
    autocomplete: 'on',
    required: true,
  },
  {
    id: 'message',
    type: 'textarea',
    placeholder: 'Type your message',
    autocomplete: 'on',
    required: true,
  },
];

interface ContactFormProps {
  dictionary: JsonType;
}

export default function ContactForm({ dictionary }: ContactFormProps) {
  const [remainingTime, setRemainingTime] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<EmailTemplateProps>();

  async function submitForm(data: EmailTemplateProps) {
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
        setRemainingTime(RATE_LIMIT_INTERVAL);
      } else {
        const data = await response.json();
        toast(data.error);
        const remaining = response.headers.get('X-RateLimit-Remaining');
        console.log('Response error:', data.error);
        if (remaining) {
          setRemainingTime(Math.ceil(+remaining / 1000));
        }
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error(`Error sending email: ${error}`);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className='space-y-8 max-w-[640px] mx-auto text-sm xs:text-base'
    >
      <div className='flex flex-wrap justify-between gap-8'>
        {contactFormFields.map(
          ({ id, type, placeholder, autocomplete, required }: FormField, i) =>
            type === 'textarea' ? (
              <textarea
                key={i}
                rows={4}
                id={id}
                placeholder={dictionary[id] || placeholder}
                className='w-full resize-none rounded-xl border-2 border-color-primary/20 bg-bg-secondary py-1 xs:py-2 sm:py-3 px-2 xs:px-3 sm:px-6 outline-none focus:border-accent'
                {...register(id, { required })}
              ></textarea>
            ) : (
              <input
                key={i}
                type={type}
                id={id}
                autoComplete={autocomplete}
                placeholder={dictionary[id] || placeholder}
                className='w-full sm:w-auto sm:flex-grow rounded-xl border-2 border-color-primary/20 bg-bg-secondary py-1 xs:py-2 sm:py-3 px-2 xs:px-3 sm:px-6 outline-none focus:border-accent'
                {...register(id, { required })}
              />
            )
        )}
      </div>
      <CountdownButton
        loading={isSubmitting}
        remainingTime={remainingTime}
        dictionary={dictionary?.button}
        className='w-full sm:w-1/3'
      />
    </form>
  );
}
