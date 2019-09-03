import React from 'react';
import { storiesOf } from '@storybook/react';
import Hierarchy from '../../.storybook/hierarchyGroups';
import css from './Grid.module.css';
import { Grid, Column } from '.';

storiesOf(`${Hierarchy.LAYOUT}|Grid2`, module)
    .add('Fixed max width', () => (
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
    ))
    .add('Nested', () => (
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
    ));
