import React, { useState, Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import emailjs from '@emailjs/browser';
import Fox from '../models/Fox';
import Alert from '../components/Alert';


const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');
  const [alert, setAlert] = useState({ show: false, text: '', type: 'success' });

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  const showAlert = (options) => {
    setAlert({ ...alert, ...options });
  };
  
  const hideAlert = () => {
    setAlert({ ...alert, show: false });
  };
  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setCurrentAnimation('walk');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');

    await new Promise((res) => setTimeout(res, 1500));

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: 'Sahil',
          to_email: 'sahillitt@gmail.com',
        }
      );
      

      showAlert({
        show: true,
        text: 'Message sent successfully!',
        type: 'success',
      });
      
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      showAlert({
        show: true,
        text: 'Failed to send message. Please try again.',
        type: 'error',
      });
    } finally {
      setIsLoading(false);
      setCurrentAnimation('idle');
      setTimeout(hideAlert, 3000);
    }
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <Alert show={alert.show} text={alert.text} type={alert.type} />


        <form className="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit}>
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John Smith"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={() => setCurrentAnimation('walk')}
              onBlur={() => setCurrentAnimation('idle')}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="johnsmith@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={() => setCurrentAnimation('walk')}
              onBlur={() => setCurrentAnimation('idle')}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Let me know how I can help you!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={() => setCurrentAnimation('walk')}
              onBlur={() => setCurrentAnimation('idle')}
            />
          </label>
          <button
            type="submit"
            className="btn disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <Suspense fallback={<Html><div>Loading...</div></Html>}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;