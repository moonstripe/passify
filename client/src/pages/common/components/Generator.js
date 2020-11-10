import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function Generator() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    length: 20,
    generatedPassword: '',
  });

  const [characterTypes, setCharacterTypes] = React.useState({
    lowercase: false,
    uppercase: false,
    number: false,
    symbol: false,
  });

  const handleLengthChange = (event, newValue) => {
    setState({ ...state, length: newValue });
  };

  const handleCharacterChange = (event) => {
    event.preventDefault();
    setCharacterTypes({ ...characterTypes, [event.target.name]: event.target.checked });
    console.log(characterTypes);
  };

  const { lowercase, uppercase, number, symbol } = characterTypes;
  const error = [uppercase, lowercase, number, symbol].filter((v) => v).length === 0;

  const generatePassword = () => {
    const possibleCharacters = {
      lowercase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
      uppercase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      number: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      symbol: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '|', '?', '+', '=']
    };
    const selectedCharacterTypes = [];
    let generatedPassword = '';
    if (!error) {
      for (const character in characterTypes) {
        console.log(character);
        if (characterTypes[character] === true) {
          selectedCharacterTypes.push(character);
        }
        console.log(selectedCharacterTypes);
      }
      for (var i = 0; i < state.length; i++) {
        const randomKey = selectedCharacterTypes[Math.floor(Math.random() * selectedCharacterTypes.length)];
        console.log(randomKey);
        const randomCharacter = possibleCharacters[`${randomKey}`][Math.floor(Math.random() * possibleCharacters[`${randomKey}`].length)];
        generatedPassword = generatedPassword + randomCharacter;
      }
      setState({ ...state, generatedPassword: generatedPassword });
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography id="continuous-slider" gutterBottom>
            Length
      </Typography>
          <Slider value={state.length} onChange={handleLengthChange} name="length" aria-labelledby="continuous-slider" valueLabelDisplay="on" max={50} />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="primary" onClick={generatePassword}>
            Generate Password
</Button>
        </Grid>
        <Grid item xs={8}>
          <FormControl required error={error} component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Character types</FormLabel>
            <FormGroup row={true}>
              <FormControlLabel
                control={<Checkbox checked={lowercase} onChange={handleCharacterChange} name="lowercase" />}
                label="Lowercase"
              />
              <FormControlLabel
                control={<Checkbox checked={uppercase} onChange={handleCharacterChange} name="uppercase" />}
                label="Uppercase"
              />
              <FormControlLabel
                control={<Checkbox checked={number} onChange={handleCharacterChange} name="number" />}
                label="Number"
              />
              <FormControlLabel
                control={<Checkbox checked={symbol} onChange={handleCharacterChange} name="symbol" />}
                label="Symbol"
              />
            </FormGroup>
            <FormHelperText>Select at least one</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <h2>
            {state.generatedPassword}
          </h2>
        </Grid>
      </Grid>
    </div>
  );
};
