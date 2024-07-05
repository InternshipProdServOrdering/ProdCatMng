/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity CategoryAttributeValueChangeEvent
   * Example of a client listener for receiving the notification CategoryAttributeValueChangeEvent
   *
   * categoryAttributeValueChangeEvent CategoryAttributeValueChangeEvent Category attributeValueChange Event payload
   * no response value expected for this operation
   **/
  const categoryAttributeValueChangeEvent =  ( args, context /* categoryAttributeValueChangeEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "categoryAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("categoryAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity CategoryCreateEvent
   * Example of a client listener for receiving the notification CategoryCreateEvent
   *
   * categoryCreateEvent CategoryCreateEvent Category create Event payload
   * no response value expected for this operation
   **/
  const categoryCreateEvent =  ( args, context /* categoryCreateEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "categoryCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("categoryCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity CategoryDeleteEvent
   * Example of a client listener for receiving the notification CategoryDeleteEvent
   *
   * categoryDeleteEvent CategoryDeleteEvent Category delete Event payload
   * no response value expected for this operation
   **/
  const categoryDeleteEvent =  ( args, context /* categoryDeleteEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "categoryDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("categoryDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity CategoryStateChangeEvent
   * Example of a client listener for receiving the notification CategoryStateChangeEvent
   *
   * categoryStateChangeEvent CategoryStateChangeEvent Category stateChange Event payload
   * no response value expected for this operation
   **/
  const categoryStateChangeEvent =  ( args, context /* categoryStateChangeEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "categoryStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("categoryStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ExportJobCreateEvent
   * Example of a client listener for receiving the notification ExportJobCreateEvent
   *
   * exportJobCreateEvent ExportJobCreateEvent ExportJob create Event payload
   * no response value expected for this operation
   **/
  const exportJobCreateEvent =  ( args, context /* exportJobCreateEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "exportJobCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("exportJobCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ExportJobStateChangeEvent
   * Example of a client listener for receiving the notification ExportJobStateChangeEvent
   *
   * exportJobStateChangeEvent ExportJobStateChangeEvent ExportJob stateChange Event payload
   * no response value expected for this operation
   **/
  const exportJobStateChangeEvent =  ( args, context /* exportJobStateChangeEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "exportJobStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("exportJobStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ImportJobCreateEvent
   * Example of a client listener for receiving the notification ImportJobCreateEvent
   *
   * importJobCreateEvent ImportJobCreateEvent ImportJob create Event payload
   * no response value expected for this operation
   **/
  const importJobCreateEvent =  ( args, context /* importJobCreateEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "importJobCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("importJobCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ImportJobStateChangeEvent
   * Example of a client listener for receiving the notification ImportJobStateChangeEvent
   *
   * importJobStateChangeEvent ImportJobStateChangeEvent ImportJob stateChange Event payload
   * no response value expected for this operation
   **/
  const importJobStateChangeEvent =  ( args, context /* importJobStateChangeEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "importJobStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("importJobStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductCatalogAttributeValueChangeEvent
   * Example of a client listener for receiving the notification ProductCatalogAttributeValueChangeEvent
   *
   * productCatalogAttributeValueChangeEvent ProductCatalogAttributeValueChangeEvent ProductCatalog attributeValueChange Event payload
   * no response value expected for this operation
   **/
  const productCatalogAttributeValueChangeEvent =  ( args, context /* productCatalogAttributeValueChangeEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "productCatalogAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("productCatalogAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductCatalogCreateEvent
   * Example of a client listener for receiving the notification ProductCatalogCreateEvent
   *
   * productCatalogCreateEvent ProductCatalogCreateEvent ProductCatalog create Event payload
   * no response value expected for this operation
   **/
  const productCatalogCreateEvent =  ( args, context /* productCatalogCreateEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "productCatalogCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("productCatalogCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductCatalogDeleteEvent
   * Example of a client listener for receiving the notification ProductCatalogDeleteEvent
   *
   * productCatalogDeleteEvent ProductCatalogDeleteEvent ProductCatalog delete Event payload
   * no response value expected for this operation
   **/
  const productCatalogDeleteEvent =  ( args, context /* productCatalogDeleteEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "productCatalogDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("productCatalogDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductCatalogStateChangeEvent
   * Example of a client listener for receiving the notification ProductCatalogStateChangeEvent
   *
   * productCatalogStateChangeEvent ProductCatalogStateChangeEvent ProductCatalog stateChange Event payload
   * no response value expected for this operation
   **/
  const productCatalogStateChangeEvent =  ( args, context /* productCatalogStateChangeEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "productCatalogStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("productCatalogStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductOfferingAttributeValueChangeEvent
   * Example of a client listener for receiving the notification ProductOfferingAttributeValueChangeEvent
   *
   * productOfferingAttributeValueChangeEvent ProductOfferingAttributeValueChangeEvent ProductOffering attributeValueChange Event payload
   * no response value expected for this operation
   **/
  const productOfferingAttributeValueChangeEvent =  ( args, context /* productOfferingAttributeValueChangeEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "productOfferingAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("productOfferingAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductOfferingCreateEvent
   * Example of a client listener for receiving the notification ProductOfferingCreateEvent
   *
   * productOfferingCreateEvent ProductOfferingCreateEvent ProductOffering create Event payload
   * no response value expected for this operation
   **/
  const productOfferingCreateEvent =  ( args, context /* productOfferingCreateEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "productOfferingCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("productOfferingCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductOfferingDeleteEvent
   * Example of a client listener for receiving the notification ProductOfferingDeleteEvent
   *
   * productOfferingDeleteEvent ProductOfferingDeleteEvent ProductOffering delete Event payload
   * no response value expected for this operation
   **/
  const productOfferingDeleteEvent =  ( args, context /* productOfferingDeleteEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "productOfferingDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("productOfferingDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductOfferingPriceAttributeValueChangeEvent
   * Example of a client listener for receiving the notification ProductOfferingPriceAttributeValueChangeEvent
   *
   * productOfferingPriceAttributeValueChangeEvent ProductOfferingPriceAttributeValueChangeEvent ProductOfferingPrice attributeValueChange Event payload
   * no response value expected for this operation
   **/
  const productOfferingPriceAttributeValueChangeEvent =  ( args, context /* productOfferingPriceAttributeValueChangeEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "productOfferingPriceAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("productOfferingPriceAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductOfferingPriceCreateEvent
   * Example of a client listener for receiving the notification ProductOfferingPriceCreateEvent
   *
   * productOfferingPriceCreateEvent ProductOfferingPriceCreateEvent ProductOfferingPrice create Event payload
   * no response value expected for this operation
   **/
  const productOfferingPriceCreateEvent =  ( args, context /* productOfferingPriceCreateEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "productOfferingPriceCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("productOfferingPriceCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductOfferingPriceDeleteEvent
   * Example of a client listener for receiving the notification ProductOfferingPriceDeleteEvent
   *
   * productOfferingPriceDeleteEvent ProductOfferingPriceDeleteEvent ProductOfferingPrice delete Event payload
   * no response value expected for this operation
   **/
  const productOfferingPriceDeleteEvent =  ( args, context /* productOfferingPriceDeleteEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "productOfferingPriceDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("productOfferingPriceDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductOfferingPriceStateChangeEvent
   * Example of a client listener for receiving the notification ProductOfferingPriceStateChangeEvent
   *
   * productOfferingPriceStateChangeEvent ProductOfferingPriceStateChangeEvent ProductOfferingPrice stateChange Event payload
   * no response value expected for this operation
   **/
  const productOfferingPriceStateChangeEvent =  ( args, context /* productOfferingPriceStateChangeEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "productOfferingPriceStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("productOfferingPriceStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductOfferingStateChangeEvent
   * Example of a client listener for receiving the notification ProductOfferingStateChangeEvent
   *
   * productOfferingStateChangeEvent ProductOfferingStateChangeEvent ProductOffering stateChange Event payload
   * no response value expected for this operation
   **/
  const productOfferingStateChangeEvent =  ( args, context /* productOfferingStateChangeEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "productOfferingStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("productOfferingStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductSpecificationAttributeValueChangeEvent
   * Example of a client listener for receiving the notification ProductSpecificationAttributeValueChangeEvent
   *
   * productSpecificationAttributeValueChangeEvent ProductSpecificationAttributeValueChangeEvent ProductSpecification attributeValueChange Event payload
   * no response value expected for this operation
   **/
  const productSpecificationAttributeValueChangeEvent =  ( args, context /* productSpecificationAttributeValueChangeEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "productSpecificationAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("productSpecificationAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductSpecificationCreateEvent
   * Example of a client listener for receiving the notification ProductSpecificationCreateEvent
   *
   * productSpecificationCreateEvent ProductSpecificationCreateEvent ProductSpecification create Event payload
   * no response value expected for this operation
   **/
  const productSpecificationCreateEvent =  ( args, context /* productSpecificationCreateEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "productSpecificationCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("productSpecificationCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductSpecificationDeleteEvent
   * Example of a client listener for receiving the notification ProductSpecificationDeleteEvent
   *
   * productSpecificationDeleteEvent ProductSpecificationDeleteEvent ProductSpecification delete Event payload
   * no response value expected for this operation
   **/
  const productSpecificationDeleteEvent =  ( args, context /* productSpecificationDeleteEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "productSpecificationDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("productSpecificationDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductSpecificationStateChangeEvent
   * Example of a client listener for receiving the notification ProductSpecificationStateChangeEvent
   *
   * productSpecificationStateChangeEvent ProductSpecificationStateChangeEvent ProductSpecification stateChange Event payload
   * no response value expected for this operation
   **/
  const productSpecificationStateChangeEvent =  ( args, context /* productSpecificationStateChangeEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "productSpecificationStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("productSpecificationStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  categoryAttributeValueChangeEvent,
  categoryCreateEvent,
  categoryDeleteEvent,
  categoryStateChangeEvent,
  exportJobCreateEvent,
  exportJobStateChangeEvent,
  importJobCreateEvent,
  importJobStateChangeEvent,
  productCatalogAttributeValueChangeEvent,
  productCatalogCreateEvent,
  productCatalogDeleteEvent,
  productCatalogStateChangeEvent,
  productOfferingAttributeValueChangeEvent,
  productOfferingCreateEvent,
  productOfferingDeleteEvent,
  productOfferingPriceAttributeValueChangeEvent,
  productOfferingPriceCreateEvent,
  productOfferingPriceDeleteEvent,
  productOfferingPriceStateChangeEvent,
  productOfferingStateChangeEvent,
  productSpecificationAttributeValueChangeEvent,
  productSpecificationCreateEvent,
  productSpecificationDeleteEvent,
  productSpecificationStateChangeEvent,
};
