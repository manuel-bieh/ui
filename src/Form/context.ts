import React from 'react';

const Context = React.createContext<any>(null);

export const Consumer = Context.Consumer;
export const Provider = Context.Provider;

export default Context;
