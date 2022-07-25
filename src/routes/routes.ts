import { LazyExoticComponent, lazy } from "react";
import NoLazy from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Routes {
  to: string;
  path: string;
  name: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent ;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"));


export const routes: Routes[] = [
  {
    path:'/lazyload/*',
    to: '/lazyload/',
    Component: LazyLayout,
    name: 'Lazy-1'
  },
  {
    to: '/nolazy',
    path:'nolazy',
    Component: NoLazy,
    name: 'No Lazy'
  },
]