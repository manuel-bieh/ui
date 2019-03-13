import React from 'react';
import marked from 'marked';
import { storiesOf } from '@storybook/react';
import readme from '../../README.md';
import 'github-markdown-css';
import './intro.css';

storiesOf('Docs|Introduction', module).add(
    'Getting started',
    () => (
        <div className="markdown-body">
            <div dangerouslySetInnerHTML={{ __html: marked(readme) }} />
        </div>
    ),
    { options: { showPanel: false } }
);
