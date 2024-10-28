import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const pluginOnboPlugin = createPlugin({
  id: 'plugin-onbo',
  routes: {
    root: rootRouteRef,
  },
});

export const PluginOnboPage = pluginOnboPlugin.provide(
  createRoutableExtension({
    name: 'PluginOnboPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
