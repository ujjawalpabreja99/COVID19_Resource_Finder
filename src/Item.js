import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import { Link } from "@material-ui/core";

export default function Item(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const [expanded, setExpanded] = React.useState("");

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  let currentId = 0;
  const items = props.items.map(item => {
    currentId++;
    return { ...item, id: currentId };
  });
  return (
    <div>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <ArrowRightAltIcon />
        </ListItemIcon>
        <ListItemText primary={props.category} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {items.map(item => (
          <ExpansionPanel
            square
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}
          >
            <ExpansionPanelSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>{item.nameoftheorganisation}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Description : {item.descriptionandorserviceprovided} <br />
                Contact : {item.phonenumber} <br />
                <Link href={item.contact}>Click here</Link> for more details{" "}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </Collapse>
    </div>
  );
}
