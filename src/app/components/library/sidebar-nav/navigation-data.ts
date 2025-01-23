import { MenuItem } from "primeng/api/menuitem";

export const navData: MenuItem[] = [
  {
    label: 'Home',
    items: [
      {
        routerLink: '',
        icon: 'pi pi-home',
        label: 'Dashboard',
      },
    ],
  },
  {
    label: 'UI components',
    items: [
      {
        routerLink: '/uikit/button',
        icon: 'pi pi-mobile',
        label: 'Button',
      },
      {
        routerLink: '/uikit/chart',
        icon: 'pi pi-chart-bar',
        label: 'Chart',
      },
      {
        routerLink: '/uikit/file',
        icon: 'pi pi-file',
        label: 'File',
      },
      {
        routerLink: '/uikit/form-layout',
        icon: 'pi pi-id-card',
        label: 'Form Layout',
      },
      {
        routerLink: '/uikit/input',
        icon: 'pi pi-check-square',
        label: 'Input',
      },
      {
        routerLink: '/uikit/list',
        icon: 'pi pi-list',
        label: 'List',
      },
      {
        routerLink: '/uikit/media',
        icon: 'pi pi-image',
        label: 'Media',
      },
      {
        routerLink: '/uikit/menu',
        icon: 'pi pi-bars',
        label: 'Menu',
      },
      {
        routerLink: '/uikit/message',
        icon: 'pi pi-comment',
        label: 'Message',
      },
      {
        routerLink: '/uikit/misc',
        icon: 'pi pi-circle',
        label: 'Misc',
      },
      {
        routerLink: '/uikit/overlay',
        icon: 'pi pi-clone',
        label: 'Overlay',
      },
      {
        routerLink: '/uikit/panel',
        icon: 'pi pi-tablet',
        label: 'Panel',
      },
      {
        routerLink: '/uikit/table',
        icon: 'pi pi-table',
        label: 'Table',
      },
      {
        routerLink: '/uikit/timeline',
        icon: 'pi pi-calendar',
        label: 'Timeline',
      },
      {
        routerLink: '/uikit/tree',
        icon: 'pi pi-share-alt',
        label: 'Tree',
      },
    ],
  },
  {
    label: 'Pages',
    items: [
      {
        routerLink: 'landing',
        icon: 'pi pi-globe',
        label: 'Landing',
      },
      {
        routerLink: 'auth',
        icon: 'pi pi-user',
        label: 'Auth',
        items: [
          {
            routerLink: 'auth/login',
            icon: 'pi pi-sign-in',
            label: 'Login',
          },
          {
            routerLink: 'auth/error',
            icon: 'pi pi-times-circle',
            label: 'Error',
          },
          {
            routerLink: 'auth/access-denied',
            icon: 'pi pi-lock',
            label: 'Access Denied',
          }
        ]
      },
      {
        routerLink: 'crud',
        icon: 'pi pi-pencil',
        label: 'Crud',
      },
      {
        routerLink: 'notfound',
        icon: 'pi pi-exclamation-circle',
        label: 'Not Found',
      },
      {
        routerLink: 'empty',
        icon: 'pi pi-circle',
        label: 'Empty',
      },
    ]
  }
];
