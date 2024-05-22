import axios from "axios"
import { useEffect } from 'react';
import React, { useState } from 'react'
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/esm/Button';
console.log(import.meta.env.VITE_TMDB_API_KEY);

const Playground = () => {
    // popularMovies
    const [popularMovies, setPopularMovies] = useState(null)
    //isLoading
    const [isLoading, setIsLoading] = useState(true)
    //IsError
    const [isError, setIsError] = useState(false)


    useEffect(() => {
      async function fetchPopularMovies(){
        const options = {
          method: "GET",
          url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${
              import.meta.env.VITE_TMDB_API_KEY
            }`,
          }
        };
        try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&page=1&api_key=${import.meta.env.VITE_TMDB_API_KEY}`
        );
        setPopularMovies(response.data);
          // console.log(response);
        } catch (error) {
          setIsError(true)
          console.log(error);
        } finally {
          setIsLoading(false)
        }

      }
      fetchPopularMovies();
    },[]);

    if(isLoading){
      return (
      <Container>
        <h1>Loading....</h1>
      </Container>
      )
    }
    if(isError){
      return (
      <Container>
      <h1>Error ....</h1>
    </Container>
      )
    }
    console.log(popularMovies);
  return (
    <Container className='py-5'>
        <Button variant='primary'>Primary</Button>
    </Container>
  )
}

export default Playground