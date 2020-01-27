import React from 'react';

export const addPadding = (storyFn) => (
    <div className="globalPadding" style={{ padding: 16 }}>
        {storyFn()}
    </div>
);
