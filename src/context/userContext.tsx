import React, { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { setUserCart, setName } from "../store/userCartSlice";
export interface User {
  displayName: string;
  email: string;
  photoURL: string | null;
}

interface UserContext {
  userContext: User;
  updateUserContext: (user: User) => void;
  signOutUserContext: () => void;
}

interface Props {
  children: React.ReactNode;
}

const initialUser: User = {
  displayName: "",
  email: "",
  photoURL: null,
};

export const UserContext = createContext<UserContext>({
  userContext: initialUser,
  updateUserContext: () => {},
  signOutUserContext: () => {},
});

export const UserContextProvider: React.FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.persisted.cart.items);
  const [userContext, setUserContext] = useLocalStorage("user", initialUser);

  const updateUserContext = (user: User) => {
    setUserContext(user);
  };

  const signOutUserContext = () => {
    dispatch(setUserCart(cart));
    dispatch(setName(userContext.displayName));
    setUserContext(initialUser);
  };

  const providerValue = {
    userContext,
    updateUserContext,
    signOutUserContext,
  };
  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
};
