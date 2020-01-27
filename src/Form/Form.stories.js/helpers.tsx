import React from 'react';
import FormContext from '../context';

export const storeValuesInLocalStorage = ({ id, values }) => {
    localStorage.setItem(id, JSON.stringify(values));
};

export const restoreValuesFromLocalStorage = ({ id, initialValues, setValues }) => {
    const values = JSON.parse(localStorage.getItem(id)) || initialValues;
    setValues(values);
};

export const delay = (ms: number = 1000) =>
    new Promise((resolve) => setTimeout(() => resolve(), ms));

export const ShowValues = () => {
    const { values } = React.useContext(FormContext);
    return <pre>{JSON.stringify(values, null, 2)}</pre>;
};

export const ShowContext = () => {
    const context = React.useContext(FormContext);
    return <pre>{JSON.stringify(context, null, 2)}</pre>;
};
