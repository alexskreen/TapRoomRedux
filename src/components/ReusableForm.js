import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name="brewery" placeholder="Brewery" />
        <input type="text" name="beer" placeholder="Beer" />
        <input type="text" name="beerType" placeholder="Beer Type" />
        <input type="text" name="ABV" placeholder="ABV" />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
