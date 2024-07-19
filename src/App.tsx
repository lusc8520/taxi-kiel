import {CSSProperties} from "react";
import {getLanguageByString} from "./language.ts";



function App() {

    const language = getLanguageByString(navigator.language)

  return (
      <div style={rootStyle}>
          <div style={titleStyle}>Taxi Kiel</div>

          <a style={linkStyle1} href="tel: +49 1234 1234567">
              <button style={buttonStyle}>{language.clickHere}</button>
              <div style={phoneNumberStyle}>+49 1234 1234567</div>
          </a>

          <a style={linkStyle2}
             href={language.mail}>
              <div style={mailStyle}>
                  examplename@web.de
              </div>
          </a>
      </div>
  )
}

const titleStyle: CSSProperties = {
    lineHeight: "1",
    fontSize: "xx-large"
}

const mailStyle: CSSProperties = {
    color: "white"
}

const linkStyle1: CSSProperties = {
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "black"
}

const phoneNumberStyle: CSSProperties = {
    color: "black",
    backgroundColor: "yellow",
    padding: "0 1em",
    borderRadius: "0 0 1em 1em",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "1.25",
    userSelect: "text"
}

const linkStyle2: CSSProperties = {
    textDecoration: "none"
}

const buttonStyle: CSSProperties = {
    padding: "0.5em 1em",
    fontWeight: "bold",
    fontSize: "23px",
    cursor: "pointer",
    backgroundColor: "yellow",
    borderRadius: "1em",
    borderWidth: "0px",
    minWidth: "300px"
}

const rootStyle: CSSProperties = {
  display: "flex",
  flexDirection : "column",
    alignItems: "center",
  gap: "1rem",
  height: "100svh",
  width: "100svw",
  boxSizing: "border-box",
  backgroundColor: "#020419",
  color: "white",
  padding: "1rem 0",
  fontFamily: "sans-serif",
}

export default App
