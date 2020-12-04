import React from "react";
import { connect } from "react-redux";
import { showPublication } from "../../redux/actions/publicationsActions";

//component
const List = () => {

  return (
    <div>
      <li></li>
    </div>
  );
};

//funciones
const mapStateToProps = (state) => {
  return {
    publication: state.publication,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showPublication: (publication) => dispatch(showPublication(publication)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
