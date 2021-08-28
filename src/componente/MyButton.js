import React from 'react';
import Button from '@material-ui/core/Button'

const MyButton = (props) => (
    <Button size='small' variant='contained' color='secondary' {...props}></Button>
);

export default MyButton;