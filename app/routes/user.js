
const appConfig = require('../../config/appConfig');
const userController = require('../controllers/userController');
const resetPassController = require('../controllers/restPasswordController');
const headerController = require('../controllers/headerController');
const requestsController = require('../controllers/requestsController');
const activityController = require('../controllers/activityController');
const authMiddleware = require('../middlewares/auth');
/**
 * This method is used to define routes for this module
 * @author Titus Vimal Raj
 * @param {*} app 
 */
const setRouter = (app) => {
    let baseUrl = `${appConfig.apiVersion}/users`;

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/signup api for user signup.
     *
     * @apiParam {string} firstName of the user. (body params) (required)
     * @apiParam {string} lastName of the user. (body params) (required)
     * @apiParam {string} mobileNumber of the user. (body params) (required)
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     * @apiParam {string} countryName countryName of the user (body Param) (required)
     * @apiParam {string} countryCode countryCode of the user (body param) (required)
     * @apiParam {string} countryPhoneCode of the user (body param) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {json} Success-Response:
        {
            "error": false,
            "message": "Signed up successfully !",
            "status": 200,
            "data": {
                "userId": "Lxi4D9dk9",
                "firstName": "titus",
                "lastName": " vimal raj",
                "countryName": "India",
                "countryCode": "IN",
                "countryPhoneCode": "91",
                "email": "titus@example.com",
                "createdOn": "2019-05-29T17:16:41.000Z"
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
    app.post(`${baseUrl}/signup`, userController.signUp);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/login api for user login.
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * @apiSuccessExample {object} Success-Response:
     * {
            "error": false,
            "message": "login successful",
            "status": 200,
            "data": {
                "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6ImRsTTBhV3BaSyIsImlhdCI6MTU1OTE3MjUyNjU5MCwiZXhwIjoxNTU5MjU4OTI2LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJpc3N1ZVRyYWNraW5nVG9vbCIsImRhdGEiOnsidXNlcklkIjoiY1FnS3J6eDhVIiwiZmlyc3ROYW1lIjoiYmhhc2thciIsImxhc3ROYW1lIjoicGF3YXIiLCJjb3VudHJ5TmFtZSI6IkJhbmdsYWRlc2giLCJjb3VudHJ5Q29kZSI6IkJEIiwiY291bnRyeVBob25lQ29kZSI6Ijg4MCIsImVtYWlsIjoiYmhhc2thckBleGFtcGxlLmNvbSIsInNlY3JldEtleSI6IlRoaXNpc215YXBwbGljYXRpb25zZWNyZXRrZXlzdG9yZWRpbkRCc290aGF0bm9ib2R5Q2FuR3Vlc3MifX0.mTHPf_-zohaLEY0Hcuc9vwZqFLuvDEifANEnsKNUPQo",
                "userDetails": {
                    "userId": "Lxi4D9dk9",
                    "firstName": "titus",
                    "lastName": " vimal raj",
                    "countryName": "India",
                    "countryCode": "IN",
                    "countryPhoneCode": "91",
                    "email": "titus@example.com"
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
    app.post(`${baseUrl}/login`, userController.login);
    app.get(`${baseUrl}/reset`, userController.checkUserExistence);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/sendemail api for user to send email for reset password.
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} ClientUrl . (body params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * @apiSuccessExample {object} Success-Response:
     * {
            "error": false,
            "message": "reset password link sent successfully ! check your inbox",
            "status": 200,
            "data": {
                "accepted": [
                    "vimalraj@gmail.com
                ],
                "rejected": [],
                "envelopeTime": 1039,
                "messageTime": 1017,
                "messageSize": 389,
                "response": "250 2.0.0 OK  1559344676 x18sm8075150pfo.8 - gsmtp",
                "envelope": {
                    "from": "titusvimalraj@gmail.com",
                    "to": [
                        "vimalraj@gmail.com"
                    ]
                },
                "messageId": "<0114b13d-0f87-af2c-cc5c-56a5fe5hj581@gmail.com>"
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
    app.post(`${baseUrl}/sendemail`, userController.sendEmail);

    /**
    * @apiGroup users
    * @apiVersion  1.0.0
    * @api {post} /api/v1/users/reset api for user to send email for reset password.
    * @apiParam {string} email email of the user. (body params) (required)
    * @apiParam {string} password new password of the user. (body params) (required)
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * @apiSuccessExample {object} Success-Response:
    *  {
           "error": false,
           "message": "password reset successful !",
           "status": 200,
           "data": {
               "userId": "KEIWO398d",
               "email": "titusvimalraj@gmail.com"
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
    app.post(`${baseUrl}/reset`, resetPassController.resetPassword);

    /**
  * @apiGroup users
  * @apiVersion  1.0.0
  * @api {post} /api/v1/users/logout api for user to log out of the application.
  * @apiParam {string} userId of the user. (body params) (required)
  * @apiSuccess {object} myResponse shows error status, message, http status code, result.
  * @apiSuccessExample {object} Success-Response:
  * {
        "error": false,
        "message": "Logged Out Successfully",
        "status": 200,
        "data": null
    }
      @apiErrorExample {json} Error-Response:
        {
             "error": true,
             "message": "Route not found in the application || Internal serever error",
             "status": "500 || 404",
             "data" : "null"
        }
 */
    app.post(`${baseUrl}/logout`, userController.logout);
    /**
    * @apiGroup users
    * @apiVersion  1.0.0
    * @api {get} /api/v1/users/:userId/notfriends api for user to find friends in the system.
    * @apiParam {string} userId of the user. (request params) (required)
    * @apiParam {string} authToken of the user (query param)(required)
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * @apiSuccessExample {object} Success-Response:
    * {
          "error": false,
          "message": "users fetched",
          "status": 200,
          "data": [
              {
                  "userId": "Lxi4D9dk9",
                  "fullName": "vimal raj",
                  "mobileNumber": 919256567988,
                  "countryName": "India",
                  "email": "titus@todolist.com",
                  "friends": [
                      {
                          "userId": "xLBYsiewP",
                          "userName": "Titus Vimal Raj",
                          "countryName": "Israel",
                          "createdOn": "2019-07-20T13:25:40.000Z"
                      }
                  ],
                  "requests": []
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
    app.get(`${baseUrl}/:userId/notfriends`, authMiddleware.isAuthorized, headerController.getUsersWithoutFriends);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {get} /api/v1/users/:userId/profile api for user to get profile.
     * @apiParam {string} userId of the user. (request params) (required)
     * @apiParam {string} authToken of the user (query param)(required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * @apiSuccessExample {object} Success-Response:
     * {
           "error": false,
           "message": "user fetched",
           "status": 200,
           "data": {
               "userId": "xLBYsiewP",
               "fullName": "Titus Vimal Raj",
               "mobileNumber": 122355789,
               "countryName": "Israel",
               "countryPhoneCode": "972",
               "email": "titusvimal@todolist.com"
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
    app.get(`${baseUrl}/:userId/profile`, authMiddleware.isAuthorized, headerController.getSingUser);
    /**
  * @apiGroup users
  * @apiVersion  1.0.0
  * @api {post} /api/v1/users/:userId/sendrequest api for user to send request to another user.
  * @apiParam {string} userId of the user whom you sent the request. (request param) (required)
  * @apiParam {string} userId of the user who sent the request (body param) (required)
  * @apiParam {string} countryName country of the user who sent the request (body param)(required)
  * @apiParam {string} userName of the user who sent the request (body param)(rquired)
  * @apiParam {string} authToken of the user (query param)(required)
  * @apiSuccess {object} myResponse shows error status, message, http status code, result.
  * @apiSuccessExample {object} Success-Response:
  * {
        "error": false,
        "message": "request has been sent successfully",
        "status": 200,
        "data": {
            "userId": "Lxi4D9dk9",
            "userName": "vimal raj",
            "countryName": "India",
            "createdOn": "2019-07-20T13:35:12.000Z"
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
    app.post(`${baseUrl}/:userId/sendrequest`, authMiddleware.isAuthorized, headerController.updateSentRequest);
    /**
      * @apiGroup users
      * @apiVersion  1.0.0
      * @api {get} /api/v1/users/:userId/requests api for user to get requests.
      * @apiParam {string} userId of the user. (request params) (required)
      * @apiParam {string} authToken of the user (query param)(required)
      * @apiSuccess {object} myResponse shows error status, message, http status code, result.
      * @apiSuccessExample {object} Success-Response:
      * {
            "error": false,
            "message": "requests fetched",
            "status": 200,
            "data": [
                {
                    "userId": "Lxi4D9dk9",
                    "userName": "vimal raj",
                    "countryName": "India",
                    "createdOn": "2019-07-20T13:55:09.000Z"
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
    app.get(`${baseUrl}/:userId/requests`, authMiddleware.isAuthorized, headerController.getUserRequests);
    /**
      * @apiGroup users
      * @apiVersion  1.0.0
      * @api {get} /api/v1/users/:userId/friends api for user to get friends.
      * @apiParam {string} userId of the user. (request params) (required)
      * @apiParam {string} authToken of the user (query param)(required)
      * @apiSuccess {object} myResponse shows error status, message, http status code, result.
      * @apiSuccessExample {object} Success-Response:
        * {
            "error": false,
            "message": "friends fetched",
            "status": 200,
            "data": [
                {
                    "userId": "Lxi4D9dk9",
                    "userName": "vimal raj",
                    "countryName": "India",
                    "createdOn": "2019-07-20T14:12:30.000Z"
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
    app.get(`${baseUrl}/:userId/friends`, authMiddleware.isAuthorized, headerController.getUserFriends);
    /**
    * @apiGroup users
    * @apiVersion  1.0.0
    * @api {post} /api/v1/users/:userId/requests/delete api for user to cancel request of the user.
    * @apiParam {string} userId of the user. (request params) (required)
    * @apiParam {string} authToken of the user (query param)(required)
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * @apiSuccessExample {object} Success-Response:
    * {
      "error": false,
      "message": "request cancelled successfully",
      "status": 200,
      "data": {
          "requests": []
      }
  }
   */
    app.post(`${baseUrl}/:userId/requests/delete`, authMiddleware.isAuthorized, requestsController.cancelUserRequest);
    /**
      * @apiGroup users
      * @apiVersion  1.0.0
      * @api {post} /api/v1/users/requests/accept api for user to accept request of the user.
      * @apiParam {string} senderId of the sender. (body params) (required)
      * @apiParam {string} senderName of the sender. (body params) (required)
      * @apiParam {string} senderCountry of the sender. (body params) (required)
      * @apiParam {string} receiverId of the sender. (body params) (required)
      * @apiParam {string} receiverName of the sender. (body params) (required)
      * @apiParam {string} receiverCountry of the sender. (body params) (required)
      * @apiParam {string} authToken of the user (query param)(required)
      * @apiSuccess {object} myResponse shows error status, message, http status code, result.
      * @apiSuccessExample {object} Success-Response:
      *{
            "error": false,
            "message": "request has been accepted",
            "status": 200,
            "data": {
                "sender": {
                    "userId": "Lxi4D9dk9",
                    "userName": "vimal raj",
                    "countryName": "India",
                    "createdOn": "2019-07-20T14:19:06Z"
                },
                "receiver": {
                    "userId": "xLBYsiewP",
                    "userName": "Titus Vimal Raj",
                    "countryName": "Israel",
                    "createdOn": "2019-07-20T14:36:04Z"
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
    app.post(`${baseUrl}/requests/accept`, authMiddleware.isAuthorized, requestsController.acceptFriendRequest);
    /**
      * @apiGroup users
      * @apiVersion  1.0.0
      * @api {get} /api/v1/users/:userId/activities api for user to get activities.
      * @apiParam {string} userId of the user. (request params) (required)
      * @apiParam {string} authToken of the user (query param)(required)
      * @apiSuccess {object} myResponse shows error status, message, http status code, result.
      * @apiSuccessExample {object} Success-Response:
      * {
        "error": false,
        "message": "activities fetched",
        "status": 200,
        "data": [
            {
                "activityId": "deId9LIeE",
                "userId": "xLBYsiewP",
                "userName": "Titus Vimal Raj",
                "message": "has created new list <b>first list</b>",
                "activityType": "createlist",
                "undoActivity": "deletelist",
                "listData": {
                    "title": "first list",
                    "id": "d9iESILMD",
                    "owner": "xLBYsiewP",
                    "createdOn": "2019-07-20T15:25:28.000Z",
                    "itemsList": [],
                },
                "itemData": null,
                "subItemData": null,
                "updatedOn": "2019-07-20T15:33:42.000Z",
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
    app.get(`${baseUrl}/:userId/activities`, authMiddleware.isAuthorized, activityController.getActivities);
    /**
      * @apiGroup users
      * @apiVersion  1.0.0
      * @api {post} /api/v1/users/:userId/activities/:activityId/delete api for user to delete activity.
      * @apiParam {string} userId of the user. (request params) (required)
      * @apiParam {string} activityId of the user. (request params) (required)
      * @apiParam {string} authToken of the user (query param)(required)
      * @apiSuccess {object} myResponse shows error status, message, http status code, result.
      * @apiSuccessExample {object} Success-Response:
      * {
            "error": false,
            "message": "deleted activity successfully",
            "status": 200,
            "data": {
                "activityId": "deId9LIeE",
                "userId": "xLBYsiewP",
                "userName": "Titus Vimal Raj",
                "message": "has created new list <b>first list</b>",
                "activityType": "createlist",
                "undoActivity": "deletelist",
                "listData": {
                    "title": "first list",
                    "id": "d9iESILMD",
                    "owner": "xLBYsiewP",
                    "createdOn": "2019-07-20T17:25:14.000Z",
                    "itemsList": [],
                },
                "itemData": null,
                "subItemData": null,
                "updatedOn": "2019-07-20T17:29:12.000Z",
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
    app.post(`${baseUrl}/:userId/activities/:activityId/delete`, authMiddleware.isAuthorized, activityController.deleteActivity);

}

module.exports = {
    setRouter: setRouter
}
