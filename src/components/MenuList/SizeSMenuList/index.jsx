import React, { useState } from "react";
import { Select, FormControl, InputLabel, MenuItem } from "@mui/material";
function SizeSMenuList({ name, list }) {
  // props.name :string
  // props.list :[]

  const [listName, setlistName] = useState();

  const handleChange = (event) => {
    setlistName(event.target.value);
  };

  return (
    <div>
      <h1>{listName}</h1>
      <FormControl sx={{ m: 1, minWidth: 90, height: 40 }}>
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
            return <MenuItem value={item}>{item}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default SizeSMenuList;
