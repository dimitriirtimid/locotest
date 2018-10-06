import React from 'react'
import { ListItem, ListItemIcon, Icon } from '@material-ui/core';

const ForumItem = ({children, text}) => (
    <ListItem>
        <ListItemIcon>
            <Icon>star</Icon>
        </ListItemIcon>
        {text}
    </ListItem>
)

export default ForumItem