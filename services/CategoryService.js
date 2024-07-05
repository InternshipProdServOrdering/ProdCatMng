/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a Category
   * This operation creates a Category entity.
   *
   * categoryFVO CategoryFVO The Category to be created
   * fields String Comma-separated properties to be provided in response (optional)
   * returns Category
   **/
  const createCategory =  ( args, context /* categoryFVOfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Category";
        context.operationId  = "createCategory";
        context.method       = "post";
        try {
          /* matching isRestfulCreate */
          resolve(Service.create(args, context ));

        } catch (e) {
          console.log("createCategory: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a Category
   * This operation deletes a Category entity.
   *
   * id String Identifier of the Resource
   * no response value expected for this operation
   **/
  const deleteCategory =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Category";
        context.operationId  = "deleteCategory";
        context.method       = "delete";
        try {
          /* matching isRestfulDestroy */
          resolve(Service.remove(args, context ));

        } catch (e) {
          console.log("deleteCategory: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find Category objects
   * List or find Category objects
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listCategory =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Category";
        context.operationId  = "listCategory";
        context.method       = "get";
        try {
          /* matching isRestfulIndex */
          resolve(Service.index(args, context ));

        } catch (e) {
          console.log("listCategory: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a Category
   * This operation updates partially a Category entity.
   *
   * id String Identifier of the Resource
   * categoryMVO CategoryMVO The Category to be patched
   * fields String Comma-separated properties to be provided in response (optional)
   * returns Category
   **/
  const patchCategory =  ( args, context /* idcategoryMVOfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Category";
        context.operationId  = "patchCategory";
        context.method       = "patch";
        try {
          /* matching isRestfulUpdate */
          resolve(Service.update(args, context ));

        } catch (e) {
          console.log("patchCategory: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a Category by ID
   * This operation retrieves a Category entity. Attribute selection enabled for all first level attributes.
   *
   * id String Identifier of the Resource
   * fields String Comma-separated properties to be provided in response (optional)
   * returns Category
   **/
  const retrieveCategory =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Category";
        context.operationId  = "retrieveCategory";
        context.method       = "get";
        try {
          /* matching isRestfulShow */
          resolve(Service.show(args, context ));

        } catch (e) {
          console.log("retrieveCategory: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createCategory,
  deleteCategory,
  listCategory,
  patchCategory,
  retrieveCategory,
};
