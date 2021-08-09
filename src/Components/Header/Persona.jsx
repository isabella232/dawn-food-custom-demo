import React from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { selectCustomer } from "../../actions/selectCustomer";

const SelectCustomer = () => {
  const options = [
    { value: "1018356", label: "TIFFANY" },
    { value: "1017523", label: "BEN" },
    { value: "1012818", label: "MARC" },
  ];

  //STYLE SELECT

  const colourStyles = {
    control: (styles) => ({
      backgroundColor: "transparent",
      display: "flex",
      width: "100%",
      position: "relative",
    }),
    input: (styles) => ({ width: "100%" }),
    container: (styles) => ({ width: "100%" }),
    valueContainer: (styles) => ({
      backgroundColor: "transparent",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    }),
    placeholder: (styles) => ({
      backgroundColor: "transparent",
      fontSize: "0.8rem",
      color: "black",
      fontFamily: "Oswald",
      textTransform: "uppercase",
    }),
    indicatorSeparator: (styles) => ({ display: "none" }),
    dropdownIndicator: (styles) => ({ color: "black" }),
    singleValue: (styles) => ({ top: "0", width: "50%" }),
    menu: (styles) => ({
      width: "8rem",
      top: "2rem",
      left: "0",
      position: "absolute",
      backgroundColor: "white",
      borderRadius: "2px",
      zIndex: "99",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "#F9A64F" : "white",
        color: isFocused ? "white" : "black",
        fontSize: "0.8rem",
        fontFamily: "Adobe Clean Light",
        margin: "1rem",
        transition: "all 0.2s",
        cursor: "pointer",
        width: "80%",
        textAlign: "center",
        textTransform: "uppercase",
        fontWeight: "bold",
        borderRadius: "2px",
      };
    },
    menuList: (styles) => ({ backgroundColor: "transparent" }),
  };
  const dispatch = useDispatch();

  const selectValue = (e) => {
    dispatch(selectCustomer(e.value));
  };

  return (
    <Select
      options={options}
      onChange={selectValue}
      styles={colourStyles}
      placeholder={"CUSTOMER"}
    />
  );
};

export default SelectCustomer;
