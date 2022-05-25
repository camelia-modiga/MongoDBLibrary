// stergerea unui client dupa nume si prenume
db.clienti.deleteOne({
    $and: [{ nume: "Ion" }, { prenume: "Vasile" }],
  });
  
// stergerea tututor clientilor din orasul Craiova
db.clienti.deleteMany({
  "date_contact.oras": "Craiova",
});
  