import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import RouterSideBar from './components/RouterSideBar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <RouterSideBar />
    </div>
  );
}

export default App;
