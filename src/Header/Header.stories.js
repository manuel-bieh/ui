import React from 'react';

import Header from '.';

export default { title: 'Layout|Header' };

export const withSomeContent = () => <Header>Content</Header>;

withSomeContent.story = {
    name: 'With some content',
};
