// Cautari simple

// Clienti
// Afisarea clientilor, fara campul _id, ordonati alfabetic
db.clienti.find({},{_id: 0}).sort({nume: 1}).pretty()

// Afisarea adreselor introduse pentru clientii care incep cu litera "M"
db.clienti.find( { nume: { $regex: /^M/i } },{nume: 1, "prenume": 1, "date_contact.adresa": 1, _id: 0} ).pretty()

// Afisarea clientilor care nu locuiesc in "Iasi"
db.clienti.find({"date_contact.adresa": { $not: /Iasi/ }}).pretty()

// Afisati clientii care au lipsa campul "email"
db.clienti.find({"date_contact.email":{ $exists: false }}).pretty()

// Afisarea numelui si prenumelui tuturor clientilor pentru un oras dat
db.clienti.find({"date_contact.oras": "Iasi"},{_id: 0, nume:1, prenume: 1}).pretty()

// creare index client oras
db.clienti.createIndex({"date_contact.oras": 1 }, { name: "nume_oras" })
db.clienti.getIndexes()
db.clienti.find({ nume: "Popescu" }, { "date_contact.oras": "Bacau" }).pretty()

// Carti

// Afisarea documentelor care au valoarea null pentru campul cantitate si au valoarea "Epica" pentru campul editura
db.carti.find({$and: [{cantitate:{ $type: "null" } }, {editura:"Epica" }]},{titlu: 1, editura: 1, cantitate:1, _id:0}).pretty()

// Afisarea titlurilor cartilor care sunt disponibile de la editura "Epica"
db.carti.find({ $and: [{ disponibil: true }, { editura: "Epica" }]},{titlu: 1, editura: 1, _id: 0}).pretty()

// Afisarea cartilor scrise de "Ali Hazelwood"
db.carti.find({"autor": "Ali Hazelwood"},{"titlu": 1, "autor": 1, _id: 0}).pretty()

// Cautarea cuvantului "Ali" in colectia carti
db.carti.createIndex({autor:"text"})
db.carti.getIndexes()
db.carti.find( { $text: { $search: "Ali" }}).pretty()

// Afisarea cartilor de la editura "Curtea Veche" care au pretul mai mare de 30 lei
db.carti.find({pret: {$gt:30}, editura: "Curtea Veche" },{_id: 0}).pretty()

// Afisarea ordornata descrescator a cartilor dupa pret de la editura "Curtea Veche"
db.carti.find({editura: "Curtea Veche"},{_id: 0}).sort({pret: -1}).pretty()

// Afisare paginata
// 3 carti pe pagina incepand cu pagina 3
db.carti.find().skip((3-1)*3).limit(3)

// Comenzi
// Afisarea comenzilor cu un total intre 100 si 200 de lei
db.comenzi.find({ $and: [{ total: { $gte: 100 } }, { total: { $lte: 200 } }] },{ _id: 0, carti: 1, total: 1 }).pretty()

// Afisarea comenzilor cu 3 produse ordonate dupa total
db.comenzi.find({ carti: { $size: 3 } }, { _id: 0, carti: 1, total: 1 }).sort({ total: 1 }).pretty()
