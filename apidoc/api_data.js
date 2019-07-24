define({ "api": [
  {
    "group": "Item",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/lists/:userId/:listId/:itemId/edit",
    "title": "api to get the single list item .",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": "<p>user id of the list owner. (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>of the particular list. (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemId",
            "description": "<p>of the item to be fetched (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user (query param)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"item fetched\",\n            \"status\": 200,\n            \"data\": {\n                \"fileName\": \"\",\n                \"fileLocation\": \"E:/mediaStorage\",\n                \"isOpen\": false,\n                \"isDone\": false,\n                \"subitemsList\": [],\n                \"itemId\": \"DzP3I49Lu\",\n                \"title\": \"item modified\",\n                \"description\": \"modified item title\",\n                \"dueDate\": \"2019-07-20T16:50:00.000Z\"\n            }\n        }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Route not found in the application || Internal serever error\",\n     \"status\": \"500 || 404\",\n     \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/todoList.js",
    "groupTitle": "Item",
    "name": "GetApiV1ListsUseridListidItemidEdit"
  },
  {
    "group": "Item",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/lists/:userId/:listId/add",
    "title": "api to add the first list item .",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": "<p>user id of the list owner. (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>of the particular list in which item to be added. (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>of the item to be added (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user (query param)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"added item to list first list sucessfully\",\n           \"status\": 200,\n           \"data\": {\n               \"title\": \"first list\",\n               \"item\": {\n                   \"fileName\": \"\",\n                   \"fileLocation\": \"\",\n                   \"isOpen\": false,\n                   \"isDone\": false,\n                   \"itemId\": \"DzP3I49Lu\",\n                   \"title\": \"first Item\",\n                   \"subitemsList\": []\n               }\n           }\n       }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Route not found in the application || Internal serever error\",\n     \"status\": \"500 || 404\",\n     \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/todoList.js",
    "groupTitle": "Item",
    "name": "PostApiV1ListsUseridListidAdd"
  },
  {
    "group": "Item",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/lists/:userId/:listId/:itemId/delete",
    "title": "api to delete the list item .",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": "<p>user id of the list owner. (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>of the particular list. (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemId",
            "description": "<p>of the item to be deleted (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user (query param)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"deleted item from the list first list sucessfully\",\n            \"status\": 200,\n            \"data\": {\n                \"title\": \"first list\",\n                \"owner\": \"xLBYsiewP\",\n                \"itemsList\": [],\n            }\n        }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Route not found in the application || Internal serever error\",\n     \"status\": \"500 || 404\",\n     \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/todoList.js",
    "groupTitle": "Item",
    "name": "PostApiV1ListsUseridListidItemidDelete"
  },
  {
    "group": "Item",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/lists/:userId/:listId/:itemId/markclose",
    "title": "api to mark the list item close.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": "<p>user id of the list owner. (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>of the particular list. (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemId",
            "description": "<p>of the item to be marked close (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user (query param)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"item marked closed successfully\",\n            \"status\": 200,\n            \"data\": {\n                \"fileName\": \"\",\n                \"fileLocation\": \"\",\n                \"isOpen\": false,\n                \"isDone\": false,\n                \"subitemsList\": [],\n                \"itemId\": \"4dOElaEZe\",\n                \"title\": \"first Item\",\n                \"startDate\": null,\n                \"endDate\": null\n            }\n        }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Route not found in the application || Internal serever error\",\n     \"status\": \"500 || 404\",\n     \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/todoList.js",
    "groupTitle": "Item",
    "name": "PostApiV1ListsUseridListidItemidMarkclose"
  },
  {
    "group": "Item",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/lists/:userId/:listId/:itemId/markdone",
    "title": "api to mark the list item done.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": "<p>user id of the list owner. (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>of the particular list. (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemId",
            "description": "<p>of the item to be marked done (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user (query param)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"item marked done successfully\",\n            \"status\": 200,\n            \"data\": {\n                \"fileName\": \"\",\n                \"fileLocation\": \"\",\n                \"isOpen\": false,\n                \"isDone\": true,\n                \"subitemsList\": [],\n                \"itemId\": \"4dOElaEZe\",\n                \"title\": \"first Item\",\n                \"startDate\": null,\n                \"endDate\": \"2019-07-20T16:56:45.000Z\"\n            }\n        }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Route not found in the application || Internal serever error\",\n     \"status\": \"500 || 404\",\n     \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/todoList.js",
    "groupTitle": "Item",
    "name": "PostApiV1ListsUseridListidItemidMarkdone"
  },
  {
    "group": "Item",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/lists/:userId/:listId/:itemId/markopen",
    "title": "api to mark the list item open.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": "<p>user id of the list owner. (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>of the particular list. (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemId",
            "description": "<p>of the item to be marked open (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user (query param)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"item marked open successfully\",\n            \"status\": 200,\n            \"data\": {\n                \"fileName\": \"\",\n                \"fileLocation\": \"\",\n                \"isOpen\": true,\n                \"isDone\": false,\n                \"subitemsList\": [],\n                \"itemId\": \"4dOElaEZe\",\n                \"title\": \"first Item\",\n                \"startDate\": \"2019-07-20T16:33:52.000Z\"\n            }\n        }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Route not found in the application || Internal serever error\",\n     \"status\": \"500 || 404\",\n     \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/todoList.js",
    "groupTitle": "Item",
    "name": "PostApiV1ListsUseridListidItemidMarkopen"
  },
  {
    "group": "Item",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/lists/:userId/:listId/:itemId/edit",
    "title": "api to edit the existing item .",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": "<p>user id of the list owner. (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>of the particular list in which item to be added. (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemId",
            "description": "<p>of the item to be edited (request params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>of the item to be edited (body params) (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>of the item to be edited (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "due",
            "description": "<p>date of the item to be edited (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "file",
            "description": "<p>name for of the item to be edited  (body params) (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user (query param)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"item edited successfully \",\n            \"status\": 200,\n            \"data\": {\n                \"fileLocation\": \"E:/mediaStorage\",\n                \"isOpen\": false,\n                \"isDone\": false,\n                \"subitemsList\": [],\n                \"itemId\": \"DzP3I49Lu\",\n                \"title\": \"item modified\",\n                \"description\": \"modified item title\",\n                \"dueDate\": \"2019-07-20T16:40:00.000Z\"\n            }\n        }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Route not found in the application || Internal serever error\",\n     \"status\": \"500 || 404\",\n     \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/todoList.js",
    "groupTitle": "Item",
    "name": "PutApiV1ListsUseridListidItemidEdit"
  },
  {
    "group": "List",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/lists/:userId/all",
    "title": "api to get all the list of the user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": "<p>user id of the list owner. (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user (query param)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"error\": false,\n        \"message\": \"lists fetched successfully\",\n        \"status\": 200,\n        \"data\": [\n            {\n                \"title\": \"Work1\",\n                \"id\": \"d9iESILMD\",\n                \"owner\": \"xLBYsiewP\",\n                \"createdOn\": \"2019-07-20T03:34:28.000Z\",\n                \"itemsList\": []\n            },\n            {\n                \"title\": \"first list\",\n                \"id\": \"TZKD4JKL1\",\n                \"owner\": \"xLBYsiewP\",\n                \"createdOn\": \"2019-07-20T14:56:50.000Z\",\n                \"itemsList\": []\n            }\n        ]\n        }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Route not found in the application || Internal serever error\",\n     \"status\": \"500 || 404\",\n     \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/todoList.js",
    "groupTitle": "List",
    "name": "GetApiV1ListsUseridAll"
  },
  {
    "group": "List",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/lists/:userId/:listId/delete",
    "title": "api to delete the list.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": "<p>user id of the list owner. (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>of the particular list to be deleted. (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user (query param)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"deleted list Work1 sucessfully\",\n            \"status\": 200,\n            \"data\": {\n                \"title\": \"Work1\",\n                \"id\": \"d9iESILMD\",\n                \"owner\": \"xLBYsiewP\",\n                \"createdOn\": \"2019-07-20T03:46:35.000Z\",\n                \"itemsList\": []\n            }\n        }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Route not found in the application || Internal serever error\",\n     \"status\": \"500 || 404\",\n     \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/todoList.js",
    "groupTitle": "List",
    "name": "GetApiV1ListsUseridListidDelete"
  },
  {
    "group": "List",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/lists/:userId/:listId/edit",
    "title": "api to get the list information.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": "<p>user id of the list owner. (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>of the particular list to be fetched. (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user (query param)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"list found\",\n            \"status\": 200,\n            \"data\": {\n                \"title\": \"Work1\",\n                \"id\": \"d9iESILMD\",\n                \"owner\": \"xLBYsiewP\",\n                \"itemsList\": []\n            }\n        }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Route not found in the application || Internal serever error\",\n     \"status\": \"500 || 404\",\n     \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/todoList.js",
    "groupTitle": "List",
    "name": "GetApiV1ListsUseridListidEdit"
  },
  {
    "group": "List",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/lists/create",
    "title": "api to create a first list.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>for the list. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": "<p>user id of the list owner. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user (query param)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"first list created successfully !\",\n            \"status\": 200,\n            \"data\": {\n                \"title\": \"first list\",\n                \"id\": \"TZKD4JKL1\",\n                \"owner\": \"xLBYsiewP\",\n                \"createdOn\": \"2019-07-20T11:42:58.000Z\",\n                \"itemsList\": []\n            }\n        }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Route not found in the application || Internal serever error\",\n     \"status\": \"500 || 404\",\n     \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/todoList.js",
    "groupTitle": "List",
    "name": "PostApiV1ListsCreate"
  },
  {
    "group": "SubItem",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/lists/:userId/:listId/:itemId/add",
    "title": "api to add new sub item to item.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": "<p>user id of the list owner. (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>of the particular list. (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemId",
            "description": "<p>of the particular item (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>of the sub item to be added (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user (query param)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"added sub item to items list new item sucessfully\",\n            \"status\": 200,\n            \"data\": {\n                \"title\": \"first Item\",\n                \"subItem\": {\n                    \"subItemId\": \"p0cJL3IdZ\",\n                    \"title\": \"first sub Item\"\n                }\n            }\n        }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Route not found in the application || Internal serever error\",\n     \"status\": \"500 || 404\",\n     \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/todoList.js",
    "groupTitle": "SubItem",
    "name": "PostApiV1ListsUseridListidItemidAdd"
  },
  {
    "group": "SubItem",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/lists/:userId/:listId/:itemId/:subItemId/delete",
    "title": "api to delete existing sub item from item.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": "<p>user id of the list owner. (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>of the particular list. (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemId",
            "description": "<p>of the particular item (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "subItemId",
            "description": "<p>of the sub item to be deleted (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user (query param)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"deleted sub item from the items list new item sucessfully\",\n            \"status\": 200,\n            \"data\": {\n                \"title\": \"first Item\",\n                \"details\": {\n                    \"title\": \"first list\",\n                    \"owner\": \"xLBYsiewP\",\n                    \"itemsList\": [\n                        {\n                            \"fileName\": \"\",\n                            \"fileLocation\": \"\",\n                            \"isOpen\": false,\n                            \"isDone\": true,\n                            \"subitemsList\": [\n                                {\n                                    \"isDone\": false,\n                                    \"subItemId\": \"p0cJL3IdZ\",\n                                    \"title\": \"first sub Item\"\n                                },\n                                {\n                                    \"isDone\": false,\n                                    \"subItemId\": \"lweioDs3w\",\n                                    \"title\": \"second sub Item\"\n                                },\n                                {\n                                    \"isDone\": false,\n                                    \"subItemId\": \"EIL20lzi2\",\n                                    \"title\": \"third sub item\"\n                                }\n                            ],\n                            \"itemId\": \"4dOElaEZe\",\n                            \"title\": \"first Item\",\n                            \"startDate\": null,\n                            \"endDate\": \"2019-07-20T14:14:26.000Z\"\n                        }\n                    ],\n                }\n            }\n        }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Route not found in the application || Internal serever error\",\n     \"status\": \"500 || 404\",\n     \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/todoList.js",
    "groupTitle": "SubItem",
    "name": "PostApiV1ListsUseridListidItemidSubitemidDelete"
  },
  {
    "group": "SubItem",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/lists/:userId/:listId/:itemId/:subItemId/markclose",
    "title": "api to mark sub item close to item.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": "<p>user id of the list owner. (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>of the particular list. (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemId",
            "description": "<p>of the particular item (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "subItemId",
            "description": "<p>of the sub item to be marked close (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user (query param)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"Mark sub item close successful\",\n            \"status\": 200,\n            \"data\": {\n                \"isDone\": false,\n                \"subItemId\": \"p0cJL3IdZ\",\n                \"title\": \"first sub Item\"\n            }\n        }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Route not found in the application || Internal serever error\",\n     \"status\": \"500 || 404\",\n     \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/todoList.js",
    "groupTitle": "SubItem",
    "name": "PostApiV1ListsUseridListidItemidSubitemidMarkclose"
  },
  {
    "group": "SubItem",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/lists/:userId/:listId/:itemId/:subItemId/markdone",
    "title": "api to mark sub item done to item.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": "<p>user id of the list owner. (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>of the particular list. (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemId",
            "description": "<p>of the particular item (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "subItemId",
            "description": "<p>of the sub item to be marked done (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "isDone",
            "description": "<p>selected sub item (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user (query param)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"Mark sub item done successful\",\n            \"status\": 200,\n            \"data\": {\n                \"isDone\": true,\n                \"subItemId\": \"p0cJL3IdZ\",\n                \"title\": \"first sub Item\"\n            }\n        }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Route not found in the application || Internal serever error\",\n     \"status\": \"500 || 404\",\n     \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/todoList.js",
    "groupTitle": "SubItem",
    "name": "PostApiV1ListsUseridListidItemidSubitemidMarkdone"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/:userId/activities",
    "title": "api for user to get activities.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>of the user. (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user (query param)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"error\": false,\n        \"message\": \"activities fetched\",\n        \"status\": 200,\n        \"data\": [\n            {\n                \"activityId\": \"deId9LIeE\",\n                \"userId\": \"xLBYsiewP\",\n                \"userName\": \"Titus Vimal Raj\",\n                \"message\": \"has created new list <b>first list</b>\",\n                \"activityType\": \"createlist\",\n                \"undoActivity\": \"deletelist\",\n                \"listData\": {\n                    \"title\": \"first list\",\n                    \"id\": \"d9iESILMD\",\n                    \"owner\": \"xLBYsiewP\",\n                    \"createdOn\": \"2019-07-20T15:25:28.000Z\",\n                    \"itemsList\": [],\n                },\n                \"itemData\": null,\n                \"subItemData\": null,\n                \"updatedOn\": \"2019-07-20T15:33:42.000Z\",\n            }\n        }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Route not found in the application || Internal serever error\",\n     \"status\": \"500 || 404\",\n     \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersUseridActivities"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/:userId/friends",
    "title": "api for user to get friends.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>of the user. (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user (query param)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"friends fetched\",\n            \"status\": 200,\n            \"data\": [\n                {\n                    \"userId\": \"Lxi4D9dk9\",\n                    \"userName\": \"vimal raj\",\n                    \"countryName\": \"India\",\n                    \"createdOn\": \"2019-07-20T14:12:30.000Z\"\n                }\n            ]\n        }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Route not found in the application || Internal serever error\",\n     \"status\": \"500 || 404\",\n     \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersUseridFriends"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/:userId/notfriends",
    "title": "api for user to find friends in the system.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>of the user. (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user (query param)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n          \"error\": false,\n          \"message\": \"users fetched\",\n          \"status\": 200,\n          \"data\": [\n              {\n                  \"userId\": \"Lxi4D9dk9\",\n                  \"fullName\": \"vimal raj\",\n                  \"mobileNumber\": 919256567988,\n                  \"countryName\": \"India\",\n                  \"email\": \"titus@todolist.com\",\n                  \"friends\": [\n                      {\n                          \"userId\": \"xLBYsiewP\",\n                          \"userName\": \"Titus Vimal Raj\",\n                          \"countryName\": \"Israel\",\n                          \"createdOn\": \"2019-07-20T13:25:40.000Z\"\n                      }\n                  ],\n                  \"requests\": []\n              }\n          ]\n      }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Route not found in the application || Internal serever error\",\n     \"status\": \"500 || 404\",\n     \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersUseridNotfriends"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/:userId/profile",
    "title": "api for user to get profile.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>of the user. (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user (query param)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"user fetched\",\n           \"status\": 200,\n           \"data\": {\n               \"userId\": \"xLBYsiewP\",\n               \"fullName\": \"Titus Vimal Raj\",\n               \"mobileNumber\": 122355789,\n               \"countryName\": \"Israel\",\n               \"countryPhoneCode\": \"972\",\n               \"email\": \"titusvimal@todolist.com\"\n           }\n       }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Route not found in the application || Internal serever error\",\n     \"status\": \"500 || 404\",\n     \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersUseridProfile"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/:userId/requests",
    "title": "api for user to get requests.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>of the user. (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user (query param)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"requests fetched\",\n            \"status\": 200,\n            \"data\": [\n                {\n                    \"userId\": \"Lxi4D9dk9\",\n                    \"userName\": \"vimal raj\",\n                    \"countryName\": \"India\",\n                    \"createdOn\": \"2019-07-20T13:55:09.000Z\"\n                }\n            ]\n        }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Route not found in the application || Internal serever error\",\n     \"status\": \"500 || 404\",\n     \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersUseridRequests"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "api for user login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"login successful\",\n            \"status\": 200,\n            \"data\": {\n                \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6ImRsTTBhV3BaSyIsImlhdCI6MTU1OTE3MjUyNjU5MCwiZXhwIjoxNTU5MjU4OTI2LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJpc3N1ZVRyYWNraW5nVG9vbCIsImRhdGEiOnsidXNlcklkIjoiY1FnS3J6eDhVIiwiZmlyc3ROYW1lIjoiYmhhc2thciIsImxhc3ROYW1lIjoicGF3YXIiLCJjb3VudHJ5TmFtZSI6IkJhbmdsYWRlc2giLCJjb3VudHJ5Q29kZSI6IkJEIiwiY291bnRyeVBob25lQ29kZSI6Ijg4MCIsImVtYWlsIjoiYmhhc2thckBleGFtcGxlLmNvbSIsInNlY3JldEtleSI6IlRoaXNpc215YXBwbGljYXRpb25zZWNyZXRrZXlzdG9yZWRpbkRCc290aGF0bm9ib2R5Q2FuR3Vlc3MifX0.mTHPf_-zohaLEY0Hcuc9vwZqFLuvDEifANEnsKNUPQo\",\n                \"userDetails\": {\n                    \"userId\": \"Lxi4D9dk9\",\n                    \"firstName\": \"titus\",\n                    \"lastName\": \" vimal raj\",\n                    \"countryName\": \"India\",\n                    \"countryCode\": \"IN\",\n                    \"countryPhoneCode\": \"91\",\n                    \"email\": \"titus@example.com\"\n                }\n            }\n        }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Route not found in the application || Internal serever error\",\n     \"status\": \"500 || 404\",\n     \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/logout",
    "title": "api for user to log out of the application.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"error\": false,\n        \"message\": \"Logged Out Successfully\",\n        \"status\": 200,\n        \"data\": null\n    }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Route not found in the application || Internal serever error\",\n     \"status\": \"500 || 404\",\n     \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogout"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/requests/accept",
    "title": "api for user to accept request of the user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>of the sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderName",
            "description": "<p>of the sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderCountry",
            "description": "<p>of the sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "receiverId",
            "description": "<p>of the sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "receiverName",
            "description": "<p>of the sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "receiverCountry",
            "description": "<p>of the sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user (query param)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"request has been accepted\",\n            \"status\": 200,\n            \"data\": {\n                \"sender\": {\n                    \"userId\": \"Lxi4D9dk9\",\n                    \"userName\": \"vimal raj\",\n                    \"countryName\": \"India\",\n                    \"createdOn\": \"2019-07-20T14:19:06Z\"\n                },\n                \"receiver\": {\n                    \"userId\": \"xLBYsiewP\",\n                    \"userName\": \"Titus Vimal Raj\",\n                    \"countryName\": \"Israel\",\n                    \"createdOn\": \"2019-07-20T14:36:04Z\"\n                }\n            }\n        }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Route not found in the application || Internal serever error\",\n     \"status\": \"500 || 404\",\n     \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersRequestsAccept"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/reset",
    "title": "api for user to send email for reset password.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>new password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n          \"error\": false,\n          \"message\": \"password reset successful !\",\n          \"status\": 200,\n          \"data\": {\n              \"userId\": \"KEIWO398d\",\n              \"email\": \"titusvimalraj@gmail.com\"\n          }\n      }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Route not found in the application || Internal serever error\",\n     \"status\": \"500 || 404\",\n     \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersReset"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/sendemail",
    "title": "api for user to send email for reset password.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ClientUrl",
            "description": "<p>. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"reset password link sent successfully ! check your inbox\",\n            \"status\": 200,\n            \"data\": {\n                \"accepted\": [\n                    \"vimalraj@gmail.com\n                ],\n                \"rejected\": [],\n                \"envelopeTime\": 1039,\n                \"messageTime\": 1017,\n                \"messageSize\": 389,\n                \"response\": \"250 2.0.0 OK  1559344676 x18sm8075150pfo.8 - gsmtp\",\n                \"envelope\": {\n                    \"from\": \"titusvimalraj@gmail.com\",\n                    \"to\": [\n                        \"vimalraj@gmail.com\"\n                    ]\n                },\n                \"messageId\": \"<0114b13d-0f87-af2c-cc5c-56a5fe5hj581@gmail.com>\"\n            }\n        }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Route not found in the application || Internal serever error\",\n     \"status\": \"500 || 404\",\n     \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSendemail"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "api for user signup.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryName",
            "description": "<p>countryName of the user (body Param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryCode",
            "description": "<p>countryCode of the user (body param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryPhoneCode",
            "description": "<p>of the user (body param) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Signed up successfully !\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\": \"Lxi4D9dk9\",\n        \"firstName\": \"titus\",\n        \"lastName\": \" vimal raj\",\n        \"countryName\": \"India\",\n        \"countryCode\": \"IN\",\n        \"countryPhoneCode\": \"91\",\n        \"email\": \"titus@example.com\",\n        \"createdOn\": \"2019-05-29T17:16:41.000Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Route not found in the application || Internal serever error\",\n     \"status\": \"500 || 404\",\n     \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSignup"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/:userId/activities/:activityId/delete",
    "title": "api for user to delete activity.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>of the user. (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "activityId",
            "description": "<p>of the user. (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user (query param)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"deleted activity successfully\",\n            \"status\": 200,\n            \"data\": {\n                \"activityId\": \"deId9LIeE\",\n                \"userId\": \"xLBYsiewP\",\n                \"userName\": \"Titus Vimal Raj\",\n                \"message\": \"has created new list <b>first list</b>\",\n                \"activityType\": \"createlist\",\n                \"undoActivity\": \"deletelist\",\n                \"listData\": {\n                    \"title\": \"first list\",\n                    \"id\": \"d9iESILMD\",\n                    \"owner\": \"xLBYsiewP\",\n                    \"createdOn\": \"2019-07-20T17:25:14.000Z\",\n                    \"itemsList\": [],\n                },\n                \"itemData\": null,\n                \"subItemData\": null,\n                \"updatedOn\": \"2019-07-20T17:29:12.000Z\",\n            }\n        }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Route not found in the application || Internal serever error\",\n     \"status\": \"500 || 404\",\n     \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersUseridActivitiesActivityidDelete"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/:userId/requests/delete",
    "title": "api for user to cancel request of the user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>of the user. (request params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user (query param)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"error\": false,\n      \"message\": \"request cancelled successfully\",\n      \"status\": 200,\n      \"data\": {\n          \"requests\": []\n      }\n  }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersUseridRequestsDelete"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/:userId/sendrequest",
    "title": "api for user to send request to another user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>of the user whom you sent the request. (request param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryName",
            "description": "<p>country of the user who sent the request (body param)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>of the user who sent the request (body param)(rquired)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user (query param)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"error\": false,\n        \"message\": \"request has been sent successfully\",\n        \"status\": 200,\n        \"data\": {\n            \"userId\": \"Lxi4D9dk9\",\n            \"userName\": \"vimal raj\",\n            \"countryName\": \"India\",\n            \"createdOn\": \"2019-07-20T13:35:12.000Z\"\n        }\n    }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Route not found in the application || Internal serever error\",\n     \"status\": \"500 || 404\",\n     \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersUseridSendrequest"
  }
] });
