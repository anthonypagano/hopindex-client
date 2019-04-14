import React from 'react';
import { Link } from 'react-router-dom';

export default function HowTo() {
    return (
        <section className="how-to">
            <h2>How to:</h2>
            <p>Not sure if you've had a specific beer? Search for it by brewery in the search box.</p>
            <p>If you see the "you have not had this beer" message then or do not see it in the list then you haven't had it. Feel free to order it and log it here!</p>
            <p>After you've finished your beer of choice go ahead and use the "Add A Beer" form to add your entry to the database.</p>
            <p>After entry you'll see it in the list or can search again for it by searcing by Brewery.</p>
            <h2>Ratings Explanation:</h2>
            <p>The range for ratings are whole numbers with 1 being just plain terrible and 5 being amazing! Here's a more detailed explanation for each level.</p>
            <p>1 - The worst. So bad you just had to spit out the first sip. You'd never order it again, and likely advise people against trying it as well.</p>
            <p>2 - Not for me. You had a couple sips but really didn't like it and wouldn't order it again.</p>
            <p>3 - Ok, pretty good. Tasted other things like it, if you saw it on a menu you'd consider ordering it.</p>
            <p>4 - Good stuff! You finished what you were served and asked for more. At this level you'd actively buy it off the shelf or order it if you saw it on a menu.</p>
            <p>5 - Awesome! If you see it on a menu or know a retailer is carying it, stop what you are doing and acquire it now! Do not wait as others are probably already in line to buy!</p>
            <img src={require("../images/get-in-line.jpg")} id="get-in-line" alt="People camped out for the Black Friday Bourbon County Stout release in Chicago, IL" className="supporting-images" /><br />
            <Link to="/">
                <input type="button" className="button" onClick={()=>this.addBeerForm()} value="BACK TO THE INDEX" />
            </Link>
        </section>
    );
}