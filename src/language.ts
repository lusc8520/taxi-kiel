
export function getLanguageByString(s: string): SomeLanguage {

    if (s.startsWith("de")) return  german
    return english
}

type SomeLanguage = {
    mail: string
    clickHere: string
}

export const german: SomeLanguage = {
    mail: "mailto: examplename@web.de?subject=Taxi Anfrage&body=Hallo Yousef, ich brauche ein Taxi!%0A%0AUhrzeit:%0A%0AAbholort:%0A%0AZielort:%0A%0AMeine Nummer:%0A%0AName:%0A%0ASonstiges:",
    clickHere: "Klicke hier um anzurufen"
}

export const english: SomeLanguage = {
    mail: "mailto: examplename@web.de?subject=Taxi Request&body=Hello Yousef, I need a Taxi!%0A%0ATime:%0A%0APickup Location:%0A%0ADestination:%0A%0AMy Phone Number:%0A%0AName:%0A%0AOther:",
    clickHere: "Click here to call"
}