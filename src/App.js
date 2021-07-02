import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';

import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friendsData from './data/friends.json';
import transactionData from './data/transactions.json';

function App() {
  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div style={{ marginBottom: 20 }}>
        <Statistics title="Upload stats" stats={statisticalData} />
      </div>
      <div style={{ marginBottom: 20 }}>
        <Statistics stats={statisticalData} />
      </div>
      <div style={{ marginBottom: 20 }}>
        <FriendList friends={friendsData} />
      </div>
      <div style={{ marginBottom: 20 }}>
        <TransactionHistory items={transactionData} />
      </div>
    </>
  );
}

export default App;
