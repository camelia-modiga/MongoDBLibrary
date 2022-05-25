
db.createCollection("clienti",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["nume", "prenume", "date_contact"],
            properties:{
                nume:{
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                prenume:{
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                date_contact:{
                    bsonType:"object",
                    required:["telefon", "oras"],
                    properties: {
                        telefon:{
                            bsonType: "string",
                            description: "must be a string and is required"
                        },
                        email:{
                            bsonType : "string",
                            pattern : "@yahoo\.com$",
                            description: "must be a string and match the regular expression pattern"
                        },
                        oras:{
                            bsonType: "string",
                            description: "must be a string and is required"
                        }
                    }
                }
            }
        }
    }
})