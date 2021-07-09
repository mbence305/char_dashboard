import './SkillChecks.css';
import SkillCheck from './SkillCheck/SkillCheck';

const SkillChecks=(props)=>{
    const items = props.skills.map((item)=>{
        return(<SkillCheck attr={item}/>);
    });
    return(
        <div className="flex flex-col"> 
            {items}
        </div>
    );
};

export default SkillChecks;