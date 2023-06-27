import { createContext, useState } from 'react';

// as the actual value you want to Access
export const UserContext = createContext({
  currentUser: null,
  SetCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, SetCurrentUser] = useState(null);
  const value = { currentUser, SetCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
