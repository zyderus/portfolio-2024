import { EmailTemplate } from '@/templates/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { FROM_EMAIL, BCC_EMAIL, REPLY_TO } = process.env;
  const { name, email, message, date } = await req.json();

  if (!name || typeof name !== 'string') {
    console.log('Invalid name');

    return Response.json({ error: 'Invalid name' }, { status: 400 });
  }

  if (!email || typeof email !== 'string' || !/\S+@\S+\.\S+/.test(email)) {
    console.log('Invalid email');

    return Response.json({ error: 'Invalid email' }, { status: 400 });
  }

  if (!message || typeof message !== 'string') {
    console.log('Invalid message');

    return Response.json({ error: 'Invalid message' }, { status: 400 });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: `Rustam <${FROM_EMAIL}>`, // your email address seen by recipient
      to: [email], // visible to everyone
      bcc: [BCC_EMAIL] as string[], // nobody sees addresses here
      reply_to: REPLY_TO, // recipient will send reply to
      subject: `Confirmation: ${name}, your message has been received 🚀`,
      react: EmailTemplate({ name, email, message, date }),
    });

    if (error) {
      return Response.json(error);
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
