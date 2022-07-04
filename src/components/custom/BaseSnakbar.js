import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = props => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const baseSnackbar = props => {
  return (
    <Snackbar open={props.open} autoHideDuration={1000} onClose={props.onClose} onExited={props.onExited}>
      <Alert onClose={props.onClose} severity={props.severity}>
        {props.message}
      </Alert>
    </Snackbar>
  )
};

export default baseSnackbar;
