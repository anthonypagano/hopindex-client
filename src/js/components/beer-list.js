import React from 'react';
import './list-styles.css';

export default function BeerList(props) {
    
    var beerCount = props.beers.length
    var beerListStyle = "search-results"
    var noResultsBox = "hide-no-results"

    if (beerCount > 0) {
        beerListStyle = "search-results"
        noResultsBox = "hide-no-results"
    } else {
        beerListStyle = "no-search-results"
        noResultsBox = "no-results"
    }

    const beers = props.beers.map((beer) =>
        <ul key={beer.id} className="beer-details">
            <li className="brewery-name">{beer.brewery}</li>
            <li className="beer-name">{beer.beerName}</li>
            <li className="style">{beer.style}</li>
            <li className="abv">{beer.abv}%</li>
            <li className="rating">{beer.rating}</li>
            <li className="city-state">{beer.cityState}</li>
            <li className="notes">{beer.notes}</li>
            <li className="deletebtnwrapper"><button className="deletebtn" onClick={() => props.deleteBeer(beer.id)}><span className="trashcan">&#128465;</span><span className="delete button">DELETE</span></button></li>
        </ul>
    );
    return (
        <section aria-live="assertive">
            <div className={beerListStyle}>
                <ul className="mobile-column-header">
                    <li className="brewery-name column-header">Brewery</li>
                    <li className="beer-name column-header">Beer Name</li>
                    <li className="style column-header">Style</li>
                    <li className="abv column-header">ABV</li>
                    <li className="rating column-header">Rating</li>
                    <li className="city-state column-header">Location</li>
                    <li className="notes column-header">Notes</li>
                    <li className="deletebtnwrapper">&nbsp;</li>
                </ul>
                { beers }
            </div>
            <div className={noResultsBox}>
                <p>Good news! We don't have any record of this particular offering. Feel free to indulge and don't forget to log it when you've finished. Bottoms up!</p>
            </div>
        </section>
    );
}