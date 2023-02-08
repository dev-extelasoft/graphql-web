import './App.css';
import { useQuery, gql } from '@apollo/client';

const GET_USERS = gql`
    query {
        findUsers {
            data {
                email
                userId
                role
            }
        }
    }
`;

function DisplayUsers() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  <h4>Total Users {data.findUsers.count}</h4>

  return (
    <>
      <h4>Total Users: { data.findUsers.count }</h4>
      {data.findUsers.data.map(({userId, email, role}) => (
        <div>
          <p>UserId: {userId}</p>
          <p>Email: {email}</p>
          <p>Role {role}</p>
        </div>
      ))}
    </>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DisplayUsers/>
      </header>
    </div>
  );
}

export default App;
