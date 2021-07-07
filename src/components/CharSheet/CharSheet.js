import CharacterCard from "../CharacterCard/CharacterCard";
import BaseStats from "../BaseStats/BaseStats";
import './CharSheet.css';

const ChaarSheet = (props) =>{
    return(
        <div class="container">
            <div class="left-col">
                <BaseStats stats={props.stats}/>
            </div>
            <div class="mid-col">
                <BaseStats stats={props.stats}/>
            </div>
            <div class="right-col">
                <BaseStats stats={props.stats}/>
            </div>
            <div class="char-header">
                <CharacterCard char= {props.char_object}/>  
                <div class="main-char-infor">
                    <BaseStats stats={props.stats}/>
                </div>
            </div>
        </div>
    );
}

export default ChaarSheet;