import emailjs from 'emailjs-com';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      const response = await emailjs.send(
        process.env.EMAILJS_SERVICE_ID, 
        process.env.EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          to_name: 'Sahil',
          from_email: email,
          to_email: 'sahillitt@gmail.com',
          message: message,
        },
        process.env.EMAILJS_PUBLIC_KEY
      );

      res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      res.status(500).json({ success: false, message: 'Failed to send email.' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
