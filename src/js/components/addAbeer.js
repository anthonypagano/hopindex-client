import React from 'react';
import Form from "./form.js";
import List from "./list.js";
export default function AddABeer() {
    return (
        <div>
        <h2>Add a new beer</h2>
        <Form />
        <h2>new beers</h2>
        <List />
      </div>
    );
}