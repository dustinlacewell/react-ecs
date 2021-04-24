const coreSidebar = require('./core-sidebar.js');
const threeSidebar = require('./three-sidebar.js');

module.exports = {
    sidebar: [
        {
            type: 'category',
            label: '@react-ecs/core',
            items: coreSidebar,
        },
        {
            type: 'category',
            label: '@react-ecs/three',
            items: threeSidebar,
        },
    ],
};
