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

router.get("*", (req, res, next) => {
    addRespHeaders(req, res);
    next();
});

// =========================================================================
// ROUTES
// =========================================================================

router.get("/", apiCtrl.getApiBase)

router.get("/test", apiCtrl.getApiTest)

router.post("/test", apiCtrl.postApiTest)

router.put("/test", apiCtrl.putApiTest)

router.delete("/test", apiCtrl.deleteApiTest)


module.exports = router;
