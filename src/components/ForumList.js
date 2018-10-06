import React from 'react'
import { List } from '@material-ui/core';
import ForumItem from './ForumItem'

const ForumList = ({items}) => (
    <List>
        {items.map(item => <ForumItem {...item}>mijn item</ForumItem>)}
    </List>

)

export default ForumList