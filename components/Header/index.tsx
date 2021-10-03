import {Avatar, Button, IconButton, Paper} from '@material-ui/core';
import React, {FunctionComponent} from 'react';
import s from './Header.module.scss';

import SearchIcon from '@material-ui/icons/Search'
import MessageIcon from '@material-ui/icons/SmsOutlined';
import NotificationsIcon from '@material-ui/icons/NotificationsNoneRounded';
import MenuIcon from '@material-ui/icons/Menu';

interface OwnProps {
}

type Props = OwnProps;

export const Header: FunctionComponent<Props> = (props) => {

    return (
        <Paper classes={{root: s.header}} elevation={0}>
            <div className={s.leftPart}>
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <div className={s.logo}>
                    <img height={50} width={50}
                         src="logo.svg"
                         alt="LOGO"/>
                </div>
                <div className={s.searchForm}>
                    <SearchIcon/>
                    <input placeholder={'Поиск'} type="text"/>
                    <Button variant={'contained'}>
                        Новая запись
                    </Button>
                </div>
            </div>
            <div className={s.rightMenu}>
                <IconButton>
                    <MessageIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <Avatar alt="Bindy Baker" src="/static/images/avatar/3.jpg"/>
            </div>
        </Paper>
    );
};
