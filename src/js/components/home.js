import React from 'react';
import {connect} from 'react-redux';
import BrewerySearch from './brewery-search.js';
import Intro from './intro.js';
import BeerList from './beer-list.js';
import Form from "./form.js";
import { deleteBeer } from '../actions/index';

export class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            breweryName: ''
        }
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
            <BrewerySearch onChange={breweryName => this.setState({breweryName})} />
            <BeerList beers={beers} deleteBeer={this.props.deleteBeer} />
            <Form />
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