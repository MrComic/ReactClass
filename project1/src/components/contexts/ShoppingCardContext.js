import React, { useEffect, useState } from "react";

export const ShoppingCardContext = React.createContext();

const useStateWithLocalStorage_Array = (localStorageKey) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) == null
      ? []
      : JSON.parse(localStorage.getItem(localStorageKey))
  );

  React.useEffect(() => {
    localStorage.setItem("Card", JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export const ShoppingCardProvider = (props) => {
  const [cards, setCards] = useStateWithLocalStorage_Array("Card");

  return (
    <ShoppingCardContext.Provider value={[cards, setCards]}>
      {props.children}
    </ShoppingCardContext.Provider>
  );
};
