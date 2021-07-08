import './UtilityStats.css';
import HealthBar from './HealthBar/HealthBar';

const UtilityStats =(props)=>{
    return(
        <div className="">
            <HealthBar currentHP={props} maxHP={props}/>
        </div>
    );
};

export default UtilityStats;