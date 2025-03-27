"use client";

import SearchResults from "@/components/SearchResults";
import { useSearch } from "@/context/searchContext";

export default function SearchPage() {
  const { query } = useSearch();

  return (
    <div>
      <h1 className="text-2xl mt-12 font-bold mb-4">
        {query ? `Search results for "${query}"` : "Search"}
      </h1>
      <SearchResults />
    </div>
  );
}
