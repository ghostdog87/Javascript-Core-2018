solve(["Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200" ] );


function solve(input){
    let result = {};

    for (const string of input) {
        let [country, town, price] = string.split(' > ');

        town = town.charAt(0).toUpperCase() + town.slice(1);

        if (!result.hasOwnProperty(country)) {
            result[country] = {};
            result[country][town] = Number(price);
        }
        else {
            if (!result[country].hasOwnProperty(town)) {
                result[country][town] = Number(price);
            }
            else{
                if (result[country][town] > Number(price)) {
                    result[country][town] = Number(price);
                }
            }

        }
    }
    let sortedCountries = Object.keys(result).sort((g1, g2) => {
        return g1.localeCompare(g2);
    });

    for(const currCountry of sortedCountries){

        let sortedTowns = Object.keys(result[currCountry]).sort((i1, i2) => {
            return result[currCountry][i1] - result[currCountry][i2];
        });
        let towns = [];
        for(const currTown of sortedTowns){
            towns.push(`${currTown} -> ${result[currCountry][currTown]}`);
        }
        console.log(`${currCountry} -> ${towns.join(" ")}`);
    }
}