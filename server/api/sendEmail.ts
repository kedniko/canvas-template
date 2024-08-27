import { Resend } from 'resend'
import type { H3Event } from 'h3'
import type { ContactEmail } from '~/types/ContactEmail'

const resend = new Resend(process.env.NUXT_PRIVATE_RESEND_API_KEY)

export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = (await readBody(event)) as ContactEmail
    const { email, subject, message, phone, fullname } = body
    return await resend.emails.send({
      from: 'HR Folio <contact@kedniko.com>',
      to: ['contact@kedniko.com'],
      subject: 'Nuovo messaggio dal tuo sito web',
      html: `
      <p>Un nuovo messaggio è stato inviato dal modulo di contatto HR Folio.</p>
      <p>Ecco i dettagli del messaggio:</p>
      <ul>
        <li>Nome : ${fullname}</li>
        <li>Email : ${email}</li>
        <li>Telefono : ${phone}</li>
        <li>Soggetto : ${subject}</li>
        <li>Messaggio : ${message}</li>
      </ul>
      `,
    })
  }
  catch (error) {
    return { error }
  }
})
