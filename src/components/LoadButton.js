import React from 'react'
import { Button } from '@material-ui/core';

const LoadButton = ({onLoadClick}) => (
    <Button variant="raised" color="primary" onClick={onLoadClick}>
      Load
    </Button>
)

export default LoadButton