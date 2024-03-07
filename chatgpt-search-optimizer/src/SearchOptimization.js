import React, { useState } from 'react';
  import axios from 'axios';

  const SearchOptimization = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState('');

    const handleSearch = async () => {
      try {
        const response = await axios.post('/search-optimization', { query });
        setResults(response.data);
      } catch (error) {
        console.error('Error fetching optimized results:', error);
      }
    };

    return (
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter search query"
        />
        <button onClick={handleSearch}>Optimize Search</button>
        <div>{results}</div>
      </div>
    );
  };

  export default SearchOptimization;