import React, { useContext } from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import {IconButton, Avatar, Tooltip} from '@material-ui/core'
import logo from '../../images/logo.svg'
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import SettingsIcon from "@material-ui/icons/Settings"
import sliderContext from '../../Context/sliderContext'

function Header() {
    const {navSlider, setNavSlider} = useContext(sliderContext)

    const handleSlider = () =>{
        (navSlider) ? setNavSlider(false) : setNavSlider(true) 
    }

    return (
        <div className="header">
            <div className="header__left">
                <Tooltip title={"Categories Menu"} placement="bottom-end">
                    <IconButton onClick={handleSlider}>
                        <MenuIcon />
                    </IconButton>
                </Tooltip>
                <img src={logo} alt="Mailman Logo" className="img-fluid"/>
            </div>

            <div className="header__middle">
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <input placeholder="Search Inbox" type="text"/>
                <IconButton>
                    <ArrowDropDownIcon/>
                </IconButton>
            </div>

            <div className="header__right">
                <Tooltip title={"Utilities"} placement="bottom-start">
                    <IconButton>
                        <AppsIcon/>
                    </IconButton>
                </Tooltip>
                
                <Tooltip title={"Settings"} placement="bottom-start">
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </Tooltip>
                
                <Tooltip title={"My Account"} placement="bottom-start">
                    <IconButton>
                        <Avatar className="header__rightAvatar"/>
                    </IconButton>
                </Tooltip>

            </div>
            
        </div>
    )
}

export default Header
