import { useMemo, useState } from 'react';
import { projects, type Project, type ProjectCategory } from './projects';

type Filter = 'All' | ProjectCategory;

const filters: Filter[] = ['All', 'Frontend', 'Backend'];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path d="M4 12 12 4M5 4h7v7" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path d="M2.5 8h10M8.5 3.5 13 8l-4.5 4.5" />
    </svg>
  );
}

function ProjectArtwork({ project }: { project: Project }) {
  if (project.visual === 'todo') {
    return (
      <div className="artwork artwork--todo" aria-hidden="true">
        <div className="todo-window">
          <span className="window-dots"><i /><i /><i /></span>
          <span className="todo-title">today, in progress</span>
          <span className="todo-row"><i />Make something useful</span>
          <span className="todo-row"><i />Take a little break</span>
          <span className="todo-row todo-row--done"><i />Write it all down</span>
        </div>
        <span className="artwork-note">one thing at a time</span>
      </div>
    );
  }

  if (project.visual === 'dictionary') {
    return (
      <div className="artwork artwork--dictionary" aria-hidden="true">
        <span className="dictionary-spark">✳</span>
        <div className="dictionary-card">
          <span className="dictionary-label">WORD OF THE DAY</span>
          <span className="dictionary-word">serendipity<span>.</span></span>
          <span className="dictionary-phonetic">/ˌser.ənˈdɪp.ə.ti/ &nbsp; noun</span>
          <span className="dictionary-definition">finding something good without looking for it</span>
        </div>
        <span className="dictionary-orbit dictionary-orbit--one" />
        <span className="dictionary-orbit dictionary-orbit--two" />
      </div>
    );
  }

  return (
    <div className="artwork artwork--api" aria-hidden="true">
      <span className="api-stamp">BUILT TO<br />CONNECT</span>
      <div className="api-flow">
        <span className="api-node">request</span><i />
        <span className="api-node api-node--core">API</span><i />
        <span className="api-node">response</span>
      </div>
      <span className="api-caption">/v1/api/items</span>
      <span className="api-orbit" />
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card" style={{ animationDelay: `${index * 80}ms` }}>
      <ProjectArtwork project={project} />
      <div className="project-card__body">
        <div className="project-card__eyebrow">
          <span>{project.category} / 0{index + 1}</span>
          <span className="project-card__status">
            <i className={project.demo ? 'status-dot status-dot--live' : 'status-dot'} />
            {project.demo ? 'Live' : 'On GitHub'}
          </span>
        </div>
        <h2>{project.name}</h2>
        <p className="project-card__description">{project.description}</p>
        <ul className="technology-list" aria-label={`${project.name} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <div className="project-card__links">
          {project.demo && (
            <a className="project-link project-link--primary" href={project.demo} target="_blank" rel="noreferrer">
              Visit project <ArrowIcon diagonal />
            </a>
          )}
          <a className="project-link project-link--source" href={project.repository} target="_blank" rel="noreferrer">
            Source code <ArrowIcon diagonal />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function App() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All');
  const visibleProjects = useMemo(
    () => activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Camila Carlocchia, home">
          <span className="wordmark__mark">cc<span>.</span></span>
          <span className="wordmark__name">Camila Carlocchia</span>
        </a>
        <nav className="header-nav" aria-label="Main navigation">
          <a href="#work">Selected work</a>
          <a className="header-nav__linkedin" href="https://linkedin.com/in/ccarlocchia" target="_blank" rel="noreferrer">
            LinkedIn <ArrowIcon diagonal />
          </a>
          <a className="header-nav__github" href="https://github.com/ccarlocchia" target="_blank" rel="noreferrer">
            GitHub <ArrowIcon diagonal />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__copy">
            <p className="eyebrow"><span className="eyebrow__line" />A LITTLE CORNER OF THE INTERNET</p>
            <h1 id="hero-title">Things I’ve<br />made<span className="hero__period">.</span></h1>
            <p className="hero__description">
              A growing collection of useful ideas, curious experiments, and the code behind them.
            </p>
            <a className="hero__link" href="#work">Take a look around <ArrowIcon /></a>
          </div>
          <div className="hero-art" aria-hidden="true">
            <span className="hero-art__orbit hero-art__orbit--outer" />
            <span className="hero-art__orbit hero-art__orbit--inner" />
            <span className="hero-art__sun" />
            <span className="hero-art__spark hero-art__spark--one">✳</span>
            <span className="hero-art__spark hero-art__spark--two">✳</span>
            <span className="hero-art__note">made with<br />curiosity <span>↗</span></span>
            <span className="hero-art__caption">A WORK IN<br />PROGRESS</span>
          </div>
          <div className="hero__index"><span>01</span><span className="hero__index-line" /><span>03</span></div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow__line" />THE THINGS</p>
              <h2 id="work-title">Selected work<span>.</span></h2>
            </div>
            <p className="section-heading__aside">
              A few projects from my corner of GitHub.<br />Some you can try; all you can explore.
            </p>
          </div>

          <div className="project-toolbar">
            <div className="filter-list" role="group" aria-label="Filter projects">
              {filters.map((filter) => (
                <button
                  className={`filter-button${activeFilter === filter ? ' filter-button--active' : ''}`}
                  type="button"
                  key={filter}
                  aria-pressed={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter === 'All' ? 'Everything' : filter}
                  <span>{filter === 'All' ? projects.length : projects.filter((project) => project.category === filter).length}</span>
                </button>
              ))}
            </div>
            <span className="project-count">{String(visibleProjects.length).padStart(2, '0')} PROJECTS</span>
          </div>

          <div className="project-grid" aria-live="polite">
            {visibleProjects.map((project: Project, index) => (
              <ProjectCard project={project} index={index} key={project.name} />
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark wordmark--footer" href="#top" aria-label="Back to top">
          <span className="wordmark__mark">cc<span>.</span></span>
        </a>
        <p>Made with curiosity, somewhere in Argentina.</p>
        <a className="footer-link" href="https://github.com/ccarlocchia" target="_blank" rel="noreferrer">
          Find me on GitHub <ArrowIcon diagonal />
        </a>
      </footer>
    </div>
  );
}
