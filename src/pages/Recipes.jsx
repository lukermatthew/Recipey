import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Recipes = () => {
  const params = useParams();

  const [details, setDetails] = useState({});
  const [active, setActive] = useState("instructions");

  const fetchRecipes = async () => {
    const fetchApi = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=cc52b951be174449a9bcb86524a57447`
    );
    const data = await fetchApi.json();
    setDetails(data);
  };

  useEffect(() => {
    fetchRecipes();
  }, [params.id]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button
          className={active === "instructions" ? "active" : ""}
          onClick={() => setActive("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={active === "ingredients" ? "active" : ""}
          onClick={() => setActive("ingredients")}
        >
          Ingredients
        </Button>

        <div>
          {active === "instructions" ? (
            <>
              <h4 dangerouslySetInnerHTML={{ __html: details.summary }}></h4>
              <h4
                dangerouslySetInnerHTML={{ __html: details.instructions }}
              ></h4>
            </>
          ) : (
            <ul>
              {details.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          )}
        </div>
      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #333, #079bf0);
    color: #fff;
  }
  h2 {
    margin-bottom: 2rem;
  }
  h4 {
    margin-top: 2rem;
    font-size: medium;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }

  img {
    width: 30rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: #fff;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 5rem;
`;

export default Recipes;
