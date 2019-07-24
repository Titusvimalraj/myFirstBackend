const appConfig = require('../../config/appConfig');
const todoListController = require('../controllers/todoListController');
const editItemController = require('../controllers/editItemController');
const editListController = require('../controllers/editListController');
const activityController = require('../controllers/activityController');
const authMiddleware = require('../middlewares/auth');
/**
 * This method is used to define routes for this module
 * @author Titus Vimal Raj
 * @param {*} app 
 */
const setRouter = (app) => {
    let baseUrl = `${appConfig.apiVersion}/lists`;
    // list operations
    /**
      * @apiGroup List
      * @apiVersion  1.0.0
      * @api {post} /api/v1/lists/create api to create a first list.
      * @apiParam {string} title for the list. (body params) (required)
      * @apiParam {string} owner user id of the list owner. (body params) (required)
      * @apiParam {string} authToken of the user (query param)(required)
      * @apiSuccess {object} myResponse shows error status, message, http status code, result.
      * @apiSuccessExample {object} Success-Response:
      * {
            "error": false,
            "message": "first list created successfully !",
            "status": 200,
            "data": {
                "title": "first list",
                "id": "TZKD4JKL1",
                "owner": "xLBYsiewP",
                "createdOn": "2019-07-20T11:42:58.000Z",
                "itemsList": []
            }
        }
          @apiErrorExample {json} Error-Response:
            {
                 "error": true,
                 "message": "Route not found in the application || Internal serever error",
                 "status": "500 || 404",
                 "data" : "null"
            }
    */
    app.post(`${baseUrl}/create`, authMiddleware.isAuthorized, todoListController.createNewList);
    /**
      * @apiGroup List
      * @apiVersion  1.0.0
      * @api {get} /api/v1/lists/:userId/all api to get all the list of the user.
      * @apiParam {string} owner user id of the list owner. (request params) (required)
      * @apiParam {string} authToken of the user (query param)(required)
      * @apiSuccess {object} myResponse shows error status, message, http status code, result.
      * @apiSuccessExample {object} Success-Response:
      * {
        "error": false,
        "message": "lists fetched successfully",
        "status": 200,
        "data": [
            {
                "title": "Work1",
                "id": "d9iESILMD",
                "owner": "xLBYsiewP",
                "createdOn": "2019-07-20T03:34:28.000Z",
                "itemsList": []
            },
            {
                "title": "first list",
                "id": "TZKD4JKL1",
                "owner": "xLBYsiewP",
                "createdOn": "2019-07-20T14:56:50.000Z",
                "itemsList": []
            }
        ]
        }
          @apiErrorExample {json} Error-Response:
            {
                 "error": true,
                 "message": "Route not found in the application || Internal serever error",
                 "status": "500 || 404",
                 "data" : "null"
            }
    */
    app.get(`${baseUrl}/:userId/all`, authMiddleware.isAuthorized, todoListController.getAllLists);
    /**
      * @apiGroup List
      * @apiVersion  1.0.0
      * @api {get} /api/v1/lists/:userId/:listId/edit api to get the list information.
      * @apiParam {string} owner user id of the list owner. (request params) (required)
      * @apiParam {string} listId of the particular list to be fetched. (request params) (required)
      * @apiParam {string} authToken of the user (query param)(required)
      * @apiSuccess {object} myResponse shows error status, message, http status code, result.
      * @apiSuccessExample {object} Success-Response:
      * {
            "error": false,
            "message": "list found",
            "status": 200,
            "data": {
                "title": "Work1",
                "id": "d9iESILMD",
                "owner": "xLBYsiewP",
                "itemsList": []
            }
        }
          @apiErrorExample {json} Error-Response:
            {
                 "error": true,
                 "message": "Route not found in the application || Internal serever error",
                 "status": "500 || 404",
                 "data" : "null"
            }
    */
    app.get(`${baseUrl}/:userId/:listId/edit`, authMiddleware.isAuthorized, editListController.getSingleList);
    /**
      * @apiGroup List
      * @apiVersion  1.0.0
      * @api {get} /api/v1/lists/:userId/:listId/delete api to delete the list.
      * @apiParam {string} owner user id of the list owner. (request params) (required)
      * @apiParam {string} listId of the particular list to be deleted. (request params) (required)
      * @apiParam {string} authToken of the user (query param)(required)
      * @apiSuccess {object} myResponse shows error status, message, http status code, result.
      * @apiSuccessExample {object} Success-Response:
      * {
            "error": false,
            "message": "deleted list Work1 sucessfully",
            "status": 200,
            "data": {
                "title": "Work1",
                "id": "d9iESILMD",
                "owner": "xLBYsiewP",
                "createdOn": "2019-07-20T03:46:35.000Z",
                "itemsList": []
            }
        }
          @apiErrorExample {json} Error-Response:
            {
                 "error": true,
                 "message": "Route not found in the application || Internal serever error",
                 "status": "500 || 404",
                 "data" : "null"
            }
    */
    app.post(`${baseUrl}/:userId/:listId/delete`, authMiddleware.isAuthorized, todoListController.deleteList);

    // item operations


    app.post(`${baseUrl}/:userId/:listId/:itemId/upload`, authMiddleware.isAuthorized, editItemController.uploadFileCloud);
    /**
     * @apiGroup Item
     * @apiVersion  1.0.0
     * @api {post} /api/v1/lists/:userId/:listId/add api to add the first list item .
     * @apiParam {string} owner user id of the list owner. (request params) (required)
     * @apiParam {string} listId of the particular list in which item to be added. (request params) (required)
     * @apiParam {string} title of the item to be added (body params) (required)
     * @apiParam {string} authToken of the user (query param)(required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * @apiSuccessExample {object} Success-Response:
     * {
           "error": false,
           "message": "added item to list first list sucessfully",
           "status": 200,
           "data": {
               "title": "first list",
               "item": {
                   "fileName": "",
                   "fileLocation": "",
                   "isOpen": false,
                   "isDone": false,
                   "itemId": "DzP3I49Lu",
                   "title": "first Item",
                   "subitemsList": []
               }
           }
       }
         @apiErrorExample {json} Error-Response:
           {
                "error": true,
                "message": "Route not found in the application || Internal serever error",
                "status": "500 || 404",
                "data" : "null"
           }
   */
    app.post(`${baseUrl}/:userId/:listId/add`, authMiddleware.isAuthorized, editListController.addItemToList);
    /**
      * @apiGroup Item
      * @apiVersion  1.0.0
      * @api {put} /api/v1/lists/:userId/:listId/:itemId/edit api to edit the existing item .
      * @apiParam {string} owner user id of the list owner. (request params) (required)
      * @apiParam {string} listId of the particular list in which item to be added. (request params) (required)
      * @apiParam {string} itemId of the item to be edited (request params)(required)
      * @apiParam {string} title of the item to be edited (body params) (optional)
      * @apiParam {string} description of the item to be edited (body params) (required)
      * @apiParam {date} due date of the item to be edited (body params) (required)
      * @apiParam {string} file name for of the item to be edited  (body params) (optional)
      * @apiParam {string} file location for of the item to be edited  (body params) (optional)
      * @apiParam {string} authToken of the user (query param)(required)
      * @apiSuccess {object} myResponse shows error status, message, http status code, result.
      * @apiSuccessExample {object} Success-Response:
      * {
            "error": false,
            "message": "item edited successfully ",
            "status": 200,
            "data": {
                "fileLocation": "E:/mediaStorage",
                "isOpen": false,
                "isDone": false,
                "subitemsList": [],
                "itemId": "DzP3I49Lu",
                "title": "item modified",
                "description": "modified item title",
                "dueDate": "2019-07-20T16:40:00.000Z"
            }
        }
          @apiErrorExample {json} Error-Response:
            {
                 "error": true,
                 "message": "Route not found in the application || Internal serever error",
                 "status": "500 || 404",
                 "data" : "null"
            }
    */
    app.put(`${baseUrl}/:userId/:listId/:itemId/edit`, authMiddleware.isAuthorized, editItemController.editItemInList);
    /**
      * @apiGroup Item
      * @apiVersion  1.0.0
      * @api {get} /api/v1/lists/:userId/:listId/:itemId/edit api to get the single list item .
      * @apiParam {string} owner user id of the list owner. (request params) (required)
      * @apiParam {string} listId of the particular list. (request params) (required)
      * @apiParam {string} itemId of the item to be fetched (request params) (required)
      * @apiParam {string} authToken of the user (query param)(required)
      * @apiSuccess {object} myResponse shows error status, message, http status code, result.
      * @apiSuccessExample {object} Success-Response:
      * {
            "error": false,
            "message": "item fetched",
            "status": 200,
            "data": {
                "fileName": "",
                "fileLocation": "E:/mediaStorage",
                "isOpen": false,
                "isDone": false,
                "subitemsList": [],
                "itemId": "DzP3I49Lu",
                "title": "item modified",
                "description": "modified item title",
                "dueDate": "2019-07-20T16:50:00.000Z"
            }
        }
          @apiErrorExample {json} Error-Response:
            {
                 "error": true,
                 "message": "Route not found in the application || Internal serever error",
                 "status": "500 || 404",
                 "data" : "null"
            }
    */
    app.get(`${baseUrl}/:userId/:listId/:itemId/edit`, authMiddleware.isAuthorized, editItemController.getSingleItem);
    /**
      * @apiGroup Item
      * @apiVersion  1.0.0
      * @api {post} /api/v1/lists/:userId/:listId/:itemId/delete api to delete the list item .
      * @apiParam {string} owner user id of the list owner. (request params) (required)
      * @apiParam {string} listId of the particular list. (request params) (required)
      * @apiParam {string} itemId of the item to be deleted (request params) (required)
      * @apiParam {string} authToken of the user (query param)(required)
      * @apiSuccess {object} myResponse shows error status, message, http status code, result.
      * @apiSuccessExample {object} Success-Response:
      * {
            "error": false,
            "message": "deleted item from the list first list sucessfully",
            "status": 200,
            "data": {
                "title": "first list",
                "owner": "xLBYsiewP",
                "itemsList": [],
            }
        }
          @apiErrorExample {json} Error-Response:
            {
                 "error": true,
                 "message": "Route not found in the application || Internal serever error",
                 "status": "500 || 404",
                 "data" : "null"
            }
    */
    app.post(`${baseUrl}/:userId/:listId/:itemId/delete`, authMiddleware.isAuthorized, editListController.deleteItemfromList);
    /**
      * @apiGroup Item
      * @apiVersion  1.0.0
      * @api {post} /api/v1/lists/:userId/:listId/:itemId/markopen api to mark the list item open.
      * @apiParam {string} owner user id of the list owner. (request params) (required)
      * @apiParam {string} listId of the particular list. (request params) (required)
      * @apiParam {string} itemId of the item to be marked open (request params) (required)
      * @apiParam {string} authToken of the user (query param)(required)
      * @apiSuccess {object} myResponse shows error status, message, http status code, result.
      * @apiSuccessExample {object} Success-Response:
      * {
            "error": false,
            "message": "item marked open successfully",
            "status": 200,
            "data": {
                "fileName": "",
                "fileLocation": "",
                "isOpen": true,
                "isDone": false,
                "subitemsList": [],
                "itemId": "4dOElaEZe",
                "title": "first Item",
                "startDate": "2019-07-20T16:33:52.000Z"
            }
        }
          @apiErrorExample {json} Error-Response:
            {
                 "error": true,
                 "message": "Route not found in the application || Internal serever error",
                 "status": "500 || 404",
                 "data" : "null"
            }
    */
    app.post(`${baseUrl}/:userId/:listId/:itemId/markopen`, authMiddleware.isAuthorized, editListController.markItemIsOpen);
    /**
      * @apiGroup Item
      * @apiVersion  1.0.0
      * @api {post} /api/v1/lists/:userId/:listId/:itemId/markclose api to mark the list item close.
      * @apiParam {string} owner user id of the list owner. (request params) (required)
      * @apiParam {string} listId of the particular list. (request params) (required)
      * @apiParam {string} itemId of the item to be marked close (request params) (required)
      * @apiParam {string} authToken of the user (query param)(required)
      * @apiSuccess {object} myResponse shows error status, message, http status code, result.
      * @apiSuccessExample {object} Success-Response:
      * {
            "error": false,
            "message": "item marked closed successfully",
            "status": 200,
            "data": {
                "fileName": "",
                "fileLocation": "",
                "isOpen": false,
                "isDone": false,
                "subitemsList": [],
                "itemId": "4dOElaEZe",
                "title": "first Item",
                "startDate": null,
                "endDate": null
            }
        }
          @apiErrorExample {json} Error-Response:
            {
                 "error": true,
                 "message": "Route not found in the application || Internal serever error",
                 "status": "500 || 404",
                 "data" : "null"
            }
    */
    app.post(`${baseUrl}/:userId/:listId/:itemId/markclose`, authMiddleware.isAuthorized, activityController.markItemIsClose);
    /**
      * @apiGroup Item
      * @apiVersion  1.0.0
      * @api {post} /api/v1/lists/:userId/:listId/:itemId/markdone api to mark the list item done.
      * @apiParam {string} owner user id of the list owner. (request params) (required)
      * @apiParam {string} listId of the particular list. (request params) (required)
      * @apiParam {string} itemId of the item to be marked done (request params) (required)
      * @apiParam {string} authToken of the user (query param)(required)
      * @apiSuccess {object} myResponse shows error status, message, http status code, result.
      * @apiSuccessExample {object} Success-Response:
      * {
            "error": false,
            "message": "item marked done successfully",
            "status": 200,
            "data": {
                "fileName": "",
                "fileLocation": "",
                "isOpen": false,
                "isDone": true,
                "subitemsList": [],
                "itemId": "4dOElaEZe",
                "title": "first Item",
                "startDate": null,
                "endDate": "2019-07-20T16:56:45.000Z"
            }
        }
          @apiErrorExample {json} Error-Response:
            {
                 "error": true,
                 "message": "Route not found in the application || Internal serever error",
                 "status": "500 || 404",
                 "data" : "null"
            }
    */
    app.post(`${baseUrl}/:userId/:listId/:itemId/markdone`, authMiddleware.isAuthorized, editListController.markItemIsDone);

    //sub item operations
    /**
      * @apiGroup SubItem
      * @apiVersion  1.0.0
      * @api {post} /api/v1/lists/:userId/:listId/:itemId/add api to add new sub item to item.
      * @apiParam {string} owner user id of the list owner. (request params) (required)
      * @apiParam {string} listId of the particular list. (request params) (required)
      * @apiParam {string} itemId of the particular item (request params) (required)
      * @apiParam {string} title of the sub item to be added (body params) (required)
      * @apiParam {string} authToken of the user (query param)(required)
      * @apiSuccess {object} myResponse shows error status, message, http status code, result.
      * @apiSuccessExample {object} Success-Response:
        * {
            "error": false,
            "message": "added sub item to items list new item sucessfully",
            "status": 200,
            "data": {
                "title": "first Item",
                "subItem": {
                    "subItemId": "p0cJL3IdZ",
                    "title": "first sub Item"
                }
            }
        }
          @apiErrorExample {json} Error-Response:
            {
                 "error": true,
                 "message": "Route not found in the application || Internal serever error",
                 "status": "500 || 404",
                 "data" : "null"
            }
    */
    app.post(`${baseUrl}/:userId/:listId/:itemId/add`, authMiddleware.isAuthorized, editItemController.addSubItemToItemList);
    /**
      * @apiGroup SubItem
      * @apiVersion  1.0.0
      * @api {post} /api/v1/lists/:userId/:listId/:itemId/:subItemId/delete api to delete existing sub item from item.
      * @apiParam {string} owner user id of the list owner. (request params) (required)
      * @apiParam {string} listId of the particular list. (request params) (required)
      * @apiParam {string} itemId of the particular item (request params) (required)
      * @apiParam {string} subItemId of the sub item to be deleted (request params) (required)
      * @apiParam {string} authToken of the user (query param)(required)
      * @apiSuccess {object} myResponse shows error status, message, http status code, result.
      * @apiSuccessExample {object} Success-Response:
      *{
            "error": false,
            "message": "deleted sub item from the items list new item sucessfully",
            "status": 200,
            "data": {
                "title": "first Item",
                "details": {
                    "title": "first list",
                    "owner": "xLBYsiewP",
                    "itemsList": [
                        {
                            "fileName": "",
                            "fileLocation": "",
                            "isOpen": false,
                            "isDone": true,
                            "subitemsList": [
                                {
                                    "isDone": false,
                                    "subItemId": "p0cJL3IdZ",
                                    "title": "first sub Item"
                                },
                                {
                                    "isDone": false,
                                    "subItemId": "lweioDs3w",
                                    "title": "second sub Item"
                                },
                                {
                                    "isDone": false,
                                    "subItemId": "EIL20lzi2",
                                    "title": "third sub item"
                                }
                            ],
                            "itemId": "4dOElaEZe",
                            "title": "first Item",
                            "startDate": null,
                            "endDate": "2019-07-20T14:14:26.000Z"
                        }
                    ],
                }
            }
        }
          @apiErrorExample {json} Error-Response:
            {
                 "error": true,
                 "message": "Route not found in the application || Internal serever error",
                 "status": "500 || 404",
                 "data" : "null"
            }
    */
    app.post(`${baseUrl}/:userId/:listId/:itemId/:subItemId/delete`, authMiddleware.isAuthorized, editItemController.deleteSubItemfromItemsList);
    /**
      * @apiGroup SubItem
      * @apiVersion  1.0.0
      * @api {post} /api/v1/lists/:userId/:listId/:itemId/:subItemId/markdone api to mark sub item done to item.
      * @apiParam {string} owner user id of the list owner. (request params) (required)
      * @apiParam {string} listId of the particular list. (request params) (required)
      * @apiParam {string} itemId of the particular item (request params) (required)
      * @apiParam {string} subItemId of the sub item to be marked done (request params) (required)
      * @apiParam {boolean} isDone selected sub item (body params)(required)
      * @apiParam {string} authToken of the user (query param)(required)
      * @apiSuccess {object} myResponse shows error status, message, http status code, result.
      * @apiSuccessExample {object} Success-Response:
      *{
            "error": false,
            "message": "Mark sub item done successful",
            "status": 200,
            "data": {
                "isDone": true,
                "subItemId": "p0cJL3IdZ",
                "title": "first sub Item"
            }
        }
          @apiErrorExample {json} Error-Response:
            {
                 "error": true,
                 "message": "Route not found in the application || Internal serever error",
                 "status": "500 || 404",
                 "data" : "null"
            }
    */
    app.post(`${baseUrl}/:userId/:listId/:itemId/:subItemId/markdone`, authMiddleware.isAuthorized, editItemController.markSubItemDone);
    /**
      * @apiGroup SubItem
      * @apiVersion  1.0.0
      * @api {post} /api/v1/lists/:userId/:listId/:itemId/:subItemId/markclose api to mark sub item close to item.
      * @apiParam {string} owner user id of the list owner. (request params) (required)
      * @apiParam {string} listId of the particular list. (request params) (required)
      * @apiParam {string} itemId of the particular item (request params) (required)
      * @apiParam {string} subItemId of the sub item to be marked close (request params) (required)
      * @apiParam {string} authToken of the user (query param)(required)
      * @apiSuccess {object} myResponse shows error status, message, http status code, result.
      * @apiSuccessExample {object} Success-Response:
      *{
            "error": false,
            "message": "Mark sub item close successful",
            "status": 200,
            "data": {
                "isDone": false,
                "subItemId": "p0cJL3IdZ",
                "title": "first sub Item"
            }
        }
          @apiErrorExample {json} Error-Response:
            {
                 "error": true,
                 "message": "Route not found in the application || Internal serever error",
                 "status": "500 || 404",
                 "data" : "null"
            }
    */
    app.post(`${baseUrl}/:userId/:listId/:itemId/:subItemId/markclose`, authMiddleware.isAuthorized, activityController.markSubItemclose);
}

module.exports = {
    setRouter: setRouter
}
