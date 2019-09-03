import React from 'react';
import marked from 'marked';
import { storiesOf } from '@storybook/react';
import readme from '../../README.md';
import 'github-markdown-css';
import './intro.css';

storiesOf('Docs|Introduction', module)
    .add(
        'Getting started',
        () => (
            <div className="markdown-body" style={{ padding: 15 }}>
                <div dangerouslySetInnerHTML={{ __html: marked(readme) }} />
            </div>
        ),
        { options: { showPanel: false } }
    )
    .add('Version', () => <div>{require('../../package.json').version}</div>);
