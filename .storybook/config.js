import React from 'react';
import {
    configure,
    setAddon,
    addDecorator,
    addParameters,
} from '@storybook/react';
import './stories/intro';

import '../src/index.module.css';

addDecorator((storyFn) => (
    <div className="globalPadding" style={{ padding: 16 }}>
        {storyFn()}
    </div>
));

export const resetPadding = (storyFn) => (
    <React.Fragment>
        <style
            dangerouslySetInnerHTML={{
                __html: '.globalPadding { padding: 0 !important}',
            }}
        />
        {storyFn()}
    </React.Fragment>
);

addParameters({
    options: {
        name: 'ManuelBieh UI',
        url: 'https://www.github.com/manuel-bieh/ui',
        hierarchySeparator: /\//,
        hierarchyRootSeparator: /\|/,
    },
});

const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
