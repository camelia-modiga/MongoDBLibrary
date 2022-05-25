db.clienti.bulkWrite(
    [
      {
        insertOne: {
          document: {
            nume: "Timis",
            prenume: "Vasile",
            date_contact:{
              telefon: "0756281639",
              email: "timisvasile04@yahoo.com",
              oras: "Timisoara"
            }
          }
        }
      },
      {
        insertOne: {
          document: {
            nume: "Pop",
            prenume: "Cristina",
            date_contact:{
              telefon: "0756289761",
              email: "cristina7@yahoo.com",
              oras: "Timisoara"
            }
          }
        }
      },
      {
        updateMany: {
          filter: { "date_contact.oras": "Timisoara" },
          update: { $set: { "date_contact.oras": "Arad" } }
        }
      },
      { deleteMany: { filter: { "date_contact.oras": "Arad" } } }
    ],
    {
      ordered: true,
    }
  );