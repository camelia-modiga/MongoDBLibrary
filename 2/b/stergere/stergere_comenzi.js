//stergerea comenzilor care au totalul null
db.comenzi.deleteOne({
    total: null
});
