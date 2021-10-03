import {Paper, Typography} from '@material-ui/core';
import React, {FunctionComponent} from 'react';
import s from './Post.module.scss'
import Image from 'next/image'

interface OwnProps {
}

type Props = OwnProps;

export const Post: FunctionComponent<Props> = (props) => {

    return (
        <Paper className={s.post} elevation={0}>
            <Typography variant={'h5'} className={s.title}>
                В Швейцарии создали самую мощную зарядную станцию — она полностью заряжает любой электромобиль за 15 минут
            </Typography>
            <Typography className={s.text}>
                Также она способна заряжать четыре электромобиля одновременно.
            </Typography>
            <Image
                src={'https://leonardo.osnova.io/bc0f05ed-3501-50b3-92c2-46c72aec7081/-/preview/1300/-/format/webp/'}
                width={640}
                height={342}
            />
        </Paper>
    );
};


