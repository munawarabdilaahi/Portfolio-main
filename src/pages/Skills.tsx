import { Code2, Palette, Database, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';
import { SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiRedux, SiGit, SiFigma, SiVite } from 'react-icons/si';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

interface SkillItem {
  name: string;
  proficiency: 'Advanced' | 'Proficient' | 'Working Knowledge';
  patterns: string;
  evidence: string;
}

interface SkillCategory {
  title: string;
  description: string;
  icon: JSX.Element;
  skills: SkillItem[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Core Frontend Engineering",
      description: "Building fast, reactive, and type-safe client-side web architectures.",
      icon: <Code2 className="text-primary" size={28} />,
      skills: [
        {
          name: "React (v18+)",
          proficiency: "Advanced",
          patterns: "Custom hooks, compound components, code splitting, concurrent rendering",
          evidence: "Implemented across Som Travel, BizPro, and Dhismo Homes"
        },
        {
          name: "TypeScript",
          proficiency: "Proficient",
          patterns: "Strict typing, generics, interfaces, discriminated unions, utility types",
          evidence: "Type-safe architectures in full React codebases"
        },
        {
          name: "JavaScript (ES6+)",
          proficiency: "Advanced",
          patterns: "Async/await, closures, array methods, DOM APIs, event loop",
          evidence: "Interactive application logic and state workflows"
        },
        {
          name: "Tailwind CSS",
          proficiency: "Advanced",
          patterns: "Design tokens, responsive utility classes, custom animation config, dark theme",
          evidence: "Primary CSS system for all production portfolio projects"
        },
        {
          name: "HTML5 & Semantic Markup",
          proficiency: "Advanced",
          patterns: "Accessible landmarks, ARIA standards, SEO structure, keyboard navigation",
          evidence: "Full WCAG accessibility audit compliance across apps"
        }
      ]
    },
    {
      title: "State, Architecture & APIs",
      description: "Managing deterministic client state and seamless external API data layers.",
      icon: <Database className="text-primary" size={28} />,
      skills: [
        {
          name: "React Context & Custom State",
          proficiency: "Proficient",
          patterns: "Global theme, auth state, local persistence via localStorage",
          evidence: "Core application store for Som Travel and BizPro"
        },
        {
          name: "Redux Toolkit",
          proficiency: "Working Knowledge",
          patterns: "Slices, action creators, immutable state updates, middleware",
          evidence: "E-Commerce Store cart and catalog management"
        },
        {
          name: "REST API Integration",
          proficiency: "Proficient",
          patterns: "Async fetching, error boundary handling, loading states, payload parsing",
          evidence: "Integrated OpenWeather, Geolocation, and Spoonacular endpoints"
        },
        {
          name: "Client-Side Routing",
          proficiency: "Advanced",
          patterns: "React Router v6, nested layouts, protected routes, scroll restoration",
          evidence: "SPA navigation across all multi-page web applications"
        }
      ]
    },
    {
      title: "Tooling & Build Ecosystem",
      description: "Modern developer tooling for optimized compilation and version control.",
      icon: <Wrench className="text-primary" size={28} />,
      skills: [
        {
          name: "Git & GitHub",
          proficiency: "Proficient",
          patterns: "Branch management, semantic commits, PR reviews, merge conflict resolution",
          evidence: "Active daily version control on GitHub: munawarabdilaahi"
        },
        {
          name: "Vite & Tooling",
          proficiency: "Proficient",
          patterns: "Fast HMR, SWC compiler plugins, asset bundling, build optimization",
          evidence: "Zero-config development and production packaging setup"
        },
        {
          name: "Package Managers",
          proficiency: "Proficient",
          patterns: "npm, Bun, dependency resolution, lockfile synchronization",
          evidence: "Modular package setup across all applications"
        }
      ]
    },
    {
      title: "UI/UX & Product Design",
      description: "Bridging the gap between design prototypes and production code.",
      icon: <Palette className="text-primary" size={28} />,
      skills: [
        {
          name: "Figma to Code",
          proficiency: "Proficient",
          patterns: "Translating auto-layout, spacing tokens, typography scales into code",
          evidence: "Implemented pixel-accurate web applications from design files"
        },
        {
          name: "Responsive & Adaptive Design",
          proficiency: "Advanced",
          patterns: "Mobile-first layouts, breakpoint testing, fluid typography, touch targets",
          evidence: "Tested and verified across mobile, tablet, and desktop viewports"
        },
        {
          name: "Design Systems & Tokens",
          proficiency: "Proficient",
          patterns: "Reusable UI component primitives, color token palettes, atomic styling",
          evidence: "Shared design token architecture in index.css and Tailwind config"
        }
      ]
    }
  ];

  const technologies = [
    { name: "React", icon: <SiReact className="text-[#61DAFB]" size={32} /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" size={32} /> },
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" size={32} /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" size={32} /> },
    { name: "Redux", icon: <SiRedux className="text-[#764ABC]" size={32} /> },
    { name: "Git", icon: <SiGit className="text-[#F05032]" size={32} /> },
    { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" size={32} /> },
    { name: "Vite", icon: <SiVite className="text-[#646CFF]" size={32} /> }
  ];

  const getProficiencyBadge = (level: SkillItem['proficiency']) => {
    switch (level) {
      case 'Advanced':
        return (
          <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Advanced
          </span>
        );
      case 'Proficient':
        return (
          <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-primary/15 text-primary border border-primary/25">
            Proficient
          </span>
        );
      case 'Working Knowledge':
        return (
          <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-muted text-muted-foreground border border-border">
            Working Knowledge
          </span>
        );
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
              <Sparkles size={14} aria-hidden="true" />
              <span>Evidence-Based Technical Proficiency</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-primary">
                Skills & Technologies
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A structured breakdown of my technical stack, key implementation patterns, and real project evidence.
            </p>
          </div>

          {/* Tech Stack Icons */}
          <section className="mb-20" aria-labelledby="tech-stack-heading">
            <h2 id="tech-stack-heading" className="text-sm font-mono uppercase tracking-wider text-center text-muted-foreground mb-8">
              Core Technologies in Active Production
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 max-w-4xl mx-auto">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="card-surface p-4 rounded-xl text-center flex flex-col items-center justify-center gap-2 border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                    {tech.icon}
                  </div>
                  <div className="text-xs font-medium text-foreground">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Detailed Skill Categories */}
          <section className="space-y-10 mb-20" aria-labelledby="skill-categories-heading">
            <h2 id="skill-categories-heading" className="text-2xl sm:text-3xl font-bold">
              Capabilities & Practical Patterns
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <div
                  key={category.title}
                  className="card-surface p-6 sm:p-8 rounded-2xl border border-border hover:border-primary/40 transition-all duration-300 animate-slide-up flex flex-col justify-between"
                  style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">
                      {category.description}
                    </p>

                    <div className="space-y-4">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="p-4 rounded-xl bg-muted/40 border border-border/70 space-y-2 hover:bg-muted/70 transition-colors"
                        >
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <span className="font-semibold text-foreground text-sm flex items-center gap-2">
                              <CheckCircle2 size={16} className="text-primary" aria-hidden="true" />
                              {skill.name}
                            </span>
                            {getProficiencyBadge(skill.proficiency)}
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            <span className="font-medium text-foreground/80">Patterns: </span>
                            {skill.patterns}
                          </p>
                          <p className="text-xs text-primary/90 font-mono">
                            ↳ {skill.evidence}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Engineering Approach */}
          <section className="text-center space-y-8 animate-fade-in card-surface p-8 sm:p-12 rounded-2xl border border-border">
            <h2 className="text-2xl sm:text-3xl font-bold">Engineering Standards</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              My approach prioritizes maintainable component architecture, accessible UI landmarks, and high performance rather than just ticking feature checkboxes.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-4">
              <div className="p-4 rounded-xl bg-background border border-border/80 text-left space-y-2">
                <div className="text-2xl font-bold text-primary">6+</div>
                <div className="text-sm font-semibold text-foreground">Shipped Projects</div>
                <p className="text-xs text-muted-foreground">End-to-end applications deployed with responsive layouts and real user testing.</p>
              </div>

              <div className="p-4 rounded-xl bg-background border border-border/80 text-left space-y-2">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm font-semibold text-foreground">Type Safety & WCAG</div>
                <p className="text-xs text-muted-foreground">Strict TypeScript interfaces, accessible color contrast, and keyboard navigation.</p>
              </div>

              <div className="p-4 rounded-xl bg-background border border-border/80 text-left space-y-2">
                <div className="text-2xl font-bold text-primary">&lt;1s</div>
                <div className="text-sm font-semibold text-foreground">Fast Loading Goals</div>
                <p className="text-xs text-muted-foreground">Code splitting, modern image formats, and minimal bundle sizes via Vite.</p>
              </div>
            </div>

            <div className="pt-6">
              <Link to="/contact" className="btn-hero inline-flex items-center gap-2">
                Let's Build Together
              </Link>
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;
