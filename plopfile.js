const path = require('path');
const prettier = require('prettier');

const srcFolder = path.join(__dirname, 'src');

module.exports = (plop) => {
    const prettierConfig = prettier.resolveConfig.sync(__dirname);
    plop.load('plop-prettier', prettierConfig);

    plop.setGenerator('Component', {
        description: 'Create a new React component',
        prompts: [
            {
                type: 'prompt',
                name: 'componentName',
                message: 'Name of your component:',
            },
            {
                type: 'confirm',
                name: 'addPlaceholderStory',
                message: 'Do you want to create a placeholder story?',
                default: true,
            },
            {
                type: 'confirm',
                name: 'addCSSModule',
                message: 'Will you need CSS in your component?',
                default: true,
            },
        ],
        actions: (answers) => {
            const actions = [
                {
                    type: 'pretty-add',
                    path: `${srcFolder}/{{properCase componentName}}/{{properCase componentName}}.tsx`,
                    templateFile: './config/plop/component/component.js.plop',
                },
                {
                    type: 'pretty-add',
                    path: `${srcFolder}/{{properCase componentName}}/{{properCase componentName}}.test.tsx`,
                    templateFile:
                        './config/plop/component/component.test.js.plop',
                },
            ];

            if (answers.addPlaceholderStory) {
                actions.push({
                    type: 'pretty-add',
                    path: `${srcFolder}/{{properCase componentName}}/index.ts`,
                    templateFile:
                        './config/plop/component/index.connected.js.plop',
                });
            } else {
                actions.push({
                    type: 'pretty-add',
                    path: `${srcFolder}/{{properCase componentName}}/index.ts`,
                    templateFile:
                        './config/plop/component/index.unconnected.js.plop',
                });
            }

            return actions;
        },
    });
};
