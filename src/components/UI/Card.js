import "./Card.css";

// Composition for border-radius and box-shadow
const Card = props => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>; // children is a reserved name(prop). The value of this prop will be the content between opening and closing tags of the custom component.
}

export default Card;
