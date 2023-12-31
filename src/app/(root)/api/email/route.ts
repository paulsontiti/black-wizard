import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse,NextRequest } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req:NextRequest,res:NextResponse) {

const domain = await resend.domains.get('d91cd9bd-1176-453e-8fc1-35364d380206');
console.log(domain)
  const {fromEmail,subject,message} = await req.json() as {fromEmail:string,subject:string,message:string}
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: process.env.To_Email as string,
      subject,
      text:message,
      react: EmailTemplate({ firstName: 'John' }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}