import './MainStats.css';
import MainStatCard from './MainStatCard/MainStatCard';

const MainStats =(props)=>{

    const items = props.stats.map((item)=>{
        return(
            <MainStatCard key={item.ID} StatName={item.StatName} StatNum={item.StatNum} Modifier={item.Modifier}/>
        );
    });

    return(
        <div className="flex justify-start">
            {items}        
        </div>
    );
};

export default MainStats;