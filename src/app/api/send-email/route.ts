import nodemailer from "nodemailer";

export async function POST(req: Request) {

    const { email, message } = await req.json();

    if (!email || !message) {
        return Response.json({ error: "Email and message are required." });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECEIVER_EMAIL,
            subject: "New Contact Message",
            text: `You have a new message from: ${email}\n\n${message}`,
        };

        await transporter.sendMail(mailOptions);

        return Response.json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error("Email sending error:", error);
        return Response.json({ error: "Failed to send email." });
    }
}
