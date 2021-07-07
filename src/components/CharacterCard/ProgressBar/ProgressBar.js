import './ProgressBar.css';
import React from 'react';
import { useRef} from 'react';

const ProgressBar = (props) =>{
    const progressbar = useRef(null);
    return(
        <React.Fragment>
        <div className="w-full flex items-center">
            <div className="text-white text-sm mr-2">{props.level}</div>
            <div className="w-3/4 h-px bg-white" ref={progressbar}> </div>
            <div className="text-white text-sm ml-2">{props.level+1}</div>
        </div>
        <div className="text-white w-full text-center opacity-60 mb-2">
            {props.CurrentExp} / {props.LevelUp}
        </div>
        </React.Fragment>
    );
};

export default ProgressBar;