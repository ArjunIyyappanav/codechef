import React from 'react';

function Computer(props){
    if(props.player==0){
        return(<></>)
    }else if (props.player==1) {
            return(
                <div className="flex flex-col items-center text-center">
                <p className="text-lg font-semibold text-gray-700 mb-2">Computer:</p>
                <img src="/rock.jpg" alt="rock" className="w-24 h-24 rounded-xl shadow-md"></img>
                </div>)
    }else if (props.player==2) {
        return(
            <div className="flex flex-col items-center text-center">
            <p className="text-lg font-semibold text-gray-700 mb-2">Computer:</p>
            <img src="/paper.jpg" alt="paper" className="w-24 h-24 rounded-xl shadow-md"></img>
            </div>)
    }else if (props.player==3) {
        return(
            <div className="flex flex-col items-center text-center">
            <p className="text-lg font-semibold text-gray-700 mb-2">Computer:</p>
            <img src="/scissors.jpg" alt="scissors" className="w-24 h-24 rounded-xl shadow-md"></img>
            </div>)
    }else if (props.player==4) {
        return(
            <div className="flex flex-col items-center text-center">
            <p className="text-lg font-semibold text-gray-700 mb-2">Computer:</p>
            <img src="/lizard.jpg" alt="lizard" className="w-24 h-24 rounded-xl shadow-md"></img>
            </div>)
    }else if (props.player==5) {
        return(
            <div className="flex flex-col items-center text-center">
            <p className="text-lg font-semibold text-gray-700 mb-2">Computer:</p>
            <img src="/spock.jpg" alt="spock" className="w-24 h-24 rounded-xl shadow-md"></img>
            </div>)
    }
}

export default Computer;
