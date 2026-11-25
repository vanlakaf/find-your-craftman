// Mini-API de contact : reçoit le POST du formulaire et envoie l'e-mail via MailDev.
// MailDev écoute le SMTP sur le port 1025 ; interface de lecture : http://localhost:1080
import express from "express";
import nodemailer from "nodemailer";

const app = express();
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "localhost",
  port: 1025,
  secure: false,
});

app.post("/api/contact", async (req, res) => {
  const { nom, objet, message, artisanId, artisanEmail } = req.body ?? {};

  // Validation serveur (miroir de la validation client)
  if (!nom?.trim() || !objet?.trim() || !message?.trim()) {
    return res.status(400).json({ error: "Champs requis manquants." });
  }

  try {
    await transporter.sendMail({
      from: '"Trouve ton artisan" <no-reply@trouve-ton-artisan.fr>',
      to: artisanEmail ?? "artisan@exemple.fr",
      subject: `[Trouve ton artisan] ${objet}`,
      text: `Message envoyé via la plateforme.\n\nArtisan concerné : #${artisanId}\nDe : ${nom}\n\n${message}`,
    });
    res.json({ ok: true });
  } catch {
    res.status(500).json({ error: "Envoi impossible." });
  }
});

app.listen(process.env.PORT ?? 3001, () =>
  console.log(`"API locale : http://localhost:${process.env.PORT ?? 3001}/api/contact"`),
);
