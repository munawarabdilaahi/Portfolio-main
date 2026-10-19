import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageSquare, Copy, Check, ExternalLink } from 'lucide-react';
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
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const emailAddress = "munawarclaahi@gmail.com";
  const phoneNumber = "+252 613697169";

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;

    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 600);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      icon: <Github size={20} />,
      name: "GitHub",
      url: "https://github.com/munawarabdilaahi",
      handle: "@munawarabdilaahi"
    },
    {
      icon: <Linkedin size={20} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/munawar-c-laahi-335453333/",
      handle: "Munawar Abdullahi"
    },
    {
      icon: <Twitter size={20} />,
      name: "Twitter / X",
      url: "https://twitter.com/@munawarc78672",
      handle: "@munawarc78672"
    },
    {
      icon: <MessageSquare size={20} />,
      name: "Discord",
      url: "https://discord.com/users/munawar",
      handle: "munawar"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true"></span>
              <span>Available for New Projects</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-primary">
                Get In Touch
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on your next web application? Send a direct message or copy my contact details below.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="card-surface p-8 rounded-2xl border border-border">
                <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <Mail className="text-primary" size={24} aria-hidden="true" />
                    <span>Send a Message</span>
                  </h2>
                  <button
                    onClick={() => handleCopy(emailAddress, 'email')}
                    className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-colors border border-border"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check size={14} className="text-emerald-500" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>

                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 bg-primary/15 rounded-full flex items-center justify-center mx-auto text-primary">
                      <Check size={32} />
                    </div>
                    <h3 className="text-xl font-bold">Email Client Triggered</h3>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto">
                      Your default mail application should have opened with your draft pre-populated. If not, feel free to email me directly:
                    </p>
                    <div className="inline-flex items-center gap-2 p-3 rounded-lg bg-muted text-sm font-mono text-primary font-semibold">
                      {emailAddress}
                      <button
                        onClick={() => handleCopy(emailAddress, 'email')}
                        className="p-1 hover:text-foreground"
                        aria-label="Copy email address"
                      >
                        {copiedEmail ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-primary hover:underline text-sm font-medium mt-2"
                      >
                        ← Write another message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-xs font-semibold text-foreground uppercase tracking-wider">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm text-foreground placeholder-muted-foreground"
                          placeholder="e.g. Sarah Jenkins"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-semibold text-foreground uppercase tracking-wider">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm text-foreground placeholder-muted-foreground"
                          placeholder="sarah@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="text-xs font-semibold text-foreground uppercase tracking-wider">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm text-foreground placeholder-muted-foreground"
                        placeholder="Frontend Development / Project Inquiry"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-semibold text-foreground uppercase tracking-wider">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2.5 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none text-sm text-foreground placeholder-muted-foreground"
                        placeholder="Tell me about your goals, timelines, and technical requirements..."
                      />
                    </div>

                    <p className="text-xs text-muted-foreground">
                      Note: Submitting will open your default email app with this message draft.
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-hero inline-flex items-center justify-center gap-2 py-3 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                          <span>Preparing Email Draft...</span>
                        </>
                      ) : (
                        <>
                          <ExternalLink size={18} aria-hidden="true" />
                          <span>Draft Message in Email App</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Direct Contact & Social Links */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {/* Direct Info */}
              <div className="card-surface p-8 rounded-2xl border border-border space-y-6">
                <h2 className="text-2xl font-bold">Direct Channels</h2>

                <div className="space-y-4">
                  {/* Email Box */}
                  <div className="p-4 rounded-xl bg-muted/50 border border-border flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                        <Mail size={20} />
                      </div>
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Direct Email</div>
                        <a href={`mailto:${emailAddress}`} className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                          {emailAddress}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy(emailAddress, 'email')}
                      className="p-2 rounded-lg bg-background hover:bg-card border border-border text-muted-foreground hover:text-foreground transition-all"
                      aria-label="Copy email"
                    >
                      {copiedEmail ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                    </button>
                  </div>

                  {/* Phone Box */}
                  <div className="p-4 rounded-xl bg-muted/50 border border-border flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                        <Phone size={20} />
                      </div>
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Phone / WhatsApp</div>
                        <a href="tel:+252613697169" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                          {phoneNumber}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy(phoneNumber, 'phone')}
                      className="p-2 rounded-lg bg-background hover:bg-card border border-border text-muted-foreground hover:text-foreground transition-all"
                      aria-label="Copy phone number"
                    >
                      {copiedPhone ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                    </button>
                  </div>

                  {/* Location Box */}
                  <div className="p-4 rounded-xl bg-muted/50 border border-border flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Location</div>
                      <div className="text-sm font-semibold text-foreground">
                        Mogadishu, Somalia (UTC+3, Available for Global Remote)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="card-surface p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold mb-4">Network & Profiles</h2>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-xl bg-muted/50 hover:bg-primary/10 border border-border hover:border-primary/40 transition-all duration-200 group flex items-center gap-3"
                    >
                      <div className="text-muted-foreground group-hover:text-primary transition-colors">
                        {social.icon}
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                          {social.name}
                        </div>
                        <div className="text-[11px] text-muted-foreground truncate">
                          {social.handle}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
