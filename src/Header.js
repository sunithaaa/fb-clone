import React from 'react'
import "./Header.css"
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import FlagIcon from '@material-ui/icons/Flag';
import  SubscriptionsOutlined  from '@material-ui/icons/SubscriptionsOutlined';
import StoreFrontOutlined from "@material-ui/icons/StorefrontOutlined"
import SupervisedUserCircle from "@material-ui/icons/SupervisedUserCircle"
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add"
import ForumIcon from "@material-ui/icons/Forum"
import NotificationsActive from "@material-ui/icons/NotificationsActive"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="" />
                <div className="header__input">
                    <SearchIcon/>
                    <input type="text" placeholder="Search Facebook"/>
                </div>
            </div>

            <div className="header__middle">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SubscriptionsOutlined fontSize="large" />
                </div>
                <div className="header__option">
                    <StoreFrontOutlined fontSize="large" />
                </div>
                <div className="header__option">
                    <SupervisedUserCircle fontSize="large" />
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar/>
                    <h4>suni</h4>
                </div>
                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsActive/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default Header
