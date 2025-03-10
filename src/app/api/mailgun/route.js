import formData from "form-data";
import Mailgun from "mailgun.js";

export async function POST(req) {
  try {


    const mailgun = new Mailgun(formData);
    const client = mailgun.client({
      username: "api",
      key: '840849c6de6b16d85a7c34de421442ca',
    });

    const messageData = {
      from: `Контактная форма <postmaster@sandbox4da1b0c7d14341af94d6cfa8fe87532b.mailgun.org>`,
      to:'serkhan.dev@gmail.com',
      subject: "Новое сообщение с сайта",
      text: `Имя: \nEmail:\nСообщение:`,
    };

    await client.messages.create('sandbox4da1b0c7d14341af94d6cfa8fe87532b.mailgun.org', messageData);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Ошибка Mailgun:", error);
    return new Response(JSON.stringify({ error: "Ошибка при отправке письма" }), { status: 500 });
  }
}



//