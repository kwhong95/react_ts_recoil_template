import { createElement } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Home from './Home';
import About from './About';
import Blog from './Blog';

interface IPages {
  title: string;
  path: string;
  element: any;
}

const pages: IPages[] = [
  {
    title: 'Home',
    path: '/',
    element: createElement(Home)
  },
  {
    title: 'About',
    path: '/about',
    element: createElement(About)
  },
  {
    title: 'Blog',
    path: '/blog',
    element: createElement(Blog)
  }
]

export { ErrorBoundary, pages }