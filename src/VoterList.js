// src/VoterList.js
import React from 'react';

const VoterList = ({ voters, onRemoveVoter }) => {
  return (
    <ul>
      {voters.map((voter) => (
        <li key={voter} onClick={() => onRemoveVoter(voter)}>
          {voter}
        </li>
      ))}
    </ul>
  );
};

export default VoterList;
