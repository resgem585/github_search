import { Stack, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Searcher = (props) => {
  
  const {
    setInputUser
  } = props

  const [ valueInput, setValueInput ] = useState('')
  
  const onSearchValueChange = (event) => {
    const inputValue = event.target.value
    setValueInput(inputValue)
  }
 
  const handleSubmit = () => {
    setInputUser(valueInput)
    
  
  
  
  
  }

  const estilos = {
    marginTop: "30px",
    width: "80%",
  };
  const styleTextField = {
    width: "90%",
    margin: "0 auto",
  };

  return (
    <Stack sx={estilos} direction="row">
      <TextField
        sx={styleTextField}
        type="search"
        autoComplete="off"
        label="Github User"
        id="outlined-basic"
        placeholder="Search User"
        size='small'
        value={valueInput}
        onChange={onSearchValueChange}
	//  🔽🔽🔽
        InputProps={{
            endAdornment: (
              <IconButton
              onClick={handleSubmit}>
                <SearchIcon />
              </IconButton>
            )
          }}
      />
    </Stack>
  );
};

export default Searcher;
