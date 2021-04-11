import React, { useContext} from 'react'
import './SideBarOption.css'
import sliderContext from '../../Context/sliderContext'
import { Badge, Tooltip } from '@material-ui/core'

function SideBarOption({Icon, title, number,selected}) {

    const {navSlider,navSliderHoverState} = useContext(sliderContext)

    return (
        <Tooltip title={title} placement="right">
            <div className={`sidebarOption ${selected && "sidebarOption--active"} ${(selected && !navSliderHoverState && !navSlider) && "sidebarOption__minimize"}`}>
            
                <Badge className="sidebarOption__badge" color="secondary" badgeContent={number} invisible={!selected && !navSliderHoverState || navSlider || navSliderHoverState}>
                    <Icon className="sidebarOption__icon"/>
                </Badge>
                <h3 className={`showSlider ${!navSlider && "showSlider--close"} ${navSliderHoverState && "showSlider--hoverActive"}`}>{title}</h3>
                <p className={!navSliderHoverState && !navSlider && "sidebarOption__p"}>{number}</p>
            </div>
        </Tooltip>
    )
}

export default SideBarOption
