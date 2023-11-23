// Session.js
import { createContext, useContext, useState } from 'react';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const setSession = (userData) => {
    setUser(userData);
  };

  const clearSession = () => {
    setUser(null);
  };

  return (
    <SessionContext.Provider value={{ user, setSession, clearSession }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  return useContext(SessionContext);
};