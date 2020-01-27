import React from 'react';

import Header from '.';

// Fails:
// export default { title: Group.Layout('Footer') };

// logs: string Layout|Footer:
// console.log(typeof Group.Layout('Footer'), Group.Layout('Footer'));

// Works:
// export default { title: Group.Layout('Footer') };
export default { title: 'Layout|Footer' };

export const withSomeContent = () => <Header>Content</Header>;

withSomeContent.story = {
    name: 'With some content',
};
