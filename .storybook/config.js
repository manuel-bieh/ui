import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
// import { withInfo } from '@storybook/addon-info';
import JSXAddon from 'storybook-addon-jsx';
import './intro';

setAddon(JSXAddon);

// addDecorator(withInfo);

// Add some padding to our stories
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

setOptions({
    name: 'ManuelBieh UI',
    url: 'https://www.manuelbieh.com',
    hierarchySeparator: /\//,
    hierarchyRootSeparator: /\|/,
});

const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
