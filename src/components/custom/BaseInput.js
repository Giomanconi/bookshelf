import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const BaseInput = props => {
  return (
    <FormControl>
      <InputLabel htmlFor="component-simple">{props.title}</InputLabel>
      <Input
        id={props.title}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        inputProps={{ maxLength: props.maxLength }}
        onBlur={props.onBlur}
        error={props.error}
      />
    </FormControl>
  );
};

export default BaseInput;