/**
 * The ProductCatalogController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ProductCatalogService');
const createProductCatalog = async (request, response) => {
  await Controller.handleRequest(request, response, service.createProductCatalog);
};

const deleteProductCatalog = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteProductCatalog);
};

const listProductCatalog = async (request, response) => {
  await Controller.handleRequest(request, response, service.listProductCatalog);
};

const patchProductCatalog = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchProductCatalog);
};

const retrieveProductCatalog = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveProductCatalog);
};


module.exports = {
  createProductCatalog,
  deleteProductCatalog,
  listProductCatalog,
  patchProductCatalog,
  retrieveProductCatalog,
};
