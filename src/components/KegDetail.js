import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg } = props;

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>
        {keg.brewery} - {keg.beer}
      </h3>
      <p>
        <em>
          {keg.beerType} - {keg.ABV} Pints left: {keg.pints}
        </em>
      </p>
      <button onClick={props.onClickingEdit}>Edit Keg Details</button>{" "}
      <button onClick={() => props.onClickingDelete(keg.id)}>Delete Keg</button>
      <button onClick={props.onClickingDrink}>
        Have a pint. You deserve it
      </button>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingEdit: PropTypes.func,
  // onClickingDrink: PropTypes.func,
  // onClickingDelete: PropTypes.func
};

export default KegDetail;