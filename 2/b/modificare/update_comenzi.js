// adaugarea unui nou produs la o comanda existenta
try{
    db.comenzi.updateOne(
        {
            data: { $eq: ISODate("2022-04-01T12:00:08") },
        },
        {
            $push: {
                carti: 
                {
                    id_carte: ObjectId("627e86481171021a97a4944a"),
                    cantitate: 10
                }
            }
        }
    );
}catch(e){
	print(e);
}


// modificarea cantitatii pentru al 2-lea produs din comanda
try{
    db.comenzi.updateOne(
        {
            data: { $eq: ISODate("2022-04-01T12:00:08") },
        },
        {
        $set: { "carti.1.cantitate": 40 },
        }
    );
}catch(e){
	print(e);
}