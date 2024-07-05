/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ProductCatalog
   * This operation creates a ProductCatalog entity.
   *
   * productCatalogFVO ProductCatalogFVO The ProductCatalog to be created
   * fields String Comma-separated properties to be provided in response (optional)
   * returns ProductCatalog
   **/
  const createProductCatalog =  ( args, context /* productCatalogFVOfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductCatalog";
        context.operationId  = "createProductCatalog";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createProductCatalog: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a ProductCatalog
   * This operation deletes a ProductCatalog entity.
   *
   * id String Identifier of the Resource
   * no response value expected for this operation
   **/
  const deleteProductCatalog =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductCatalog";
        context.operationId  = "deleteProductCatalog";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteProductCatalog: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find ProductCatalog objects
   * List or find ProductCatalog objects
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listProductCatalog =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductCatalog";
        context.operationId  = "listProductCatalog";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listProductCatalog: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a ProductCatalog
   * This operation updates partially a ProductCatalog entity.
   *
   * id String Identifier of the Resource
   * productCatalogMVO ProductCatalogMVO The ProductCatalog to be patched
   * fields String Comma-separated properties to be provided in response (optional)
   * returns ProductCatalog
   **/
  const patchProductCatalog =  ( args, context /* idproductCatalogMVOfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductCatalog";
        context.operationId  = "patchProductCatalog";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchProductCatalog: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ProductCatalog by ID
   * This operation retrieves a ProductCatalog entity. Attribute selection enabled for all first level attributes.
   *
   * id String Identifier of the Resource
   * fields String Comma-separated properties to be provided in response (optional)
   * returns ProductCatalog
   **/
  const retrieveProductCatalog =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductCatalog";
        context.operationId  = "retrieveProductCatalog";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveProductCatalog: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createProductCatalog,
  deleteProductCatalog,
  listProductCatalog,
  patchProductCatalog,
  retrieveProductCatalog,
};
