import React, { useState } from 'react'
import './ComposeButton.css'
import CreateIcon from '@material-ui/icons/Create';
import { IconButton, Tooltip, Zoom } from '@material-ui/core';

function ComposeButton() {
    
    return (
        <Zoom in={true} timeout={500}>
            <div className="compose" >
                <Tooltip title="Compose Mail" placement="left">
                    <IconButton >
                        <CreateIcon/>
                    </IconButton>        
                </Tooltip>    
            </div>
        </Zoom>
    )
}

export default ComposeButton
