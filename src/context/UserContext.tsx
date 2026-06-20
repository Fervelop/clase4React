import { createContext, useState } from "react";
import type { ReactNode } from "react";

interface User {
  name: string;
  email: string;
  rol: string;
}


interface UserContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}


// Creamos el contexto
export const UserContext = createContext<UserContextType | undefined>(undefined);



interface UserProviderProps {
  children: ReactNode;
}



export function UserProvider({ children }: UserProviderProps) {


  const [user, setUser] = useState<User | null>(null);



  const login = (userData: User) => {

    setUser(userData);

  };



  const logout = () => {

    setUser(null);

  };



  return (

    <UserContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >

      {children}

    </UserContext.Provider>

  );

}