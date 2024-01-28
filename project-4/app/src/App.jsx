import { useEffect, useState } from "react";
import styled from "styled-components";

import SearchResult from "./components/SearchResult/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState(null);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setFilteredData(json);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchFood();
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;
    if (searchValue == "") {
      setFilteredData(null);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    console.log(filter);
    setFilteredData(filter);
  };

  const buttons = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  const filterFood = (type) => {
    if (type == "all") {
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );

    setFilteredData(filter);
    setSelectedBtn(type);
  };

  return (
    <MainComponent>
      <TopComponent>
        <div className="image">
          <img src="./logo.svg" alt="logo" />
        </div>
        <input
          onChange={searchFood}
          className="search"
          placeholder="Search Food"
        />
      </TopComponent>
      <FilterContainer>
        {buttons.map((value) => (
          <Button key={value.name} onClick={() => filterFood(value.type)}>
            {value.name}
          </Button>
        ))}
      </FilterContainer>
      <SearchResult data={filteredData} />
    </MainComponent>
  );
};

const MainComponent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`;
const TopComponent = styled.div`
  height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    background-color: transparent;
    border: 1px solid red;
    width: 285px;
    height: 40px;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    padding: 0 10px;
  }

  @media (0 < width < 800px) {
    flex-direction: column;
    height: 120px;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  background-color: red;
  border-radius: 5px;
  color: white;
  padding: 5px 12px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #8a2020;
  }
`;

export default App;
