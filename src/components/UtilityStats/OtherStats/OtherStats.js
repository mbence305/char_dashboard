import './OtherStats.css';

const OtherStats =(props)=>{
    return(
        <div className="flex flex-row justify-around w-2/3"> 
            <div className="w-24 p-3 h-1/2 text-white rounded border-2 border-red-900 bg-black bg-opacity-80">
                <h5>Proficency</h5>
                <h3>{props.prof_value}</h3>
                <h5>BONUS</h5>
            </div>

            <div className="w-24 p-3 h-1/2 text-white rounded border-2 border-red-900 bg-black bg-opacity-80">
                <h5>Walking</h5>
                <h3>{props.speed}ft.</h3>
                <h5>SPEED
                </h5>
            </div>

            <div className="w-24 p-3 h-1/2 text-white rounded border-2 border-red-900 bg-black bg-opacity-80">
                <h5>Initiative</h5>
                <h3>{props.init}</h3>
            </div>

            <div className="w-24 p-3 h-1/2 text-white rounded border-2 border-red-900 bg-black bg-opacity-80">
                <h5>Armor</h5>
                <h3>{props.armor}</h3>
                <h5>Class</h5>
            </div>

        </div>
    );
};

export default OtherStats;