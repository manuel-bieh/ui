import React from 'react';

type Labels = {
    since: string;
};

export const workDataToDataTable = (items: any[], labels: Labels) =>
    items.reduce((rows, item) => {
        const { company, location, position, startDate, endDate } = item;
        const start = endDate ? startDate.substring(0, 7) : labels.since;
        const end = endDate ? endDate.substring(0, 7) : startDate.substring(0, 7);
        const sep = endDate ? '–' : '';
        rows.push([
            <>
                {start}
                {sep}
                <br />
                {end}
            </>,
            <>
                <strong>{position}</strong>
                <br />
                {company}, {location}
            </>,
        ]);
        return rows;
    }, []);

export const educationDataToDataTable = (items: any[], labels: Labels) =>
    items.reduce((rows, item) => {
        const { institution, studyType, startDate, endDate } = item;
        const start = endDate ? startDate.substring(0, 7) : labels.since;
        const end = endDate ? endDate.substring(0, 7) : startDate.substring(0, 7);
        const sep = endDate ? '–' : '';
        rows.push([
            <>
                {start}
                {sep}
                <br />
                {end}
            </>,
            <>
                <strong>{studyType}</strong>
                <br />
                {institution}
            </>,
        ]);
        return rows;
    }, []);
