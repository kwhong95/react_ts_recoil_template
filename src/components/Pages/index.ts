import { createElement } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Home from './Home';
import About from './About';

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
  }
]

export { ErrorBoundary, pages }