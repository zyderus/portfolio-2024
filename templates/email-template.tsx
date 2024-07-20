import * as React from 'react';
import {
  Body,
  Container,
  Column,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';
import { myData } from '@/lib/constants/constants';
import type { JsonType } from '@/lib/types';

// template does NOT understand Flexbox nor Grid
// set once you know your url
// port 3000. provided your next js app run on that port
const baseUrl = process.env.VERCEL_URL
  ? 'portfolio-2024-five-chi.vercel.app'
  : 'http://localhost:3000';

export interface EmailTemplateProps {
  name?: string;
  email?: string;
  message?: string;
  date: string;
  dictionary?: JsonType;
}

export const EmailTemplate = ({
  name = 'Hi',
  email,
  message,
  date,
  dictionary,
}: EmailTemplateProps) => {
  const [
    preview,
    hello,
    reply,
    youWrote,
    skillsIntro,
    quickLinks,
    portfolio,
    resume,
    goodDay,
  ] = dictionary?.message.split('|');

  return (
    <Html>
      <Head />
      <Preview>
        {preview || 'Thank you for reaching out via'} rystam.com
      </Preview>
      <Tailwind>
        <Body className='bg-white my-auto mx-auto font-sans px-2'>
          <Container className='border border-solid border-[#e8e5e3] rounded-xl my-[20px] mx-auto p-[20px] max-w-[600px]'>
            <Section>
              <Row>
                <Column align='left'>
                  <span className='text-2xl text-[#e8e5e3]'>RZ</span>
                </Column>
                <Column align='right'>
                  <Link
                    href={myData.linkedInUrl}
                    className='ml-1 border-solid border border-[#e8e5e3] rounded-full text-center inline-block p-2.5 text-[#a09b96]'
                  >
                    {/* 
                      Keep in mind: the template will insert absolute links to images
                      which have to be stored on a server
                    */}
                    <div className='text-center'>
                      <Img
                        src='https://react-email-resend-rust.vercel.app/linkedin.png'
                        width='18'
                        height='18'
                        alt='LinkedIn'
                        className='mx-auto'
                      />
                    </div>
                  </Link>
                  <Link
                    href={myData.githubUrl}
                    className='ml-1 border-solid border border-[#e8e5e3] rounded-full text-center inline-block leading-9 p-2.5 text-[#a09b96]'
                  >
                    <div className='text-center'>
                      <Img
                        src={`${baseUrl}/github.png`}
                        width='18'
                        height='18'
                        alt='Github'
                        className='mx-auto'
                      />
                    </div>
                  </Link>
                  <Link
                    href={myData.portfolioUrl}
                    className='ml-1 border-solid border border-[#e8e5e3] rounded-full text-center inline-block p-2.5 leading-9 text-[#a09b96]'
                  >
                    <div className='text-center'>
                      <Img
                        src={`${baseUrl}/portfolio.png`}
                        width='18'
                        height='18'
                        alt='Portfolio'
                        className='mx-auto'
                      />
                    </div>
                  </Link>
                </Column>
              </Row>
            </Section>
            <Section className='px-[20px]'>
              <Text>
                {hello || 'Hi'} {name},
              </Text>
              <Text>
                {reply ||
                  "Got your message loud and clear 🚀. Thank you for reaching out. I'will get back to you soon."}
              </Text>
              <Text>{youWrote || 'You wrote'}:</Text>
              <Section className='bg-[#ffffcc] border border-solid border-[#e8e5e3] rounded-xl px-8 py-4 -rotate-2'>
                <Text className='leading-7'>
                  Date: {date}
                  <br />
                  From: {name}
                  <br />
                  Email:{' '}
                  <Link
                    href={`mailto:${email}?subject=Re:%20Your%20inquiry%20via%20${myData.portfolioUrl.slice(
                      7
                    )}&body=Hi%20${name},`}
                  >
                    {email}
                  </Link>
                </Text>
                <Text>{message}</Text>
              </Section>
              <Text className='mt-8'>
                {skillsIntro ||
                  'In the meantime, here&apos;s a quick recap of the tools I use'}{' '}
                ✨
              </Text>
              <ul className='text-blue-500 columns-2 max-w-xs mx-auto font-mono'>
                {myData.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
              <Text>
                🔍{' '}
                {quickLinks ||
                  'quick links for additional information, should you need it'}
                .
              </Text>
              <Row>
                <Column align='center'>
                  <Link href={myData.portfolioUrl}>
                    {portfolio || 'portfolio'}
                  </Link>
                  <br />
                  <Link href={myData.portfolioUrl}>
                    <Img
                      src={`${baseUrl}/thumbnail-portfolio.webp`}
                      width='100'
                      height='135'
                      alt='Resume'
                      className='border border-solid border-[#e8e5e3] rounded-xl p-2 mt-2'
                    />
                  </Link>
                </Column>
                <Column align='center'>
                  <Link href={myData.resumeUrl(dictionary?.lang || 'en')}>
                    {resume || 'resume'}
                  </Link>
                  <Link href={myData.resumeUrl(dictionary?.lang || 'en')}>
                    <Img
                      src={`${baseUrl}/thumbnail-resume.webp`}
                      width='100'
                      height='135'
                      alt='Resume'
                      className='border border-solid border-[#e8e5e3] rounded-xl p-2 mt-2'
                    />
                  </Link>
                </Column>
              </Row>
              <Text>{goodDay || 'Have a good day'} ☀️,</Text>
              <Text>{myData.name}</Text>
            </Section>
          </Container>
          <Text className='text-center text-[#a09b96] leading-8'>
            <Link href={myData.linkedInUrl} className='text-[#a09b96]'>
              LinkedIn
            </Link>{' '}
            <span className='text-[14px] font-mono'>|</span>{' '}
            <Link href={myData.githubUrl} className='text-[#a09b96]'>
              Github
            </Link>{' '}
            <span className='text-[14px] font-mono'>|</span>{' '}
            <Link href={myData.portfolioUrl} className='text-[#a09b96]'>
              Portfolio
            </Link>{' '}
            <span className='text-[14px] font-mono'>|</span>{' '}
            <Link
              href={myData.resumeUrl(dictionary?.lang || 'en')}
              className='text-[#a09b96]'
            >
              Resume
            </Link>
            <br />
            &copy; {new Date().getFullYear()} {myData.portfolioUrl.slice(7)}
          </Text>
        </Body>
      </Tailwind>
    </Html>
  );
};

EmailTemplate.PreviewProps = {
  name: 'Liz',
  email: 'liz@coding.com',
  message:
    'Hey Rustam, we have an exciting opportunity for your consideration. We are about to start a new project which right up your alley. You skills could really help the setup and progress. Do you think this is something you could look into? Thanks',
  date: '7 May 2024 04:05',
} as EmailTemplateProps;

export default EmailTemplate;
