import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const QueryCard = (props) => {
    const  book  = props.book;

    return(
        <div class="card-container query-card">
            <div class="desc">
                <h2>
                    <Link to={`/show-book/${book._id}`}>
                        { book.title }
                    </Link>
                </h2>
                <h3>{book.author}</h3>
            </div>
        </div>
    )
};

export default QueryCard;