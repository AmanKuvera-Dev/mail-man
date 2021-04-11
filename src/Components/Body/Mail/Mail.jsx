import { IconButton, Zoom, Tooltip } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import DeleteIcon from '@material-ui/icons/Delete'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import WorkIcon from '@material-ui/icons/Work'
import ReportProblemRoundedIcon from '@material-ui/icons/ReportProblemRounded';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import React, { useContext } from 'react'
import './Mail.css'
import { useHistory } from 'react-router-dom'
import sliderContext from '../../../Context/sliderContext'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

function Mail() {
    const history = useHistory()
    const {navSliderHoverState,navSlider} = useContext(sliderContext)
    return (
        
            <div className={`mail ${navSliderHoverState && !navSlider && "mail--activeSlider "} `}>
                <div className="mail__tool">
                    <div className="mail__toolsLeft">
                        <Tooltip title={"Back to Inbox"} placement="bottom">
                            <IconButton onClick={()=>{history.push('/')}}>
                                <ArrowBackIcon/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title={"Add to Bookmarks"} placement="bottom">
                            <IconButton>
                                <BookmarkIcon/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title={"Move to Trash"} placement="bottom">
                            <IconButton>
                                <DeleteIcon/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title={"Mark Mails from this User as WorkPlace"} placement="bottom">
                            <IconButton>
                                <WorkIcon/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title={"Report Mail as Spam"} placement="bottom">
                            <IconButton>
                                <ReportProblemRoundedIcon/>
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
                <Zoom in={true} direction={"left"} timeout={300}>
                    <div className="mail__body">
                        <div className="mail__bodyHeader">  
                            <div className="mail__bodyHeaderLeft">
                                <h2>Subject</h2>
                                <ArrowRightIcon className="mail__bodyHeaderLeftIcon"/>
                                <p>Title</p>
                            </div>
                            <div className="mail__bodyHeaderRight">
                            <BookmarkIcon className="mail__bodyHeaderIcon"/>  
                            </div>
                        </div>
                        <div className="mail__message">
                            This is a message
                        </div>
                    </div>
                </Zoom>
            </div>
        
    )
}

export default Mail
