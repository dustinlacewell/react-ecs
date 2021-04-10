module.exports = {
  stories: ['./stories/**/*.stories.{js,ts,tsx}'],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-storysource',
  ],
}