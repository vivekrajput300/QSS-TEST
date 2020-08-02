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
    render() {
        return (
            <div>
                <Dialog onClose={this.props.handleClose} aria-labelledby="customized-dialog-title" open={this.props.open}>
                    <DialogTitle id="customized-dialog-title" onClose={this.props.handleClose}>
                        Facility Times
                    </DialogTitle>
                    <DialogContent dividers>
                        <FormControl component="fieldset">
                            <FormGroup aria-label="position" row>
                                <FormControlLabel
                                    value="Sun"
                                    control={<Checkbox color="primary" />}
                                    label="Sun"
                                    labelPlacement="end"
                                />
                                <TimePicker label={'From'} defaultValue={'10:30'} />
                                <TimePicker label={'To'} defaultValue={'18:30'} />
                                <Button variant="outlined" color="primary">
                                    Apply to All Checked
                                </Button>
                            </FormGroup>
                            <FormGroup aria-label="position" row>
                                <FormControlLabel
                                    value="Mon"
                                    control={<Checkbox color="primary" />}
                                    label="Mon"
                                    labelPlacement="end"
                                />
                                <TimePicker label={'From'} defaultValue={'10:30'} />
                                <TimePicker label={'To'} defaultValue={'18:30'} />
                                <Button variant="outlined" color="primary">
                                    Apply to All Checked
                                </Button>
                            </FormGroup>
                            <FormGroup aria-label="position" row>
                                <FormControlLabel
                                    value="Tue"
                                    control={<Checkbox color="primary" />}
                                    label="Tue"
                                    labelPlacement="end"
                                />
                                <TimePicker label={'From'} defaultValue={'10:30'} />
                                <TimePicker label={'To'} defaultValue={'18:30'} />
                                <Button variant="outlined" color="primary">
                                    Apply to All Checked
                                </Button>
                            </FormGroup>
                            <FormGroup aria-label="position" row>
                                <FormControlLabel
                                    value="Wed"
                                    control={<Checkbox color="primary" />}
                                    label="Wed"
                                    labelPlacement="end"
                                />
                                <TimePicker label={'From'} defaultValue={'10:30'} />
                                <TimePicker label={'To'} defaultValue={'18:30'} />
                                <Button variant="outlined" color="primary">
                                    Apply to All Checked
                                </Button>
                            </FormGroup>
                            <FormGroup aria-label="position" row>
                                <FormControlLabel
                                    value="Thr"
                                    control={<Checkbox color="primary" />}
                                    label="Thr"
                                    labelPlacement="end"
                                />
                                <TimePicker label={'From'} defaultValue={'10:30'} />
                                <TimePicker label={'To'} defaultValue={'18:30'} />
                                <Button variant="outlined" color="primary">
                                    Apply to All Checked
                                </Button>
                            </FormGroup>
                            <FormGroup aria-label="position" row>
                                <FormControlLabel
                                    value="Fri"
                                    control={<Checkbox color="primary" />}
                                    label="Fri"
                                    labelPlacement="end"
                                />
                                <TimePicker label={'From'} defaultValue={'10:30'} />
                                <TimePicker label={'To'} defaultValue={'18:30'} />
                                <Button variant="outlined" color="primary">
                                    Apply to All Checked
                                </Button>
                            </FormGroup>
                            <FormGroup aria-label="position" row>
                                <FormControlLabel
                                    value="Sat"
                                    control={<Checkbox color="primary" />}
                                    label="Sat"
                                    labelPlacement="end"
                                />
                                <TimePicker label={'From'} defaultValue={'10:30'} />
                                <TimePicker label={'To'} defaultValue={'18:30'} />
                                <Button variant="outlined" color="primary">
                                    Apply to All Checked
                                </Button>
                            </FormGroup>
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