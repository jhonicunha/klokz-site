import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, whatsapp, establishment, type } = await req.json();

        // 1. Configurar o transportador SMTP
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: Number(process.env.SMTP_PORT) === 465, // true para 465, false para outras portas
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // 2. Configurar o conteúdo do e-mail
        const mailOptions = {
            from: `"Klokz Site" <${process.env.SMTP_USER}>`,
            to: `${process.env.CONTACT_EMAIL || process.env.SMTP_USER}, candido.wype@gmail.com`,
            subject: `Novo Lead do Site: ${name}`,
            text: `
                Novo contato recebido do formulário do site:
                - Nome: ${name}
                - WhatsApp: ${whatsapp}
                - Estabelecimento: ${establishment}
                - Tipo: ${type}
            `,
            html: `
                <div style="font-family: sans-serif; color: #333; max-width: 600px;">
                    <h2 style="color: #10A7F1;">Novo Lead Klokz ✨</h2>
                    <p>Você recebeu um novo contato através do formulário do site.</p>
                    <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
                    <p><strong>Nome:</strong> ${name}</p>
                    <p><strong>WhatsApp:</strong> ${whatsapp}</p>
                    <p><strong>Estabelecimento:</strong> ${establishment}</p>
                    <p><strong>Tipo de Negócio:</strong> ${type}</p>
                    <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
                    <p style="font-size: 12px; color: #999;">Status: 30 dias grátis solicitado.</p>
                </div>
            `,
        };

        // 3. Enviar o e-mail
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'E-mail enviado com sucesso!' }, { status: 200 });
    } catch (error: any) {
        console.error('Erro ao enviar e-mail:', error);
        return NextResponse.json({ success: false, message: 'Erro ao enviar e-mail.', error: error.message }, { status: 500 });
    }
}
