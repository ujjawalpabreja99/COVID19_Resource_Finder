import React, { useState, useEffect } from "react";
import axios from "axios";
import InputCity from "./InputCity";
import CategoryList from "./CategoryList";
import { Container, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: "600px",
    maxWidth: "600px",
    borderRadius: "5px",
    padding: "5px",
    paddingTop: "0"
  }
}));

export default function App() {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("Delhi");
  useEffect(() => {
    console.log("FETCHING");
    const fetchData = async () => {
      const result = await axios(
        "https://api.covid19india.org/resources/resources.json"
      );
      // console.log(result.data.resources);
      setData(result.data.resources);
    };
    fetchData();
  }, [city]);

  const submitCity = e => {
    e.preventDefault();
    // console.log(e.target.city);
    setCity(e.target.city.value);
  };

  const filterData = () => {
    return data.filter(
      resource => resource.city.toLowerCase() === city.toLowerCase()
    );
  };

  const classes = useStyles();
  return (
    <Container maxWidth="sm" fixed="true" className={classes.root}>
      <InputCity submitCity={submitCity} />
      <Divider />
      <CategoryList resources={filterData()} />
    </Container>
  );
}
