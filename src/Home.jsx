import React from 'react'
import { Container } from 'react-bootstrap';
import SearchForm from "./SearchForm";
import { useState } from 'react';
import useFetch from "./useFetch";
import Movies from './Movies';

const Home = () => {

  const [query, setQuery] = useState("Batman");
  const [page, setrPage] = useState(1);

  const {isLoading, error, data} = useFetch(true, `query=${query}&page=${page}`);
  
  return <main>
  
      <Container> 
        <SearchForm query={query} setQuery={setQuery} />
          <h1>{query}</h1>
          <Movies isLoading={isLoading} error={error} data={data}/>
       


      </Container>
    </main>
}
 
export default Home
 