import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true, // true = port 465, false = port 587
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false, // ⚠️ pro self-signed certifikáty (např. při lokálním vývoji)
    },
  });

  try {
    // 1. E-mail pro vás (původní funkčnost)
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `Nová zpráva od ${name}`,
      text: message,
      html: getOwnerEmailTemplate(name, email, message),
    });

    // 2. Potvrzovací e-mail pro uživatele
    await transporter.sendMail({
      from: `"Karolína Jurečka Krobová" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Potvrzení přijetí vaší zprávy ✨",
      html: getConfirmationEmailTemplate(name),
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Chyba při odesílání e-mailu:", error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}

// Šablona pro e-mail majiteli (vám)
function getOwnerEmailTemplate(name: string, email: string, message: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nová zpráva z webu</title>
    </head>
    <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      <div style="max-width: 600px; margin: 40px auto; background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%); padding: 40px 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">💌 Nová zpráva z webu</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Někdo vám napsal přes kontaktní formulář</p>
        </div>
        
        <!-- Content -->
        <div style="padding: 40px 30px;">
          <div style="background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%); border-radius: 16px; padding: 24px; margin-bottom: 30px;">
            <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 20px;">📝 Detail zprávy</h2>
            
            <div style="margin-bottom: 16px;">
              <strong style="color: #475569; display: inline-block; width: 80px;">Jméno:</strong>
              <span style="color: #1e293b; font-weight: 500;">${name}</span>
            </div>
            
            <div style="margin-bottom: 16px;">
              <strong style="color: #475569; display: inline-block; width: 80px;">E-mail:</strong>
              <a href="mailto:${email}" style="color: #8b5cf6; text-decoration: none; font-weight: 500;">${email}</a>
            </div>
          </div>
          
          <div style="background: white; border: 2px solid #e2e8f0; border-radius: 16px; padding: 24px;">
            <h3 style="color: #1e293b; margin: 0 0 16px 0; font-size: 18px;">💬 Zpráva:</h3>
            <p style="color: #475569; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <a href="mailto:${email}?subject=Re: Vaše zpráva" style="display: inline-block; background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%); color: white; padding: 14px 28px; border-radius: 12px; text-decoration: none; font-weight: 600; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
              📧 Odpovědět
            </a>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Šablona pro potvrzovací e-mail uživateli
function getConfirmationEmailTemplate(name: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Potvrzení přijetí zprávy</title>
    </head>
    <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%); font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      <div style="max-width: 600px; margin: 40px auto; background: white; border-radius: 24px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%); padding: 50px 30px; text-align: center; position: relative;">
          <div style="background: rgba(255,255,255,0.1); width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 20px; display: block; line-height: 80px; text-align: center; font-size: 36px; color: white;">
            ✨
          </div>
          <h1 style="color: white; margin: 0; font-size: 32px; font-weight: bold;">Děkuji za zprávu!</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 15px 0 0 0; font-size: 18px;">Vaše zpráva byla úspěšně odeslána</p>
        </div>
        
        <!-- Content -->
        <div style="padding: 50px 30px;">
          <div style="text-align: center; margin-bottom: 40px;">
            <h2 style="color: #1e293b; margin: 0 0 16px 0; font-size: 24px;">Ahoj ${name}! 👋</h2>
            <p style="color: #64748b; font-size: 18px; line-height: 1.6; margin: 0;">
              Právě jsem obdržela vaši zprávu a velmi si toho vážím. Ozvu se vám co nejdříve, obvykle do 24 hodin.
            </p>
          </div>
          
          <!-- Profile Card -->
          <div style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); border-radius: 20px; padding: 32px; margin-bottom: 30px; text-align: center;">
            <h3 style="color: #1e293b; margin: 0 0 8px 0; font-size: 24px; font-weight: bold;">Karolína Jurečka Krobová</h3>
            <p style="color: #64748b; margin: 0 0 24px 0; font-size: 16px; font-style: italic;">Ilustrátorka & Grafická designérka</p>
            
            <div style="border-top: 1px solid #e2e8f0; padding-top: 24px;">
              <p style="color: #475569; margin: 0 0 16px 0; font-style: italic;">
                "Každý projekt je pro mě příležitost vytvořit něco, co bude mít dlouhodobou hodnotu."
              </p>
            </div>
          </div>
          
          <!-- Contact Info -->
          <div style="background: white; border: 2px solid #e2e8f0; border-radius: 16px; padding: 24px; margin-bottom: 30px;">
            <h3 style="color: #1e293b; margin: 0 0 20px 0; font-size: 18px; text-align: center;">📞 Kontaktní údaje</h3>
            
            <table role="presentation" style="width:100%; border-spacing:0; text-align:center;">
              <tr>
                <td style="padding: 8px;">
                  <div style="background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); width:48px; height:48px; line-height:48px; text-align:center; border-radius:12px; margin:0 auto 8px; display:block; font-size:20px; color:white;">📞</div>
                  <p style="margin:0; color:#64748b; font-size:14px;">Telefon</p>
                  <p style="margin:4px 0 0 0; color:#1e293b; font-weight:600;">+420 604 411 437</p>
                </td>
                <td style="padding: 8px;">
                  <div style="background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); width:48px; height:48px; line-height:48px; text-align:center; border-radius:12px; margin:0 auto 8px; display:block; font-size:20px; color:white;">📧</div>
                  <p style="margin:0; color:#64748b; font-size:14px;">E-mail</p>
                  <p style="margin:4px 0 0 0; color:#1e293b; font-weight:600;">karolina.krob@gmail.com</p>
                </td>
                <td style="padding: 8px;">
                  <div style="background: linear-gradient(135deg, #ec4899 0%, #be185d 100%); width:48px; height:48px; line-height:48px; text-align:center; border-radius:12px; margin:0 auto 8px; display:block; font-size:20px; color:white;">🌐</div>
                  <p style="margin:0; color:#64748b; font-size:14px;">Web</p>
                  <p style="margin:4px 0 0 0; color:#1e293b; font-weight:600;"><a href="https://www.woofdesign.art/" style="color:#1e293b; text-decoration:none;">www.woofdesign.art</a></p>
                </td>
              </tr>
            </table>
          </div>
          
          <!-- CTA -->
          <div style="text-align: center; margin-bottom: 30px;">
            <a href="https://www.woofdesign.art/portfolio" style="display: inline-block; background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%); color: white; padding: 16px 32px; border-radius: 16px; text-decoration: none; font-weight: 600; font-size: 16px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
              🎨 Prohlédnout portfolio
            </a>
          </div>
          
          <!-- Footer Note -->
          <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-radius: 12px; padding: 20px; text-align: center;">
            <p style="margin: 0; color: #92400e; font-size: 14px;">
              💡 <strong>Tip:</strong> Mezitím se můžete podívat na moje nejnovější práce na webu nebo na sociálních sítích!
            </p>
          </div>
        </div>
        
        <!-- Footer -->
        <div style="background: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
          <p style="margin: 0; color: #64748b; font-size: 14px;">
            Tento e-mail byl odeslán automaticky jako potvrzení vaší zprávy.<br>
            © 2025 Karolína Jurečka Krobová - Ilustrace & Grafický design
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}
