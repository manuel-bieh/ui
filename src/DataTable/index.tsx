import * as React from 'react';
import classNames from 'classnames';
import css from './DataTable.module.css';

type DataTableItem = [any, any];

type PropsT = {
    className?: string;
    data: DataTableItem[];
    columnClassNames?: [string?, string?];
};

const DataTable = ({ className, columnClassNames = [], data }: PropsT) => (
    <table className={classNames(css.wrapper, className)}>
        <tbody>
            {data.map((row, i) => (
                <tr key={i}>
                    <td className={columnClassNames[0]}>{row[0]}</td>
                    <td className={columnClassNames[1]}>{row[1]}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default DataTable;
