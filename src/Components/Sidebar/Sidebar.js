import React, { useContext, useRef } from 'react'
import SideBarOption from './SideBarOption';
import InboxIcon from '@material-ui/icons/Inbox';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import NearMeIcon from '@material-ui/icons/NearMe';
import CallMissedIcon from '@material-ui/icons/CallMissed';
import DeleteIcon from '@material-ui/icons/Delete';
import DraftsIcon from '@material-ui/icons/Drafts';
import ReportProblemRoundedIcon from '@material-ui/icons/ReportProblemRounded';
import './Siderbar.css'
import { Slide } from '@material-ui/core';
import sliderContext from '../../Context/sliderContext'
import DatePick from './DatePick'

function Sidebar() {

    const {navSlider, setNavSliderHoverState} = useContext(sliderContext)
    const sliderRef = useRef(null)

    const handleMouseHoverOn = () =>{
        if(!navSlider){
        setNavSliderHoverState(true)
        }
    }

    const handleMouseHoverOff = () =>{
        if(!navSlider){
        setNavSliderHoverState(false)
        }
    }

        return (
        <Slide in={true} direction={"right"}>
            <div ref={sliderRef} onMouseOver={handleMouseHoverOn} onMouseOut={handleMouseHoverOff} className={`sidebar ${!navSlider && "sidebar--hide"}`}>
                <div className="sidebar__category">
                    <SideBarOption Icon={InboxIcon} title="Inbox" number={5} selected={true}/>
                    <SideBarOption Icon={CallMissedIcon} title="Missed" number={8}/>
                    <SideBarOption Icon={BookmarkIcon} title="Bookmark" number={10}/>
                    <SideBarOption Icon={NearMeIcon} title="Sent" number={8}/>
                    <SideBarOption Icon={DeleteIcon} title="Trash" number={8}/>
                    <SideBarOption Icon={DraftsIcon} title="Drafts" number={8}/>
                    <SideBarOption Icon={ReportProblemRoundedIcon} title="Spam" number={8}/>
                </div>
                
                <DatePick/>
            </div>
        </Slide>
    )
}

export default Sidebar
