import React from 'react';
import './BaseStats.css';
import StatCard from './StatCard/StatCard';

const BaseStats = (props) =>{

    const cards = props.stats.map((item) => {
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

export default BaseStats;