import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/black-and-white-movie-logo-design-template-040178fdca7dbedb4527b6eb4284a15d_screen.jpg?ts=1585497731" /></Link>
               <Link to="https://gargatulya.github.io/Movie-advisor/" style={{textDecoration: "none"}}><span>Home</span></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
            </div>
        </div>
    )
}

export default Header
