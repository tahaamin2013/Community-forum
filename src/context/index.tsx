"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type ContextType = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
};

const initialState = {
  loading: false,
  setLoading: () => {},
  setFormData: () => {},
  searchQuery: "",
  setSearchQuery: () => {},
  searchResults: [],
  setSearchResults: () => {},
};

export const GlobalContext = createContext<ContextType>(initialState);

export default function GlobalState({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        loading,
        setLoading,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}