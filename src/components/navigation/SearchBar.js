import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import AllBabsonClasses from "./classes.json";

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : AllBabsonClasses.filter(
        BabsonClass =>
          BabsonClass.class_name.toLowerCase().slice(0, inputLength) ===
          inputValue
      );
};

const getSuggestionValue = suggestion => suggestion.class_name;
const renderSuggestion = suggestion => (
  <div>
    <p> {suggestion.class_name}</p>
    <p> {suggestion.day_of_week}</p>
    <p> {suggestion.spots_available}</p>
    <hr />
  </div>
);
class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Ex: Class Name, Professor, MW",
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <nav className="search-bar-wrapper">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </nav>
    );
  }
}

export default SearchBar;
