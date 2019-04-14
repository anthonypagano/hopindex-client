import React from 'react';

export default function BrewerySearch(props) {
    return (
        <section className="brewery-search">
            <form onSubmit={e => e.preventDefault()} role="search">
                <label htmlFor="brewerySearch" className="search-label">Not sure you had a specific beer? Search the database by Brewery Name</label>&emsp;
                <input
                    className="search-box"
                    type="brewerySearch"
                    id="brewerySearch"
                    name="brewerySearch"
                    placeholder="ex: Hill Farmstead" 
                    onChange={e => props.onChange(e.target.value)}
                />
            </form>
        </section>
    );
}