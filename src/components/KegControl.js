import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import EditKegForm from "./EditKegForm";
import { connect } from 'react-redux';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const { id, brewery, beer, beerType, ABV, pints } = newKeg;
    const action = {
      type: "ADD_KEG",
      id: id,
      brewery: brewery,
      beer: beer,
      beerType: beerType,
      ABV: ABV,
      pints: pints,
    };
    dispatch(action);
    this.setState({ formVisibleOnPage: false });
  };

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(
      (keg) => keg.id === id
    )[0];
    this.setState({ selectedKeg: selectedKeg });
  };

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: "DELETE_KEG",
      id: id
    }
    dispatch(action);
    this.setState({ selectedKeg: null });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditingTicketInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const { id, brewery, beer, beerType, ABV, pints } = kegToEdit;
    const action = {
      type: "ADD_KEG",
      id: id,
      brewery: brewery,
      beer: beer,
      beerType: beerType,
      ABV: ABV,
      pints: pints,
    };
    dispatch(action);
    this.setState({
      editing: false,
      selectedKeg: null,
    });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = (
        <EditKegForm
          keg={this.state.selectedKeg}
          onEditKeg={this.handleEditingKegInList}
        />
      );
      buttonText = "Return to Keg List";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = (
        <KegDetail
          keg={this.state.selectedKeg}
          onClickingDelete={this.handleDeletingKeg}
          onClickingEdit={this.handleEditClick}
        />
      );
      buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      );
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = (
        <KegList
          kegList={this.state.masterKegList}
          onKegSelection={this.handleChangingSelectedKeg}
        />
      );
      buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}
KegControl = connect()(KegControl);

export default KegControl;
