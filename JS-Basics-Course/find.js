const articles = [
	{ name: 'Celular', price: 1000 },
	{ name: 'Pc', price: 1500 },
	{ name: 'Tv', price: 2000 },
	{ name: 'Book', price: 100 },
	{ name: 'Mouse', price: 70 },
	{ name: 'Carro', price: 30000 },
    { name: 'Audifonos', price: 1700 },
];

const findArticles = articles.find(function(article){
    return article.name === "Carro"
});

console.log(findArticles)