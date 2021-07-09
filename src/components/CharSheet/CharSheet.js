import CharacterCard from "../CharacterCard/CharacterCard";
import SaveThrows from "../BaseStats/SaveThrows";
import MainStats from "../MainStats/MainStats";
import UtilityStats from "../UtilityStats/UtilityStats";
import SkillChecks from "../SkillChecks/SkillCheck/SkillCheck";
import AttackRolls from "../AttackRolls/AttackRolls";
import './CharSheet.css';

const ChaarSheet = (props) =>{
    return(
        <div class="container">
            <div class="left-col h-full">
                <SaveThrows throws={props.throws}/>
            </div>
            <div class="mid-col h-full">
                <SkillChecks skills={props.skills}/>
            </div>
            <div class="right-col h-full">
                <AttackRolls attacks={props.attacks} spells={props.spells}/>                
            </div>
            <div class="char-header">
                <CharacterCard char= {props.char_object}/>  
                <div class="main-char-infor">
                    <MainStats stats={props.stats}/>
                    <UtilityStats />
                </div>
            </div>
        </div>
    );
}

export default ChaarSheet;