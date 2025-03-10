import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Настройка SMTP транспорта
    let transporter = nodemailer.createTransport({
      service: "gmail", // Или другой почтовый сервис
      auth: {
        user: 'serkhan.dev@gmail.com', // Почта отправителя
        pass: 'kwlg dhyr snsg hiit', // Пароль (или App Password) 
      },
    });

    // Настройка письма
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "southsidescript2023@gmail.com", // Твоя почта
      subject: "Новое сообщение с сайта",
      text: `Имя: \nEmail: \nСообщение: `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Ошибка при отправке письма" }), { status: 500 });
  }
}
