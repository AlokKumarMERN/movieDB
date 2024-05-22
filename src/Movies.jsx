import { Card, Row ,Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import Placeholder from 'react-bootstrap/Placeholder';
import { useInfiniteQuery } from "react-query";

const Movies = ({ isLoading, error, data }) => {
  const loadingArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

  if (isLoading) {
    return (
      <section>
      <Row xs={2} md={4} xl={5} className="g-4">
        {loadingArray.map((el) =>(
            <Col key={el}>
              <Card className="border-0">
                <Card.Img
                  variant="top"
                  className="rounded-4"
                  src={`/img/noImg.png`}
                />
                <Card.Body className="py-1 px-1">
                  <Placeholder as={Card.Text} animation="glow" className="mb-0">
                    <Placeholder xs={8} />
                  </Placeholder>

                  <Placeholder as={Card.Text} animation="glow" className="mb-0">
                    <Placeholder xs={4} />
                  </Placeholder>
                </Card.Body>
              </Card>
            </Col>
            )
          )
        }
      </Row>
    </section>
    );
  }
  if (error.show) {
    return <h1>{error.message}</h1>;
  }
  console.log(data);
  return (
    <section>
      <Row xs={2} md={4} xl={5} className="g-4">
        {data.results.map(({id, poster_path, title, release_date}) =>(
            <Col key={id}>
              <Card className="border-0">
                <Card.Img
                  variant="top"
                  className="rounded-4"
                  src={`${poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : "not found"}`}
                />
                <Card.Body className="py-1 px-1">
                  <Link to={`/movies/${id}`}>
                  <Card.Text
                  className="movie-card-title mb-0">
                    {title}</Card.Text>
                  </Link>
                    <Card.Text>{release_date}</Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>
            )
          )
        }
      </Row>
    </section>
  );
};

export default Movies;
