import { ExternalLink, Github, Eye, Sparkles, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import traival from '../assets/traival.png';
import Bizpro from '../assets/Bizpro.png';
import Dhismahomes from '../assets/Dhismahomes.png';
import flowPilot from '../assets/Screenshot 2025-09-22 203541.png';
import ecommerce from '../assets/Screenshot 2025-09-23 210720.png';

interface Project {
  id: number;
  title: string;
  category: string;
  role: string;
  description: string;
  outcome?: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Som Travel",
      category: "Tourism & Booking Platform",
      role: "Lead Frontend Developer",
      description: "A travel discovery and booking platform showcasing destination packages across Somalia with intuitive search, category filters, and an accessible mobile-first interface.",
      outcome: "Delivered interactive multi-destination search and state management using React Context API.",
      image: traival,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Context API", "Local Storage"],
      githubUrl: "https://github.com/munawarabdilaahi/Somalia-Travel",
      liveUrl: "https://somalia-travel-ejtd.vercel.app/",
      featured: true
    },
    {
      id: 2,
      title: "BizPro",
      category: "Business Solutions SaaS",
      role: "Frontend Developer & UI Designer",
      description: "An all-in-one business growth platform for consulting, creative services, and marketing strategy with drag-and-drop workspace capabilities and persistent client-side storage.",
      outcome: "Designed interactive drag-and-drop board with persistent localStorage state.",
      image: Bizpro,
      technologies: ["React", "TypeScript", "Drag & Drop API", "Local Storage", "Chakra UI"],
      githubUrl: "https://github.com/munawarabdilaahi/practice",
      liveUrl: "https://practice-nine-gilt.vercel.app/",
      featured: true
    },
    {
      id: 3,
      title: "Dhismo Homes",
      category: "PropTech & Data Visuals",
      role: "Frontend Developer",
      description: "A modern real estate application featuring live weather conditions via OpenWeather API, geolocation-assisted listings, and visual price analytics with Chart.js.",
      outcome: "Integrated live weather and geolocation APIs with responsive Chart.js data visualizations.",
      image: Dhismahomes,
      technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation", "Tailwind CSS"],
      githubUrl: "https://github.com/munawarabdilaahi/dhisma-homes",
      liveUrl: "https://dhisma-homes.vercel.app",
      featured: true
    },
    {
      id: 4,
      title: "FlowPilot",
      category: "Automation & Workflows",
      role: "Frontend Developer",
      description: "A no-code workflow automation interface allowing users to visually structure task routing, send notifications, and monitor operational pipelines.",
      outcome: "Built accessible interactive UI for rapid workflow stage construction.",
      image: flowPilot,
      technologies: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation"],
      githubUrl: "https://github.com/munawarabdilaahi/FlowPilot-project",
      liveUrl: "https://flow-pilot-project-ydqf.vercel.app",
      featured: false
    },
    {
      id: 5,
      title: "E-Commerce Store",
      category: "Retail & Culinary Products",
      role: "Frontend Developer",
      description: "A modern online shopping experience featuring dynamic recipe & ingredient catalog search powered by Spoonacular API, Redux cart management, and custom styled components.",
      outcome: "Implemented full Redux state cycle for cart management and external API catalog search.",
      image: ecommerce,
      technologies: ["React", "Redux Toolkit", "Spoonacular API", "Styled Components"],
      githubUrl: "https://github.com/munawarabdilaahi/e-commerce",
      liveUrl: "https://e-commerce-pi-wheat-55.vercel.app/",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
              <Sparkles size={14} aria-hidden="true" />
              <span>Selected Work & Case Studies</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-primary">
                Featured Projects
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real-world web applications built with a focus on clean architecture, accessible interfaces, and measurable outcomes.
            </p>
          </div>

          {/* Featured Projects */}
          <section className="mb-20" aria-labelledby="featured-heading">
            <div className="flex items-center justify-between mb-8">
              <h2 id="featured-heading" className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
                <Layers className="text-primary" size={26} aria-hidden="true" />
                Case Studies
              </h2>
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-mono">
                {featuredProjects.length} Shipped Systems
              </span>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <article
                  key={project.id}
                  className="card-surface rounded-2xl overflow-hidden group flex flex-col border border-border hover:border-primary/50 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden bg-muted/40 aspect-[16/10]">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
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
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                      {project.outcome && (
                        <div className="p-3 rounded-lg bg-primary/5 border border-primary/10 text-xs text-foreground/90">
                          <span className="font-semibold text-primary">Outcome: </span>
                          {project.outcome}
                        </div>
                      )}
                    </div>

                    <div className="space-y-4 pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs bg-muted text-muted-foreground font-medium rounded-md border border-border/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3 pt-2 border-t border-border/60">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm rounded-lg transition-all duration-200"
                        >
                          <ExternalLink size={16} aria-hidden="true" />
                          <span>Live Demo</span>
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-border hover:border-primary/50 text-foreground hover:text-primary bg-card text-sm font-medium rounded-lg transition-all duration-200"
                          aria-label={`View ${project.title} source code on GitHub`}
                        >
                          <Github size={16} aria-hidden="true" />
                          <span>Code</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Other Projects */}
          <section aria-labelledby="other-heading">
            <h2 id="other-heading" className="text-2xl font-bold mb-6">Additional Implementations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <article
                  key={project.id}
                  className="card-surface rounded-xl overflow-hidden group flex flex-col sm:flex-row border border-border hover:border-primary/50 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="sm:w-48 h-40 sm:h-auto relative overflow-hidden bg-muted/40 flex-shrink-0">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-mono uppercase tracking-wider text-primary">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded border border-border/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3 pt-1">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                        >
                          <Eye size={14} aria-hidden="true" />
                          <span>View Demo</span>
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground"
                        >
                          <Github size={14} aria-hidden="true" />
                          <span>Source</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center mt-20 space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold">Have a project in mind?</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Whether you need a dedicated frontend developer or a complete web application built from scratch, let's talk.
            </p>
            <Link to="/contact" className="btn-hero inline-flex items-center gap-2">
              Start a Conversation
            </Link>
          </section>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
