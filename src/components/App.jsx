
import React from 'react';
import Profile from './Profile/Profile';
import user from '../components/user.json';
import Statistics from './Statistics/Statistics';
import data from './Statistics/data.json';
import FriendList from './Friends/FriendList';
import friends from './Friends/friends.json'; 
import TransactionHistory from './Transactions/TransactionHistory';
import transactions from './Transactions/transactions.json';

const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends.slice(0, 5)} />

      <TransactionHistory items={transactions} />

    </div>
  );
};

export default App;


