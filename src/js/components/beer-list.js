import React from 'react';

export default function BeerList(props) {
    const beers = props.beers.map((beer) =>
        <ul key={beer.id}>
            <li>{beer.beerName}</li>
            <li>{beer.style}</li>
            <li>{beer.abv}</li>
            <li>{beer.brewery}</li>
            <li>{beer.rating}</li>
            <li>{beer.cityState}</li>
            <li>{beer.notes}</li>
            <button onClick={() => props.deleteBeer(beer.id)}>X</button>
        </ul>
    );
    return (
        <section>
            { beers }
        </section>
    );
}