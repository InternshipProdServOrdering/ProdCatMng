/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ProductSpecification
   * This operation creates a ProductSpecification entity.
   *
   * productSpecificationFVO ProductSpecificationFVO The ProductSpecification to be created
   * fields String Comma-separated properties to be provided in response (optional)
   * returns ProductSpecification
   **/
  const createProductSpecification =  ( args, context /* productSpecificationFVOfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductSpecification";
        context.operationId  = "createProductSpecification";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createProductSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a ProductSpecification
   * This operation deletes a ProductSpecification entity.
   *
   * id String Identifier of the Resource
   * no response value expected for this operation
   **/
  const deleteProductSpecification =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductSpecification";
        context.operationId  = "deleteProductSpecification";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteProductSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find ProductSpecification objects
   * List or find ProductSpecification objects
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listProductSpecification =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductSpecification";
        context.operationId  = "listProductSpecification";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listProductSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a ProductSpecification
   * This operation updates partially a ProductSpecification entity.
   *
   * id String Identifier of the Resource
   * productSpecificationMVO ProductSpecificationMVO The ProductSpecification to be patched
   * fields String Comma-separated properties to be provided in response (optional)
   * returns ProductSpecification
   **/
  const patchProductSpecification =  ( args, context /* idproductSpecificationMVOfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductSpecification";
        context.operationId  = "patchProductSpecification";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchProductSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ProductSpecification by ID
   * This operation retrieves a ProductSpecification entity. Attribute selection enabled for all first level attributes.
   *
   * id String Identifier of the Resource
   * fields String Comma-separated properties to be provided in response (optional)
   * returns ProductSpecification
   **/
  const retrieveProductSpecification =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductSpecification";
        context.operationId  = "retrieveProductSpecification";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveProductSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createProductSpecification,
  deleteProductSpecification,
  listProductSpecification,
  patchProductSpecification,
  retrieveProductSpecification,
};
