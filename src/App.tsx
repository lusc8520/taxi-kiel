import getLanguage from "./language.ts";
import Style from "./types.ts";


function App() {

    const {mailHref, callMe, mailMe} = getLanguage()

    return (
        <div style={rootStyle}>
            <div style={titleWrapperStyle}>
                <div style={taxiStyle}>
                    Taxi
                </div>
                <div style={kielStyle}>
                    Kiel
                </div>
            </div>

            <div style={callWrapperStyle}>
                <a href="tel: +49 1234 1234567" style={callButtonStyle}>{callMe}</a>
                <div style={phoneNumberStyle}>+49 1234 1234567</div>
            </div>

            <div style={mailWrapperStyle}>
                <div style={mailStyle}>examplename@web.de</div>
                <a href={mailHref} style={mailButtonStyle}>{mailMe}</a>
            </div>

        </div>
    )
}

const rootStyle: Style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5rem",
    height: "100svh",
    width: "100svw",
    boxSizing: "border-box",
    backgroundColor: "#020419",
    color: "white",
    paddingTop: "1.5rem",
    fontFamily: "sans-serif"
}
const titleWrapperStyle: Style = {
    fontWeight: "bold",
    border: "yellow solid 1px",
    borderRadius: "0.5rem",
    overflow: "hidden",
    backgroundColor: "yellow",
    color: "black",
    display: "flex",
    fontSize: "40px",
    lineHeight: "1"
}

const taxiStyle: Style = {
    padding: "0.5rem"
}

const kielStyle: Style = {
    backgroundColor: "#020419",
    color: "white",
    padding: "0.5rem"
}


const callWrapperStyle: Style = {
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "black"
}

const callButtonStyle: Style = {
    padding: "0.5em 1em",
    fontWeight: "bold",
    fontSize: "23px",
    cursor: "pointer",
    backgroundColor: "yellow",
    borderRadius: "1em",
    borderWidth: "0px",
    width: "320px",
    textAlign: "center",
    textDecoration: "none",
    color: "black"
}

const phoneNumberStyle: Style = {
    backgroundColor: "yellow",
    padding: "0 1rem",
    borderEndStartRadius: "1em",
    borderEndEndRadius: "1em",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "1.25",
    borderTop: "1px solid black",
    textAlign: "center",
    width: "212px"
}

const mailWrapperStyle: Style = {
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "black"
}

const mailStyle: Style = {
    backgroundColor: "lightcyan",
    lineHeight: "1.25",
    padding: "0 1rem",
    fontWeight: "bold",
    fontSize: "16px",
    borderStartStartRadius: "1em",
    borderStartEndRadius: "1em",
    borderBottom: "1px solid black",
    textAlign: "center",
    width: "212px"
}

const mailButtonStyle: Style = {
    padding: "0.5em 1em",
    fontWeight: "bold",
    fontSize: "23px",
    cursor: "pointer",
    backgroundColor: "lightcyan",
    borderRadius: "1em",
    borderWidth: "0px",
    width: "320px",
    textAlign: "center",
    textDecoration: "none",
    color: "black"
}


export default App
