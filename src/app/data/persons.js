import { NorthWest } from "@mui/icons-material";

let persons = [
    {
        "id": 1,
        "name": "Hiram Horton",
        "birthday": "1993-08-01",
        "sex": "MALE",
        "eyeColor": "BROWN",
        "hairColor": "BLACK",
        "weight": 104.57710840854816,
        "height": 179.15842197912397,
        "countryOfOrigin": {
            "id": 18,
            "name": "Ukraine",
            "continent": "EUROPE",
            "capital": "Kyiv",
            "population": 33365000,
            "square": 603628.0
        },
        "citizenship": {
            "id": 19,
            "name": "Philippines",
            "continent": "ASIA",
            "capital": "Manila",
            "population": 114163719,
            "square": 343448.0
        },
        "favoriteMeals": "apple,banana,pear,watermelon"
    },
    {
        "id": 2,
        "name": "Tom Wallace",
        "birthday": "1984-03-01",
        "sex": "FEMALE",
        "eyeColor": "BROWN",
        "hairColor": "YELLOW",
        "weight": 58.05205058698278,
        "height": 112.14023893589413,
        "countryOfOrigin": {
            "id": 1,
            "name": "USA",
            "continent": "NORTH_AMERICA",
            "capital": "Washington",
            "population": 334914895,
            "square": 8080470.0
        },
        "citizenship": {
            "id": 16,
            "name": "Greece",
            "continent": "EUROPE",
            "capital": "Athens",
            "population": 10413982,
            "square": 131957.0
        },
        "favoriteMeals": "banana,grape,watermelon,pear"
    },
    {
        "id": 3,
        "name": "Hubert Steiner",
        "birthday": "1982-07-23",
        "sex": "FEMALE",
        "eyeColor": "BROWN",
        "hairColor": "GREEN",
        "weight": 46.33445436735678,
        "height": 139.8286428333564,
        "countryOfOrigin": {
            "id": 20,
            "name": "Japan",
            "continent": "ASIA",
            "capital": "Tokyo",
            "population": 123970000,
            "square": 377975.0
        },
        "citizenship": {
            "id": 13,
            "name": "Czech Republic",
            "continent": "EUROPE",
            "capital": "Prague",
            "population": 10900555,
            "square": 78871.0
        },
        "favoriteMeals": "apple,banana,pear"
    },
    {
        "id": 4,
        "name": "Eugene Webb",
        "birthday": "2024-08-12",
        "sex": "FEMALE",
        "eyeColor": "GREEN",
        "hairColor": "BLUE",
        "weight": 49.19795241956954,
        "height": 174.3550392216892,
        "countryOfOrigin": {
            "id": 17,
            "name": "Italy",
            "continent": "EUROPE",
            "capital": "Rome",
            "population": 58853482,
            "square": 301340.0
        },
        "citizenship": {
            "id": 19,
            "name": "Philippines",
            "continent": "ASIA",
            "capital": "Manila",
            "population": 114163719,
            "square": 343448.0
        },
        "favoriteMeals": "apple,grape,pear,banana"
    },
    {
        "id": 5,
        "name": "Hubert Gleason",
        "birthday": "2009-05-19",
        "sex": "FEMALE",
        "eyeColor": "YELLOW",
        "hairColor": "RED",
        "weight": 94.68988297803719,
        "height": 134.62263108068527,
        "countryOfOrigin": {
            "id": 9,
            "name": "Belgium",
            "continent": "EUROPE",
            "capital": "Brussels",
            "population": 11697557,
            "square": 30689.0
        },
        "citizenship": {
            "id": 20,
            "name": "Japan",
            "continent": "ASIA",
            "capital": "Tokyo",
            "population": 123970000,
            "square": 377975.0
        },
        "favoriteMeals": "apple,pear,grape,watermelon"
    },
    {
        "id": 6,
        "name": "Jasper Ackerman",
        "birthday": "2005-03-21",
        "sex": "FEMALE",
        "eyeColor": "GRAY",
        "hairColor": "BLACK",
        "weight": 45.87640720631253,
        "height": 119.06762983570611,
        "countryOfOrigin": {
            "id": 14,
            "name": "Slovakia",
            "continent": "EUROPE",
            "capital": "Bratislava",
            "population": 5460185,
            "square": 49035.0
        },
        "citizenship": {
            "id": 1,
            "name": "USA",
            "continent": "NORTH_AMERICA",
            "capital": "Washington",
            "population": 334914895,
            "square": 8080470.0
        },
        "favoriteMeals": "apple,watermelon,banana"
    },
    {
        "id": 7,
        "name": "Tom Sorensen",
        "birthday": "2003-04-09",
        "sex": "FEMALE",
        "eyeColor": "GREEN",
        "hairColor": "BLUE",
        "weight": 136.51630846355815,
        "height": 108.6820075549665,
        "countryOfOrigin": {
            "id": 18,
            "name": "Ukraine",
            "continent": "EUROPE",
            "capital": "Kyiv",
            "population": 33365000,
            "square": 603628.0
        },
        "citizenship": {
            "id": 9,
            "name": "Belgium",
            "continent": "EUROPE",
            "capital": "Brussels",
            "population": 11697557,
            "square": 30689.0
        },
        "favoriteMeals": "apple,banana,pear,grape"
    },
    {
        "id": 8,
        "name": "Earl Nichols",
        "birthday": "2020-10-15",
        "sex": "FEMALE",
        "eyeColor": "GREEN",
        "hairColor": "BROWN",
        "weight": 134.42368367237648,
        "height": 222.44051844671378,
        "countryOfOrigin": {
            "id": 14,
            "name": "Slovakia",
            "continent": "EUROPE",
            "capital": "Bratislava",
            "population": 5460185,
            "square": 49035.0
        },
        "citizenship": {
            "id": 1,
            "name": "USA",
            "continent": "NORTH_AMERICA",
            "capital": "Washington",
            "population": 334914895,
            "square": 8080470.0
        },
        "favoriteMeals": "apple,grape,banana,pear"
    },
    {
        "id": 9,
        "name": "Joseph Cash",
        "birthday": "1982-04-24",
        "sex": "MALE",
        "eyeColor": "BLUE",
        "hairColor": "YELLOW",
        "weight": 139.21377345905339,
        "height": 162.6174985035886,
        "countryOfOrigin": {
            "id": 21,
            "name": "Peru",
            "continent": "SOUTH_AMERICA",
            "capital": "Lima",
            "population": 34352720,
            "square": 1285216.0
        },
        "citizenship": {
            "id": 4,
            "name": "Netherlands",
            "continent": "EUROPE",
            "capital": "Amsterdam",
            "population": 18072300,
            "square": 42531.0
        },
        "favoriteMeals": "pear,grape,watermelon"
    },
    {
        "id": 10,
        "name": "Mack Jensen",
        "birthday": "2019-07-21",
        "sex": "MALE",
        "eyeColor": "BLUE",
        "hairColor": "BROWN",
        "weight": 58.483818737839115,
        "height": 104.9374133410364,
        "countryOfOrigin": {
            "id": 19,
            "name": "Philippines",
            "continent": "ASIA",
            "capital": "Manila",
            "population": 114163719,
            "square": 343448.0
        },
        "citizenship": {
            "id": 3,
            "name": "Canada",
            "continent": "NORTH_AMERICA",
            "capital": "Ottawa",
            "population": 40769890,
            "square": 9984670.0
        },
        "favoriteMeals": "apple,grape,pear"
    },
    {
        "id": 11,
        "name": "Jasper Griffith",
        "birthday": "2010-09-01",
        "sex": "FEMALE",
        "eyeColor": "BLACK",
        "hairColor": "GRAY",
        "weight": 138.51122764771233,
        "height": 155.14199680771344,
        "countryOfOrigin": {
            "id": 12,
            "name": "Bulgaria",
            "continent": "EUROPE",
            "capital": "Sofia",
            "population": 6447710,
            "square": 110994.0
        },
        "citizenship": {
            "id": 16,
            "name": "Greece",
            "continent": "EUROPE",
            "capital": "Athens",
            "population": 10413982,
            "square": 131957.0
        },
        "favoriteMeals": "apple,pear,watermelon"
    },
    {
        "id": 12,
        "name": "Claude Kent",
        "birthday": "1985-09-10",
        "sex": "FEMALE",
        "eyeColor": "RED",
        "hairColor": "BROWN",
        "weight": 105.1422143214746,
        "height": 174.50563971243886,
        "countryOfOrigin": {
            "id": 12,
            "name": "Bulgaria",
            "continent": "EUROPE",
            "capital": "Sofia",
            "population": 6447710,
            "square": 110994.0
        },
        "citizenship": {
            "id": 7,
            "name": "Spain",
            "continent": "EUROPE",
            "capital": "Madrid",
            "population": 48592909,
            "square": 505994.0
        },
        "favoriteMeals": "banana,pear,apple,watermelon"
    },
    {
        "id": 13,
        "name": "Earl Newton",
        "birthday": "1989-07-23",
        "sex": "MALE",
        "eyeColor": "GREEN",
        "hairColor": "BROWN",
        "weight": 131.58049108021925,
        "height": 214.11106640221934,
        "countryOfOrigin": {
            "id": 5,
            "name": "Germany",
            "continent": "EUROPE",
            "capital": "Berlin",
            "population": 84607016,
            "square": 357600.0
        },
        "citizenship": {
            "id": 10,
            "name": "Poland",
            "continent": "EUROPE",
            "capital": "Warsaw",
            "population": 38036118,
            "square": 312696.0
        },
        "favoriteMeals": "watermelon,pear,apple,grape"
    },
    {
        "id": 14,
        "name": "Charley Ackerman",
        "birthday": "1991-04-04",
        "sex": "MALE",
        "eyeColor": "GREEN",
        "hairColor": "BLACK",
        "weight": 89.72745314346116,
        "height": 73.37337449475856,
        "countryOfOrigin": {
            "id": 18,
            "name": "Ukraine",
            "continent": "EUROPE",
            "capital": "Kyiv",
            "population": 33365000,
            "square": 603628.0
        },
        "citizenship": {
            "id": 1,
            "name": "USA",
            "continent": "NORTH_AMERICA",
            "capital": "Washington",
            "population": 334914895,
            "square": 8080470.0
        },
        "favoriteMeals": "apple,pear,watermelon,banana"
    },
    {
        "id": 15,
        "name": "Claude Adams",
        "birthday": "1988-11-08",
        "sex": "FEMALE",
        "eyeColor": "GRAY",
        "hairColor": "BLUE",
        "weight": 142.28364340771418,
        "height": 129.67904978740305,
        "countryOfOrigin": {
            "id": 8,
            "name": "Portugal",
            "continent": "EUROPE",
            "capital": "Lisbon",
            "population": 10467366,
            "square": 92230.0
        },
        "citizenship": {
            "id": 7,
            "name": "Spain",
            "continent": "EUROPE",
            "capital": "Madrid",
            "population": 48592909,
            "square": 505994.0
        },
        "favoriteMeals": "apple,watermelon,grape,banana"
    },
    {
        "id": 16,
        "name": "Oliver Summers",
        "birthday": "2007-09-24",
        "sex": "FEMALE",
        "eyeColor": "GREEN",
        "hairColor": "BLUE",
        "weight": 49.26488413119,
        "height": 155.4480249852781,
        "countryOfOrigin": {
            "id": 17,
            "name": "Italy",
            "continent": "EUROPE",
            "capital": "Rome",
            "population": 58853482,
            "square": 301340.0
        },
        "citizenship": {
            "id": 7,
            "name": "Spain",
            "continent": "EUROPE",
            "capital": "Madrid",
            "population": 48592909,
            "square": 505994.0
        },
        "favoriteMeals": "apple,watermelon,grape"
    },
    {
        "id": 17,
        "name": "Clarence Justice",
        "birthday": "1986-03-25",
        "sex": "MALE",
        "eyeColor": "BLACK",
        "hairColor": "GREEN",
        "weight": 82.74324907678624,
        "height": 79.78775926067789,
        "countryOfOrigin": {
            "id": 12,
            "name": "Bulgaria",
            "continent": "EUROPE",
            "capital": "Sofia",
            "population": 6447710,
            "square": 110994.0
        },
        "citizenship": {
            "id": 18,
            "name": "Ukraine",
            "continent": "EUROPE",
            "capital": "Kyiv",
            "population": 33365000,
            "square": 603628.0
        },
        "favoriteMeals": "pear,banana,watermelon"
    },
    {
        "id": 18,
        "name": "Joseph Elliott",
        "birthday": "2020-07-06",
        "sex": "FEMALE",
        "eyeColor": "BLUE",
        "hairColor": "GRAY",
        "weight": 113.0778796317541,
        "height": 176.6584702252798,
        "countryOfOrigin": {
            "id": 17,
            "name": "Italy",
            "continent": "EUROPE",
            "capital": "Rome",
            "population": 58853482,
            "square": 301340.0
        },
        "citizenship": {
            "id": 11,
            "name": "Romania",
            "continent": "EUROPE",
            "capital": "Bucharest",
            "population": 19051562,
            "square": 238398.0
        },
        "favoriteMeals": "banana,grape,apple,pear"
    },
    {
        "id": 19,
        "name": "Hubert Sorensen",
        "birthday": "2010-01-25",
        "sex": "FEMALE",
        "eyeColor": "BROWN",
        "hairColor": "YELLOW",
        "weight": 65.44159764302835,
        "height": 72.37933809584595,
        "countryOfOrigin": {
            "id": 11,
            "name": "Romania",
            "continent": "EUROPE",
            "capital": "Bucharest",
            "population": 19051562,
            "square": 238398.0
        },
        "citizenship": {
            "id": 17,
            "name": "Italy",
            "continent": "EUROPE",
            "capital": "Rome",
            "population": 58853482,
            "square": 301340.0
        },
        "favoriteMeals": "watermelon,grape,banana"
    },
    {
        "id": 20,
        "name": "Martin Brady",
        "birthday": "2023-03-28",
        "sex": "FEMALE",
        "eyeColor": "GREEN",
        "hairColor": "BLUE",
        "weight": 98.82537801113949,
        "height": 121.34773878759844,
        "countryOfOrigin": {
            "id": 15,
            "name": "Hungary",
            "continent": "EUROPE",
            "capital": "Budapest",
            "population": 9597085,
            "square": 93030.0
        },
        "citizenship": {
            "id": 8,
            "name": "Portugal",
            "continent": "EUROPE",
            "capital": "Lisbon",
            "population": 10467366,
            "square": 92230.0
        },
        "favoriteMeals": "apple,banana,watermelon,grape"
    },
    {
        "id": 21,
        "name": "Nathan Jennings",
        "birthday": "2022-09-02",
        "sex": "FEMALE",
        "eyeColor": "RED",
        "hairColor": "BLUE",
        "weight": 137.16267188786753,
        "height": 164.21164856390453,
        "countryOfOrigin": {
            "id": 17,
            "name": "Italy",
            "continent": "EUROPE",
            "capital": "Rome",
            "population": 58853482,
            "square": 301340.0
        },
        "citizenship": {
            "id": 2,
            "name": "United Kingdom",
            "continent": "EUROPE",
            "capital": "London",
            "population": 67596281,
            "square": 244376.0
        },
        "favoriteMeals": "banana,watermelon,grape,apple"
    },
    {
        "id": 22,
        "name": "Guy Newton",
        "birthday": "2019-03-17",
        "sex": "MALE",
        "eyeColor": "GREEN",
        "hairColor": "RED",
        "weight": 140.92634527726995,
        "height": 200.56342692411596,
        "countryOfOrigin": {
            "id": 20,
            "name": "Japan",
            "continent": "ASIA",
            "capital": "Tokyo",
            "population": 123970000,
            "square": 377975.0
        },
        "citizenship": {
            "id": 5,
            "name": "Germany",
            "continent": "EUROPE",
            "capital": "Berlin",
            "population": 84607016,
            "square": 357600.0
        },
        "favoriteMeals": "pear,watermelon,grape"
    },
    {
        "id": 23,
        "name": "Earl Ackerman",
        "birthday": "1983-12-29",
        "sex": "MALE",
        "eyeColor": "YELLOW",
        "hairColor": "RED",
        "weight": 54.98077228261867,
        "height": 101.53513804391108,
        "countryOfOrigin": {
            "id": 2,
            "name": "United Kingdom",
            "continent": "EUROPE",
            "capital": "London",
            "population": 67596281,
            "square": 244376.0
        },
        "citizenship": {
            "id": 14,
            "name": "Slovakia",
            "continent": "EUROPE",
            "capital": "Bratislava",
            "population": 5460185,
            "square": 49035.0
        },
        "favoriteMeals": "watermelon,grape,banana"
    },
    {
        "id": 24,
        "name": "Clarence Jennings",
        "birthday": "1999-06-27",
        "sex": "FEMALE",
        "eyeColor": "GRAY",
        "hairColor": "YELLOW",
        "weight": 80.15924855296822,
        "height": 194.0897128715397,
        "countryOfOrigin": {
            "id": 7,
            "name": "Spain",
            "continent": "EUROPE",
            "capital": "Madrid",
            "population": 48592909,
            "square": 505994.0
        },
        "citizenship": {
            "id": 10,
            "name": "Poland",
            "continent": "EUROPE",
            "capital": "Warsaw",
            "population": 38036118,
            "square": 312696.0
        },
        "favoriteMeals": "banana,grape,watermelon,pear"
    },
    {
        "id": 25,
        "name": "Eugene Adams",
        "birthday": "1980-11-02",
        "sex": "MALE",
        "eyeColor": "RED",
        "hairColor": "BLUE",
        "weight": 89.74568660500762,
        "height": 108.05455483850324,
        "countryOfOrigin": {
            "id": 10,
            "name": "Poland",
            "continent": "EUROPE",
            "capital": "Warsaw",
            "population": 38036118,
            "square": 312696.0
        },
        "citizenship": {
            "id": 4,
            "name": "Netherlands",
            "continent": "EUROPE",
            "capital": "Amsterdam",
            "population": 18072300,
            "square": 42531.0
        },
        "favoriteMeals": "grape,apple,banana"
    },
    {
        "id": 26,
        "name": "Joseph Emery",
        "birthday": "2004-08-29",
        "sex": "MALE",
        "eyeColor": "BROWN",
        "hairColor": "GREEN",
        "weight": 129.84699178223673,
        "height": 149.83775590786553,
        "countryOfOrigin": {
            "id": 18,
            "name": "Ukraine",
            "continent": "EUROPE",
            "capital": "Kyiv",
            "population": 33365000,
            "square": 603628.0
        },
        "citizenship": {
            "id": 17,
            "name": "Italy",
            "continent": "EUROPE",
            "capital": "Rome",
            "population": 58853482,
            "square": 301340.0
        },
        "favoriteMeals": "watermelon,apple,pear,banana"
    },
    {
        "id": 27,
        "name": "Alfred Ackerman",
        "birthday": "1988-01-27",
        "sex": "FEMALE",
        "eyeColor": "BLUE",
        "hairColor": "RED",
        "weight": 46.677389409985196,
        "height": 93.3113444188997,
        "countryOfOrigin": {
            "id": 7,
            "name": "Spain",
            "continent": "EUROPE",
            "capital": "Madrid",
            "population": 48592909,
            "square": 505994.0
        },
        "citizenship": {
            "id": 6,
            "name": "France",
            "continent": "EUROPE",
            "capital": "Paris",
            "population": 68373433,
            "square": 643801.0
        },
        "favoriteMeals": "watermelon,grape,apple,pear"
    },
    {
        "id": 28,
        "name": "Hubert Crowley",
        "birthday": "2018-11-05",
        "sex": "MALE",
        "eyeColor": "RED",
        "hairColor": "BLUE",
        "weight": 133.54553917214054,
        "height": 170.16893402950714,
        "countryOfOrigin": {
            "id": 10,
            "name": "Poland",
            "continent": "EUROPE",
            "capital": "Warsaw",
            "population": 38036118,
            "square": 312696.0
        },
        "citizenship": {
            "id": 8,
            "name": "Portugal",
            "continent": "EUROPE",
            "capital": "Lisbon",
            "population": 10467366,
            "square": 92230.0
        },
        "favoriteMeals": "watermelon,pear,grape"
    },
    {
        "id": 29,
        "name": "Guy Elliott",
        "birthday": "2020-07-21",
        "sex": "MALE",
        "eyeColor": "YELLOW",
        "hairColor": "RED",
        "weight": 53.02770411296667,
        "height": 136.49638130415957,
        "countryOfOrigin": {
            "id": 12,
            "name": "Bulgaria",
            "continent": "EUROPE",
            "capital": "Sofia",
            "population": 6447710,
            "square": 110994.0
        },
        "citizenship": {
            "id": 1,
            "name": "USA",
            "continent": "NORTH_AMERICA",
            "capital": "Washington",
            "population": 334914895,
            "square": 8080470.0
        },
        "favoriteMeals": "banana,pear,apple,watermelon"
    },
    {
        "id": 30,
        "name": "Mack Nichols",
        "birthday": "2002-11-02",
        "sex": "FEMALE",
        "eyeColor": "GRAY",
        "hairColor": "GRAY",
        "weight": 53.82404425372759,
        "height": 210.03823461053392,
        "countryOfOrigin": {
            "id": 16,
            "name": "Greece",
            "continent": "EUROPE",
            "capital": "Athens",
            "population": 10413982,
            "square": 131957.0
        },
        "citizenship": {
            "id": 16,
            "name": "Greece",
            "continent": "EUROPE",
            "capital": "Athens",
            "population": 10413982,
            "square": 131957.0
        },
        "favoriteMeals": "banana,grape,pear"
    },
    {
        "id": 31,
        "name": "Milton Elliott",
        "birthday": "1998-01-16",
        "sex": "FEMALE",
        "eyeColor": "RED",
        "hairColor": "GRAY",
        "weight": 93.1515139926328,
        "height": 150.53791758741215,
        "countryOfOrigin": {
            "id": 13,
            "name": "Czech Republic",
            "continent": "EUROPE",
            "capital": "Prague",
            "population": 10900555,
            "square": 78871.0
        },
        "citizenship": {
            "id": 11,
            "name": "Romania",
            "continent": "EUROPE",
            "capital": "Bucharest",
            "population": 19051562,
            "square": 238398.0
        },
        "favoriteMeals": "pear,banana,apple"
    },
    {
        "id": 32,
        "name": "Jess Cash",
        "birthday": "2007-03-12",
        "sex": "FEMALE",
        "eyeColor": "BLUE",
        "hairColor": "BROWN",
        "weight": 91.27231478099506,
        "height": 163.40605980597098,
        "countryOfOrigin": {
            "id": 2,
            "name": "United Kingdom",
            "continent": "EUROPE",
            "capital": "London",
            "population": 67596281,
            "square": 244376.0
        },
        "citizenship": {
            "id": 11,
            "name": "Romania",
            "continent": "EUROPE",
            "capital": "Bucharest",
            "population": 19051562,
            "square": 238398.0
        },
        "favoriteMeals": "pear,grape,watermelon"
    },
    {
        "id": 33,
        "name": "Joseph Crowley",
        "birthday": "2002-12-06",
        "sex": "FEMALE",
        "eyeColor": "YELLOW",
        "hairColor": "GREEN",
        "weight": 61.02827921244463,
        "height": 114.6555136789328,
        "countryOfOrigin": {
            "id": 13,
            "name": "Czech Republic",
            "continent": "EUROPE",
            "capital": "Prague",
            "population": 10900555,
            "square": 78871.0
        },
        "citizenship": {
            "id": 1,
            "name": "USA",
            "continent": "NORTH_AMERICA",
            "capital": "Washington",
            "population": 334914895,
            "square": 8080470.0
        },
        "favoriteMeals": "banana,watermelon,pear"
    },
    {
        "id": 34,
        "name": "Jess Hahn",
        "birthday": "2008-08-24",
        "sex": "MALE",
        "eyeColor": "RED",
        "hairColor": "BLUE",
        "weight": 96.52953083766508,
        "height": 184.4041569382728,
        "countryOfOrigin": {
            "id": 1,
            "name": "USA",
            "continent": "NORTH_AMERICA",
            "capital": "Washington",
            "population": 334914895,
            "square": 8080470.0
        },
        "citizenship": {
            "id": 8,
            "name": "Portugal",
            "continent": "EUROPE",
            "capital": "Lisbon",
            "population": 10467366,
            "square": 92230.0
        },
        "favoriteMeals": "banana,grape,pear"
    },
    {
        "id": 35,
        "name": "Oliver Sorensen",
        "birthday": "2020-01-03",
        "sex": "MALE",
        "eyeColor": "GRAY",
        "hairColor": "BROWN",
        "weight": 101.46766796239717,
        "height": 173.15405311988079,
        "countryOfOrigin": {
            "id": 12,
            "name": "Bulgaria",
            "continent": "EUROPE",
            "capital": "Sofia",
            "population": 6447710,
            "square": 110994.0
        },
        "citizenship": {
            "id": 6,
            "name": "France",
            "continent": "EUROPE",
            "capital": "Paris",
            "population": 68373433,
            "square": 643801.0
        },
        "favoriteMeals": "watermelon,banana,apple"
    },
    {
        "id": 36,
        "name": "Hugh Nichols",
        "birthday": "1997-07-31",
        "sex": "FEMALE",
        "eyeColor": "YELLOW",
        "hairColor": "YELLOW",
        "weight": 138.8563012895521,
        "height": 224.09651451181196,
        "countryOfOrigin": {
            "id": 1,
            "name": "USA",
            "continent": "NORTH_AMERICA",
            "capital": "Washington",
            "population": 334914895,
            "square": 8080470.0
        },
        "citizenship": {
            "id": 5,
            "name": "Germany",
            "continent": "EUROPE",
            "capital": "Berlin",
            "population": 84607016,
            "square": 357600.0
        },
        "favoriteMeals": "apple,grape,banana,pear"
    },
    {
        "id": 37,
        "name": "Tom Waller",
        "birthday": "2018-12-03",
        "sex": "MALE",
        "eyeColor": "GREEN",
        "hairColor": "BLACK",
        "weight": 148.65748347248808,
        "height": 98.3610999210667,
        "countryOfOrigin": {
            "id": 8,
            "name": "Portugal",
            "continent": "EUROPE",
            "capital": "Lisbon",
            "population": 10467366,
            "square": 92230.0
        },
        "citizenship": {
            "id": 9,
            "name": "Belgium",
            "continent": "EUROPE",
            "capital": "Brussels",
            "population": 11697557,
            "square": 30689.0
        },
        "favoriteMeals": "apple,pear,banana"
    },
    {
        "id": 38,
        "name": "Alfred Cash",
        "birthday": "1996-08-21",
        "sex": "FEMALE",
        "eyeColor": "BROWN",
        "hairColor": "GREEN",
        "weight": 111.40566486698422,
        "height": 192.32233328478893,
        "countryOfOrigin": {
            "id": 19,
            "name": "Philippines",
            "continent": "ASIA",
            "capital": "Manila",
            "population": 114163719,
            "square": 343448.0
        },
        "citizenship": {
            "id": 9,
            "name": "Belgium",
            "continent": "EUROPE",
            "capital": "Brussels",
            "population": 11697557,
            "square": 30689.0
        },
        "favoriteMeals": "grape,banana,apple,pear"
    },
    {
        "id": 39,
        "name": "Hiram Jensen",
        "birthday": "1998-02-02",
        "sex": "MALE",
        "eyeColor": "GREEN",
        "hairColor": "GRAY",
        "weight": 90.29939479603917,
        "height": 142.08693371487436,
        "countryOfOrigin": {
            "id": 5,
            "name": "Germany",
            "continent": "EUROPE",
            "capital": "Berlin",
            "population": 84607016,
            "square": 357600.0
        },
        "citizenship": {
            "id": 2,
            "name": "United Kingdom",
            "continent": "EUROPE",
            "capital": "London",
            "population": 67596281,
            "square": 244376.0
        },
        "favoriteMeals": "watermelon,banana,grape"
    },
    {
        "id": 40,
        "name": "Wallace Gleason",
        "birthday": "1981-07-20",
        "sex": "FEMALE",
        "eyeColor": "BLUE",
        "hairColor": "GRAY",
        "weight": 144.1530225751586,
        "height": 146.70316107109312,
        "countryOfOrigin": {
            "id": 20,
            "name": "Japan",
            "continent": "ASIA",
            "capital": "Tokyo",
            "population": 123970000,
            "square": 377975.0
        },
        "citizenship": {
            "id": 21,
            "name": "Peru",
            "continent": "SOUTH_AMERICA",
            "capital": "Lima",
            "population": 34352720,
            "square": 1285216.0
        },
        "favoriteMeals": "apple,grape,watermelon,banana"
    },
    {
        "id": 41,
        "name": "Joseph Jensen",
        "birthday": "2004-11-29",
        "sex": "FEMALE",
        "eyeColor": "YELLOW",
        "hairColor": "BLACK",
        "weight": 136.10057467398974,
        "height": 89.072296985235,
        "countryOfOrigin": {
            "id": 14,
            "name": "Slovakia",
            "continent": "EUROPE",
            "capital": "Bratislava",
            "population": 5460185,
            "square": 49035.0
        },
        "citizenship": {
            "id": 6,
            "name": "France",
            "continent": "EUROPE",
            "capital": "Paris",
            "population": 68373433,
            "square": 643801.0
        },
        "favoriteMeals": "grape,pear,apple,banana"
    },
    {
        "id": 42,
        "name": "Jasper Newton",
        "birthday": "2012-06-11",
        "sex": "MALE",
        "eyeColor": "BROWN",
        "hairColor": "BLUE",
        "weight": 123.6790950239674,
        "height": 202.9786413079132,
        "countryOfOrigin": {
            "id": 17,
            "name": "Italy",
            "continent": "EUROPE",
            "capital": "Rome",
            "population": 58853482,
            "square": 301340.0
        },
        "citizenship": {
            "id": 11,
            "name": "Romania",
            "continent": "EUROPE",
            "capital": "Bucharest",
            "population": 19051562,
            "square": 238398.0
        },
        "favoriteMeals": "apple,banana,grape"
    },
    {
        "id": 43,
        "name": "Hugh Adams",
        "birthday": "1999-01-28",
        "sex": "MALE",
        "eyeColor": "BLUE",
        "hairColor": "BLACK",
        "weight": 73.31267354234598,
        "height": 82.08335515555653,
        "countryOfOrigin": {
            "id": 4,
            "name": "Netherlands",
            "continent": "EUROPE",
            "capital": "Amsterdam",
            "population": 18072300,
            "square": 42531.0
        },
        "citizenship": {
            "id": 8,
            "name": "Portugal",
            "continent": "EUROPE",
            "capital": "Lisbon",
            "population": 10467366,
            "square": 92230.0
        },
        "favoriteMeals": "watermelon,grape,apple"
    },
    {
        "id": 44,
        "name": "Alexander Summers",
        "birthday": "2014-09-11",
        "sex": "FEMALE",
        "eyeColor": "YELLOW",
        "hairColor": "GRAY",
        "weight": 126.78492667381224,
        "height": 128.62652940495576,
        "countryOfOrigin": {
            "id": 13,
            "name": "Czech Republic",
            "continent": "EUROPE",
            "capital": "Prague",
            "population": 10900555,
            "square": 78871.0
        },
        "citizenship": {
            "id": 20,
            "name": "Japan",
            "continent": "ASIA",
            "capital": "Tokyo",
            "population": 123970000,
            "square": 377975.0
        },
        "favoriteMeals": "banana,pear,apple"
    },
    {
        "id": 45,
        "name": "Eugene Adams",
        "birthday": "2014-05-04",
        "sex": "MALE",
        "eyeColor": "BLUE",
        "hairColor": "BLUE",
        "weight": 141.58834559581658,
        "height": 87.37758523509373,
        "countryOfOrigin": {
            "id": 1,
            "name": "USA",
            "continent": "NORTH_AMERICA",
            "capital": "Washington",
            "population": 334914895,
            "square": 8080470.0
        },
        "citizenship": {
            "id": 16,
            "name": "Greece",
            "continent": "EUROPE",
            "capital": "Athens",
            "population": 10413982,
            "square": 131957.0
        },
        "favoriteMeals": "banana,grape,apple,pear"
    },
    {
        "id": 46,
        "name": "Eugene Horton",
        "birthday": "1988-11-30",
        "sex": "FEMALE",
        "eyeColor": "GREEN",
        "hairColor": "BROWN",
        "weight": 68.10527258316924,
        "height": 91.55340061739759,
        "countryOfOrigin": {
            "id": 13,
            "name": "Czech Republic",
            "continent": "EUROPE",
            "capital": "Prague",
            "population": 10900555,
            "square": 78871.0
        },
        "citizenship": {
            "id": 11,
            "name": "Romania",
            "continent": "EUROPE",
            "capital": "Bucharest",
            "population": 19051562,
            "square": 238398.0
        },
        "favoriteMeals": "grape,watermelon,apple"
    },
    {
        "id": 47,
        "name": "Eugene Kent",
        "birthday": "2015-06-19",
        "sex": "MALE",
        "eyeColor": "YELLOW",
        "hairColor": "BROWN",
        "weight": 91.85981422414477,
        "height": 90.69228859000148,
        "countryOfOrigin": {
            "id": 5,
            "name": "Germany",
            "continent": "EUROPE",
            "capital": "Berlin",
            "population": 84607016,
            "square": 357600.0
        },
        "citizenship": {
            "id": 6,
            "name": "France",
            "continent": "EUROPE",
            "capital": "Paris",
            "population": 68373433,
            "square": 643801.0
        },
        "favoriteMeals": "pear,apple,watermelon"
    },
    {
        "id": 48,
        "name": "Oliver Burgess",
        "birthday": "1993-03-22",
        "sex": "MALE",
        "eyeColor": "GRAY",
        "hairColor": "GRAY",
        "weight": 91.84868897331062,
        "height": 74.28271902710556,
        "countryOfOrigin": {
            "id": 12,
            "name": "Bulgaria",
            "continent": "EUROPE",
            "capital": "Sofia",
            "population": 6447710,
            "square": 110994.0
        },
        "citizenship": {
            "id": 20,
            "name": "Japan",
            "continent": "ASIA",
            "capital": "Tokyo",
            "population": 123970000,
            "square": 377975.0
        },
        "favoriteMeals": "pear,banana,watermelon"
    },
    {
        "id": 49,
        "name": "Guy Brady",
        "birthday": "1983-03-24",
        "sex": "FEMALE",
        "eyeColor": "RED",
        "hairColor": "RED",
        "weight": 96.12079181032385,
        "height": 71.11576374095003,
        "countryOfOrigin": {
            "id": 4,
            "name": "Netherlands",
            "continent": "EUROPE",
            "capital": "Amsterdam",
            "population": 18072300,
            "square": 42531.0
        },
        "citizenship": {
            "id": 6,
            "name": "France",
            "continent": "EUROPE",
            "capital": "Paris",
            "population": 68373433,
            "square": 643801.0
        },
        "favoriteMeals": "apple,pear,banana"
    },
    {
        "id": 50,
        "name": "Jasper Sorensen",
        "birthday": "1982-05-04",
        "sex": "FEMALE",
        "eyeColor": "GRAY",
        "hairColor": "BLACK",
        "weight": 147.23187928117045,
        "height": 59.29117839528117,
        "countryOfOrigin": {
            "id": 3,
            "name": "Canada",
            "continent": "NORTH_AMERICA",
            "capital": "Ottawa",
            "population": 40769890,
            "square": 9984670.0
        },
        "citizenship": {
            "id": 18,
            "name": "Ukraine",
            "continent": "EUROPE",
            "capital": "Kyiv",
            "population": 33365000,
            "square": 603628.0
        },
        "favoriteMeals": "banana,watermelon,pear"
    }
];

