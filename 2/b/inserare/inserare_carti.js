db = connect( 'mongodb://localhost/test' );


db.carti.insertMany([
{
	titlu: "Totul se termina cu noi",
	gen_literar: ["Fictiune"],
	autor: "Colleen Hoover",
	editura: "Epica",
	cantitate: 10,
	pret: 25.43,
	disponibil: true
},
{
	titlu: "Ipoteza iubirii",
	gen_literar: ["Fictiune","Romance"],
	autor: "Ali Hazelwood",
	editura: "Litera",
	cantitate: 30,
	pret: 36.83,
	disponibil: true
},
{
	titlu: "Love on the Brain",
	gen_literar: ["Fictiune","Romance"],
	autor: "Ali Hazelwood",
	editura: "OPT",
	cantitate: 20,
	pret: 20.1,
	disponibil: true
},
{
	titlu: "Under One Roof",
	gen_literar: ["Fictiune","Romance"],
	autor: "Ali Hazelwood",
	editura: "Curtea Veche",
	cantitate: 15,
	pret: 40.90,
	disponibil: true
},
{
	titlu: "Arta manipularii",
	gen_literar: ["Self Help","Dezvoltare personala"],
	autor: "Kevin Dutton",
	editura: "Globo",
	cantitate: 30,
	pret: 33.12,
	disponibil: true
},
{
	titlu: "Baiatul cu pijamale in dungi",
	gen_literar: ["Fictiune"],
	autor: "John Boyne",
	editura: "RAO",
	cantitate: 34,
	pret: 17.5,
	disponibil: true
},
{
	titlu: "Casa Gucci",
	gen_literar: ["Fictiune","Actiune", "Aventura"],
	autor: "Sarah Gay Forden",
	editura: "Nemira",
	cantitate: null,
	pret: 46.83,
	disponibil: false
},

{
	titlu: "Inteligenta emotionala",
	gen_literar: ["Self Help","Dezvoltare personala"],
	autor: "Daniel Goleman",
	editura: "Curtea Veche",
	cantitate: null,
	pret: 41.61,
	disponibil: false
},
{
	titlu: "Sfarsitul soaptelor. Decembrie 1989",
	gen_literar: ["Self Help","Dezvoltare personala"],
	autor: "Ruta Sepetys",
	editura: "Epica",
	cantitate: null,
	pret: 41.61,
	disponibil: false
},
{
	titlu: "Mostenirea Hawthorne",
	gen_literar: ["Fictiune","Young adult"],
	autor: "Jennifer Lynn Barnes",
	editura: "Storia Books",
	cantitate: 12,
	pret: 48.49,
	disponibil: true
},
{
	titlu: "Sfarsitul soaptelor. Decembrie 1989",
	gen_literar: ["Istorie"],
	autor: "Ruta Sepetys",
	editura: "Epica",
	cantitate: 12,
	pret: 20.23,
	disponibil: true
},
{
	titlu: "Cum sa comunici eficient",
	gen_literar: ["Self Help","Dezvoltare personala"],
	autor: "Dale Carnegie",
	editura: "Litera",
	cantitate: 30,
	pret: 30.1,
	disponibil: true

},
{
	titlu: "Prada",
	gen_literar: ["Memorii si jurnale"],
	autor: "Ayaan Hirsi Ali",
	editura: "Polirom",
	cantitate: 30,
	pret: 31.46,
	disponibil: true
}
])
