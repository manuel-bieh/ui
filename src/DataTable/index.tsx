import * as React from 'react';
import css from './DataTable.module.css';

type DataTableItem = [any, any];

type PropsT = {
    data: DataTableItem[];
    columnClassNames?: [string, string];
};

const DataTable = ({ data, columnClassNames }: PropsT) => (
    <table className={css.wrapper}>
        <tbody>
            {data.map((row, i) => (
                <tr key={i}>
                    <td className={(columnClassNames || [])[0]}>{row[0]}</td>
                    <td className={(columnClassNames || [])[1]}>{row[1]}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default DataTable;
