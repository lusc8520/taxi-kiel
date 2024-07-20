
function getLanguage(): Language {
    if (navigator.language.startsWith("de")) return german
    return english
}

type Language = {
    mailHref: string
    callMe: string
    mailMe: string

}

const german: Language = {
    mailHref: "mailto: examplename@web.de?subject=Taxi Anfrage&body=Hallo Yousef, ich brauche ein Taxi!%0A%0ADatum:%0A%0AUhrzeit:%0A%0AAbholort:%0A%0AZielort:%0A%0AMeine Nummer:%0A%0AName:%0A%0ASonstiges:",
    callMe: "Tippe hier um anzurufen",
    mailMe: "Schreibe mir eine Mail"
}

const english: Language = {
    mailHref: "mailto: examplename@web.de?subject=Taxi Request&body=Hello Yousef, I need a Taxi!%0A%0ADate:%0A%0ATime:%0A%0APickup Location:%0A%0ADestination:%0A%0AMy Phone Number:%0A%0AName:%0A%0AOther:",
    callMe: "Tap here to call",
    mailMe: "E-Mail me"
}

export default getLanguage