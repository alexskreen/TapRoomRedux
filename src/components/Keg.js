import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h3>
          {props.brewery} - {props.beer}
        </h3>
        <p>
          <em>{props.beerType} - {props.ABV}</em>
        </p>
      </div>
      <hr />
    </React.Fragment>
  );
}

Keg.propTypes = {
  brewery: PropTypes.string,
  beer: PropTypes.string,
  beerType: PropTypes.string,
  ABV: PropTypes.string,
  Pints: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
};

export default Keg;
