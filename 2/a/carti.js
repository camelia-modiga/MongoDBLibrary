db.createCollection("carti",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["titlu","gen_literar", "autor", "editura", "cantitate", "pret", "disponibil"],
            properties:{
                titlu:{
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                gen_literar:{
                    bsonType: "array",
                    items:{
                        bsonType: "string",
                        description: "must be a string and is required"
                    }
                },
                autor:{
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                editura:{
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                cantitate:{
                    bsonType: ["int","null"],
                    description: "must be an integer and is required"
                },
                pret:{
                    bsonType: "double",
                    description: "must be a double and is required"
                },
                disponibil:{
                    bsonType: "bool",
                    description: "must be a boolean and is required"
                }
            }
        }
    }
})