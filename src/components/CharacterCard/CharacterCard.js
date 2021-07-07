import './CharacterCard.css';
import LevelCard from './LevelCard/LevelCard';
import ProgressBar from './ProgressBar/ProgressBar';

function CharacterCard(props){
    return(
        <div className="char-card">
            <img className="char-icon" alt="profile" src={props.char.charpic}/>
            <h3 className="char-name">
                {props.char.name}
            </h3>
            <div className="char-build">
                {props.char.sex} {props.char.race}
            </div>
            <ProgressBar CurrentExp={props.char.CurrentExp} LevelUp ={props.char.LevelUp}  level={props.char.level}/>
            <LevelCard classpic={props.char.classpic} class={props.char.class} subclass={props.char.subclass}/>
        </div>
    );
}

export default CharacterCard;