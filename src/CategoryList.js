import React from "react";
// import TodoItem from "./TodoItem";
import _ from "underscore";
import List from "@material-ui/core/List";
import Item from "./Item";
import { Container, Divider, ListItem, ListItemText } from "@material-ui/core";

export default function CategoryList(props) {
  // const resources = props.data.filter(
  //   resource => resource.city.toLowerCase() === props.city.toLowerCase()
  // );
  // const categories = props.resources.reduce((reducer, accumulator) => {
  //   reducer[accumulator.category] = reducer[accumulator.category] || [];
  //   reducer[accumulator.category].push(accumulator);
  //   return reducer[accumulator.category];
  // }, {});
  const categories = _.groupBy(props.resources, resource => resource.category);
  const keys = Object.keys(categories);
  // console.log(categories[keys[0]]);
  // console.log(keys);
  return (
    <div>
      <Container
        maxWidth="sm"
        fixed="true"
        style={{ paddingLeft: "0", paddingRight: "0" }}
      >
        {props.resources.length > 0 && (
          <List component="nav" aria-label="main mailbox folders">
            {keys.map(key => {
              return <Item category={key} items={categories[key]} />;
            })}
          </List>
        )}
        {props.resources.length === 0 && (
          <ListItem>
            <ListItemText primary="City not found!" />
          </ListItem>
        )}
      </Container>
      <Divider />
    </div>
  );
}
