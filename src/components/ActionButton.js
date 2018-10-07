import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import StepIcon from '@material-ui/core/StepIcon';

const styles = theme => ({
  button: {
    justifyContent: 'left',
    margin: theme.spacing.unit,
    width: '300px'
  },
  text: {
    justifyContent: "center",
    flex: '100%'
  },
});

function ActionButton(props) {
  const { classes, number, text,  onClick } = props;
  return (
      <Button variant="raised" color="primary" aria-label="Edit" className={classes.button} onClick={() => onClick(number)}>
        <StepIcon icon={number}></StepIcon>
        <span className={classes.text}>{text}</span>
      </Button>
  );
}

ActionButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActionButton);
