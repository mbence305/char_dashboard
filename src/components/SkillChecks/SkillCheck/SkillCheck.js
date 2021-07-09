const SkillCheck =(props)=>{
    return(
        <div>
            <input className="w-2/12" type="checkbox"/>
            <span className="w-2/12">{props.attr.Mod}</span>
            <span className="w-6/12">{props.attr.Skill}</span>
            <button className="w-2/12"></button>
        </div>
    );
};

export default SkillCheck;