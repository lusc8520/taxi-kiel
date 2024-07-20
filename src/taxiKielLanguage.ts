
function getTaxiKielLanguageByString(taxiKielString: string): TaxiKielLanguage {
    if (taxiKielString.startsWith("de")) return taxiKielGerman
    return taxiKielEnglish
}

export type TaxiKielLanguage = {
    taxiKielMail: string
    taxiKielClickHere: string
}

export const taxiKielGerman: TaxiKielLanguage = {
    taxiKielMail: "mailto: examplename@web.de?subject=Taxi Anfrage&body=Hallo Yousef, ich brauche ein Taxi!%0A%0AUhrzeit:%0A%0AAbholort:%0A%0AZielort:%0A%0AMeine Nummer:%0A%0AName:%0A%0ASonstiges:",
    taxiKielClickHere: "Tippe hier um anzurufen"
}

export const taxiKielEnglish: TaxiKielLanguage = {
    taxiKielMail: "mailto: examplename@web.de?subject=Taxi Request&body=Hello Yousef, I need a Taxi!%0A%0ATime:%0A%0APickup Location:%0A%0ADestination:%0A%0AMy Phone Number:%0A%0AName:%0A%0AOther:",
    taxiKielClickHere: "Tap here to call"
}

export default getTaxiKielLanguageByString