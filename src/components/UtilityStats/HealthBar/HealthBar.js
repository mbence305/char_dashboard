import './HealthBar.css';

const HealthBar=(props)=>{
    return(
        <div className="flex flex-row w-1/3 h-2/3 rounded-md bg-gray-900 text-white p-2">
            <div className="flex ml-2 flex-col w-20 ">
                <button className="border-2 hover:bg-red-900 px-2 rounded border-red-900">Heal</button>
                <input className="my-2 rounded border-2 text-center bg-transparent border-red-900 w-full" min="0" type="number"/>
                <button className="border-2 hover:bg-green-900 hover:border-green-900 px-2 rounded border-red-900">Damage</button>
            </div>
            <div className="mx-6 flex flex-col">
                <div className="w-full">
                    <span className="mr-8">Current</span>
                    <span>Max</span>
                </div>
                <div className="">
                    <input className="w-12 mr-4 my-2 rounded border-2 text-center bg-transparent border-red-900" min="0" type="number"/>
                    <span>/</span>
                    <input className="w-12 ml-4 my-2 rounded border-2 text-center bg-transparent border-red-900" min="0" type="number"/>
                </div>
                <div className="text-center text-white">
                    Hit Points
                </div>
            </div>
            <div className="w-20 mr-2">
                <div className="mb-2">
                    Temp HP
                </div>
                <input type="number" min="0" placeholder="--" className="bg-transparent text-lg text-center w-12"/>
            </div>
        </div>
    );
};

export default HealthBar;