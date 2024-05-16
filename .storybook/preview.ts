import type { Preview } from '@storybook/react';
import pkg from '../package.json';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    repositoryUrl: `${pkg.repository.url}.git`,
  },
};

export default preview;
