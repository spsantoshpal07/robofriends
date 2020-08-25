import React from 'react';

const Card = ( {id, name, username, email} ) => {
    return (
        <article className="bg-white dib br3 pa3 ma2 pa4-ns mv3 ba b--black-10 grow bw2 shadow-5">
            <div className="tc">
                <img src={`https://robohash.org/${id}?200x200`} alt={`${id}`} className="br-100 dib ba b--black-05" />
                <div>
                    <h1 className="f3 mb2">{name}</h1>
                    <h2 className="f5 fw4 gray mt0">{email}</h2>
                </div>
            </div>
        </article>
    );
}

export default Card;