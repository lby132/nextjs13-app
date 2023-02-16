migrate((db) => {
  const collection = new Collection({
    "id": "ughv15e76lp4dfq",
    "created": "2023-02-16 14:20:24.841Z",
    "updated": "2023-02-16 14:20:24.841Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "yjky7nah",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ughv15e76lp4dfq");

  return dao.deleteCollection(collection);
})
