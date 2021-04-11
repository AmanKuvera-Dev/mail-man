import React from 'react'
import './EmailRow.css'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { Checkbox, IconButton, Slide } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function EmailRow({title,subject,description,time}) {

    const history = useHistory()
    return (
        <Slide in={true} direction={"up"} timeout={700}>
            <div className="emailRow" onClick={()=>history.push('/mail')}>
                <div className="emailRow__options">
                    <Checkbox />
                    <IconButton className="emailRow__optionsBookark"><BookmarkBorderIcon /></IconButton>
                </div>

                <h3 className="emailRow__title">
                    {title}
                </h3>
                
                <div className="emailRow__message">
                    <h4>
                        {subject} &nbsp;
                        <span className="emailRow__description">-&nbsp;{description}</span>
                    </h4>
                </div>
                

                <p className="emailRow__time">
                    {time}
                </p>

            </div>
        </Slide>
    )
}

export default EmailRow
