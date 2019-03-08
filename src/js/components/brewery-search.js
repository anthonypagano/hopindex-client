import React from 'react';

export default function BrewerySearch(props) {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="brewerySearch">Search by Brewery</label>&emsp;
            <input
                type="brewerySearch"
                id="brewerySearch"
                name="brewerySearch"
                placeholder="ex: Hill Farmstead" 
                onChange={e => props.onChange(e.target.value)}
            />
        </form>
    );
}