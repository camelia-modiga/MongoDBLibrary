db.carti.bulkWrite(
    [
      {
        insertOne: {
          document: {
            titlu: "Ultima calatorie",
            gen_literar: ["Romance"],
            autor: "Santa Montefiore",
            editura: "OPT",
            cantitate: 30,
            pret: 31.46,
            disponibil: true
          }
        }
      },
      {
        insertOne: {
          document: {
            titlu: "Franturi din ea",
            gen_literar: ["Fictiune", "Fantasy"],
            autor: "Karin Slaughter",
            editura: "Corint",
            cantitate: 30,
            pret: 39.54,
            disponibil: true
          }
        }
      },
      {
        updateMany: {
          filter: {"editura": "Corint" },
          update: { $set: { "cantitate": 90 } }
        }
      },
      { deleteMany: { filter: { "cantitate": 90 } } }
    ],
    {
      ordered: true
    }
  );