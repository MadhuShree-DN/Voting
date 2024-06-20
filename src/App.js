// src/App.js
import React, { useState } from 'react';
import './App.css';
import PartyContainer from './PartyContainer';

const App = () => {
  const [voters, setVoters] = useState(['Madhu', 'Siri', 'Shreya', 'Nisarga', 'Harini']);
  const [votes, setVotes] = useState({ JDS: 0, BJP: 0, INC: 0 });

  const handleVote = (partyName, voter) => {
    setVotes({ ...votes, [partyName]: votes[partyName] + 1 });
    setVoters(voters.filter(v => v !== voter));
  };

  const getWinner = () => {
    const maxVotes = Math.max(...Object.values(votes));
    const winners = Object.keys(votes).filter(party => votes[party] === maxVotes);
    return winners.length > 1 ? 'Tie' : winners[0];
  };

  return (
    <div className="App">
      <h1>VOTING</h1>
      <div className="party-containers">
        <PartyContainer partyName="JDS" voters={voters} onVote={handleVote} />
        <PartyContainer partyName="BJP" voters={voters} onVote={handleVote} />
        <PartyContainer partyName="INC" voters={voters} onVote={handleVote} />
      </div>
      <h2>Votes:</h2>
      <div className="votes">
        <p>JDS: {votes.JDS}</p>
        <p>BJP: {votes.BJP}</p>
        <p>INC: {votes.INC}</p>
      </div>
      <h2>Winner: {getWinner()}</h2>
    </div>
  );
};

export default App;
