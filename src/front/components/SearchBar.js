import React from "react";

const SearchBar = (props) => {
    const BarStyling = {width: "50rem", background:"#F2F1F9", border:"none", padding:"0.5rem"};
    return (
        <input
        style={BarStyling}
        key="random1"
        value={props.input}
        placeholder={"Buscar productos..."}
        onChange={props.onChange}
        />
    );
}

export default SearchBar
