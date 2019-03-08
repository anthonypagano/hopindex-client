import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addBeer } from "../actions/index";

class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      beername: "",
      style: "",
      abv: "",
      brewery: "",
      rating: "",
      citystate: "",
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
    const { beername, style, abv, brewery, rating, citystate, notes } = this.state;
    const id = uuidv1();
    this.props.addBeer({ id, beername, style, abv, brewery, rating, citystate, notes });
    this.beername.value = '';
    this.style.value = '';
    this.abv.value = '';
    this.brewery.value = '';
    this.rating.value = '';
    this.citystate.value = '';
    this.notes.value = '';
  }

  render() {
    const { beername, style, abv, brewery, rating, citystate, notes } = this.state;
    return (
      <form onSubmit={this.handleSubmit} name="myForm">
        <div className="form-group">
          <label htmlFor="beername">Beer Name</label>
          <input type="text" id="beername" ref={beername => (this.beername = beername)} value={beername} onChange={this.handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="style">Style</label>
          <input type="text" id="style" ref={style => (this.style = style)} value={style} onChange={this.handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="abv">ABV</label>
          <input type="text" id="abv" ref={abv => (this.abv = abv)} value={abv} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="brewery">Brewery</label>
          <input type="text" id="brewery" ref={brewery => (this.brewery = brewery)} value={brewery} onChange={this.handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating (low (1) to high (5))</label>
          <input type="text" id="rating" ref={rating => (this.rating = rating)} value={rating} onChange={this.handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="citystate">City/State</label>
          <input type="text" id="citystate" ref={citystate => (this.citystate = citystate)} value={citystate} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="notes">Notes</label>
          <input type="text" id="notes" value={notes} ref={notes => (this.notes = notes)} onChange={this.handleChange} />
        </div>                
        <button type="submit">ADD</button>
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