// Afisarea numarului de documente din colectia carti
db.carti.aggregate([
    {
        $group: {
             _id: null,
             count: { $count: { } }
            }
    }
])

// Gruparea cartilor in functie de numele autorului
db.carti.aggregate([
    { 
        $group : 
        {
             _id : "$autor", 
             carti: 
             { 
                 $push: "$titlu" 
                } 
            } 
    }
])

// Afisarea numarului de carti disponibile in functie de numele autorului
db.carti.aggregate([
    {
        $group : { _id : "$autor", carti: { $push: "$$ROOT" } }
    },

    {
      $addFields:
        {
          cantitateTotala : { $sum: "$carti.cantitate" }
        }
    }
  ])


// Afisarea numarului de clienti din fiecare oras
db.clienti.aggregate([
    {
        $group : { _id : "$date_contact.oras", totalPersoane: { $sum: 1 } }
    }
])

// Afisarea primelor 3 orase cu cei mai multi clienti
db.clienti.aggregate([
    {
      $group: { _id: "$date_contact.oras", totalPersoane: { $sum: 1 } }
    },
    {
      $sort: {
        totalPersoane: -1
      }
    },
    {
      $limit: 3
    }
]);

// Gruparea cartilor in functie de editura si afisarea celei mai scumpe carti, celei mai ieftine carti
// si pretul total de la editura respectiva
db.carti.aggregate([
    {
      $project: {
        titlu: 1,
        editura:1,
        pret: 1
      }
    },
    {
      $group: {
        _id: "$editura",
        
        pretMaxmin: { $max: "$pret" },
        pretMinim: { $min: "$pret" },
        total: { $sum: "$pret" }
      }
    },
    {
      $sort: {
        total: -1
      }
    }
  ]);

// Afisarea zilelor in care s-au vandut cele mai multe carti
db.comenzi.aggregate([
    { 
        $unwind: "$carti" },
        {
            $group: {
                _id: "$data",
                totalCantitate: { $sum: "$carti.cantitate" }
            }
        },
        {
            $sort: {
                totalCantitate: -1
        }
    },
    {
      $limit: 3
    }
]);