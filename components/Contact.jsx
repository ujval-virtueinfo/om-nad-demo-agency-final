import { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    // --- MOCKED SUBMISSION FOR DEMO ---
    await new Promise(resolve => setTimeout(resolve, 1500));
    const data = new FormData(e.target);
    const formValues = Object.fromEntries(data);

    if (formValues.name && formValues.email) {
      // In a REAL Next.js Vercel deployment, you would call your API route here:
      // const response = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formValues) });
      // if (response.ok) { setStatus('success'); e.target.reset(); }

      setStatus('success');
      e.target.reset();
    } else {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12 text-primary-dark">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-bg-light p-8 rounded-lg shadow-lg">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" id="name" name="name" required className="w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-accent-blue focus:border-accent-blue transition"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" name="email" required className="w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-accent-blue focus:border-accent-blue transition"/>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" name="message" rows="4" required className="w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-accent-blue focus:border-accent-blue transition"></textarea>
              </div>

              {/* CAPTCHA PLACEHOLDER */}
              <div className="h-10 border border-dashed border-gray-400 p-2 text-sm text-gray-600 flex items-center justify-center">
                reCAPTCHA Placeholder (Real Vercel app uses serverless functions)
              </div>

              <button type="submit" className="btn-primary w-full" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              {/* Submission Status */}
              {status === 'success' && <p className="text-green-600 font-medium">Message sent successfully! (MOCK)</p>}
              {status === 'error' && <p className="text-red-600 font-medium">Submission failed. Please fill all fields.</p>}
            </form>
          </div>

          {/* Contact Details */}
          <div className="space-y-8 p-8 lg:p-0">
            <h3 className="text-2xl text-primary-dark">Contact Information</h3>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-accent-blue text-xl mt-1 mr-3 flex-shrink-0" />
                <p>123 Web Design Avenue, Squarespace City, Drupal County, 10001</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-accent-blue text-xl mr-3 flex-shrink-0" />
                <p><a href="mailto:info@example.com" className="hover:text-accent-blue transition">info@example.com</a></p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-accent-blue text-xl mr-3 flex-shrink-0" />
                <p><a href="tel:+1234567890" className="hover:text-accent-blue transition">+1 (234) 567-890</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
