export type ProjectCategory = 'Frontend' | 'Backend';

export interface Project {
  name: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  repository: string;
  demo?: string;
  visual: 'todo' | 'dictionary' | 'api';
  label: string;
}

export const projects: Project[] = [
  {
    name: 'To-do List',
    description:
      'A straightforward task-list app, built as a hands-on project with Svelte and TypeScript.',
    category: 'Frontend',
    technologies: ['Svelte', 'TypeScript', 'Vite'],
    repository: 'https://github.com/ccarlocchia/to-do-list',
    demo: 'https://ccarlocchia.github.io/to-do-list/',
    visual: 'todo',
    label: 'A little more organized',
  },
  {
    name: 'Dictionary',
    description:
      'Look up a word and explore its definitions with a React app powered by the Free Dictionary API.',
    category: 'Frontend',
    technologies: ['React', 'JavaScript', 'Material UI'],
    repository: 'https://github.com/ccarlocchia/dictionary',
    demo: 'https://ccarlocchia.github.io/dictionary/',
    visual: 'dictionary',
    label: 'Words, looked up',
  },
  {
    name: 'Items API',
    description:
      'A Go REST API that looks up product information from a local JSON catalog, organized into handler, service, and repository layers.',
    category: 'Backend',
    technologies: ['Go', 'Gin', 'REST API'],
    repository: 'https://github.com/ccarlocchia/ItemsAPI',
    visual: 'api',
    label: 'A small API, neatly layered',
  },
];
