// @flow
import * as React from 'react';
import css from './DataTable.module.css';

type DataTableItem = [React.Element | string, React.Element | string];

type PropsT = {
    data: DataTableItem[],
};

const DataTable = ({ data }: PropsT) => (
    <table className={css.wrapper}>
        <tbody>
            {data.map((row, i) => (
                <tr key={i}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default DataTable;
