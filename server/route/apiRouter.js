// ===========================================================================
// @description: Basic API Router Stub
// @author: David Baldeschwieler
// ===========================================================================

const express = require('express');
const path = require('path');
const router = express.Router();

const addRespHeaders = require(path.join(__dirname,'../','util', 'addRespHeaders'));
const apiCtrl = require(path.join(__dirname,'../','controller', 'apiController'));

// =========================================================================
// ROUTER CONFIG
// =========================================================================

// Add basic response headers
router.get("*", (req, res, next) => {
    addRespHeaders(req, res);
    next();
});

// =========================================================================
// ROUTES
// =========================================================================

// Route - GET: /api
router.get("/", apiCtrl.getApiBase)

// Route - GET: /api/test
router.get("/test", apiCtrl.getApiTest)

// Route - POST: /api/test
router.post("/test", apiCtrl.postApiTest)

// Route - PUT: /api/test
router.put("/test", apiCtrl.putApiTest)

// Route - DELETE: /api/test
router.delete("/test", apiCtrl.deleteApiTest)

// All exports
module.exports = router;
