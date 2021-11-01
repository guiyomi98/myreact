import React from "react";
import PropTypes from "prop-types";
import './List.css';

function List({ id, rating, title, poster, summary }) {
  return (
    <li className="list__item">
      <h4 className="title">{ title }</h4>
      <img className="img" src={poster} alt={title} title={title} />
      <p className="rating"><span>{ rating }</span>/10</p>
      <p className="descript">{summary.slice(0.180)}...</p>
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