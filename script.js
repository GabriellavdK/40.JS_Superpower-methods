const superheroes = [
	{
	"name": "Batman",
	"publisher": "DC Comics",
	"alter_ego": "Bruce Wayne",
	"first_appearance": "Detective Comics #27",
	"weight": "210"
	},
	{
	"name": "Superman",
	"publisher": "DC Comics",
	"alter_ego": "Kal-El",
	"first_appearance": "Action Comics #1",
	"weight": "220"
	},
	{
	"name": "Flash",
	"publisher": "DC Comics",
	"alter_ego": "Jay Garrick",
	"first_appearance": "Flash Comics #1",
	"weight": "195"
	},
	{
	"name": "Green Lantern",
	"publisher": "DC Comics",
	"alter_ego": "Alan Scott",
	"first_appearance": "All-American Comics #16",
	"weight": "186"
	},
	{
	"name": "Green Arrow",
	"publisher": "DC Comics",
	"alter_ego": "Oliver Queen",
	"first_appearance": "All-American Comics #16",
	"weight": "195"
	},
	{
	"name": "Wonder Woman",
	"publisher": "DC Comics",
	"alter_ego": "Princess Diana",
	"first_appearance": "The Incredible Hulk #180",
	"weight": "165"
	},
	{
	"name": "Blue Beetle",
	"publisher": "DC Comics",
	"alter_ego": "Dan Garret",
	"first_appearance": "Mystery Men Comics #1",
	"weight": "145"
	},
	{
	"name": "Spider Man",
	"publisher": "Marvel Comics",
	"alter_ego": "Peter Parker",
	"first_appearance": "Amazing Fantasy #15",
	"weight": "167"
	},
	{
	"name": "Captain America",
	"publisher": "Marvel Comics",
	"alter_ego": "Steve Rogers",
	"first_appearance": "Captain America Comics #1",
	"weight": "220"
	},
	{
	"name": "Iron Man",
	"publisher": "Marvel Comics",
	"alter_ego": "Tony Stark",
	"first_appearance": "Tales of Suspense #39",
	"weight": "250"
	},
	{
	"name": "Thor",
	"publisher": "Marvel Comics",
	"alter_ego": "Thor Odinson",
	"first_appearance": "Journey into Myster #83",
	"weight": "200"
	},
	{
	"name": "Hulk",
	"publisher": "Marvel Comics",
	"alter_ego": "Bruce Banner",
	"first_appearance": "The Incredible Hulk #1",
	"weight": "1400"
	},
	{
	"name": "Wolverine",
	"publisher": "Marvel Comics",
	"alter_ego": "James Howlett",
	"first_appearance": "The Incredible Hulk #180",
	"weight": "200"
	},
	{
	"name": "Daredevil",
	"publisher": "Marvel Comics",
	"alter_ego": "Matthew Michael Murdock",
	"first_appearance": "Daredevil #1",
	"weight": "200"
	},
	{
	"name": "Silver Surfer",
	"publisher": "Marvel Comics",
	"alter_ego": "Norrin Radd",
	"first_appearance": "The Fantastic Four #48",
	"weight": "unknown"
	}
]

// Maak een array van alle superhelden namen
// const nameSuperheroes = element => console.log("De namen van alle superhelden zijn: ", element.map(item => item.name));
// nameSuperheroes(superheroes);

// Maak een array van alle "lichte" superhelden (< 190 pounds)
// const lightWeightSuperheroes = element => console.log("Superhelden die lichter dan 190 pound zijn: ", element.filter(item => item.weight < 190));
// lightWeightSuperheroes(superheroes);

// Maak een array met de namen van de superhelden die 200 pounds wegen
// const namesOfSuperheroesThatWeigh200Pounds = element => {
// 	console.log("De superhelden die 200 kilo wegen zijn: ", element.filter(item => item.weight === "200").map(item => item.name));
// 	return;
// }
// namesOfSuperheroesThatWeigh200Pounds(superheroes);

// Maak een array met alle comics waar de superhelden hun "first appearances" hebben gehad
// const firstAppearance = element => console.log("Een overzicht van de first appearances: " ,element.map(item => item.first_appearance));
// firstAppearance(superheroes);

// Maak een array met alle superhelden van DC Comics. Is dat gelukt? 
// Herhaal de bovenstaande functie dan en maak ook een array met alle superhelden van Marvel Comics.
// const superheroesDcComics = element => console.log("DC comics bevat de volgende superheroes: ", element.filter(item => item.publisher === "DC Comics"));
// const superheroesMarvel = element => console.log("Marvel comics bevat de volgende superheroes: ", element.filter(item => item.publisher === "Marvel Comics"));
// superheroesDcComics(superheroes);
// superheroesMarvel(superheroes);

// Tel het gewicht van alle superhelden van DC Comics bij elkaar op. Let op! Conditionals to the rescue! 
// Het gewicht dat je hier ziet, van welk datatype is dat? Een nummer? Of een string? Oh ja, en hebben alle superhelden wel een gewicht?
// const weightDcSuperheroes = element => element.filter(item => item.publisher === "DC Comics").reduce((value, item) => parseFloat(value) + parseFloat(item.weight), 0);
// console.log("Het totale gewicht van de DC superheroes is samen: ", weightDcSuperheroes(superheroes));


// Doe hetzelfde met alle superhelden van Marvel Comics
// const weightMarvelSuperheroes = element => element.filter(item => item.publisher === "Marvel Comics" && item.weight != "unknown").reduce((value, item) => parseFloat(value) + parseFloat(item.weight), 0);
// console.log("Het totale gewicht van de Marvel superheroes is samen: ", weightMarvelSuperheroes(superheroes));
// resultaat moet zijn: 2637


// Bonus: zoek de zwaarste superheld!
// const HeaviestWeigth = element => element.filter(item => item[item.weight - 1]);
// console.log(heaviestWeigth(superheroes));

let heaviestWeigth = array => {
	let largest = 0;
	array.forEach(item => {
		const weight = parseFloat(item.weight);
		while (weight > largest && weight != "unknown") {	
			largest = weight;
		}
	})
	const result = array.filter(item => item.weight == largest);
	const nameHeaviest = result.map(item => item.name);
	console.log("De zwaarste superheld is de:", nameHeaviest.join(), "en het gewicht van die held is:");
	return largest;
};

console.log(heaviestWeigth(superheroes));
// Resultaat is de Hulk met 1400 kilo.