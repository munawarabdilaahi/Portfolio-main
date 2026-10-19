import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Sparkles, Compass, Code2, Rocket, ShieldCheck, Layers } from 'lucide-react';
import { SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiHtml5 } from "react-icons/si";
import { Link } from 'react-router-dom';
import TypingEffect from '../components/TypingEffect';
import PageTransition from '../components/PageTransition';
import munawar from '../assets/munawar.png';
import Bizpro from "../assets/Bizpro.png";
import Dhismahomes from '../assets/Dhismahomes.png';
import traival from '../assets/traival.png';

const Home = () => {
  const roles = [
    'Frontend Developer',
    'React & TypeScript Specialist',
    'Accessible UI Builder',
    'Problem Solver'
  ];

  const featuredProjects = [
    {
      title: "Som Travel",
      category: "Tourism & Booking Platform",
      role: "Lead Frontend Developer",
      description: "Explore destinations and book travel packages across Somalia. Features instant multi-category search, responsive booking flows, and robust client-side state management.",
      image: traival,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Context API"],
      liveUrl: "https://somalia-travel-ejtd.vercel.app/",
      githubUrl: "https://github.com/munawarabdilaahi/Somalia-Travel"
    },
    {
      title: "BizPro",
      category: "Business Management Platform",
      role: "Frontend Developer & UI Designer",
      description: "An all-in-one business growth workspace offering consulting, design, and marketing workflows with interactive drag-and-drop boards and persistent local storage.",
      image: Bizpro,
      technologies: ["React", "TypeScript", "Drag & Drop", "Chakra UI"],
      liveUrl: "https://practice-nine-gilt.vercel.app/",
      githubUrl: "https://github.com/munawarabdilaahi/practice"
    },
    {
      title: "Dhismo Homes",
      category: "PropTech & Data Visualization",
      role: "Frontend Developer",
      description: "A city real estate discovery hub featuring live OpenWeather integration, geolocation-assisted property listings, and interactive market analytics charts.",
      image: Dhismahomes,
      technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
      liveUrl: "https://dhisma-homes.vercel.app",
      githubUrl: "https://github.com/munawarabdilaahi/dhisma-homes"
    }
  ];

  const coreSkills = [
    { name: "React", icon: <SiReact size={32} className="text-[#61DAFB]" />, proficiency: "Advanced", focus: "Component Architecture & Hooks" },
    { name: "TypeScript", icon: <SiTypescript size={32} className="text-[#3178C6]" />, proficiency: "Proficient", focus: "Strict Typing & Generics" },
    { name: "JavaScript", icon: <SiJavascript size={32} className="text-[#F7DF1E]" />, proficiency: "Advanced", focus: "ES6+, Async Flows & DOM" },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={32} className="text-[#06B6D4]" />, proficiency: "Advanced", focus: "Design Systems & Dark Mode" },
    { name: "HTML5 / Semantics", icon: <SiHtml5 size={32} className="text-[#E34F26]" />, proficiency: "Advanced", focus: "WCAG Accessibility & SEO" }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discover & Plan",
      icon: <Compass className="text-primary" size={24} />,
      description: "Analyze user workflows, determine state architecture, and establish clear component hierarchies before writing code."
    },
    {
      number: "02",
      title: "Design & Prototype",
      icon: <Layers className="text-primary" size={24} />,
      description: "Translate product concepts into responsive layouts with shared design tokens, strong typography, and accessible color contrast."
    },
    {
      number: "03",
      title: "Build & Type Safety",
      icon: <Code2 className="text-primary" size={24} />,
      description: "Develop modular React components with strict TypeScript types, clean custom hooks, and scalable styling patterns."
    },
    {
      number: "04",
      title: "Audit & Deploy",
      icon: <Rocket className="text-primary" size={24} />,
      description: "Run Lighthouse performance checks, cross-device testing, and deploy automated production builds via Vercel."
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="lg:col-span-7 space-y-8 animate-slide-up">
                <div className="space-y-4">
                  {/* Status Eyebrow */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold tracking-wide text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                    <span>Available for Freelance &amp; Full-Time Roles</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                    <span className="text-foreground">Munawar </span>
                    <span className="text-primary">Abdullahi</span>
                  </h1>

                  <div className="text-lg sm:text-xl text-muted-foreground flex items-center gap-2">
                    <span>Specialized as</span>
                    <span className="text-foreground font-semibold">
                      <TypingEffect
                        texts={roles}
                        speed={90}
                        deleteSpeed={45}
                        delay={1800}
                      />
                    </span>
                  </div>
                </div>

                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  I build fast, accessible React and TypeScript interfaces that help growing teams turn complex ideas into clean, reliable digital products.
                </p>

                {/* Primary CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link to="/projects" className="btn-hero inline-flex items-center justify-center gap-2 text-center">
                    <span>View Selected Work</span>
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border rounded-xl text-foreground hover:bg-card hover:border-primary/50 transition-all duration-300 font-medium"
                  >
                    <Mail size={18} aria-hidden="true" />
                    <span>Start a Conversation</span>
                  </Link>
                </div>

                {/* Proof Badges Strip */}
                <div className="pt-4 border-t border-border/60 grid grid-cols-3 gap-4 max-w-lg">
                  <div>
                    <div className="text-2xl font-bold text-foreground">6+</div>
                    <div className="text-xs text-muted-foreground">Shipped Apps</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">1+ Yr</div>
                    <div className="text-xs text-muted-foreground">Production Work</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-400 flex items-center gap-1">
                      <ShieldCheck size={18} />
                      <span>WCAG</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Accessible UI</div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 items-center pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Profiles:</span>
                  <a
                    href="https://github.com/munawarabdilaahi"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="p-2.5 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground border border-border transition-all duration-200"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/munawar-c-laahi-335453333/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-2.5 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground border border-border transition-all duration-200"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="mailto:munawarclaahi@gmail.com"
                    aria-label="Send direct email"
                    className="p-2.5 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground border border-border transition-all duration-200"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>

              {/* Right Column - Profile Image */}
              <div className="lg:col-span-5 flex justify-center animate-float">
                <div className="relative">
                  <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2 border-primary/40 shadow-2xl bg-card">
                    <img
                      src={munawar}
                      alt="Munawar Abdullahi Hussein"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl bg-card/95 backdrop-blur-md border border-border shadow-lg flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-semibold text-foreground">React &amp; TypeScript</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How I Work / Process Section */}
        <section className="py-20 bg-muted/30 border-y border-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold uppercase tracking-wider text-primary">
                <Sparkles size={14} aria-hidden="true" />
                <span>Workflow &amp; Methods</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">How I Build Products</h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                A disciplined engineering approach designed to deliver predictable timelines, accessible experiences, and clean codebases.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="card-surface p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 relative group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold px-2 py-1 rounded bg-primary/10 text-primary">
                      {step.number}
                    </span>
                    <div className="p-2 rounded-lg bg-card text-foreground group-hover:text-primary transition-colors">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Preview */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                  Real-World Work
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Selected Case Studies</h2>
                <p className="text-muted-foreground text-sm max-w-xl">
                  Recent applications built with focus on responsiveness, interaction design, and clear outcomes.
                </p>
              </div>

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline group"
              >
                <span>View all 5 projects</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <article
                  key={project.title}
                  className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="relative overflow-hidden bg-muted/40 aspect-[16/10]">
                    <img
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-background/90 backdrop-blur-sm text-foreground border border-border">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                        {project.role}
                      </div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-4 pt-2 border-t border-border/60">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-xs bg-muted text-muted-foreground font-medium rounded border border-border/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3 pt-1">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-xs rounded-lg transition-all"
                        >
                          <ExternalLink size={14} aria-hidden="true" />
                          <span>Live Demo</span>
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 py-2 px-3 border border-border hover:border-primary/50 text-foreground hover:text-primary bg-card text-xs font-medium rounded-lg transition-all"
                          aria-label={`View ${project.title} source code`}
                        >
                          <Github size={14} aria-hidden="true" />
                          <span>Code</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Preview */}
        <section className="py-20 bg-muted/30 border-t border-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
              <div className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                Technical Foundation
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Technologies &amp; Proficiency</h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Core technologies used daily with evidence-based proficiency rather than arbitrary percentages.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {coreSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="card-surface p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 flex flex-col items-center text-center space-y-3 group"
                >
                  <div className="p-3 rounded-2xl bg-muted/60 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-base">{skill.name}</h3>
                    <div className="mt-1">
                      <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
                        {skill.proficiency}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {skill.focus}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/skills"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                <span>Explore full technical breakdown &amp; architecture patterns</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-background border-t border-border/60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold tracking-wide text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              <span>Typical Response Time: &lt; 24 Hours</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
              Let's Build Something Exceptional
            </h2>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Have an opening on your frontend team or a client project that needs high quality, accessible UI execution? Let's discuss your requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <Link
                to="/contact"
                className="btn-hero inline-flex items-center justify-center gap-2 px-8 py-4 text-base"
              >
                <Mail size={20} />
                <span>Start a Conversation</span>
              </Link>
              <a
                href="mailto:munawarclaahi@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-border rounded-xl text-foreground hover:bg-card hover:border-primary/50 transition-all text-sm font-medium"
              >
                <span>munawarclaahi@gmail.com</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;