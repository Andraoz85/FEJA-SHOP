"use client";
import React, { createContext, useContext, useState } from "react";
import { Product } from "@/interfaces/Product";

interface SearchContextType {
  query: string;
  setQuery: (query: string) => void;
  results: Product[];
  setResults: (results: Product[]) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Product[]>([]);

  return (
    <SearchContext.Provider value={{ query, setQuery, results, setResults }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}
