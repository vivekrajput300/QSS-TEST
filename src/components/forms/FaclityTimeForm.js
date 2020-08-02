import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TimePicker from './TimerPicker';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

class FacilityTimes extends React.Component {
    constructor() {
        super();
        this.state = {
            facilities: [
                { name: 'Sun', checked: false, from: '10:30', to: '18:30' },
                { name: 'Mon', checked: false, from: '10:30', to: '18:30' },
                { name: 'Tue', checked: false, from: '10:30', to: '18:30' },
                { name: 'Wed', checked: false, from: '10:30', to: '18:30' },
                { name: 'Thr', checked: false, from: '10:30', to: '18:30' },
                { name: 'Fri', checked: false, from: '10:30', to: '18:30' },
                { name: 'Sat', checked: false, from: '10:30', to: '18:30' },
            ]
        };
    }

    render() {
        return (
            <div>
                <Dialog onClose={this.props.handleClose} aria-labelledby="customized-dialog-title" open={this.props.open}>
                    <DialogTitle id="customized-dialog-title" onClose={this.props.handleClose}>
                        Facility Times
                    </DialogTitle>
                    <DialogContent dividers>
                        <FormControl component="fieldset">
                            {
                                this.state.facilities.map((facilityData, index) => {
                                    return (
                                        <FormGroup aria-label="position" row key={index}>
                                            <FormControlLabel
                                                value={facilityData.checked}
                                                control={<Checkbox color="primary" />}
                                                label={facilityData.name}
                                                labelPlacement="end"
                                            />
                                            <TimePicker label={'From'} defaultValue={facilityData.from} id={'From' + index} />
                                            <TimePicker label={'To'} defaultValue={facilityData.to} id={'To' + index} />
                                            <Button variant="outlined" color="primary">
                                                Apply to All Checked
                                            </Button>
                                        </FormGroup>
                                    )
                                })
                            }
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" className="buttonRight" color="secondary" onClick={this.props.handleClose}>
                            Cancel
                        </Button>
                        <Button variant="contained" className="buttonRight padLeft_10" color="primary" onClick={this.props.handleSave}>
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default FacilityTimes;