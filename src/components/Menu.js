import React, { useState } from "react";
import RadioInput from "./ui/RadioInput";
import styles from "./Menu.module.css";

const Menu = (props) => {
  const [checkedRadioInput, setCheckedRadioInput] = useState(
    props.data[0].value
  );

  const radioInputChangeHandler = (event) => {
    setCheckedRadioInput(event.target.value);
  };

  return (
    <ul className={styles.ul}>
      {props.data.map((data, index) => {
        return (
          <li key={index}>
            <RadioInput
              name={"animal-type"}
              value={data.value}
              checked={checkedRadioInput === data.value && true}
              onChange={radioInputChangeHandler}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
