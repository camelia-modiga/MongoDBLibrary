//Modificarea stocului unei carti
try{
    db.carti.updateOne(
        {
            $and: [{ "titlu": "Casa Gucci" }]
        },
        {
            $set:{"cantitate":20, "disponibil":true}
        }
);
}catch(e){
	print(e);
}

//Adaugarea unui gen literar
try{
    db.carti.updateOne(
        {
           titlu: "Mostenirea Hawthorne"
        },
        {
            $push:
            {
                "gen_literar": "Fantasy"
            }
        }
);
}catch(e){
	print(e);
}