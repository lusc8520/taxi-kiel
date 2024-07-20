import getTaxiKielLanguageByString from "./taxiKielLanguage.ts";
import TaxiKielStyle from "./taxiKielTypes.ts";


function TaxiKielApp() {

    const taxiKielLanguage = getTaxiKielLanguageByString(navigator.language)
    const {taxiKielMail, taxiKielClickHere} = taxiKielLanguage

    return (
        <div style={rootStyle}>
            <div style={titleStyle}>Taxi Kiel</div>

            <a style={linkStyle1} href="tel: +49 1234 1234567">
                <button style={buttonStyle}>{taxiKielClickHere}</button>
                <div style={phoneNumberStyle}>+49 1234 1234567</div>
            </a>

            <a style={linkStyle2} href={taxiKielMail}>
                <div style={mailStyle}>
                    examplename@web.de
                </div>
            </a>
        </div>
    )
}

const titleStyle: TaxiKielStyle = {
    lineHeight: "1",
    fontSize: "40px"
}

const mailStyle: TaxiKielStyle = {
    color: "white"
}

const linkStyle1: TaxiKielStyle = {
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "black"
}

const phoneNumberStyle: TaxiKielStyle = {
    color: "black",
    backgroundColor: "yellow",
    padding: "0 1em",
    borderRadius: "0 0 1em 1em",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "1.25",
    userSelect: "text",
    borderTop: "1px solid black"
}

const linkStyle2: TaxiKielStyle = {
    textDecoration: "none"
}

const buttonStyle: TaxiKielStyle = {
    padding: "0.5em 1em",
    fontWeight: "bold",
    fontSize: "23px",
    cursor: "pointer",
    backgroundColor: "yellow",
    borderRadius: "1em",
    borderWidth: "0px",
    minWidth: "300px"
}

const rootStyle: TaxiKielStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    height: "100svh",
    width: "100svw",
    boxSizing: "border-box",
    backgroundColor: "#020419",
    color: "white",
    padding: "1.5rem 0",
    fontFamily: "sans-serif"
}

export default TaxiKielApp
