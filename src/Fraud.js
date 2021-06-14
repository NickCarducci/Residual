import React from "react";

class Fraud extends React.Component {
  state = {};
  render() {
    return (
      <div
        style={{
          overflowX: "auto",
          overflowY: "hidden",
          display: "flex",
          position: "relative",
          left: "0px",
          flexDirection: "column",
          fontSize: "16px",
          width: "100%",
          transition: ".3s ease-out",
          height: "590px"
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "min-content",
            height: "570px",
            left: "0px"
          }}
        >
          <iframe
            style={{
              width: "100vw",
              minWidth: "350px",
              height: "570px"
            }}
            title="d"
            src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=EJjd&width=350&height=500`}
            scrolling="no"
            className="embed-container1"
          />
        </div>
      </div>
    );
  }
}
export default Fraud;
