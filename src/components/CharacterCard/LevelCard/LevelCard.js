import './LevelCard.css';

const LevelCard = (props) =>{
    return(
        <div className="level-card flex items-center">
            <img className="char-class" alt="class img" src={props.classpic}/>
            <div className="char-class-info">
                <h4>
                    {props.class}
                </h4>
                <h5 className="text-sm opacity-60">
                    {props.subclass}
                </h5>                                      
            </div>
        </div>
    );
};

export default LevelCard;