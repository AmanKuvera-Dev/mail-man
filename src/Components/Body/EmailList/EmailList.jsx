import { Checkbox, IconButton, Tooltip } from '@material-ui/core'
import React, { useContext } from 'react'
import './EmailList.css'
import ArrowDropDown from "@material-ui/icons/ArrowDropDown"
import RefreshIcon from '@material-ui/icons/Refresh';
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import InboxIcon from "@material-ui/icons/Inbox"
import WorkIcon from '@material-ui/icons/Work';
import Section from "../Section/Section"
import EmailRow from './EmailRow';
import sliderContext from '../../../Context/sliderContext'


function EmailList() {
    const {navSliderHoverState,navSlider} = useContext(sliderContext)

    return (
        <div className={`emailList ${navSliderHoverState && !navSlider && "emailList--activeSlider "} `}>
            <div className="emailList__settings">
                <div className="emailList__settingLeft">
                    <Checkbox />
                    <IconButton className="emailList__settingLeftDropDown"><ArrowDropDown/></IconButton>
                    <Tooltip title={"Refresh Mails"} placement="bottom-start">
                        <IconButton><RefreshIcon/></IconButton>
                    </Tooltip>
                </div>
                <div className="emailList__settingRight">
                    <Tooltip title={"On-Screen Keyboard"} placement="bottom-end">
                        <IconButton><KeyboardHideIcon/></IconButton>
                    </Tooltip>
                </div>
            </div>

            <div className="emailList__sections">
                <Section Icon={InboxIcon} title="Primary" color="blue" description={"All the mails that you've ever received"} selected/>
                <Section Icon={WorkIcon} title="Workplace" color="red" description={"Mails from User that you've marked as workplace"}/>
            </div>

            <div className="emailList__list">
                <EmailRow title="The Mail Man" subject="Welcome to the Community" description="There are various features in Mail Man that some of the E-Mailing service providers dont include. Check them out now!" time="4am"/>
                <EmailRow title="PAPA REACT.com" subject="Meeting Schedueled" description="This is to Infrom you that ameeting has been scheduled for 10AM (GMT) on 21 January 2020. The Link is attached below." time="4am"/>
            </div>
        </div>
    )
}

export default EmailList
