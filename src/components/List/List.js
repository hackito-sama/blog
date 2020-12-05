import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  publication,
  showPublication,
} from "../../redux/actions/publicationsActions";
import { publicationService } from "../../services/publications";

//component
const List = ({ publication }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    publicationService.getPublications().then((response) => {
      setData(response.data.data);
    });
  }, []);

  return (
    <div>
      {data.map((pub) => (
        <li>
          <h2>{pub.title}</h2>
          <p>{pub.description}</p>
        </li>
      ))}
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
