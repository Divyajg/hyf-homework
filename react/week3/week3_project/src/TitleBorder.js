import React from "react";

function TitleBorder(props) {
  const child = props.children;
  const styleHeader = { border: "2px solid black", margin: "1em" };
  return <div style={styleHeader}>{child}</div>;
}
export default TitleBorder;
