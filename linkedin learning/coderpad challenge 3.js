// Piss fucking easy compared to the previous two

// JavaScript code​​​​​​‌‌‌‌‌‌​​‌‌​‌‌​​‌​​​‌​​​​‌ below
// Change these boolean values to control whether you see
// the expected answer and/or hints.
const showExpectedResult = false;
const showHints = false;

const countryData = {
    name: 'France',
    continent: 'Europe',
    currency: 'Euro',
    population: '67.75 million'
}

// Your code goes here

class Country {
    constructor(name, continent, currency, population) {
        this.name = name;
        this.continent = continent;
        this.currency = currency;
        this.population = population;
    }

    getOverview() {
        return `${this.name} is a country in ${this.continent}. Its currency is the ${this.currency} and it has a current population of ${this.population} people.`
    }

    setPopulation(newPopulation) {
        this.population = newPopulation;
    }
}
