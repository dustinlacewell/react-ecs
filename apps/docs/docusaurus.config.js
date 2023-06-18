const path = require('path');

module.exports = {
    title: 'react-ecs',
    tagline: 'Entity Component System for React',
    url: 'https://react-ecs.ldlework.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'dustinlacewell', // Usually your GitHub org/user name.
    projectName: 'react-ecs', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'react-ecs',
            logo: {
                alt: 'react-ecs logo',
                src: 'img/black-transparent.gif',
                srcDark: 'img/white-transparent.gif',
            },
            items: [
                {
                    to: 'docs/',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'left',
                },
                {
                    to: 'api/core/',
                    activeBasePath: 'api',
                    label: 'API',
                    position: 'left',
                },
                { to: 'blog', label: 'Blog', position: 'left' },
                {
                    to: 'examples',
                    activeBasePath: 'examples',
                    label: 'Examples',
                    position: 'left',
                },
                {
                    href: 'https://github.com/dustinlacewell/react-ecs',
                    label: 'GitHub',
                    position: 'right',
                },
                {
                    href: 'https://discord.gg/RJqjqAnmJ8',
                    label: 'Discord',
                    position: 'right',
                },
            ],
        },
        footer: {
            // style: 'dark',
            // links: [
            //     {
            //         title: 'Docs',
            //         items: [
            //             {
            //                 label: 'Style Guide',
            //                 to: 'docs/',
            //             },
            //             {
            //                 label: 'Second Doc',
            //                 to: 'docs/doc2/',
            //             },
            //         ],
            //     },
            //     {
            //         title: 'Community',
            //         items: [
            //             {
            //                 label: 'Discord',
            //                 href: 'https://discord.gg/RJqjqAnmJ8',
            //             },
            //             {
            //                 label: 'Twitter',
            //                 href: 'https://twitter.com/docusaurus',
            //             },
            //             {
            //                 label: 'Stack Overflow',
            //                 href:
            //                     'https://stackoverflow.com/questions/tagged/react-ecs',
            //             },
            //         ],
            //     },
            //     {
            //         title: 'More',
            //         items: [
            //             {
            //                 label: 'Blog',
            //                 to: 'blog',
            //             },
            //             {
            //                 label: 'GitHub',
            //                 href: 'https://github.com/facebook/docusaurus',
            //             },
            //         ],
            //     },
            // ],
            copyright: `react-ecs is <a href="https://buymeacoffee.com/idle"><b>free software</a>.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/dustinlacewell/react-ecs/edit/master/apps/docs/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/dustinlacewell/react-ecs/edit/master/apps/docs/',
                },
                theme: {
                    customCss: require.resolve('./src/styles/site.scss'),
                },
            },
        ],
    ],
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'api',
                path: 'api',
                routeBasePath: 'api',
                sidebarPath: require.resolve('./apiSidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'examples',
                path: 'examples',
                routeBasePath: 'examples',
                sidebarPath: require.resolve('./exampleSidebars.js'),
            },
        ],
        'docusaurus-plugin-sass',
        [
            'docusaurus-plugin-module-alias',
            {
                alias: {
                    '@react-ecs/core': path.resolve(
                        __dirname,
                        '../../libs/core/src/index.ts'
                    ),
                    '@react-ecs/three': path.resolve(
                        __dirname,
                        '../../libs/three/src/index.ts'
                    ),
                    '@react-ecs/boids': path.resolve(
                        __dirname,
                        '../../libs/boids/src/index.ts'
                    ),
                },
            },
        ],
        [
            'docusaurus-plugin-typedoc',
            {
                id: 'core',
                entryPoints: ['libs/core/src/index.ts'],
                tsconfig: 'libs/core/tsconfig.lib.json',
                // categorizeByGroup: true,
                // plugin:['typedoc-plugin-no-inherit'],
                docsRoot: 'api',
                out: 'core',
                allReflectionsHaveOwnDocument: true,
                readme: 'none',
                sidebar: {
                    categoryLabel: '@react-ecs/core',
                },
                watch: true,
            },
        ],
        [
            'docusaurus-plugin-typedoc',
            {
                id: 'three',
                entryPoints: ['libs/three/src/index.ts'],
                tsconfig: 'libs/three/tsconfig.lib.json',
                // categorizeByGroup: true,
                // plugin:['typedoc-plugin-no-inherit'],
                docsRoot: 'api',
                out: 'three',
                allReflectionsHaveOwnDocument: true,
                readme: 'none',
                sidebar: {
                    categoryLabel: '@react-ecs/three',
                },
                watch: true,
            },
        ],
    ],
};
