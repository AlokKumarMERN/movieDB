import React from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import useFetch from './useFetch';
import { Card, Col, Row } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

const SingleMovie = () => {
  const {id} = useParams();
  const {isLoading, error, data} = useFetch(false, id)

  if(isLoading){
    return (
      <Container>
        <Spinner animation="grow" />
        <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
          </Container>
    )
  }
  if(error.show){
    return <h1>Error.....</h1>
  }

  console.log(data);

  const {title, tagline, overview, poster_path, backdrop_path, genres, release_date, runtime, status, popularity} = data


  return <main>
    <Container>
      <Row xs={2} md={4} xl={5} className="g-4">
            <Col key={id}>
              <Card className="border-0">
                <Card.Img
                  variant="top"
                  className="rounded-4"
                  src={`${poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : "not found"}`}
                />
                <Card.Body className="py-1 px-1">
                  <Card.Text
                  className="movie-card-title mb-0">
                    {title}</Card.Text>
                    <Card.Text>{release_date}</Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>
      </Row>
      <h1 className='display-1'>{title}<span className='fs-5'>{runtime}m</span></h1>
      <h3 className='lead mb-4'>{tagline}</h3>
      <p>{overview}</p>


    </Container>
  </main>
}

export default SingleMovie
