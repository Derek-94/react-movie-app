import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"

export default function Movie({year, title, summary, poster, genres}) {
    return (
        <div className = "movie">
            <img src = {poster} alt = {title} title = {title} />
            <div className = "movie__data">
                <h3 className = "movie__title">{title}</h3>
                <h4 className = "movie__year">{year}</h4>
                <ul className = "genres">
                    {genres.map((genre, index) => (
                        <li className = "genres__genre" key = {index}>{genre}</li>
                    ) )}
                </ul>
                <p className="movie__summary">{summary.slice(0, 180)}...</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}