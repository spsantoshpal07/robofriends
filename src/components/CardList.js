import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    // if(true) {
    //     throw new Error('Nooooooooo!!');
    // }
    const robotsList = robots.map( (robot, index) => {
        return (
        <Card 
            key={index}
            id={robot.id}
            name={robot.name} 
            username={robot.username}
            email={robot.email}
            />
        );
    });
    return (
    <div>{robotsList}</div>
    )
};

export default CardList;