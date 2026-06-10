import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  contact: defineAction({
    input: z.object({
      name: z.string(),
      email: z.string().email(),
      message: z.string(),
    }),

    handler: async (data) => {
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: ['nicholas.nagel@csmtec.com.br'],
        subject: 'Novo contato do site',
        html: `
          <h2>Novo contato</h2>
          <p><strong>Nome:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${data.message}</p>
        `,
        
      });
        console.log('Form submitted:', data);

  const result = await resend.emails.send(...);

  console.log(result);

      return {
        success: true,
      };



    },
  }),
};