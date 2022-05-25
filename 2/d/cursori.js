// Calcularea totalului unei comenzi utilizand cursori

var cursor = db.comenzi.find();

while (cursor.hasNext()) {
  var comanda = cursor.next();
  var total = 0;
  comanda.carti.forEach((element) => {
    var cursorCarte = db.carti.find({ _id: element.id_carte });
    if (cursorCarte.hasNext()) {
      var carte = cursorCarte.next();
      total += carte.pret * element.cantitate;
    }
  });

  db.comenzi.updateOne({ _id: comanda._id }, { $set: { total: total } });
}


// Afisarea comenzilor pentru fiecare client

var cursorComenzi = db.comenzi.find();

while (cursorComenzi.hasNext()) {
  var comanda = cursorComenzi.next();
  var cursorClienti = db.clienti.find({ _id: comanda.id_client });
  if (cursorClienti.hasNext()) {
    var client = cursorClienti.next();
    if (comanda.carti.length > 0) {
        comanda.carti.forEach((element) => {
          var cursorCarti = db.carti.find({ _id: element.id_carte });
          if (cursorCarti.hasNext()) {
            var carte = cursorCarti.next();
            print("Clientul " + client.nume + " " + client.prenume + " a comandat cartea \"" +carte.titlu + "\" in " + element.cantitate + " exemplare."
            );
          }
        });
      }
    print("Total: " + comanda.total + " lei");
  }
}


// Afisarea cartilor si a cantitatii vandute din fiecare carte

var cursorComenzi = db.comenzi.find();
var carti = new Map();

while (cursorComenzi.hasNext()) {
  var comanda = cursorComenzi.next();
  comanda.carti.forEach((element) => {
    var cursorCarti = db.carti.find({ _id: element.id_carte });
    if (cursorCarti.hasNext()) {
      var carte = cursorCarti.next();
        carti[carte.titlu] = element.cantitate      
    }
  });
}

for (let key of Object.keys(carti)) {
  if (key != "_data") {
    print("Cartea \"" + key + "\" a fost vanduta in "+ carti[key] + " exemplare");
  }
}
 