export function isNameValid(name) {
    if (name == null || name == undefined) {
        return false;
    }
    return name.trim().length >= 3;
}

export function isBirthdayValid(birthday) {
    if (birthday == null || birthday == undefined) {
        return false;
    }
    try {
        const date = Date.parse(birthday);
        return date < Date.now();
    } catch (error) {
        return false;
    }
}

export function isWeightValid(weight) {
    if (weight == null || weight == undefined) {
        return false;
    }
    return 50 <= weight && weight <= 150;
}

export function isHeightValid(height) {
    if (height == null || height == undefined) {
        return false;
    }
    return 60 <= height && height <= 220;
}

export function isFavoriteMeals(meals) {
    if (meals == null || meals == undefined) {
        return false;
    }
    const regex = /\w{3,}(,\w{3,})*/;
    const occurs = meals.match(regex);
    return occurs.length > 0 && meals.length === occurs[0].length;
}

export function savePerson(person) {
    if (person.id === null || person.id === undefined) {
        return addPerson(person);
    }
    const index = getPersonIndex(person.id);
    if (index === -1) {
        return false;
    }
    persons[index] = { ...person };
    return true;
}

function addPerson(person) {
    person.id = getNextId();
    persons.push({ ...person });
    return true;
}

function getNextId() {
    return persons.reduce((previousValue, currentValue) => {
        return previousValue < currentValue ? currentValue : previousValue;
    }, 0) + 1;
}

