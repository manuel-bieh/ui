import React from 'react';

import Header from '.';

console.log(Group.Components('Footer'));

// export default { title: Group.Components('Footer') };
export default { title: 'Layout|Footer' };

export const withSomeContent = () => <Header>Content</Header>;

withSomeContent.story = {
    name: 'With some content',
};
