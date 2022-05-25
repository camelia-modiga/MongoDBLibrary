// stergerea cartilor scrise de un autor specificat
db.carti.deleteMany({
    autor: "Dale Carnegie",
});

// stergerea cartilor de la o editura specificata
db.produse.deleteMany({
    "editura": "MediaFax",
});