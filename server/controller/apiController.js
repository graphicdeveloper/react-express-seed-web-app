// ===========================================================================
// @description: Basic API Controller Stub
// @author: David Baldeschwieler
// ===========================================================================

const getApiBase = (req, res, next) => {
    console.log("Express >> apiControlled > getApiBase called!");
    res.status(200);
    res.json({
        message: "The API is under control!"
    });
    return res;
}


const getApiTest = (req, res, next) => {
    console.log("Express >> apiControlled > getApiTest called!");
    res.status(200);
    res.json({
        message: "GET: Testing, Testing, 1 2 3..."
    });
    return res;
}


const postApiTest = (req, res, next) => {
    console.log("Express >> apiControlled > postApiTest called!");
    res.status(200);
    res.json({
        message: "POST: Testing, Testing, 1 2 3..."
    });
    return res;
}


const putApiTest = (req, res, next) => {
    console.log("Express >> apiControlled > putApiTest called!");
    res.status(200);
    res.json({
        message: "PUT: Testing, testing, 1 2 3..."
    });
    return res;
}


const deleteApiTest = (req, res, next) => {
    console.log("Express >> apiControlled > deleteApiTest called!");
    res.status(200);
    res.json({
        message: "DELETE: Testing, testing, 1 2 3..."
    });
    return res;
}


module.exports.getApiBase = getApiBase
module.exports.getApiTest = getApiTest
module.exports.postApiTest = postApiTest
module.exports.putApiTest = putApiTest
module.exports.deleteApiTest = deleteApiTest
