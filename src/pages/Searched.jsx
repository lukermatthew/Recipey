import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Searched = () => {
  const [searchResult, setSearchResult] = useState([]);
  const params = useParams();

  const getSearchResult = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=cc52b951be174449a9bcb86524a57447&query=${name}`
    );
    const recipes = await data.json();
    setSearchResult(recipes.results);
  };

  useEffect(() => {
    getSearchResult(params.search);
    // console.log(params.type);
  }, [params.search]);

  const name = params.search;

  return (
    <div>
      <h3>Search Result: {name}</h3>
      <Grid>
        {searchResult.map((item) => (
          <SLink to={"/recipe/" + item.id}>
            <Card key={item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Card>
          </SLink>
        ))}
      </Grid>
    </div>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  grid-gap: 1rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

const SLink = styled(Link)`
  text-decoration: none;
`;

export default Searched;
