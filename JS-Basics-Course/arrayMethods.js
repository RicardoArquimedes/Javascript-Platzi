const articles = [
	{ name: 'Celular', price: 1000 },
	{ name: 'Pc', price: 1500 },
	{ name: 'Tv', price: 2000 },
	{ name: 'Book', price: 100 },
	{ name: 'Mouse', price: 70 },
	{ name: 'Carro', price: 30000 },
    { name: 'Audifonos', price: 1700 },
];

// methods

// Filter

const articlesFiltered = articles.filter(function(article){
    return article.price <= 500
    
});

console.log(articlesFiltered);


const nameArticles = articles.map(function(article){
    return article.name
})

console.log(nameArticles);