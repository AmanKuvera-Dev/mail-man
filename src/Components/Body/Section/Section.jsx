import { Tooltip } from '@material-ui/core'
import React from 'react'
import './Section.css'

function Section({Icon, title, color, selected, description}) {
    return (
        <Tooltip title={description} placement="top-end">
            <div className={`section ${selected && "section--selected"}`}
                style={{
                    borderBottom: `3px solid ${color}`,
                    color: `${selected && color}`,
                }}>
                <Icon/>
                <h4>{title}</h4>
            </div>
        </Tooltip>
    )
}

export default Section
