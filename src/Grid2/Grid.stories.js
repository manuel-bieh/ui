import React from 'react';
import css from './Grid.module.css';
import { Grid, Column } from '.';

export const fixedMaxWidth = () => (
    <Grid className={css.debug}>
        <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
            1<br />2<br />3
        </Column>
        <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
            2
        </Column>
        <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
            3
        </Column>
        <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
            4
        </Column>
        <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
            5
        </Column>
        <Column xs={12} sm={6} md={4} lg={3} xl={2} className={css.debug}>
            6
        </Column>
    </Grid>
);

fixedMaxWidth.story = {
    name: 'Fixed max width',
};

export const nested = () => (
    <Grid className={css.debug}>
        <Column xs={12} sm={6} md={4} lg={3} xl={4} className={css.debug}>
            1<br />2<br />3<br />
            1<br />2<br />3<br />
            1<br />2<br />3<br />
        </Column>
        <Column xs={12} sm={6} md={4} lg={3} xl={1} className={css.debug}>
            <Grid className={css.debug}>
                <Column xs={6} className={css.debug}>
                    1
                </Column>
                {/* <Column xs={4} className={css.debug}>
                        2
                    </Column> */}
            </Grid>
        </Column>
        <Column xs={12} sm={6} md={4} lg={3} xl={1} className={css.debug}>
            3
        </Column>
    </Grid>
);

nested.story = {
    name: 'Nested',
};
