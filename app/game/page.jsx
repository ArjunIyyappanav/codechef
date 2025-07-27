'use client';
import React,{Suspense} from 'react'
import Link from 'next/link'
import {useState} from 'react'
import Play from '../components/Player';
import Computer from '../components/Computer';

const Game = () => {
  const [choice,setChoice]=useState(0);
  const [wins,setWins]=useState(0);
  const [losses,setlosses]=useState(0);
  const [ties,setties]=useState(0);
  const [number,setnumber]=useState(0);
  function computer(){
    setnumber(Math.ceil(Math.random()*5));
  }
  function result(){
  if(choice==number){
        setties(t=>t+1)
  }else if(choice==1&&number==3){
        setWins(w=>w+1);
  }else if(choice==2&&number==1){
        setWins(w=>w+1);
  }else if(choice==3&&number==2){
        setWins(w=>w+1);
  }else if(choice==1&&number==4){
        setWins(w=>w+1);
  }else if(choice==4&&number==5){
        setWins(w=>w+1);
  }else if(choice==5&&number==3){
        setWins(w=>w+1);
  }else if(choice==3&&number==4){
        setWins(w=>w+1);
  }else if(choice==4&&number==2){
        setWins(w=>w+1);
  }else if(choice==2&&number==5){
        setWins(w=>w+1);
  }else if(choice==5&&number==1){
        setWins(w=>w+1); }   
  else{
        setlosses(l=>l+1);
  }
}
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Rock Paper Scissor Lizard Spock</h1>
      <img src="/rules.jpg" className="w-72 rounded-xl shadow-md mb-6"></img>
      <p></p>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <img src="/rock.jpg" onClick={()=>{setChoice(1),result(),computer()}} className="w-24 h-24 cursor-pointer hover:scale-105 transition-transform rounded-xl shadow"></img>
        <img src="/paper.jpg" onClick={()=>{setChoice(2),result(),computer()}} className="w-24 h-24 cursor-pointer hover:scale-105 transition-transform rounded-xl shadow"></img>
        <img src="/scissors.jpg" onClick={()=>{setChoice(3),result(),computer()}} className="w-24 h-24 cursor-pointer hover:scale-105 transition-transform rounded-xl shadow"></img>
        <img src="/lizard.jpg" onClick={()=>{setChoice(4),result(),computer()}} className="w-24 h-24 cursor-pointer hover:scale-105 transition-transform rounded-xl shadow"></img>
        <img src="/spock.jpg" onClick={()=>{setChoice(5),result(),computer()}} className="w-24 h-24 cursor-pointer hover:scale-105 transition-transform rounded-xl shadow"></img>
      </div>
      <div className="flex gap-10 mb-8">
        <Play player={choice}/>
        <Computer player={number}/>
      </div>
      <Link href={{pathname:'/score',query:{wins,losses,ties}}} className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">Get Result</Link>            
    </div>
  )
}

export default Game