export function getPersonById(id) {
    const index = getPersonIndex(id);
    if (index === -1) {
        return null;
    }
    return persons[index];
}

export function deletePersonById(id) {
    const index = getPersonIndex(id);
    if (index === -1) {
        return false;
    }
    persons.splice(index, 1);
    return true;
}

function getPersonIndex(id) {
    return persons.findIndex((element) => element.id === id);
}

export function getPersonData(filter) {
    if (typeof filter === "undefined") {
        return [...persons];
    }
    const personList = persons.filter((person) => personFits(person, filter));
    return [...personList];
}

function personFits(person, filter) {
    return (
        personNameFits(person, filter.nameStart, filter.nameEnd) &&
        personSexFits(person, filter.sex) &&
        personBirthdayFits(person, filter.birthdayStart, filter.birthdayEnd));
}

function personNameFits(person, nameStart, nameEnd) {
    return (
        (nameStart === null || nameStart === undefined || nameStart.trim().length === 0 || person.name.startsWith(nameStart) || nameStart <= person.name) &&
        (nameEnd === null || nameEnd === undefined || nameEnd.trim().length === 0 || person.name.startsWith(nameEnd) || person.name <= nameEnd));
}

function personSexFits(person, sex) {
    return (
        sex === null || sex === undefined || sex.trim().length === 0 ||
        person.sex.toLowerCase() === sex.toLowerCase());
}

function personBirthdayFits(person, birthdayStart, birthdayEnd) {
    return (
        (birthdayStart === null || birthdayStart === undefined || birthdayStart.trim().length === 0 || person.birthday.startsWith(birthdayStart) || birthdayStart <= person.birthday) &&
        (birthdayEnd === null || birthdayEnd === undefined || birthdayEnd.trim().length === 0 || person.birthday.startsWith(birthdayEnd) || person.birthday <= birthdayEnd));
}