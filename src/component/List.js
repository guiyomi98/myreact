import React from "react";
import PropTypes from "prop-types";
import './List.scss';

function List({ id, rating, title, poster, summary }) {
  return (
    <li className="list__item">
      <h3 className="title">{ title }</h3>
      <img className="img" src={ poster } alt={ title } title={ title } />
      <p className="rating"><span>{ rating }</span>/10</p>
      <p className="descript">{ summary }</p>
    </li>
  )
}

List.propTypes = {
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired
}

export default List;