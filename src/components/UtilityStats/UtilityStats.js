import './UtilityStats.css';
import HealthBar from './HealthBar/HealthBar';
import OtherStats from './OtherStats/OtherStats';

const UtilityStats =(props)=>{
    return(
        <div className="flex flex-row">
            <HealthBar currentHP={props} maxHP={props}/>
            <OtherStats/>
        </div>
    );
};

export default UtilityStats;