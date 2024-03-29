import React, { Component } from "react";

// Importing Components
import DogList from "./DogList";
import DogDetails from "./DogDetails"

// Importing Router.
import { Switch, Route, Link, NavLink } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Dogs!</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">

                        {/* Home component. */}
                        <li class="nav-item active">
                            {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
                            <Link exact to="/" class="nav-link">Home </Link>
                        </li>


                        {/* DOG LIST */}

                        <li class="nav-item">
                            {/* <a class="nav-link" href="#">Dogs</a> */}
                            <Link exact to="/dogs" class="nav-link" render={() => <DogList dogs={this.props.dogs} />}>Dog Profiles</Link>
                        </li>


                        {/* DROP DOWN. */}

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
        </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                {/* <a class="dropdown-item" href="#">Action</a> */}


                                {this.props.dogs.map(d => (
                                    <NavLink exact to={`/dogs/${d.name}`}
                                        render={() => <DogDetails dog={d} />}>
                                            {d.name}<br></br>
                                    </NavLink>
                                ))}





                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        )
    }
}

export default NavBar;