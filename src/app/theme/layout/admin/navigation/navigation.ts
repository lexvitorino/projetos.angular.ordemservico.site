import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'entities',
    title: 'Cadastros',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'users',
        title: 'Usuário',
        type: 'item',
        url: '/pages/entities/users',
        icon: 'feather icon-home',
        classes: 'nav-item'
      },
      {
        id: 'customers',
        title: 'Cliente',
        type: 'item',
        url: '/pages/entities/customers',
        icon: 'feather icon-home',
        classes: 'nav-item'
      },
    ],
  },
  {
    id: 'movements',
    title: 'Movimentos',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'serviceOrders',
        title: 'Ordem de Serviço',
        type: 'item',
        url: '/pages/entities/serviceOrders',
        icon: 'feather icon-home',
        classes: 'nav-item'
      },
    ],
  },
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
