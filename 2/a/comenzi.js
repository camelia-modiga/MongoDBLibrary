
db.createCollection("comenzi",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["_id", "id_client", "carti", "data"],
            properties:{
                _id:{
                    bsonType: "int",
                    description: "must be an integer and is required"
                },
                id_client:{
                    bsonType: "objectId",
                    description: "must be an object id and is required"
                },
                carti:{
                    bsonType:"array",
                    items:{
                        bsonType: "object",
                        required: [ "id_carte", "cantitate"],
                        properties: {
                            id_carte:{
                                bsonType: "objectId",
                                description: "must be an object id and is required"
                            },
                            contitate:{
                                bsonType: "int",
                                description: "must be an integer and is required"
                            }
                        }
                    }
                },
                data:{
                    bsonType: "date",
                    description: "must be a date and is required"
                },
                total:{
                    bsonType: ["double", "null"],
                    description: "must be a double and is required"
                }
            }
        }
    }
})