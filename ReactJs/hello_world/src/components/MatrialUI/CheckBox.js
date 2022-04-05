import React from "react";
import CheckBox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import { TextField } from "@material-ui/core";

function Checkbox() {
  const [checked, setChecked] = React.useState(true);
  const [name, setName] = React.useState("");

  function handleChange(event) {
    console.log(event.target.checked);
    setChecked(event.target.checked);
  }
  return (
    // <div>
    //   <CheckBox
    //     checked={checked}
    //     onChange={(e) => handleChange(e)}
    //     inputProps={{ "aria-label": "primary checkbox" }}
    //   />
    // </div>
    <div>
        <h3>{name}</h3>
      <TextField
        variant="outlined"
        id="standard-basic"
        label="Name"
        placeholder="Enter Name"
        color="secondary"
        onChange={(e) => setName(e.target.value)}
      />
      <FormControlLabel
        control={
          <CheckBox
            checked={checked}
            onChange={(e) => handleChange(e)}
            inputProps={{ "aria-label": "primary checkbox" }}
            icon={<SaveIcon />}
            checkedIcon={<DeleteIcon />}
          />
        }
        label="Agree to terms and conditions"
      />
    </div>
  );
}

export default Checkbox;
