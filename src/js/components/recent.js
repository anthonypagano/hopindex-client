import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRecentBeers } from '../actions/index';
import { updateRecentBeers } from '../actions/index';
import { getData } from '../actions/index';
import RecentBeers from './recent-beers';

export class Recent extends React.Component {
    state = {};

    componentDidMount() {
      this.props.getRecentBeers();
    }

    componentWillUnmount() {
        this.props.updateRecentBeers();
        this.props.getData();
    }

    render() {
        return (
            <div>
                <p>Below are the 5 most recent beers that have been logged</p>
                <RecentBeers />
                <Link to="/">
                    <input type="button" className="button" value="BACK TO THE INDEX" />
                </Link>
            </div>
        );
    }
}

const mapStateToProps = ({ recentBeers = {} }) => ({ recentBeers });

export default connect(mapStateToProps, { getRecentBeers, updateRecentBeers, getData })(Recent);