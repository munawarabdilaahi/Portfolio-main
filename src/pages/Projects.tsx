import { ExternalLink, Github, Eye } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import traival from '../assets/traival.png';
import Bizpro from '../assets/Bizpro.png';
import Dhismahomes from '../assets/Dhismahomes.png';
import flowPilot from '../assets/Screenshot 2025-09-22 203541.png';
import ecommerce from '../assets/Screenshot 2025-09-23 210720.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Som Travel",
      description: "A travel platform for exploring tourist destinations and booking trips across Somalia. Features a clean UI with search functionality, destination categories, and responsive design for seamless browsing on any device.",
      image: traival,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Context API", "Local Storage"],
      githubUrl: "https://github.com/munawarabdilaahi/Somalia-Travel",
      liveUrl: "https://somalia-travel-ejtd.vercel.app/",
      featured: true
    },
    {
      id: 2,
      title: "BizPro",
      description: "A modern business solution platform offering consulting, creative design, and digital marketing services. Built with drag-and-drop functionality and local storage persistence for an interactive user experience.",
      image: Bizpro,
      technologies: ["React", "TypeScript", "Drag & Drop API", "Local Storage", "Chakra UI"],
      githubUrl: "https://github.com/munawarabdilaahi/practice",
      liveUrl: "https://practice-nine-gilt.vercel.app/",
      featured: true
    },
    {
      id: 3,
      title: "Dhismo Homes",
      description: "A real estate platform featuring weather integration via OpenWeather API, geolocation-based property listings, and data visualization with Chart.js for market insights.",
      image: Dhismahomes,
      technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
      githubUrl: "https://github.com/munawarabdilaahi/dhisma-homes",
      liveUrl: "https://dhisma-homes.vercel.app",
      featured: false
    },
    {
      id: 4,
      title: "FlowPilot",
      description: "A workflow automation tool for designing no-code workflows that route tasks, send alerts, and streamline business processes.",
      image: flowPilot,
      technologies: ["HTML/CSS", "JavaScript"],
      githubUrl: "https://github.com/munawarabdilaahi/FlowPilot-project.",
      liveUrl: "https://flow-pilot-project-ydqf.vercel.app",
      featured: false
    },
    {
      id: 5,
      title: "E-Commerce Store",
      description: "A curated e-commerce platform featuring product search via Spoonacular API, shopping cart with Redux state management, and a polished shopping experience with styled components.",
      image: ecommerce,
      technologies: ["React", "Spoonacular API", "Redux", "Styled Components"],
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
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                My Projects
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that showcase my skills and passion for creating exceptional web experiences
            </p>
          </div>

          {/* Featured Projects */}
          <section className="mb-20" aria-labelledby="featured-heading">
            <h2 id="featured-heading" className="text-3xl font-bold mb-8 animate-slide-up">Featured Projects</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <article
                  key={project.id}
                  className="card-gradient rounded-2xl overflow-hidden group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        <Github size={18} aria-hidden="true" />
                        Code
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-glow text-primary-foreground rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink size={18} aria-hidden="true" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Other Projects */}
          <section aria-labelledby="other-heading">
            <h2 id="other-heading" className="text-3xl font-bold mb-8 animate-slide-up">Other Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <article
                  key={project.id}
                  className="card-gradient rounded-xl overflow-hidden group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-4 space-y-3">
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs text-muted-foreground">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1 text-sm bg-accent hover:bg-primary hover:text-primary-foreground rounded transition-all duration-300"
                      >
                        <Github size={14} aria-hidden="true" />
                        Code
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1 text-sm bg-primary hover:bg-primary-glow text-primary-foreground rounded transition-all duration-300"
                      >
                        <Eye size={14} aria-hidden="true" />
                        Demo
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center mt-20 space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold">Like What You See?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm always working on new projects and exploring innovative ideas.
              Let's collaborate on your next project!
            </p>
            <a href="/contact" className="btn-hero inline-flex items-center gap-2">
              Start a Project
            </a>
          </section>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
