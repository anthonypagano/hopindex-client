import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBeer } from '../actions/index';
import uuidv1 from 'uuid';
import './form-styles.css';

class ConnectedForm extends Component {
  constructor() {
    super();

    this.state = {
      beerName: "",
      style: "",
      abv: "",
      brewery: "",
      rating: "",
      cityState: "",
      notes: ""
  };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  this.setState({ [event.target.id]: event.target.value });
}

handleSubmit(event) {
  event.preventDefault();
  const { beerName, style, abv, brewery, rating, cityState, notes } = this.state;
  const id = uuidv1();
  this.props.addBeer({ id, beerName, style, abv, brewery, rating, cityState, notes });
  this.setState({
    beerName: "",
    style: "",
    abv: "",
    brewery: "",
    rating: "",
    cityState: "",
    notes: ""
  });
}

render() {
  const { beerName, style, abv, brewery, rating, cityState, notes } = this.state;
    return (
      <form onSubmit={this.handleSubmit} name="myForm" action="#" aria-live="polite">
        <fieldset>
          <legend>The Hop Index</legend>
          <ul className="form-group">
            <li>
              <label htmlFor="beerName">Beer Name:</label>
              <input placeholder="ex: Bon Bon 2X TNT" type="text" id="beerName" ref={beerName => (this.beerName = beerName)} value={beerName} onChange={this.handleChange} aria-label="add beer name input" required />
            </li>
          </ul>
          <ul className="form-group">
            <li>
              <label htmlFor="style">Style:</label>
              <input placeholder="ex: IIPA" type="text" id="style" ref={style => (this.style = style)} value={style} onChange={this.handleChange} aria-label="add beer style input" required />
            </li>
          </ul>
          <ul className="form-group">
            <li>
              <label htmlFor="abv">ABV:</label>
              <input placeholder="ex: 6%" type="text" id="abv" ref={abv => (this.abv = abv)} value={abv} onChange={this.handleChange} aria-label="add abv input" />
            </li>
          </ul>
          <ul className="form-group">
            <li>
              <label htmlFor="brewery">Brewery:</label>
              <input placeholder="ex: Singlecut Beersmiths" type="text" id="brewery" ref={brewery => (this.brewery = brewery)} value={brewery} onChange={this.handleChange} aria-label="add brewery name input" required />
            </li>
          </ul>
          <ul className="form-group">
            <li>
              <label htmlFor="rating">Rating (1 low 5 high):</label>
              <input placeholder="ex: 5" type="text" id="rating" ref={rating => (this.rating = rating)} value={rating} onChange={this.handleChange} aria-label="add rating input" required />
            </li>
          </ul>
          <ul className="form-group">
            <li>
              <label htmlFor="cityState">City/State:</label>
              <input placeholder="ex: Astoria, NY" type="text" id="cityState" ref={cityState => (this.cityState = cityState)} value={cityState} onChange={this.handleChange} aria-label="add brewery city and state input" />
            </li>
          </ul>
          <ul className="form-group">
            <li>
              <label htmlFor="notes">Notes:</label>
              <input placeholder="ex: super smooth double IPA" type="text" id="notes" value={notes} ref={notes => (this.notes = notes)} onChange={this.handleChange} aria-label="add your tasting notes input" />
            </li>
          </ul>
          <input type="submit" className="button" value="ADD IT!" />
        </fieldset>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addBeer: beer => dispatch(addBeer(beer))
  };
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;