import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} aria-hidden="true" />,
      url: 'https://github.com/munawarabdilaahi',
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={20} aria-hidden="true" />,
      url: 'https://www.linkedin.com/in/munawar-c-laahi-335453333/',
      label: 'LinkedIn'
    },
    {
      icon: <Mail size={20} aria-hidden="true" />,
      url: 'mailto:munawarclaahi@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="relative bg-card border-t border-border mt-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-primary">
                Munawar
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Frontend Developer specializing in React and modern web technologies
              </p>
            </div>

            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Passionate about creating beautiful, functional, and user-centered digital experiences.
              Always excited to work on new projects and collaborate with creative teams.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-muted text-foreground hover:bg-primary hover:text-primary-foreground border border-border transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm tracking-wide uppercase">Quick Links</h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-1.5">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="inline-flex items-center min-h-[36px] py-1 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Info & Status */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm tracking-wide uppercase">Get In Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a
                href="mailto:munawarclaahi@gmail.com"
                className="block hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded"
              >
                munawarclaahi@gmail.com
              </a>
              <a
                href="tel:+252613697169"
                className="block hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded"
              >
                +252 613697169
              </a>
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-xs font-medium text-primary">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
                <span>Available for projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/70 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            <span>&copy; {currentYear} Munawar Abdullahi Hussein. Made with</span>
            <Heart size={14} className="text-primary fill-primary/30" aria-hidden="true" />
            <span>using React &amp; Tailwind CSS</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
            aria-label="Back to top"
          >
            <ArrowUp size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
