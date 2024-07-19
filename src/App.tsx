import {CSSProperties} from "react";

function App() {

  return (
      <div style={rootStyle}>
        <div style={titleStyle}>Taxi Kiel</div>

          <a href="mailto: examplename@web.de">
              <div>
                  examplename@web.de
              </div>
          </a>

          <a href="tel: 123">
              <button>Click here to call</button>
          </a>
        <div>Tel</div>
      </div>
  )
}

const titleStyle: CSSProperties = {
  lineHeight: "1",
  fontSize: "xx-large"
}

const rootStyle: CSSProperties = {
  display: "flex",
  flexDirection : "column",
  gap: "1rem",
  height: "100svh",
  width: "100svw",
  boxSizing: "border-box",
  backgroundColor: "#020419",
  color: "white",
  alignItems: "center",
  padding: "0.5rem",
  fontFamily: "sans-serif",
}

export default App
