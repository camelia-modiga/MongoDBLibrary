db = connect( 'mongodb://localhost/test' );

db.comenzi.insertOne({
    _id: getValueForNextSequence("item_id"),
    id_client: ObjectId("627e88b51171021a97a4946f"),
    carti: [
    {
      id_carte: ObjectId("627e86481171021a97a4943e"),
      cantitate: 10,
    }],
    data: new Date("2022-04-28T12:05:45Z"),
    total: null
    });

  db.comenzi.insertMany([
  {
    _id: getValueForNextSequence("item_id"),
    id_client: ObjectId("627e88b51171021a97a49470"),
    carti: [
    {
      id_carte: ObjectId("627e86481171021a97a4943f"),
      cantitate: 1
    }],
    data: new Date("2022-04-01T15:00:08Z"),
    total: null
    },
  {
    _id: getValueForNextSequence("item_id"),
    id_client: ObjectId("627e88b51171021a97a49471"),
    carti: [
    {
      id_carte: ObjectId("627e86481171021a97a4943f"),
      cantitate: 2
    },
    {
      id_carte: ObjectId("627e86481171021a97a49440"),
      cantitate: 10
    },
    {
      id_carte: ObjectId("627e86481171021a97a49441"),
      cantitate: 4
    }],
    data: new Date("2022-03-04T12:18:28"),
    total: null
    },
    {
      _id: getValueForNextSequence("item_id"),
      id_client: ObjectId("627e88b51171021a97a49472"),
      carti: [
      {
        id_carte: ObjectId("627e86481171021a97a49441"),
        cantitate: 1
      },
      {
        id_carte: ObjectId("627e86481171021a97a49442"),
        cantitate: 3
      },
      {
        id_carte: ObjectId("627e86481171021a97a49443"),
        cantitate: 2
      }],
      data: new Date("2019-07-01T13:09:08"),
      total: null
    },
    {
      _id: getValueForNextSequence("item_id"),
      id_client: ObjectId("627e88b51171021a97a49473"),
      carti: [
      {
        id_carte: ObjectId("627e86481171021a97a49442"),
        cantitate: 2
      }],
      data: new Date("2021-04-01T15:00:08"),
      total: null
        }
  ]);