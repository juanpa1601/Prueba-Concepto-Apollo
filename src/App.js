import { USERS } from './database/graphql/querys/users';
import client from './database/graphql/graphQL';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const getUsers = async () => {
    try {
      const response = await client.query({ query: USERS });
      setUsers(response.data.Users);
    } catch (error) {
      setError(error.toString());
    }
  };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      { users.length > 0 ? (
	      users.map((user,index) => (
		      <div key={index}>
			      <p>{user.name}</p>
			      <p>{user.email}</p>
		      </div>
	      ))
	    ) : (
		    <p>Mira lo que esta saliendo :c {error}</p>
	)
}

      



    </>
  );
};

export default App;
