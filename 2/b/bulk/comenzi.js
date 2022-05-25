db.comenzi.bulkWrite(
    [
      {
        insertOne: {
          document: {
            _id: getValueForNextSequence("item_id"),
            id_client: ObjectId("627e88b51171021a97a4947a"),
            carti: [
            {
              id_carte: ObjectId("627e86481171021a97a49442"),
              cantitate: 1
            }],
            data:ISODate("2021-10-28T12:05:45"),
            total: 999.99
          }
        }
      },
      {
        insertOne: {
          document: {
            _id: getValueForNextSequence("item_id"),
            id_client: ObjectId("627e88b51171021a97a49479"),
            carti: [
            {
              id_carte: ObjectId("627e86481171021a97a49442"),
              cantitate: 3
            }],
            data: ISODate("2021-10-28T12:05:45"),
            total: 999.99
          }
        }
      },
      {
        updateMany: {
          filter: { data: { $eq:ISODate("2021-10-28T12:05:45") } },
          update: { $set: { total: 1000.01 } }
        }
      },
      { deleteMany: { filter: {  data: { $eq: ISODate("2021-10-28T12:05:45") } } }}
    ],
    {
      ordered: true
    }
  );