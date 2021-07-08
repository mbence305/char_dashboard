import CharacterCard from "../CharacterCard/CharacterCard";
import SaveThrows from "../BaseStats/SaveThrows";
import MainStats from "../MainStats/MainStats";
import UtilityStats from "../UtilityStats/UtilityStats";
import './CharSheet.css';

const ChaarSheet = (props) =>{
    return(
        <div class="container">
            <div class="left-col">
                <SaveThrows throws={props.throws}/>
            </div>
            <div class="mid-col">
                <SaveThrows throws={props.throws}/>
            </div>
            <div class="right-col">
                <SaveThrows throws={props.throws}/>
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