export async function POST(req) {
    try {
      const message = await req.json();
         
      
      const users = [
                      {
                        name:'Alina',
                        id:513577083
                       },
                      {
                        name:'serkhan',
                        id:688804750
                      }
      ];

      const TELEGRAM_BOT_TOKEN =   '7325773552:AAFmKfS_HHuYc7BeMh8vlewT6HWl8sijjyI';
      const TELEGRAM_API_URL   =   `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
     
    
      const response = await fetch(TELEGRAM_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: users[1].id,
          text: message,
        }),
      });
     
      const data = await response.json();
       
      if (!response.ok) {
        return new Response(JSON.stringify({ error: data.description }), { status: response.status });
      }
       
      return new Response(JSON.stringify({ success: true}), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  }
   
   
