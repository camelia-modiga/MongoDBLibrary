//Actualizarea numarului de telefon a unui client

try{
    db.clienti.updateOne(
        {
            $and: [{ nume: "Popescu" }, { prenume: "George" }]
        },
        {
            $set:{"date_contact.telefon":"0765100972"}
        }
);
}catch(e){
	print(e);
}

//Actualizarea adresei unui client

try{
    db.clienti.updateOne(
        {
            nume: "Vasiliu"
        },
        {
            $set:{"date_contact.adresa":"Neamt"}
        }
);
}catch(e){
	print(e);
}
