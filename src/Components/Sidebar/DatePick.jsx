import React, { useContext } from 'react'
import { Badge, Button, Slide } from '@material-ui/core';
import sliderContext from '../../Context/sliderContext'
import FiberNewIcon from '@material-ui/icons/FiberNew';

function DatePick() {
    const {navSlider, navSliderHoverState} = useContext(sliderContext)

    return (
        <Slide in={true} direction={"right"}>
        <div className={`sidebar__footer ${!navSlider && !navSliderHoverState && "sidebar__footer--hide "}`}>
        <Badge badgeContent={<FiberNewIcon className="sidebar__releaseIcon" fontSize="large"/>} className="sidebar__releaseBadge">

            <div className="sidebar__DateCover">

                <label for="from">From : </label>
                <div className="sidebar__filter">
                    <input type="date" name="from"  placeholder="from" className="sidebar__Date"/>
                </div><br/>

                <label for="from">To : </label>
                <div className="sidebar__filter">
                    <input type="date" name="from"  placeholder="from" className="sidebar__Date"/>
                </div>

                <Button variant="contained" color="primary" className="applyButton">Apply</Button> 
            </div>
        </Badge>
    
        </div>
        </Slide>
    )
}

export default DatePick
