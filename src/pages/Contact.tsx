import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, MessageSquare } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mailtoLink = `mailto:munawarclaahi@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;

    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-secondary" size={24} />,
      title: "Email",
      value: "munawarclaahi@gmail.com",
      link: "mailto:munawarclaahi@gmail.com"
    },
    {
      icon: <Phone className="text-secondary" size={24} />,
      title: "Phone",
      value: "+252 613697169",
      link: "tel:+252613697169"
    },
    {
      icon: <MapPin className="text-secondary" size={24} />,
      title: "Location",
      value: "Mogadishu, Somalia",
      link: "https://www.google.com/maps/place/Mogadishu/@2.0372133,45.3379172,13z"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: "GitHub",
      url: "https://github.com/munawarabdilaahi",
      color: "hover:text-gray-400"
    },
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/munawar-c-laahi-335453333/",
      color: "hover:text-blue-400"
    },
    {
      icon: <Twitter size={24} />,
      name: "Twitter",
      url: "https://twitter.com/@munawarc78672",
      color: "hover:text-blue-400"
    },
    {
      icon: <MessageSquare size={24} />,
      name: "Discord",
      url: "https://discord.com/users/munawar",
      color: "hover:text-indigo-400"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start your next project? Let's collaborate and create something amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="card-gradient p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Send className="text-primary" size={28} aria-hidden="true" />
                  Send me a message
                </h2>

                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                      <Mail className="text-green-500" size={32} />
                    </div>
                    <h3 className="text-xl font-bold">Message Ready!</h3>
                    <p className="text-muted-foreground">
                      Your email client should open shortly. If it doesn't, you can reach me directly at{' '}
                      <a href="mailto:munawarclaahi@gmail.com" className="text-primary hover:underline">
                        munawarclaahi@gmail.com
                      </a>
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-primary hover:underline text-sm"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground placeholder-muted-foreground"
                          placeholder="Your name"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground placeholder-muted-foreground"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-foreground">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground placeholder-muted-foreground"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none text-foreground placeholder-muted-foreground"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <div aria-live="polite" className="sr-only">
                      {isSubmitting ? 'Opening your email client...' : ''}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-hero inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                          <span>Opening email...</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} aria-hidden="true" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {/* Contact Details */}
              <div className="card-gradient p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <a
                      key={info.title}
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-all duration-300 hover:scale-105 group"
                    >
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{info.title}</div>
                        <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="card-gradient p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>

                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-4 rounded-lg bg-accent hover:scale-105 transition-all duration-300 group ${social.color}`}
                    >
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </div>
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="card-gradient p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-4">Availability</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" aria-hidden="true"></div>
                    <span className="text-foreground">Available for new projects</span>
                  </div>
                  <p className="text-muted-foreground">
                    I typically respond within 24 hours. For urgent matters, feel free to call or reach out on social media.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mt-20 text-center animate-fade-in" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="card-gradient p-6 rounded-xl text-left hover:scale-105 transition-all duration-300">
                <h3 className="font-bold mb-3 text-primary">What's your typical response time?</h3>
                <p className="text-muted-foreground text-sm">
                  I usually respond within 24 hours during business days. For urgent projects, I aim to respond within a few hours.
                </p>
              </div>

              <div className="card-gradient p-6 rounded-xl text-left hover:scale-105 transition-all duration-300">
                <h3 className="font-bold mb-3 text-primary">Do you work with remote teams?</h3>
                <p className="text-muted-foreground text-sm">
                  Absolutely! I'm experienced in remote collaboration and work with teams across different time zones.
                </p>
              </div>

              <div className="card-gradient p-6 rounded-xl text-left hover:scale-105 transition-all duration-300">
                <h3 className="font-bold mb-3 text-primary">What's your project minimum?</h3>
                <p className="text-muted-foreground text-sm">
                  I work on projects of all sizes, from small fixes to large applications. Let's discuss your specific needs!
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
