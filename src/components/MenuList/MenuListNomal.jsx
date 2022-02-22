import React, { useState } from "react";
import { Select, FormControl, InputLabel, MenuItem } from "@mui/material";
function MenuListNomal({ name, list }) {
  // props.name :string
  // props.list :{id:string , value:string}[]

  const [tournamentsName, setTournamentsName] = useState();

  const handleChange = (event) => {
    setTournamentsName(event.target.value);
  };

  return (
    <div>
      <h1> {tournamentsName}</h1>
      <FormControl sx={{ m: 1, minWidth: 250, height: 40 }}>
        <InputLabel sx={{ m: -0.5, height: 40 }} htmlFor="grouped-select">
          {name}
        </InputLabel>
        <Select
          defaultValue=""
          id="grouped-select"
          label="Grouping"
          sx={{ height: 45 }}
          onChange={handleChange}
        >
          {list.map((item) => {
            return <MenuItem value={item.id}>{item.value}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default MenuListNomal;
