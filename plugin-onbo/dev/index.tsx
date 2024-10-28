import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { pluginOnboPlugin, PluginOnboPage } from '../src/plugin';

createDevApp()
  .registerPlugin(pluginOnboPlugin)
  .addPage({
    element: <PluginOnboPage />,
    title: 'Root Page',
    path: '/plugin-onbo',
  })
  .render();
