// ===========================================================================
// @description: Basic API Controller Stub
// @author: David Baldeschwieler
// ===========================================================================

// Controller - GET: /api
const getApiBase = (req, res, next) => {
    console.log("Express >> apiController > getApiBase called!");
    res.status(200);
    res.json({
        message: "The API is under control!"
    });
    return res;
}

// Controller - GET: /api/test
const getApiTest = (req, res, next) => {
    console.log("Express >> apiController > getApiTest called!");
    res.status(200);
    res.json({
        message: "GET: Testing, Testing, 1 2 3..."
    });
    return res;
}

// Controller - POST: /api/test
const postApiTest = (req, res, next) => {
    console.log("Express >> apiController > postApiTest called!");
    res.status(200);
    res.json({
        message: "POST: Testing, Testing, 1 2 3..."
    });
    return res;
}

// Controller - PUT: /api/test
const putApiTest = (req, res, next) => {
    console.log("Express >> apiController > putApiTest called!");
    res.status(200);
    res.json({
        message: "PUT: Testing, Testing, 1 2 3..."
    });
    return res;
}

// Controller - DELETE: /api/test
const deleteApiTest = (req, res, next) => {
    console.log("Express >> apiController > deleteApiTest called!");
    res.status(200);
    res.json({
        message: "DELETE: Testing, Testing, 1 2 3..."
    });
    return res;
}

// All exports
module.exports.getApiBase = getApiBase
module.exports.getApiTest = getApiTest
module.exports.postApiTest = postApiTest
module.exports.putApiTest = putApiTest
module.exports.deleteApiTest = deleteApiTest
