import React from 'react';
import './SaveThrows.css';
import StatCard from './StatCard/StatCard';

const SaveThrows = (props) =>{

    const cards = props.throws.map((item) => {
        return (
            <StatCard key={item.ID} StatName={item.StatName} Modifier={item.Modifier} StatNum={item.StatNum}/>
        );
    });
    return(
        <div className="StatContainer">
            {cards}
        </div>
    );
};

export default SaveThrows;