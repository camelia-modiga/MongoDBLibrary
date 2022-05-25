// Afisarea numarului de carti de la fiecare editura
var map =  function() { 
    emit(this.editura,{total:1}); 
};

var reduce = function(key, values) {
    return values.reduce((a, b) => a + b.total, 0);
}

db.carti.mapReduce( map, reduce, {out:"result"} )
db.result.find()

// Afisarea clientilor grupati pe orase
var map =  function () {
    emit(this.date_contact.oras, {
      client: this.nume + " " + this.prenume,
    });
  }

  var reduce =  function (key, values) {
    let stringToReturn = "";
    values.forEach((element) => {
      stringToReturn += element.client + "; ";
    });
    return stringToReturn;
  }

db.clienti.mapReduce(map, reduce, {out:"result"});
db.result.find()



// Gruparea cartilor in functie de editura si afisarea celei mai scumpe carti, celei mai ieftine carti
var map =  function () {
    emit(this.editura, { pretMaxim: this.pret, pretMinim: this.pret,});
}

var reduce =  function (key, values) {
    var min = values[0].pretMinim;
    var max = values[0].pretMaxim;

    values.forEach((value) => {
      min = min < value.pretMinim ? min : value.pretMinim;
      max = max > value.pretMinim ? max : value.pretMaxim;
    });

    return {
      pretMaxim: max,
      pretMinim: min
    };
  }

db.carti.mapReduce(map, reduce, { out: "result" } );
db.result.find()


// Gruparea comenzilor pe zile si calcularea totalului pe zile
var map =   function () {
    this.carti.forEach((element) => {
      emit(this.data.toLocaleDateString("en-US"), {
        cantitate: element.cantitate
      });
    });
}
var reduce =  function (key, values) {
    return {
      cantitate: values.reduce((a, b) => a + b.cantitate, 0),
    };
}

db.comenzi.mapReduce(map, reduce, { out: "result" } );
db.result.find()