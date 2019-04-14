import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBeer } from '../actions/index';
import BrewerySearch from './brewery-search.js';
import Intro from './intro.js';
import BeerList from './beer-list.js';
import Form from "./form.js";

export class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            breweryName: '',
            showBeerList: false,
            showAddBeerForm: false
        }
    }

    addBeerForm() {
        this.setState ({
            showAddBeerForm:!this.state.showAddBeerForm
        })
    }

    beerList() {
        this.setState ({
            showBeerList: true
        })
    }

    hideBeerList() {
        this.setState ({
            showBeerList: false
        })
    }

    render() {

        const beers = this.props.beers.filter(beer =>
            beer.brewery.toLowerCase().includes(
            this.state.breweryName.toLowerCase()
        )
    );

    return (
        <div>
            <Intro />
            <Link to="/how">
                <input type="button" className="button" value="HOW TO USE THE HOP INDEX" />
            </Link>
            <Link to="/recent">
                <input type="button" className="button" value="SEE 5 MOST RECENT ENTRIES" />
            </Link>

            <div onClick={()=>this.beerList()}>
                <BrewerySearch onChange={breweryName => this.setState({breweryName})} />
            </div>
            {
                this.state.showBeerList?
                <BeerList beers={beers} deleteBeer={this.props.deleteBeer} />
                : null
            }
            {
                this.state.showBeerList?
                <input type="button" className="button" onClick={()=>this.hideBeerList()} value="CLOSE THE LIST" />
                : null
            }
            <input type="button" className="button" onClick={()=>this.addBeerForm()} value="ADD A NEW BEER" />
            {
                this.state.showAddBeerForm?
                <Form />
                : null
            }
            <br /><img src={require("../images/bcs-lineup.jpg")} id="bcs-lineup" alt="2018 Bourbon County Stout lineup in the taproom" className="supporting-images" />
        </div>
    );
    }
}

const mapStateToProps = state => ({
    beers: state.beers.sort((a, b) => {
    return a.beername > b.beername ? 1 : a.beername < b.beername ? -1 : 0; })
});

function mapDispatchToProps(dispatch) {
    return {
        deleteBeer: id => dispatch(deleteBeer(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);