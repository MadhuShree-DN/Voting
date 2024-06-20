// src/PartyContainer.js
import React, { useState } from 'react';

const PartyContainer = ({ partyName, voters, onVote }) => {
  const handleVote = (voter) => {
    onVote(partyName, voter);
  };

  return (
    <div className="party-container">
      <h2>{partyName}</h2>
      <ul>
        {voters.map((voter) => (
          <li key={voter} onClick={() => handleVote(voter)}>
            {voter}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PartyContainer;
