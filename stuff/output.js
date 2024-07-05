const data = {
  "openapi": "3.0.1",
  "info": {
    "title": "Product Catalog Management",
    "description": "Product Catalog API is one of Catalog Management API Family. Product Catalog API goal is to provide a catalog of products. \n### Operations\nProduct Catalog API performs the following operations on the resources :\n- Retrieve an entity or a collection of entities depending on filter criteria\n- Partial update of an entity (including updating rules)\n- Create an entity (including default values and creation rules)\n- Delete an entity\n- Manage notification of events",
    "version": "5.0.0"
  },
  "servers": [
    {
      "url": "https://serverRoot/productCatalogManagement/v5/"
    }
  ],
  "tags": [
    {
      "name": "productCatalog",
      "description": "Operations for ProductCatalog Resource"
    },
    {
      "name": "category",
      "description": "Operations for Category Resource"
    },
    {
      "name": "productOffering",
      "description": "Operations for ProductOffering Resource"
    },
    {
      "name": "productOfferingPrice",
      "description": "Operations for ProductOfferingPrice Resource"
    },
    {
      "name": "productSpecification",
      "description": "Operations for ProductSpecification Resource"
    },
    {
      "name": "importJob",
      "description": "Operations for ImportJob Resource"
    },
    {
      "name": "exportJob",
      "description": "Operations for ExportJob Resource"
    },
    {
      "name": "notification listener",
      "description": "Notifications for Resource Lifecycle and event notifications"
    },
    {
      "name": "events subscription",
      "description": "Endpoints to register and terminate an Event Listener"
    }
  ],
  "paths": {
    "/category": {
      "get": {
        "tags": [
          "category"
        ],
        "summary": "List or find Category objects",
        "description": "List or find Category objects",
        "operationId": "listCategory",
        "parameters": [
          {
            "$ref": "#/components/parameters/Fields"
          },
          {
            "$ref": "#/components/parameters/Offset"
          },
          {
            "$ref": "#/components/parameters/Limit"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/200CategoryArray"
          },
          "400": {
            "$ref": "#/components/responses/400"
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          },
          "404": {
            "$ref": "#/components/responses/404"
          },
          "405": {
            "$ref": "#/components/responses/405"
          },
          "500": {
            "$ref": "#/components/responses/500"
          },
          "501": {
            "$ref": "#/components/responses/501"
          },
          "503": {
            "$ref": "#/components/responses/503"
          }
        }
      },
      "post": {
        "tags": [
          "category"
        ],
        "summary": "Creates a Category",
        "description": "This operation creates a Category entity.",
        "operationId": "createCategory",
        "parameters": [
          {
            "$ref": "#/components/parameters/Fields"
          }
        ],
        "requestBody": {
          "$ref": "#/components/requestBodies/Category_FVO"
        },
        "responses": {
          "201": {
            "$ref": "#/components/responses/201Category"
          },
          "202": {
            "description": "Accepted"
          },
          "400": {
            "$ref": "#/components/responses/400"
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          },
          "404": {
            "$ref": "#/components/responses/404"
          },
          "405": {
            "$ref": "#/components/responses/405"
          },
          "409": {
            "$ref": "#/components/responses/409"
          },
          "500": {
            "$ref": "#/components/responses/500"
          },
          "501": {
            "$ref": "#/components/responses/501"
          },
          "503": {
            "$ref": "#/components/responses/503"
          }
        }
      }
    },
    "/category/{id}": {
      "get": {
        "tags": [
          "category"
        ],
        "summary": "Retrieves a Category by ID",
        "description": "This operation retrieves a Category entity. Attribute selection enabled for all first level attributes.",
        "operationId": "retrieveCategory",
        "parameters": [
          {
            "$ref": "#/components/parameters/Id"
          },
          {
            "$ref": "#/components/parameters/Fields"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/200Category_Get"
          },
          "400": {
            "$ref": "#/components/responses/400"
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          },
          "404": {
            "$ref": "#/components/responses/404"
          },
          "405": {
            "$ref": "#/components/responses/405"
          },
          "500": {
            "$ref": "#/components/responses/500"
          },
          "501": {
            "$ref": "#/components/responses/501"
          },
          "503": {
            "$ref": "#/components/responses/503"
          }
        }
      },
      "patch": {
        "tags": [
          "category"
        ],
        "summary": "Updates partially a Category",
        "description": "This operation updates partially a Category entity.",
        "operationId": "patchCategory",
        "parameters": [
          {
            "$ref": "#/components/parameters/Id"
          },
          {
            "$ref": "#/components/parameters/Fields"
          }
        ],
        "requestBody": {
          "$ref": "#/components/requestBodies/Category_MVO"
        },
        "responses": {
          "200": {
            "$ref": "#/components/responses/200Category_Patch"
          },
          "202": {
            "description": "Accepted"
          },
          "400": {
            "$ref": "#/components/responses/400"
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          },
          "404": {
            "$ref": "#/components/responses/404"
          },
          "405": {
            "$ref": "#/components/responses/405"
          },
          "409": {
            "$ref": "#/components/responses/409"
          },
          "500": {
            "$ref": "#/components/responses/500"
          },
          "501": {
            "$ref": "#/components/responses/501"
          },
          "503": {
            "$ref": "#/components/responses/503"
          }
        }
      },
      "delete": {
        "tags": [
          "category"
        ],
        "summary": "Deletes a Category",
        "description": "This operation deletes a Category entity.",
        "operationId": "deleteCategory",
        "parameters": [
          {
            "$ref": "#/components/parameters/Id"
          }
        ],
        "responses": {
          "202": {
            "$ref": "#/components/responses/202"
          },
          "204": {
            "$ref": "#/components/responses/204"
          },
          "400": {
            "$ref": "#/components/responses/400"
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          },
          "404": {
            "$ref": "#/components/responses/404"
          },
          "405": {
            "$ref": "#/components/responses/405"
          },
          "409": {
            "$ref": "#/components/responses/409"
          },
          "500": {
            "$ref": "#/components/responses/500"
          },
          "501": {
            "$ref": "#/components/responses/501"
          },
          "503": {
            "$ref": "#/components/responses/503"
          }
        }
      }
    },
    "/exportJob": {
      "get": {
        "tags": [
          "exportJob"
        ],
        "summary": "List or find ExportJob objects",
        "description": "List or find ExportJob objects",
        "operationId": "listExportJob",
        "parameters": [
          {
            "$ref": "#/components/parameters/Fields"
          },
          {
            "$ref": "#/components/parameters/Offset"
          },
          {
            "$ref": "#/components/parameters/Limit"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/200ExportJobArray"
          },
          "400": {
            "$ref": "#/components/responses/400"
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          },
          "404": {
            "$ref": "#/components/responses/404"
          },
          "405": {
            "$ref": "#/components/responses/405"
          },
          "500": {
            "$ref": "#/components/responses/500"
          },
          "501": {
            "$ref": "#/components/responses/501"
          },
          "503": {
            "$ref": "#/components/responses/503"
          }
        }
      },
      "post": {
        "tags": [
          "exportJob"
        ],
        "summary": "Creates a ExportJob",
        "description": "This operation creates a ExportJob entity.",
        "operationId": "createExportJob",
        "parameters": [
          {
            "$ref": "#/components/parameters/Fields"
          }
        ],
        "requestBody": {
          "$ref": "#/components/requestBodies/ExportJob_FVO"
        },
        "responses": {
          "201": {
            "$ref": "#/components/responses/201ExportJob"
          },
          "202": {
            "description": "Accepted"
          },
          "400": {
            "$ref": "#/components/responses/400"
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          },
          "404": {
            "$ref": "#/components/responses/404"
          },
          "405": {
            "$ref": "#/components/responses/405"
          },
          "409": {
            "$ref": "#/components/responses/409"
          },
          "500": {
            "$ref": "#/components/responses/500"
          },
          "501": {
            "$ref": "#/components/responses/501"
          },
          "503": {
            "$ref": "#/components/responses/503"
          }
        }
      }
    },
    "/exportJob/{id}": {
      "get": {
        "tags": [
          "exportJob"
        ],
        "summary": "Retrieves a ExportJob by ID",
        "description": "This operation retrieves a ExportJob entity. Attribute selection enabled for all first level attributes.",
        "operationId": "retrieveExportJob",
        "parameters": [
          {
            "$ref": "#/components/parameters/Id"
          },
          {
            "$ref": "#/components/parameters/Fields"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/200ExportJob_Get"
          },
          "400": {
            "$ref": "#/components/responses/400"
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          },
          "404": {
            "$ref": "#/components/responses/404"
          },
          "405": {
            "$ref": "#/components/responses/405"
          },
          "500": {
            "$ref": "#/components/responses/500"
          },
          "501": {
            "$ref": "#/components/responses/501"
          },
          "503": {
            "$ref": "#/components/responses/503"
          }
        }
      },
      "delete": {
        "tags": [
          "exportJob"
        ],
        "summary": "Deletes a ExportJob",
        "description": "This operation deletes a ExportJob entity.",
        "operationId": "deleteExportJob",
        "parameters": [
          {
            "$ref": "#/components/parameters/Id"
          }
        ],
        "responses": {
          "202": {
            "$ref": "#/components/responses/202"
          },
          "204": {
            "$ref": "#/components/responses/204"
          },
          "400": {
            "$ref": "#/components/responses/400"
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          },
          "404": {
            "$ref": "#/components/responses/404"
          },
          "405": {
            "$ref": "#/components/responses/405"
          },
          "409": {
            "$ref": "#/components/responses/409"
          },
          "500": {
            "$ref": "#/components/responses/500"
          },
          "501": {
            "$ref": "#/components/responses/501"
          },
          "503": {
            "$ref": "#/components/responses/503"
          }
        }
      }
    },
    "/hub": {
      "post": {
        "operationId": "createHub",
        "summary": "Create a subscription (hub) to receive Events",
        "description": "Sets the communication endpoint to receive Events.",
        "tags": [
          "events subscription"
        ],
        "requestBody": {
          "$ref": "#/components/requestBodies/Hub_FVO"
        },
        "responses": {
          "201": {
            "$ref": "#/components/responses/Hub"
          },
          "default": {
            "$ref": "#/components/responses/Error"
          }
        }
      }
    },
    "/hub/{id}": {
      "delete": {
        "operationId": "hubDelete",
        "summary": "Remove a subscription (hub) to receive Events",
        "description": "",
        "tags": [
          "events subscription"
        ],
        "parameters": [
          {
            "$ref": "#/components/parameters/Id"
          }
        ],
        "responses": {
          "204": {
            "description": "Deleted"
          },
          "default": {
            "$ref": "#/components/responses/Error"
          }
        }
      }
    },
    "/importJob": {
      "get": {
        "tags": [
          "importJob"
        ],
        "summary": "List or find ImportJob objects",
        "description": "List or find ImportJob objects",
        "operationId": "listImportJob",
        "parameters": [
          {
            "$ref": "#/components/parameters/Fields"
          },
          {
            "$ref": "#/components/parameters/Offset"
          },
          {
            "$ref": "#/components/parameters/Limit"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/200ImportJobArray"
          },
          "400": {
            "$ref": "#/components/responses/400"
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          },
          "404": {
            "$ref": "#/components/responses/404"
          },
          "405": {
            "$ref": "#/components/responses/405"
          },
          "500": {
            "$ref": "#/components/responses/500"
          },
          "501": {
            "$ref": "#/components/responses/501"
          },
          "503": {
            "$ref": "#/components/responses/503"
          }
        }
      },
      "post": {
        "tags": [
          "importJob"
        ],
        "summary": "Creates a ImportJob",
        "description": "This operation creates a ImportJob entity.",
        "operationId": "createImportJob",
        "parameters": [
          {
            "$ref": "#/components/parameters/Fields"
          }
        ],
        "requestBody": {
          "$ref": "#/components/requestBodies/ImportJob_FVO"
        },
        "responses": {
          "201": {
            "$ref": "#/components/responses/201ImportJob"
          },
          "202": {
            "description": "Accepted"
          },
          "400": {
            "$ref": "#/components/responses/400"
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          },
          "404": {
            "$ref": "#/components/responses/404"
          },
          "405": {
            "$ref": "#/components/responses/405"
          },
          "409": {
            "$ref": "#/components/responses/409"
          },
          "500": {
            "$ref": "#/components/responses/500"
          },
          "501": {
            "$ref": "#/components/responses/501"
          },
          "503": {
            "$ref": "#/components/responses/503"
          }
        }
      }
    },
    "/importJob/{id}": {
      "get": {
        "tags": [
          "importJob"
        ],
        "summary": "Retrieves a ImportJob by ID",
        "description": "This operation retrieves a ImportJob entity. Attribute selection enabled for all first level attributes.",
        "operationId": "retrieveImportJob",
        "parameters": [
          {
            "$ref": "#/components/parameters/Id"
          },
          {
            "$ref": "#/components/parameters/Fields"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/200ImportJob_Get"
          },
          "400": {
            "$ref": "#/components/responses/400"
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          },
          "404": {
            "$ref": "#/components/responses/404"
          },
          "405": {
            "$ref": "#/components/responses/405"
          },
          "500": {
            "$ref": "#/components/responses/500"
          },
          "501": {
            "$ref": "#/components/responses/501"
          },
          "503": {
            "$ref": "#/components/responses/503"
          }
        }
      },
      "delete": {
        "tags": [
          "importJob"
        ],
        "summary": "Deletes a ImportJob",
        "description": "This operation deletes a ImportJob entity.",
        "operationId": "deleteImportJob",
        "parameters": [
          {
            "$ref": "#/components/parameters/Id"
          }
        ],
        "responses": {
          "202": {
            "$ref": "#/components/responses/202"
          },
          "204": {
            "$ref": "#/components/responses/204"
          },
          "400": {
            "$ref": "#/components/responses/400"
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          },
          "404": {
            "$ref": "#/components/responses/404"
          },
          "405": {
            "$ref": "#/components/responses/405"
          },
          "409": {
            "$ref": "#/components/responses/409"
          },
          "500": {
            "$ref": "#/components/responses/500"
          },
          "501": {
            "$ref": "#/components/responses/501"
          },
          "503": {
            "$ref": "#/components/responses/503"
          }
        }
      }
    },
    "/listener/categoryAttributeValueChangeEvent": {
      "post": {
        "tags": [
          "notification listener"
        ],
        "summary": "Client listener for entity CategoryAttributeValueChangeEvent",
        "description": "Example of a client listener for receiving the notification CategoryAttributeValueChangeEvent",
        "operationId": "categoryAttributeValueChangeEvent",
        "requestBody": {
          "$ref": "#/components/requestBodies/CategoryAttributeValueChangeEvent"
        },
        "responses": {
          "204": {
            "description": "Notified"
          },
          "default": {
            "$ref": "#/components/responses/Error"
          }
        }
      }
    },
    "/listener/categoryCreateEvent": {
      "post": {
        "tags": [
          "notification listener"
        ],
        "summary": "Client listener for entity CategoryCreateEvent",
        "description": "Example of a client listener for receiving the notification CategoryCreateEvent",
        "operationId": "categoryCreateEvent",
        "requestBody": {
          "$ref": "#/components/requestBodies/CategoryCreateEvent"
        },
        "responses": {
          "204": {
            "description": "Notified"
          },
          "default": {
            "$ref": "#/components/responses/Error"
          }
        }
      }
    },
    "/listener/categoryDeleteEvent": {
      "post": {
        "tags": [
          "notification listener"
        ],
        "summary": "Client listener for entity CategoryDeleteEvent",
        "description": "Example of a client listener for receiving the notification CategoryDeleteEvent",
        "operationId": "categoryDeleteEvent",
        "requestBody": {
          "$ref": "#/components/requestBodies/CategoryDeleteEvent"
        },
        "responses": {
          "204": {
            "description": "Notified"
          },
          "default": {
            "$ref": "#/components/responses/Error"
          }
        }
      }
    },
    "/listener/categoryStateChangeEvent": {
      "post": {
        "tags": [
          "notification listener"
        ],
        "summary": "Client listener for entity CategoryStateChangeEvent",
        "description": "Example of a client listener for receiving the notification CategoryStateChangeEvent",
        "operationId": "categoryStateChangeEvent",
        "requestBody": {
          "$ref": "#/components/requestBodies/CategoryStateChangeEvent"
        },
        "responses": {
          "204": {
            "description": "Notified"
          },
          "default": {
            "$ref": "#/components/responses/Error"
          }
        }
      }
    },
    "/listener/exportJobCreateEvent": {
      "post": {
        "tags": [
          "notification listener"
        ],
        "summary": "Client listener for entity ExportJobCreateEvent",
        "description": "Example of a client listener for receiving the notification ExportJobCreateEvent",
        "operationId": "exportJobCreateEvent",
        "requestBody": {
          "$ref": "#/components/requestBodies/ExportJobCreateEvent"
        },
        "responses": {
          "204": {
            "description": "Notified"
          },
          "default": {
            "$ref": "#/components/responses/Error"
          }
        }
      }
    },
    "/listener/exportJobStateChangeEvent": {
      "post": {
        "tags": [
          "notification listener"
        ],
        "summary": "Client listener for entity ExportJobStateChangeEvent",
        "description": "Example of a client listener for receiving the notification ExportJobStateChangeEvent",
        "operationId": "exportJobStateChangeEvent",
        "requestBody": {
          "$ref": "#/components/requestBodies/ExportJobStateChangeEvent"
        },
        "responses": {
          "204": {
            "description": "Notified"
          },
          "default": {
            "$ref": "#/components/responses/Error"
          }
        }
      }
    },
    "/listener/importJobCreateEvent": {
      "post": {
        "tags": [
          "notification listener"
        ],
        "summary": "Client listener for entity ImportJobCreateEvent",
        "description": "Example of a client listener for receiving the notification ImportJobCreateEvent",
        "operationId": "importJobCreateEvent",
        "requestBody": {
          "$ref": "#/components/requestBodies/ImportJobCreateEvent"
        },
        "responses": {
          "204": {
            "description": "Notified"
          },
          "default": {
            "$ref": "#/components/responses/Error"
          }
        }
      }
    },
    "/listener/importJobStateChangeEvent": {
      "post": {
        "tags": [
          "notification listener"
        ],
        "summary": "Client listener for entity ImportJobStateChangeEvent",
        "description": "Example of a client listener for receiving the notification ImportJobStateChangeEvent",
        "operationId": "importJobStateChangeEvent",
        "requestBody": {
          "$ref": "#/components/requestBodies/ImportJobStateChangeEvent"
        },
        "responses": {
          "204": {
            "description": "Notified"
          },
          "default": {
            "$ref": "#/components/responses/Error"
          }
        }
      }
    },
    "/listener/productCatalogAttributeValueChangeEvent": {
      "post": {
        "tags": [
          "notification listener"
        ],
        "summary": "Client listener for entity ProductCatalogAttributeValueChangeEvent",
        "description": "Example of a client listener for receiving the notification ProductCatalogAttributeValueChangeEvent",
        "operationId": "productCatalogAttributeValueChangeEvent",
        "requestBody": {
          "$ref": "#/components/requestBodies/ProductCatalogAttributeValueChangeEvent"
        },
        "responses": {
          "204": {
            "description": "Notified"
          },
          "default": {
            "$ref": "#/components/responses/Error"
          }
        }
      }
    },
    "/listener/productCatalogCreateEvent": {
      "post": {
        "tags": [
          "notification listener"
        ],
        "summary": "Client listener for entity ProductCatalogCreateEvent",
        "description": "Example of a client listener for receiving the notification ProductCatalogCreateEvent",
        "operationId": "productCatalogCreateEvent",
        "requestBody": {
          "$ref": "#/components/requestBodies/ProductCatalogCreateEvent"
        },
        "responses": {
          "204": {
            "description": "Notified"
          },
          "default": {
            "$ref": "#/components/responses/Error"
          }
        }
      }
    },
    "/listener/productCatalogDeleteEvent": {
      "post": {
        "tags": [
          "notification listener"
        ],
        "summary": "Client listener for entity ProductCatalogDeleteEvent",
        "description": "Example of a client listener for receiving the notification ProductCatalogDeleteEvent",
        "operationId": "productCatalogDeleteEvent",
        "requestBody": {
          "$ref": "#/components/requestBodies/ProductCatalogDeleteEvent"
        },
        "responses": {
          "204": {
            "description": "Notified"
          },
          "default": {
            "$ref": "#/components/responses/Error"
          }
        }
      }
    },
    "/listener/productCatalogStateChangeEvent": {
      "post": {
        "tags": [
          "notification listener"
        ],
        "summary": "Client listener for entity ProductCatalogStateChangeEvent",
        "description": "Example of a client listener for receiving the notification ProductCatalogStateChangeEvent",
        "operationId": "productCatalogStateChangeEvent",
        "requestBody": {
          "$ref": "#/components/requestBodies/ProductCatalogStateChangeEvent"
        },
        "responses": {
          "204": {
            "description": "Notified"
          },
          "default": {
            "$ref": "#/components/responses/Error"
          }
        }
      }
    },
    "/listener/productOfferingAttributeValueChangeEvent": {
      "post": {
        "tags": [
          "notification listener"
        ],
        "summary": "Client listener for entity ProductOfferingAttributeValueChangeEvent",
        "description": "Example of a client listener for receiving the notification ProductOfferingAttributeValueChangeEvent",
        "operationId": "productOfferingAttributeValueChangeEvent",
        "requestBody": {
          "$ref": "#/components/requestBodies/ProductOfferingAttributeValueChangeEvent"
        },
        "responses": {
          "204": {
            "description": "Notified"
          },
          "default": {
            "$ref": "#/components/responses/Error"
          }
        }
      }
    },
    "/listener/productOfferingCreateEvent": {
      "post": {
        "tags": [
          "notification listener"
        ],
        "summary": "Client listener for entity ProductOfferingCreateEvent",
        "description": "Example of a client listener for receiving the notification ProductOfferingCreateEvent",
        "operationId": "productOfferingCreateEvent",
        "requestBody": {
          "$ref": "#/components/requestBodies/ProductOfferingCreateEvent"
        },
        "responses": {
          "204": {
            "description": "Notified"
          },
          "default": {
            "$ref": "#/components/responses/Error"
          }
        }
      }
    },
    "/listener/productOfferingDeleteEvent": {
      "post": {
        "tags": [
          "notification listener"
        ],
        "summary": "Client listener for entity ProductOfferingDeleteEvent",
        "description": "Example of a client listener for receiving the notification ProductOfferingDeleteEvent",
        "operationId": "productOfferingDeleteEvent",
        "requestBody": {
          "$ref": "#/components/requestBodies/ProductOfferingDeleteEvent"
        },
        "responses": {
          "204": {
            "description": "Notified"
          },
          "default": {
            "$ref": "#/components/responses/Error"
          }
        }
      }
    },
    "/listener/productOfferingPriceAttributeValueChangeEvent": {
      "post": {
        "tags": [
          "notification listener"
        ],
        "summary": "Client listener for entity ProductOfferingPriceAttributeValueChangeEvent",
        "description": "Example of a client listener for receiving the notification ProductOfferingPriceAttributeValueChangeEvent",
        "operationId": "productOfferingPriceAttributeValueChangeEvent",
        "requestBody": {
          "$ref": "#/components/requestBodies/ProductOfferingPriceAttributeValueChangeEvent"
        },
        "responses": {
          "204": {
            "description": "Notified"
          },
          "default": {
            "$ref": "#/components/responses/Error"
          }
        }
      }
    },
    "/listener/productOfferingPriceCreateEvent": {
      "post": {
        "tags": [
          "notification listener"
        ],
        "summary": "Client listener for entity ProductOfferingPriceCreateEvent",
        "description": "Example of a client listener for receiving the notification ProductOfferingPriceCreateEvent",
        "operationId": "productOfferingPriceCreateEvent",
        "requestBody": {
          "$ref": "#/components/requestBodies/ProductOfferingPriceCreateEvent"
        },
        "responses": {
          "204": {
            "description": "Notified"
          },
          "default": {
            "$ref": "#/components/responses/Error"
          }
        }
      }
    },
    "/listener/productOfferingPriceDeleteEvent": {
      "post": {
        "tags": [
          "notification listener"
        ],
        "summary": "Client listener for entity ProductOfferingPriceDeleteEvent",
        "description": "Example of a client listener for receiving the notification ProductOfferingPriceDeleteEvent",
        "operationId": "productOfferingPriceDeleteEvent",
        "requestBody": {
          "$ref": "#/components/requestBodies/ProductOfferingPriceDeleteEvent"
        },
        "responses": {
          "204": {
            "description": "Notified"
          },
          "default": {
            "$ref": "#/components/responses/Error"
          }
        }
      }
    },
    "/listener/productOfferingPriceStateChangeEvent": {
      "post": {
        "tags": [
          "notification listener"
        ],
        "summary": "Client listener for entity ProductOfferingPriceStateChangeEvent",
        "description": "Example of a client listener for receiving the notification ProductOfferingPriceStateChangeEvent",
        "operationId": "productOfferingPriceStateChangeEvent",
        "requestBody": {
          "$ref": "#/components/requestBodies/ProductOfferingPriceStateChangeEvent"
        },
        "responses": {
          "204": {
            "description": "Notified"
          },
          "default": {
            "$ref": "#/components/responses/Error"
          }
        }
      }
    },
    "/listener/productOfferingStateChangeEvent": {
      "post": {
        "tags": [
          "notification listener"
        ],
        "summary": "Client listener for entity ProductOfferingStateChangeEvent",
        "description": "Example of a client listener for receiving the notification ProductOfferingStateChangeEvent",
        "operationId": "productOfferingStateChangeEvent",
        "requestBody": {
          "$ref": "#/components/requestBodies/ProductOfferingStateChangeEvent"
        },
        "responses": {
          "204": {
            "description": "Notified"
          },
          "default": {
            "$ref": "#/components/responses/Error"
          }
        }
      }
    },
    "/listener/productSpecificationAttributeValueChangeEvent": {
      "post": {
        "tags": [
          "notification listener"
        ],
        "summary": "Client listener for entity ProductSpecificationAttributeValueChangeEvent",
        "description": "Example of a client listener for receiving the notification ProductSpecificationAttributeValueChangeEvent",
        "operationId": "productSpecificationAttributeValueChangeEvent",
        "requestBody": {
          "$ref": "#/components/requestBodies/ProductSpecificationAttributeValueChangeEvent"
        },
        "responses": {
          "204": {
            "description": "Notified"
          },
          "default": {
            "$ref": "#/components/responses/Error"
          }
        }
      }
    },
    "/listener/productSpecificationCreateEvent": {
      "post": {
        "tags": [
          "notification listener"
        ],
        "summary": "Client listener for entity ProductSpecificationCreateEvent",
        "description": "Example of a client listener for receiving the notification ProductSpecificationCreateEvent",
        "operationId": "productSpecificationCreateEvent",
        "requestBody": {
          "$ref": "#/components/requestBodies/ProductSpecificationCreateEvent"
        },
        "responses": {
          "204": {
            "description": "Notified"
          },
          "default": {
            "$ref": "#/components/responses/Error"
          }
        }
      }
    },
    "/listener/productSpecificationDeleteEvent": {
      "post": {
        "tags": [
          "notification listener"
        ],
        "summary": "Client listener for entity ProductSpecificationDeleteEvent",
        "description": "Example of a client listener for receiving the notification ProductSpecificationDeleteEvent",
        "operationId": "productSpecificationDeleteEvent",
        "requestBody": {
          "$ref": "#/components/requestBodies/ProductSpecificationDeleteEvent"
        },
        "responses": {
          "204": {
            "description": "Notified"
          },
          "default": {
            "$ref": "#/components/responses/Error"
          }
        }
      }
    },
    "/listener/productSpecificationStateChangeEvent": {
      "post": {
        "tags": [
          "notification listener"
        ],
        "summary": "Client listener for entity ProductSpecificationStateChangeEvent",
        "description": "Example of a client listener for receiving the notification ProductSpecificationStateChangeEvent",
        "operationId": "productSpecificationStateChangeEvent",
        "requestBody": {
          "$ref": "#/components/requestBodies/ProductSpecificationStateChangeEvent"
        },
        "responses": {
          "204": {
            "description": "Notified"
          },
          "default": {
            "$ref": "#/components/responses/Error"
          }
        }
      }
    },
    "/productCatalog": {
      "get": {
        "tags": [
          "productCatalog"
        ],
        "summary": "List or find ProductCatalog objects",
        "description": "List or find ProductCatalog objects",
        "operationId": "listProductCatalog",
        "parameters": [
          {
            "$ref": "#/components/parameters/Fields"
          },
          {
            "$ref": "#/components/parameters/Offset"
          },
          {
            "$ref": "#/components/parameters/Limit"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/200ProductCatalogArray"
          },
          "400": {
            "$ref": "#/components/responses/400"
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          },
          "404": {
            "$ref": "#/components/responses/404"
          },
          "405": {
            "$ref": "#/components/responses/405"
          },
          "500": {
            "$ref": "#/components/responses/500"
          },
          "501": {
            "$ref": "#/components/responses/501"
          },
          "503": {
            "$ref": "#/components/responses/503"
          }
        }
      },
      "post": {
        "tags": [
          "productCatalog"
        ],
        "summary": "Creates a ProductCatalog",
        "description": "This operation creates a ProductCatalog entity.",
        "operationId": "createProductCatalog",
        "parameters": [
          {
            "$ref": "#/components/parameters/Fields"
          }
        ],
        "requestBody": {
          "$ref": "#/components/requestBodies/ProductCatalog_FVO"
        },
        "responses": {
          "201": {
            "$ref": "#/components/responses/201ProductCatalog"
          },
          "202": {
            "description": "Accepted"
          },
          "400": {
            "$ref": "#/components/responses/400"
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          },
          "404": {
            "$ref": "#/components/responses/404"
          },
          "405": {
            "$ref": "#/components/responses/405"
          },
          "409": {
            "$ref": "#/components/responses/409"
          },
          "500": {
            "$ref": "#/components/responses/500"
          },
          "501": {
            "$ref": "#/components/responses/501"
          },
          "503": {
            "$ref": "#/components/responses/503"
          }
        }
      }
    },
    "/productCatalog/{id}": {
      "get": {
        "tags": [
          "productCatalog"
        ],
        "summary": "Retrieves a ProductCatalog by ID",
        "description": "This operation retrieves a ProductCatalog entity. Attribute selection enabled for all first level attributes.",
        "operationId": "retrieveProductCatalog",
        "parameters": [
          {
            "$ref": "#/components/parameters/Id"
          },
          {
            "$ref": "#/components/parameters/Fields"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/200ProductCatalog_Get"
          },
          "400": {
            "$ref": "#/components/responses/400"
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          },
          "404": {
            "$ref": "#/components/responses/404"
          },
          "405": {
            "$ref": "#/components/responses/405"
          },
          "500": {
            "$ref": "#/components/responses/500"
          },
          "501": {
            "$ref": "#/components/responses/501"
          },
          "503": {
            "$ref": "#/components/responses/503"
          }
        }
      },
      "patch": {
        "tags": [
          "productCatalog"
        ],
        "summary": "Updates partially a ProductCatalog",
        "description": "This operation updates partially a ProductCatalog entity.",
        "operationId": "patchProductCatalog",
        "parameters": [
          {
            "$ref": "#/components/parameters/Id"
          },
          {
            "$ref": "#/components/parameters/Fields"
          }
        ],
        "requestBody": {
          "$ref": "#/components/requestBodies/ProductCatalog_MVO"
        },
        "responses": {
          "200": {
            "$ref": "#/components/responses/200ProductCatalog_Patch"
          },
          "202": {
            "description": "Accepted"
          },
          "400": {
            "$ref": "#/components/responses/400"
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          },
          "404": {
            "$ref": "#/components/responses/404"
          },
          "405": {
            "$ref": "#/components/responses/405"
          },
          "409": {
            "$ref": "#/components/responses/409"
          },
          "500": {
            "$ref": "#/components/responses/500"
          },
          "501": {
            "$ref": "#/components/responses/501"
          },
          "503": {
            "$ref": "#/components/responses/503"
          }
        }
      },
      "delete": {
        "tags": [
          "productCatalog"
        ],
        "summary": "Deletes a ProductCatalog",
        "description": "This operation deletes a ProductCatalog entity.",
        "operationId": "deleteProductCatalog",
        "parameters": [
          {
            "$ref": "#/components/parameters/Id"
          }
        ],
        "responses": {
          "202": {
            "$ref": "#/components/responses/202"
          },
          "204": {
            "$ref": "#/components/responses/204"
          },
          "400": {
            "$ref": "#/components/responses/400"
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          },
          "404": {
            "$ref": "#/components/responses/404"
          },
          "405": {
            "$ref": "#/components/responses/405"
          },
          "409": {
            "$ref": "#/components/responses/409"
          },
          "500": {
            "$ref": "#/components/responses/500"
          },
          "501": {
            "$ref": "#/components/responses/501"
          },
          "503": {
            "$ref": "#/components/responses/503"
          }
        }
      }
    },
    "/productOffering": {
      "get": {
        "tags": [
          "productOffering"
        ],
        "summary": "List or find ProductOffering objects",
        "description": "List or find ProductOffering objects",
        "operationId": "listProductOffering",
        "parameters": [
          {
            "$ref": "#/components/parameters/Fields"
          },
          {
            "$ref": "#/components/parameters/Offset"
          },
          {
            "$ref": "#/components/parameters/Limit"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/200ProductOfferingArray"
          },
          "400": {
            "$ref": "#/components/responses/400"
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          },
          "404": {
            "$ref": "#/components/responses/404"
          },
          "405": {
            "$ref": "#/components/responses/405"
          },
          "500": {
            "$ref": "#/components/responses/500"
          },
          "501": {
            "$ref": "#/components/responses/501"
          },
          "503": {
            "$ref": "#/components/responses/503"
          }
        }
      },
      "post": {
        "tags": [
          "productOffering"
        ],
        "summary": "Creates a ProductOffering",
        "description": "This operation creates a ProductOffering entity.",
        "operationId": "createProductOffering",
        "parameters": [
          {
            "$ref": "#/components/parameters/Fields"
          }
        ],
        "requestBody": {
          "$ref": "#/components/requestBodies/ProductOffering_FVO"
        },
        "responses": {
          "201": {
            "$ref": "#/components/responses/201ProductOffering"
          },
          "202": {
            "description": "Accepted"
          },
          "400": {
            "$ref": "#/components/responses/400"
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          },
          "404": {
            "$ref": "#/components/responses/404"
          },
          "405": {
            "$ref": "#/components/responses/405"
          },
          "409": {
            "$ref": "#/components/responses/409"
          },
          "500": {
            "$ref": "#/components/responses/500"
          },
          "501": {
            "$ref": "#/components/responses/501"
          },
          "503": {
            "$ref": "#/components/responses/503"
          }
        }
      }
    },
    "/productOffering/{id}": {
      "get": {
        "tags": [
          "productOffering"
        ],
        "summary": "Retrieves a ProductOffering by ID",
        "description": "This operation retrieves a ProductOffering entity. Attribute selection enabled for all first level attributes.",
        "operationId": "retrieveProductOffering",
        "parameters": [
          {
            "$ref": "#/components/parameters/Id"
          },
          {
            "$ref": "#/components/parameters/Fields"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/200ProductOffering_Get"
          },
          "400": {
            "$ref": "#/components/responses/400"
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          },
          "404": {
            "$ref": "#/components/responses/404"
          },
          "405": {
            "$ref": "#/components/responses/405"
          },
          "500": {
            "$ref": "#/components/responses/500"
          },
          "501": {
            "$ref": "#/components/responses/501"
          },
          "503": {
            "$ref": "#/components/responses/503"
          }
        }
      },
      "patch": {
        "tags": [
          "productOffering"
        ],
        "summary": "Updates partially a ProductOffering",
        "description": "This operation updates partially a ProductOffering entity.",
        "operationId": "patchProductOffering",
        "parameters": [
          {
            "$ref": "#/components/parameters/Id"
          },
          {
            "$ref": "#/components/parameters/Fields"
          }
        ],
        "requestBody": {
          "$ref": "#/components/requestBodies/ProductOffering_MVO"
        },
        "responses": {
          "200": {
            "$ref": "#/components/responses/200ProductOffering_Patch"
          },
          "202": {
            "description": "Accepted"
          },
          "400": {
            "$ref": "#/components/responses/400"
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          },
          "404": {
            "$ref": "#/components/responses/404"
          },
          "405": {
            "$ref": "#/components/responses/405"
          },
          "409": {
            "$ref": "#/components/responses/409"
          },
          "500": {
            "$ref": "#/components/responses/500"
          },
          "501": {
            "$ref": "#/components/responses/501"
          },
          "503": {
            "$ref": "#/components/responses/503"
          }
        }
      },
      "delete": {
        "tags": [
          "productOffering"
        ],
        "summary": "Deletes a ProductOffering",
        "description": "This operation deletes a ProductOffering entity.",
        "operationId": "deleteProductOffering",
        "parameters": [
          {
            "$ref": "#/components/parameters/Id"
          }
        ],
        "responses": {
          "202": {
            "$ref": "#/components/responses/202"
          },
          "204": {
            "$ref": "#/components/responses/204"
          },
          "400": {
            "$ref": "#/components/responses/400"
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          },
          "404": {
            "$ref": "#/components/responses/404"
          },
          "405": {
            "$ref": "#/components/responses/405"
          },
          "409": {
            "$ref": "#/components/responses/409"
          },
          "500": {
            "$ref": "#/components/responses/500"
          },
          "501": {
            "$ref": "#/components/responses/501"
          },
          "503": {
            "$ref": "#/components/responses/503"
          }
        }
      }
    },
    "/productOfferingPrice": {
      "get": {
        "tags": [
          "productOfferingPrice"
        ],
        "summary": "List or find ProductOfferingPrice objects",
        "description": "List or find ProductOfferingPrice objects",
        "operationId": "listProductOfferingPrice",
        "parameters": [
          {
            "$ref": "#/components/parameters/Fields"
          },
          {
            "$ref": "#/components/parameters/Offset"
          },
          {
            "$ref": "#/components/parameters/Limit"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/200ProductOfferingPriceArray"
          },
          "400": {
            "$ref": "#/components/responses/400"
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          },
          "404": {
            "$ref": "#/components/responses/404"
          },
          "405": {
            "$ref": "#/components/responses/405"
          },
          "500": {
            "$ref": "#/components/responses/500"
          },
          "501": {
            "$ref": "#/components/responses/501"
          },
          "503": {
            "$ref": "#/components/responses/503"
          }
        }
      },
      "post": {
        "tags": [
          "productOfferingPrice"
        ],
        "summary": "Creates a ProductOfferingPrice",
        "description": "This operation creates a ProductOfferingPrice entity.",
        "operationId": "createProductOfferingPrice",
        "parameters": [
          {
            "$ref": "#/components/parameters/Fields"
          }
        ],
        "requestBody": {
          "$ref": "#/components/requestBodies/ProductOfferingPrice_FVO"
        },
        "responses": {
          "201": {
            "$ref": "#/components/responses/201ProductOfferingPrice"
          },
          "202": {
            "description": "Accepted"
          },
          "400": {
            "$ref": "#/components/responses/400"
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          },
          "404": {
            "$ref": "#/components/responses/404"
          },
          "405": {
            "$ref": "#/components/responses/405"
          },
          "409": {
            "$ref": "#/components/responses/409"
          },
          "500": {
            "$ref": "#/components/responses/500"
          },
          "501": {
            "$ref": "#/components/responses/501"
          },
          "503": {
            "$ref": "#/components/responses/503"
          }
        }
      }
    },
    "/productOfferingPrice/{id}": {
      "get": {
        "tags": [
          "productOfferingPrice"
        ],
        "summary": "Retrieves a ProductOfferingPrice by ID",
        "description": "This operation retrieves a ProductOfferingPrice entity. Attribute selection enabled for all first level attributes.",
        "operationId": "retrieveProductOfferingPrice",
        "parameters": [
          {
            "$ref": "#/components/parameters/Id"
          },
          {
            "$ref": "#/components/parameters/Fields"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/200ProductOfferingPrice_Get"
          },
          "400": {
            "$ref": "#/components/responses/400"
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          },
          "404": {
            "$ref": "#/components/responses/404"
          },
          "405": {
            "$ref": "#/components/responses/405"
          },
          "500": {
            "$ref": "#/components/responses/500"
          },
          "501": {
            "$ref": "#/components/responses/501"
          },
          "503": {
            "$ref": "#/components/responses/503"
          }
        }
      },
      "patch": {
        "tags": [
          "productOfferingPrice"
        ],
        "summary": "Updates partially a ProductOfferingPrice",
        "description": "This operation updates partially a ProductOfferingPrice entity.",
        "operationId": "patchProductOfferingPrice",
        "parameters": [
          {
            "$ref": "#/components/parameters/Id"
          },
          {
            "$ref": "#/components/parameters/Fields"
          }
        ],
        "requestBody": {
          "$ref": "#/components/requestBodies/ProductOfferingPrice_MVO"
        },
        "responses": {
          "200": {
            "$ref": "#/components/responses/200ProductOfferingPrice_Patch"
          },
          "202": {
            "description": "Accepted"
          },
          "400": {
            "$ref": "#/components/responses/400"
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          },
          "404": {
            "$ref": "#/components/responses/404"
          },
          "405": {
            "$ref": "#/components/responses/405"
          },
          "409": {
            "$ref": "#/components/responses/409"
          },
          "500": {
            "$ref": "#/components/responses/500"
          },
          "501": {
            "$ref": "#/components/responses/501"
          },
          "503": {
            "$ref": "#/components/responses/503"
          }
        }
      },
      "delete": {
        "tags": [
          "productOfferingPrice"
        ],
        "summary": "Deletes a ProductOfferingPrice",
        "description": "This operation deletes a ProductOfferingPrice entity.",
        "operationId": "deleteProductOfferingPrice",
        "parameters": [
          {
            "$ref": "#/components/parameters/Id"
          }
        ],
        "responses": {
          "202": {
            "$ref": "#/components/responses/202"
          },
          "204": {
            "$ref": "#/components/responses/204"
          },
          "400": {
            "$ref": "#/components/responses/400"
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          },
          "404": {
            "$ref": "#/components/responses/404"
          },
          "405": {
            "$ref": "#/components/responses/405"
          },
          "409": {
            "$ref": "#/components/responses/409"
          },
          "500": {
            "$ref": "#/components/responses/500"
          },
          "501": {
            "$ref": "#/components/responses/501"
          },
          "503": {
            "$ref": "#/components/responses/503"
          }
        }
      }
    },
    "/productSpecification": {
      "get": {
        "tags": [
          "productSpecification"
        ],
        "summary": "List or find ProductSpecification objects",
        "description": "List or find ProductSpecification objects",
        "operationId": "listProductSpecification",
        "parameters": [
          {
            "$ref": "#/components/parameters/Fields"
          },
          {
            "$ref": "#/components/parameters/Offset"
          },
          {
            "$ref": "#/components/parameters/Limit"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/200ProductSpecificationArray"
          },
          "400": {
            "$ref": "#/components/responses/400"
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          },
          "404": {
            "$ref": "#/components/responses/404"
          },
          "405": {
            "$ref": "#/components/responses/405"
          },
          "500": {
            "$ref": "#/components/responses/500"
          },
          "501": {
            "$ref": "#/components/responses/501"
          },
          "503": {
            "$ref": "#/components/responses/503"
          }
        }
      },
      "post": {
        "tags": [
          "productSpecification"
        ],
        "summary": "Creates a ProductSpecification",
        "description": "This operation creates a ProductSpecification entity.",
        "operationId": "createProductSpecification",
        "parameters": [
          {
            "$ref": "#/components/parameters/Fields"
          }
        ],
        "requestBody": {
          "$ref": "#/components/requestBodies/ProductSpecification_FVO"
        },
        "responses": {
          "201": {
            "$ref": "#/components/responses/201ProductSpecification"
          },
          "202": {
            "description": "Accepted"
          },
          "400": {
            "$ref": "#/components/responses/400"
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          },
          "404": {
            "$ref": "#/components/responses/404"
          },
          "405": {
            "$ref": "#/components/responses/405"
          },
          "409": {
            "$ref": "#/components/responses/409"
          },
          "500": {
            "$ref": "#/components/responses/500"
          },
          "501": {
            "$ref": "#/components/responses/501"
          },
          "503": {
            "$ref": "#/components/responses/503"
          }
        }
      }
    },
    "/productSpecification/{id}": {
      "get": {
        "tags": [
          "productSpecification"
        ],
        "summary": "Retrieves a ProductSpecification by ID",
        "description": "This operation retrieves a ProductSpecification entity. Attribute selection enabled for all first level attributes.",
        "operationId": "retrieveProductSpecification",
        "parameters": [
          {
            "$ref": "#/components/parameters/Id"
          },
          {
            "$ref": "#/components/parameters/Fields"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/200ProductSpecification_Get"
          },
          "400": {
            "$ref": "#/components/responses/400"
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          },
          "404": {
            "$ref": "#/components/responses/404"
          },
          "405": {
            "$ref": "#/components/responses/405"
          },
          "500": {
            "$ref": "#/components/responses/500"
          },
          "501": {
            "$ref": "#/components/responses/501"
          },
          "503": {
            "$ref": "#/components/responses/503"
          }
        }
      },
      "patch": {
        "tags": [
          "productSpecification"
        ],
        "summary": "Updates partially a ProductSpecification",
        "description": "This operation updates partially a ProductSpecification entity.",
        "operationId": "patchProductSpecification",
        "parameters": [
          {
            "$ref": "#/components/parameters/Id"
          },
          {
            "$ref": "#/components/parameters/Fields"
          }
        ],
        "requestBody": {
          "$ref": "#/components/requestBodies/ProductSpecification_MVO"
        },
        "responses": {
          "200": {
            "$ref": "#/components/responses/200ProductSpecification_Patch"
          },
          "202": {
            "description": "Accepted"
          },
          "400": {
            "$ref": "#/components/responses/400"
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          },
          "404": {
            "$ref": "#/components/responses/404"
          },
          "405": {
            "$ref": "#/components/responses/405"
          },
          "409": {
            "$ref": "#/components/responses/409"
          },
          "500": {
            "$ref": "#/components/responses/500"
          },
          "501": {
            "$ref": "#/components/responses/501"
          },
          "503": {
            "$ref": "#/components/responses/503"
          }
        }
      },
      "delete": {
        "tags": [
          "productSpecification"
        ],
        "summary": "Deletes a ProductSpecification",
        "description": "This operation deletes a ProductSpecification entity.",
        "operationId": "deleteProductSpecification",
        "parameters": [
          {
            "$ref": "#/components/parameters/Id"
          }
        ],
        "responses": {
          "202": {
            "$ref": "#/components/responses/202"
          },
          "204": {
            "$ref": "#/components/responses/204"
          },
          "400": {
            "$ref": "#/components/responses/400"
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          },
          "404": {
            "$ref": "#/components/responses/404"
          },
          "405": {
            "$ref": "#/components/responses/405"
          },
          "409": {
            "$ref": "#/components/responses/409"
          },
          "500": {
            "$ref": "#/components/responses/500"
          },
          "501": {
            "$ref": "#/components/responses/501"
          },
          "503": {
            "$ref": "#/components/responses/503"
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "Addressable": {
        "type": "object",
        "description": "Base schema for adressable entities",
        "properties": {
          "href": {
            "type": "string",
            "description": "Hyperlink reference"
          },
          "id": {
            "type": "string",
            "description": "unique identifier"
          }
        }
      },
      "Addressable_FVO": {
        "type": "object",
        "description": "Base schema for adressable entities",
        "properties": {
          "id": {
            "type": "string",
            "description": "unique identifier"
          }
        }
      },
      "AgreementRef": {
        "type": "object",
        "description": "Agreement reference. An agreement represents a contract or arrangement, either written or verbal and sometimes enforceable by law, such as a service level agreement or a customer price agreement. An agreement involves a number of other business entities, such as products, services, and resources and/or their specifications.",
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "$ref": "#/components/schemas/EntityRef"
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "AgreementRef": "#/components/schemas/AgreementRef"
          }
        }
      },
      "AgreementRef_FVO": {
        "type": "object",
        "description": "Agreement reference. An agreement represents a contract or arrangement, either written or verbal and sometimes enforceable by law, such as a service level agreement or a customer price agreement. An agreement involves a number of other business entities, such as products, services, and resources and/or their specifications.",
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible_FVO"
          },
          {
            "$ref": "#/components/schemas/EntityRef_FVO"
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "AgreementRef": "#/components/schemas/AgreementRef_FVO"
          }
        }
      },
      "AgreementRef_MVO": {
        "type": "object",
        "description": "Agreement reference. An agreement represents a contract or arrangement, either written or verbal and sometimes enforceable by law, such as a service level agreement or a customer price agreement. An agreement involves a number of other business entities, such as products, services, and resources and/or their specifications.",
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "$ref": "#/components/schemas/EntityRef"
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "AgreementRef": "#/components/schemas/AgreementRef_MVO"
          }
        }
      },
      "AllowedProductAction": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "description": "Defines an action that can be taken on a product in the inventory as part of a product order. It is expected that this entity will be attached to product catalog items such as specifications and offerings",
            "properties": {
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "channel": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ChannelRef"
                },
                "description": "A list of sales channels in which this action is allowed; for instance Remove might be allowed only in an assisted channel not in a self-service channel",
                "example": {
                  "id": "4406",
                  "href": "https://mycsp.com:8080/tmf-api/salesChannelManagement/v4/channel/4406",
                  "name": "Online Channel",
                  "@referredType": "SalesChannel",
                  "@type": "ChannelRef",
                  "@baseType": "",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schemas/Common/ChannelRef.schema.json"
                }
              },
              "action": {
                "type": "string",
                "description": "The name of the action",
                "example": "add"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "AllowedProductAction": "#/components/schemas/AllowedProductAction"
          }
        }
      },
      "AllowedProductAction_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible_FVO"
          },
          {
            "type": "object",
            "description": "Defines an action that can be taken on a product in the inventory as part of a product order. It is expected that this entity will be attached to product catalog items such as specifications and offerings",
            "properties": {
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "channel": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ChannelRef_FVO"
                },
                "description": "A list of sales channels in which this action is allowed; for instance Remove might be allowed only in an assisted channel not in a self-service channel",
                "example": {
                  "id": "4406",
                  "href": "https://mycsp.com:8080/tmf-api/salesChannelManagement/v4/channel/4406",
                  "name": "Online Channel",
                  "@referredType": "SalesChannel",
                  "@type": "ChannelRef",
                  "@baseType": "",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schemas/Common/ChannelRef.schema.json"
                }
              },
              "action": {
                "type": "string",
                "description": "The name of the action",
                "example": "add"
              }
            },
            "required": [
              "action"
            ]
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "AllowedProductAction": "#/components/schemas/AllowedProductAction_FVO"
          }
        }
      },
      "AllowedProductAction_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "description": "Defines an action that can be taken on a product in the inventory as part of a product order. It is expected that this entity will be attached to product catalog items such as specifications and offerings",
            "properties": {
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "channel": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ChannelRef_MVO"
                },
                "description": "A list of sales channels in which this action is allowed; for instance Remove might be allowed only in an assisted channel not in a self-service channel",
                "example": {
                  "id": "4406",
                  "href": "https://mycsp.com:8080/tmf-api/salesChannelManagement/v4/channel/4406",
                  "name": "Online Channel",
                  "@referredType": "SalesChannel",
                  "@type": "ChannelRef",
                  "@baseType": "",
                  "@schemaLocation": "https://mycsp.com:8080/tmf-api/schemas/Common/ChannelRef.schema.json"
                }
              },
              "action": {
                "type": "string",
                "description": "The name of the action",
                "example": "add"
              }
            },
            "required": [
              "action"
            ]
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "AllowedProductAction": "#/components/schemas/AllowedProductAction_MVO"
          }
        }
      },
      "Attachment": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Entity"
          },
          {
            "type": "object",
            "description": "Complements the description of an element (for instance a product) through video, pictures...",
            "properties": {
              "name": {
                "type": "string",
                "description": "The name of the attachment"
              },
              "description": {
                "type": "string",
                "description": "A narrative text describing the content of the attachment",
                "example": "Photograph of the Product"
              },
              "url": {
                "type": "string",
                "description": "Uniform Resource Locator, is a web page address (a subset of URI)",
                "example": "http://host/Content/4aafacbd-11ff-4dc8-b445-305f2215715f"
              },
              "content": {
                "type": "string",
                "format": "base64",
                "description": "The actual contents of the attachment object, if embedded, encoded as base64"
              },
              "size": {
                "$ref": "#/components/schemas/Quantity"
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "attachmentType": {
                "type": "string",
                "description": "a business characterization of the purpose of the attachment, for example logo, instructionManual, contractCopy"
              },
              "mimeType": {
                "type": "string",
                "description": "a technical characterization of the attachment content format using IETF Mime Types"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "Attachment": "#/components/schemas/Attachment"
          }
        }
      },
      "AttachmentRef": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef"
          },
          {
            "type": "object",
            "description": "Attachment reference. An attachment complements the description of an element (for instance a product) through video, pictures",
            "properties": {
              "description": {
                "type": "string",
                "description": "A narrative text describing the content of the attachment"
              },
              "url": {
                "description": "Link to the attachment media/content",
                "type": "string"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "AttachmentRef": "#/components/schemas/AttachmentRef"
          }
        }
      },
      "AttachmentRefOrValue": {
        "type": "object",
        "description": "The polymorphic attributes @type, @schemaLocation & @referredType are related to the Attachment entity and not the AttachmentRefOrValue class itself",
        "oneOf": [
          {
            "$ref": "#/components/schemas/Attachment"
          },
          {
            "$ref": "#/components/schemas/AttachmentRef"
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "Attachment": "#/components/schemas/Attachment",
            "AttachmentRef": "#/components/schemas/AttachmentRef"
          }
        }
      },
      "AttachmentRefOrValue_FVO": {
        "type": "object",
        "description": "The polymorphic attributes @type, @schemaLocation & @referredType are related to the Attachment entity and not the AttachmentRefOrValue class itself",
        "oneOf": [
          {
            "$ref": "#/components/schemas/Attachment_FVO"
          },
          {
            "$ref": "#/components/schemas/AttachmentRef_FVO"
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "Attachment": "#/components/schemas/Attachment_FVO",
            "AttachmentRef": "#/components/schemas/AttachmentRef_FVO"
          }
        }
      },
      "AttachmentRefOrValue_MVO": {
        "type": "object",
        "description": "The polymorphic attributes @type, @schemaLocation & @referredType are related to the Attachment entity and not the AttachmentRefOrValue class itself",
        "oneOf": [
          {
            "$ref": "#/components/schemas/Attachment_MVO"
          },
          {
            "$ref": "#/components/schemas/AttachmentRef_MVO"
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "Attachment": "#/components/schemas/Attachment_MVO",
            "AttachmentRef": "#/components/schemas/AttachmentRef_MVO"
          }
        }
      },
      "AttachmentRef_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef_FVO"
          },
          {
            "type": "object",
            "description": "Attachment reference. An attachment complements the description of an element (for instance a product) through video, pictures",
            "properties": {
              "description": {
                "type": "string",
                "description": "A narrative text describing the content of the attachment"
              },
              "url": {
                "description": "Link to the attachment media/content",
                "type": "string"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "AttachmentRef": "#/components/schemas/AttachmentRef_FVO"
          }
        }
      },
      "AttachmentRef_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef"
          },
          {
            "type": "object",
            "description": "Attachment reference. An attachment complements the description of an element (for instance a product) through video, pictures",
            "properties": {
              "description": {
                "type": "string",
                "description": "A narrative text describing the content of the attachment"
              },
              "url": {
                "description": "Link to the attachment media/content",
                "type": "string"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "AttachmentRef": "#/components/schemas/AttachmentRef_MVO"
          }
        }
      },
      "Attachment_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Entity_FVO"
          },
          {
            "type": "object",
            "description": "Complements the description of an element (for instance a product) through video, pictures...",
            "properties": {
              "name": {
                "type": "string",
                "description": "The name of the attachment"
              },
              "description": {
                "type": "string",
                "description": "A narrative text describing the content of the attachment",
                "example": "Photograph of the Product"
              },
              "url": {
                "type": "string",
                "description": "Uniform Resource Locator, is a web page address (a subset of URI)",
                "example": "http://host/Content/4aafacbd-11ff-4dc8-b445-305f2215715f"
              },
              "content": {
                "type": "string",
                "format": "base64",
                "description": "The actual contents of the attachment object, if embedded, encoded as base64"
              },
              "size": {
                "$ref": "#/components/schemas/Quantity"
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "attachmentType": {
                "type": "string",
                "description": "a business characterization of the purpose of the attachment, for example logo, instructionManual, contractCopy"
              },
              "mimeType": {
                "type": "string",
                "description": "a technical characterization of the attachment content format using IETF Mime Types"
              }
            },
            "required": [
              "attachmentType",
              "mimeType"
            ]
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "Attachment": "#/components/schemas/Attachment_FVO"
          }
        }
      },
      "Attachment_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Entity_MVO"
          },
          {
            "type": "object",
            "description": "Complements the description of an element (for instance a product) through video, pictures...",
            "properties": {
              "name": {
                "type": "string",
                "description": "The name of the attachment"
              },
              "description": {
                "type": "string",
                "description": "A narrative text describing the content of the attachment",
                "example": "Photograph of the Product"
              },
              "url": {
                "type": "string",
                "description": "Uniform Resource Locator, is a web page address (a subset of URI)",
                "example": "http://host/Content/4aafacbd-11ff-4dc8-b445-305f2215715f"
              },
              "content": {
                "type": "string",
                "format": "base64",
                "description": "The actual contents of the attachment object, if embedded, encoded as base64"
              },
              "size": {
                "$ref": "#/components/schemas/Quantity"
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "attachmentType": {
                "type": "string",
                "description": "a business characterization of the purpose of the attachment, for example logo, instructionManual, contractCopy"
              },
              "mimeType": {
                "type": "string",
                "description": "a technical characterization of the attachment content format using IETF Mime Types"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "Attachment": "#/components/schemas/Attachment_MVO"
          }
        }
      },
      "BaseEvent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Entity"
          },
          {
            "type": "object",
            "description": "Base event with common attributes.",
            "properties": {
              "event": {
                "type": "object"
              },
              "eventId": {
                "type": "string",
                "description": "The identifier of the notification."
              },
              "eventTime": {
                "type": "string",
                "format": "date-time",
                "description": "Time of the event occurrence."
              },
              "eventType": {
                "type": "string",
                "description": "The type of the notification."
              },
              "correlationId": {
                "type": "string",
                "description": "The correlation id for this event."
              },
              "domain": {
                "type": "string",
                "description": "The domain of the event."
              },
              "title": {
                "type": "string",
                "description": "The title of the event."
              },
              "description": {
                "type": "string",
                "description": "An explanatory of the event."
              },
              "priority": {
                "type": "string",
                "description": "A priority."
              },
              "timeOcurred": {
                "type": "string",
                "format": "date-time",
                "description": "The time the event occured."
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "BaseEvent": "#/components/schemas/BaseEvent"
          }
        }
      },
      "BaseEvent_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Entity_FVO"
          },
          {
            "type": "object",
            "description": "Base event with common attributes.",
            "properties": {
              "event": {
                "type": "object"
              },
              "eventId": {
                "type": "string",
                "description": "The identifier of the notification."
              },
              "eventTime": {
                "type": "string",
                "format": "date-time",
                "description": "Time of the event occurrence."
              },
              "eventType": {
                "type": "string",
                "description": "The type of the notification."
              },
              "correlationId": {
                "type": "string",
                "description": "The correlation id for this event."
              },
              "domain": {
                "type": "string",
                "description": "The domain of the event."
              },
              "title": {
                "type": "string",
                "description": "The title of the event."
              },
              "description": {
                "type": "string",
                "description": "An explanatory of the event."
              },
              "priority": {
                "type": "string",
                "description": "A priority."
              },
              "timeOcurred": {
                "type": "string",
                "format": "date-time",
                "description": "The time the event occured."
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "BaseEvent": "#/components/schemas/BaseEvent_FVO"
          }
        }
      },
      "BaseEvent_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Entity_MVO"
          },
          {
            "type": "object",
            "description": "Base event with common attributes.",
            "properties": {
              "event": {
                "type": "object"
              },
              "eventId": {
                "type": "string",
                "description": "The identifier of the notification."
              },
              "eventTime": {
                "type": "string",
                "format": "date-time",
                "description": "Time of the event occurrence."
              },
              "eventType": {
                "type": "string",
                "description": "The type of the notification."
              },
              "correlationId": {
                "type": "string",
                "description": "The correlation id for this event."
              },
              "domain": {
                "type": "string",
                "description": "The domain of the event."
              },
              "title": {
                "type": "string",
                "description": "The title of the event."
              },
              "description": {
                "type": "string",
                "description": "An explanatory of the event."
              },
              "priority": {
                "type": "string",
                "description": "A priority."
              },
              "timeOcurred": {
                "type": "string",
                "format": "date-time",
                "description": "The time the event occured."
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "BaseEvent": "#/components/schemas/BaseEvent_MVO"
          }
        }
      },
      "BooleanArrayCharacteristicValueSpecification": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is an array booleans",
            "properties": {
              "value": {
                "type": "array",
                "items": {
                  "type": "boolean"
                }
              }
            }
          }
        ]
      },
      "BooleanArrayCharacteristicValueSpecification_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification_FVO"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is an array booleans",
            "properties": {
              "value": {
                "type": "array",
                "items": {
                  "type": "boolean"
                }
              }
            }
          }
        ]
      },
      "BooleanArrayCharacteristicValueSpecification_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification_MVO"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is an array booleans",
            "properties": {
              "value": {
                "type": "array",
                "items": {
                  "type": "boolean"
                }
              }
            }
          }
        ]
      },
      "BooleanCharacteristicValueSpecification": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is a boolean",
            "properties": {
              "value": {
                "type": "boolean",
                "description": "Value of the characteristic"
              }
            }
          }
        ]
      },
      "BooleanCharacteristicValueSpecification_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification_FVO"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is a boolean",
            "properties": {
              "value": {
                "type": "boolean",
                "description": "Value of the characteristic"
              }
            }
          }
        ]
      },
      "BooleanCharacteristicValueSpecification_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification_MVO"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is a boolean",
            "properties": {
              "value": {
                "type": "boolean",
                "description": "Value of the characteristic"
              }
            }
          }
        ]
      },
      "BundledGroupProductOffering": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "description": "A group of product offerings that can be chosen for instantiation of children of the parent product offering, for example a list of channels for selection under a TV offering. Sometimes known as Selection Group. The group can also hierarchically contain other groups",
            "properties": {
              "id": {
                "type": "string",
                "description": "Locally unique identifier of the group, useful in case the parent product offering or group includes multiple groups.",
                "example": "1"
              },
              "name": {
                "type": "string",
                "description": "The name of the group of child offerings. Required to distinguish several choice groups.",
                "example": "TV Channels"
              },
              "bundledProductOffering": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/BundledProductOffering"
                },
                "description": "Child offerings, from which instances can be created as direct or hierarchically indirect children of the parent offering."
              },
              "bundledGroupProductOffering": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/BundledGroupProductOffering"
                },
                "description": "Child groups of product offerings, to enable hierarchical sub-grouping."
              },
              "bundledGroupProductOfferingOption": {
                "$ref": "#/components/schemas/BundledGroupProductOfferingOption"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "BundledGroupProductOffering": "#/components/schemas/BundledGroupProductOffering"
          }
        }
      },
      "BundledGroupProductOfferingOption": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "description": "Defines for a BundledProductOfferingGroup (i.e. a group of multiple child offerings of a parent product offering), how many instances from the child offerings can be chosen in total. For example facilitate the choice of between 2 and 7 channel packs from a list, and cause certain items to be selected by default",
            "properties": {
              "numberRelOfferLowerLimit": {
                "type": "integer",
                "description": "The minimum total number of instances of the child offerings directly of hierarchically in the group that should be instantiated",
                "example": 2
              },
              "numberRelOfferUpperLimit": {
                "type": "integer",
                "description": "The maximum total number of instances of the child offerings directly of hierarchically in the group that should be instantiated",
                "example": 7
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "BundledGroupProductOfferingOption": "#/components/schemas/BundledGroupProductOfferingOption"
          }
        }
      },
      "BundledGroupProductOfferingOption_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible_FVO"
          },
          {
            "type": "object",
            "description": "Defines for a BundledProductOfferingGroup (i.e. a group of multiple child offerings of a parent product offering), how many instances from the child offerings can be chosen in total. For example facilitate the choice of between 2 and 7 channel packs from a list, and cause certain items to be selected by default",
            "properties": {
              "numberRelOfferLowerLimit": {
                "type": "integer",
                "description": "The minimum total number of instances of the child offerings directly of hierarchically in the group that should be instantiated",
                "example": 2
              },
              "numberRelOfferUpperLimit": {
                "type": "integer",
                "description": "The maximum total number of instances of the child offerings directly of hierarchically in the group that should be instantiated",
                "example": 7
              }
            },
            "required": [
              "numberRelOfferLowerLimit",
              "numberRelOfferUpperLimit"
            ]
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "BundledGroupProductOfferingOption": "#/components/schemas/BundledGroupProductOfferingOption_FVO"
          }
        }
      },
      "BundledGroupProductOfferingOption_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "description": "Defines for a BundledProductOfferingGroup (i.e. a group of multiple child offerings of a parent product offering), how many instances from the child offerings can be chosen in total. For example facilitate the choice of between 2 and 7 channel packs from a list, and cause certain items to be selected by default",
            "properties": {
              "numberRelOfferLowerLimit": {
                "type": "integer",
                "description": "The minimum total number of instances of the child offerings directly of hierarchically in the group that should be instantiated",
                "example": 2
              },
              "numberRelOfferUpperLimit": {
                "type": "integer",
                "description": "The maximum total number of instances of the child offerings directly of hierarchically in the group that should be instantiated",
                "example": 7
              }
            },
            "required": [
              "numberRelOfferLowerLimit",
              "numberRelOfferUpperLimit"
            ]
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "BundledGroupProductOfferingOption": "#/components/schemas/BundledGroupProductOfferingOption_MVO"
          }
        }
      },
      "BundledGroupProductOffering_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible_FVO"
          },
          {
            "type": "object",
            "description": "A group of product offerings that can be chosen for instantiation of children of the parent product offering, for example a list of channels for selection under a TV offering. Sometimes known as Selection Group. The group can also hierarchically contain other groups",
            "properties": {
              "id": {
                "type": "string",
                "description": "Locally unique identifier of the group, useful in case the parent product offering or group includes multiple groups.",
                "example": "1"
              },
              "name": {
                "type": "string",
                "description": "The name of the group of child offerings. Required to distinguish several choice groups.",
                "example": "TV Channels"
              },
              "bundledProductOffering": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/BundledProductOffering_FVO"
                },
                "description": "Child offerings, from which instances can be created as direct or hierarchically indirect children of the parent offering."
              },
              "bundledGroupProductOffering": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/BundledGroupProductOffering_FVO"
                },
                "description": "Child groups of product offerings, to enable hierarchical sub-grouping."
              },
              "bundledGroupProductOfferingOption": {
                "$ref": "#/components/schemas/BundledGroupProductOfferingOption_FVO"
              }
            },
            "required": [
              "name"
            ]
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "BundledGroupProductOffering": "#/components/schemas/BundledGroupProductOffering_FVO"
          }
        }
      },
      "BundledGroupProductOffering_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "description": "A group of product offerings that can be chosen for instantiation of children of the parent product offering, for example a list of channels for selection under a TV offering. Sometimes known as Selection Group. The group can also hierarchically contain other groups",
            "properties": {
              "id": {
                "type": "string",
                "description": "Locally unique identifier of the group, useful in case the parent product offering or group includes multiple groups.",
                "example": "1"
              },
              "name": {
                "type": "string",
                "description": "The name of the group of child offerings. Required to distinguish several choice groups.",
                "example": "TV Channels"
              },
              "bundledProductOffering": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/BundledProductOffering_MVO"
                },
                "description": "Child offerings, from which instances can be created as direct or hierarchically indirect children of the parent offering."
              },
              "bundledGroupProductOffering": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/BundledGroupProductOffering_MVO"
                },
                "description": "Child groups of product offerings, to enable hierarchical sub-grouping."
              },
              "bundledGroupProductOfferingOption": {
                "$ref": "#/components/schemas/BundledGroupProductOfferingOption_MVO"
              }
            },
            "required": [
              "name"
            ]
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "BundledGroupProductOffering": "#/components/schemas/BundledGroupProductOffering_MVO"
          }
        }
      },
      "BundledProductOffering": {
        "allOf": [
          {
            "$ref": "#/components/schemas/ProductOfferingRef"
          },
          {
            "type": "object",
            "description": "Represents a containment of a product offering within another product offering, including specification of cardinality (e.g. is the bundled offering mandatory, how many times can it be instantiated in the parent product, etc.).",
            "properties": {
              "bundledProductOfferingOption": {
                "$ref": "#/components/schemas/BundledProductOfferingOption"
              }
            }
          }
        ]
      },
      "BundledProductOfferingOption": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "description": "A set of numbers that specifies the lower and upper limits for a ProductOffering that can be procured as part of the related BundledProductOffering. Values can range from 0 to unbounded",
            "properties": {
              "numberRelOfferDefault": {
                "type": "integer",
                "description": "Default number of produc offereings that should be procured as part of the related BundledProductOffering"
              },
              "numberRelOfferLowerLimit": {
                "type": "integer",
                "description": "lower limit for a product offering that can be procured as part of the related BundledProductOffering"
              },
              "numberRelOfferUpperLimit": {
                "type": "integer",
                "description": "upper limit for a product offering that can be procured as part of the related BundledProductOffering"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "BundledProductOfferingOption": "#/components/schemas/BundledProductOfferingOption"
          }
        }
      },
      "BundledProductOfferingOption_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible_FVO"
          },
          {
            "type": "object",
            "description": "A set of numbers that specifies the lower and upper limits for a ProductOffering that can be procured as part of the related BundledProductOffering. Values can range from 0 to unbounded",
            "properties": {
              "numberRelOfferDefault": {
                "type": "integer",
                "description": "Default number of produc offereings that should be procured as part of the related BundledProductOffering"
              },
              "numberRelOfferLowerLimit": {
                "type": "integer",
                "description": "lower limit for a product offering that can be procured as part of the related BundledProductOffering"
              },
              "numberRelOfferUpperLimit": {
                "type": "integer",
                "description": "upper limit for a product offering that can be procured as part of the related BundledProductOffering"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "BundledProductOfferingOption": "#/components/schemas/BundledProductOfferingOption_FVO"
          }
        }
      },
      "BundledProductOfferingOption_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "description": "A set of numbers that specifies the lower and upper limits for a ProductOffering that can be procured as part of the related BundledProductOffering. Values can range from 0 to unbounded",
            "properties": {
              "numberRelOfferDefault": {
                "type": "integer",
                "description": "Default number of produc offereings that should be procured as part of the related BundledProductOffering"
              },
              "numberRelOfferLowerLimit": {
                "type": "integer",
                "description": "lower limit for a product offering that can be procured as part of the related BundledProductOffering"
              },
              "numberRelOfferUpperLimit": {
                "type": "integer",
                "description": "upper limit for a product offering that can be procured as part of the related BundledProductOffering"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "BundledProductOfferingOption": "#/components/schemas/BundledProductOfferingOption_MVO"
          }
        }
      },
      "BundledProductOfferingPriceRelationship": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef"
          },
          {
            "type": "object",
            "description": "This represents a bundling pricing relationship, allowing a price to be composed of multiple other prices (e.g. a recurring charge and a onetime charge).",
            "properties": {
              "version": {
                "type": "string",
                "description": "Version of the referred product offering price."
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "BundledProductOfferingPriceRelationship": "#/components/schemas/BundledProductOfferingPriceRelationship"
          }
        }
      },
      "BundledProductOfferingPriceRelationship_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef_FVO"
          },
          {
            "type": "object",
            "description": "This represents a bundling pricing relationship, allowing a price to be composed of multiple other prices (e.g. a recurring charge and a onetime charge).",
            "properties": {
              "version": {
                "type": "string",
                "description": "Version of the referred product offering price."
              }
            },
            "required": [
              "id"
            ]
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "BundledProductOfferingPriceRelationship": "#/components/schemas/BundledProductOfferingPriceRelationship_FVO"
          }
        }
      },
      "BundledProductOfferingPriceRelationship_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef"
          },
          {
            "type": "object",
            "description": "This represents a bundling pricing relationship, allowing a price to be composed of multiple other prices (e.g. a recurring charge and a onetime charge).",
            "properties": {
              "version": {
                "type": "string",
                "description": "Version of the referred product offering price."
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "BundledProductOfferingPriceRelationship": "#/components/schemas/BundledProductOfferingPriceRelationship_MVO"
          }
        }
      },
      "BundledProductOffering_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/ProductOfferingRef_FVO"
          },
          {
            "type": "object",
            "description": "Represents a containment of a product offering within another product offering, including specification of cardinality (e.g. is the bundled offering mandatory, how many times can it be instantiated in the parent product, etc.).",
            "properties": {
              "bundledProductOfferingOption": {
                "$ref": "#/components/schemas/BundledProductOfferingOption_FVO"
              }
            }
          }
        ]
      },
      "BundledProductOffering_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/ProductOfferingRef_MVO"
          },
          {
            "type": "object",
            "description": "Represents a containment of a product offering within another product offering, including specification of cardinality (e.g. is the bundled offering mandatory, how many times can it be instantiated in the parent product, etc.).",
            "properties": {
              "bundledProductOfferingOption": {
                "$ref": "#/components/schemas/BundledProductOfferingOption_MVO"
              }
            }
          }
        ]
      },
      "BundledProductSpecification": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "description": "A type of ProductSpecification that belongs to a grouping of ProductSpecifications made available to the market. It inherits of all attributes of ProductSpecification.",
            "properties": {
              "href": {
                "type": "string",
                "description": "Reference of the product specification"
              },
              "id": {
                "type": "string",
                "description": "Unique identifier of the product specification"
              },
              "lifecycleStatus": {
                "type": "string",
                "description": "Used to indicate the current lifecycle status"
              },
              "name": {
                "type": "string",
                "description": "Name of the product specification"
              },
              "version": {
                "type": "string",
                "description": "Version of the product specification"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "BundledProductSpecification": "#/components/schemas/BundledProductSpecification"
          }
        }
      },
      "BundledProductSpecification_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible_FVO"
          },
          {
            "type": "object",
            "description": "A type of ProductSpecification that belongs to a grouping of ProductSpecifications made available to the market. It inherits of all attributes of ProductSpecification.",
            "properties": {
              "href": {
                "type": "string",
                "description": "Reference of the product specification"
              },
              "id": {
                "type": "string",
                "description": "Unique identifier of the product specification"
              },
              "lifecycleStatus": {
                "type": "string",
                "description": "Used to indicate the current lifecycle status"
              },
              "name": {
                "type": "string",
                "description": "Name of the product specification"
              },
              "version": {
                "type": "string",
                "description": "Version of the product specification"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "BundledProductSpecification": "#/components/schemas/BundledProductSpecification_FVO"
          }
        }
      },
      "BundledProductSpecification_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "description": "A type of ProductSpecification that belongs to a grouping of ProductSpecifications made available to the market. It inherits of all attributes of ProductSpecification.",
            "properties": {
              "href": {
                "type": "string",
                "description": "Reference of the product specification"
              },
              "id": {
                "type": "string",
                "description": "Unique identifier of the product specification"
              },
              "lifecycleStatus": {
                "type": "string",
                "description": "Used to indicate the current lifecycle status"
              },
              "name": {
                "type": "string",
                "description": "Name of the product specification"
              },
              "version": {
                "type": "string",
                "description": "Version of the product specification"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "BundledProductSpecification": "#/components/schemas/BundledProductSpecification_MVO"
          }
        }
      },
      "Catalog": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Entity"
          },
          {
            "type": "object",
            "description": "A collection of Catalog Items",
            "properties": {
              "description": {
                "type": "string",
                "description": "Description of this catalog"
              },
              "catalogType": {
                "type": "string",
                "description": "Type of this Catalog, like Product, Service, Resource etc."
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "version": {
                "type": "string",
                "description": "Catalog version"
              },
              "relatedParty": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/RelatedPartyRefOrPartyRoleRef"
                },
                "description": "List of parties involved in this catalog"
              },
              "lastUpdate": {
                "type": "string",
                "format": "date-time",
                "description": "Date and time of the last update"
              },
              "lifecycleStatus": {
                "type": "string",
                "description": "Used to indicate the current lifecycle status"
              },
              "name": {
                "type": "string",
                "description": "Name of the catalog"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "Catalog": "#/components/schemas/Catalog",
            "ProductCatalog": "#/components/schemas/ProductCatalog"
          }
        }
      },
      "Catalog_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Entity_FVO"
          },
          {
            "type": "object",
            "description": "A collection of Catalog Items",
            "properties": {
              "description": {
                "type": "string",
                "description": "Description of this catalog"
              },
              "catalogType": {
                "type": "string",
                "description": "Type of this Catalog, like Product, Service, Resource etc."
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "version": {
                "type": "string",
                "description": "Catalog version"
              },
              "relatedParty": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/RelatedPartyRefOrPartyRoleRef_FVO"
                },
                "description": "List of parties involved in this catalog"
              },
              "lastUpdate": {
                "type": "string",
                "format": "date-time",
                "description": "Date and time of the last update"
              },
              "lifecycleStatus": {
                "type": "string",
                "description": "Used to indicate the current lifecycle status"
              },
              "name": {
                "type": "string",
                "description": "Name of the catalog"
              }
            },
            "required": [
              "name"
            ]
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "Catalog": "#/components/schemas/Catalog_FVO",
            "ProductCatalog": "#/components/schemas/ProductCatalog_FVO"
          }
        }
      },
      "Catalog_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Entity_MVO"
          },
          {
            "type": "object",
            "description": "A collection of Catalog Items",
            "properties": {
              "description": {
                "type": "string",
                "description": "Description of this catalog"
              },
              "catalogType": {
                "type": "string",
                "description": "Type of this Catalog, like Product, Service, Resource etc."
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "version": {
                "type": "string",
                "description": "Catalog version"
              },
              "relatedParty": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/RelatedPartyRefOrPartyRoleRef_MVO"
                },
                "description": "List of parties involved in this catalog"
              },
              "lastUpdate": {
                "type": "string",
                "format": "date-time",
                "description": "Date and time of the last update"
              },
              "lifecycleStatus": {
                "type": "string",
                "description": "Used to indicate the current lifecycle status"
              },
              "name": {
                "type": "string",
                "description": "Name of the catalog"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "Catalog": "#/components/schemas/Catalog_MVO",
            "ProductCatalog": "#/components/schemas/ProductCatalog_MVO"
          }
        }
      },
      "Category": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Entity"
          },
          {
            "type": "object",
            "description": "The category resource is used to group product offerings, service and resource candidates in logical containers. Categories can contain other categories and/or product offerings, resource or service candidates.",
            "properties": {
              "description": {
                "type": "string",
                "description": "Description of the category"
              },
              "isRoot": {
                "type": "boolean",
                "description": "If true, this Boolean indicates that the category is a root of categories"
              },
              "parent": {
                "$ref": "#/components/schemas/CategoryRef"
              },
              "productOffering": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ProductOfferingRef"
                },
                "description": "List of product offerings that are referred to by the category"
              },
              "subCategory": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CategoryRef"
                },
                "description": "The category resource is used to group product offerings, service and resource candidates in logical containers. Categories can contain other (sub-)categories and/or product offerings."
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "version": {
                "type": "string",
                "description": "Category version"
              },
              "lastUpdate": {
                "type": "string",
                "format": "date-time",
                "description": "Date and time of the last update"
              },
              "lifecycleStatus": {
                "type": "string",
                "description": "Used to indicate the current lifecycle status"
              },
              "name": {
                "type": "string",
                "description": "Name of the category"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "Category": "#/components/schemas/Category"
          }
        }
      },
      "CategoryAttributeValueChangeEvent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Event"
          },
          {
            "type": "object",
            "description": "CategoryAttributeValueChangeEvent generic structure",
            "properties": {
              "event": {
                "$ref": "#/components/schemas/CategoryAttributeValueChangeEventPayload"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "CategoryAttributeValueChangeEvent": "#/components/schemas/CategoryAttributeValueChangeEvent"
          }
        }
      },
      "CategoryAttributeValueChangeEventPayload": {
        "type": "object",
        "description": "CategoryAttributeValueChangeEventPayload generic structure",
        "properties": {
          "category": {
            "$ref": "#/components/schemas/Category"
          }
        }
      },
      "CategoryCreateEvent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Event"
          },
          {
            "type": "object",
            "description": "CategoryCreateEvent generic structure",
            "properties": {
              "event": {
                "$ref": "#/components/schemas/CategoryCreateEventPayload"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "CategoryCreateEvent": "#/components/schemas/CategoryCreateEvent"
          }
        }
      },
      "CategoryCreateEventPayload": {
        "type": "object",
        "description": "CategoryCreateEventPayload generic structure",
        "properties": {
          "category": {
            "$ref": "#/components/schemas/Category"
          }
        }
      },
      "CategoryDeleteEvent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Event"
          },
          {
            "type": "object",
            "description": "CategoryDeleteEvent generic structure",
            "properties": {
              "event": {
                "$ref": "#/components/schemas/CategoryDeleteEventPayload"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "CategoryDeleteEvent": "#/components/schemas/CategoryDeleteEvent"
          }
        }
      },
      "CategoryDeleteEventPayload": {
        "type": "object",
        "description": "CategoryDeleteEventPayload generic structure",
        "properties": {
          "category": {
            "$ref": "#/components/schemas/Category"
          }
        }
      },
      "CategoryRef": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef"
          },
          {
            "type": "object",
            "description": "Reference to a category in the catalog.",
            "properties": {
              "version": {
                "type": "string",
                "description": "Version of the category"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "CategoryRef": "#/components/schemas/CategoryRef"
          }
        }
      },
      "CategoryRef_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef_FVO"
          },
          {
            "type": "object",
            "description": "Reference to a category in the catalog.",
            "properties": {
              "version": {
                "type": "string",
                "description": "Version of the category"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "CategoryRef": "#/components/schemas/CategoryRef_FVO"
          }
        }
      },
      "CategoryRef_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef"
          },
          {
            "type": "object",
            "description": "Reference to a category in the catalog.",
            "properties": {
              "version": {
                "type": "string",
                "description": "Version of the category"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "CategoryRef": "#/components/schemas/CategoryRef_MVO"
          }
        }
      },
      "CategoryStateChangeEvent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Event"
          },
          {
            "type": "object",
            "description": "CategoryStateChangeEvent generic structure",
            "properties": {
              "event": {
                "$ref": "#/components/schemas/CategoryStateChangeEventPayload"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "CategoryStateChangeEvent": "#/components/schemas/CategoryStateChangeEvent"
          }
        }
      },
      "CategoryStateChangeEventPayload": {
        "type": "object",
        "description": "CategoryStateChangeEventPayload generic structure",
        "properties": {
          "category": {
            "$ref": "#/components/schemas/Category"
          }
        }
      },
      "Category_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Entity_FVO"
          },
          {
            "type": "object",
            "description": "The category resource is used to group product offerings, service and resource candidates in logical containers. Categories can contain other categories and/or product offerings, resource or service candidates.",
            "properties": {
              "description": {
                "type": "string",
                "description": "Description of the category"
              },
              "isRoot": {
                "type": "boolean",
                "description": "If true, this Boolean indicates that the category is a root of categories"
              },
              "parent": {
                "$ref": "#/components/schemas/CategoryRef_FVO"
              },
              "productOffering": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ProductOfferingRef_FVO"
                },
                "description": "List of product offerings that are referred to by the category"
              },
              "subCategory": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CategoryRef_FVO"
                },
                "description": "The category resource is used to group product offerings, service and resource candidates in logical containers. Categories can contain other (sub-)categories and/or product offerings."
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "version": {
                "type": "string",
                "description": "Category version"
              },
              "lastUpdate": {
                "type": "string",
                "format": "date-time",
                "description": "Date and time of the last update"
              },
              "lifecycleStatus": {
                "type": "string",
                "description": "Used to indicate the current lifecycle status"
              },
              "name": {
                "type": "string",
                "description": "Name of the category"
              }
            },
            "required": [
              "name",
              "@type"
            ]
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "Category": "#/components/schemas/Category_FVO"
          }
        }
      },
      "Category_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Entity_MVO"
          },
          {
            "type": "object",
            "description": "The category resource is used to group product offerings, service and resource candidates in logical containers. Categories can contain other categories and/or product offerings, resource or service candidates.",
            "properties": {
              "description": {
                "type": "string",
                "description": "Description of the category"
              },
              "isRoot": {
                "type": "boolean",
                "description": "If true, this Boolean indicates that the category is a root of categories"
              },
              "parent": {
                "$ref": "#/components/schemas/CategoryRef_MVO"
              },
              "productOffering": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ProductOfferingRef_MVO"
                },
                "description": "List of product offerings that are referred to by the category"
              },
              "subCategory": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CategoryRef_MVO"
                },
                "description": "The category resource is used to group product offerings, service and resource candidates in logical containers. Categories can contain other (sub-)categories and/or product offerings."
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "version": {
                "type": "string",
                "description": "Category version"
              },
              "lifecycleStatus": {
                "type": "string",
                "description": "Used to indicate the current lifecycle status"
              },
              "name": {
                "type": "string",
                "description": "Name of the category"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "Category": "#/components/schemas/Category_MVO"
          }
        }
      },
      "ChannelRef": {
        "type": "object",
        "description": "The channel to which the resource reference to. e.g. channel for selling product offerings, channel for opening a trouble ticket etc..",
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef"
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ChannelRef": "#/components/schemas/ChannelRef"
          }
        }
      },
      "ChannelRef_FVO": {
        "type": "object",
        "description": "The channel to which the resource reference to. e.g. channel for selling product offerings, channel for opening a trouble ticket etc..",
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef_FVO"
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ChannelRef": "#/components/schemas/ChannelRef_FVO"
          }
        }
      },
      "ChannelRef_MVO": {
        "type": "object",
        "description": "The channel to which the resource reference to. e.g. channel for selling product offerings, channel for opening a trouble ticket etc..",
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef"
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ChannelRef": "#/components/schemas/ChannelRef_MVO"
          }
        }
      },
      "Characteristic": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "description": "Describes a given characteristic of an object or entity through a name/value pair.",
            "properties": {
              "id": {
                "type": "string",
                "description": "Unique identifier of the characteristic"
              },
              "name": {
                "type": "string",
                "description": "Name of the characteristic"
              },
              "valueType": {
                "type": "string",
                "description": "Data type of the value of the characteristic"
              },
              "characteristicRelationship": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CharacteristicRelationship"
                }
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "Characteristic": "#/components/schemas/Characteristic"
          }
        }
      },
      "CharacteristicRelationship": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "description": "Another Characteristic that is related to the current Characteristic;",
            "properties": {
              "id": {
                "type": "string",
                "description": "Unique identifier of the characteristic"
              },
              "relationshipType": {
                "type": "string",
                "description": "The type of relationship"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "CharacteristicRelationship": "#/components/schemas/CharacteristicRelationship"
          }
        }
      },
      "CharacteristicRelationship_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "description": "Another Characteristic that is related to the current Characteristic;",
            "properties": {
              "id": {
                "type": "string",
                "description": "Unique identifier of the characteristic"
              },
              "relationshipType": {
                "type": "string",
                "description": "The type of relationship"
              }
            },
            "required": [
              "id",
              "relationshipType"
            ]
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "CharacteristicRelationship": "#/components/schemas/CharacteristicRelationship_FVO"
          }
        }
      },
      "CharacteristicRelationship_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "description": "Another Characteristic that is related to the current Characteristic;",
            "properties": {
              "id": {
                "type": "string",
                "description": "Unique identifier of the characteristic"
              },
              "relationshipType": {
                "type": "string",
                "description": "The type of relationship"
              }
            },
            "required": [
              "id",
              "relationshipType"
            ]
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "CharacteristicRelationship": "#/components/schemas/CharacteristicRelationship_MVO"
          }
        }
      },
      "CharacteristicSpecification": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "description": "This class defines a characteristic specification.",
            "properties": {
              "id": {
                "type": "string",
                "description": "Unique ID for the characteristic"
              },
              "name": {
                "type": "string",
                "description": "A word, term, or phrase by which this characteristic specification is known and distinguished from other characteristic specifications."
              },
              "valueType": {
                "type": "string",
                "description": "A kind of value that the characteristic can take on, such as numeric, text and so forth"
              },
              "description": {
                "type": "string",
                "description": "A narrative that explains the CharacteristicSpecification."
              },
              "configurable": {
                "type": "boolean",
                "description": "If true, the Boolean indicates that the target Characteristic is configurable"
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "minCardinality": {
                "type": "integer",
                "description": "The minimum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where zero is the value for the minCardinality."
              },
              "maxCardinality": {
                "type": "integer",
                "description": "The maximum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where five is the value for the maxCardinality."
              },
              "isUnique": {
                "type": "boolean",
                "description": "Specifies if the value of this characteristic is unique across all entities instantiated from the specification that uses this characteristc. For example, consider a ProductSpecification for a set-top box, with a CharacteristicSpecification cardID. Each set-top box must have a different value for cardID, so this isUnique attribute would be set to true for the characteristic."
              },
              "regex": {
                "type": "string",
                "description": "A rule or principle represented in regular expression used to derive the value of a characteristic value."
              },
              "extensible": {
                "type": "boolean",
                "description": "An indicator that specifies that the values for the characteristic can be extended by adding new values when instantiating a characteristic for a resource."
              },
              "@valueSchemaLocation": {
                "type": "string",
                "description": "This (optional) field provides a link to the schema describing the value type."
              },
              "charSpecRelationship": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CharacteristicSpecificationRelationship"
                },
                "description": "An aggregation, migration, substitution, dependency or exclusivity relationship between/among Specification Characteristics."
              },
              "characteristicValueSpecification": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CharacteristicValueSpecification"
                },
                "description": "A CharacteristicValueSpecification object is used to define a set of attributes, each of which can be assigned to a corresponding set of attributes in a CharacteristicSpecification object. The values of the attributes in the CharacteristicValueSpecification object describe the values of the attributes that a corresponding Characteristic object can take on."
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "CharacteristicSpecification": "#/components/schemas/CharacteristicSpecification"
          }
        }
      },
      "CharacteristicSpecificationRelationship": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "description": "An aggregation, migration, substitution, dependency or exclusivity relationship between/among Characteristic specifications. The specification characteristic is embedded within the specification whose ID and href are in this entity, and identified by its ID.",
            "properties": {
              "relationshipType": {
                "type": "string",
                "description": "Type of relationship such as aggregation, migration, substitution, dependency, exclusivity"
              },
              "name": {
                "type": "string",
                "description": "Name of the target characteristic within the specification"
              },
              "characteristicSpecificationId": {
                "type": "string",
                "description": "Unique identifier of the characteristic within the specification"
              },
              "parentSpecificationHref": {
                "type": "string",
                "format": "uri",
                "description": "Hyperlink reference to the parent specification containing the target characteristic"
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "parentSpecificationId": {
                "type": "string",
                "description": "Unique identifier of the parent specification containing the target characteristic"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "CharacteristicSpecificationRelationship": "#/components/schemas/CharacteristicSpecificationRelationship"
          }
        }
      },
      "CharacteristicSpecificationRelationship_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible_FVO"
          },
          {
            "type": "object",
            "description": "An aggregation, migration, substitution, dependency or exclusivity relationship between/among Characteristic specifications. The specification characteristic is embedded within the specification whose ID and href are in this entity, and identified by its ID.",
            "properties": {
              "relationshipType": {
                "type": "string",
                "description": "Type of relationship such as aggregation, migration, substitution, dependency, exclusivity"
              },
              "name": {
                "type": "string",
                "description": "Name of the target characteristic within the specification"
              },
              "characteristicSpecificationId": {
                "type": "string",
                "description": "Unique identifier of the characteristic within the specification"
              },
              "parentSpecificationHref": {
                "type": "string",
                "format": "uri",
                "description": "Hyperlink reference to the parent specification containing the target characteristic"
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "parentSpecificationId": {
                "type": "string",
                "description": "Unique identifier of the parent specification containing the target characteristic"
              }
            },
            "required": [
              "parentSpecificationId",
              "name",
              "relationshipType"
            ]
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "CharacteristicSpecificationRelationship": "#/components/schemas/CharacteristicSpecificationRelationship_FVO"
          }
        }
      },
      "CharacteristicSpecificationRelationship_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "description": "An aggregation, migration, substitution, dependency or exclusivity relationship between/among Characteristic specifications. The specification characteristic is embedded within the specification whose ID and href are in this entity, and identified by its ID.",
            "properties": {
              "relationshipType": {
                "type": "string",
                "description": "Type of relationship such as aggregation, migration, substitution, dependency, exclusivity"
              },
              "name": {
                "type": "string",
                "description": "Name of the target characteristic within the specification"
              },
              "characteristicSpecificationId": {
                "type": "string",
                "description": "Unique identifier of the characteristic within the specification"
              },
              "parentSpecificationHref": {
                "type": "string",
                "format": "uri",
                "description": "Hyperlink reference to the parent specification containing the target characteristic"
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "parentSpecificationId": {
                "type": "string",
                "description": "Unique identifier of the parent specification containing the target characteristic"
              }
            },
            "required": [
              "parentSpecificationId",
              "name",
              "relationshipType"
            ]
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "CharacteristicSpecificationRelationship": "#/components/schemas/CharacteristicSpecificationRelationship_MVO"
          }
        }
      },
      "CharacteristicSpecification_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible_FVO"
          },
          {
            "type": "object",
            "description": "This class defines a characteristic specification.",
            "properties": {
              "id": {
                "type": "string",
                "description": "Unique ID for the characteristic"
              },
              "name": {
                "type": "string",
                "description": "A word, term, or phrase by which this characteristic specification is known and distinguished from other characteristic specifications."
              },
              "valueType": {
                "type": "string",
                "description": "A kind of value that the characteristic can take on, such as numeric, text and so forth"
              },
              "description": {
                "type": "string",
                "description": "A narrative that explains the CharacteristicSpecification."
              },
              "configurable": {
                "type": "boolean",
                "description": "If true, the Boolean indicates that the target Characteristic is configurable"
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "minCardinality": {
                "type": "integer",
                "description": "The minimum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where zero is the value for the minCardinality."
              },
              "maxCardinality": {
                "type": "integer",
                "description": "The maximum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where five is the value for the maxCardinality."
              },
              "isUnique": {
                "type": "boolean",
                "description": "Specifies if the value of this characteristic is unique across all entities instantiated from the specification that uses this characteristc. For example, consider a ProductSpecification for a set-top box, with a CharacteristicSpecification cardID. Each set-top box must have a different value for cardID, so this isUnique attribute would be set to true for the characteristic."
              },
              "regex": {
                "type": "string",
                "description": "A rule or principle represented in regular expression used to derive the value of a characteristic value."
              },
              "extensible": {
                "type": "boolean",
                "description": "An indicator that specifies that the values for the characteristic can be extended by adding new values when instantiating a characteristic for a resource."
              },
              "@valueSchemaLocation": {
                "type": "string",
                "description": "This (optional) field provides a link to the schema describing the value type."
              },
              "charSpecRelationship": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CharacteristicSpecificationRelationship_FVO"
                },
                "description": "An aggregation, migration, substitution, dependency or exclusivity relationship between/among Specification Characteristics."
              },
              "characteristicValueSpecification": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CharacteristicValueSpecification_FVO"
                },
                "description": "A CharacteristicValueSpecification object is used to define a set of attributes, each of which can be assigned to a corresponding set of attributes in a CharacteristicSpecification object. The values of the attributes in the CharacteristicValueSpecification object describe the values of the attributes that a corresponding Characteristic object can take on."
              }
            },
            "required": [
              "name",
              "valueType"
            ]
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "CharacteristicSpecification": "#/components/schemas/CharacteristicSpecification_FVO"
          }
        }
      },
      "CharacteristicSpecification_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "description": "This class defines a characteristic specification.",
            "properties": {
              "id": {
                "type": "string",
                "description": "Unique ID for the characteristic"
              },
              "name": {
                "type": "string",
                "description": "A word, term, or phrase by which this characteristic specification is known and distinguished from other characteristic specifications."
              },
              "valueType": {
                "type": "string",
                "description": "A kind of value that the characteristic can take on, such as numeric, text and so forth"
              },
              "description": {
                "type": "string",
                "description": "A narrative that explains the CharacteristicSpecification."
              },
              "configurable": {
                "type": "boolean",
                "description": "If true, the Boolean indicates that the target Characteristic is configurable"
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "minCardinality": {
                "type": "integer",
                "description": "The minimum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where zero is the value for the minCardinality."
              },
              "maxCardinality": {
                "type": "integer",
                "description": "The maximum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where five is the value for the maxCardinality."
              },
              "isUnique": {
                "type": "boolean",
                "description": "Specifies if the value of this characteristic is unique across all entities instantiated from the specification that uses this characteristc. For example, consider a ProductSpecification for a set-top box, with a CharacteristicSpecification cardID. Each set-top box must have a different value for cardID, so this isUnique attribute would be set to true for the characteristic."
              },
              "regex": {
                "type": "string",
                "description": "A rule or principle represented in regular expression used to derive the value of a characteristic value."
              },
              "extensible": {
                "type": "boolean",
                "description": "An indicator that specifies that the values for the characteristic can be extended by adding new values when instantiating a characteristic for a resource."
              },
              "@valueSchemaLocation": {
                "type": "string",
                "description": "This (optional) field provides a link to the schema describing the value type."
              },
              "charSpecRelationship": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CharacteristicSpecificationRelationship_MVO"
                },
                "description": "An aggregation, migration, substitution, dependency or exclusivity relationship between/among Specification Characteristics."
              },
              "characteristicValueSpecification": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CharacteristicValueSpecification_MVO"
                },
                "description": "A CharacteristicValueSpecification object is used to define a set of attributes, each of which can be assigned to a corresponding set of attributes in a CharacteristicSpecification object. The values of the attributes in the CharacteristicValueSpecification object describe the values of the attributes that a corresponding Characteristic object can take on."
              }
            },
            "required": [
              "name",
              "valueType"
            ]
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "CharacteristicSpecification": "#/components/schemas/CharacteristicSpecification_MVO"
          }
        }
      },
      "CharacteristicValueSpecification": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "description": "specification of a value (number or text or an object) that can be assigned to a Characteristic. This is an abstract base class, the actual value is in one of the strongly-typed subclasses",
            "properties": {
              "valueType": {
                "type": "string",
                "description": "A kind of value that the characteristic value can take on, such as numeric, text and so forth"
              },
              "isDefault": {
                "type": "boolean",
                "description": "If true, the Boolean Indicates if the value is the default value for a characteristic"
              },
              "unitOfMeasure": {
                "type": "string",
                "description": "A length, surface, volume, dry measure, liquid measure, money, weight, time, and the like. In general, a determinate quantity or magnitude of the kind designated, taken as a standard of comparison for others of the same kind, in assigning to them numerical values, as 1 foot, 1 yard, 1 mile, 1 square foot."
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "valueFrom": {
                "type": "integer",
                "description": "The low range value that a characteristic can take on"
              },
              "valueTo": {
                "type": "integer",
                "description": "The upper range value that a characteristic can take on"
              },
              "rangeInterval": {
                "type": "string",
                "description": "An indicator that specifies the inclusion or exclusion of the valueFrom and valueTo attributes. If applicable, possible values are \"open\", \"closed\", \"closedBottom\" and \"closedTop\"."
              },
              "regex": {
                "type": "string",
                "description": "A regular expression constraint for given value"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "CharacteristicValueSpecification": "#/components/schemas/CharacteristicValueSpecification",
            "StringCharacteristicValueSpecification": "#/components/schemas/StringCharacteristicValueSpecification",
            "StringArrayCharacteristicValueSpecification": "#/components/schemas/StringArrayCharacteristicValueSpecification",
            "ObjectCharacteristicValueSpecification": "#/components/schemas/ObjectCharacteristicValueSpecification",
            "ObjectArrayCharacteristicValueSpecification": "#/components/schemas/ObjectArrayCharacteristicValueSpecification",
            "NumberCharacteristicValueSpecification": "#/components/schemas/NumberCharacteristicValueSpecification",
            "NumberArrayCharacteristicValueSpecification": "#/components/schemas/NumberArrayCharacteristicValueSpecification",
            "MapCharacteristicValueSpecification": "#/components/schemas/MapCharacteristicValueSpecification",
            "MapArrayCharacteristicValueSpecification": "#/components/schemas/MapArrayCharacteristicValueSpecification",
            "IntegerCharacteristicValueSpecification": "#/components/schemas/IntegerCharacteristicValueSpecification",
            "IntegerArrayCharacteristicValueSpecification": "#/components/schemas/IntegerArrayCharacteristicValueSpecification"
          }
        }
      },
      "CharacteristicValueSpecification_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible_FVO"
          },
          {
            "type": "object",
            "description": "specification of a value (number or text or an object) that can be assigned to a Characteristic. This is an abstract base class, the actual value is in one of the strongly-typed subclasses",
            "properties": {
              "valueType": {
                "type": "string",
                "description": "A kind of value that the characteristic value can take on, such as numeric, text and so forth"
              },
              "isDefault": {
                "type": "boolean",
                "description": "If true, the Boolean Indicates if the value is the default value for a characteristic"
              },
              "unitOfMeasure": {
                "type": "string",
                "description": "A length, surface, volume, dry measure, liquid measure, money, weight, time, and the like. In general, a determinate quantity or magnitude of the kind designated, taken as a standard of comparison for others of the same kind, in assigning to them numerical values, as 1 foot, 1 yard, 1 mile, 1 square foot."
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "valueFrom": {
                "type": "integer",
                "description": "The low range value that a characteristic can take on"
              },
              "valueTo": {
                "type": "integer",
                "description": "The upper range value that a characteristic can take on"
              },
              "rangeInterval": {
                "type": "string",
                "description": "An indicator that specifies the inclusion or exclusion of the valueFrom and valueTo attributes. If applicable, possible values are \"open\", \"closed\", \"closedBottom\" and \"closedTop\"."
              },
              "regex": {
                "type": "string",
                "description": "A regular expression constraint for given value"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "CharacteristicValueSpecification": "#/components/schemas/CharacteristicValueSpecification_FVO",
            "StringCharacteristicValueSpecification": "#/components/schemas/StringCharacteristicValueSpecification_FVO",
            "StringArrayCharacteristicValueSpecification": "#/components/schemas/StringArrayCharacteristicValueSpecification_FVO",
            "ObjectCharacteristicValueSpecification": "#/components/schemas/ObjectCharacteristicValueSpecification_FVO",
            "ObjectArrayCharacteristicValueSpecification": "#/components/schemas/ObjectArrayCharacteristicValueSpecification_FVO",
            "NumberCharacteristicValueSpecification": "#/components/schemas/NumberCharacteristicValueSpecification_FVO",
            "NumberArrayCharacteristicValueSpecification": "#/components/schemas/NumberArrayCharacteristicValueSpecification_FVO",
            "MapCharacteristicValueSpecification": "#/components/schemas/MapCharacteristicValueSpecification_FVO",
            "MapArrayCharacteristicValueSpecification": "#/components/schemas/MapArrayCharacteristicValueSpecification_FVO",
            "IntegerCharacteristicValueSpecification": "#/components/schemas/IntegerCharacteristicValueSpecification_FVO",
            "IntegerArrayCharacteristicValueSpecification": "#/components/schemas/IntegerArrayCharacteristicValueSpecification_FVO"
          }
        }
      },
      "CharacteristicValueSpecification_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "description": "specification of a value (number or text or an object) that can be assigned to a Characteristic. This is an abstract base class, the actual value is in one of the strongly-typed subclasses",
            "properties": {
              "valueType": {
                "type": "string",
                "description": "A kind of value that the characteristic value can take on, such as numeric, text and so forth"
              },
              "isDefault": {
                "type": "boolean",
                "description": "If true, the Boolean Indicates if the value is the default value for a characteristic"
              },
              "unitOfMeasure": {
                "type": "string",
                "description": "A length, surface, volume, dry measure, liquid measure, money, weight, time, and the like. In general, a determinate quantity or magnitude of the kind designated, taken as a standard of comparison for others of the same kind, in assigning to them numerical values, as 1 foot, 1 yard, 1 mile, 1 square foot."
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "valueFrom": {
                "type": "integer",
                "description": "The low range value that a characteristic can take on"
              },
              "valueTo": {
                "type": "integer",
                "description": "The upper range value that a characteristic can take on"
              },
              "rangeInterval": {
                "type": "string",
                "description": "An indicator that specifies the inclusion or exclusion of the valueFrom and valueTo attributes. If applicable, possible values are \"open\", \"closed\", \"closedBottom\" and \"closedTop\"."
              },
              "regex": {
                "type": "string",
                "description": "A regular expression constraint for given value"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "CharacteristicValueSpecification": "#/components/schemas/CharacteristicValueSpecification_MVO",
            "StringCharacteristicValueSpecification": "#/components/schemas/StringCharacteristicValueSpecification_MVO",
            "StringArrayCharacteristicValueSpecification": "#/components/schemas/StringArrayCharacteristicValueSpecification_MVO",
            "ObjectCharacteristicValueSpecification": "#/components/schemas/ObjectCharacteristicValueSpecification_MVO",
            "ObjectArrayCharacteristicValueSpecification": "#/components/schemas/ObjectArrayCharacteristicValueSpecification_MVO",
            "NumberCharacteristicValueSpecification": "#/components/schemas/NumberCharacteristicValueSpecification_MVO",
            "NumberArrayCharacteristicValueSpecification": "#/components/schemas/NumberArrayCharacteristicValueSpecification_MVO",
            "MapCharacteristicValueSpecification": "#/components/schemas/MapCharacteristicValueSpecification_MVO",
            "MapArrayCharacteristicValueSpecification": "#/components/schemas/MapArrayCharacteristicValueSpecification_MVO",
            "IntegerCharacteristicValueSpecification": "#/components/schemas/IntegerCharacteristicValueSpecification_MVO",
            "IntegerArrayCharacteristicValueSpecification": "#/components/schemas/IntegerArrayCharacteristicValueSpecification_MVO"
          }
        }
      },
      "Characteristic_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "description": "Describes a given characteristic of an object or entity through a name/value pair.",
            "properties": {
              "id": {
                "type": "string",
                "description": "Unique identifier of the characteristic"
              },
              "name": {
                "type": "string",
                "description": "Name of the characteristic"
              },
              "valueType": {
                "type": "string",
                "description": "Data type of the value of the characteristic"
              },
              "characteristicRelationship": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CharacteristicRelationship_FVO"
                }
              }
            },
            "required": [
              "name"
            ]
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "Characteristic": "#/components/schemas/Characteristic_FVO"
          }
        }
      },
      "Characteristic_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "description": "Describes a given characteristic of an object or entity through a name/value pair.",
            "properties": {
              "id": {
                "type": "string",
                "description": "Unique identifier of the characteristic"
              },
              "name": {
                "type": "string",
                "description": "Name of the characteristic"
              },
              "valueType": {
                "type": "string",
                "description": "Data type of the value of the characteristic"
              },
              "characteristicRelationship": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CharacteristicRelationship_MVO"
                }
              }
            },
            "required": [
              "name"
            ]
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "Characteristic": "#/components/schemas/Characteristic_MVO"
          }
        }
      },
      "Duration": {
        "type": "object",
        "description": "A time interval in a given unit of time",
        "properties": {
          "amount": {
            "type": "integer",
            "description": "Time interval (number of seconds, minutes, hours, etc.)"
          },
          "units": {
            "type": "string",
            "description": "Unit of time (seconds, minutes, hours, etc.)"
          }
        }
      },
      "Entity": {
        "type": "object",
        "description": "Base entity schema for use in TMForum Open-APIs. Property.",
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "$ref": "#/components/schemas/Addressable"
          }
        ]
      },
      "EntityRef": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "$ref": "#/components/schemas/Addressable"
          },
          {
            "type": "object",
            "description": "Entity reference schema to be use for all entityRef class.",
            "properties": {
              "id": {
                "type": "string",
                "description": "The identifier of the referred entity."
              },
              "href": {
                "type": "string",
                "description": "The URI of the referred entity."
              },
              "name": {
                "type": "string",
                "description": "Name of the referred entity."
              },
              "@referredType": {
                "type": "string",
                "description": "The actual type of the target instance when needed for disambiguation."
              }
            },
            "required": [
              "id"
            ]
          }
        ]
      },
      "EntityRef_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible_FVO"
          },
          {
            "$ref": "#/components/schemas/Addressable_FVO"
          },
          {
            "type": "object",
            "description": "Entity reference schema to be use for all entityRef class.",
            "properties": {
              "id": {
                "type": "string",
                "description": "The identifier of the referred entity."
              },
              "href": {
                "type": "string",
                "description": "The URI of the referred entity."
              },
              "name": {
                "type": "string",
                "description": "Name of the referred entity."
              },
              "@referredType": {
                "type": "string",
                "description": "The actual type of the target instance when needed for disambiguation."
              }
            },
            "required": [
              "id"
            ]
          }
        ]
      },
      "Entity_FVO": {
        "type": "object",
        "description": "Base entity schema for use in TMForum Open-APIs. Property.",
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible_FVO"
          },
          {
            "$ref": "#/components/schemas/Addressable_FVO"
          }
        ]
      },
      "Entity_MVO": {
        "type": "object",
        "description": "Base entity schema for use in TMForum Open-APIs. Property.",
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          }
        ]
      },
      "Event": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "description": "event with common attributes.",
            "properties": {
              "href": {
                "type": "string",
                "description": "Hyperlink reference"
              },
              "id": {
                "type": "string",
                "description": "unique identifier"
              },
              "correlationId": {
                "type": "string",
                "description": "The correlation id for this event."
              },
              "domain": {
                "type": "string",
                "description": "The domain of the event."
              },
              "title": {
                "type": "string",
                "description": "The title of the event."
              },
              "description": {
                "type": "string",
                "description": "An explnatory of the event."
              },
              "priority": {
                "type": "string",
                "description": "A priority."
              },
              "timeOccurred": {
                "type": "string",
                "format": "date-time",
                "description": "The time the event occurred."
              },
              "source": {
                "$ref": "#/components/schemas/EntityRef"
              },
              "reportingSystem": {
                "$ref": "#/components/schemas/EntityRef"
              },
              "relatedParty": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/RelatedPartyRefOrPartyRoleRef"
                }
              },
              "analyticCharacteristic": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/Characteristic"
                }
              },
              "eventId": {
                "type": "string",
                "description": "The identifier of the notification."
              },
              "eventTime": {
                "type": "string",
                "format": "date-time",
                "description": "Time of the event occurrence."
              },
              "eventType": {
                "type": "string",
                "description": "The type of the notification."
              },
              "event": {
                "description": "The event linked to the involved resource object",
                "type": "object"
              }
            }
          }
        ]
      },
      "Event_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "description": "event with common attributes.",
            "properties": {
              "href": {
                "type": "string",
                "description": "Hyperlink reference"
              },
              "id": {
                "type": "string",
                "description": "unique identifier"
              },
              "correlationId": {
                "type": "string",
                "description": "The correlation id for this event."
              },
              "domain": {
                "type": "string",
                "description": "The domain of the event."
              },
              "title": {
                "type": "string",
                "description": "The title of the event."
              },
              "description": {
                "type": "string",
                "description": "An explnatory of the event."
              },
              "priority": {
                "type": "string",
                "description": "A priority."
              },
              "timeOccurred": {
                "type": "string",
                "format": "date-time",
                "description": "The time the event occurred."
              },
              "source": {
                "$ref": "#/components/schemas/EntityRef_FVO"
              },
              "reportingSystem": {
                "$ref": "#/components/schemas/EntityRef_FVO"
              },
              "relatedParty": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/RelatedPartyRefOrPartyRoleRef_FVO"
                }
              },
              "analyticCharacteristic": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/Characteristic_FVO"
                }
              },
              "eventId": {
                "type": "string",
                "description": "The identifier of the notification."
              },
              "eventTime": {
                "type": "string",
                "format": "date-time",
                "description": "Time of the event occurrence."
              },
              "eventType": {
                "type": "string",
                "description": "The type of the notification."
              },
              "event": {
                "description": "The event linked to the involved resource object",
                "type": "object"
              }
            },
            "required": [
              "eventId",
              "eventTime",
              "eventType",
              "event"
            ]
          }
        ]
      },
      "Event_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "description": "event with common attributes.",
            "properties": {
              "href": {
                "type": "string",
                "description": "Hyperlink reference"
              },
              "id": {
                "type": "string",
                "description": "unique identifier"
              },
              "correlationId": {
                "type": "string",
                "description": "The correlation id for this event."
              },
              "domain": {
                "type": "string",
                "description": "The domain of the event."
              },
              "title": {
                "type": "string",
                "description": "The title of the event."
              },
              "description": {
                "type": "string",
                "description": "An explnatory of the event."
              },
              "priority": {
                "type": "string",
                "description": "A priority."
              },
              "timeOccurred": {
                "type": "string",
                "format": "date-time",
                "description": "The time the event occurred."
              },
              "source": {
                "$ref": "#/components/schemas/EntityRef"
              },
              "reportingSystem": {
                "$ref": "#/components/schemas/EntityRef"
              },
              "relatedParty": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/RelatedPartyRefOrPartyRoleRef_MVO"
                }
              },
              "analyticCharacteristic": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/Characteristic_MVO"
                }
              },
              "eventId": {
                "type": "string",
                "description": "The identifier of the notification."
              },
              "eventTime": {
                "type": "string",
                "format": "date-time",
                "description": "Time of the event occurrence."
              },
              "eventType": {
                "type": "string",
                "description": "The type of the notification."
              },
              "event": {
                "description": "The event linked to the involved resource object",
                "type": "object"
              }
            },
            "required": [
              "eventId",
              "eventTime",
              "eventType",
              "event"
            ]
          }
        ]
      },
      "ExportJob": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Entity"
          },
          {
            "type": "object",
            "description": "Represents a task used to export resources to a file",
            "properties": {
              "completionDate": {
                "type": "string",
                "format": "date-time",
                "description": "Data at which the job was completed"
              },
              "contentType": {
                "type": "string",
                "description": "The format of the exported data"
              },
              "creationDate": {
                "type": "string",
                "format": "date-time",
                "description": "Date at which the job was created"
              },
              "errorLog": {
                "type": "string",
                "description": "Path to file or stream where errors encountered during the job processing can be written"
              },
              "path": {
                "type": "string",
                "description": "URL of the root resource acting as the source for streaming content to the file specified by the export job"
              },
              "query": {
                "type": "string",
                "description": "Used to scope the exported data"
              },
              "status": {
                "$ref": "#/components/schemas/JobStateType"
              },
              "url": {
                "type": "string",
                "format": "uri",
                "description": "URL of the file containing the data to be exported"
              },
              "id": {
                "type": "string",
                "description": "unique identifier for export job"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ExportJob": "#/components/schemas/ExportJob"
          }
        }
      },
      "ExportJobCreateEvent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Event"
          },
          {
            "type": "object",
            "description": "ExportJobCreateEvent generic structure",
            "properties": {
              "event": {
                "$ref": "#/components/schemas/ExportJobCreateEventPayload"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ExportJobCreateEvent": "#/components/schemas/ExportJobCreateEvent"
          }
        }
      },
      "ExportJobCreateEventPayload": {
        "type": "object",
        "description": "ExportJobCreateEventPayload generic structure",
        "properties": {
          "exportJob": {
            "$ref": "#/components/schemas/ExportJob"
          }
        }
      },
      "ExportJobStateChangeEvent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Event"
          },
          {
            "type": "object",
            "description": "ExportJobStateChangeEvent generic structure",
            "properties": {
              "event": {
                "$ref": "#/components/schemas/ExportJobStateChangeEventPayload"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ExportJobStateChangeEvent": "#/components/schemas/ExportJobStateChangeEvent"
          }
        }
      },
      "ExportJobStateChangeEventPayload": {
        "type": "object",
        "description": "ExportJobStateChangeEventPayload generic structure",
        "properties": {
          "exportJob": {
            "$ref": "#/components/schemas/ExportJob"
          }
        }
      },
      "ExportJob_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Entity_FVO"
          },
          {
            "type": "object",
            "description": "Represents a task used to export resources to a file",
            "properties": {
              "completionDate": {
                "type": "string",
                "format": "date-time",
                "description": "Data at which the job was completed"
              },
              "contentType": {
                "type": "string",
                "description": "The format of the exported data"
              },
              "creationDate": {
                "type": "string",
                "format": "date-time",
                "description": "Date at which the job was created"
              },
              "errorLog": {
                "type": "string",
                "description": "Path to file or stream where errors encountered during the job processing can be written"
              },
              "path": {
                "type": "string",
                "description": "URL of the root resource acting as the source for streaming content to the file specified by the export job"
              },
              "query": {
                "type": "string",
                "description": "Used to scope the exported data"
              },
              "status": {
                "$ref": "#/components/schemas/JobStateType"
              },
              "url": {
                "type": "string",
                "format": "uri",
                "description": "URL of the file containing the data to be exported"
              },
              "id": {
                "type": "string",
                "description": "unique identifier for export job"
              }
            },
            "required": [
              "url",
              "@type"
            ]
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ExportJob": "#/components/schemas/ExportJob_FVO"
          }
        }
      },
      "ExportJob_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Entity_MVO"
          },
          {
            "type": "object",
            "description": "Represents a task used to export resources to a file",
            "properties": {
              "completionDate": {
                "type": "string",
                "format": "date-time",
                "description": "Data at which the job was completed"
              },
              "contentType": {
                "type": "string",
                "description": "The format of the exported data"
              },
              "creationDate": {
                "type": "string",
                "format": "date-time",
                "description": "Date at which the job was created"
              },
              "errorLog": {
                "type": "string",
                "description": "Path to file or stream where errors encountered during the job processing can be written"
              },
              "path": {
                "type": "string",
                "description": "URL of the root resource acting as the source for streaming content to the file specified by the export job"
              },
              "query": {
                "type": "string",
                "description": "Used to scope the exported data"
              },
              "status": {
                "$ref": "#/components/schemas/JobStateType"
              },
              "url": {
                "type": "string",
                "format": "uri",
                "description": "URL of the file containing the data to be exported"
              },
              "id": {
                "type": "string",
                "description": "unique identifier for export job"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ExportJob": "#/components/schemas/ExportJob_MVO"
          }
        }
      },
      "Extensible": {
        "type": "object",
        "description": "Base Extensible schema for use in TMForum Open-APIs - When used for in a schema it means that the Entity described by the schema  MUST be extended with the @type",
        "properties": {
          "@type": {
            "type": "string",
            "description": "When sub-classing, this defines the sub-class Extensible name"
          },
          "@baseType": {
            "type": "string",
            "description": "When sub-classing, this defines the super-class"
          },
          "@schemaLocation": {
            "type": "string",
            "description": "A URI to a JSON-Schema file that defines additional attributes and relationships"
          }
        },
        "required": [
          "@type"
        ]
      },
      "Extensible_FVO": {
        "type": "object",
        "description": "Base Extensible schema for use in TMForum Open-APIs - When used for in a schema it means that the Entity described by the schema  MUST be extended with the @type",
        "properties": {
          "@type": {
            "type": "string",
            "description": "When sub-classing, this defines the sub-class Extensible name"
          },
          "@baseType": {
            "type": "string",
            "description": "When sub-classing, this defines the super-class"
          },
          "@schemaLocation": {
            "type": "string",
            "description": "A URI to a JSON-Schema file that defines additional attributes and relationships"
          }
        },
        "required": [
          "@type"
        ]
      },
      "ExternalIdentifier": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "description": "An identification of an entity that is owned by or originates in a software system different from the current system, for example a ProductOrder handed off from a commerce platform into an order handling system. The structure identifies the system itself, the nature of the entity within the system (e.g. class name) and the unique ID of the entity within the system. It is anticipated that multiple external IDs can be held for a single entity, e.g. if the entity passed through multiple systems on the way to the current system. In this case the consumer is expected to sequence the IDs in the array in reverse order of provenance, i.e. most recent system first in the list.",
            "properties": {
              "owner": {
                "type": "string",
                "description": "Name of the external system that owns the entity.",
                "example": "MagentoCommerce"
              },
              "externalIdentifierType": {
                "type": "string",
                "description": "Type of the identification, typically would be the type of the entity within the external system",
                "example": "ProductOrder"
              },
              "id": {
                "type": "string",
                "description": "identification of the entity within the external system."
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ExternalIdentifier": "#/components/schemas/ExternalIdentifier"
          }
        }
      },
      "ExternalIdentifier_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible_FVO"
          },
          {
            "type": "object",
            "description": "An identification of an entity that is owned by or originates in a software system different from the current system, for example a ProductOrder handed off from a commerce platform into an order handling system. The structure identifies the system itself, the nature of the entity within the system (e.g. class name) and the unique ID of the entity within the system. It is anticipated that multiple external IDs can be held for a single entity, e.g. if the entity passed through multiple systems on the way to the current system. In this case the consumer is expected to sequence the IDs in the array in reverse order of provenance, i.e. most recent system first in the list.",
            "properties": {
              "owner": {
                "type": "string",
                "description": "Name of the external system that owns the entity.",
                "example": "MagentoCommerce"
              },
              "externalIdentifierType": {
                "type": "string",
                "description": "Type of the identification, typically would be the type of the entity within the external system",
                "example": "ProductOrder"
              },
              "id": {
                "type": "string",
                "description": "identification of the entity within the external system."
              }
            },
            "required": [
              "id"
            ]
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ExternalIdentifier": "#/components/schemas/ExternalIdentifier_FVO"
          }
        }
      },
      "ExternalIdentifier_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "description": "An identification of an entity that is owned by or originates in a software system different from the current system, for example a ProductOrder handed off from a commerce platform into an order handling system. The structure identifies the system itself, the nature of the entity within the system (e.g. class name) and the unique ID of the entity within the system. It is anticipated that multiple external IDs can be held for a single entity, e.g. if the entity passed through multiple systems on the way to the current system. In this case the consumer is expected to sequence the IDs in the array in reverse order of provenance, i.e. most recent system first in the list.",
            "properties": {
              "owner": {
                "type": "string",
                "description": "Name of the external system that owns the entity.",
                "example": "MagentoCommerce"
              },
              "externalIdentifierType": {
                "type": "string",
                "description": "Type of the identification, typically would be the type of the entity within the external system",
                "example": "ProductOrder"
              },
              "id": {
                "type": "string",
                "description": "identification of the entity within the external system."
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ExternalIdentifier": "#/components/schemas/ExternalIdentifier_MVO"
          }
        }
      },
      "FloatArrayCharacteristicValueSpecification": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is a number array of format floating point",
            "properties": {
              "value": {
                "type": "array",
                "items": {
                  "type": "number",
                  "format": "float"
                }
              }
            }
          }
        ]
      },
      "FloatArrayCharacteristicValueSpecification_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification_FVO"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is a number array of format floating point",
            "properties": {
              "value": {
                "type": "array",
                "items": {
                  "type": "number",
                  "format": "float"
                }
              }
            }
          }
        ]
      },
      "FloatArrayCharacteristicValueSpecification_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification_MVO"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is a number array of format floating point",
            "properties": {
              "value": {
                "type": "array",
                "items": {
                  "type": "number",
                  "format": "float"
                }
              }
            }
          }
        ]
      },
      "FloatCharacteristicValueSpecification": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is a floating point number",
            "properties": {
              "value": {
                "type": "number",
                "format": "float",
                "description": "Value of the characteristic"
              }
            }
          }
        ]
      },
      "FloatCharacteristicValueSpecification_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification_FVO"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is a floating point number",
            "properties": {
              "value": {
                "type": "number",
                "format": "float",
                "description": "Value of the characteristic"
              }
            }
          }
        ]
      },
      "FloatCharacteristicValueSpecification_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification_MVO"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is a floating point number",
            "properties": {
              "value": {
                "type": "number",
                "format": "float",
                "description": "Value of the characteristic"
              }
            }
          }
        ]
      },
      "ImportJob": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Entity"
          },
          {
            "type": "object",
            "description": "Represents a task used to import resources from a file",
            "properties": {
              "completionDate": {
                "type": "string",
                "format": "date-time",
                "description": "Date at which the job was completed"
              },
              "contentType": {
                "type": "string",
                "description": "Indicates the format of the imported data"
              },
              "creationDate": {
                "type": "string",
                "format": "date-time",
                "description": "Date at which the job was created"
              },
              "errorLog": {
                "type": "string",
                "description": "Path to file or stream where errors encountered during the job processing can be written"
              },
              "path": {
                "type": "string",
                "description": "URL of the root resource where the content of the file specified by the import job must be applied"
              },
              "status": {
                "$ref": "#/components/schemas/JobStateType"
              },
              "url": {
                "type": "string",
                "format": "uri",
                "description": "URL of the file containing the data to be imported"
              },
              "id": {
                "type": "string",
                "description": "unique identifier for import job"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ImportJob": "#/components/schemas/ImportJob"
          }
        }
      },
      "ImportJobCreateEvent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Event"
          },
          {
            "type": "object",
            "description": "ImportJobCreateEvent generic structure",
            "properties": {
              "event": {
                "$ref": "#/components/schemas/ImportJobCreateEventPayload"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ImportJobCreateEvent": "#/components/schemas/ImportJobCreateEvent"
          }
        }
      },
      "ImportJobCreateEventPayload": {
        "type": "object",
        "description": "ImportJobCreateEventPayload generic structure",
        "properties": {
          "importJob": {
            "$ref": "#/components/schemas/ImportJob"
          }
        }
      },
      "ImportJobStateChangeEvent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Event"
          },
          {
            "type": "object",
            "description": "ImportJobStateChangeEvent generic structure",
            "properties": {
              "event": {
                "$ref": "#/components/schemas/ImportJobStateChangeEventPayload"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ImportJobStateChangeEvent": "#/components/schemas/ImportJobStateChangeEvent"
          }
        }
      },
      "ImportJobStateChangeEventPayload": {
        "type": "object",
        "description": "ImportJobStateChangeEventPayload generic structure",
        "properties": {
          "importJob": {
            "$ref": "#/components/schemas/ImportJob"
          }
        }
      },
      "ImportJob_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Entity_FVO"
          },
          {
            "type": "object",
            "description": "Represents a task used to import resources from a file",
            "properties": {
              "completionDate": {
                "type": "string",
                "format": "date-time",
                "description": "Date at which the job was completed"
              },
              "contentType": {
                "type": "string",
                "description": "Indicates the format of the imported data"
              },
              "creationDate": {
                "type": "string",
                "format": "date-time",
                "description": "Date at which the job was created"
              },
              "errorLog": {
                "type": "string",
                "description": "Path to file or stream where errors encountered during the job processing can be written"
              },
              "path": {
                "type": "string",
                "description": "URL of the root resource where the content of the file specified by the import job must be applied"
              },
              "status": {
                "$ref": "#/components/schemas/JobStateType"
              },
              "url": {
                "type": "string",
                "format": "uri",
                "description": "URL of the file containing the data to be imported"
              },
              "id": {
                "type": "string",
                "description": "unique identifier for import job"
              }
            },
            "required": [
              "url"
            ]
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ImportJob": "#/components/schemas/ImportJob_FVO"
          }
        }
      },
      "ImportJob_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Entity_MVO"
          },
          {
            "type": "object",
            "description": "Represents a task used to import resources from a file",
            "properties": {
              "completionDate": {
                "type": "string",
                "format": "date-time",
                "description": "Date at which the job was completed"
              },
              "contentType": {
                "type": "string",
                "description": "Indicates the format of the imported data"
              },
              "creationDate": {
                "type": "string",
                "format": "date-time",
                "description": "Date at which the job was created"
              },
              "errorLog": {
                "type": "string",
                "description": "Path to file or stream where errors encountered during the job processing can be written"
              },
              "path": {
                "type": "string",
                "description": "URL of the root resource where the content of the file specified by the import job must be applied"
              },
              "status": {
                "$ref": "#/components/schemas/JobStateType"
              },
              "url": {
                "type": "string",
                "format": "uri",
                "description": "URL of the file containing the data to be imported"
              },
              "id": {
                "type": "string",
                "description": "unique identifier for import job"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ImportJob": "#/components/schemas/ImportJob_MVO"
          }
        }
      },
      "IntegerArrayCharacteristicValueSpecification": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is a number array of format integer",
            "properties": {
              "value": {
                "type": "array",
                "items": {
                  "type": "integer"
                }
              }
            }
          }
        ]
      },
      "IntegerArrayCharacteristicValueSpecification_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification_FVO"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is a number array of format integer",
            "properties": {
              "value": {
                "type": "array",
                "items": {
                  "type": "integer"
                }
              }
            }
          }
        ]
      },
      "IntegerArrayCharacteristicValueSpecification_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification_MVO"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is a number array of format integer",
            "properties": {
              "value": {
                "type": "array",
                "items": {
                  "type": "integer"
                }
              }
            }
          }
        ]
      },
      "IntegerCharacteristicValueSpecification": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is an integer number",
            "properties": {
              "value": {
                "type": "integer",
                "description": "Value of the characteristic"
              }
            }
          }
        ]
      },
      "IntegerCharacteristicValueSpecification_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification_FVO"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is an integer number",
            "properties": {
              "value": {
                "type": "integer",
                "description": "Value of the characteristic"
              }
            }
          }
        ]
      },
      "IntegerCharacteristicValueSpecification_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification_MVO"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is an integer number",
            "properties": {
              "value": {
                "type": "integer",
                "description": "Value of the characteristic"
              }
            }
          }
        ]
      },
      "IntentSpecificationRef": {
        "type": "object",
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef"
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "IntentSpecificationRef": "#/components/schemas/IntentSpecificationRef"
          }
        }
      },
      "IntentSpecificationRef_FVO": {
        "type": "object",
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef_FVO"
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "IntentSpecificationRef": "#/components/schemas/IntentSpecificationRef_FVO"
          }
        }
      },
      "IntentSpecificationRef_MVO": {
        "type": "object",
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef"
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "IntentSpecificationRef": "#/components/schemas/IntentSpecificationRef_MVO"
          }
        }
      },
      "JobStateType": {
        "enum": [
          "Not Started",
          "Running",
          "Succeeded",
          "Failed"
        ],
        "type": "string",
        "description": "Valid values for the state of a batch job (e.g. catalog import)"
      },
      "MapArrayCharacteristicValueSpecification": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is an array of mapped objects",
            "properties": {
              "value": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "value": {
                      "type": "object",
                      "additionalProperties": {
                        "type": "object"
                      }
                    }
                  }
                }
              }
            }
          }
        ]
      },
      "MapArrayCharacteristicValueSpecification_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification_FVO"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is an array of mapped objects",
            "properties": {
              "value": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "value": {
                      "type": "object",
                      "additionalProperties": {
                        "type": "object"
                      }
                    }
                  }
                }
              }
            }
          }
        ]
      },
      "MapArrayCharacteristicValueSpecification_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification_MVO"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is an array of mapped objects",
            "properties": {
              "value": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "value": {
                      "type": "object",
                      "additionalProperties": {
                        "type": "object"
                      }
                    }
                  }
                }
              }
            }
          }
        ]
      },
      "MapCharacteristicValueSpecification": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is a mapped object",
            "properties": {
              "value": {
                "type": "object",
                "additionalProperties": {
                  "type": "object"
                },
                "description": "Value of the characteristic"
              }
            }
          }
        ]
      },
      "MapCharacteristicValueSpecification_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification_FVO"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is a mapped object",
            "properties": {
              "value": {
                "type": "object",
                "additionalProperties": {
                  "type": "object"
                },
                "description": "Value of the characteristic"
              }
            }
          }
        ]
      },
      "MapCharacteristicValueSpecification_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification_MVO"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is a mapped object",
            "properties": {
              "value": {
                "type": "object",
                "additionalProperties": {
                  "type": "object"
                },
                "description": "Value of the characteristic"
              }
            }
          }
        ]
      },
      "MarketSegmentRef": {
        "type": "object",
        "description": "provides references to the corresponding market segment as target of product offerings. A market segment is grouping of Parties, GeographicAreas, SalesChannels, and so forth.",
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "$ref": "#/components/schemas/EntityRef"
          },
          {
            "$ref": "#/components/schemas/Entity"
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "MarketSegmentRef": "#/components/schemas/MarketSegmentRef"
          }
        }
      },
      "MarketSegmentRef_FVO": {
        "type": "object",
        "description": "provides references to the corresponding market segment as target of product offerings. A market segment is grouping of Parties, GeographicAreas, SalesChannels, and so forth.",
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible_FVO"
          },
          {
            "$ref": "#/components/schemas/EntityRef_FVO"
          },
          {
            "$ref": "#/components/schemas/Entity_FVO"
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "MarketSegmentRef": "#/components/schemas/MarketSegmentRef_FVO"
          }
        }
      },
      "MarketSegmentRef_MVO": {
        "type": "object",
        "description": "provides references to the corresponding market segment as target of product offerings. A market segment is grouping of Parties, GeographicAreas, SalesChannels, and so forth.",
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "$ref": "#/components/schemas/EntityRef"
          },
          {
            "$ref": "#/components/schemas/Entity_MVO"
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "MarketSegmentRef": "#/components/schemas/MarketSegmentRef_MVO"
          }
        }
      },
      "Money": {
        "type": "object",
        "description": "A base / value business entity used to represent money",
        "properties": {
          "unit": {
            "type": "string",
            "description": "Currency (ISO4217 norm uses 3 letters to define the currency)"
          },
          "value": {
            "type": "number",
            "format": "float",
            "description": "A signed floating point number, the meaning of the sign is according to the context of the API that uses this Data type"
          }
        }
      },
      "NumberArrayCharacteristicValueSpecification": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is a number array with no specific format ",
            "properties": {
              "value": {
                "type": "array",
                "items": {
                  "type": "number"
                }
              }
            }
          }
        ]
      },
      "NumberArrayCharacteristicValueSpecification_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification_FVO"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is a number array with no specific format ",
            "properties": {
              "value": {
                "type": "array",
                "items": {
                  "type": "number"
                }
              }
            }
          }
        ]
      },
      "NumberArrayCharacteristicValueSpecification_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification_MVO"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is a number array with no specific format ",
            "properties": {
              "value": {
                "type": "array",
                "items": {
                  "type": "number"
                }
              }
            }
          }
        ]
      },
      "NumberCharacteristicValueSpecification": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is a number of no specific format",
            "properties": {
              "value": {
                "type": "number",
                "description": "Value of the characteristic"
              }
            }
          }
        ]
      },
      "NumberCharacteristicValueSpecification_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification_FVO"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is a number of no specific format",
            "properties": {
              "value": {
                "type": "number",
                "description": "Value of the characteristic"
              }
            }
          }
        ]
      },
      "NumberCharacteristicValueSpecification_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification_MVO"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is a number of no specific format",
            "properties": {
              "value": {
                "type": "number",
                "description": "Value of the characteristic"
              }
            }
          }
        ]
      },
      "ObjectArrayCharacteristicValueSpecification": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is an array of objects",
            "properties": {
              "value": {
                "type": "array",
                "items": {
                  "type": "object"
                }
              }
            }
          }
        ]
      },
      "ObjectArrayCharacteristicValueSpecification_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification_FVO"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is an array of objects",
            "properties": {
              "value": {
                "type": "array",
                "items": {
                  "type": "object"
                }
              }
            }
          }
        ]
      },
      "ObjectArrayCharacteristicValueSpecification_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification_MVO"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is an array of objects",
            "properties": {
              "value": {
                "type": "array",
                "items": {
                  "type": "object"
                }
              }
            }
          }
        ]
      },
      "ObjectCharacteristicValueSpecification": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is any object",
            "properties": {
              "value": {
                "type": "object",
                "description": "Value of the characteristic"
              }
            }
          }
        ]
      },
      "ObjectCharacteristicValueSpecification_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification_FVO"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is any object",
            "properties": {
              "value": {
                "type": "object",
                "description": "Value of the characteristic"
              }
            }
          }
        ]
      },
      "ObjectCharacteristicValueSpecification_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification_MVO"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is any object",
            "properties": {
              "value": {
                "type": "object",
                "description": "Value of the characteristic"
              }
            }
          }
        ]
      },
      "PartyRef": {
        "type": "object",
        "description": "A Party reference",
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef"
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "PartyRef": "#/components/schemas/PartyRef"
          }
        }
      },
      "PartyRefOrPartyRoleRef": {
        "type": "object",
        "description": "",
        "oneOf": [
          {
            "$ref": "#/components/schemas/PartyRef"
          },
          {
            "$ref": "#/components/schemas/PartyRoleRef"
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "PartyRef": "#/components/schemas/PartyRef",
            "PartyRoleRef": "#/components/schemas/PartyRoleRef"
          }
        }
      },
      "PartyRefOrPartyRoleRef_FVO": {
        "type": "object",
        "description": "",
        "oneOf": [
          {
            "$ref": "#/components/schemas/PartyRef_FVO"
          },
          {
            "$ref": "#/components/schemas/PartyRoleRef_FVO"
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "PartyRef": "#/components/schemas/PartyRef_FVO",
            "PartyRoleRef": "#/components/schemas/PartyRoleRef_FVO"
          }
        }
      },
      "PartyRefOrPartyRoleRef_MVO": {
        "type": "object",
        "description": "",
        "oneOf": [
          {
            "$ref": "#/components/schemas/PartyRef_MVO"
          },
          {
            "$ref": "#/components/schemas/PartyRoleRef_MVO"
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "PartyRef": "#/components/schemas/PartyRef_MVO",
            "PartyRoleRef": "#/components/schemas/PartyRoleRef_MVO"
          }
        }
      },
      "PartyRef_FVO": {
        "type": "object",
        "description": "A Party reference",
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef_FVO"
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "PartyRef": "#/components/schemas/PartyRef_FVO"
          }
        }
      },
      "PartyRef_MVO": {
        "type": "object",
        "description": "A Party reference",
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef"
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "PartyRef": "#/components/schemas/PartyRef_MVO"
          }
        }
      },
      "PartyRoleRef": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef"
          },
          {
            "type": "object",
            "description": "Party role reference. A party role represents the part played by a party in a given context.",
            "properties": {
              "partyId": {
                "type": "string",
                "description": "The identifier of the engaged party that is linked to the PartyRole object."
              },
              "partyName": {
                "type": "string",
                "description": "The name of the engaged party that is linked to the PartyRole object."
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "PartyRoleRef": "#/components/schemas/PartyRoleRef"
          }
        }
      },
      "PartyRoleRef_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef_FVO"
          },
          {
            "type": "object",
            "description": "Party role reference. A party role represents the part played by a party in a given context.",
            "properties": {
              "partyId": {
                "type": "string",
                "description": "The identifier of the engaged party that is linked to the PartyRole object."
              },
              "partyName": {
                "type": "string",
                "description": "The name of the engaged party that is linked to the PartyRole object."
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "PartyRoleRef": "#/components/schemas/PartyRoleRef_FVO"
          }
        }
      },
      "PartyRoleRef_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef"
          },
          {
            "type": "object",
            "description": "Party role reference. A party role represents the part played by a party in a given context.",
            "properties": {
              "partyId": {
                "type": "string",
                "description": "The identifier of the engaged party that is linked to the PartyRole object."
              },
              "partyName": {
                "type": "string",
                "description": "The name of the engaged party that is linked to the PartyRole object."
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "PartyRoleRef": "#/components/schemas/PartyRoleRef_MVO"
          }
        }
      },
      "PlaceRef": {
        "type": "object",
        "description": "Place reference.",
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "$ref": "#/components/schemas/EntityRef"
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "PlaceRef": "#/components/schemas/PlaceRef"
          }
        }
      },
      "PlaceRef_FVO": {
        "type": "object",
        "description": "Place reference.",
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible_FVO"
          },
          {
            "$ref": "#/components/schemas/EntityRef_FVO"
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "PlaceRef": "#/components/schemas/PlaceRef_FVO"
          }
        }
      },
      "PlaceRef_MVO": {
        "type": "object",
        "description": "Place reference.",
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "$ref": "#/components/schemas/EntityRef"
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "PlaceRef": "#/components/schemas/PlaceRef_MVO"
          }
        }
      },
      "PolicyRef": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef"
          },
          {
            "type": "object",
            "description": "Reference to managed Policy object",
            "properties": {
              "id": {
                "type": "string",
                "description": "unique identifier"
              },
              "href": {
                "type": "string",
                "description": "Hyperlink reference"
              },
              "version": {
                "type": "string"
              },
              "@type": {
                "type": "string",
                "description": "When sub-classing, this defines the sub-class Extensible name"
              },
              "@baseType": {
                "type": "string",
                "description": "When sub-classing, this defines the super-class"
              },
              "@schemaLocation": {
                "type": "string",
                "description": "A URI to a JSON-Schema file that defines additional attributes and relationships"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "PolicyRef": "#/components/schemas/PolicyRef"
          }
        }
      },
      "PolicyRef_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef_FVO"
          },
          {
            "type": "object",
            "description": "Reference to managed Policy object",
            "properties": {
              "id": {
                "type": "string",
                "description": "unique identifier"
              },
              "href": {
                "type": "string",
                "description": "Hyperlink reference"
              },
              "version": {
                "type": "string"
              },
              "@type": {
                "type": "string",
                "description": "When sub-classing, this defines the sub-class Extensible name"
              },
              "@baseType": {
                "type": "string",
                "description": "When sub-classing, this defines the super-class"
              },
              "@schemaLocation": {
                "type": "string",
                "description": "A URI to a JSON-Schema file that defines additional attributes and relationships"
              }
            },
            "required": [
              "id"
            ]
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "PolicyRef": "#/components/schemas/PolicyRef_FVO"
          }
        }
      },
      "PolicyRef_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef"
          },
          {
            "type": "object",
            "description": "Reference to managed Policy object",
            "properties": {
              "id": {
                "type": "string",
                "description": "unique identifier"
              },
              "href": {
                "type": "string",
                "description": "Hyperlink reference"
              },
              "version": {
                "type": "string"
              },
              "@type": {
                "type": "string",
                "description": "When sub-classing, this defines the sub-class Extensible name"
              },
              "@baseType": {
                "type": "string",
                "description": "When sub-classing, this defines the super-class"
              },
              "@schemaLocation": {
                "type": "string",
                "description": "A URI to a JSON-Schema file that defines additional attributes and relationships"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "PolicyRef": "#/components/schemas/PolicyRef_MVO"
          }
        }
      },
      "PricingLogicAlgorithm": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Entity"
          },
          {
            "type": "object",
            "description": "The PricingLogicAlgorithm entity represents an instantiation of an interface specification to external rating function (without a modeled bahavior in SID). Some of the parameters of the interface definiition may be already set (such as price per unit) and some may be gathered during the rating process from the event (such as call duration) or from ProductCharacteristicValues (such as assigned bandwidth)",
            "properties": {
              "description": {
                "type": "string",
                "description": "Description of the PricingLogicAlgorithm"
              },
              "name": {
                "type": "string",
                "description": "Name given to the PricingLogicAlgorithm"
              },
              "plaSpecId": {
                "type": "string",
                "description": "id of corresponding PricingLogicAlgorithm specification"
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "PricingLogicAlgorithm": "#/components/schemas/PricingLogicAlgorithm"
          }
        }
      },
      "PricingLogicAlgorithm_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Entity_FVO"
          },
          {
            "type": "object",
            "description": "The PricingLogicAlgorithm entity represents an instantiation of an interface specification to external rating function (without a modeled bahavior in SID). Some of the parameters of the interface definiition may be already set (such as price per unit) and some may be gathered during the rating process from the event (such as call duration) or from ProductCharacteristicValues (such as assigned bandwidth)",
            "properties": {
              "description": {
                "type": "string",
                "description": "Description of the PricingLogicAlgorithm"
              },
              "name": {
                "type": "string",
                "description": "Name given to the PricingLogicAlgorithm"
              },
              "plaSpecId": {
                "type": "string",
                "description": "id of corresponding PricingLogicAlgorithm specification"
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "PricingLogicAlgorithm": "#/components/schemas/PricingLogicAlgorithm_FVO"
          }
        }
      },
      "PricingLogicAlgorithm_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Entity_MVO"
          },
          {
            "type": "object",
            "description": "The PricingLogicAlgorithm entity represents an instantiation of an interface specification to external rating function (without a modeled bahavior in SID). Some of the parameters of the interface definiition may be already set (such as price per unit) and some may be gathered during the rating process from the event (such as call duration) or from ProductCharacteristicValues (such as assigned bandwidth)",
            "properties": {
              "description": {
                "type": "string",
                "description": "Description of the PricingLogicAlgorithm"
              },
              "name": {
                "type": "string",
                "description": "Name given to the PricingLogicAlgorithm"
              },
              "plaSpecId": {
                "type": "string",
                "description": "id of corresponding PricingLogicAlgorithm specification"
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "PricingLogicAlgorithm": "#/components/schemas/PricingLogicAlgorithm_MVO"
          }
        }
      },
      "ProductCatalog": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Catalog"
          },
          {
            "type": "object",
            "description": "A collection of Product Offerings, intended for a specific DistributionChannel, enhanced with additional information such as SLA parameters, invoicing and shipping details",
            "properties": {
              "category": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CategoryRef"
                },
                "description": "List of root categories contained in this catalog"
              }
            }
          }
        ]
      },
      "ProductCatalogAttributeValueChangeEvent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Event"
          },
          {
            "type": "object",
            "description": "ProductCatalogAttributeValueChangeEvent generic structure",
            "properties": {
              "event": {
                "$ref": "#/components/schemas/ProductCatalogAttributeValueChangeEventPayload"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductCatalogAttributeValueChangeEvent": "#/components/schemas/ProductCatalogAttributeValueChangeEvent"
          }
        }
      },
      "ProductCatalogAttributeValueChangeEventPayload": {
        "type": "object",
        "description": "ProductCatalogAttributeValueChangeEventPayload generic structure",
        "properties": {
          "productCatalog": {
            "$ref": "#/components/schemas/ProductCatalog"
          }
        }
      },
      "ProductCatalogCreateEvent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Event"
          },
          {
            "type": "object",
            "description": "ProductCatalogCreateEvent generic structure",
            "properties": {
              "event": {
                "$ref": "#/components/schemas/ProductCatalogCreateEventPayload"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductCatalogCreateEvent": "#/components/schemas/ProductCatalogCreateEvent"
          }
        }
      },
      "ProductCatalogCreateEventPayload": {
        "type": "object",
        "description": "ProductCatalogCreateEventPayload generic structure",
        "properties": {
          "productCatalog": {
            "$ref": "#/components/schemas/ProductCatalog"
          }
        }
      },
      "ProductCatalogDeleteEvent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Event"
          },
          {
            "type": "object",
            "description": "ProductCatalogDeleteEvent generic structure",
            "properties": {
              "event": {
                "$ref": "#/components/schemas/ProductCatalogDeleteEventPayload"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductCatalogDeleteEvent": "#/components/schemas/ProductCatalogDeleteEvent"
          }
        }
      },
      "ProductCatalogDeleteEventPayload": {
        "type": "object",
        "description": "ProductCatalogDeleteEventPayload generic structure",
        "properties": {
          "productCatalog": {
            "$ref": "#/components/schemas/ProductCatalog"
          }
        }
      },
      "ProductCatalogStateChangeEvent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Event"
          },
          {
            "type": "object",
            "description": "ProductCatalogStateChangeEvent generic structure",
            "properties": {
              "event": {
                "$ref": "#/components/schemas/ProductCatalogStateChangeEventPayload"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductCatalogStateChangeEvent": "#/components/schemas/ProductCatalogStateChangeEvent"
          }
        }
      },
      "ProductCatalogStateChangeEventPayload": {
        "type": "object",
        "description": "ProductCatalogStateChangeEventPayload generic structure",
        "properties": {
          "productCatalog": {
            "$ref": "#/components/schemas/ProductCatalog"
          }
        }
      },
      "ProductCatalog_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Catalog_FVO"
          },
          {
            "type": "object",
            "description": "A collection of Product Offerings, intended for a specific DistributionChannel, enhanced with additional information such as SLA parameters, invoicing and shipping details",
            "properties": {
              "category": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CategoryRef_FVO"
                },
                "description": "List of root categories contained in this catalog"
              }
            },
            "required": [
              "name",
              "@type"
            ]
          }
        ]
      },
      "ProductCatalog_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Catalog_MVO"
          },
          {
            "type": "object",
            "description": "A collection of Product Offerings, intended for a specific DistributionChannel, enhanced with additional information such as SLA parameters, invoicing and shipping details",
            "properties": {
              "category": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CategoryRef_MVO"
                },
                "description": "List of root categories contained in this catalog"
              }
            }
          }
        ]
      },
      "ProductOffering": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Entity"
          },
          {
            "type": "object",
            "description": "Represents entities that are orderable from the provider of the catalog, this resource includes pricing information.",
            "properties": {
              "description": {
                "type": "string",
                "description": "Description of the productOffering"
              },
              "isBundle": {
                "type": "boolean",
                "description": "isBundle determines whether a productOffering represents a single productOffering (false), or a bundle of productOfferings (true)."
              },
              "isSellable": {
                "type": "boolean",
                "description": "A flag indicating if this product offer can be sold stand-alone for sale or not. If this flag is false it indicates that the offer can only be sold within a bundle."
              },
              "statusReason": {
                "type": "string",
                "description": "A string providing a complementary information on the value of the lifecycle status attribute."
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "version": {
                "type": "string",
                "description": "ProductOffering version"
              },
              "place": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/PlaceRef"
                },
                "description": "Place defines the places where the products are sold or delivered."
              },
              "serviceLevelAgreement": {
                "$ref": "#/components/schemas/SLARef"
              },
              "channel": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ChannelRef"
                },
                "description": "The channel defines the channel for selling product offerings."
              },
              "serviceCandidate": {
                "$ref": "#/components/schemas/ServiceCandidateRef"
              },
              "category": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CategoryRef"
                },
                "description": "The category resource is used to group product offerings, service and resource candidates in logical containers. Categories can contain other categories and/or product offerings, resource or service candidates."
              },
              "resourceCandidate": {
                "$ref": "#/components/schemas/ResourceCandidateRef"
              },
              "productOfferingTerm": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ProductOfferingTerm"
                },
                "description": "A condition under which a ProductOffering is made available to Customers. For instance, a productOffering can be offered with multiple commitment periods."
              },
              "productOfferingPrice": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ProductOfferingPriceRefOrValue"
                },
                "description": "An amount, usually of money, that is asked for or allowed when a ProductOffering is bought, rented, or leased. The price is valid for a defined period of time and may not represent the actual price paid by a customer."
              },
              "agreement": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/AgreementRef"
                },
                "description": "An agreement represents a contract or arrangement, either written or verbal and sometimes enforceable by law, such as a service level agreement or a customer price agreement. An agreement involves a number of other business entities, such as products, services, and resources and/or their specifications."
              },
              "bundledProductOffering": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/BundledProductOffering"
                },
                "description": "A type of ProductOffering that belongs to a grouping of ProductOfferings made available to the market. It inherits of all attributes of ProductOffering."
              },
              "bundledGroupProductOffering": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/BundledGroupProductOffering"
                },
                "description": "A group of ProductOfferings that can be selected for instantiation, e.g. between 2 and 7 from a list of 15 channel packs."
              },
              "attachment": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/AttachmentRefOrValue"
                },
                "description": "Complements the description of an element (for instance a product) through video, pictures..."
              },
              "marketSegment": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/MarketSegmentRef"
                },
                "description": "provides references to the corresponding market segment as target of product offerings. A market segment is grouping of Parties, GeographicAreas, SalesChannels, and so forth."
              },
              "productOfferingRelationship": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ProductOfferingRelationship"
                },
                "description": "A relationship between this product offering and other product offerings."
              },
              "productOfferingCharacteristic": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CharacteristicSpecification"
                },
                "description": "A characteristic quality or distinctive feature of a ProductOffering. The characteristic can take on a discrete value fixed at design (catalog authoring) time, such as Mobile Plan Rank, and is not generally modifiable at inventory level."
              },
              "prodSpecCharValueUse": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ProductSpecificationCharacteristicValueUse"
                },
                "description": "A use of the ProductSpecificationCharacteristicValue by a ProductOffering to which additional properties (attributes) apply or override the properties of similar properties contained in ProductSpecificationCharacteristicValue. It should be noted that characteristics which their value(s) addressed by this object must exist in corresponding product specification. The available characteristic values for a ProductSpecificationCharacteristic in a Product specification can be modified at the ProductOffering level. For example, a characteristic 'Color' might have values White, Blue, Green, and Red. But, the list of values can be restricted to e.g. White and Blue in an associated product offering. It should be noted that the list of values in 'ProductSpecificationCharacteristicValueUse' is a strict subset of the list of values as defined in the corresponding product specification characteristics."
              },
              "policy": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/PolicyRef"
                },
                "description": "The Policy resource represents a policy/rule applied to ProductOffering."
              },
              "allowedAction": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/AllowedProductAction"
                },
                "description": "List of actions that can be executed (in context of a product order) on products instantiated from this offering"
              },
              "lastUpdate": {
                "type": "string",
                "format": "date-time",
                "description": "Date and time of the last update"
              },
              "lifecycleStatus": {
                "type": "string",
                "description": "Used to indicate the current lifecycle status"
              },
              "name": {
                "type": "string",
                "description": "Name of the productOffering"
              },
              "productSpecification": {
                "$ref": "#/components/schemas/ProductSpecificationRef"
              },
              "externalIdentifier": {
                "type": "array",
                "description": "List of external identifieers for the offering, e.g. identifier in source catalog",
                "items": {
                  "$ref": "#/components/schemas/ExternalIdentifier"
                }
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductOffering": "#/components/schemas/ProductOffering"
          }
        }
      },
      "ProductOfferingAttributeValueChangeEvent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Event"
          },
          {
            "type": "object",
            "description": "ProductOfferingAttributeValueChangeEvent generic structure",
            "properties": {
              "event": {
                "$ref": "#/components/schemas/ProductOfferingAttributeValueChangeEventPayload"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductOfferingAttributeValueChangeEvent": "#/components/schemas/ProductOfferingAttributeValueChangeEvent"
          }
        }
      },
      "ProductOfferingAttributeValueChangeEventPayload": {
        "type": "object",
        "description": "ProductOfferingAttributeValueChangeEventPayload generic structure",
        "properties": {
          "productOffering": {
            "$ref": "#/components/schemas/ProductOffering"
          }
        }
      },
      "ProductOfferingCreateEvent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Event"
          },
          {
            "type": "object",
            "description": "ProductOfferingCreateEvent generic structure",
            "properties": {
              "event": {
                "$ref": "#/components/schemas/ProductOfferingCreateEventPayload"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductOfferingCreateEvent": "#/components/schemas/ProductOfferingCreateEvent"
          }
        }
      },
      "ProductOfferingCreateEventPayload": {
        "type": "object",
        "description": "ProductOfferingCreateEventPayload generic structure",
        "properties": {
          "productOffering": {
            "$ref": "#/components/schemas/ProductOffering"
          }
        }
      },
      "ProductOfferingDeleteEvent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Event"
          },
          {
            "type": "object",
            "description": "ProductOfferingDeleteEvent generic structure",
            "properties": {
              "event": {
                "$ref": "#/components/schemas/ProductOfferingDeleteEventPayload"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductOfferingDeleteEvent": "#/components/schemas/ProductOfferingDeleteEvent"
          }
        }
      },
      "ProductOfferingDeleteEventPayload": {
        "type": "object",
        "description": "ProductOfferingDeleteEventPayload generic structure",
        "properties": {
          "productOffering": {
            "$ref": "#/components/schemas/ProductOffering"
          }
        }
      },
      "ProductOfferingPrice": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Entity"
          },
          {
            "type": "object",
            "description": "Is based on both the basic cost to develop and produce products and the enterprises policy on revenue targets. This price may be further revised through discounting (a Product Offering Price that reflects an alteration). The price, applied for a productOffering may also be influenced by the productOfferingTerm, the customer selected, eg: a productOffering can be offered with multiple terms, like commitment periods for the contract. The price may be influenced by this productOfferingTerm. A productOffering may be cheaper with a 24 month commitment than with a 12 month commitment.",
            "properties": {
              "description": {
                "type": "string",
                "description": "Description of the productOfferingPrice"
              },
              "version": {
                "type": "string",
                "description": "ProductOfferingPrice version"
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "unitOfMeasure": {
                "$ref": "#/components/schemas/Quantity"
              },
              "recurringChargePeriodType": {
                "type": "string",
                "description": "The period to repeat the application of the price\nCould be month, week..."
              },
              "recurringChargePeriodLength": {
                "type": "integer",
                "description": "the period of the recurring charge:  1, 2, ... .It sets to zero if it is not applicable"
              },
              "isBundle": {
                "type": "boolean",
                "description": "A flag indicating if this ProductOfferingPrice is composite (bundle) or not"
              },
              "price": {
                "$ref": "#/components/schemas/Money"
              },
              "percentage": {
                "type": "number",
                "format": "float",
                "description": "Percentage to apply if this Product Offering Price is an Alteration (such as a Discount)"
              },
              "bundledPopRelationship": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/BundledProductOfferingPriceRelationship"
                },
                "description": "this object represents a bundle relationship from a bundle product offering price (parent) to a simple product offering price (child). A simple product offering price may participate in more than one bundle relationship."
              },
              "popRelationship": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ProductOfferingPriceRelationship"
                },
                "description": "Product Offering Prices related to this Product Offering Price, for example a price alteration such as allowance or discount"
              },
              "prodSpecCharValueUse": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ProductSpecificationCharacteristicValueUse"
                },
                "description": "A use of the ProductSpecificationCharacteristicValue by a ProductOfferingPrice to which additional properties (attributes) apply or override the properties of similar properties contained in ProductSpecificationCharacteristicValue. It should be noted that characteristics which their value(s) addressed by this object must exist in corresponding product specification. The available characteristic values for a ProductSpecificationCharacteristic in a Product specification can be modified at the ProductOffering and ProcuctOfferingPrice level. The list of values in ProductSpecificationCharacteristicValueUse is a strict subset of the list of values as defined in the corresponding product specification characteristics."
              },
              "productOfferingTerm": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ProductOfferingTerm"
                },
                "description": "A list of conditions under which a ProductOfferingPrice is made available to Customers. For instance, a Product Offering Price can be offered with multiple commitment periods."
              },
              "place": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/PlaceRef"
                },
                "description": "Place defines the places where the products are sold or delivered."
              },
              "policy": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/PolicyRef"
                },
                "description": "The Policy resource represents a policy/rule applied to ProductOfferingPrice."
              },
              "pricingLogicAlgorithm": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/PricingLogicAlgorithm"
                },
                "description": "The PricingLogicAlgorithm entity represents an instantiation of an interface specification to external rating function (without a modeled behavior in SID). Some of the parameters of the interface definition may be already set (such as price per unit) and some may be gathered during the rating process from the event (such as call duration) or from ProductCharacteristicValues (such as assigned bandwidth)."
              },
              "tax": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/TaxItem"
                },
                "description": "An amount of money levied on the price of a Product by a legislative body."
              },
              "name": {
                "type": "string",
                "description": "Name of the productOfferingPrice"
              },
              "priceType": {
                "type": "string",
                "description": "A category that describes the price, such as recurring, discount, allowance, penalty, and so forth."
              },
              "lastUpdate": {
                "type": "string",
                "format": "date-time",
                "description": "the last update time of this ProductOfferingPrice"
              },
              "lifecycleStatus": {
                "type": "string",
                "description": "the lifecycle status of this ProductOfferingPrice"
              },
              "externalIdentifier": {
                "type": "array",
                "description": "List of external identifieers for the offering price, e.g. identifier in source catalog",
                "items": {
                  "$ref": "#/components/schemas/ExternalIdentifier"
                }
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductOfferingPrice": "#/components/schemas/ProductOfferingPrice"
          }
        }
      },
      "ProductOfferingPriceAttributeValueChangeEvent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Event"
          },
          {
            "type": "object",
            "description": "ProductOfferingPriceAttributeValueChangeEvent generic structure",
            "properties": {
              "event": {
                "$ref": "#/components/schemas/ProductOfferingPriceAttributeValueChangeEventPayload"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductOfferingPriceAttributeValueChangeEvent": "#/components/schemas/ProductOfferingPriceAttributeValueChangeEvent"
          }
        }
      },
      "ProductOfferingPriceAttributeValueChangeEventPayload": {
        "type": "object",
        "description": "ProductOfferingPriceAttributeValueChangeEventPayload generic structure",
        "properties": {
          "productOfferingPrice": {
            "$ref": "#/components/schemas/ProductOfferingPrice"
          }
        }
      },
      "ProductOfferingPriceCreateEvent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Event"
          },
          {
            "type": "object",
            "description": "ProductOfferingPriceCreateEvent generic structure",
            "properties": {
              "event": {
                "$ref": "#/components/schemas/ProductOfferingPriceCreateEventPayload"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductOfferingPriceCreateEvent": "#/components/schemas/ProductOfferingPriceCreateEvent"
          }
        }
      },
      "ProductOfferingPriceCreateEventPayload": {
        "type": "object",
        "description": "ProductOfferingPriceCreateEventPayload generic structure",
        "properties": {
          "productOfferingPrice": {
            "$ref": "#/components/schemas/ProductOfferingPrice"
          }
        }
      },
      "ProductOfferingPriceDeleteEvent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Event"
          },
          {
            "type": "object",
            "description": "ProductOfferingPriceDeleteEvent generic structure",
            "properties": {
              "event": {
                "$ref": "#/components/schemas/ProductOfferingPriceDeleteEventPayload"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductOfferingPriceDeleteEvent": "#/components/schemas/ProductOfferingPriceDeleteEvent"
          }
        }
      },
      "ProductOfferingPriceDeleteEventPayload": {
        "type": "object",
        "description": "ProductOfferingPriceDeleteEventPayload generic structure",
        "properties": {
          "productOfferingPrice": {
            "$ref": "#/components/schemas/ProductOfferingPrice"
          }
        }
      },
      "ProductOfferingPriceRef": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef"
          },
          {
            "type": "object",
            "description": "ProductPriceOffering reference. An amount, usually of money, that is asked for or allowed when a ProductOffering is bought, rented, or leased",
            "properties": {
              "version": {
                "type": "string",
                "description": "Version of the product offering price"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductOfferingPriceRef": "#/components/schemas/ProductOfferingPriceRef"
          }
        }
      },
      "ProductOfferingPriceRefOrValue": {
        "type": "object",
        "description": "The polymorphic attributes @type, @schemaLocation & @referredType are related to the ProductOfferingPrice entity and not the ProductOfferingPriceRefOrValue class itself",
        "oneOf": [
          {
            "$ref": "#/components/schemas/ProductOfferingPrice"
          },
          {
            "$ref": "#/components/schemas/ProductOfferingPriceRef"
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductOfferingPrice": "#/components/schemas/ProductOfferingPrice",
            "ProductOfferingPriceRef": "#/components/schemas/ProductOfferingPriceRef"
          }
        }
      },
      "ProductOfferingPriceRefOrValue_FVO": {
        "type": "object",
        "description": "The polymorphic attributes @type, @schemaLocation & @referredType are related to the ProductOfferingPrice entity and not the ProductOfferingPriceRefOrValue class itself",
        "oneOf": [
          {
            "$ref": "#/components/schemas/ProductOfferingPrice_FVO"
          },
          {
            "$ref": "#/components/schemas/ProductOfferingPriceRef_FVO"
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductOfferingPrice": "#/components/schemas/ProductOfferingPrice_FVO",
            "ProductOfferingPriceRef": "#/components/schemas/ProductOfferingPriceRef_FVO"
          }
        }
      },
      "ProductOfferingPriceRefOrValue_MVO": {
        "type": "object",
        "description": "The polymorphic attributes @type, @schemaLocation & @referredType are related to the ProductOfferingPrice entity and not the ProductOfferingPriceRefOrValue class itself",
        "oneOf": [
          {
            "$ref": "#/components/schemas/ProductOfferingPrice_MVO"
          },
          {
            "$ref": "#/components/schemas/ProductOfferingPriceRef_MVO"
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductOfferingPrice": "#/components/schemas/ProductOfferingPrice_MVO",
            "ProductOfferingPriceRef": "#/components/schemas/ProductOfferingPriceRef_MVO"
          }
        }
      },
      "ProductOfferingPriceRef_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef_FVO"
          },
          {
            "type": "object",
            "description": "ProductPriceOffering reference. An amount, usually of money, that is asked for or allowed when a ProductOffering is bought, rented, or leased",
            "properties": {
              "version": {
                "type": "string",
                "description": "Version of the product offering price"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductOfferingPriceRef": "#/components/schemas/ProductOfferingPriceRef_FVO"
          }
        }
      },
      "ProductOfferingPriceRef_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef"
          },
          {
            "type": "object",
            "description": "ProductPriceOffering reference. An amount, usually of money, that is asked for or allowed when a ProductOffering is bought, rented, or leased",
            "properties": {
              "version": {
                "type": "string",
                "description": "Version of the product offering price"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductOfferingPriceRef": "#/components/schemas/ProductOfferingPriceRef_MVO"
          }
        }
      },
      "ProductOfferingPriceRelationship": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef"
          },
          {
            "type": "object",
            "description": "Describes a non-composite relationship between product offering prices. For example one price might be an discount alteration for another price.",
            "properties": {
              "role": {
                "type": "string",
                "description": "The association role for the source product offering price"
              },
              "relationshipType": {
                "type": "string",
                "description": "type of the relationship, for example override, discount, etc."
              },
              "version": {
                "type": "string",
                "description": "Version of the referred product offering price."
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductOfferingPriceRelationship": "#/components/schemas/ProductOfferingPriceRelationship"
          }
        }
      },
      "ProductOfferingPriceRelationship_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef_FVO"
          },
          {
            "type": "object",
            "description": "Describes a non-composite relationship between product offering prices. For example one price might be an discount alteration for another price.",
            "properties": {
              "role": {
                "type": "string",
                "description": "The association role for the source product offering price"
              },
              "relationshipType": {
                "type": "string",
                "description": "type of the relationship, for example override, discount, etc."
              },
              "version": {
                "type": "string",
                "description": "Version of the referred product offering price."
              }
            },
            "required": [
              "id",
              "relationshipType"
            ]
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductOfferingPriceRelationship": "#/components/schemas/ProductOfferingPriceRelationship_FVO"
          }
        }
      },
      "ProductOfferingPriceRelationship_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef"
          },
          {
            "type": "object",
            "description": "Describes a non-composite relationship between product offering prices. For example one price might be an discount alteration for another price.",
            "properties": {
              "role": {
                "type": "string",
                "description": "The association role for the source product offering price"
              },
              "relationshipType": {
                "type": "string",
                "description": "type of the relationship, for example override, discount, etc."
              },
              "version": {
                "type": "string",
                "description": "Version of the referred product offering price."
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductOfferingPriceRelationship": "#/components/schemas/ProductOfferingPriceRelationship_MVO"
          }
        }
      },
      "ProductOfferingPriceStateChangeEvent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Event"
          },
          {
            "type": "object",
            "description": "ProductOfferingPriceStateChangeEvent generic structure",
            "properties": {
              "event": {
                "$ref": "#/components/schemas/ProductOfferingPriceStateChangeEventPayload"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductOfferingPriceStateChangeEvent": "#/components/schemas/ProductOfferingPriceStateChangeEvent"
          }
        }
      },
      "ProductOfferingPriceStateChangeEventPayload": {
        "type": "object",
        "description": "ProductOfferingPriceStateChangeEventPayload generic structure",
        "properties": {
          "productOfferingPrice": {
            "$ref": "#/components/schemas/ProductOfferingPrice"
          }
        }
      },
      "ProductOfferingPrice_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Entity_FVO"
          },
          {
            "type": "object",
            "description": "Is based on both the basic cost to develop and produce products and the enterprises policy on revenue targets. This price may be further revised through discounting (a Product Offering Price that reflects an alteration). The price, applied for a productOffering may also be influenced by the productOfferingTerm, the customer selected, eg: a productOffering can be offered with multiple terms, like commitment periods for the contract. The price may be influenced by this productOfferingTerm. A productOffering may be cheaper with a 24 month commitment than with a 12 month commitment.",
            "properties": {
              "description": {
                "type": "string",
                "description": "Description of the productOfferingPrice"
              },
              "version": {
                "type": "string",
                "description": "ProductOfferingPrice version"
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "unitOfMeasure": {
                "$ref": "#/components/schemas/Quantity"
              },
              "recurringChargePeriodType": {
                "type": "string",
                "description": "The period to repeat the application of the price\nCould be month, week..."
              },
              "recurringChargePeriodLength": {
                "type": "integer",
                "description": "the period of the recurring charge:  1, 2, ... .It sets to zero if it is not applicable"
              },
              "isBundle": {
                "type": "boolean",
                "description": "A flag indicating if this ProductOfferingPrice is composite (bundle) or not"
              },
              "price": {
                "$ref": "#/components/schemas/Money"
              },
              "percentage": {
                "type": "number",
                "format": "float",
                "description": "Percentage to apply if this Product Offering Price is an Alteration (such as a Discount)"
              },
              "bundledPopRelationship": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/BundledProductOfferingPriceRelationship_FVO"
                },
                "description": "this object represents a bundle relationship from a bundle product offering price (parent) to a simple product offering price (child). A simple product offering price may participate in more than one bundle relationship."
              },
              "popRelationship": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ProductOfferingPriceRelationship_FVO"
                },
                "description": "Product Offering Prices related to this Product Offering Price, for example a price alteration such as allowance or discount"
              },
              "prodSpecCharValueUse": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ProductSpecificationCharacteristicValueUse_FVO"
                },
                "description": "A use of the ProductSpecificationCharacteristicValue by a ProductOfferingPrice to which additional properties (attributes) apply or override the properties of similar properties contained in ProductSpecificationCharacteristicValue. It should be noted that characteristics which their value(s) addressed by this object must exist in corresponding product specification. The available characteristic values for a ProductSpecificationCharacteristic in a Product specification can be modified at the ProductOffering and ProcuctOfferingPrice level. The list of values in ProductSpecificationCharacteristicValueUse is a strict subset of the list of values as defined in the corresponding product specification characteristics."
              },
              "productOfferingTerm": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ProductOfferingTerm_FVO"
                },
                "description": "A list of conditions under which a ProductOfferingPrice is made available to Customers. For instance, a Product Offering Price can be offered with multiple commitment periods."
              },
              "place": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/PlaceRef_FVO"
                },
                "description": "Place defines the places where the products are sold or delivered."
              },
              "policy": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/PolicyRef_FVO"
                },
                "description": "The Policy resource represents a policy/rule applied to ProductOfferingPrice."
              },
              "pricingLogicAlgorithm": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/PricingLogicAlgorithm_FVO"
                },
                "description": "The PricingLogicAlgorithm entity represents an instantiation of an interface specification to external rating function (without a modeled behavior in SID). Some of the parameters of the interface definition may be already set (such as price per unit) and some may be gathered during the rating process from the event (such as call duration) or from ProductCharacteristicValues (such as assigned bandwidth)."
              },
              "tax": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/TaxItem_FVO"
                },
                "description": "An amount of money levied on the price of a Product by a legislative body."
              },
              "name": {
                "type": "string",
                "description": "Name of the productOfferingPrice"
              },
              "priceType": {
                "type": "string",
                "description": "A category that describes the price, such as recurring, discount, allowance, penalty, and so forth."
              },
              "lastUpdate": {
                "type": "string",
                "format": "date-time",
                "description": "the last update time of this ProductOfferingPrice"
              },
              "lifecycleStatus": {
                "type": "string",
                "description": "the lifecycle status of this ProductOfferingPrice"
              },
              "externalIdentifier": {
                "type": "array",
                "description": "List of external identifieers for the offering price, e.g. identifier in source catalog",
                "items": {
                  "$ref": "#/components/schemas/ExternalIdentifier_FVO"
                }
              }
            },
            "required": [
              "name",
              "priceType",
              "lastUpdate",
              "lifecycleStatus",
              "@type"
            ]
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductOfferingPrice": "#/components/schemas/ProductOfferingPrice_FVO"
          }
        }
      },
      "ProductOfferingPrice_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Entity_MVO"
          },
          {
            "type": "object",
            "description": "Is based on both the basic cost to develop and produce products and the enterprises policy on revenue targets. This price may be further revised through discounting (a Product Offering Price that reflects an alteration). The price, applied for a productOffering may also be influenced by the productOfferingTerm, the customer selected, eg: a productOffering can be offered with multiple terms, like commitment periods for the contract. The price may be influenced by this productOfferingTerm. A productOffering may be cheaper with a 24 month commitment than with a 12 month commitment.",
            "properties": {
              "description": {
                "type": "string",
                "description": "Description of the productOfferingPrice"
              },
              "version": {
                "type": "string",
                "description": "ProductOfferingPrice version"
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "unitOfMeasure": {
                "$ref": "#/components/schemas/Quantity"
              },
              "recurringChargePeriodType": {
                "type": "string",
                "description": "The period to repeat the application of the price\nCould be month, week..."
              },
              "recurringChargePeriodLength": {
                "type": "integer",
                "description": "the period of the recurring charge:  1, 2, ... .It sets to zero if it is not applicable"
              },
              "isBundle": {
                "type": "boolean",
                "description": "A flag indicating if this ProductOfferingPrice is composite (bundle) or not"
              },
              "price": {
                "$ref": "#/components/schemas/Money"
              },
              "percentage": {
                "type": "number",
                "format": "float",
                "description": "Percentage to apply if this Product Offering Price is an Alteration (such as a Discount)"
              },
              "bundledPopRelationship": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/BundledProductOfferingPriceRelationship_MVO"
                },
                "description": "this object represents a bundle relationship from a bundle product offering price (parent) to a simple product offering price (child). A simple product offering price may participate in more than one bundle relationship."
              },
              "popRelationship": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ProductOfferingPriceRelationship_MVO"
                },
                "description": "Product Offering Prices related to this Product Offering Price, for example a price alteration such as allowance or discount"
              },
              "prodSpecCharValueUse": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ProductSpecificationCharacteristicValueUse_MVO"
                },
                "description": "A use of the ProductSpecificationCharacteristicValue by a ProductOfferingPrice to which additional properties (attributes) apply or override the properties of similar properties contained in ProductSpecificationCharacteristicValue. It should be noted that characteristics which their value(s) addressed by this object must exist in corresponding product specification. The available characteristic values for a ProductSpecificationCharacteristic in a Product specification can be modified at the ProductOffering and ProcuctOfferingPrice level. The list of values in ProductSpecificationCharacteristicValueUse is a strict subset of the list of values as defined in the corresponding product specification characteristics."
              },
              "productOfferingTerm": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ProductOfferingTerm_MVO"
                },
                "description": "A list of conditions under which a ProductOfferingPrice is made available to Customers. For instance, a Product Offering Price can be offered with multiple commitment periods."
              },
              "place": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/PlaceRef_MVO"
                },
                "description": "Place defines the places where the products are sold or delivered."
              },
              "policy": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/PolicyRef_MVO"
                },
                "description": "The Policy resource represents a policy/rule applied to ProductOfferingPrice."
              },
              "pricingLogicAlgorithm": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/PricingLogicAlgorithm_MVO"
                },
                "description": "The PricingLogicAlgorithm entity represents an instantiation of an interface specification to external rating function (without a modeled behavior in SID). Some of the parameters of the interface definition may be already set (such as price per unit) and some may be gathered during the rating process from the event (such as call duration) or from ProductCharacteristicValues (such as assigned bandwidth)."
              },
              "tax": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/TaxItem_MVO"
                },
                "description": "An amount of money levied on the price of a Product by a legislative body."
              },
              "name": {
                "type": "string",
                "description": "Name of the productOfferingPrice"
              },
              "priceType": {
                "type": "string",
                "description": "A category that describes the price, such as recurring, discount, allowance, penalty, and so forth."
              },
              "lifecycleStatus": {
                "type": "string",
                "description": "the lifecycle status of this ProductOfferingPrice"
              },
              "externalIdentifier": {
                "type": "array",
                "description": "List of external identifieers for the offering price, e.g. identifier in source catalog",
                "items": {
                  "$ref": "#/components/schemas/ExternalIdentifier_MVO"
                }
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductOfferingPrice": "#/components/schemas/ProductOfferingPrice_MVO"
          }
        }
      },
      "ProductOfferingRef": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef"
          },
          {
            "type": "object",
            "description": "ProductOffering reference. A product offering represents entities that are orderable from the provider of the catalog, this resource includes pricing information.",
            "properties": {
              "version": {
                "type": "string",
                "description": "Version of the product offering"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductOfferingRef": "#/components/schemas/ProductOfferingRef",
            "BundledProductOffering": "#/components/schemas/BundledProductOffering"
          }
        }
      },
      "ProductOfferingRef_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef_FVO"
          },
          {
            "type": "object",
            "description": "ProductOffering reference. A product offering represents entities that are orderable from the provider of the catalog, this resource includes pricing information.",
            "properties": {
              "version": {
                "type": "string",
                "description": "Version of the product offering"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductOfferingRef": "#/components/schemas/ProductOfferingRef_FVO",
            "BundledProductOffering": "#/components/schemas/BundledProductOffering_FVO"
          }
        }
      },
      "ProductOfferingRef_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef"
          },
          {
            "type": "object",
            "description": "ProductOffering reference. A product offering represents entities that are orderable from the provider of the catalog, this resource includes pricing information.",
            "properties": {
              "version": {
                "type": "string",
                "description": "Version of the product offering"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductOfferingRef": "#/components/schemas/ProductOfferingRef_MVO",
            "BundledProductOffering": "#/components/schemas/BundledProductOffering_MVO"
          }
        }
      },
      "ProductOfferingRelationship": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef"
          },
          {
            "type": "object",
            "description": "A relationship between two product Offerings.",
            "properties": {
              "role": {
                "type": "string",
                "description": "The association role for the source product offering"
              },
              "name": {
                "type": "string",
                "description": "Name of the referred product offering type."
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "relationshipType": {
                "type": "string",
                "description": "Type of relationship between product offerings such as requires, exchangableTo, optionalFor"
              },
              "version": {
                "type": "string",
                "description": "Version of the referred product offering."
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductOfferingRelationship": "#/components/schemas/ProductOfferingRelationship"
          }
        }
      },
      "ProductOfferingRelationship_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef_FVO"
          },
          {
            "type": "object",
            "description": "A relationship between two product Offerings.",
            "properties": {
              "role": {
                "type": "string",
                "description": "The association role for the source product offering"
              },
              "name": {
                "type": "string",
                "description": "Name of the referred product offering type."
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "relationshipType": {
                "type": "string",
                "description": "Type of relationship between product offerings such as requires, exchangableTo, optionalFor"
              },
              "version": {
                "type": "string",
                "description": "Version of the referred product offering."
              }
            },
            "required": [
              "id",
              "relationshipType"
            ]
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductOfferingRelationship": "#/components/schemas/ProductOfferingRelationship_FVO"
          }
        }
      },
      "ProductOfferingRelationship_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef"
          },
          {
            "type": "object",
            "description": "A relationship between two product Offerings.",
            "properties": {
              "role": {
                "type": "string",
                "description": "The association role for the source product offering"
              },
              "name": {
                "type": "string",
                "description": "Name of the referred product offering type."
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "relationshipType": {
                "type": "string",
                "description": "Type of relationship between product offerings such as requires, exchangableTo, optionalFor"
              },
              "version": {
                "type": "string",
                "description": "Version of the referred product offering."
              }
            },
            "required": [
              "id",
              "relationshipType"
            ]
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductOfferingRelationship": "#/components/schemas/ProductOfferingRelationship_MVO"
          }
        }
      },
      "ProductOfferingStateChangeEvent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Event"
          },
          {
            "type": "object",
            "description": "ProductOfferingStateChangeEvent generic structure",
            "properties": {
              "event": {
                "$ref": "#/components/schemas/ProductOfferingStateChangeEventPayload"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductOfferingStateChangeEvent": "#/components/schemas/ProductOfferingStateChangeEvent"
          }
        }
      },
      "ProductOfferingStateChangeEventPayload": {
        "type": "object",
        "description": "ProductOfferingStateChangeEventPayload generic structure",
        "properties": {
          "productOffering": {
            "$ref": "#/components/schemas/ProductOffering"
          }
        }
      },
      "ProductOfferingTerm": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "description": "A condition under which a ProductOffering is made available to Customers. For instance, a productOffering can be offered with multiple commitment periods.",
            "properties": {
              "description": {
                "type": "string",
                "description": "Description of the productOfferingTerm"
              },
              "duration": {
                "$ref": "#/components/schemas/Duration"
              },
              "name": {
                "type": "string",
                "description": "Name of the productOfferingTerm"
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductOfferingTerm": "#/components/schemas/ProductOfferingTerm"
          }
        }
      },
      "ProductOfferingTerm_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible_FVO"
          },
          {
            "type": "object",
            "description": "A condition under which a ProductOffering is made available to Customers. For instance, a productOffering can be offered with multiple commitment periods.",
            "properties": {
              "description": {
                "type": "string",
                "description": "Description of the productOfferingTerm"
              },
              "duration": {
                "$ref": "#/components/schemas/Duration"
              },
              "name": {
                "type": "string",
                "description": "Name of the productOfferingTerm"
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              }
            },
            "required": [
              "name"
            ]
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductOfferingTerm": "#/components/schemas/ProductOfferingTerm_FVO"
          }
        }
      },
      "ProductOfferingTerm_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "description": "A condition under which a ProductOffering is made available to Customers. For instance, a productOffering can be offered with multiple commitment periods.",
            "properties": {
              "description": {
                "type": "string",
                "description": "Description of the productOfferingTerm"
              },
              "duration": {
                "$ref": "#/components/schemas/Duration"
              },
              "name": {
                "type": "string",
                "description": "Name of the productOfferingTerm"
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductOfferingTerm": "#/components/schemas/ProductOfferingTerm_MVO"
          }
        }
      },
      "ProductOffering_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Entity_FVO"
          },
          {
            "type": "object",
            "description": "Represents entities that are orderable from the provider of the catalog, this resource includes pricing information.",
            "properties": {
              "description": {
                "type": "string",
                "description": "Description of the productOffering"
              },
              "isBundle": {
                "type": "boolean",
                "description": "isBundle determines whether a productOffering represents a single productOffering (false), or a bundle of productOfferings (true)."
              },
              "isSellable": {
                "type": "boolean",
                "description": "A flag indicating if this product offer can be sold stand-alone for sale or not. If this flag is false it indicates that the offer can only be sold within a bundle."
              },
              "statusReason": {
                "type": "string",
                "description": "A string providing a complementary information on the value of the lifecycle status attribute."
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "version": {
                "type": "string",
                "description": "ProductOffering version"
              },
              "place": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/PlaceRef_FVO"
                },
                "description": "Place defines the places where the products are sold or delivered."
              },
              "serviceLevelAgreement": {
                "$ref": "#/components/schemas/SLARef_FVO"
              },
              "channel": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ChannelRef_FVO"
                },
                "description": "The channel defines the channel for selling product offerings."
              },
              "serviceCandidate": {
                "$ref": "#/components/schemas/ServiceCandidateRef_FVO"
              },
              "category": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CategoryRef_FVO"
                },
                "description": "The category resource is used to group product offerings, service and resource candidates in logical containers. Categories can contain other categories and/or product offerings, resource or service candidates."
              },
              "resourceCandidate": {
                "$ref": "#/components/schemas/ResourceCandidateRef_FVO"
              },
              "productOfferingTerm": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ProductOfferingTerm_FVO"
                },
                "description": "A condition under which a ProductOffering is made available to Customers. For instance, a productOffering can be offered with multiple commitment periods."
              },
              "productOfferingPrice": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ProductOfferingPriceRefOrValue_FVO"
                },
                "description": "An amount, usually of money, that is asked for or allowed when a ProductOffering is bought, rented, or leased. The price is valid for a defined period of time and may not represent the actual price paid by a customer."
              },
              "agreement": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/AgreementRef_FVO"
                },
                "description": "An agreement represents a contract or arrangement, either written or verbal and sometimes enforceable by law, such as a service level agreement or a customer price agreement. An agreement involves a number of other business entities, such as products, services, and resources and/or their specifications."
              },
              "bundledProductOffering": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/BundledProductOffering_FVO"
                },
                "description": "A type of ProductOffering that belongs to a grouping of ProductOfferings made available to the market. It inherits of all attributes of ProductOffering."
              },
              "bundledGroupProductOffering": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/BundledGroupProductOffering_FVO"
                },
                "description": "A group of ProductOfferings that can be selected for instantiation, e.g. between 2 and 7 from a list of 15 channel packs."
              },
              "attachment": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/AttachmentRefOrValue_FVO"
                },
                "description": "Complements the description of an element (for instance a product) through video, pictures..."
              },
              "marketSegment": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/MarketSegmentRef_FVO"
                },
                "description": "provides references to the corresponding market segment as target of product offerings. A market segment is grouping of Parties, GeographicAreas, SalesChannels, and so forth."
              },
              "productOfferingRelationship": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ProductOfferingRelationship_FVO"
                },
                "description": "A relationship between this product offering and other product offerings."
              },
              "productOfferingCharacteristic": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CharacteristicSpecification_FVO"
                },
                "description": "A characteristic quality or distinctive feature of a ProductOffering. The characteristic can take on a discrete value fixed at design (catalog authoring) time, such as Mobile Plan Rank, and is not generally modifiable at inventory level."
              },
              "prodSpecCharValueUse": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ProductSpecificationCharacteristicValueUse_FVO"
                },
                "description": "A use of the ProductSpecificationCharacteristicValue by a ProductOffering to which additional properties (attributes) apply or override the properties of similar properties contained in ProductSpecificationCharacteristicValue. It should be noted that characteristics which their value(s) addressed by this object must exist in corresponding product specification. The available characteristic values for a ProductSpecificationCharacteristic in a Product specification can be modified at the ProductOffering level. For example, a characteristic 'Color' might have values White, Blue, Green, and Red. But, the list of values can be restricted to e.g. White and Blue in an associated product offering. It should be noted that the list of values in 'ProductSpecificationCharacteristicValueUse' is a strict subset of the list of values as defined in the corresponding product specification characteristics."
              },
              "policy": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/PolicyRef_FVO"
                },
                "description": "The Policy resource represents a policy/rule applied to ProductOffering."
              },
              "allowedAction": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/AllowedProductAction_FVO"
                },
                "description": "List of actions that can be executed (in context of a product order) on products instantiated from this offering"
              },
              "lastUpdate": {
                "type": "string",
                "format": "date-time",
                "description": "Date and time of the last update"
              },
              "lifecycleStatus": {
                "type": "string",
                "description": "Used to indicate the current lifecycle status"
              },
              "name": {
                "type": "string",
                "description": "Name of the productOffering"
              },
              "productSpecification": {
                "$ref": "#/components/schemas/ProductSpecificationRef_FVO"
              },
              "externalIdentifier": {
                "type": "array",
                "description": "List of external identifieers for the offering, e.g. identifier in source catalog",
                "items": {
                  "$ref": "#/components/schemas/ExternalIdentifier_FVO"
                }
              }
            },
            "required": [
              "lastUpdate",
              "lifecycleStatus",
              "name",
              "@type"
            ]
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductOffering": "#/components/schemas/ProductOffering_FVO"
          }
        }
      },
      "ProductOffering_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Entity_MVO"
          },
          {
            "type": "object",
            "description": "Represents entities that are orderable from the provider of the catalog, this resource includes pricing information.",
            "properties": {
              "description": {
                "type": "string",
                "description": "Description of the productOffering"
              },
              "isBundle": {
                "type": "boolean",
                "description": "isBundle determines whether a productOffering represents a single productOffering (false), or a bundle of productOfferings (true)."
              },
              "isSellable": {
                "type": "boolean",
                "description": "A flag indicating if this product offer can be sold stand-alone for sale or not. If this flag is false it indicates that the offer can only be sold within a bundle."
              },
              "statusReason": {
                "type": "string",
                "description": "A string providing a complementary information on the value of the lifecycle status attribute."
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "version": {
                "type": "string",
                "description": "ProductOffering version"
              },
              "place": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/PlaceRef_MVO"
                },
                "description": "Place defines the places where the products are sold or delivered."
              },
              "serviceLevelAgreement": {
                "$ref": "#/components/schemas/SLARef_MVO"
              },
              "channel": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ChannelRef_MVO"
                },
                "description": "The channel defines the channel for selling product offerings."
              },
              "serviceCandidate": {
                "$ref": "#/components/schemas/ServiceCandidateRef_MVO"
              },
              "category": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CategoryRef_MVO"
                },
                "description": "The category resource is used to group product offerings, service and resource candidates in logical containers. Categories can contain other categories and/or product offerings, resource or service candidates."
              },
              "resourceCandidate": {
                "$ref": "#/components/schemas/ResourceCandidateRef_MVO"
              },
              "productOfferingTerm": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ProductOfferingTerm_MVO"
                },
                "description": "A condition under which a ProductOffering is made available to Customers. For instance, a productOffering can be offered with multiple commitment periods."
              },
              "productOfferingPrice": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ProductOfferingPriceRefOrValue_MVO"
                },
                "description": "An amount, usually of money, that is asked for or allowed when a ProductOffering is bought, rented, or leased. The price is valid for a defined period of time and may not represent the actual price paid by a customer."
              },
              "agreement": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/AgreementRef_MVO"
                },
                "description": "An agreement represents a contract or arrangement, either written or verbal and sometimes enforceable by law, such as a service level agreement or a customer price agreement. An agreement involves a number of other business entities, such as products, services, and resources and/or their specifications."
              },
              "bundledProductOffering": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/BundledProductOffering_MVO"
                },
                "description": "A type of ProductOffering that belongs to a grouping of ProductOfferings made available to the market. It inherits of all attributes of ProductOffering."
              },
              "bundledGroupProductOffering": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/BundledGroupProductOffering_MVO"
                },
                "description": "A group of ProductOfferings that can be selected for instantiation, e.g. between 2 and 7 from a list of 15 channel packs."
              },
              "attachment": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/AttachmentRefOrValue_MVO"
                },
                "description": "Complements the description of an element (for instance a product) through video, pictures..."
              },
              "marketSegment": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/MarketSegmentRef_MVO"
                },
                "description": "provides references to the corresponding market segment as target of product offerings. A market segment is grouping of Parties, GeographicAreas, SalesChannels, and so forth."
              },
              "productOfferingRelationship": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ProductOfferingRelationship_MVO"
                },
                "description": "A relationship between this product offering and other product offerings."
              },
              "productOfferingCharacteristic": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CharacteristicSpecification_MVO"
                },
                "description": "A characteristic quality or distinctive feature of a ProductOffering. The characteristic can take on a discrete value fixed at design (catalog authoring) time, such as Mobile Plan Rank, and is not generally modifiable at inventory level."
              },
              "prodSpecCharValueUse": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ProductSpecificationCharacteristicValueUse_MVO"
                },
                "description": "A use of the ProductSpecificationCharacteristicValue by a ProductOffering to which additional properties (attributes) apply or override the properties of similar properties contained in ProductSpecificationCharacteristicValue. It should be noted that characteristics which their value(s) addressed by this object must exist in corresponding product specification. The available characteristic values for a ProductSpecificationCharacteristic in a Product specification can be modified at the ProductOffering level. For example, a characteristic 'Color' might have values White, Blue, Green, and Red. But, the list of values can be restricted to e.g. White and Blue in an associated product offering. It should be noted that the list of values in 'ProductSpecificationCharacteristicValueUse' is a strict subset of the list of values as defined in the corresponding product specification characteristics."
              },
              "policy": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/PolicyRef_MVO"
                },
                "description": "The Policy resource represents a policy/rule applied to ProductOffering."
              },
              "allowedAction": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/AllowedProductAction_MVO"
                },
                "description": "List of actions that can be executed (in context of a product order) on products instantiated from this offering"
              },
              "lifecycleStatus": {
                "type": "string",
                "description": "Used to indicate the current lifecycle status"
              },
              "name": {
                "type": "string",
                "description": "Name of the productOffering"
              },
              "productSpecification": {
                "$ref": "#/components/schemas/ProductSpecificationRef_MVO"
              },
              "externalIdentifier": {
                "type": "array",
                "description": "List of external identifieers for the offering, e.g. identifier in source catalog",
                "items": {
                  "$ref": "#/components/schemas/ExternalIdentifier_MVO"
                }
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductOffering": "#/components/schemas/ProductOffering_MVO"
          }
        }
      },
      "ProductSpecification": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Entity"
          },
          {
            "type": "object",
            "description": "Is a detailed description of a tangible or intangible object made available externally in the form of a ProductOffering to customers or other parties playing a party role.",
            "properties": {
              "brand": {
                "type": "string",
                "description": "The manufacturer or trademark of the specification"
              },
              "description": {
                "type": "string",
                "description": "A narrative that explains in detail what the product specification is"
              },
              "isBundle": {
                "type": "boolean",
                "description": "isBundle determines whether a productSpecification represents a single productSpecification (false), or a bundle of productSpecification (true)."
              },
              "productNumber": {
                "type": "string",
                "description": "An identification number assigned to uniquely identity the specification"
              },
              "category": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CategoryRef"
                },
                "description": "The category resource is used to group product specifications in logical containers. Categories can contain other categories and/or other catalog entries."
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "version": {
                "type": "string",
                "description": "Product specification version"
              },
              "relatedParty": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/RelatedPartyRefOrPartyRoleRef"
                },
                "description": "A related party defines party or party role linked to a specific entity."
              },
              "productSpecCharacteristic": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CharacteristicSpecification"
                },
                "description": "A characteristic quality or distinctive feature of a ProductSpecification.  The characteristic can be take on a discrete value, such as color, can take on a range of values, (for example, sensitivity of 100-240 mV), or can be derived from a formula (for example, usage time (hrs) = 30 - talk time *3). Certain characteristics, such as color, may be configured during the ordering or some other process."
              },
              "serviceSpecification": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ServiceSpecificationRef"
                },
                "description": "ServiceSpecification(s) required to realize a ProductSpecification."
              },
              "bundledProductSpecification": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/BundledProductSpecification"
                },
                "description": "A type of ProductSpecification that belongs to a grouping of ProductSpecifications made available to the market. It inherits of all attributes of ProductSpecification."
              },
              "productSpecificationRelationship": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ProductSpecificationRelationship"
                },
                "description": "A migration, substitution, dependency or exclusivity relationship between/among product specifications."
              },
              "resourceSpecification": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ResourceSpecificationRef"
                },
                "description": "The ResourceSpecification is required to realize a ProductSpecification."
              },
              "attachment": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/AttachmentRefOrValue"
                },
                "description": "Complements the description of an element (for instance a product) through video, pictures..."
              },
              "policy": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/PolicyRef"
                },
                "description": "The Policy resource represents a policy/rule applied to ProductSpecification."
              },
              "targetProductSchema": {
                "$ref": "#/components/schemas/TargetProductSchema"
              },
              "intentSpecification": {
                "$ref": "#/components/schemas/IntentSpecificationRef"
              },
              "lastUpdate": {
                "type": "string",
                "format": "date-time",
                "description": "Date and time of the last update"
              },
              "lifecycleStatus": {
                "type": "string",
                "description": "Used to indicate the current lifecycle status"
              },
              "name": {
                "type": "string",
                "description": "Name of the product specification"
              },
              "externalIdentifier": {
                "type": "array",
                "description": "List of external identifieers for the specification, e.g. identifier in source catalog",
                "items": {
                  "$ref": "#/components/schemas/ExternalIdentifier"
                }
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductSpecification": "#/components/schemas/ProductSpecification"
          }
        }
      },
      "ProductSpecificationAttributeValueChangeEvent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Event"
          },
          {
            "type": "object",
            "description": "ProductSpecificationAttributeValueChangeEvent generic structure",
            "properties": {
              "event": {
                "$ref": "#/components/schemas/ProductSpecificationAttributeValueChangeEventPayload"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductSpecificationAttributeValueChangeEvent": "#/components/schemas/ProductSpecificationAttributeValueChangeEvent"
          }
        }
      },
      "ProductSpecificationAttributeValueChangeEventPayload": {
        "type": "object",
        "description": "ProductSpecificationAttributeValueChangeEventPayload generic structure",
        "properties": {
          "productSpecification": {
            "$ref": "#/components/schemas/ProductSpecification"
          }
        }
      },
      "ProductSpecificationCharacteristicValueUse": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "description": "A use of the ProductSpecificationCharacteristicValue by a ProductOffering to which additional properties (attributes) apply or override the properties of similar properties contained in ProductSpecificationCharacteristicValue. It should be noted that characteristics which their value(s) addressed by this object must exist in corresponding product specification. The available characteristic values for a ProductSpecificationCharacteristic in a Product specification can be modified at the ProductOffering level. For example, a characteristic 'Color' might have values White, Blue, Green, and Red. But, the list of values can be restricted to e.g. White and Blue in an associated product offering. It should be noted that the list of values in 'ProductSpecificationCharacteristicValueUse' is a strict subset of the list of values as defined in the corresponding product specification characteristics.",
            "properties": {
              "name": {
                "type": "string",
                "description": "Name of the associated productSpecificationCharacteristic"
              },
              "id": {
                "type": "string",
                "description": "Unique ID for the characteristic"
              },
              "description": {
                "type": "string",
                "description": "A narrative that explains in detail what the productSpecificationCharacteristic is"
              },
              "valueType": {
                "type": "string",
                "description": "A kind of value that the characteristic can take on, such as numeric, text and so forth"
              },
              "minCardinality": {
                "type": "integer",
                "description": "The minimum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where zero is the value for the minCardinality."
              },
              "maxCardinality": {
                "type": "integer",
                "description": "The maximum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where five is the value for the maxCardinality."
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "productSpecCharacteristicValue": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CharacteristicValueSpecification"
                },
                "description": "A number or text that can be assigned to a ProductSpecificationCharacteristic."
              },
              "productSpecification": {
                "$ref": "#/components/schemas/ProductSpecificationRef"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductSpecificationCharacteristicValueUse": "#/components/schemas/ProductSpecificationCharacteristicValueUse"
          }
        }
      },
      "ProductSpecificationCharacteristicValueUse_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible_FVO"
          },
          {
            "type": "object",
            "description": "A use of the ProductSpecificationCharacteristicValue by a ProductOffering to which additional properties (attributes) apply or override the properties of similar properties contained in ProductSpecificationCharacteristicValue. It should be noted that characteristics which their value(s) addressed by this object must exist in corresponding product specification. The available characteristic values for a ProductSpecificationCharacteristic in a Product specification can be modified at the ProductOffering level. For example, a characteristic 'Color' might have values White, Blue, Green, and Red. But, the list of values can be restricted to e.g. White and Blue in an associated product offering. It should be noted that the list of values in 'ProductSpecificationCharacteristicValueUse' is a strict subset of the list of values as defined in the corresponding product specification characteristics.",
            "properties": {
              "name": {
                "type": "string",
                "description": "Name of the associated productSpecificationCharacteristic"
              },
              "id": {
                "type": "string",
                "description": "Unique ID for the characteristic"
              },
              "description": {
                "type": "string",
                "description": "A narrative that explains in detail what the productSpecificationCharacteristic is"
              },
              "valueType": {
                "type": "string",
                "description": "A kind of value that the characteristic can take on, such as numeric, text and so forth"
              },
              "minCardinality": {
                "type": "integer",
                "description": "The minimum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where zero is the value for the minCardinality."
              },
              "maxCardinality": {
                "type": "integer",
                "description": "The maximum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where five is the value for the maxCardinality."
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "productSpecCharacteristicValue": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CharacteristicValueSpecification_FVO"
                },
                "description": "A number or text that can be assigned to a ProductSpecificationCharacteristic."
              },
              "productSpecification": {
                "$ref": "#/components/schemas/ProductSpecificationRef_FVO"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductSpecificationCharacteristicValueUse": "#/components/schemas/ProductSpecificationCharacteristicValueUse_FVO"
          }
        }
      },
      "ProductSpecificationCharacteristicValueUse_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "description": "A use of the ProductSpecificationCharacteristicValue by a ProductOffering to which additional properties (attributes) apply or override the properties of similar properties contained in ProductSpecificationCharacteristicValue. It should be noted that characteristics which their value(s) addressed by this object must exist in corresponding product specification. The available characteristic values for a ProductSpecificationCharacteristic in a Product specification can be modified at the ProductOffering level. For example, a characteristic 'Color' might have values White, Blue, Green, and Red. But, the list of values can be restricted to e.g. White and Blue in an associated product offering. It should be noted that the list of values in 'ProductSpecificationCharacteristicValueUse' is a strict subset of the list of values as defined in the corresponding product specification characteristics.",
            "properties": {
              "name": {
                "type": "string",
                "description": "Name of the associated productSpecificationCharacteristic"
              },
              "id": {
                "type": "string",
                "description": "Unique ID for the characteristic"
              },
              "description": {
                "type": "string",
                "description": "A narrative that explains in detail what the productSpecificationCharacteristic is"
              },
              "valueType": {
                "type": "string",
                "description": "A kind of value that the characteristic can take on, such as numeric, text and so forth"
              },
              "minCardinality": {
                "type": "integer",
                "description": "The minimum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where zero is the value for the minCardinality."
              },
              "maxCardinality": {
                "type": "integer",
                "description": "The maximum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where five is the value for the maxCardinality."
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "productSpecCharacteristicValue": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CharacteristicValueSpecification_MVO"
                },
                "description": "A number or text that can be assigned to a ProductSpecificationCharacteristic."
              },
              "productSpecification": {
                "$ref": "#/components/schemas/ProductSpecificationRef_MVO"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductSpecificationCharacteristicValueUse": "#/components/schemas/ProductSpecificationCharacteristicValueUse_MVO"
          }
        }
      },
      "ProductSpecificationCreateEvent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Event"
          },
          {
            "type": "object",
            "description": "ProductSpecificationCreateEvent generic structure",
            "properties": {
              "event": {
                "$ref": "#/components/schemas/ProductSpecificationCreateEventPayload"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductSpecificationCreateEvent": "#/components/schemas/ProductSpecificationCreateEvent"
          }
        }
      },
      "ProductSpecificationCreateEventPayload": {
        "type": "object",
        "description": "ProductSpecificationCreateEventPayload generic structure",
        "properties": {
          "productSpecification": {
            "$ref": "#/components/schemas/ProductSpecification"
          }
        }
      },
      "ProductSpecificationDeleteEvent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Event"
          },
          {
            "type": "object",
            "description": "ProductSpecificationDeleteEvent generic structure",
            "properties": {
              "event": {
                "$ref": "#/components/schemas/ProductSpecificationDeleteEventPayload"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductSpecificationDeleteEvent": "#/components/schemas/ProductSpecificationDeleteEvent"
          }
        }
      },
      "ProductSpecificationDeleteEventPayload": {
        "type": "object",
        "description": "ProductSpecificationDeleteEventPayload generic structure",
        "properties": {
          "productSpecification": {
            "$ref": "#/components/schemas/ProductSpecification"
          }
        }
      },
      "ProductSpecificationRef": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef"
          },
          {
            "type": "object",
            "description": "ProductSpecification reference. A product Specification represents entities that are orderable from the provider of the catalog.",
            "properties": {
              "version": {
                "type": "string",
                "description": "Version of the product specification"
              },
              "targetProductSchema": {
                "$ref": "#/components/schemas/TargetProductSchema"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductSpecificationRef": "#/components/schemas/ProductSpecificationRef"
          }
        }
      },
      "ProductSpecificationRef_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef_FVO"
          },
          {
            "type": "object",
            "description": "ProductSpecification reference. A product Specification represents entities that are orderable from the provider of the catalog.",
            "properties": {
              "version": {
                "type": "string",
                "description": "Version of the product specification"
              },
              "targetProductSchema": {
                "$ref": "#/components/schemas/TargetProductSchema_FVO"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductSpecificationRef": "#/components/schemas/ProductSpecificationRef_FVO"
          }
        }
      },
      "ProductSpecificationRef_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef"
          },
          {
            "type": "object",
            "description": "ProductSpecification reference. A product Specification represents entities that are orderable from the provider of the catalog.",
            "properties": {
              "version": {
                "type": "string",
                "description": "Version of the product specification"
              },
              "targetProductSchema": {
                "$ref": "#/components/schemas/TargetProductSchema_MVO"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductSpecificationRef": "#/components/schemas/ProductSpecificationRef_MVO"
          }
        }
      },
      "ProductSpecificationRelationship": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef"
          },
          {
            "type": "object",
            "description": "A migration, substitution, dependency or exclusivity relationship between/among product specifications.",
            "properties": {
              "characteristic": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CharacteristicSpecification"
                },
                "description": "A characteristic that refines the relationship. For example, consider the relationship between broadband and TV. For a 4k TV it is important to know the minimum bandwidth to support 4k, so a characteristic Resolution might be defined on the relationship to allow capturing of this in the inventory"
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "relationshipType": {
                "type": "string",
                "description": "type of the relationship, for example override, discount, etc."
              },
              "version": {
                "type": "string",
                "description": "Version of the referred product specification."
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductSpecificationRelationship": "#/components/schemas/ProductSpecificationRelationship"
          }
        }
      },
      "ProductSpecificationRelationship_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef_FVO"
          },
          {
            "type": "object",
            "description": "A migration, substitution, dependency or exclusivity relationship between/among product specifications.",
            "properties": {
              "characteristic": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CharacteristicSpecification_FVO"
                },
                "description": "A characteristic that refines the relationship. For example, consider the relationship between broadband and TV. For a 4k TV it is important to know the minimum bandwidth to support 4k, so a characteristic Resolution might be defined on the relationship to allow capturing of this in the inventory"
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "relationshipType": {
                "type": "string",
                "description": "type of the relationship, for example override, discount, etc."
              },
              "version": {
                "type": "string",
                "description": "Version of the referred product specification."
              }
            },
            "required": [
              "id",
              "relationshipType"
            ]
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductSpecificationRelationship": "#/components/schemas/ProductSpecificationRelationship_FVO"
          }
        }
      },
      "ProductSpecificationRelationship_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef"
          },
          {
            "type": "object",
            "description": "A migration, substitution, dependency or exclusivity relationship between/among product specifications.",
            "properties": {
              "characteristic": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CharacteristicSpecification_MVO"
                },
                "description": "A characteristic that refines the relationship. For example, consider the relationship between broadband and TV. For a 4k TV it is important to know the minimum bandwidth to support 4k, so a characteristic Resolution might be defined on the relationship to allow capturing of this in the inventory"
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "relationshipType": {
                "type": "string",
                "description": "type of the relationship, for example override, discount, etc."
              },
              "version": {
                "type": "string",
                "description": "Version of the referred product specification."
              }
            },
            "required": [
              "id",
              "relationshipType"
            ]
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductSpecificationRelationship": "#/components/schemas/ProductSpecificationRelationship_MVO"
          }
        }
      },
      "ProductSpecificationStateChangeEvent": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Event"
          },
          {
            "type": "object",
            "description": "ProductSpecificationStateChangeEvent generic structure",
            "properties": {
              "event": {
                "$ref": "#/components/schemas/ProductSpecificationStateChangeEventPayload"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductSpecificationStateChangeEvent": "#/components/schemas/ProductSpecificationStateChangeEvent"
          }
        }
      },
      "ProductSpecificationStateChangeEventPayload": {
        "type": "object",
        "description": "ProductSpecificationStateChangeEventPayload generic structure",
        "properties": {
          "productSpecification": {
            "$ref": "#/components/schemas/ProductSpecification"
          }
        }
      },
      "ProductSpecification_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Entity_FVO"
          },
          {
            "type": "object",
            "description": "Is a detailed description of a tangible or intangible object made available externally in the form of a ProductOffering to customers or other parties playing a party role.",
            "properties": {
              "brand": {
                "type": "string",
                "description": "The manufacturer or trademark of the specification"
              },
              "description": {
                "type": "string",
                "description": "A narrative that explains in detail what the product specification is"
              },
              "isBundle": {
                "type": "boolean",
                "description": "isBundle determines whether a productSpecification represents a single productSpecification (false), or a bundle of productSpecification (true)."
              },
              "productNumber": {
                "type": "string",
                "description": "An identification number assigned to uniquely identity the specification"
              },
              "category": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CategoryRef_FVO"
                },
                "description": "The category resource is used to group product specifications in logical containers. Categories can contain other categories and/or other catalog entries."
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "version": {
                "type": "string",
                "description": "Product specification version"
              },
              "relatedParty": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/RelatedPartyRefOrPartyRoleRef_FVO"
                },
                "description": "A related party defines party or party role linked to a specific entity."
              },
              "productSpecCharacteristic": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CharacteristicSpecification_FVO"
                },
                "description": "A characteristic quality or distinctive feature of a ProductSpecification.  The characteristic can be take on a discrete value, such as color, can take on a range of values, (for example, sensitivity of 100-240 mV), or can be derived from a formula (for example, usage time (hrs) = 30 - talk time *3). Certain characteristics, such as color, may be configured during the ordering or some other process."
              },
              "serviceSpecification": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ServiceSpecificationRef_FVO"
                },
                "description": "ServiceSpecification(s) required to realize a ProductSpecification."
              },
              "bundledProductSpecification": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/BundledProductSpecification_FVO"
                },
                "description": "A type of ProductSpecification that belongs to a grouping of ProductSpecifications made available to the market. It inherits of all attributes of ProductSpecification."
              },
              "productSpecificationRelationship": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ProductSpecificationRelationship_FVO"
                },
                "description": "A migration, substitution, dependency or exclusivity relationship between/among product specifications."
              },
              "resourceSpecification": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ResourceSpecificationRef_FVO"
                },
                "description": "The ResourceSpecification is required to realize a ProductSpecification."
              },
              "attachment": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/AttachmentRefOrValue_FVO"
                },
                "description": "Complements the description of an element (for instance a product) through video, pictures..."
              },
              "policy": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/PolicyRef_FVO"
                },
                "description": "The Policy resource represents a policy/rule applied to ProductSpecification."
              },
              "targetProductSchema": {
                "$ref": "#/components/schemas/TargetProductSchema_FVO"
              },
              "intentSpecification": {
                "$ref": "#/components/schemas/IntentSpecificationRef_FVO"
              },
              "lastUpdate": {
                "type": "string",
                "format": "date-time",
                "description": "Date and time of the last update"
              },
              "lifecycleStatus": {
                "type": "string",
                "description": "Used to indicate the current lifecycle status"
              },
              "name": {
                "type": "string",
                "description": "Name of the product specification"
              },
              "externalIdentifier": {
                "type": "array",
                "description": "List of external identifieers for the specification, e.g. identifier in source catalog",
                "items": {
                  "$ref": "#/components/schemas/ExternalIdentifier_FVO"
                }
              }
            },
            "required": [
              "lastUpdate",
              "lifecycleStatus",
              "name",
              "@type"
            ]
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductSpecification": "#/components/schemas/ProductSpecification_FVO"
          }
        }
      },
      "ProductSpecification_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Entity_MVO"
          },
          {
            "type": "object",
            "description": "Is a detailed description of a tangible or intangible object made available externally in the form of a ProductOffering to customers or other parties playing a party role.",
            "properties": {
              "brand": {
                "type": "string",
                "description": "The manufacturer or trademark of the specification"
              },
              "description": {
                "type": "string",
                "description": "A narrative that explains in detail what the product specification is"
              },
              "isBundle": {
                "type": "boolean",
                "description": "isBundle determines whether a productSpecification represents a single productSpecification (false), or a bundle of productSpecification (true)."
              },
              "productNumber": {
                "type": "string",
                "description": "An identification number assigned to uniquely identity the specification"
              },
              "category": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CategoryRef_MVO"
                },
                "description": "The category resource is used to group product specifications in logical containers. Categories can contain other categories and/or other catalog entries."
              },
              "validFor": {
                "$ref": "#/components/schemas/TimePeriod"
              },
              "version": {
                "type": "string",
                "description": "Product specification version"
              },
              "relatedParty": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/RelatedPartyRefOrPartyRoleRef_MVO"
                },
                "description": "A related party defines party or party role linked to a specific entity."
              },
              "productSpecCharacteristic": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CharacteristicSpecification_MVO"
                },
                "description": "A characteristic quality or distinctive feature of a ProductSpecification.  The characteristic can be take on a discrete value, such as color, can take on a range of values, (for example, sensitivity of 100-240 mV), or can be derived from a formula (for example, usage time (hrs) = 30 - talk time *3). Certain characteristics, such as color, may be configured during the ordering or some other process."
              },
              "serviceSpecification": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ServiceSpecificationRef_MVO"
                },
                "description": "ServiceSpecification(s) required to realize a ProductSpecification."
              },
              "bundledProductSpecification": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/BundledProductSpecification_MVO"
                },
                "description": "A type of ProductSpecification that belongs to a grouping of ProductSpecifications made available to the market. It inherits of all attributes of ProductSpecification."
              },
              "productSpecificationRelationship": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ProductSpecificationRelationship_MVO"
                },
                "description": "A migration, substitution, dependency or exclusivity relationship between/among product specifications."
              },
              "resourceSpecification": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ResourceSpecificationRef_MVO"
                },
                "description": "The ResourceSpecification is required to realize a ProductSpecification."
              },
              "attachment": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/AttachmentRefOrValue_MVO"
                },
                "description": "Complements the description of an element (for instance a product) through video, pictures..."
              },
              "policy": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/PolicyRef_MVO"
                },
                "description": "The Policy resource represents a policy/rule applied to ProductSpecification."
              },
              "targetProductSchema": {
                "$ref": "#/components/schemas/TargetProductSchema_MVO"
              },
              "intentSpecification": {
                "$ref": "#/components/schemas/IntentSpecificationRef_MVO"
              },
              "lifecycleStatus": {
                "type": "string",
                "description": "Used to indicate the current lifecycle status"
              },
              "name": {
                "type": "string",
                "description": "Name of the product specification"
              },
              "externalIdentifier": {
                "type": "array",
                "description": "List of external identifieers for the specification, e.g. identifier in source catalog",
                "items": {
                  "$ref": "#/components/schemas/ExternalIdentifier_MVO"
                }
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ProductSpecification": "#/components/schemas/ProductSpecification_MVO"
          }
        }
      },
      "Quantity": {
        "type": "object",
        "description": "An amount in a given unit",
        "properties": {
          "amount": {
            "type": "number",
            "format": "float",
            "default": 1,
            "description": "Numeric value in a given unit"
          },
          "units": {
            "type": "string",
            "description": "Unit"
          }
        }
      },
      "RelatedPartyRefOrPartyRoleRef": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "description": "RelatedParty reference. A related party defines party or party role or its reference, linked to a specific entity",
            "properties": {
              "role": {
                "description": "Role played by the related party or party role in the context of the specific entity it is linked to. Such as 'initiator', 'customer',  'salesAgent', 'user'",
                "type": "string"
              },
              "partyOrPartyRole": {
                "$ref": "#/components/schemas/PartyRefOrPartyRoleRef"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "RelatedPartyRefOrPartyRoleRef": "#/components/schemas/RelatedPartyRefOrPartyRoleRef"
          }
        }
      },
      "RelatedPartyRefOrPartyRoleRef_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible_FVO"
          },
          {
            "type": "object",
            "description": "RelatedParty reference. A related party defines party or party role or its reference, linked to a specific entity",
            "properties": {
              "role": {
                "description": "Role played by the related party or party role in the context of the specific entity it is linked to. Such as 'initiator', 'customer',  'salesAgent', 'user'",
                "type": "string"
              },
              "partyOrPartyRole": {
                "$ref": "#/components/schemas/PartyRefOrPartyRoleRef_FVO"
              }
            },
            "required": [
              "role"
            ]
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "RelatedPartyRefOrPartyRoleRef": "#/components/schemas/RelatedPartyRefOrPartyRoleRef_FVO"
          }
        }
      },
      "RelatedPartyRefOrPartyRoleRef_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "description": "RelatedParty reference. A related party defines party or party role or its reference, linked to a specific entity",
            "properties": {
              "role": {
                "description": "Role played by the related party or party role in the context of the specific entity it is linked to. Such as 'initiator', 'customer',  'salesAgent', 'user'",
                "type": "string"
              },
              "partyOrPartyRole": {
                "$ref": "#/components/schemas/PartyRefOrPartyRoleRef_MVO"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "RelatedPartyRefOrPartyRoleRef": "#/components/schemas/RelatedPartyRefOrPartyRoleRef_MVO"
          }
        }
      },
      "ResourceCandidateRef": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef"
          },
          {
            "type": "object",
            "description": "ResourceCandidate is an entity that makes a resource specification available to a catalog. A ResourceCandidate and its associated resource specification may be published - made visible - in any number of resource catalogs, or in none.",
            "properties": {
              "version": {
                "type": "string",
                "description": "the version of resource candidate"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ResourceCandidateRef": "#/components/schemas/ResourceCandidateRef"
          }
        }
      },
      "ResourceCandidateRef_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef_FVO"
          },
          {
            "type": "object",
            "description": "ResourceCandidate is an entity that makes a resource specification available to a catalog. A ResourceCandidate and its associated resource specification may be published - made visible - in any number of resource catalogs, or in none.",
            "properties": {
              "version": {
                "type": "string",
                "description": "the version of resource candidate"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ResourceCandidateRef": "#/components/schemas/ResourceCandidateRef_FVO"
          }
        }
      },
      "ResourceCandidateRef_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef"
          },
          {
            "type": "object",
            "description": "ResourceCandidate is an entity that makes a resource specification available to a catalog. A ResourceCandidate and its associated resource specification may be published - made visible - in any number of resource catalogs, or in none.",
            "properties": {
              "version": {
                "type": "string",
                "description": "the version of resource candidate"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ResourceCandidateRef": "#/components/schemas/ResourceCandidateRef_MVO"
          }
        }
      },
      "ResourceSpecificationRef": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef"
          },
          {
            "type": "object",
            "description": "Resources are physical or non-physical components (or some combination of these) within an enterprise's infrastructure or inventory. They are typically consumed or used by services (for example a physical port assigned to a service) or contribute to the realization of a Product (for example, a SIM card). They can be drawn from the Application, Computing and Network domains, and include, for example, Network Elements, software, IT systems, content and information, and technology components.\nA ResourceSpecification is an abstract base class for representing a generic means for implementing a particular type of Resource. In essence, a ResourceSpecification defines the common attributes and relationships of a set of related Resources, while Resource defines a specific instance that is based on a particular ResourceSpecification.",
            "properties": {
              "version": {
                "type": "string",
                "description": "Resource Specification version"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ResourceSpecificationRef": "#/components/schemas/ResourceSpecificationRef"
          }
        }
      },
      "ResourceSpecificationRef_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef_FVO"
          },
          {
            "type": "object",
            "description": "Resources are physical or non-physical components (or some combination of these) within an enterprise's infrastructure or inventory. They are typically consumed or used by services (for example a physical port assigned to a service) or contribute to the realization of a Product (for example, a SIM card). They can be drawn from the Application, Computing and Network domains, and include, for example, Network Elements, software, IT systems, content and information, and technology components.\nA ResourceSpecification is an abstract base class for representing a generic means for implementing a particular type of Resource. In essence, a ResourceSpecification defines the common attributes and relationships of a set of related Resources, while Resource defines a specific instance that is based on a particular ResourceSpecification.",
            "properties": {
              "version": {
                "type": "string",
                "description": "Resource Specification version"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ResourceSpecificationRef": "#/components/schemas/ResourceSpecificationRef_FVO"
          }
        }
      },
      "ResourceSpecificationRef_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityRef"
          },
          {
            "type": "object",
            "description": "Resources are physical or non-physical components (or some combination of these) within an enterprise's infrastructure or inventory. They are typically consumed or used by services (for example a physical port assigned to a service) or contribute to the realization of a Product (for example, a SIM card). They can be drawn from the Application, Computing and Network domains, and include, for example, Network Elements, software, IT systems, content and information, and technology components.\nA ResourceSpecification is an abstract base class for representing a generic means for implementing a particular type of Resource. In essence, a ResourceSpecification defines the common attributes and relationships of a set of related Resources, while Resource defines a specific instance that is based on a particular ResourceSpecification.",
            "properties": {
              "version": {
                "type": "string",
                "description": "Resource Specification version"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ResourceSpecificationRef": "#/components/schemas/ResourceSpecificationRef_MVO"
          }
        }
      },
      "SLARef": {
        "type": "object",
        "description": "ServiceLevelAgreement reference: A service level agreement (SLA) is a type of agreement that represents a formal negotiated agreement between two parties designed to create a common understanding about products, services, priorities, responsibilities, and so forth. The SLA is a set of appropriate procedures and targets formally or informally agreed between parties in order to achieve and maintain specified Quality of Service.",
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "$ref": "#/components/schemas/EntityRef"
          },
          {
            "$ref": "#/components/schemas/Entity"
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "SLARef": "#/components/schemas/SLARef"
          }
        }
      },
      "SLARef_FVO": {
        "type": "object",
        "description": "ServiceLevelAgreement reference: A service level agreement (SLA) is a type of agreement that represents a formal negotiated agreement between two parties designed to create a common understanding about products, services, priorities, responsibilities, and so forth. The SLA is a set of appropriate procedures and targets formally or informally agreed between parties in order to achieve and maintain specified Quality of Service.",
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible_FVO"
          },
          {
            "$ref": "#/components/schemas/EntityRef_FVO"
          },
          {
            "$ref": "#/components/schemas/Entity_FVO"
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "SLARef": "#/components/schemas/SLARef_FVO"
          }
        }
      },
      "SLARef_MVO": {
        "type": "object",
        "description": "ServiceLevelAgreement reference: A service level agreement (SLA) is a type of agreement that represents a formal negotiated agreement between two parties designed to create a common understanding about products, services, priorities, responsibilities, and so forth. The SLA is a set of appropriate procedures and targets formally or informally agreed between parties in order to achieve and maintain specified Quality of Service.",
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "$ref": "#/components/schemas/EntityRef"
          },
          {
            "$ref": "#/components/schemas/Entity_MVO"
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "SLARef": "#/components/schemas/SLARef_MVO"
          }
        }
      },
      "ServiceCandidateRef": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "$ref": "#/components/schemas/EntityRef"
          },
          {
            "type": "object",
            "description": "ServiceCandidate reference. ServiceCandidate is an entity that makes a ServiceSpecification available to a catalog.",
            "properties": {
              "version": {
                "type": "string",
                "description": "Version of the service candidate"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ServiceCandidateRef": "#/components/schemas/ServiceCandidateRef"
          }
        }
      },
      "ServiceCandidateRef_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible_FVO"
          },
          {
            "$ref": "#/components/schemas/EntityRef_FVO"
          },
          {
            "type": "object",
            "description": "ServiceCandidate reference. ServiceCandidate is an entity that makes a ServiceSpecification available to a catalog.",
            "properties": {
              "version": {
                "type": "string",
                "description": "Version of the service candidate"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ServiceCandidateRef": "#/components/schemas/ServiceCandidateRef_FVO"
          }
        }
      },
      "ServiceCandidateRef_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "$ref": "#/components/schemas/EntityRef"
          },
          {
            "type": "object",
            "description": "ServiceCandidate reference. ServiceCandidate is an entity that makes a ServiceSpecification available to a catalog.",
            "properties": {
              "version": {
                "type": "string",
                "description": "Version of the service candidate"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ServiceCandidateRef": "#/components/schemas/ServiceCandidateRef_MVO"
          }
        }
      },
      "ServiceSpecificationRef": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "$ref": "#/components/schemas/EntityRef"
          },
          {
            "type": "object",
            "description": "Service specification reference: ServiceSpecification(s) required to realize a ProductSpecification.",
            "properties": {
              "version": {
                "type": "string",
                "description": "Service specification version"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ServiceSpecificationRef": "#/components/schemas/ServiceSpecificationRef"
          }
        }
      },
      "ServiceSpecificationRef_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible_FVO"
          },
          {
            "$ref": "#/components/schemas/EntityRef_FVO"
          },
          {
            "type": "object",
            "description": "Service specification reference: ServiceSpecification(s) required to realize a ProductSpecification.",
            "properties": {
              "version": {
                "type": "string",
                "description": "Service specification version"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ServiceSpecificationRef": "#/components/schemas/ServiceSpecificationRef_FVO"
          }
        }
      },
      "ServiceSpecificationRef_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "$ref": "#/components/schemas/EntityRef"
          },
          {
            "type": "object",
            "description": "Service specification reference: ServiceSpecification(s) required to realize a ProductSpecification.",
            "properties": {
              "version": {
                "type": "string",
                "description": "Service specification version"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "ServiceSpecificationRef": "#/components/schemas/ServiceSpecificationRef_MVO"
          }
        }
      },
      "StringArrayCharacteristicValueSpecification": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is an array of strings",
            "properties": {
              "value": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            }
          }
        ]
      },
      "StringArrayCharacteristicValueSpecification_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification_FVO"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is an array of strings",
            "properties": {
              "value": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            }
          }
        ]
      },
      "StringArrayCharacteristicValueSpecification_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification_MVO"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is an array of strings",
            "properties": {
              "value": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            }
          }
        ]
      },
      "StringCharacteristicValueSpecification": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is a string",
            "properties": {
              "value": {
                "type": "string",
                "description": "Value of the characteristic"
              }
            }
          }
        ]
      },
      "StringCharacteristicValueSpecification_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification_FVO"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is a string",
            "properties": {
              "value": {
                "type": "string",
                "description": "Value of the characteristic"
              }
            }
          }
        ]
      },
      "StringCharacteristicValueSpecification_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CharacteristicValueSpecification_MVO"
          },
          {
            "type": "object",
            "description": "A specification for a characteristic for which the value is a string",
            "properties": {
              "value": {
                "type": "string",
                "description": "Value of the characteristic"
              }
            }
          }
        ]
      },
      "TargetProductSchema": {
        "type": "object",
        "description": "The reference object to the schema and type of target product which is described by product specification",
        "properties": {
          "@type": {
            "type": "string",
            "description": "Class type of the target product"
          },
          "@schemaLocation": {
            "type": "string",
            "format": "uri",
            "description": "This field provides a link to the schema describing the target product"
          }
        }
      },
      "TargetProductSchema_FVO": {
        "type": "object",
        "description": "The reference object to the schema and type of target product which is described by product specification",
        "properties": {
          "@type": {
            "type": "string",
            "description": "Class type of the target product"
          },
          "@schemaLocation": {
            "type": "string",
            "format": "uri",
            "description": "This field provides a link to the schema describing the target product"
          }
        },
        "required": [
          "@type",
          "@schemaLocation"
        ]
      },
      "TargetProductSchema_MVO": {
        "type": "object",
        "description": "The reference object to the schema and type of target product which is described by product specification",
        "properties": {
          "@type": {
            "type": "string",
            "description": "Class type of the target product"
          },
          "@schemaLocation": {
            "type": "string",
            "format": "uri",
            "description": "This field provides a link to the schema describing the target product"
          }
        }
      },
      "TaxItem": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "description": "A tax item is created for each tax rate and tax type used in the bill.",
            "properties": {
              "taxAmount": {
                "$ref": "#/components/schemas/Money"
              },
              "taxCategory": {
                "type": "string",
                "description": "Tax category"
              },
              "taxRate": {
                "type": "number",
                "format": "float",
                "description": "Applied rate of the tax"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "TaxItem": "#/components/schemas/TaxItem"
          }
        }
      },
      "TaxItem_FVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible_FVO"
          },
          {
            "type": "object",
            "description": "A tax item is created for each tax rate and tax type used in the bill.",
            "properties": {
              "taxAmount": {
                "$ref": "#/components/schemas/Money"
              },
              "taxCategory": {
                "type": "string",
                "description": "Tax category"
              },
              "taxRate": {
                "type": "number",
                "format": "float",
                "description": "Applied rate of the tax"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "TaxItem": "#/components/schemas/TaxItem_FVO"
          }
        }
      },
      "TaxItem_MVO": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "description": "A tax item is created for each tax rate and tax type used in the bill.",
            "properties": {
              "taxAmount": {
                "$ref": "#/components/schemas/Money"
              },
              "taxCategory": {
                "type": "string",
                "description": "Tax category"
              },
              "taxRate": {
                "type": "number",
                "format": "float",
                "description": "Applied rate of the tax"
              }
            }
          }
        ],
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "TaxItem": "#/components/schemas/TaxItem_MVO"
          }
        }
      },
      "TimePeriod": {
        "type": "object",
        "description": "A period of time, either as a deadline (endDateTime only) a startDateTime only, or both",
        "properties": {
          "startDateTime": {
            "description": "Start of the time period, using IETC-RFC-3339 format",
            "type": "string",
            "format": "date-time",
            "example": "1985-04-12T23:20:50.52Z"
          },
          "endDateTime": {
            "description": "End of the time period, using IETC-RFC-3339 format",
            "type": "string",
            "format": "date-time",
            "example": "1985-04-12T23:20:50.52Z"
          }
        }
      },
      "Error": {
        "discriminator": {
          "propertyName": "@type",
          "mapping": {
            "Error": "#/components/schemas/Error"
          }
        },
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "type": "object",
            "required": [
              "code",
              "reason"
            ],
            "properties": {
              "code": {
                "type": "string",
                "description": "Application relevant detail, defined in the API or a common list."
              },
              "reason": {
                "type": "string",
                "description": "Explanation of the reason for the error which can be shown to a client user."
              },
              "message": {
                "type": "string",
                "description": "More details and corrective actions related to the error which can be shown to a client user."
              },
              "status": {
                "type": "string",
                "description": "HTTP Error code extension"
              },
              "referenceError": {
                "type": "string",
                "description": "URI of documentation describing the error."
              }
            }
          }
        ],
        "description": "Used when an API throws an Error, typically with a HTTP error response-code (3xx, 4xx, 5xx)"
      },
      "Hub_FVO": {
        "type": "object",
        "description": "Sets the communication endpoint address the service instance must use to deliver notification information",
        "required": [
          "callback"
        ],
        "allOf": [
          {
            "$ref": "#/components/schemas/Extensible"
          },
          {
            "properties": {
              "callback": {
                "type": "string",
                "description": "The callback being registered."
              },
              "query": {
                "type": "string",
                "description": "additional data to be passed"
              }
            }
          }
        ]
      },
      "Hub": {
        "type": "object",
        "description": "Sets the communication endpoint address the service instance must use to deliver notification information",
        "allOf": [
          {
            "$ref": "#/components/schemas/Entity"
          },
          {
            "properties": {
              "id": {
                "type": "string",
                "description": "Id of the listener"
              },
              "callback": {
                "type": "string",
                "description": "The callback being registered."
              },
              "query": {
                "type": "string",
                "description": "additional data to be passed"
              }
            },
            "required": [
              "callback"
            ]
          }
        ]
      },
      "JsonPatch": {
        "type": "object",
        "description": "A JSONPatch document as defined by RFC 6902",
        "required": [
          "op",
          "path"
        ],
        "properties": {
          "op": {
            "type": "string",
            "description": "The operation to be performed",
            "enum": [
              "add",
              "remove",
              "replace",
              "move",
              "copy",
              "test"
            ]
          },
          "path": {
            "type": "string",
            "description": "A JSON-Pointer"
          },
          "value": {
            "description": "The value to be used within the operations."
          },
          "from": {
            "type": "string",
            "description": "A string containing a JSON Pointer value."
          }
        }
      },
      "JsonPatchOperations": {
        "description": "JSONPatch Operations document as defined by RFC 6902",
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/JsonPatch"
        }
      }
    },
    "parameters": {
      "Id": {
        "name": "id",
        "required": true,
        "schema": {
          "type": "string"
        },
        "in": "path",
        "description": "Identifier of the Resource"
      },
      "Fields": {
        "name": "fields",
        "in": "query",
        "description": "Comma-separated properties to be provided in response",
        "schema": {
          "type": "string"
        }
      },
      "Offset": {
        "name": "offset",
        "in": "query",
        "description": "Requested index for start of resources to be provided in response",
        "schema": {
          "type": "integer"
        }
      },
      "Limit": {
        "name": "limit",
        "in": "query",
        "description": "Requested number of resources to be provided in response",
        "schema": {
          "type": "integer"
        }
      }
    },
    "requestBodies": {
      "ProductCatalog_FVO": {
        "description": "The ProductCatalog to be created",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductCatalog_FVO"
            },
            "examples": {
              "ProductCatalog_Create_example": {
                "$ref": "#/components/examples/ProductCatalog_Create_example_request"
              }
            }
          }
        },
        "required": true
      },
      "ProductCatalog_MVO": {
        "description": "The ProductCatalog to be patched",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductCatalog_MVO"
            },
            "examples": {
              "ProductCatalog_Implicit_Update_example": {
                "$ref": "#/components/examples/ProductCatalog_Implicit_Update_example_request"
              }
            }
          },
          "application/merge-patch+json": {
            "schema": {
              "$ref": "#/components/schemas/ProductCatalog_MVO"
            },
            "examples": {
              "ProductCatalog_Update_example_with_Patch_Merge": {
                "$ref": "#/components/examples/ProductCatalog_Update_example_with_Patch_Merge_request"
              }
            }
          },
          "application/json-patch+json": {
            "schema": {
              "$ref": "#/components/schemas/JsonPatchOperations"
            },
            "examples": {
              "ProductCatalog_Update_example_with_JSON_Patch": {
                "$ref": "#/components/examples/ProductCatalog_Update_example_with_JSON_Patch_request"
              }
            }
          },
          "application/json-patch-query+json": {
            "schema": {
              "$ref": "#/components/schemas/JsonPatchOperations"
            },
            "examples": {
              "ProductCatalog_Update_example_with_JSON_Patch_Query": {
                "$ref": "#/components/examples/ProductCatalog_Update_example_with_JSON_Patch_Query_request"
              }
            }
          }
        },
        "required": true
      },
      "ProductCatalogCreateEvent": {
        "description": "ProductCatalog create Event payload",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductCatalogCreateEvent"
            },
            "examples": {
              "CreateCatalogEvent": {
                "$ref": "#/components/examples/CreateCatalogEvent_request"
              }
            }
          }
        },
        "required": true
      },
      "ProductCatalogAttributeValueChangeEvent": {
        "description": "ProductCatalog attributeValueChange Event payload",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductCatalogAttributeValueChangeEvent"
            },
            "examples": {
              "CatalogAttributeValueChangeEvent": {
                "$ref": "#/components/examples/CatalogAttributeValueChangeEvent_request"
              }
            }
          }
        },
        "required": true
      },
      "ProductCatalogStateChangeEvent": {
        "description": "ProductCatalog stateChange Event payload",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductCatalogStateChangeEvent"
            },
            "examples": {
              "CatalogStateChangeEvent": {
                "$ref": "#/components/examples/CatalogStateChangeEvent_request"
              }
            }
          }
        },
        "required": true
      },
      "ProductCatalogDeleteEvent": {
        "description": "ProductCatalog delete Event payload",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductCatalogDeleteEvent"
            },
            "examples": {
              "CatalogDeleteEvent": {
                "$ref": "#/components/examples/CatalogDeleteEvent_request"
              }
            }
          }
        },
        "required": true
      },
      "Category_FVO": {
        "description": "The Category to be created",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/Category_FVO"
            },
            "examples": {
              "Category_Create_example": {
                "$ref": "#/components/examples/Category_Create_example_request"
              }
            }
          }
        },
        "required": true
      },
      "Category_MVO": {
        "description": "The Category to be patched",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/Category_MVO"
            },
            "examples": {
              "Category_Implicit_Update_example": {
                "$ref": "#/components/examples/Category_Implicit_Update_example_request"
              }
            }
          },
          "application/merge-patch+json": {
            "schema": {
              "$ref": "#/components/schemas/Category_MVO"
            },
            "examples": {
              "Category_Update_example": {
                "$ref": "#/components/examples/Category_Update_example_request"
              }
            }
          },
          "application/json-patch+json": {
            "schema": {
              "$ref": "#/components/schemas/JsonPatchOperations"
            },
            "examples": {
              "Category_Update_example_with_JSON_Patch": {
                "$ref": "#/components/examples/Category_Update_example_with_JSON_Patch_request"
              }
            }
          },
          "application/json-patch-query+json": {
            "schema": {
              "$ref": "#/components/schemas/JsonPatchOperations"
            },
            "examples": {
              "Category_Update_example_with_JSON_Patch_Query": {
                "$ref": "#/components/examples/Category_Update_example_with_JSON_Patch_Query_request"
              }
            }
          }
        },
        "required": true
      },
      "CategoryCreateEvent": {
        "description": "Category create Event payload",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/CategoryCreateEvent"
            },
            "examples": {
              "CategoryCreateEvent": {
                "$ref": "#/components/examples/CategoryCreateEvent_request"
              }
            }
          }
        },
        "required": true
      },
      "CategoryAttributeValueChangeEvent": {
        "description": "Category attributeValueChange Event payload",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/CategoryAttributeValueChangeEvent"
            },
            "examples": {
              "CategoryAttributeValueChangeEvent": {
                "$ref": "#/components/examples/CategoryAttributeValueChangeEvent_request"
              }
            }
          }
        },
        "required": true
      },
      "CategoryStateChangeEvent": {
        "description": "Category stateChange Event payload",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/CategoryStateChangeEvent"
            },
            "examples": {
              "CategoryStateChangeEvent": {
                "$ref": "#/components/examples/CategoryStateChangeEvent_request"
              }
            }
          }
        },
        "required": true
      },
      "CategoryDeleteEvent": {
        "description": "Category delete Event payload",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/CategoryDeleteEvent"
            },
            "examples": {
              "CategoryDeleteEvent": {
                "$ref": "#/components/examples/CategoryDeleteEvent_request"
              }
            }
          }
        },
        "required": true
      },
      "ProductOffering_FVO": {
        "description": "The ProductOffering to be created",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductOffering_FVO"
            },
            "examples": {
              "Product_Offering_Create_example": {
                "$ref": "#/components/examples/Product_Offering_Create_example_request"
              }
            }
          }
        },
        "required": true
      },
      "ProductOffering_MVO": {
        "description": "The ProductOffering to be patched",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductOffering_MVO"
            },
            "examples": {
              "Product_Offering_Update_Implicit_Merge": {
                "$ref": "#/components/examples/Product_Offering_Update_Implicit_Merge_request"
              }
            }
          },
          "application/merge-patch+json": {
            "schema": {
              "$ref": "#/components/schemas/ProductOffering_MVO"
            },
            "examples": {
              "Product_Offering_Update_Patch_Merge": {
                "$ref": "#/components/examples/Product_Offering_Update_Patch_Merge_request"
              }
            }
          },
          "application/json-patch+json": {
            "schema": {
              "$ref": "#/components/schemas/JsonPatchOperations"
            },
            "examples": {
              "Product_Offering_Update_JSON_Patch": {
                "$ref": "#/components/examples/Product_Offering_Update_JSON_Patch_request"
              }
            }
          },
          "application/json-patch-query+json": {
            "schema": {
              "$ref": "#/components/schemas/JsonPatchOperations"
            },
            "examples": {
              "Product_Offering_Update_JSON_Patch_Query": {
                "$ref": "#/components/examples/Product_Offering_Update_JSON_Patch_Query_request"
              }
            }
          }
        },
        "required": true
      },
      "ProductOfferingCreateEvent": {
        "description": "ProductOffering create Event payload",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductOfferingCreateEvent"
            },
            "examples": {
              "ProductOfferingCreateEvent": {
                "$ref": "#/components/examples/ProductOfferingCreateEvent_request"
              }
            }
          }
        },
        "required": true
      },
      "ProductOfferingAttributeValueChangeEvent": {
        "description": "ProductOffering attributeValueChange Event payload",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductOfferingAttributeValueChangeEvent"
            },
            "examples": {
              "ProductOfferingAttributeValueChangeEvent": {
                "$ref": "#/components/examples/ProductOfferingAttributeValueChangeEvent_request"
              }
            }
          }
        },
        "required": true
      },
      "ProductOfferingStateChangeEvent": {
        "description": "ProductOffering stateChange Event payload",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductOfferingStateChangeEvent"
            },
            "examples": {
              "ProductOfferingStateChangeEvent": {
                "$ref": "#/components/examples/ProductOfferingStateChangeEvent_request"
              }
            }
          }
        },
        "required": true
      },
      "ProductOfferingDeleteEvent": {
        "description": "ProductOffering delete Event payload",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductOfferingDeleteEvent"
            },
            "examples": {
              "ProductOfferingDeleteEvent": {
                "$ref": "#/components/examples/ProductOfferingDeleteEvent_request"
              }
            }
          }
        },
        "required": true
      },
      "ProductOfferingPrice_FVO": {
        "description": "The ProductOfferingPrice to be created",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductOfferingPrice_FVO"
            },
            "examples": {
              "Product_Offering_Price_Create_example": {
                "$ref": "#/components/examples/Product_Offering_Price_Create_example_request"
              }
            }
          }
        },
        "required": true
      },
      "ProductOfferingPrice_MVO": {
        "description": "The ProductOfferingPrice to be patched",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductOfferingPrice_MVO"
            },
            "examples": {
              "Product_Offering_Price_Update_Implicit_Merge_example": {
                "$ref": "#/components/examples/Product_Offering_Price_Update_Implicit_Merge_example_request"
              }
            }
          },
          "application/merge-patch+json": {
            "schema": {
              "$ref": "#/components/schemas/ProductOfferingPrice_MVO"
            },
            "examples": {
              "Product_Offering_Price_Update_Patch_Merge_example": {
                "$ref": "#/components/examples/Product_Offering_Price_Update_Patch_Merge_example_request"
              }
            }
          },
          "application/json-patch+json": {
            "schema": {
              "$ref": "#/components/schemas/JsonPatchOperations"
            },
            "examples": {
              "Product_Offering_Price_Update_JSON_Patch": {
                "$ref": "#/components/examples/Product_Offering_Price_Update_JSON_Patch_request"
              }
            }
          },
          "application/json-patch-query+json": {
            "schema": {
              "$ref": "#/components/schemas/JsonPatchOperations"
            },
            "examples": {
              "Product_Offering_Price_Update_JSON_Patch_Query": {
                "$ref": "#/components/examples/Product_Offering_Price_Update_JSON_Patch_Query_request"
              }
            }
          }
        },
        "required": true
      },
      "ProductOfferingPriceCreateEvent": {
        "description": "ProductOfferingPrice create Event payload",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductOfferingPriceCreateEvent"
            },
            "examples": {
              "ProductOfferingPriceCreateEvent": {
                "$ref": "#/components/examples/ProductOfferingPriceCreateEvent_request"
              }
            }
          }
        },
        "required": true
      },
      "ProductOfferingPriceAttributeValueChangeEvent": {
        "description": "ProductOfferingPrice attributeValueChange Event payload",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductOfferingPriceAttributeValueChangeEvent"
            },
            "examples": {
              "ProductOfferingPriceAttributeValueChangeEvent": {
                "$ref": "#/components/examples/ProductOfferingPriceAttributeValueChangeEvent_request"
              }
            }
          }
        },
        "required": true
      },
      "ProductOfferingPriceStateChangeEvent": {
        "description": "ProductOfferingPrice stateChange Event payload",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductOfferingPriceStateChangeEvent"
            },
            "examples": {
              "ProductOfferingPriceStateChangeEvent": {
                "$ref": "#/components/examples/ProductOfferingPriceStateChangeEvent_request"
              }
            }
          }
        },
        "required": true
      },
      "ProductOfferingPriceDeleteEvent": {
        "description": "ProductOfferingPrice delete Event payload",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductOfferingPriceDeleteEvent"
            },
            "examples": {
              "ProductOfferingPriceDeleteEvent": {
                "$ref": "#/components/examples/ProductOfferingPriceDeleteEvent_request"
              }
            }
          }
        },
        "required": true
      },
      "ProductSpecification_FVO": {
        "description": "The ProductSpecification to be created",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductSpecification_FVO"
            },
            "examples": {
              "Product_Specification_Create_example": {
                "$ref": "#/components/examples/Product_Specification_Create_example_request"
              },
              "Product_Specification_Create_example_with_intent": {
                "$ref": "#/components/examples/Product_Specification_Create_example_with_intent_request"
              }
            }
          }
        },
        "required": true
      },
      "ProductSpecification_MVO": {
        "description": "The ProductSpecification to be patched",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductSpecification_MVO"
            },
            "examples": {
              "Product_Specification_Update_Implicit_Merge_example": {
                "$ref": "#/components/examples/Product_Specification_Update_Implicit_Merge_example_request"
              }
            }
          },
          "application/merge-patch+json": {
            "schema": {
              "$ref": "#/components/schemas/ProductSpecification_MVO"
            },
            "examples": {
              "Product_Specification_Update_Patch_Merge_example": {
                "$ref": "#/components/examples/Product_Specification_Update_Patch_Merge_example_request"
              }
            }
          },
          "application/json-patch+json": {
            "schema": {
              "$ref": "#/components/schemas/JsonPatchOperations"
            },
            "examples": {
              "Product_Specification_Update_JSON_Patch": {
                "$ref": "#/components/examples/Product_Specification_Update_JSON_Patch_request"
              }
            }
          },
          "application/json-patch-query+json": {
            "schema": {
              "$ref": "#/components/schemas/JsonPatchOperations"
            },
            "examples": {
              "Product_Specification_Update_JSON_Patch_Query": {
                "$ref": "#/components/examples/Product_Specification_Update_JSON_Patch_Query_request"
              }
            }
          }
        },
        "required": true
      },
      "ProductSpecificationCreateEvent": {
        "description": "ProductSpecification create Event payload",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductSpecificationCreateEvent"
            },
            "examples": {
              "ProductSpecificationCreateEvent": {
                "$ref": "#/components/examples/ProductSpecificationCreateEvent_request"
              }
            }
          }
        },
        "required": true
      },
      "ProductSpecificationAttributeValueChangeEvent": {
        "description": "ProductSpecification attributeValueChange Event payload",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductSpecificationAttributeValueChangeEvent"
            },
            "examples": {
              "ProductSpecificationAttributeValueChangeEvent": {
                "$ref": "#/components/examples/ProductSpecificationAttributeValueChangeEvent_request"
              }
            }
          }
        },
        "required": true
      },
      "ProductSpecificationStateChangeEvent": {
        "description": "ProductSpecification stateChange Event payload",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductSpecificationStateChangeEvent"
            },
            "examples": {
              "ProductSpecificationStateChangeEvent": {
                "$ref": "#/components/examples/ProductSpecificationStateChangeEvent_request"
              }
            }
          }
        },
        "required": true
      },
      "ProductSpecificationDeleteEvent": {
        "description": "ProductSpecification delete Event payload",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductSpecificationDeleteEvent"
            },
            "examples": {
              "ProductSpecificationDeleteEvent": {
                "$ref": "#/components/examples/ProductSpecificationDeleteEvent_request"
              }
            }
          }
        },
        "required": true
      },
      "ImportJob_FVO": {
        "description": "The ImportJob to be created",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ImportJob_FVO"
            },
            "examples": {
              "Import_Job_Create_example": {
                "$ref": "#/components/examples/Import_Job_Create_example_request"
              }
            }
          }
        },
        "required": true
      },
      "ImportJobCreateEvent": {
        "description": "ImportJob create Event payload",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ImportJobCreateEvent"
            },
            "examples": {
              "ImportJobCreateEvent": {
                "$ref": "#/components/examples/ImportJobCreateEvent_request"
              }
            }
          }
        },
        "required": true
      },
      "ImportJobStateChangeEvent": {
        "description": "ImportJob stateChange Event payload",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ImportJobStateChangeEvent"
            },
            "examples": {
              "ImportJobStateChangeEvent": {
                "$ref": "#/components/examples/ImportJobStateChangeEvent_request"
              }
            }
          }
        },
        "required": true
      },
      "ExportJob_FVO": {
        "description": "The ExportJob to be created",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ExportJob_FVO"
            },
            "examples": {
              "Export_Job_Create_example": {
                "$ref": "#/components/examples/Export_Job_Create_example_request"
              }
            }
          }
        },
        "required": true
      },
      "ExportJobCreateEvent": {
        "description": "ExportJob create Event payload",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ExportJobCreateEvent"
            },
            "examples": {
              "ExportJobCreateEvent": {
                "$ref": "#/components/examples/ExportJobCreateEvent_request"
              }
            }
          }
        },
        "required": true
      },
      "ExportJobStateChangeEvent": {
        "description": "ExportJob stateChange Event payload",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ExportJobStateChangeEvent"
            },
            "examples": {
              "ExportJobStateChangeEvent": {
                "$ref": "#/components/examples/ExportJobStateChangeEvent_request"
              }
            }
          }
        },
        "required": true
      },
      "Hub_FVO": {
        "description": "Data containing the callback endpoint to deliver the information",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/Hub_FVO"
            }
          }
        },
        "required": true
      }
    },
    "responses": {
      "200": {
        "description": "OK"
      },
      "202": {
        "description": "Accepted"
      },
      "204": {
        "description": "Deleted"
      },
      "400": {
        "description": "Bad Request",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/Error"
            }
          }
        }
      },
      "401": {
        "description": "Unauthorized",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/Error"
            }
          }
        }
      },
      "403": {
        "description": "Forbidden",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/Error"
            }
          }
        }
      },
      "404": {
        "description": "Not Found",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/Error"
            }
          }
        }
      },
      "405": {
        "description": "Method Not allowed",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/Error"
            }
          }
        }
      },
      "409": {
        "description": "Conflict",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/Error"
            }
          }
        }
      },
      "500": {
        "description": "Internal Server Error",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/Error"
            }
          }
        }
      },
      "501": {
        "description": "Not Implemented",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/Error"
            }
          }
        }
      },
      "503": {
        "description": "Service Unavailable",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/Error"
            }
          }
        }
      },
      "200ProductCatalogArray": {
        "description": "Success",
        "headers": {
          "X-Total-Count": {
            "$ref": "#/components/headers/X-Total-Count"
          },
          "X-Result-Count": {
            "$ref": "#/components/headers/X-Result-Count"
          }
        },
        "content": {
          "application/json": {
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ProductCatalog"
              }
            },
            "examples": {
              "ProductCatalog_list_example": {
                "$ref": "#/components/examples/ProductCatalog_list_example_response"
              }
            }
          }
        }
      },
      "200ProductCatalog_Get": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductCatalog"
            },
            "examples": {
              "ProductCatalog_retrieve_example": {
                "$ref": "#/components/examples/ProductCatalog_retrieve_example_response"
              }
            }
          }
        }
      },
      "200ProductCatalog_Patch": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductCatalog"
            },
            "examples": {
              "ProductCatalog_Implicit_Update_example": {
                "$ref": "#/components/examples/ProductCatalog_Implicit_Update_example_response"
              }
            }
          },
          "application/merge-patch+json": {
            "schema": {
              "$ref": "#/components/schemas/ProductCatalog"
            },
            "examples": {
              "ProductCatalog_Update_example_with_Patch_Merge": {
                "$ref": "#/components/examples/ProductCatalog_Update_example_with_Patch_Merge_response"
              }
            }
          },
          "application/json-patch+json": {
            "schema": {
              "oneOf": [
                {
                  "$ref": "#/components/schemas/ProductCatalog"
                },
                {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ProductCatalog"
                  }
                },
                {
                  "type": "string",
                  "nullable": true
                }
              ]
            },
            "examples": {
              "ProductCatalog_Update_example_with_JSON_Patch": {
                "$ref": "#/components/examples/ProductCatalog_Update_example_with_JSON_Patch_response"
              }
            }
          },
          "application/json-patch-query+json": {
            "schema": {
              "oneOf": [
                {
                  "$ref": "#/components/schemas/ProductCatalog"
                },
                {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ProductCatalog"
                  }
                },
                {
                  "type": "string",
                  "nullable": true
                }
              ]
            },
            "examples": {
              "ProductCatalog_Update_example_with_JSON_Patch_Query": {
                "$ref": "#/components/examples/ProductCatalog_Update_example_with_JSON_Patch_Query_response"
              }
            }
          }
        }
      },
      "201ProductCatalog": {
        "description": "OK/Created",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductCatalog"
            },
            "examples": {
              "ProductCatalog_Create_example": {
                "$ref": "#/components/examples/ProductCatalog_Create_example_response"
              }
            }
          }
        }
      },
      "200CategoryArray": {
        "description": "Success",
        "headers": {
          "X-Total-Count": {
            "$ref": "#/components/headers/X-Total-Count"
          },
          "X-Result-Count": {
            "$ref": "#/components/headers/X-Result-Count"
          }
        },
        "content": {
          "application/json": {
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Category"
              }
            },
            "examples": {
              "Category_list_example": {
                "$ref": "#/components/examples/Category_list_example_response"
              }
            }
          }
        }
      },
      "200Category_Get": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/Category"
            },
            "examples": {
              "Category_retrieve_example": {
                "$ref": "#/components/examples/Category_retrieve_example_response"
              }
            }
          }
        }
      },
      "200Category_Patch": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/Category"
            },
            "examples": {
              "Category_Implicit_Update_example": {
                "$ref": "#/components/examples/Category_Implicit_Update_example_response"
              }
            }
          },
          "application/merge-patch+json": {
            "schema": {
              "$ref": "#/components/schemas/Category"
            },
            "examples": {
              "Category_Update_example": {
                "$ref": "#/components/examples/Category_Update_example_response"
              }
            }
          },
          "application/json-patch+json": {
            "schema": {
              "oneOf": [
                {
                  "$ref": "#/components/schemas/Category"
                },
                {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Category"
                  }
                },
                {
                  "type": "string",
                  "nullable": true
                }
              ]
            },
            "examples": {
              "Category_Update_example_with_JSON_Patch": {
                "$ref": "#/components/examples/Category_Update_example_with_JSON_Patch_response"
              }
            }
          },
          "application/json-patch-query+json": {
            "schema": {
              "oneOf": [
                {
                  "$ref": "#/components/schemas/Category"
                },
                {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Category"
                  }
                },
                {
                  "type": "string",
                  "nullable": true
                }
              ]
            },
            "examples": {
              "Category_Update_example_with_JSON_Patch_Query": {
                "$ref": "#/components/examples/Category_Update_example_with_JSON_Patch_Query_response"
              }
            }
          }
        }
      },
      "201Category": {
        "description": "OK/Created",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/Category"
            },
            "examples": {
              "Category_Create_example": {
                "$ref": "#/components/examples/Category_Create_example_response"
              }
            }
          }
        }
      },
      "200ProductOfferingArray": {
        "description": "Success",
        "headers": {
          "X-Total-Count": {
            "$ref": "#/components/headers/X-Total-Count"
          },
          "X-Result-Count": {
            "$ref": "#/components/headers/X-Result-Count"
          }
        },
        "content": {
          "application/json": {
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ProductOffering"
              }
            },
            "examples": {
              "ProductOffering_list_example": {
                "$ref": "#/components/examples/ProductOffering_list_example_response"
              }
            }
          }
        }
      },
      "200ProductOffering_Get": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductOffering"
            },
            "examples": {
              "ProductOffering_retrieve_example": {
                "$ref": "#/components/examples/ProductOffering_retrieve_example_response"
              }
            }
          }
        }
      },
      "200ProductOffering_Patch": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductOffering"
            },
            "examples": {
              "Product_Offering_Update_Implicit_Merge": {
                "$ref": "#/components/examples/Product_Offering_Update_Implicit_Merge_response"
              }
            }
          },
          "application/merge-patch+json": {
            "schema": {
              "$ref": "#/components/schemas/ProductOffering"
            },
            "examples": {
              "Product_Offering_Update_Patch_Merge": {
                "$ref": "#/components/examples/Product_Offering_Update_Patch_Merge_response"
              }
            }
          },
          "application/json-patch+json": {
            "schema": {
              "oneOf": [
                {
                  "$ref": "#/components/schemas/ProductOffering"
                },
                {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ProductOffering"
                  }
                },
                {
                  "type": "string",
                  "nullable": true
                }
              ]
            },
            "examples": {
              "Product_Offering_Update_JSON_Patch": {
                "$ref": "#/components/examples/Product_Offering_Update_JSON_Patch_response"
              }
            }
          },
          "application/json-patch-query+json": {
            "schema": {
              "oneOf": [
                {
                  "$ref": "#/components/schemas/ProductOffering"
                },
                {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ProductOffering"
                  }
                },
                {
                  "type": "string",
                  "nullable": true
                }
              ]
            },
            "examples": {
              "Product_Offering_Update_JSON_Patch_Query": {
                "$ref": "#/components/examples/Product_Offering_Update_JSON_Patch_Query_response"
              }
            }
          }
        }
      },
      "201ProductOffering": {
        "description": "OK/Created",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductOffering"
            },
            "examples": {
              "Product_Offering_Create_example": {
                "$ref": "#/components/examples/Product_Offering_Create_example_response"
              }
            }
          }
        }
      },
      "200ProductOfferingPriceArray": {
        "description": "Success",
        "headers": {
          "X-Total-Count": {
            "$ref": "#/components/headers/X-Total-Count"
          },
          "X-Result-Count": {
            "$ref": "#/components/headers/X-Result-Count"
          }
        },
        "content": {
          "application/json": {
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ProductOfferingPrice"
              }
            },
            "examples": {
              "ProductOfferingPrice_list_example": {
                "$ref": "#/components/examples/ProductOfferingPrice_list_example_response"
              }
            }
          }
        }
      },
      "200ProductOfferingPrice_Get": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductOfferingPrice"
            },
            "examples": {
              "ProductOfferingPrice_retrieve_example": {
                "$ref": "#/components/examples/ProductOfferingPrice_retrieve_example_response"
              }
            }
          }
        }
      },
      "200ProductOfferingPrice_Patch": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductOfferingPrice"
            },
            "examples": {
              "Product_Offering_Price_Update_Implicit_Merge_example": {
                "$ref": "#/components/examples/Product_Offering_Price_Update_Implicit_Merge_example_response"
              }
            }
          },
          "application/merge-patch+json": {
            "schema": {
              "$ref": "#/components/schemas/ProductOfferingPrice"
            },
            "examples": {
              "Product_Offering_Price_Update_Patch_Merge_example": {
                "$ref": "#/components/examples/Product_Offering_Price_Update_Patch_Merge_example_response"
              }
            }
          },
          "application/json-patch+json": {
            "schema": {
              "oneOf": [
                {
                  "$ref": "#/components/schemas/ProductOfferingPrice"
                },
                {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ProductOfferingPrice"
                  }
                },
                {
                  "type": "string",
                  "nullable": true
                }
              ]
            },
            "examples": {
              "Product_Offering_Price_Update_JSON_Patch": {
                "$ref": "#/components/examples/Product_Offering_Price_Update_JSON_Patch_response"
              }
            }
          },
          "application/json-patch-query+json": {
            "schema": {
              "oneOf": [
                {
                  "$ref": "#/components/schemas/ProductOfferingPrice"
                },
                {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ProductOfferingPrice"
                  }
                },
                {
                  "type": "string",
                  "nullable": true
                }
              ]
            },
            "examples": {
              "Product_Offering_Price_Update_JSON_Patch_Query": {
                "$ref": "#/components/examples/Product_Offering_Price_Update_JSON_Patch_Query_response"
              }
            }
          }
        }
      },
      "201ProductOfferingPrice": {
        "description": "OK/Created",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductOfferingPrice"
            },
            "examples": {
              "Product_Offering_Price_Create_example": {
                "$ref": "#/components/examples/Product_Offering_Price_Create_example_response"
              }
            }
          }
        }
      },
      "200ProductSpecificationArray": {
        "description": "Success",
        "headers": {
          "X-Total-Count": {
            "$ref": "#/components/headers/X-Total-Count"
          },
          "X-Result-Count": {
            "$ref": "#/components/headers/X-Result-Count"
          }
        },
        "content": {
          "application/json": {
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ProductSpecification"
              }
            },
            "examples": {
              "ProductSpecification_list_example": {
                "$ref": "#/components/examples/ProductSpecification_list_example_response"
              }
            }
          }
        }
      },
      "200ProductSpecification_Get": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductSpecification"
            },
            "examples": {
              "ProductSpecification_retrieve_example": {
                "$ref": "#/components/examples/ProductSpecification_retrieve_example_response"
              }
            }
          }
        }
      },
      "200ProductSpecification_Patch": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductSpecification"
            },
            "examples": {
              "Product_Specification_Update_Implicit_Merge_example": {
                "$ref": "#/components/examples/Product_Specification_Update_Implicit_Merge_example_response"
              }
            }
          },
          "application/merge-patch+json": {
            "schema": {
              "$ref": "#/components/schemas/ProductSpecification"
            },
            "examples": {
              "Product_Specification_Update_Patch_Merge_example": {
                "$ref": "#/components/examples/Product_Specification_Update_Patch_Merge_example_response"
              }
            }
          },
          "application/json-patch+json": {
            "schema": {
              "oneOf": [
                {
                  "$ref": "#/components/schemas/ProductSpecification"
                },
                {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ProductSpecification"
                  }
                },
                {
                  "type": "string",
                  "nullable": true
                }
              ]
            },
            "examples": {
              "Product_Specification_Update_JSON_Patch": {
                "$ref": "#/components/examples/Product_Specification_Update_JSON_Patch_response"
              }
            }
          },
          "application/json-patch-query+json": {
            "schema": {
              "oneOf": [
                {
                  "$ref": "#/components/schemas/ProductSpecification"
                },
                {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ProductSpecification"
                  }
                },
                {
                  "type": "string",
                  "nullable": true
                }
              ]
            },
            "examples": {
              "Product_Specification_Update_JSON_Patch_Query": {
                "$ref": "#/components/examples/Product_Specification_Update_JSON_Patch_Query_response"
              }
            }
          }
        }
      },
      "201ProductSpecification": {
        "description": "OK/Created",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ProductSpecification"
            },
            "examples": {
              "Product_Specification_Create_example": {
                "$ref": "#/components/examples/Product_Specification_Create_example_response"
              },
              "Product_Specification_Create_example_with_intent": {
                "$ref": "#/components/examples/Product_Specification_Create_example_with_intent_response"
              }
            }
          }
        }
      },
      "200ImportJobArray": {
        "description": "Success",
        "headers": {
          "X-Total-Count": {
            "$ref": "#/components/headers/X-Total-Count"
          },
          "X-Result-Count": {
            "$ref": "#/components/headers/X-Result-Count"
          }
        },
        "content": {
          "application/json": {
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ImportJob"
              }
            },
            "examples": {
              "ImportJob_list_example": {
                "$ref": "#/components/examples/ImportJob_list_example_response"
              }
            }
          }
        }
      },
      "200ImportJob_Get": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ImportJob"
            },
            "examples": {
              "ImportJob_retrieve_example": {
                "$ref": "#/components/examples/ImportJob_retrieve_example_response"
              }
            }
          }
        }
      },
      "200ImportJob_Patch": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ImportJob"
            }
          },
          "application/merge-patch+json": {
            "schema": {
              "$ref": "#/components/schemas/ImportJob"
            }
          },
          "application/json-patch+json": {
            "schema": {
              "oneOf": [
                {
                  "$ref": "#/components/schemas/ImportJob"
                },
                {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ImportJob"
                  }
                },
                {
                  "type": "string",
                  "nullable": true
                }
              ]
            }
          },
          "application/json-patch-query+json": {
            "schema": {
              "oneOf": [
                {
                  "$ref": "#/components/schemas/ImportJob"
                },
                {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ImportJob"
                  }
                },
                {
                  "type": "string",
                  "nullable": true
                }
              ]
            }
          }
        }
      },
      "201ImportJob": {
        "description": "OK/Created",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ImportJob"
            },
            "examples": {
              "Import_Job_Create_example": {
                "$ref": "#/components/examples/Import_Job_Create_example_response"
              }
            }
          }
        }
      },
      "200ExportJobArray": {
        "description": "Success",
        "headers": {
          "X-Total-Count": {
            "$ref": "#/components/headers/X-Total-Count"
          },
          "X-Result-Count": {
            "$ref": "#/components/headers/X-Result-Count"
          }
        },
        "content": {
          "application/json": {
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ExportJob"
              }
            },
            "examples": {
              "ExportJob_list_example": {
                "$ref": "#/components/examples/ExportJob_list_example_response"
              }
            }
          }
        }
      },
      "200ExportJob_Get": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ExportJob"
            },
            "examples": {
              "ExportJob_retrieve_example": {
                "$ref": "#/components/examples/ExportJob_retrieve_example_response"
              }
            }
          }
        }
      },
      "200ExportJob_Patch": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ExportJob"
            }
          },
          "application/merge-patch+json": {
            "schema": {
              "$ref": "#/components/schemas/ExportJob"
            }
          },
          "application/json-patch+json": {
            "schema": {
              "oneOf": [
                {
                  "$ref": "#/components/schemas/ExportJob"
                },
                {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ExportJob"
                  }
                },
                {
                  "type": "string",
                  "nullable": true
                }
              ]
            }
          },
          "application/json-patch-query+json": {
            "schema": {
              "oneOf": [
                {
                  "$ref": "#/components/schemas/ExportJob"
                },
                {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/ExportJob"
                  }
                },
                {
                  "type": "string",
                  "nullable": true
                }
              ]
            }
          }
        }
      },
      "201ExportJob": {
        "description": "OK/Created",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ExportJob"
            },
            "examples": {
              "Export_Job_Create_example": {
                "$ref": "#/components/examples/Export_Job_Create_example_response"
              }
            }
          }
        }
      },
      "Error": {
        "description": "Error",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/Error"
            }
          }
        }
      },
      "Hub": {
        "description": "Notified",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/Hub"
            }
          }
        }
      }
    },
    "headers": {
      "X-Total-Count": {
        "description": "Total number of items matching criteria",
        "schema": {
          "type": "integer"
        }
      },
      "X-Result-Count": {
        "description": "Actual number of items returned in the response body",
        "schema": {
          "type": "integer"
        }
      }
    },
    "securitySchemes": {},
    "examples": {
      "ProductCatalog_list_example_response": {
        "value": [
          {
            "id": "2027",
            "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/Catalog/2027",
            "name": "IoT Product Catalog",
            "description": "This catalog describes Product Offerings and technical specifications intended to address the IoT products.",
            "catalogType": "ProductCatalog",
            "version": "2.0",
            "validFor": {
              "startDateTime": "2020-09-29T00:00:00Z",
              "endDateTime": "2024-09-25T00:00:00Z"
            },
            "lastUpdate": "2020-10-27T00:00:00Z",
            "lifecycleStatus": "Active",
            "relatedParty": [
              {
                "role": "vendor",
                "@type": "RelatedPartyRefOrPartyRoleRef",
                "partyOrPartyRole": {
                  "id": "3426",
                  "href": "https://mycsp.com:8080/tmf-api/partyManagement/v5/organization/3426",
                  "name": "Broadly Broad Ltd",
                  "@type": "PartyRef",
                  "@referredType": "Organization"
                }
              },
              {
                "role": "Reviser",
                "@type": "RelatedPartyRefOrPartyRoleRef",
                "partyOrPartyRole": {
                  "id": "115566",
                  "href": "https://mycsp.com:8080/tmf-api/partyManagement/v5/individual/115566",
                  "name": "Roger Collins",
                  "@type": "PartyRef",
                  "@referredType": "Individual"
                }
              }
            ],
            "category": [
              {
                "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/2129",
                "id": "2129",
                "name": "iotProducts",
                "version": "1.0",
                "@referredType": "Category",
                "@type": "CategoryRef"
              }
            ],
            "@type": "Catalog"
          },
          {
            "id": "3830",
            "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/Catalog/3830",
            "name": "Catalog Wholesale Business",
            "description": "This catalog describes Product Offerings and technical specifications intended to address the wholesale business segment.",
            "catalogType": "ProductCatalog",
            "version": "1.0",
            "validFor": {
              "startDateTime": "2020-08-29T00:00:00Z",
              "endDateTime": "2024-03-25T00:00:00Z"
            },
            "lastUpdate": "2020-08-27T00:00:00Z",
            "lifecycleStatus": "Active",
            "relatedParty": [
              {
                "role": "vendor",
                "@type": "RelatedPartyRefOrPartyRoleRef",
                "partyOrPartyRole": {
                  "id": "3426",
                  "href": "https://mycsp.com:8080/tmf-api/partyManagement/v5/organization/3426",
                  "name": "Broadly Broad Ltd",
                  "@type": "PartyRef",
                  "@referredType": "Organization"
                }
              },
              {
                "role": "Reviser",
                "@type": "RelatedPartyRefOrPartyRoleRef",
                "partyOrPartyRole": {
                  "id": "115566",
                  "href": "https://mycsp.com:8080/tmf-api/partyManagement/v5/individual/115566",
                  "name": "Roger Collins",
                  "@type": "PartyRef",
                  "@referredType": "Individual"
                }
              }
            ],
            "category": [
              {
                "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/7757",
                "id": "7757",
                "name": "business",
                "version": "1.0",
                "@referredType": "Category",
                "@type": "CategoryRef"
              }
            ],
            "@type": "Catalog"
          }
        ],
        "description": "Here is an example of a response for retrieving multiple catalogs."
      },
      "ProductCatalog_retrieve_example_response": {
        "value": {
          "id": "3830",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/Catalog/3830",
          "name": "Catalog Wholesale Business",
          "description": "This catalog describes Product Offerings and technical specifications intended to address the wholesale business segment.",
          "catalogType": "ProductCatalog",
          "version": "1.0",
          "validFor": {
            "startDateTime": "2020-08-29T00:00:00Z",
            "endDateTime": "2024-03-25T00:00:00Z"
          },
          "lastUpdate": "2020-08-27T00:00:00Z",
          "lifecycleStatus": "Active",
          "relatedParty": [
            {
              "role": "vendor",
              "@type": "RelatedPartyRefOrPartyRoleRef",
              "partyOrPartyRole": {
                "id": "3426",
                "href": "https://mycsp.com:8080/tmf-api/partyManagement/v5/organization/3426",
                "name": "Broadly Broad Ltd",
                "@type": "PartyRef",
                "@referredType": "Organization"
              }
            },
            {
              "role": "Reviser",
              "@type": "RelatedPartyRefOrPartyRoleRef",
              "partyOrPartyRole": {
                "id": "115566",
                "href": "https://mycsp.com:8080/tmf-api/partyManagement/v5/individual/115566",
                "name": "Roger Collins",
                "@type": "PartyRef",
                "@referredType": "Individual"
              }
            }
          ],
          "category": [
            {
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/7757",
              "id": "7757",
              "name": "business",
              "version": "1.0",
              "@referredType": "Category",
              "@type": "CategoryRef"
            }
          ],
          "@type": "Catalog"
        },
        "description": "Here is an example of a response for retrieving a specific catalog."
      },
      "Category_list_example_response": {
        "value": [
          {
            "id": "1708",
            "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/Category/1708",
            "name": "Cloud Services",
            "description": "A category to hold all available cloud service offers",
            "version": "1.0",
            "validFor": {
              "startDateTime": "2020-08-24T00:00:00Z",
              "endDateTime": "2024-03-25T00:00:00Z"
            },
            "lifecycleStatus": "Active",
            "lastUpdate": "2020-08-27T00:00:00Z",
            "isRoot": true,
            "subCategory": [
              {
                "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/6086",
                "id": "6086",
                "name": "Cloud Storage",
                "version": "1.0",
                "@referredType": "Category",
                "@type": "CategoryRef"
              },
              {
                "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/6087",
                "id": "6087",
                "name": "Software as a Service",
                "version": "2.0",
                "@referredType": "Category",
                "@type": "CategoryRef"
              }
            ],
            "productOffering": [
              {
                "id": "7655",
                "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOffering/7655",
                "name": "Hosted Basic Firewall for business",
                "@referredType": "ProductOffering",
                "@type": "ProductOfferingRef"
              }
            ],
            "@type": "Category"
          },
          {
            "id": "3435",
            "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/Category/3435",
            "name": "Business Services",
            "description": "A category to hold all available Business service offers",
            "version": "1.0",
            "validFor": {
              "startDateTime": "2020-08-24T00:00:00Z"
            },
            "lifecycleStatus": "Active",
            "isRoot": false,
            "parent": {
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/1708",
              "id": "1708",
              "name": "Services",
              "version": "1.0",
              "@referredType": "Category",
              "@type": "CategoryRef"
            },
            "lastUpdate": "2020-08-27T00:00:00Z",
            "subCategory": [
              {
                "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/3466",
                "id": "3466",
                "name": "Managed Services",
                "version": "1.0",
                "@referredType": "Category",
                "@type": "CategoryRef"
              },
              {
                "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/3467",
                "id": "3467",
                "name": "Mobile for Corporates",
                "version": "1.0",
                "@referredType": "Category",
                "@type": "CategoryRef"
              }
            ],
            "productOffering": [],
            "@type": "Category"
          }
        ],
        "description": "Here is an example of a request for retrieving multiple categories."
      },
      "Category_retrieve_example_response": {
        "value": {
          "id": "1708",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/Category/1708",
          "name": "Cloud Services",
          "description": "A category to hold all available cloud service offers",
          "version": "1.0",
          "validFor": {
            "startDateTime": "2020-08-24T00:00:00Z",
            "endDateTime": "2024-03-25T00:00:00Z"
          },
          "lifecycleStatus": "Active",
          "lastUpdate": "2020-08-27T00:00:00Z",
          "isRoot": true,
          "subCategory": [
            {
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/6086",
              "id": "6086",
              "name": "Cloud Storage",
              "version": "1.0",
              "@referredType": "Category",
              "@type": "CategoryRef"
            },
            {
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/6087",
              "id": "6087",
              "name": "Software as a Service",
              "version": "2.0",
              "@referredType": "Category",
              "@type": "CategoryRef"
            }
          ],
          "productOffering": [
            {
              "id": "7655",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOffering/7655",
              "name": "Hosted Basic Firewall for business",
              "@referredType": "ProductOffering",
              "@type": "ProductOfferingRef"
            }
          ],
          "@type": "Category"
        },
        "description": "Here is an example of a request for retrieving a specific category."
      },
      "ProductOffering_list_example_response": {
        "value": [
          {
            "id": "7655",
            "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOffering/7655",
            "name": "Basic Firewall for Business",
            "description": "This product offering suggests a firewall service that can be deployed in business customer premise.",
            "version": "2.1",
            "validFor": {
              "startDateTime": "2020-09-23T00:00:00Z",
              "endDateTime": "2021-08-25T00:00:00Z"
            },
            "lastUpdate": "2020-09-27T00:00:00Z",
            "lifecycleStatus": "Active",
            "isBundle": false,
            "isSellable": true,
            "statusReason": "Released for sale",
            "place": [
              {
                "id": "9979",
                "href": "https://mycsp.com:8080/tmf-api/geographicAddressManagement/v5/geographicAddress/9979",
                "name": "San Francisco Bay Area",
                "@referredType": "GeographicAddress",
                "@type": "PlaceRef"
              }
            ],
            "serviceLevelAgreement": {
              "id": "8082",
              "href": "https://mycsp.com:8080/tmf-api/slaManagement/v5/sla/8082",
              "name": "Gold SLA for Business",
              "@referredType": "ServiceLevelAgreement",
              "@type": "ServiceLevelAgreementRef"
            },
            "productSpecification": {
              "id": "9881",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/9881",
              "version": "1.1",
              "name": "Robotics999",
              "@referredType": "ProductSpecification",
              "@type": "ProductSpecificationRef"
            },
            "channel": [
              {
                "id": "4406",
                "href": "https://mycsp.com:8080/tmf-api/salesChannelManagement/v5/channel/4406",
                "name": "Online Channel",
                "@referredType": "SalesChannel",
                "@type": "ChannelRef"
              }
            ],
            "serviceCandidate": {
              "id": "8167",
              "href": "https://mycsp.com:8080/tmf-api/serviceCatalogManagement/v5/serviceCandidate/8167",
              "version": "1.0",
              "name": "Mega Max",
              "@referredType": "ServiceCandidate",
              "@type": "ServiceCandidateRef"
            },
            "category": [
              {
                "id": "2646",
                "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/2646",
                "version": "2.0",
                "name": "Cloud",
                "@referredType": "Category",
                "@type": "CategoryRef"
              }
            ],
            "resourceCandidate": {
              "id": "8937",
              "href": "https://mycsp.com:8080/tmf-api/resourceCatalogManagement/v5/resourceCandidate/8937",
              "name": "Mega Band",
              "@referredType": "ResourceCandidate",
              "@type": "ResourceCandidateRef"
            },
            "productOfferingTerm": [
              {
                "name": "New Client Condition",
                "description": "This product offering term is for new client at fix duration of less than a year",
                "duration": {
                  "amount": 12,
                  "units": "Month"
                },
                "validFor": {
                  "startDateTime": "2020-09-23T00:00:00Z",
                  "endDateTime": "2021-09-23T00:00:00Z"
                },
                "@type": "ProductOfferingTerm"
              }
            ],
            "productOfferingPrice": [
              {
                "id": "1747",
                "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOfferingPrice/1747",
                "name": "Recurring Monthly Price for Business Firewall",
                "@referredType": "ProductOfferingPrice",
                "@type": "ProductOfferingPrice"
              }
            ],
            "agreement": [
              {
                "id": "5537",
                "href": "https://mycsp.com:8080/tmf-api/agreementManagement/v5/agreement/5537",
                "name": "Moon",
                "@referredType": "Agreement",
                "@type": "AgreementRef"
              }
            ],
            "attachment": [
              {
                "description": "This attachment gives a block diagram of the firewall.",
                "href": "https://mycsp.com:8080/tmf-api/documentManagement/v5/attachment/22",
                "mimeType": "image/jpeg",
                "id": "22",
                "url": "https://mycsp.com:7070/docloader?docnum=3534536",
                "@referredType": "Attachment",
                "@type": "AttachmentRefOrValue"
              }
            ],
            "marketSegment": [
              {
                "id": "1266",
                "href": "https://mycsp.com:8080/tmf-api/productOfferingReferences/v5/marketSegment/1266",
                "name": "North Region",
                "@referredType": "MarketSegment",
                "@type": "MarketSegmentRef"
              }
            ],
            "bundledProductOffering": [],
            "productOfferingRelationship": [
              {
                "id": "331",
                "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOffering/331",
                "relationshipType": "DependsOn",
                "validFor": {
                  "startDateTime": "2020-09-23T16:42:23Z"
                },
                "role": "A-Role",
                "name": "Carrier Grade NAT",
                "@referredType": "ProductOffering",
                "@type": "ProductOfferingRelationship"
              }
            ],
            "prodSpecCharValueUse": [
              {
                "name": "Number of Ports",
                "id": "3331",
                "description": "The total Number of Ports for this product",
                "valueType": "number",
                "minCardinality": 1,
                "maxCardinality": 1,
                "validFor": {
                  "startDateTime": "2020-09-23T00:00:00Z",
                  "endDateTime": "2021-09-23T00:00:00Z"
                },
                "@type": "ProductSpecificationCharacteristicValueUse",
                "productSpecCharacteristicValue": [
                  {
                    "isDefault": true,
                    "valueType": "number",
                    "validFor": {
                      "startDateTime": "2020-09-23T00:00:00Z",
                      "endDateTime": "2021-09-23T00:00:00Z"
                    },
                    "value": 8,
                    "@type": "NumberCharacteristicValueSpecification"
                  },
                  {
                    "isDefault": false,
                    "valueType": "number",
                    "validFor": {
                      "startDateTime": "2020-09-23T00:00:00Z",
                      "endDateTime": "2021-09-23T00:00:00Z"
                    },
                    "value": 16,
                    "@type": "NumberCharacteristicValueSpecification"
                  }
                ],
                "productSpecification": {
                  "id": "9881",
                  "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/9881",
                  "version": "1.1",
                  "name": "Robotics999",
                  "@referredType": "ProductSpecification",
                  "@type": "ProductSpecificationRef"
                }
              }
            ],
            "@type": "ProductOffering"
          },
          {
            "id": "2909",
            "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOffering/2909",
            "name": "Enhanced Broadband for business",
            "description": "This product offering suggesting broadband with high speed bandwidth that can be deployed in business customer premise.",
            "version": "1.0",
            "validFor": {
              "startDateTime": "2020-08-25T00:00:00Z",
              "endDateTime": "2021-08-25T00:00:00Z"
            },
            "lastUpdate": "2020-08-27T00:00:00Z",
            "lifecycleStatus": "Active",
            "isBundle": false,
            "isSellable": true,
            "statusReason": "None",
            "place": [
              {
                "id": "2927",
                "href": "https://mycsp.com:8080/tmf-api/geographicAddressManagement/v5/geographicAddress/2927",
                "name": "Toronto",
                "@referredType": "GeographicAddress",
                "@type": "PlaceRef"
              }
            ],
            "serviceLevelAgreement": {
              "id": "8082",
              "href": "https://mycsp.com:8080/tmf-api/slaManagement/v5/sla/8082",
              "name": "Gold SLA for Business",
              "@referredType": "ServiceLevelAgreement",
              "@type": "ServiceLevelAgreementRef"
            },
            "productSpecification": {
              "id": "5843",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/5843",
              "version": "1.0",
              "name": "Enhanced Broadband PS",
              "@referredType": "ProductSpecification",
              "@type": "ProductSpecificationRef"
            },
            "channel": [
              {
                "id": "4406",
                "href": "https://mycsp.com:8080/tmf-api/salesChannelManagement/v5/channel/4406",
                "name": "Online Channel",
                "@referredType": "SalesChannel",
                "@type": "ChannelRef"
              }
            ],
            "category": [
              {
                "id": "5051",
                "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/5051",
                "version": "2.0",
                "name": "WiredServices",
                "@referredType": "Category",
                "@type": "CategoryRef"
              }
            ],
            "productOfferingTerm": [
              {
                "name": "3-year term",
                "description": "This product offering term is for a 3-year plan agreement",
                "duration": {
                  "amount": 36,
                  "units": "Month"
                },
                "validFor": {
                  "startDateTime": "2020-09-23T00:00:00Z",
                  "endDateTime": "2023-09-23T00:00:00Z"
                },
                "@type": "ProductOfferingTerm"
              }
            ],
            "productOfferingPrice": [
              {
                "id": "1103",
                "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOfferingPrice/1103",
                "name": "Recurring Monthly Price",
                "@referredType": "ProductOfferingPrice",
                "@type": "ProductOfferingPrice"
              }
            ],
            "agreement": [
              {
                "id": "5557",
                "href": "https://mycsp.com:8080/tmf-api/agreementManagement/v5/agreement/5557",
                "name": "Service Contract",
                "@referredType": "Agreement",
                "@type": "AgreementRef"
              }
            ],
            "attachment": [
              {
                "description": "This attachment gives a block diagram of the firewall.",
                "href": "https://mycsp.com:8080/tmf-api/documentManagement/v5/attachment/2213",
                "mimeType": "image/jpeg",
                "id": "2213",
                "url": "https://mycsp.com:7070/docloader?docnum=3531741",
                "@referredType": "Attachment",
                "@type": "AttachmentRefOrValue"
              }
            ],
            "marketSegment": [],
            "bundledProductOffering": [],
            "productOfferingRelationship": [],
            "prodSpecCharValueUse": [
              {
                "name": "Bandwidth",
                "description": "The total Number of Mbps for this product",
                "id": "1907",
                "valueType": "number",
                "minCardinality": 1,
                "maxCardinality": 1,
                "validFor": {
                  "startDateTime": "2020-09-23T00:00:00Z",
                  "endDateTime": "2021-09-23T00:00:00Z"
                },
                "@type": "ProductSpecificationCharacteristicValueUse",
                "productSpecCharacteristicValue": [
                  {
                    "isDefault": true,
                    "valueType": "number",
                    "validFor": {
                      "startDateTime": "2020-09-23T00:00:00Z",
                      "endDateTime": "2021-09-23T00:00:00Z"
                    },
                    "value": 1000,
                    "@type": "NumberCharacteristicValueSpecification"
                  },
                  {
                    "isDefault": false,
                    "valueType": "number",
                    "validFor": {
                      "startDateTime": "2020-09-23T00:00:00Z",
                      "endDateTime": "2021-09-23T00:00:00Z"
                    },
                    "value": 2000,
                    "@type": "NumberCharacteristicValueSpecification"
                  }
                ],
                "productSpecification": {
                  "id": "5843",
                  "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/5843",
                  "version": "1.0",
                  "name": "Enhanced Broadband PS",
                  "@referredType": "ProductSpecification",
                  "@type": "ProductSpecificationRef"
                }
              }
            ],
            "@type": "ProductOffering"
          }
        ],
        "description": "Here is an example of a request for retrieving multiple offerings."
      },
      "ProductOffering_retrieve_example_response": {
        "value": {
          "id": "7655",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOffering/7655",
          "name": "Basic Firewall for Business",
          "description": "This product offering suggests a firewall service that can be deployed in business customer premise.",
          "version": "2.1",
          "validFor": {
            "startDateTime": "2020-09-23T00:00:00Z",
            "endDateTime": "2021-08-25T00:00:00Z"
          },
          "lastUpdate": "2020-09-27T00:00:00Z",
          "lifecycleStatus": "Active",
          "isBundle": false,
          "isSellable": true,
          "statusReason": "Released for sale",
          "place": [
            {
              "id": "9979",
              "href": "https://mycsp.com:8080/tmf-api/geographicAddressManagement/v5/geographicAddress/9979",
              "name": "San Francisco Bay Area",
              "@referredType": "GeographicAddress",
              "@type": "PlaceRef"
            }
          ],
          "serviceLevelAgreement": {
            "id": "8082",
            "href": "https://mycsp.com:8080/tmf-api/slaManagement/v5/sla/8082",
            "name": "Gold SLA for Business",
            "@referredType": "ServiceLevelAgreement",
            "@type": "ServiceLevelAgreementRef"
          },
          "productSpecification": {
            "id": "9881",
            "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/9881",
            "version": "1.1",
            "name": "Robotics999",
            "@referredType": "ProductSpecification",
            "@type": "ProductSpecificationRef"
          },
          "channel": [
            {
              "id": "4406",
              "href": "https://mycsp.com:8080/tmf-api/salesChannelManagement/v5/channel/4406",
              "name": "Online Channel",
              "@referredType": "Channel",
              "@type": "ChannelRef"
            }
          ],
          "serviceCandidate": {
            "id": "8167",
            "href": "https://mycsp.com:8080/tmf-api/serviceCatalogManagement/v5/serviceCandidate/8167",
            "version": "1.0",
            "name": "Mega Max",
            "@referredType": "ServiceCandidate",
            "@type": "ServiceCandidateRef"
          },
          "category": [
            {
              "id": "2646",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/2646",
              "version": "2.0",
              "name": "Cloud",
              "@referredType": "Category",
              "@type": "CategoryRef"
            }
          ],
          "resourceCandidate": {
            "id": "8937",
            "href": "https://mycsp.com:8080/tmf-api/resourceCatalogManagement/v5/resourceCandidate/8937",
            "name": "Mega Band",
            "@referredType": "ResourceCandidate",
            "@type": "ResourceCandidateRef"
          },
          "productOfferingTerm": [
            {
              "name": "New Client Condition",
              "description": "This product offering term is for new client at fix duration of less than a year",
              "duration": {
                "amount": 12,
                "units": "Month"
              },
              "validFor": {
                "startDateTime": "2020-09-23T00:00:00Z",
                "endDateTime": "2021-09-23T00:00:00Z"
              },
              "@type": "ProductOfferingTerm"
            }
          ],
          "productOfferingPrice": [
            {
              "id": "1747",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOfferingPrice/1747",
              "name": "Recurring Monthly Price for Business Firewall",
              "@referredType": "ProductOfferingPrice",
              "@type": "ProductOfferingPrice"
            }
          ],
          "agreement": [
            {
              "id": "5537",
              "href": "https://mycsp.com:8080/tmf-api/agreementManagement/v5/agreement/5537",
              "name": "Moon",
              "@referredType": "Agreement",
              "@type": "AgreementRef"
            }
          ],
          "attachment": [
            {
              "description": "This attachment gives a block diagram of the firewall.",
              "href": "https://mycsp.com:8080/tmf-api/documentManagement/v5/attachment/22",
              "mimeType": "image/jpeg",
              "id": "22",
              "url": "https://mycsp.com:7070/docloader?docnum=3534536",
              "@referredType": "Attachment",
              "@type": "AttachmentRefOrValue"
            }
          ],
          "marketSegment": [
            {
              "id": "1266",
              "href": "https://mycsp.com:8080/tmf-api/productOfferingReferences/v5/marketSegment/1266",
              "name": "North Region",
              "@referredType": "MarketSegment",
              "@type": "MarketSegmentRef"
            }
          ],
          "bundledProductOffering": [],
          "productOfferingRelationship": [
            {
              "id": "331",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOffering/331",
              "relationshipType": "DependsOn",
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z"
              },
              "role": "A-Role",
              "name": "Carrier Grade NAT",
              "@referredType": "ProductOffering",
              "@type": "ProductOfferingRelationship"
            }
          ],
          "prodSpecCharValueUse": [
            {
              "name": "Number of Ports",
              "id": "3331",
              "description": "The total Number of Ports for this product",
              "valueType": "number",
              "minCardinality": 1,
              "maxCardinality": 1,
              "validFor": {
                "startDateTime": "2020-09-23T00:00:00Z",
                "endDateTime": "2021-09-23T00:00:00Z"
              },
              "@type": "ProductSpecificationCharacteristicValueUse",
              "productSpecCharacteristicValue": [
                {
                  "isDefault": true,
                  "valueType": "number",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2021-09-23T00:00:00Z"
                  },
                  "value": 8,
                  "@type": "NumberCharacteristicValueSpecification"
                },
                {
                  "isDefault": false,
                  "valueType": "number",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2021-09-23T00:00:00Z"
                  },
                  "value": 16,
                  "@type": "NumberCharacteristicValueSpecification"
                }
              ],
              "productSpecification": {
                "id": "9881",
                "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/9881",
                "version": "1.1",
                "name": "Robotics999",
                "@referredType": "ProductSpecification",
                "@type": "ProductSpecificationRef"
              }
            }
          ],
          "@type": "ProductOffering"
        },
        "description": "Here is an example of a request for retrieving a specific offering."
      },
      "ProductOfferingPrice_list_example_response": {
        "value": [
          {
            "id": "1747",
            "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOfferingPrice/1747",
            "name": "Recurring Charge for Business Firewall",
            "description": "This pricing describes the recurring charge for a firewall service that can be deployed in business customer premise.",
            "version": "2.0",
            "validFor": {
              "startDateTime": "2020-09-22T00:00:00Z",
              "endDateTime": "2021-09-22T00:00:00Z"
            },
            "priceType": "recurring",
            "recurringChargePeriodType": "monthly",
            "recurringChargePeriodLength": 1,
            "lastUpdate": "2020-09-23T00:00:00Z",
            "isBundle": false,
            "lifecycleStatus": "Active",
            "unitOfMeasure": {
              "amount": 1,
              "units": "Month"
            },
            "price": {
              "unit": "EUR",
              "value": 50
            },
            "percentage": 0,
            "productOfferingTerm": [
              {
                "name": "12 Month",
                "description": "12 month contract",
                "duration": {
                  "amount": 12,
                  "units": "Month"
                },
                "validFor": {
                  "startDateTime": "2020-09-22T16:42:23Z",
                  "endDateTime": "2021-09-22T00:00:00Z"
                },
                "@type": "ProductOfferingTerm"
              }
            ],
            "place": [
              {
                "id": "2707",
                "href": "https://mycsp.com:8080/tmf-api/geographicAddressManagement/v5/geographicAddress/2707",
                "name": "San Francisco Bay Area",
                "@referredType": "GeographicAddress",
                "@type": "PlaceRef"
              }
            ],
            "policy": [
              {
                "@referredType": "Policy",
                "name": "PriceRuleNo1",
                "id": "2503",
                "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/policy/2503",
                "@type": "PolicyRef"
              }
            ],
            "pricingLogicAlgorithm": [
              {
                "id": "2777",
                "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/PricingLogicAlgorithm/2777",
                "name": "RecurringRatingPLA",
                "description": "Algorithm that rates Recurring event",
                "plaSpecId": "2801",
                "validFor": {
                  "startDateTime": "2020-09-22T16:42:23Z",
                  "endDateTime": "2021-09-22T00:00:00Z"
                },
                "@type": "PricingLogicAlgorithm"
              }
            ],
            "tax": [
              {
                "taxAmount": {
                  "unit": "EUR",
                  "value": 10
                },
                "taxCategory": "VAT",
                "taxRate": 20,
                "@type": "TaxItem"
              }
            ],
            "popRelationship": [
              {
                "id": "1741",
                "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOfferingPrice/1741",
                "relationshipType": "discountedBy",
                "validFor": {
                  "startDateTime": "2020-09-23T16:42:23Z",
                  "endDateTime": "2021-09-22T00:00:00Z"
                },
                "role": "A-Charge",
                "@referredType": "ProductOfferingPriceAlteration",
                "@type": "ProductOfferingPriceRelationship"
              }
            ],
            "@type": "ProductOfferingPrice"
          },
          {
            "id": "1741",
            "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOfferingPrice/1741",
            "name": "discount for Business Firewall",
            "description": "This pricing describes the discount for a firewall service that can be deployed in business customer premise.",
            "version": "1.0",
            "validFor": {
              "startDateTime": "2020-09-22T00:00:00Z",
              "endDateTime": "2021-09-22T00:00:00Z"
            },
            "priceType": "discount",
            "recurringChargePeriodType": "monthly",
            "recurringChargePeriodLength": 1,
            "lastUpdate": "2020-11-24T00:00:00Z",
            "isBundle": false,
            "lifecycleStatus": "Active",
            "unitOfMeasure": {
              "amount": 1,
              "units": "Month"
            },
            "applicationDuration": {
              "amount": 12,
              "units": "Month"
            },
            "price": {},
            "percentage": 10,
            "priority": 1,
            "productOfferingTerm": [],
            "place": [
              {
                "id": "2707",
                "href": "https://mycsp.com:8080/tmf-api/geographicAddressManagement/v5/geographicAddress/2707",
                "name": "San Francisco Bay Area",
                "@referredType": "GeographicAddress",
                "@type": "PlaceRef"
              }
            ],
            "policy": [
              {
                "@referredType": "Policy",
                "name": "PriceRuleNo1",
                "id": "2503",
                "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/policy/2503",
                "@type": "PolicyRef"
              }
            ],
            "pricingLogicAlgorithm": [],
            "tax": [],
            "popRelationship": [
              {
                "id": "2027",
                "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOfferingPrice/2027",
                "relationshipType": "relyOn",
                "validFor": {
                  "startDateTime": "2020-09-23T16:42:23Z",
                  "endDateTime": "2021-09-22T00:00:00Z"
                },
                "role": "discountInstance",
                "@referredType": "ProductOfferingPriceAlterationTemplate",
                "@type": "ProductOfferingPriceRelationship"
              }
            ],
            "@type": "ProductOfferingPriceAlteration"
          }
        ],
        "description": "Here is an example of a request for retrieving multiple prices."
      },
      "ProductOfferingPrice_retrieve_example_response": {
        "value": {
          "id": "1747",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOfferingPrice/1747",
          "name": "Recurring Charge for Business Firewall",
          "description": "This pricing describes the recurring charge for a firewall service that can be deployed in business customer premise.",
          "version": "2.0",
          "validFor": {
            "startDateTime": "2020-09-22T00:00:00Z",
            "endDateTime": "2021-09-22T00:00:00Z"
          },
          "priceType": "recurring",
          "recurringChargePeriodType": "monthly",
          "recurringChargePeriodLength": 1,
          "lastUpdate": "2020-09-23T00:00:00Z",
          "isBundle": false,
          "lifecycleStatus": "Active",
          "unitOfMeasure": {
            "amount": 1,
            "units": "Month"
          },
          "price": {
            "unit": "EUR",
            "value": 50
          },
          "percentage": 0,
          "productOfferingTerm": [
            {
              "name": "12 Month",
              "description": "12 month contract",
              "duration": {
                "amount": 12,
                "units": "Month"
              },
              "validFor": {
                "startDateTime": "2020-09-22T16:42:23Z",
                "endDateTime": "2021-09-22T00:00:00Z"
              },
              "@type": "ProductOfferingTerm"
            }
          ],
          "place": [
            {
              "id": "2707",
              "href": "https://mycsp.com:8080/tmf-api/geographicAddressManagement/v5/geographicAddress/2707",
              "name": "San Francisco Bay Area",
              "@referredType": "GeographicAddress",
              "@type": "PlaceRef"
            }
          ],
          "policy": [
            {
              "@referredType": "Policy",
              "name": "PriceRuleNo1",
              "id": "2503",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/policy/2503",
              "@type": "PolicyRef"
            }
          ],
          "pricingLogicAlgorithm": [
            {
              "id": "2777",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/PricingLogicAlgorithm/2777",
              "name": "RecurringRatingPLA",
              "description": "Algorithm that rates Recurring event",
              "plaSpecId": "2801",
              "validFor": {
                "startDateTime": "2020-09-22T16:42:23Z",
                "endDateTime": "2021-09-22T00:00:00Z"
              },
              "@type": "PricingLogicAlgorithm"
            }
          ],
          "tax": [
            {
              "taxAmount": {
                "unit": "EUR",
                "value": 10
              },
              "taxCategory": "VAT",
              "taxRate": 20,
              "@type": "TaxItem"
            }
          ],
          "popRelationship": [
            {
              "id": "1741",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOfferingPrice/1741",
              "relationshipType": "discountedBy",
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z",
                "endDateTime": "2021-09-22T00:00:00Z"
              },
              "role": "A-Charge",
              "@referredType": "ProductOfferingPriceAlteration",
              "@type": "ProductOfferingPriceRelationship"
            }
          ],
          "@type": "ProductOfferingPrice"
        },
        "description": "Here is an example of a request for retrieving a specific price."
      },
      "ProductSpecification_list_example_response": {
        "value": [
          {
            "id": "9881",
            "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/9881",
            "name": "Cisco Firepower NGFW",
            "brand": "Cisco",
            "productNumber": "CSC-340-NGFW",
            "description": "Powerful product that integrates with a firewall, including intrusion prevention, advanced malware protection, cloud-based sandboxing, URL filtering, endpoint protection, web gateway, email security, network traffic analysis, network access control and CASB.",
            "isBundle": true,
            "lastUpdate": "2020-09-23T16:42:23Z",
            "lifecycleStatus": "Active",
            "validFor": {
              "startDateTime": "2020-09-23T00:00:00Z",
              "endDateTime": "2022-11-24T16:42:23Z"
            },
            "version": "2.0",
            "relatedParty": [
              {
                "role": "Owner",
                "@type": "RelatedPartyRefOrPartyRoleRef",
                "partyOrPartyRole": {
                  "id": "1234",
                  "href": "https://mycsp.com:8080/tmf-api/partyManagement/v5/partyRole/1234",
                  "name": "Gustave Flaubert",
                  "@type": "PartyRef",
                  "@referredType": "Individual"
                }
              }
            ],
            "attachment": [
              {
                "id": "22",
                "href": "https://mycsp.com:8080/tmf-api/documentManagement/v5/attachment/22",
                "name": "Product Picture",
                "mimeType": "image/jpeg",
                "url": "https://mycsp.com:7070/docloader?docnum=774451234",
                "@referredType": "Attachment",
                "@type": "AttachmentRefOrValue"
              },
              {
                "id": "33",
                "href": "https://mycsp.com:8080/tmf-api/documentManagement/v5/attachment/22",
                "name": "Product Manual",
                "mimeType": "application/pdf",
                "url": "https://mycsp.com:7070/docloader?docnum=774454321",
                "@referredType": "Attachment",
                "@type": "AttachmentRefOrValue"
              }
            ],
            "bundledProductSpecification": [
              {
                "id": "15",
                "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/15",
                "name": "URL Filter",
                "@type": "BundledProductSpecification",
                "@baseType": "",
                "lifecycleStatus": "Active"
              },
              {
                "id": "64",
                "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/64",
                "name": "Malware Protector",
                "@type": "BundledProductSpecification",
                "@baseType": "",
                "lifecycleStatus": "Active"
              }
            ],
            "targetProductSchema": {
              "@type": "Firewall",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Product/Firewall.schema.json"
            },
            "productSpecificationRelationship": [
              {
                "id": "23",
                "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/23",
                "relationshipType": "OptionalFor",
                "validFor": {
                  "startDateTime": "2020-09-23T16:42:23Z"
                },
                "name": "DataPlan",
                "role": "A-Item",
                "@referredType": "ProductSpecification",
                "@type": "ProductSpecificationRelationship"
              }
            ],
            "serviceSpecification": [
              {
                "id": "22",
                "href": "https://mycsp.com:8080/tmf-api/serviceCatalogManagement/v5/serviceSpecification/22",
                "name": "Firewall",
                "version": "1.0",
                "@referredType": "ServiceSpecification",
                "@type": "ServiceSpecificationRef"
              }
            ],
            "resourceSpecification": [
              {
                "id": "63",
                "href": "https://mycsp.com:8080/tmf-api/resourceCatalogManagement/v5/resourceSpecification/63",
                "name": "Firewall Port",
                "version": "1.0",
                "@referredType": "PhysicalResourceSpecification",
                "@type": "ResourceSpecificationRef"
              }
            ],
            "productSpecCharacteristic": [
              {
                "name": "Number of Ports",
                "description": "The total Number of Ports for this product",
                "valueType": "number",
                "configurable": true,
                "minCardinality": 1,
                "maxCardinality": 1,
                "isUnique": true,
                "@type": "CharacteristicSpecification",
                "charSpecRelationship": [
                  {
                    "parentSpecificationId": "43",
                    "parentSpecificationHref": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/43",
                    "characteristicSpecificationId": "2",
                    "name": "Bandwidth",
                    "validFor": {
                      "startDateTime": "2020-09-23T16:42:23-04:00"
                    },
                    "@type": "CharacteristicSpecificationRelationship"
                  }
                ],
                "characteristicValueSpecification": [
                  {
                    "isDefault": true,
                    "valueType": "number",
                    "validFor": {
                      "startDateTime": "2020-09-23T00:00:00Z",
                      "endDateTime": "2022-11-24T00:00:00Z"
                    },
                    "value": "8",
                    "@type": "NumberCharacteristicValueSpecification"
                  },
                  {
                    "isDefault": false,
                    "valueType": "number",
                    "validFor": {
                      "startDateTime": "2020-09-23T00:00:00Z",
                      "endDateTime": "2022-11-24T00:00:00Z"
                    },
                    "value": "16",
                    "@type": "NumberCharacteristicValueSpecification"
                  },
                  {
                    "isDefault": false,
                    "valueType": "number",
                    "validFor": {
                      "startDateTime": "2020-09-23T00:00:00Z",
                      "endDateTime": "2022-11-24T00:00:00Z"
                    },
                    "value": "24",
                    "@type": "NumberCharacteristicValueSpecification"
                  }
                ],
                "validFor": {
                  "startDateTime": "2020-09-23T16:42:23Z"
                }
              },
              {
                "name": "Color",
                "description": "Color of the Firewall housing",
                "valueType": "string",
                "configurable": true,
                "minCardinality": 1,
                "maxCardinality": 1,
                "extensible": true,
                "isUnique": true,
                "@type": "CharacteristicSpecification",
                "characteristicValueSpecification": [
                  {
                    "isDefault": true,
                    "valueType": "string",
                    "value": "Black",
                    "@type": "StringCharacteristicValueSpecification"
                  },
                  {
                    "isDefault": false,
                    "valueType": "string",
                    "value": "White",
                    "@type": "StringCharacteristicValueSpecification"
                  }
                ],
                "validFor": {
                  "startDateTime": "2020-09-23T16:42:23Z"
                }
              }
            ],
            "@type": "ProductSpecification"
          },
          {
            "id": "5563",
            "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/5563",
            "name": "Deep Packet Inspection",
            "brand": "HPE",
            "productNumber": "HPE-367-DPI",
            "description": "This product specification describes a Deep Packet Inspection product that can be deployed in customer premise.",
            "isBundle": false,
            "lastUpdate": "2020-10-23T16:42:23Z",
            "lifecycleStatus": "In Design",
            "validFor": {
              "startDateTime": "2020-09-23T00:00:00Z",
              "endDateTime": "2022-11-24T16:42:23Z"
            },
            "version": "1.0",
            "relatedParty": [
              {
                "role": "Owner",
                "@type": "RelatedPartyRefOrPartyRoleRef",
                "partyOrPartyRole": {
                  "id": "1234",
                  "href": "https://mycsp.com:8080/tmf-api/partyManagement/v5/partyRole/1234",
                  "name": "Gustave Flaubert",
                  "@type": "PartyRef",
                  "@referredType": "Individual"
                }
              }
            ],
            "attachment": [
              {
                "id": "2017",
                "href": "https://mycsp.com:8080/tmf-api/documentManagement/v5/attachment/2017",
                "name": "Product Manual",
                "mimeType": "application/pdf",
                "url": "https://mycsp.com:7070/docloader?docnum=4168051665",
                "@referredType": "Attachment",
                "@type": "AttachmentRefOrValue"
              }
            ],
            "targetProductSchema": {
              "@type": "DPI",
              "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Product/Firewall.schema.json"
            },
            "serviceSpecification": [
              {
                "id": "5059",
                "href": "https://mycsp.com:8080/tmf-api/serviceCatalogManagement/v5/serviceSpecification/5059",
                "name": "DPI Service",
                "version": "1.0",
                "@referredType": "ServiceSpecification",
                "@type": "ServiceSpecificationRef"
              }
            ],
            "productSpecCharacteristic": [
              {
                "name": "httpIncomingTraffic",
                "description": "DPI for http Incoming Traffic",
                "valueType": "string",
                "configurable": true,
                "minCardinality": 1,
                "maxCardinality": 1,
                "isUnique": true,
                "@type": "CharacteristicSpecification",
                "characteristicValueSpecification": [
                  {
                    "isDefault": true,
                    "valueType": "string",
                    "validFor": {
                      "startDateTime": "2020-09-23T00:00:00Z",
                      "endDateTime": "2022-11-24T00:00:00Z"
                    },
                    "value": "enabled",
                    "@type": "StringCharacteristicValueSpecification"
                  },
                  {
                    "isDefault": false,
                    "valueType": "string",
                    "validFor": {
                      "startDateTime": "2020-09-23T00:00:00Z",
                      "endDateTime": "2022-11-24T00:00:00Z"
                    },
                    "value": "disabled",
                    "@type": "StringCharacteristicValueSpecification"
                  }
                ],
                "validFor": {
                  "startDateTime": "2020-09-23T16:42:23Z"
                }
              },
              {
                "name": "httpIOutgoingTraffic",
                "description": "DPI for http Outgoing Traffic",
                "valueType": "string",
                "configurable": true,
                "minCardinality": 1,
                "maxCardinality": 1,
                "extensible": true,
                "isUnique": true,
                "@type": "CharacteristicSpecification",
                "characteristicValueSpecification": [
                  {
                    "isDefault": false,
                    "valueType": "string",
                    "value": "enabled",
                    "@type": "StringCharacteristicValueSpecification"
                  },
                  {
                    "isDefault": true,
                    "valueType": "string",
                    "value": "disabled",
                    "@type": "StringCharacteristicValueSpecification"
                  }
                ],
                "validFor": {
                  "startDateTime": "2020-09-23T16:42:23Z"
                }
              }
            ],
            "@type": "ProductSpecification"
          }
        ],
        "description": "Here is an example of a request for retrieving multiple product specifications."
      },
      "ProductSpecification_retrieve_example_response": {
        "value": {
          "id": "9881",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/9881",
          "name": "Cisco Firepower NGFW",
          "brand": "Cisco",
          "productNumber": "CSC-340-NGFW",
          "description": "Powerful product that integrates with a firewall, including intrusion prevention, advanced malware protection, cloud-based sandboxing, URL filtering, endpoint protection, web gateway, email security, network traffic analysis, network access control and CASB.",
          "isBundle": true,
          "lastUpdate": "2020-09-23T16:42:23Z",
          "lifecycleStatus": "Active",
          "validFor": {
            "startDateTime": "2020-09-23T00:00:00Z",
            "endDateTime": "2022-11-24T16:42:23Z"
          },
          "version": "2.0",
          "relatedParty": [
            {
              "role": "Owner",
              "@type": "RelatedPartyRefOrPartyRoleRef",
              "partyOrPartyRole": {
                "id": "1234",
                "href": "https://mycsp.com:8080/tmf-api/partyManagement/v5/partyRole/1234",
                "name": "Gustave Flaubert",
                "@type": "PartyRef",
                "@referredType": "Individual"
              }
            }
          ],
          "attachment": [
            {
              "id": "22",
              "href": "https://mycsp.com:8080/tmf-api/documentManagement/v5/attachment/22",
              "name": "Product Picture",
              "mimeType": "image/jpeg",
              "url": "https://mycsp.com:7070/docloader?docnum=774451234",
              "@referredType": "Attachment",
              "@type": "AttachmentRefOrValue"
            },
            {
              "id": "33",
              "href": "https://mycsp.com:8080/tmf-api/documentManagement/v5/attachment/22",
              "name": "Product Manual",
              "mimeType": "application/pdf",
              "url": "https://mycsp.com:7070/docloader?docnum=774454321",
              "@referredType": "Attachment",
              "@type": "AttachmentRefOrValue"
            }
          ],
          "bundledProductSpecification": [
            {
              "id": "15",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/15",
              "name": "URL Filter",
              "@type": "BundledProductSpecification",
              "lifecycleStatus": "Active"
            },
            {
              "id": "64",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/64",
              "name": "Malware Protector",
              "@type": "BundledProductSpecification",
              "lifecycleStatus": "Active"
            }
          ],
          "targetProductSchema": {
            "@type": "Firewall",
            "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Product/Firewall.schema.json"
          },
          "productSpecificationRelationship": [
            {
              "id": "23",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/23",
              "relationshipType": "OptionalFor",
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z"
              },
              "name": "DataPlan",
              "role": "A-Item",
              "@referredType": "ProductSpecification",
              "@type": "ProductSpecificationRelationship"
            }
          ],
          "serviceSpecification": [
            {
              "id": "22",
              "href": "https://mycsp.com:8080/tmf-api/serviceCatalogManagement/v5/serviceSpecification/22",
              "name": "Firewall",
              "version": "1.0",
              "@referredType": "ServiceSpecification",
              "@type": "ServiceSpecificationRef"
            }
          ],
          "resourceSpecification": [
            {
              "id": "63",
              "href": "https://mycsp.com:8080/tmf-api/resourceCatalogManagement/v5/resourceSpecification/63",
              "name": "Firewall Port",
              "version": "1.0",
              "@referredType": "PhysicalResourceSpecification",
              "@type": "ResourceSpecificationRef"
            }
          ],
          "productSpecCharacteristic": [
            {
              "name": "Number of Ports",
              "description": "The total Number of Ports for this product",
              "valueType": "number",
              "configurable": true,
              "minCardinality": 1,
              "maxCardinality": 1,
              "isUnique": true,
              "@type": "CharacteristicSpecification",
              "charSpecRelationship": [
                {
                  "parentSpecificationId": "43",
                  "parentSpecificationHref": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/43",
                  "characteristicSpecificationId": "2",
                  "relationshipType": "Dependency",
                  "name": "Bandwidth",
                  "validFor": {
                    "startDateTime": "2020-09-23T16:42:23-04:00"
                  },
                  "@type": "CharacteristicSpecificationRelationship"
                }
              ],
              "characteristicValueSpecification": [
                {
                  "isDefault": true,
                  "valueType": "number",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2022-11-24T00:00:00Z"
                  },
                  "value": 8,
                  "@type": "NumberCharacteristicValueSpecification"
                },
                {
                  "isDefault": false,
                  "valueType": "number",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2022-11-24T00:00:00Z"
                  },
                  "value": 16,
                  "@type": "NumberCharacteristicValueSpecification"
                },
                {
                  "isDefault": false,
                  "valueType": "number",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2022-11-24T00:00:00Z"
                  },
                  "value": 24,
                  "@type": "NumberCharacteristicValueSpecification"
                }
              ],
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z"
              }
            },
            {
              "name": "Color",
              "description": "Color of the Firewall housing",
              "valueType": "string",
              "configurable": true,
              "minCardinality": 1,
              "maxCardinality": 1,
              "extensible": true,
              "isUnique": true,
              "@type": "CharacteristicSpecification",
              "characteristicValueSpecification": [
                {
                  "isDefault": true,
                  "valueType": "string",
                  "value": "Black",
                  "@type": "StringCharacteristicValueSpecification"
                },
                {
                  "isDefault": false,
                  "valueType": "string",
                  "value": "White",
                  "@type": "StringCharacteristicValueSpecification"
                }
              ],
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z"
              }
            }
          ],
          "@type": "ProductSpecification"
        },
        "description": "Here is an example of a request for retrieving a specific specification."
      },
      "ImportJob_list_example_response": {
        "value": [
          {
            "id": "2340",
            "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/importJob/2340",
            "contentType": "application/json",
            "creationDate": "2020-08-25T00:00:00Z",
            "completionDate": "2020-08-25T00:00:19Z",
            "path": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/Catalog/",
            "status": "Failed",
            "url": "ftp://ftp.mycsp.com/productCatalogManagement/2544.json",
            "errorLog": "http://my-platform/logging/errors.log",
            "@type": "ImportJob"
          },
          {
            "id": "2341",
            "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/importJob/2341",
            "contentType": "application/json",
            "creationDate": "2020-08-25T00:00:00Z",
            "completionDate": "2020-08-25T00:01:31Z",
            "path": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/",
            "status": "Succeeded",
            "url": "ftp://ftp.mycsp.com/productCatalogManagement/1877.json",
            "errorLog": "",
            "@type": "ImportJob"
          }
        ],
        "description": "Here is an example of a request for retrieving multiple import jobs."
      },
      "ImportJob_retrieve_example_response": {
        "value": {
          "id": "2341",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/importJob/2341",
          "contentType": "application/json",
          "creationDate": "2020-08-25T00:00:00Z",
          "completionDate": "2020-08-25T00:01:31Z",
          "path": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/",
          "status": "Succeeded",
          "url": "ftp://ftp.mycsp.com/productCatalogManagement/1866.json",
          "errorLog": "http://my-platform/logging/errors.log",
          "@type": "ImportJob"
        },
        "description": "Here is an example of a request for retrieving a specific import job."
      },
      "ExportJob_list_example_response": {
        "value": [
          {
            "id": "5435",
            "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/exportJob/5435",
            "contentType": "application/json",
            "creationDate": "2020-09-23T00:00:00Z",
            "path": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category",
            "query": "category.id=7757",
            "status": "Running",
            "url": "ftp://ftp.mycsp.com/productCatalogManagement/1866.json",
            "errorLog": "http://my-platform/logging/errors.log",
            "@type": "ExportJob"
          },
          {
            "id": "5431",
            "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/exportJob/5431",
            "contentType": "application/json",
            "creationDate": "2020-09-23T00:00:00Z",
            "completionDate": "2020-09-23T00:02:31Z",
            "path": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/",
            "query": "@type=ProductOffering",
            "status": "Failed",
            "url": "ftp://ftp.mycsp.com/productCatalogManagement/1899.json",
            "errorLog": "http://my-platform/logging/errors.log",
            "@type": "ExportJob"
          }
        ],
        "description": "Here is an example of a request for retrieving multiple export jobs."
      },
      "ExportJob_retrieve_example_response": {
        "value": {
          "id": "5435",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/exportJob/5435",
          "contentType": "application/json",
          "creationDate": "2020-09-23T00:00:00Z",
          "path": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category",
          "query": "category.id=7757",
          "status": "Running",
          "url": "ftp://ftp.mycsp.com/productCatalogManagement/1866.json",
          "errorLog": "http://my-platform/logging/errors.log",
          "@type": "ExportJob"
        },
        "description": "Here is an example of a request for retrieving a specific export job."
      },
      "ProductCatalog_Create_example_request": {
        "value": {
          "name": "Catalog Wholesale Business",
          "description": "This catalog describes Product Offerings and technical specifications intended to address the wholesale business segment.",
          "catalogType": "ProductCatalog",
          "version": "1.0",
          "validFor": {
            "startDateTime": "2020-08-29T00:00:00Z",
            "endDateTime": "2024-03-25T00:00:00Z"
          },
          "lifecycleStatus": "Active",
          "relatedParty": [
            {
              "role": "vendor",
              "@type": "RelatedPartyRefOrPartyRoleRef",
              "partyOrPartyRole": {
                "id": "3426",
                "href": "https://mycsp.com:8080/tmf-api/partyManagement/v5/organization/3426",
                "name": "Broadly Broad Ltd",
                "@type": "PartyRef",
                "@referredType": "Organization"
              }
            }
          ],
          "@type": "Catalog"
        },
        "description": "Here is an example of a request for creating a catalog."
      },
      "ProductCatalog_Create_example_response": {
        "value": {
          "id": "3830",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/Catalog/3830",
          "name": "Catalog Wholesale Business",
          "description": "This catalog describes Product Offerings and technical specifications intended to address the wholesale business segment.",
          "catalogType": "ProductCatalog",
          "version": "1.0",
          "validFor": {
            "startDateTime": "2020-08-29T00:00:00Z",
            "endDateTime": "2024-03-25T00:00:00Z"
          },
          "lastUpdate": "2020-08-27T00:00:00Z",
          "lifecycleStatus": "Active",
          "relatedParty": [
            {
              "role": "vendor",
              "@type": "RelatedPartyRefOrPartyRoleRef",
              "partyOrPartyRole": {
                "id": "3426",
                "href": "https://mycsp.com:8080/tmf-api/partyManagement/v5/organization/3426",
                "name": "Broadly Broad Ltd",
                "@type": "PartyRef",
                "@referredType": "Organization"
              }
            }
          ],
          "category": [],
          "@type": "Catalog"
        },
        "description": "Here is an example of a response for creating a catalog."
      },
      "Category_Create_example_request": {
        "value": {
          "id": "1708",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/Category/1708",
          "name": "Cloud Services",
          "description": "A category to hold all available cloud service offers",
          "version": "1.0",
          "validFor": {
            "startDateTime": "2020-08-24T00:00:00Z",
            "endDateTime": "2024-03-25T00:00:00Z"
          },
          "lifecycleStatus": "Active",
          "lastUpdate": "2020-08-27T00:00:00Z",
          "isRoot": true,
          "subCategory": [
            {
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/6086",
              "id": "6086",
              "name": "Cloud Storage",
              "version": "1.0",
              "@referredType": "Category",
              "@type": "CategoryRef"
            },
            {
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/6087",
              "id": "6087",
              "name": "Software as a Service",
              "version": "2.0",
              "@referredType": "Category",
              "@type": "CategoryRef"
            }
          ],
          "@type": "Category"
        },
        "description": "Here is an example of a request for creating a category."
      },
      "Category_Create_example_response": {
        "value": {
          "id": "1708",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/Category/1708",
          "name": "Cloud Services",
          "description": "A category to hold all available cloud service offers",
          "version": "1.0",
          "validFor": {
            "startDateTime": "2020-08-24T00:00:00Z",
            "endDateTime": "2024-03-25T00:00:00Z"
          },
          "lifecycleStatus": "Active",
          "lastUpdate": "2020-08-27T00:00:00Z",
          "isRoot": true,
          "subCategory": [
            {
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/6086",
              "id": "6086",
              "name": "Cloud Storage",
              "version": "1.0",
              "@referredType": "Category",
              "@type": "CategoryRef"
            },
            {
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/6087",
              "id": "6087",
              "name": "Software as a Service",
              "version": "2.0",
              "@referredType": "Category",
              "@type": "CategoryRef"
            }
          ],
          "productOffering": [],
          "@type": "Category"
        },
        "description": "Here is an example of a response for creating a category."
      },
      "Product_Offering_Create_example_request": {
        "value": {
          "id": "7655",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOffering/7655",
          "name": "Basic Firewall for Business",
          "description": "This product offering suggests a firewall service that can be deployed in business customer premise.",
          "version": "1.0",
          "validFor": {
            "startDateTime": "2020-09-23T00:00:00Z",
            "endDateTime": "2021-08-25T00:00:00Z"
          },
          "lastUpdate": "2020-09-27T00:00:00Z",
          "lifecycleStatus": "Active",
          "isBundle": false,
          "isSellable": true,
          "statusReason": "Released for sale",
          "place": [
            {
              "id": "9979",
              "href": "https://mycsp.com:8080/tmf-api/geographicAddressManagement/v5/geographicAddress/9979",
              "name": "San Francisco Bay Area",
              "@referredType": "GeographicAddress",
              "@type": "PlaceRef"
            }
          ],
          "serviceLevelAgreement": {
            "id": "8082",
            "href": "https://mycsp.com:8080/tmf-api/slaManagement/v5/sla/8082",
            "name": "Gold SLA for Business",
            "@referredType": "ServiceLevelAgreement",
            "@type": "ServiceLevelAgreementRef"
          },
          "productSpecification": {
            "id": "9881",
            "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/9881",
            "version": "1.1",
            "name": "Robotics999",
            "@referredType": "ProductSpecification",
            "@type": "ProductSpecificationRef"
          },
          "channel": [
            {
              "id": "4406",
              "href": "https://mycsp.com:8080/tmf-api/salesChannelManagement/v5/channel/4406",
              "name": "Online Channel",
              "@referredType": "Channel",
              "@type": "ChannelRef"
            }
          ],
          "serviceCandidate": {
            "id": "8167",
            "href": "https://mycsp.com:8080/tmf-api/serviceCatalogManagement/v5/serviceCandidate/8167",
            "version": "1.0",
            "name": "Mega Max",
            "@referredType": "ServiceCandidate",
            "@type": "ServiceCandidateRef"
          },
          "category": [
            {
              "id": "2646",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/2646",
              "version": "2.0",
              "name": "Cloud",
              "@referredType": "Category",
              "@type": "CategoryRef"
            }
          ],
          "resourceCandidate": {
            "id": "8937",
            "href": "https://mycsp.com:8080/tmf-api/resourceCatalogManagement/v5/resourceCandidate/8937",
            "name": "Mega Band",
            "@referredType": "ResourceCandidate",
            "@type": "ResourceCandidateRef"
          },
          "productOfferingTerm": [
            {
              "name": "New Client Condition",
              "description": "This product offering term is for new client at fix duration of less than a year",
              "duration": {
                "amount": 12,
                "units": "Month"
              },
              "validFor": {
                "startDateTime": "2020-09-23T00:00:00Z",
                "endDateTime": "2021-09-23T00:00:00Z"
              },
              "@type": "ProductOfferingTerm"
            }
          ],
          "productOfferingPrice": [
            {
              "id": "1747",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOfferingPrice/1747",
              "name": "Recurring Monthly Price for Business Firewall",
              "@referredType": "ProductOfferingPrice",
              "@type": "ProductOfferingPrice"
            }
          ],
          "agreement": [
            {
              "id": "5537",
              "href": "https://mycsp.com:8080/tmf-api/agreementManagement/v5/agreement/5537",
              "name": "Moon",
              "@referredType": "Agreement",
              "@type": "AgreementRef"
            }
          ],
          "attachment": [
            {
              "description": "This attachment gives a block diagram of the firewall.",
              "href": "https://mycsp.com:8080/tmf-api/documentManagement/v5/attachment/22",
              "mimeType": "image/jpeg",
              "id": "22",
              "name": "My Attachment",
              "url": "https://mycsp.com:7070/docloader?docnum=3534536",
              "@referredType": "Attachment",
              "@type": "AttachmentRef"
            }
          ],
          "marketSegment": [
            {
              "id": "1266",
              "href": "https://mycsp.com:8080/tmf-api/productOfferingReferences/v5/marketSegment/1266",
              "name": "North Region",
              "@referredType": "MarketSegment",
              "@type": "MarketSegmentRef"
            }
          ],
          "bundledProductOffering": [],
          "productOfferingRelationship": [
            {
              "id": "331",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOffering/331",
              "relationshipType": "DependsOn",
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z"
              },
              "role": "A-Role",
              "name": "Carrier Grade NAT",
              "@referredType": "ProductOffering",
              "@type": "ProductOfferingRelationship"
            }
          ],
          "prodSpecCharValueUse": [
            {
              "name": "Number of Ports",
              "id": "3331",
              "description": "The total Number of Ports for this product",
              "valueType": "number",
              "minCardinality": 1,
              "maxCardinality": 1,
              "validFor": {
                "startDateTime": "2020-09-23T00:00:00Z",
                "endDateTime": "2021-09-23T00:00:00Z"
              },
              "@type": "ProductSpecificationCharacteristicValueUse",
              "productSpecCharacteristicValue": [
                {
                  "isDefault": true,
                  "valueType": "number",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2021-09-23T00:00:00Z"
                  },
                  "value": "8",
                  "@type": "NumberCharacteristicValueSpecification"
                },
                {
                  "isDefault": false,
                  "valueType": "number",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2021-09-23T00:00:00Z"
                  },
                  "value": "16",
                  "@type": "NumberCharacteristicValueSpecification"
                }
              ],
              "productSpecification": {
                "id": "9881",
                "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/9881",
                "version": "1.1",
                "name": "Robotics999",
                "@referredType": "ProductSpecification",
                "@type": "ProductSpecificationRef"
              }
            }
          ],
          "@type": "ProductOffering"
        },
        "description": "Here is an example of a request for creating a product offering."
      },
      "Product_Offering_Create_example_response": {
        "value": {
          "id": "7655",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOffering/7655",
          "name": "Basic Firewall for Business",
          "description": "This product offering suggests a firewall service that can be deployed in business customer premise.",
          "version": "1.0",
          "validFor": {
            "startDateTime": "2020-09-23T00:00:00Z",
            "endDateTime": "2021-08-25T00:00:00Z"
          },
          "lastUpdate": "2020-09-27T00:00:00Z",
          "lifecycleStatus": "Active",
          "isBundle": false,
          "isSellable": true,
          "statusReason": "Released for sale",
          "place": [
            {
              "id": "9979",
              "href": "https://mycsp.com:8080/tmf-api/geographicAddressManagement/v5/geographicAddress/9979",
              "name": "San Francisco Bay Area",
              "@referredType": "GeographicAddress",
              "@type": "PlaceRef"
            }
          ],
          "serviceLevelAgreement": {
            "id": "8082",
            "href": "https://mycsp.com:8080/tmf-api/slaManagement/v5/sla/8082",
            "name": "Gold SLA for Business",
            "@referredType": "ServiceLevelAgreement",
            "@type": "ServiceLevelAgreementRef"
          },
          "productSpecification": {
            "id": "9881",
            "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/9881",
            "version": "1.1",
            "name": "Robotics999",
            "@referredType": "ProductSpecification",
            "@type": "ProductSpecificationRef"
          },
          "channel": [
            {
              "id": "4406",
              "href": "https://mycsp.com:8080/tmf-api/salesChannelManagement/v5/channel/4406",
              "name": "Online Channel",
              "@referredType": "Channel",
              "@type": "ChannelRef"
            }
          ],
          "serviceCandidate": {
            "id": "8167",
            "href": "https://mycsp.com:8080/tmf-api/serviceCatalogManagement/v5/serviceCandidate/8167",
            "version": "1.0",
            "name": "Mega Max",
            "@referredType": "ServiceCandidate",
            "@type": "ServiceCandidateRef"
          },
          "category": [
            {
              "id": "2646",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/2646",
              "version": "2.0",
              "name": "Cloud",
              "@referredType": "Category",
              "@type": "CategoryRef"
            }
          ],
          "resourceCandidate": {
            "id": "8937",
            "href": "https://mycsp.com:8080/tmf-api/resourceCatalogManagement/v5/resourceCandidate/8937",
            "name": "Mega Band",
            "@referredType": "ResourceCandidate",
            "@type": "ResourceCandidateRef"
          },
          "productOfferingTerm": [
            {
              "name": "New Client Condition",
              "description": "This product offering term is for new client at fix duration of less than a year",
              "duration": {
                "amount": 12,
                "units": "Month"
              },
              "validFor": {
                "startDateTime": "2020-09-23T00:00:00Z",
                "endDateTime": "2021-09-23T00:00:00Z"
              },
              "@type": "ProductOfferingTerm"
            }
          ],
          "productOfferingPrice": [
            {
              "id": "1747",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOfferingPrice/1747",
              "name": "Recurring Monthly Price for Business Firewall",
              "@referredType": "ProductOfferingPrice",
              "@type": "ProductOfferingPrice"
            }
          ],
          "agreement": [
            {
              "id": "5537",
              "href": "https://mycsp.com:8080/tmf-api/agreementManagement/v5/agreement/5537",
              "name": "Moon",
              "@referredType": "Agreement",
              "@type": "AgreementRef"
            }
          ],
          "attachment": [
            {
              "description": "This attachment gives a block diagram of the firewall.",
              "href": "https://mycsp.com:8080/tmf-api/documentManagement/v5/attachment/22",
              "mimeType": "image/jpeg",
              "id": "22",
              "url": "https://mycsp.com:7070/docloader?docnum=3534536",
              "@referredType": "Attachment",
              "@type": "AttachmentRefOrValue"
            }
          ],
          "marketSegment": [
            {
              "id": "1266",
              "href": "https://mycsp.com:8080/tmf-api/productOfferingReferences/v5/marketSegment/1266",
              "name": "North Region",
              "@referredType": "MarketSegment",
              "@type": "MarketSegmentRef"
            }
          ],
          "bundledProductOffering": [],
          "productOfferingRelationship": [
            {
              "id": "331",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOffering/331",
              "relationshipType": "DependsOn",
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z"
              },
              "role": "A-Role",
              "name": "Carrier Grade NAT",
              "@referredType": "ProductOffering",
              "@type": "ProductOfferingRelationship"
            }
          ],
          "prodSpecCharValueUse": [
            {
              "name": "Number of Ports",
              "id": "3331",
              "description": "The total Number of Ports for this product",
              "valueType": "number",
              "minCardinality": 1,
              "maxCardinality": 1,
              "validFor": {
                "startDateTime": "2020-09-23T00:00:00Z",
                "endDateTime": "2021-09-23T00:00:00Z"
              },
              "@type": "ProductSpecificationCharacteristicValueUse",
              "productSpecCharacteristicValue": [
                {
                  "isDefault": true,
                  "valueType": "number",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2021-09-23T00:00:00Z"
                  },
                  "value": 8,
                  "@type": "NumberCharacteristicValueSpecification"
                },
                {
                  "isDefault": false,
                  "valueType": "number",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2021-09-23T00:00:00Z"
                  },
                  "value": 16,
                  "@type": "NumberCharacteristicValueSpecification"
                }
              ],
              "productSpecification": {
                "id": "9881",
                "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/9881",
                "version": "1.1",
                "name": "Robotics999",
                "@referredType": "ProductSpecification",
                "@type": "ProductSpecificationRef"
              }
            }
          ],
          "@type": "ProductOffering"
        },
        "description": "Here is an example of a response for creating a product offering."
      },
      "Product_Offering_Price_Create_example_request": {
        "value": {
          "id": "1747",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOfferingPrice/1747",
          "name": "Recurring Charge for Business Firewall",
          "description": "This pricing describes the recurring charge for a firewall service that can be deployed in business customer premise.",
          "version": "1.0",
          "validFor": {
            "startDateTime": "2020-09-22T00:00:00Z",
            "endDateTime": "2021-09-22T00:00:00Z"
          },
          "priceType": "recurring",
          "recurringChargePeriodType": "monthly",
          "recurringChargePeriodLength": 1,
          "lastUpdate": "2020-09-23T00:00:00Z",
          "isBundle": false,
          "lifecycleStatus": "Active",
          "unitOfMeasure": {
            "amount": 1,
            "units": "Month"
          },
          "price": {
            "unit": "EUR",
            "value": 50
          },
          "percentage": 0,
          "productOfferingTerm": [
            {
              "name": "12 Month",
              "description": "12 month contract",
              "duration": {
                "amount": 12,
                "units": "Month"
              },
              "validFor": {
                "startDateTime": "2020-09-22T16:42:23Z",
                "endDateTime": "2021-09-22T00:00:00Z"
              },
              "@type": "ProductOfferingTerm"
            }
          ],
          "place": [
            {
              "id": "2707",
              "href": "https://mycsp.com:8080/tmf-api/geographicAddressManagement/v5/geographicAddress/2707",
              "name": "San Francisco Bay Area",
              "@referredType": "GeographicAddress",
              "@type": "PlaceRef"
            }
          ],
          "policy": [
            {
              "@referredType": "Policy",
              "name": "PriceRuleNo1",
              "id": "2503",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/policy/2503",
              "@type": "PolicyRef"
            }
          ],
          "pricingLogicAlgorithm": [
            {
              "id": "2777",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/PricingLogicAlgorithm/2777",
              "name": "RecurringRatingPLA",
              "description": "Algorithm that rates Recurring event",
              "plaSpecId": "2801",
              "validFor": {
                "startDateTime": "2020-09-22T16:42:23Z",
                "endDateTime": "2021-09-22T00:00:00Z"
              },
              "@type": "PricingLogicAlgorithm"
            }
          ],
          "tax": [
            {
              "taxAmount": {
                "unit": "EUR",
                "value": 10
              },
              "taxCategory": "VAT",
              "taxRate": 20,
              "@type": "TaxItem"
            }
          ],
          "popRelationship": [
            {
              "id": "1741",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOfferingPrice/1741",
              "relationshipType": "discountedBy",
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z",
                "endDateTime": "2021-09-22T00:00:00Z"
              },
              "role": "A-Charge",
              "@referredType": "ProductOfferingPriceAlteration",
              "@type": "ProductOfferingPriceRelationship"
            }
          ],
          "@type": "ProductOfferingPrice"
        },
        "description": "Here is an example of a request for creating a product offering price."
      },
      "Product_Offering_Price_Create_example_response": {
        "value": {
          "id": "1747",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOfferingPrice/1747",
          "name": "Recurring Charge for Business Firewall",
          "description": "This pricing describes the recurring charge for a firewall service that can be deployed in business customer premise.",
          "version": "1.0",
          "validFor": {
            "startDateTime": "2020-09-22T00:00:00Z",
            "endDateTime": "2021-09-22T00:00:00Z"
          },
          "priceType": "recurring",
          "recurringChargePeriodType": "monthly",
          "recurringChargePeriodLength": 1,
          "lastUpdate": "2020-09-23T00:00:00Z",
          "isBundle": false,
          "lifecycleStatus": "Active",
          "unitOfMeasure": {
            "amount": 1,
            "units": "Month"
          },
          "price": {
            "unit": "EUR",
            "value": 50
          },
          "percentage": 0,
          "productOfferingTerm": [
            {
              "name": "12 Month",
              "description": "12 month contract",
              "duration": {
                "amount": 12,
                "units": "Month"
              },
              "validFor": {
                "startDateTime": "2020-09-22T16:42:23Z",
                "endDateTime": "2021-09-22T00:00:00Z"
              },
              "@type": "ProductOfferingTerm"
            }
          ],
          "place": [
            {
              "id": "2707",
              "href": "https://mycsp.com:8080/tmf-api/geographicAddressManagement/v5/geographicAddress/2707",
              "name": "San Francisco Bay Area",
              "@referredType": "GeographicAddress",
              "@type": "PlaceRef"
            }
          ],
          "policy": [
            {
              "@referredType": "Policy",
              "name": "PriceRuleNo1",
              "id": "2503",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/policy/2503",
              "@type": "PolicyRef"
            }
          ],
          "pricingLogicAlgorithm": [
            {
              "id": "2777",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/PricingLogicAlgorithm/2777",
              "name": "RecurringRatingPLA",
              "description": "Algorithm that rates Recurring event",
              "plaSpecId": "2801",
              "validFor": {
                "startDateTime": "2020-09-22T16:42:23Z",
                "endDateTime": "2021-09-22T00:00:00Z"
              },
              "@type": "PricingLogicAlgorithm"
            }
          ],
          "tax": [
            {
              "taxAmount": {
                "unit": "EUR",
                "value": 10
              },
              "taxCategory": "VAT",
              "taxRate": 20,
              "@type": "TaxItem"
            }
          ],
          "popRelationship": [
            {
              "id": "1741",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOfferingPrice/1741",
              "relationshipType": "discountedBy",
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z",
                "endDateTime": "2021-09-22T00:00:00Z"
              },
              "role": "A-Charge",
              "@referredType": "ProductOfferingPriceAlteration",
              "@type": "ProductOfferingPriceRelationship"
            }
          ],
          "@type": "ProductOfferingPrice"
        },
        "description": "Here is an example of a response for creating a product offering price."
      },
      "Product_Specification_Create_example_request": {
        "value": {
          "id": "9881",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/9881",
          "name": "Cisco Firepower NGFW",
          "brand": "Cisco",
          "productNumber": "CSC-340-NGFW",
          "description": "Powerful product that integrates with a firewall, including intrusion prevention, advanced malware protection, cloud-based sandboxing, URL filtering, endpoint protection, web gateway, email security, network traffic analysis, network access control and CASB.",
          "isBundle": true,
          "lastUpdate": "2020-09-23T16:42:23Z",
          "lifecycleStatus": "Active",
          "validFor": {
            "startDateTime": "2020-09-23T00:00:00Z",
            "endDateTime": "2022-11-24T16:42:23Z"
          },
          "version": "1.0",
          "relatedParty": [
            {
              "role": "Owner",
              "@type": "RelatedPartyRefOrPartyRoleRef",
              "partyOrPartyRole": {
                "id": "1234",
                "href": "https://mycsp.com:8080/tmf-api/partyManagement/v5/partyRole/1234",
                "name": "Gustave Flaubert",
                "@type": "PartyRef",
                "@referredType": "Individual"
              }
            }
          ],
          "attachment": [
            {
              "id": "22",
              "href": "https://mycsp.com:8080/tmf-api/documentManagement/v5/attachment/22",
              "name": "Product Picture",
              "mimeType": "image/jpeg",
              "url": "https://mycsp.com:7070/docloader?docnum=774451234",
              "@referredType": "Attachment",
              "@type": "AttachmentRef"
            },
            {
              "id": "33",
              "href": "https://mycsp.com:8080/tmf-api/documentManagement/v5/attachment/22",
              "name": "Product Manual",
              "mimeType": "application/pdf",
              "url": "https://mycsp.com:7070/docloader?docnum=774454321",
              "@referredType": "Attachment",
              "@type": "AttachmentRef"
            }
          ],
          "bundledProductSpecification": [
            {
              "id": "15",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/15",
              "name": "URL Filter",
              "@type": "BundledProductSpecification",
              "lifecycleStatus": "Active"
            },
            {
              "id": "64",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/64",
              "name": "Malware Protector",
              "@type": "BundledProductSpecification",
              "lifecycleStatus": "Active"
            }
          ],
          "targetProductSchema": {
            "@type": "Firewall",
            "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Product/Firewall.schema.json"
          },
          "productSpecificationRelationship": [
            {
              "id": "23",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/23",
              "relationshipType": "OptionalFor",
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z"
              },
              "name": "DataPlan",
              "role": "A-Item",
              "@referredType": "ProductSpecification",
              "@type": "ProductSpecificationRelationship"
            }
          ],
          "serviceSpecification": [
            {
              "id": "22",
              "href": "https://mycsp.com:8080/tmf-api/serviceCatalogManagement/v5/serviceSpecification/22",
              "name": "Firewall",
              "version": "1.0",
              "@referredType": "ServiceSpecification",
              "@type": "ServiceSpecificationRef"
            }
          ],
          "resourceSpecification": [
            {
              "id": "63",
              "href": "https://mycsp.com:8080/tmf-api/resourceCatalogManagement/v5/resourceSpecification/63",
              "name": "Firewall Port",
              "version": "1.0",
              "@referredType": "PhysicalResourceSpecification",
              "@type": "ResourceSpecificationRef"
            }
          ],
          "productSpecCharacteristic": [
            {
              "name": "Number of Ports",
              "description": "The total Number of Ports for this product",
              "valueType": "number",
              "configurable": true,
              "minCardinality": 1,
              "maxCardinality": 1,
              "isUnique": true,
              "@type": "CharacteristicSpecification",
              "charSpecRelationship": [
                {
                  "parentSpecificationId": "43",
                  "parentSpecificationHref": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/43",
                  "characteristicSpecificationId": "2",
                  "relationshipType": "dependency",
                  "name": "Bandwidth",
                  "validFor": {
                    "startDateTime": "2020-09-23T16:42:23-04:00"
                  },
                  "@type": "CharacteristicSpecificationRelationship"
                }
              ],
              "characteristicValueSpecification": [
                {
                  "isDefault": true,
                  "valueType": "number",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2022-11-24T00:00:00Z"
                  },
                  "value": "8",
                  "@type": "NumberCharacteristicValueSpecification"
                },
                {
                  "isDefault": false,
                  "valueType": "number",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2022-11-24T00:00:00Z"
                  },
                  "value": "16",
                  "@type": "NumberCharacteristicValueSpecification"
                },
                {
                  "isDefault": false,
                  "valueType": "number",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2022-11-24T00:00:00Z"
                  },
                  "value": "24",
                  "@type": "NumberCharacteristicValueSpecification"
                }
              ],
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z"
              }
            },
            {
              "name": "Color",
              "description": "Color of the Firewall housing",
              "valueType": "string",
              "configurable": true,
              "minCardinality": 1,
              "maxCardinality": 1,
              "extensible": true,
              "isUnique": true,
              "@type": "CharacteristicSpecification",
              "characteristicValueSpecification": [
                {
                  "isDefault": true,
                  "valueType": "string",
                  "value": "Black",
                  "@type": "StringCharacteristicValueSpecification"
                },
                {
                  "isDefault": false,
                  "valueType": "string",
                  "value": "White",
                  "@type": "StringCharacteristicValueSpecification"
                }
              ],
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z"
              }
            }
          ],
          "@type": "ProductSpecification"
        },
        "description": "Here is an example of a request for creating a product specification."
      },
      "Product_Specification_Create_example_response": {
        "value": {
          "id": "9881",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/9881",
          "name": "Cisco Firepower NGFW",
          "brand": "Cisco",
          "productNumber": "CSC-340-NGFW",
          "description": "Powerful product that integrates with a firewall, including intrusion prevention, advanced malware protection, cloud-based sandboxing, URL filtering, endpoint protection, web gateway, email security, network traffic analysis, network access control and CASB.",
          "isBundle": true,
          "lastUpdate": "2020-09-23T16:42:23Z",
          "lifecycleStatus": "Active",
          "validFor": {
            "startDateTime": "2020-09-23T00:00:00Z",
            "endDateTime": "2022-11-24T16:42:23Z"
          },
          "version": "1.0",
          "relatedParty": [
            {
              "role": "Owner",
              "@type": "RelatedPartyRefOrPartyRoleRef",
              "partyOrPartyRole": {
                "id": "1234",
                "href": "https://mycsp.com:8080/tmf-api/partyManagement/v5/partyRole/1234",
                "name": "Gustave Flaubert",
                "@type": "PartyRef",
                "@referredType": "Individual"
              }
            }
          ],
          "attachment": [
            {
              "id": "22",
              "href": "https://mycsp.com:8080/tmf-api/documentManagement/v5/attachment/22",
              "name": "Product Picture",
              "mimeType": "image/jpeg",
              "url": "https://mycsp.com:7070/docloader?docnum=774451234",
              "@referredType": "Attachment",
              "@type": "AttachmentRefOrValue"
            },
            {
              "id": "33",
              "href": "https://mycsp.com:8080/tmf-api/documentManagement/v5/attachment/22",
              "name": "Product Manual",
              "mimeType": "application/pdf",
              "url": "https://mycsp.com:7070/docloader?docnum=774454321",
              "@referredType": "Attachment",
              "@type": "AttachmentRefOrValue"
            }
          ],
          "bundledProductSpecification": [
            {
              "id": "15",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/15",
              "name": "URL Filter",
              "@type": "BundledProductSpecification",
              "lifecycleStatus": "Active"
            },
            {
              "id": "64",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/64",
              "name": "Malware Protector",
              "@type": "BundledProductSpecification",
              "lifecycleStatus": "Active"
            }
          ],
          "targetProductSchema": {
            "@type": "Firewall",
            "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Product/Firewall.schema.json"
          },
          "productSpecificationRelationship": [
            {
              "id": "23",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/23",
              "relationshipType": "OptionalFor",
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z"
              },
              "name": "DataPlan",
              "role": "A-Item",
              "@referredType": "ProductSpecification",
              "@type": "ProductSpecificationRelationship"
            }
          ],
          "serviceSpecification": [
            {
              "id": "22",
              "href": "https://mycsp.com:8080/tmf-api/serviceCatalogManagement/v5/serviceSpecification/22",
              "name": "Firewall",
              "version": "1.0",
              "@referredType": "ServiceSpecification",
              "@type": "ServiceSpecificationRef"
            }
          ],
          "resourceSpecification": [
            {
              "id": "63",
              "href": "https://mycsp.com:8080/tmf-api/resourceCatalogManagement/v5/resourceSpecification/63",
              "name": "Firewall Port",
              "version": "1.0",
              "@referredType": "PhysicalResourceSpecification",
              "@type": "ResourceSpecificationRef"
            }
          ],
          "productSpecCharacteristic": [
            {
              "name": "Number of Ports",
              "description": "The total Number of Ports for this product",
              "valueType": "number",
              "configurable": true,
              "minCardinality": 1,
              "maxCardinality": 1,
              "isUnique": true,
              "@type": "CharacteristicSpecification",
              "charSpecRelationship": [
                {
                  "parentSpecificationId": "43",
                  "parentSpecificationHref": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/43",
                  "characteristicSpecificationId": "2",
                  "name": "Bandwidth",
                  "validFor": {
                    "startDateTime": "2020-09-23T16:42:23-04:00"
                  },
                  "@type": "CharacteristicSpecificationRelationship"
                }
              ],
              "characteristicValueSpecification": [
                {
                  "isDefault": true,
                  "valueType": "number",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2022-11-24T00:00:00Z"
                  },
                  "value": "8",
                  "@type": "NumberCharacteristicValueSpecification"
                },
                {
                  "isDefault": false,
                  "valueType": "number",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2022-11-24T00:00:00Z"
                  },
                  "value": "16",
                  "@type": "NumberCharacteristicValueSpecification"
                },
                {
                  "isDefault": false,
                  "valueType": "number",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2022-11-24T00:00:00Z"
                  },
                  "value": "24",
                  "@type": "NumberCharacteristicValueSpecification"
                }
              ],
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z"
              }
            },
            {
              "name": "Color",
              "description": "Color of the Firewall housing",
              "valueType": "string",
              "configurable": true,
              "minCardinality": 1,
              "maxCardinality": 1,
              "extensible": true,
              "isUnique": true,
              "@type": "CharacteristicSpecification",
              "characteristicValueSpecification": [
                {
                  "isDefault": true,
                  "valueType": "string",
                  "value": "Black",
                  "@type": "StringCharacteristicValueSpecification"
                },
                {
                  "isDefault": false,
                  "valueType": "string",
                  "value": "White",
                  "@type": "StringCharacteristicValueSpecification"
                }
              ],
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z"
              }
            }
          ],
          "@type": "ProductSpecification"
        },
        "description": "Here is an example of a response for creating a product specification."
      },
      "Product_Specification_Create_example_with_intent_request": {
        "value": {
          "id": "9881",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/9881",
          "name": "Cisco Firepower NGFW",
          "brand": "Cisco",
          "productNumber": "CSC-340-NGFW",
          "description": "Powerful product that integrates with a firewall, including intrusion prevention, advanced malware protection, cloud-based sandboxing, URL filtering, endpoint protection, web gateway, email security, network traffic analysis, network access control and CASB.",
          "isBundle": true,
          "lastUpdate": "2020-09-23T16:42:23Z",
          "lifecycleStatus": "Active",
          "validFor": {
            "startDateTime": "2020-09-23T00:00:00Z",
            "endDateTime": "2022-11-24T16:42:23Z"
          },
          "version": "1.0",
          "relatedParty": [
            {
              "role": "Owner",
              "@type": "RelatedPartyRefOrPartyRoleRef",
              "partyOrPartyRole": {
                "id": "1234",
                "href": "https://mycsp.com:8080/tmf-api/partyManagement/v5/partyRole/1234",
                "name": "Gustave Flaubert",
                "@type": "PartyRef",
                "@referredType": "Individual"
              }
            }
          ],
          "attachment": [
            {
              "id": "22",
              "href": "https://mycsp.com:8080/tmf-api/documentManagement/v5/attachment/22",
              "name": "Product Picture",
              "mimeType": "image/jpeg",
              "url": "https://mycsp.com:7070/docloader?docnum=774451234",
              "@referredType": "Attachment",
              "@type": "AttachmentRef"
            },
            {
              "id": "33",
              "href": "https://mycsp.com:8080/tmf-api/documentManagement/v5/attachment/22",
              "name": "Product Manual",
              "mimeType": "application/pdf",
              "url": "https://mycsp.com:7070/docloader?docnum=774454321",
              "@referredType": "Attachment",
              "@type": "AttachmentRef"
            }
          ],
          "bundledProductSpecification": [
            {
              "id": "15",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/15",
              "name": "URL Filter",
              "@type": "BundledProductSpecification",
              "lifecycleStatus": "Active"
            },
            {
              "id": "64",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/64",
              "name": "Malware Protector",
              "@type": "BundledProductSpecification",
              "lifecycleStatus": "Active"
            }
          ],
          "targetProductSchema": {
            "@type": "Firewall",
            "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Product/Firewall.schema.json"
          },
          "productSpecificationRelationship": [
            {
              "id": "23",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/23",
              "relationshipType": "OptionalFor",
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z"
              },
              "name": "DataPlan",
              "role": "A-Item",
              "@referredType": "ProductSpecification",
              "@type": "ProductSpecificationRelationship"
            }
          ],
          "serviceSpecification": [
            {
              "id": "22",
              "href": "https://mycsp.com:8080/tmf-api/serviceCatalogManagement/v5/serviceSpecification/22",
              "name": "Firewall",
              "version": "1.0",
              "@referredType": "ServiceSpecification",
              "@type": "ServiceSpecificationRef"
            }
          ],
          "resourceSpecification": [
            {
              "id": "63",
              "href": "https://mycsp.com:8080/tmf-api/resourceCatalogManagement/v5/resourceSpecification/63",
              "name": "Firewall Port",
              "version": "1.0",
              "@referredType": "PhysicalResourceSpecification",
              "@type": "ResourceSpecificationRef"
            }
          ],
          "intentSpecification": {
            "@type": "IntentSpecificationRef",
            "id": "EventLiveBroadcast_IntentSpec",
            "name": "EventLiveBroadcastIntentSpec",
            "@referredType": "IntentSpecification",
            "@href": "/intent/v5/IntentSpecification/EventLiveBroadcast_IntentSpec"
          },
          "@type": "ProductSpecification"
        },
        "description": "Here is an example of a request for creating a product specification with intent specifications."
      },
      "Product_Specification_Create_example_with_intent_response": {
        "value": {
          "id": "9881",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/9881",
          "name": "Cisco Firepower NGFW",
          "brand": "Cisco",
          "productNumber": "CSC-340-NGFW",
          "description": "Powerful product that integrates with a firewall, including intrusion prevention, advanced malware protection, cloud-based sandboxing, URL filtering, endpoint protection, web gateway, email security, network traffic analysis, network access control and CASB.",
          "isBundle": true,
          "lastUpdate": "2020-09-23T16:42:23Z",
          "lifecycleStatus": "Active",
          "validFor": {
            "startDateTime": "2020-09-23T00:00:00Z",
            "endDateTime": "2022-11-24T16:42:23Z"
          },
          "version": "1.0",
          "relatedParty": [
            {
              "role": "Owner",
              "@type": "RelatedPartyRefOrPartyRoleRef",
              "partyOrPartyRole": {
                "id": "1234",
                "href": "https://mycsp.com:8080/tmf-api/partyManagement/v5/partyRole/1234",
                "name": "Gustave Flaubert",
                "@type": "PartyRef",
                "@referredType": "Individual"
              }
            }
          ],
          "attachment": [
            {
              "id": "22",
              "href": "https://mycsp.com:8080/tmf-api/documentManagement/v5/attachment/22",
              "name": "Product Picture",
              "mimeType": "image/jpeg",
              "url": "https://mycsp.com:7070/docloader?docnum=774451234",
              "@referredType": "Attachment",
              "@type": "AttachmentRefOrValue"
            },
            {
              "id": "33",
              "href": "https://mycsp.com:8080/tmf-api/documentManagement/v5/attachment/22",
              "name": "Product Manual",
              "mimeType": "application/pdf",
              "url": "https://mycsp.com:7070/docloader?docnum=774454321",
              "@referredType": "Attachment",
              "@type": "AttachmentRefOrValue"
            }
          ],
          "bundledProductSpecification": [
            {
              "id": "15",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/15",
              "name": "URL Filter",
              "@type": "BundledProductSpecification",
              "lifecycleStatus": "Active"
            },
            {
              "id": "64",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/64",
              "name": "Malware Protector",
              "@type": "BundledProductSpecification",
              "lifecycleStatus": "Active"
            }
          ],
          "targetProductSchema": {
            "@type": "Firewall",
            "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Product/Firewall.schema.json"
          },
          "productSpecificationRelationship": [
            {
              "id": "23",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/23",
              "relationshipType": "OptionalFor",
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z"
              },
              "name": "DataPlan",
              "role": "A-Item",
              "@referredType": "ProductSpecification",
              "@type": "ProductSpecificationRelationship"
            }
          ],
          "serviceSpecification": [
            {
              "id": "22",
              "href": "https://mycsp.com:8080/tmf-api/serviceCatalogManagement/v5/serviceSpecification/22",
              "name": "Firewall",
              "version": "1.0",
              "@referredType": "ServiceSpecification",
              "@type": "ServiceSpecificationRef"
            }
          ],
          "resourceSpecification": [
            {
              "id": "63",
              "href": "https://mycsp.com:8080/tmf-api/resourceCatalogManagement/v5/resourceSpecification/63",
              "name": "Firewall Port",
              "version": "1.0",
              "@referredType": "PhysicalResourceSpecification",
              "@type": "ResourceSpecificationRef"
            }
          ],
          "intentSpecification": {
            "@type": "IntentSpecificationRef",
            "id": "EventLiveBroadcast_IntentSpec",
            "name": "EventLiveBroadcastIntentSpec",
            "@referredType": "IntentSpecification",
            "@href": "/intent/v5/IntentSpecification/EventLiveBroadcast_IntentSpec"
          },
          "@type": "ProductSpecification"
        },
        "description": "Here is an example of a response for creating a product specification specification with intent specifications."
      },
      "Import_Job_Create_example_request": {
        "value": {
          "contentType": "application/json",
          "path": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/",
          "url": "ftp://ftp.mycsp.com/productCatalogManagement/1877.json",
          "@type": "ImportJob"
        },
        "description": "Here is an example of a request for creating an import job."
      },
      "Import_Job_Create_example_response": {
        "value": {
          "id": "2341",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/importJob/2341",
          "contentType": "application/json",
          "creationDate": "2020-08-25T00:00:00Z",
          "completionDate": "2020-08-25T00:01:31Z",
          "path": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/",
          "status": "Succeeded",
          "url": "ftp://ftp.mycsp.com/productCatalogManagement/1877.json",
          "errorLog": "http://my-platform/logging/errors.log",
          "@type": "ImportJob"
        },
        "description": "Here is an example of a response for creating an import job."
      },
      "Export_Job_Create_example_request": {
        "value": {
          "contentType": "application/json",
          "path": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category",
          "query": "category.id=7757",
          "url": "ftp://ftp.mycsp.com/productCatalogManagement/1866.json",
          "@type": "ExportJob"
        },
        "description": "Here is an example of a request for creating an export job."
      },
      "Export_Job_Create_example_response": {
        "value": {
          "id": "5435",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/exportJob/5435",
          "contentType": "application/json",
          "creationDate": "2020-09-23T00:00:00Z",
          "path": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category",
          "query": "category.id=7757",
          "status": "Running",
          "url": "ftp://ftp.mycsp.com/productCatalogManagement/1866.json",
          "errorLog": "http://my-platform/logging/errors.log",
          "@type": "ExportJob"
        },
        "description": "Here is an example of a response for creating an export job."
      },
      "ProductCatalog_Update_example_with_Patch_Merge_request": {
        "value": {
          "version": "2.0",
          "validFor": {
            "startDateTime": "2020-09-23T00:00:00Z"
          },
          "@type": "Catalog"
        },
        "description": "Here is an example of a request for updating a catalog."
      },
      "ProductCatalog_Update_example_with_Patch_Merge_response": {
        "value": {
          "id": "3830",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/Catalog/3830",
          "name": "Catalog Wholesale Business",
          "description": "This catalog describes Product Offerings and technical specifications intended to address the wholesale business segment.",
          "catalogType": "ProductCatalog",
          "version": "2.0",
          "validFor": {
            "startDateTime": "2020-09-23T00:00:00Z"
          },
          "lastUpdate": "2020-09-22T00:00:00Z",
          "lifecycleStatus": "Active",
          "relatedParty": [
            {
              "role": "vendor",
              "@type": "RelatedPartyRefOrPartyRoleRef",
              "partyOrPartyRole": {
                "id": "3426",
                "href": "https://mycsp.com:8080/tmf-api/partyManagement/v5/organization/3426",
                "name": "Broadly Broad Ltd",
                "@type": "PartyRef",
                "@referredType": "Organization"
              }
            },
            {
              "role": "Reviser",
              "@type": "RelatedPartyRefOrPartyRoleRef",
              "partyOrPartyRole": {
                "id": "115566",
                "href": "https://mycsp.com:8080/tmf-api/partyManagement/v5/individual/115566",
                "name": "Roger Collins",
                "@type": "PartyRef",
                "@referredType": "Individual"
              }
            }
          ],
          "category": [
            {
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/7757",
              "id": "7757",
              "name": "business",
              "version": "1.0",
              "@referredType": "Category",
              "@type": "CategoryRef"
            }
          ],
          "@type": "Catalog"
        },
        "description": "Here is an example of a response for updating a catalog."
      },
      "ProductCatalog_Implicit_Update_example_request": {
        "value": {
          "version": "2.0",
          "validFor": {
            "startDateTime": "2020-09-23T00:00:00Z"
          },
          "@type": "Catalog"
        },
        "description": "Here is an example of a request for updating a catalog."
      },
      "ProductCatalog_Implicit_Update_example_response": {
        "value": {
          "id": "3830",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/Catalog/3830",
          "name": "Catalog Wholesale Business",
          "description": "This catalog describes Product Offerings and technical specifications intended to address the wholesale business segment.",
          "catalogType": "ProductCatalog",
          "version": "2.0",
          "validFor": {
            "startDateTime": "2020-09-23T00:00:00Z"
          },
          "lastUpdate": "2020-09-22T00:00:00Z",
          "lifecycleStatus": "Active",
          "relatedParty": [
            {
              "role": "vendor",
              "@type": "RelatedPartyRefOrPartyRoleRef",
              "partyOrPartyRole": {
                "id": "3426",
                "href": "https://mycsp.com:8080/tmf-api/partyManagement/v5/organization/3426",
                "name": "Broadly Broad Ltd",
                "@type": "PartyRef",
                "@referredType": "Organization"
              }
            },
            {
              "role": "Reviser",
              "@type": "RelatedPartyRefOrPartyRoleRef",
              "partyOrPartyRole": {
                "id": "115566",
                "href": "https://mycsp.com:8080/tmf-api/partyManagement/v5/individual/115566",
                "name": "Roger Collins",
                "@type": "PartyRef",
                "@referredType": "Individual"
              }
            }
          ],
          "category": [
            {
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/7757",
              "id": "7757",
              "name": "business",
              "version": "1.0",
              "@referredType": "Category",
              "@type": "CategoryRef"
            }
          ],
          "@type": "Catalog"
        },
        "description": "Here is an example of a response for updating a catalog."
      },
      "ProductCatalog_Update_example_with_JSON_Patch_request": {
        "value": [
          {
            "op": "replace",
            "path": "/version",
            "value": "2.0"
          },
          {
            "op": "replace",
            "path": "/validFor/startDateTime",
            "value": "2020-09-23T00:00:00Z"
          },
          {
            "op": "remove",
            "path": "/validFor/endDateTime"
          }
        ],
        "description": "Here is an example of a request for updating a catalog."
      },
      "ProductCatalog_Update_example_with_JSON_Patch_response": {
        "value": {
          "id": "3830",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/Catalog/3830",
          "name": "Catalog Wholesale Business",
          "description": "This catalog describes Product Offerings and technical specifications intended to address the wholesale business segment.",
          "catalogType": "ProductCatalog",
          "version": "2.0",
          "validFor": {
            "startDateTime": "2020-09-23T00:00:00Z"
          },
          "lastUpdate": "2020-09-22T00:00:00Z",
          "lifecycleStatus": "Active",
          "relatedParty": [
            {
              "role": "vendor",
              "@type": "RelatedPartyRefOrPartyRoleRef",
              "partyOrPartyRole": {
                "id": "3426",
                "href": "https://mycsp.com:8080/tmf-api/partyManagement/v5/organization/3426",
                "name": "Broadly Broad Ltd",
                "@type": "PartyRef",
                "@referredType": "Organization"
              }
            },
            {
              "role": "Reviser",
              "@type": "RelatedPartyRefOrPartyRoleRef",
              "partyOrPartyRole": {
                "id": "115566",
                "href": "https://mycsp.com:8080/tmf-api/partyManagement/v5/individual/115566",
                "name": "Roger Collins",
                "@type": "PartyRef",
                "@referredType": "Individual"
              }
            }
          ],
          "category": [
            {
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/7757",
              "id": "7757",
              "name": "business",
              "version": "1.0",
              "@referredType": "Category",
              "@type": "CategoryRef"
            }
          ],
          "@type": "Catalog"
        },
        "description": "Here is an example of a response for updating a catalog."
      },
      "ProductCatalog_Update_example_with_JSON_Patch_Query_request": {
        "value": [
          {
            "op": "remove",
            "path": "/relatedParty?role=vendor"
          }
        ],
        "description": "Here is an example of a request for updating a catalog."
      },
      "ProductCatalog_Update_example_with_JSON_Patch_Query_response": {
        "value": {
          "id": "3830",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/Catalog/3830",
          "name": "Catalog Wholesale Business",
          "description": "This catalog describes Product Offerings and technical specifications intended to address the wholesale business segment.",
          "catalogType": "ProductCatalog",
          "version": "2.0",
          "validFor": {
            "startDateTime": "2020-09-23T00:00:00Z"
          },
          "lastUpdate": "2020-09-22T00:00:00Z",
          "lifecycleStatus": "Active",
          "relatedParty": [
            {
              "role": "Reviser",
              "@type": "RelatedPartyRefOrPartyRoleRef",
              "partyOrPartyRole": {
                "id": "115566",
                "href": "https://mycsp.com:8080/tmf-api/partyManagement/v5/individual/115566",
                "name": "Roger Collins",
                "@type": "PartyRef",
                "@referredType": "Individual"
              }
            }
          ],
          "category": [
            {
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/7757",
              "id": "7757",
              "name": "business",
              "version": "1.0",
              "@referredType": "Category",
              "@type": "CategoryRef"
            }
          ],
          "@type": "Catalog"
        },
        "description": "Here is an example of a response for updating a catalog."
      },
      "Category_Update_example_request": {
        "value": {
          "version": "2.0",
          "validFor": {
            "startDateTime": "2020-09-23T00:00:00Z"
          },
          "@type": "Category"
        },
        "description": "Here is an example of a request for updating a category."
      },
      "Category_Update_example_response": {
        "value": {
          "id": "1708",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/Category/1708",
          "name": "Cloud Services",
          "description": "A category to hold all available cloud service offers",
          "version": "2.0",
          "validFor": {
            "startDateTime": "2020-09-23T00:00:00Z"
          },
          "lifecycleStatus": "Active",
          "lastUpdate": "2020-09-22T00:00:00Z",
          "isRoot": true,
          "subCategory": [
            {
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/6086",
              "id": "6086",
              "name": "Cloud Storage",
              "version": "1.0",
              "@referredType": "Category",
              "@type": "CategoryRef"
            },
            {
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/6087",
              "id": "6087",
              "name": "Software as a Service",
              "version": "2.0",
              "@referredType": "Category",
              "@type": "CategoryRef"
            }
          ],
          "productOffering": [
            {
              "id": "7655",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOffering/7655",
              "name": "Hosted Basic Firewall for business",
              "@type": "ProductOfferingRef",
              "@referredType": "ProductOffering"
            }
          ],
          "@type": "Category"
        },
        "description": "Here is an example of a request for updating a category."
      },
      "Category_Implicit_Update_example_request": {
        "value": {
          "version": "2.0",
          "validFor": {
            "startDateTime": "2020-09-23T00:00:00Z"
          },
          "@type": "Category"
        },
        "description": "Here is an example of a request for updating a category."
      },
      "Category_Implicit_Update_example_response": {
        "value": {
          "id": "1708",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/Category/1708",
          "name": "Cloud Services",
          "description": "A category to hold all available cloud service offers",
          "version": "2.0",
          "validFor": {
            "startDateTime": "2020-09-23T00:00:00Z"
          },
          "lifecycleStatus": "Active",
          "lastUpdate": "2020-09-22T00:00:00Z",
          "isRoot": true,
          "subCategory": [
            {
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/6086",
              "id": "6086",
              "name": "Cloud Storage",
              "version": "1.0",
              "@referredType": "Category",
              "@type": "CategoryRef"
            },
            {
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/6087",
              "id": "6087",
              "name": "Software as a Service",
              "version": "2.0",
              "@referredType": "Category",
              "@type": "CategoryRef"
            }
          ],
          "productOffering": [
            {
              "id": "7655",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOffering/7655",
              "name": "Hosted Basic Firewall for business",
              "@type": "ProductOfferingRef",
              "@referredType": "ProductOffering"
            }
          ],
          "@type": "Category"
        },
        "description": "Here is an example of a request for updating a category."
      },
      "Category_Update_example_with_JSON_Patch_request": {
        "value": [
          {
            "op": "replace",
            "path": "/version",
            "value": "2.0"
          },
          {
            "op": "replace",
            "path": "/validFor/startDateTime",
            "value": "2020-09-23T00:00:00Z"
          },
          {
            "op": "remove",
            "path": "/validFor/endDateTime"
          }
        ],
        "description": "Here is an example of a request for updating a category."
      },
      "Category_Update_example_with_JSON_Patch_response": {
        "value": {
          "id": "1708",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/Category/1708",
          "name": "Cloud Services",
          "description": "A category to hold all available cloud service offers",
          "version": "2.0",
          "validFor": {
            "startDateTime": "2020-09-23T00:00:00Z"
          },
          "lifecycleStatus": "Active",
          "lastUpdate": "2020-09-22T00:00:00Z",
          "isRoot": true,
          "subCategory": [
            {
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/6086",
              "id": "6086",
              "name": "Cloud Storage",
              "version": "1.0",
              "@referredType": "Category",
              "@type": "CategoryRef"
            },
            {
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/6087",
              "id": "6087",
              "name": "Software as a Service",
              "version": "2.0",
              "@referredType": "Category",
              "@type": "CategoryRef"
            }
          ],
          "productOffering": [
            {
              "id": "7655",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOffering/7655",
              "name": "Hosted Basic Firewall for business",
              "@type": "ProductOfferingRef",
              "@referredType": "ProductOffering"
            }
          ],
          "@type": "Category"
        },
        "description": "Here is an example of a response for updating a category."
      },
      "Category_Update_example_with_JSON_Patch_Query_request": {
        "value": [
          {
            "op": "remove",
            "path": "/subCategory?id=6087"
          }
        ],
        "description": "Here is an example of a request for updating a category."
      },
      "Category_Update_example_with_JSON_Patch_Query_response": {
        "value": {
          "id": "1708",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/Category/1708",
          "name": "Cloud Services",
          "description": "A category to hold all available cloud service offers",
          "version": "2.0",
          "validFor": {
            "startDateTime": "2020-09-23T00:00:00Z"
          },
          "lifecycleStatus": "Active",
          "lastUpdate": "2020-09-22T00:00:00Z",
          "isRoot": true,
          "subCategory": [
            {
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/6086",
              "id": "6086",
              "name": "Cloud Storage",
              "version": "1.0",
              "@referredType": "Category",
              "@type": "CategoryRef"
            }
          ],
          "productOffering": [
            {
              "id": "7655",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOffering/7655",
              "name": "Hosted Basic Firewall for business",
              "@type": "ProductOfferingRef",
              "@referredType": "ProductOffering"
            }
          ],
          "@type": "Category"
        },
        "description": "Here is an example of a response for updating a category."
      },
      "Product_Offering_Update_Patch_Merge_request": {
        "value": {
          "version": "3.0",
          "validFor": {
            "startDateTime": "2020-11-06T00:00:00Z",
            "endDateTime": "2021-11-06T00:00:00Z"
          },
          "@type": "ProductOffering"
        },
        "description": "Here is an example of a request for updating a product offering."
      },
      "Product_Offering_Update_Patch_Merge_response": {
        "value": {
          "id": "7655",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOffering/7655",
          "name": "Basic Firewall for Business",
          "description": "This product offering suggests a firewall service that can be deployed in business customer premise.",
          "version": "3.0",
          "validFor": {
            "startDateTime": "2020-11-06T00:00:00Z",
            "endDateTime": "2021-11-06T00:00:00Z"
          },
          "lastUpdate": "2020-09-27T00:00:00Z",
          "lifecycleStatus": "Active",
          "isBundle": false,
          "isSellable": true,
          "statusReason": "Released for sale",
          "place": [
            {
              "id": "9979",
              "href": "https://mycsp.com:8080/tmf-api/geographicAddressManagement/v5/geographicAddress/9979",
              "name": "San Francisco Bay Area",
              "@referredType": "GeographicAddress",
              "@type": "PlaceRef"
            }
          ],
          "serviceLevelAgreement": {
            "id": "8082",
            "href": "https://mycsp.com:8080/tmf-api/slaManagement/v5/sla/8082",
            "name": "Gold SLA for Business",
            "@referredType": "ServiceLevelAgreement",
            "@type": "ServiceLevelAgreementRef"
          },
          "productSpecification": {
            "id": "9881",
            "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/9881",
            "version": "1.1",
            "name": "Robotics999",
            "@referredType": "ProductSpecification",
            "@type": "ProductSpecificationRef"
          },
          "channel": [
            {
              "id": "4406",
              "href": "https://mycsp.com:8080/tmf-api/salesChannelManagement/v5/channel/4406",
              "name": "Online Channel",
              "@referredType": "SalesChannel",
              "@type": "ChannelRef"
            }
          ],
          "serviceCandidate": {
            "id": "8167",
            "href": "https://mycsp.com:8080/tmf-api/serviceCatalogManagement/v5/serviceCandidate/8167",
            "version": "1.0",
            "name": "Mega Max",
            "@referredType": "ServiceCandidate",
            "@type": "ServiceCandidateRef"
          },
          "category": [
            {
              "id": "2646",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/2646",
              "version": "2.0",
              "name": "Cloud",
              "@referredType": "Category",
              "@type": "CategoryRef"
            }
          ],
          "resourceCandidate": {
            "id": "8937",
            "href": "https://mycsp.com:8080/tmf-api/resourceCatalogManagement/v5/resourceCandidate/8937",
            "name": "Mega Band",
            "@referredType": "ResourceCandidate",
            "@type": "ResourceCandidateRef"
          },
          "productOfferingTerm": [
            {
              "name": "New Client Condition",
              "description": "This product offering term is for new client at fix duration of less than a year",
              "duration": {
                "amount": 12,
                "units": "Month"
              },
              "validFor": {
                "startDateTime": "2020-09-23T00:00:00Z",
                "endDateTime": "2021-09-23T00:00:00Z"
              },
              "@type": "ProductOfferingTerm"
            }
          ],
          "productOfferingPrice": [
            {
              "id": "1747",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOfferingPrice/1747",
              "name": "Recurring Monthly Price for Business Firewall",
              "@referredType": "ProductOfferingPrice",
              "@type": "ProductOfferingPrice"
            }
          ],
          "agreement": [
            {
              "id": "5537",
              "href": "https://mycsp.com:8080/tmf-api/agreementManagement/v5/agreement/5537",
              "name": "Moon",
              "@referredType": "Agreement",
              "@type": "AgreementRef"
            }
          ],
          "attachment": [
            {
              "description": "This attachment gives a block diagram of the firewall.",
              "href": "https://mycsp.com:8080/tmf-api/documentManagement/v5/attachment/22",
              "mimeType": "image/jpeg",
              "id": "22",
              "url": "https://mycsp.com:7070/docloader?docnum=3534536",
              "@referredType": "Attachment",
              "@type": "AttachmentRefOrValue"
            }
          ],
          "marketSegment": [
            {
              "id": "1266",
              "href": "https://mycsp.com:8080/tmf-api/productOfferingReferences/v5/marketSegment/1266",
              "name": "North Region",
              "@referredType": "MarketSegment",
              "@type": "MarketSegmentRef"
            }
          ],
          "bundledProductOffering": [],
          "productOfferingRelationship": [
            {
              "id": "331",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOffering/331",
              "relationshipType": "DependsOn",
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z"
              },
              "role": "A-Role",
              "name": "Carrier Grade NAT",
              "@referredType": "ProductOffering",
              "@type": "ProductOfferingRelationship"
            }
          ],
          "prodSpecCharValueUse": [
            {
              "name": "Number of Ports",
              "id": "3331",
              "description": "The total Number of Ports for this product",
              "valueType": "number",
              "minCardinality": 1,
              "maxCardinality": 1,
              "validFor": {
                "startDateTime": "2020-09-23T00:00:00Z",
                "endDateTime": "2021-09-23T00:00:00Z"
              },
              "@type": "ProductSpecificationCharacteristicValueUse",
              "productSpecCharacteristicValue": [
                {
                  "isDefault": true,
                  "valueType": "number",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2021-09-23T00:00:00Z"
                  },
                  "value": 8,
                  "@type": "NumberCharacteristicValueSpecification"
                },
                {
                  "isDefault": false,
                  "valueType": "number",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2021-09-23T00:00:00Z"
                  },
                  "value": 16,
                  "@type": "NumberCharacteristicValueSpecification"
                }
              ],
              "productSpecification": {
                "id": "9881",
                "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/9881",
                "version": "1.1",
                "name": "Robotics999",
                "@referredType": "ProductSpecification",
                "@type": "ProductSpecificationRef"
              }
            }
          ],
          "@type": "ProductOffering"
        },
        "description": "Here is an example of a response for updating a product offering by adding a geographic area."
      },
      "Product_Offering_Update_Implicit_Merge_request": {
        "value": {
          "version": "3.0",
          "validFor": {
            "startDateTime": "2020-11-06T00:00:00Z",
            "endDateTime": "2021-11-06T00:00:00Z"
          },
          "@type": "ProductOffering"
        },
        "description": "Here is an example of a request for updating a product offering."
      },
      "Product_Offering_Update_Implicit_Merge_response": {
        "value": {
          "id": "7655",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOffering/7655",
          "name": "Basic Firewall for Business",
          "description": "This product offering suggests a firewall service that can be deployed in business customer premise.",
          "version": "3.0",
          "validFor": {
            "startDateTime": "2020-11-06T00:00:00Z",
            "endDateTime": "2021-11-06T00:00:00Z"
          },
          "lastUpdate": "2020-09-27T00:00:00Z",
          "lifecycleStatus": "Active",
          "isBundle": false,
          "isSellable": true,
          "statusReason": "Released for sale",
          "place": [
            {
              "id": "9979",
              "href": "https://mycsp.com:8080/tmf-api/geographicAddressManagement/v5/geographicAddress/9979",
              "name": "San Francisco Bay Area",
              "@referredType": "GeographicAddress",
              "@type": "PlaceRef"
            }
          ],
          "serviceLevelAgreement": {
            "id": "8082",
            "href": "https://mycsp.com:8080/tmf-api/slaManagement/v5/sla/8082",
            "name": "Gold SLA for Business",
            "@referredType": "ServiceLevelAgreement",
            "@type": "ServiceLevelAgreementRef"
          },
          "productSpecification": {
            "id": "9881",
            "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/9881",
            "version": "1.1",
            "name": "Robotics999",
            "@referredType": "ProductSpecification",
            "@type": "ProductSpecificationRef"
          },
          "channel": [
            {
              "id": "4406",
              "href": "https://mycsp.com:8080/tmf-api/salesChannelManagement/v5/channel/4406",
              "name": "Online Channel",
              "@referredType": "SalesChannel",
              "@type": "ChannelRef"
            }
          ],
          "serviceCandidate": {
            "id": "8167",
            "href": "https://mycsp.com:8080/tmf-api/serviceCatalogManagement/v5/serviceCandidate/8167",
            "version": "1.0",
            "name": "Mega Max",
            "@referredType": "ServiceCandidate",
            "@type": "ServiceCandidateRef"
          },
          "category": [
            {
              "id": "2646",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/2646",
              "version": "2.0",
              "name": "Cloud",
              "@referredType": "Category",
              "@type": "CategoryRef"
            }
          ],
          "resourceCandidate": {
            "id": "8937",
            "href": "https://mycsp.com:8080/tmf-api/resourceCatalogManagement/v5/resourceCandidate/8937",
            "name": "Mega Band",
            "@referredType": "ResourceCandidate",
            "@type": "ResourceCandidateRef"
          },
          "productOfferingTerm": [
            {
              "name": "New Client Condition",
              "description": "This product offering term is for new client at fix duration of less than a year",
              "duration": {
                "amount": 12,
                "units": "Month"
              },
              "validFor": {
                "startDateTime": "2020-09-23T00:00:00Z",
                "endDateTime": "2021-09-23T00:00:00Z"
              },
              "@type": "ProductOfferingTerm"
            }
          ],
          "productOfferingPrice": [
            {
              "id": "1747",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOfferingPrice/1747",
              "name": "Recurring Monthly Price for Business Firewall",
              "@referredType": "ProductOfferingPrice",
              "@type": "ProductOfferingPrice"
            }
          ],
          "agreement": [
            {
              "id": "5537",
              "href": "https://mycsp.com:8080/tmf-api/agreementManagement/v5/agreement/5537",
              "name": "Moon",
              "@referredType": "Agreement",
              "@type": "AgreementRef"
            }
          ],
          "attachment": [
            {
              "description": "This attachment gives a block diagram of the firewall.",
              "href": "https://mycsp.com:8080/tmf-api/documentManagement/v5/attachment/22",
              "mimeType": "image/jpeg",
              "id": "22",
              "url": "https://mycsp.com:7070/docloader?docnum=3534536",
              "@referredType": "Attachment",
              "@type": "AttachmentRefOrValue"
            }
          ],
          "marketSegment": [
            {
              "id": "1266",
              "href": "https://mycsp.com:8080/tmf-api/productOfferingReferences/v5/marketSegment/1266",
              "name": "North Region",
              "@referredType": "MarketSegment",
              "@type": "MarketSegmentRef"
            }
          ],
          "bundledProductOffering": [],
          "productOfferingRelationship": [
            {
              "id": "331",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOffering/331",
              "relationshipType": "DependsOn",
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z"
              },
              "role": "A-Role",
              "name": "Carrier Grade NAT",
              "@referredType": "ProductOffering",
              "@type": "ProductOfferingRelationship"
            }
          ],
          "prodSpecCharValueUse": [
            {
              "name": "Number of Ports",
              "id": "3331",
              "description": "The total Number of Ports for this product",
              "valueType": "number",
              "minCardinality": 1,
              "maxCardinality": 1,
              "validFor": {
                "startDateTime": "2020-09-23T00:00:00Z",
                "endDateTime": "2021-09-23T00:00:00Z"
              },
              "@type": "ProductSpecificationCharacteristicValueUse",
              "productSpecCharacteristicValue": [
                {
                  "isDefault": true,
                  "valueType": "number",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2021-09-23T00:00:00Z"
                  },
                  "value": 8,
                  "@type": "NumberCharacteristicValueSpecification"
                },
                {
                  "isDefault": false,
                  "valueType": "number",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2021-09-23T00:00:00Z"
                  },
                  "value": 16,
                  "@type": "NumberCharacteristicValueSpecification"
                }
              ],
              "productSpecification": {
                "id": "9881",
                "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/9881",
                "version": "1.1",
                "name": "Robotics999",
                "@referredType": "ProductSpecification",
                "@type": "ProductSpecificationRef"
              }
            }
          ],
          "@type": "ProductOffering"
        },
        "description": "Here is an example of a response for updating a product offering by adding a geographic area."
      },
      "Product_Offering_Update_JSON_Patch_request": {
        "value": [
          {
            "op": "add",
            "path": "/place",
            "value": {
              "id": "9989",
              "href": "https://mycsp.com:8080/tmf-api/geographicAddressManagement/v5/geographicAddress/9989",
              "name": "New York",
              "@referredType": "GeographicAddress",
              "@type": "PlaceRef"
            }
          }
        ],
        "description": "Here is an example of a request for updating a product offering by adding a geographic area."
      },
      "Product_Offering_Update_JSON_Patch_response": {
        "value": {
          "id": "7655",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOffering/7655",
          "name": "Basic Firewall for Business",
          "description": "This product offering suggests a firewall service that can be deployed in business customer premise.",
          "version": "3.0",
          "validFor": {
            "startDateTime": "2020-11-06T00:00:00Z",
            "endDateTime": "2021-11-06T00:00:00Z"
          },
          "lastUpdate": "2020-09-27T00:00:00Z",
          "lifecycleStatus": "Active",
          "isBundle": false,
          "isSellable": true,
          "statusReason": "Released for sale",
          "place": [
            {
              "id": "9979",
              "href": "https://mycsp.com:8080/tmf-api/geographicAddressManagement/v5/geographicAddress/9979",
              "name": "San Francisco Bay Area",
              "@referredType": "GeographicAddress",
              "@type": "PlaceRef"
            },
            {
              "id": "9989",
              "href": "https://mycsp.com:8080/tmf-api/geographicAddressManagement/v5/geographicAddress/9989",
              "name": "New York",
              "@referredType": "GeographicAddress",
              "@type": "PlaceRef"
            }
          ],
          "serviceLevelAgreement": {
            "id": "8082",
            "href": "https://mycsp.com:8080/tmf-api/slaManagement/v5/sla/8082",
            "name": "Gold SLA for Business",
            "@referredType": "ServiceLevelAgreement",
            "@type": "ServiceLevelAgreementRef"
          },
          "productSpecification": {
            "id": "9881",
            "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/9881",
            "version": "1.1",
            "name": "Robotics999",
            "@referredType": "ProductSpecification",
            "@type": "ProductSpecificationRef"
          },
          "channel": [
            {
              "id": "4406",
              "href": "https://mycsp.com:8080/tmf-api/salesChannelManagement/v5/channel/4406",
              "name": "Online Channel",
              "@referredType": "SalesChannel",
              "@type": "ChannelRef"
            }
          ],
          "serviceCandidate": {
            "id": "8167",
            "href": "https://mycsp.com:8080/tmf-api/serviceCatalogManagement/v5/serviceCandidate/8167",
            "version": "1.0",
            "name": "Mega Max",
            "@referredType": "ServiceCandidate",
            "@type": "ServiceCandidateRef"
          },
          "category": [
            {
              "id": "2646",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/2646",
              "version": "2.0",
              "name": "Cloud",
              "@referredType": "Category",
              "@type": "CategoryRef"
            }
          ],
          "resourceCandidate": {
            "id": "8937",
            "href": "https://mycsp.com:8080/tmf-api/resourceCatalogManagement/v5/resourceCandidate/8937",
            "name": "Mega Band",
            "@referredType": "ResourceCandidate",
            "@type": "ResourceCandidateRef"
          },
          "productOfferingTerm": [
            {
              "name": "New Client Condition",
              "description": "This product offering term is for new client at fix duration of less than a year",
              "duration": {
                "amount": 12,
                "units": "Month"
              },
              "validFor": {
                "startDateTime": "2020-09-23T00:00:00Z",
                "endDateTime": "2021-09-23T00:00:00Z"
              },
              "@type": "ProductOfferingTerm"
            }
          ],
          "productOfferingPrice": [
            {
              "id": "1747",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOfferingPrice/1747",
              "name": "Recurring Monthly Price for Business Firewall",
              "@referredType": "ProductOfferingPrice",
              "@type": "ProductOfferingPrice"
            }
          ],
          "agreement": [
            {
              "id": "5537",
              "href": "https://mycsp.com:8080/tmf-api/agreementManagement/v5/agreement/5537",
              "name": "Moon",
              "@referredType": "Agreement",
              "@type": "AgreementRef"
            }
          ],
          "attachment": [
            {
              "description": "This attachment gives a block diagram of the firewall.",
              "href": "https://mycsp.com:8080/tmf-api/documentManagement/v5/attachment/22",
              "mimeType": "image/jpeg",
              "id": "22",
              "url": "https://mycsp.com:7070/docloader?docnum=3534536",
              "@referredType": "Attachment",
              "@type": "AttachmentRefOrValue"
            }
          ],
          "marketSegment": [
            {
              "id": "1266",
              "href": "https://mycsp.com:8080/tmf-api/productOfferingReferences/v5/marketSegment/1266",
              "name": "North Region",
              "@referredType": "MarketSegment",
              "@type": "MarketSegmentRef"
            }
          ],
          "bundledProductOffering": [],
          "productOfferingRelationship": [
            {
              "id": "331",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOffering/331",
              "relationshipType": "DependsOn",
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z"
              },
              "role": "A-Role",
              "name": "Carrier Grade NAT",
              "@referredType": "ProductOffering",
              "@type": "ProductOfferingRelationship"
            }
          ],
          "prodSpecCharValueUse": [
            {
              "name": "Number of Ports",
              "id": "3331",
              "description": "The total Number of Ports for this product",
              "valueType": "number",
              "minCardinality": 1,
              "maxCardinality": 1,
              "validFor": {
                "startDateTime": "2020-09-23T00:00:00Z",
                "endDateTime": "2021-09-23T00:00:00Z"
              },
              "@type": "ProductSpecificationCharacteristicValueUse",
              "productSpecCharacteristicValue": [
                {
                  "isDefault": true,
                  "valueType": "number",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2021-09-23T00:00:00Z"
                  },
                  "value": 8,
                  "@type": "NumberCharacteristicValueSpecification"
                },
                {
                  "isDefault": false,
                  "valueType": "number",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2021-09-23T00:00:00Z"
                  },
                  "value": 16,
                  "@type": "NumberCharacteristicValueSpecification"
                }
              ],
              "productSpecification": {
                "id": "9881",
                "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/9881",
                "version": "1.1",
                "name": "Robotics999",
                "@referredType": "ProductSpecification",
                "@type": "ProductSpecificationRef"
              }
            }
          ],
          "@type": "ProductOffering"
        },
        "description": "The updated product offering with geographic area"
      },
      "Product_Offering_Update_JSON_Patch_Query_request": {
        "value": [
          {
            "op": "add",
            "path": "/place",
            "value": {
              "id": "9989",
              "href": "https://mycsp.com:8080/tmf-api/geographicAddressManagement/v5/geographicAddress/9989",
              "name": "New York",
              "@referredType": "GeographicAddress",
              "@type": "PlaceRef"
            }
          }
        ],
        "description": "Here is an example of a request for updating a product offering by changing an allowed characteristic value."
      },
      "Product_Offering_Update_JSON_Patch_Query_response": {
        "value": {
          "id": "7655",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOffering/7655",
          "name": "Basic Firewall for Business",
          "description": "This product offering suggests a firewall service that can be deployed in business customer premise.",
          "version": "3.0",
          "validFor": {
            "startDateTime": "2020-11-06T00:00:00Z",
            "endDateTime": "2021-11-06T00:00:00Z"
          },
          "lastUpdate": "2020-09-27T00:00:00Z",
          "lifecycleStatus": "Active",
          "isBundle": false,
          "isSellable": true,
          "statusReason": "Released for sale",
          "place": [
            {
              "id": "9979",
              "href": "https://mycsp.com:8080/tmf-api/geographicAddressManagement/v5/geographicAddress/9979",
              "name": "San Francisco Bay Area",
              "@referredType": "GeographicAddress",
              "@type": "PlaceRef"
            },
            {
              "id": "9989",
              "href": "https://mycsp.com:8080/tmf-api/geographicAddressManagement/v5/geographicAddress/9989",
              "name": "New York",
              "@referredType": "GeographicAddress",
              "@type": "PlaceRef"
            }
          ],
          "serviceLevelAgreement": {
            "id": "8082",
            "href": "https://mycsp.com:8080/tmf-api/slaManagement/v5/sla/8082",
            "name": "Gold SLA for Business",
            "@referredType": "ServiceLevelAgreement",
            "@type": "ServiceLevelAgreementRef"
          },
          "productSpecification": {
            "id": "9881",
            "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/9881",
            "version": "1.1",
            "name": "Robotics999",
            "@referredType": "ProductSpecification",
            "@type": "ProductSpecificationRef"
          },
          "channel": [
            {
              "id": "4406",
              "href": "https://mycsp.com:8080/tmf-api/salesChannelManagement/v5/channel/4406",
              "name": "Online Channel",
              "@referredType": "SalesChannel",
              "@type": "ChannelRef"
            }
          ],
          "serviceCandidate": {
            "id": "8167",
            "href": "https://mycsp.com:8080/tmf-api/serviceCatalogManagement/v5/serviceCandidate/8167",
            "version": "1.0",
            "name": "Mega Max",
            "@referredType": "ServiceCandidate",
            "@type": "ServiceCandidateRef"
          },
          "category": [
            {
              "id": "2646",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/2646",
              "version": "2.0",
              "name": "Cloud",
              "@referredType": "Category",
              "@type": "CategoryRef"
            }
          ],
          "resourceCandidate": {
            "id": "8937",
            "href": "https://mycsp.com:8080/tmf-api/resourceCatalogManagement/v5/resourceCandidate/8937",
            "name": "Mega Band",
            "@referredType": "ResourceCandidate",
            "@type": "ResourceCandidateRef"
          },
          "productOfferingTerm": [
            {
              "name": "New Client Condition",
              "description": "This product offering term is for new client at fix duration of less than a year",
              "duration": {
                "amount": 12,
                "units": "Month"
              },
              "validFor": {
                "startDateTime": "2020-09-23T00:00:00Z",
                "endDateTime": "2021-09-23T00:00:00Z"
              },
              "@type": "ProductOfferingTerm"
            }
          ],
          "productOfferingPrice": [
            {
              "id": "1747",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOfferingPrice/1747",
              "name": "Recurring Monthly Price for Business Firewall",
              "@referredType": "ProductOfferingPrice",
              "@type": "ProductOfferingPrice"
            }
          ],
          "agreement": [
            {
              "id": "5537",
              "href": "https://mycsp.com:8080/tmf-api/agreementManagement/v5/agreement/5537",
              "name": "Moon",
              "@referredType": "Agreement",
              "@type": "AgreementRef"
            }
          ],
          "attachment": [
            {
              "description": "This attachment gives a block diagram of the firewall.",
              "href": "https://mycsp.com:8080/tmf-api/documentManagement/v5/attachment/22",
              "mimeType": "image/jpeg",
              "id": "22",
              "url": "https://mycsp.com:7070/docloader?docnum=3534536",
              "@referredType": "Attachment",
              "@type": "AttachmentRefOrValue"
            }
          ],
          "marketSegment": [
            {
              "id": "1266",
              "href": "https://mycsp.com:8080/tmf-api/productOfferingReferences/v5/marketSegment/1266",
              "name": "North Region",
              "@referredType": "MarketSegment",
              "@type": "MarketSegmentRef"
            }
          ],
          "bundledProductOffering": [],
          "productOfferingRelationship": [
            {
              "id": "331",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOffering/331",
              "relationshipType": "DependsOn",
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z"
              },
              "role": "A-Role",
              "name": "Carrier Grade NAT",
              "@referredType": "ProductOffering",
              "@type": "ProductOfferingRelationship"
            }
          ],
          "prodSpecCharValueUse": [
            {
              "name": "Number of Ports",
              "id": "3331",
              "description": "The total Number of Ports for this product",
              "valueType": "number",
              "minCardinality": 1,
              "maxCardinality": 1,
              "validFor": {
                "startDateTime": "2020-09-23T00:00:00Z",
                "endDateTime": "2021-09-23T00:00:00Z"
              },
              "@type": "ProductSpecificationCharacteristicValueUse",
              "productSpecCharacteristicValue": [
                {
                  "isDefault": true,
                  "valueType": "number",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2021-09-23T00:00:00Z"
                  },
                  "value": 8,
                  "@type": "NumberCharacteristicValueSpecification"
                },
                {
                  "isDefault": false,
                  "valueType": "number",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2021-09-23T00:00:00Z"
                  },
                  "value": 16,
                  "@type": "NumberCharacteristicValueSpecification"
                }
              ],
              "productSpecification": {
                "id": "9881",
                "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/9881",
                "version": "1.1",
                "name": "Robotics999",
                "@referredType": "ProductSpecification",
                "@type": "ProductSpecificationRef"
              }
            }
          ],
          "@type": "ProductOffering"
        },
        "description": "The updated product offering with new characteristic value"
      },
      "Product_Offering_Price_Update_Patch_Merge_example_request": {
        "value": {
          "version": "2.0",
          "validFor": {
            "startDateTime": "2020-11-06T00:00:00Z",
            "endDateTime": "2021-11-06T00:00:00Z"
          },
          "@type": "ProductOfferingPrice"
        },
        "description": "Here is an example of a request for updating a product offering price."
      },
      "Product_Offering_Price_Update_Patch_Merge_example_response": {
        "value": {
          "id": "1747",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOfferingPrice/1747",
          "name": "Recurring Charge for Business Firewall",
          "description": "This pricing describes the recurring charge for a firewall service that can be deployed in business customer premise.",
          "version": "2.0",
          "validFor": {
            "startDateTime": "2020-11-06T00:00:00Z",
            "endDateTime": "2021-11-06T00:00:00Z"
          },
          "priceType": "recurring",
          "recurringChargePeriodType": "monthly",
          "recurringChargePeriodLength": 1,
          "lastUpdate": "2020-09-23T00:00:00Z",
          "isBundle": false,
          "lifecycleStatus": "Active",
          "unitOfMeasure": {
            "amount": 1,
            "units": "Month"
          },
          "price": {
            "unit": "EUR",
            "value": 50
          },
          "percentage": 0,
          "productOfferingTerm": [
            {
              "name": "12 Month",
              "description": "12 month contract",
              "duration": {
                "amount": 12,
                "units": "Month"
              },
              "validFor": {
                "startDateTime": "2020-09-22T16:42:23Z",
                "endDateTime": "2021-09-22T00:00:00Z"
              },
              "@type": "ProductOfferingTerm"
            }
          ],
          "place": [
            {
              "id": "2707",
              "href": "https://mycsp.com:8080/tmf-api/geographicAddressManagement/v5/geographicAddress/2707",
              "name": "San Francisco Bay Area",
              "@referredType": "GeographicAddress",
              "@type": "PlaceRef"
            }
          ],
          "policy": [
            {
              "@referredType": "Policy",
              "name": "PriceRuleNo1",
              "id": "2503",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/policy/2503",
              "@type": "PolicyRef"
            }
          ],
          "pricingLogicAlgorithm": [
            {
              "id": "2777",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/PricingLogicAlgorithm/2777",
              "name": "RecurringRatingPLA",
              "description": "Algorithm that rates Recurring event",
              "plaSpecId": "2801",
              "validFor": {
                "startDateTime": "2020-09-22T16:42:23Z",
                "endDateTime": "2021-09-22T00:00:00Z"
              },
              "@type": "PricingLogicAlgorithm"
            }
          ],
          "tax": [
            {
              "taxAmount": {
                "unit": "EUR",
                "value": 10
              },
              "taxCategory": "VAT",
              "taxRate": 20,
              "@type": "TaxItem"
            }
          ],
          "popRelationship": [
            {
              "id": "1741",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOfferingPrice/1741",
              "relationshipType": "discountedBy",
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z",
                "endDateTime": "2021-09-22T00:00:00Z"
              },
              "role": "A-Charge",
              "@referredType": "ProductOfferingPriceAlteration",
              "@type": "ProductOfferingPriceRelationship"
            }
          ],
          "@type": "ProductOfferingPrice"
        },
        "description": "Here is an example of a response for updating a product offering price using JSON Patch."
      },
      "Product_Offering_Price_Update_Implicit_Merge_example_request": {
        "value": {
          "version": "2.0",
          "validFor": {
            "startDateTime": "2020-11-06T00:00:00Z",
            "endDateTime": "2021-11-06T00:00:00Z"
          },
          "@type": "ProductOfferingPrice"
        },
        "description": "Here is an example of a request for updating a product offering price."
      },
      "Product_Offering_Price_Update_Implicit_Merge_example_response": {
        "value": {
          "id": "1747",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOfferingPrice/1747",
          "name": "Recurring Charge for Business Firewall",
          "description": "This pricing describes the recurring charge for a firewall service that can be deployed in business customer premise.",
          "version": "2.0",
          "validFor": {
            "startDateTime": "2020-11-06T00:00:00Z",
            "endDateTime": "2021-11-06T00:00:00Z"
          },
          "priceType": "recurring",
          "recurringChargePeriodType": "monthly",
          "recurringChargePeriodLength": 1,
          "lastUpdate": "2020-09-23T00:00:00Z",
          "isBundle": false,
          "lifecycleStatus": "Active",
          "unitOfMeasure": {
            "amount": 1,
            "units": "Month"
          },
          "price": {
            "unit": "EUR",
            "value": 50
          },
          "percentage": 0,
          "productOfferingTerm": [
            {
              "name": "12 Month",
              "description": "12 month contract",
              "duration": {
                "amount": 12,
                "units": "Month"
              },
              "validFor": {
                "startDateTime": "2020-09-22T16:42:23Z",
                "endDateTime": "2021-09-22T00:00:00Z"
              },
              "@type": "ProductOfferingTerm"
            }
          ],
          "place": [
            {
              "id": "2707",
              "href": "https://mycsp.com:8080/tmf-api/geographicAddressManagement/v5/geographicAddress/2707",
              "name": "San Francisco Bay Area",
              "@referredType": "GeographicAddress",
              "@type": "PlaceRef"
            }
          ],
          "policy": [
            {
              "@referredType": "Policy",
              "name": "PriceRuleNo1",
              "id": "2503",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/policy/2503",
              "@type": "PolicyRef"
            }
          ],
          "pricingLogicAlgorithm": [
            {
              "id": "2777",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/PricingLogicAlgorithm/2777",
              "name": "RecurringRatingPLA",
              "description": "Algorithm that rates Recurring event",
              "plaSpecId": "2801",
              "validFor": {
                "startDateTime": "2020-09-22T16:42:23Z",
                "endDateTime": "2021-09-22T00:00:00Z"
              },
              "@type": "PricingLogicAlgorithm"
            }
          ],
          "tax": [
            {
              "taxAmount": {
                "unit": "EUR",
                "value": 10
              },
              "taxCategory": "VAT",
              "taxRate": 20,
              "@type": "TaxItem"
            }
          ],
          "popRelationship": [
            {
              "id": "1741",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOfferingPrice/1741",
              "relationshipType": "discountedBy",
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z",
                "endDateTime": "2021-09-22T00:00:00Z"
              },
              "role": "A-Charge",
              "@referredType": "ProductOfferingPriceAlteration",
              "@type": "ProductOfferingPriceRelationship"
            }
          ],
          "@type": "ProductOfferingPrice"
        },
        "description": "Here is an example of a response for updating a product offering price using JSON Patch."
      },
      "Product_Offering_Price_Update_JSON_Patch_request": {
        "value": [
          {
            "op": "add",
            "path": "/place",
            "value": {
              "id": "2807",
              "href": "https://mycsp.com:8080/tmf-api/geographicAddressManagement/v5/geographicAddress/2807",
              "name": "San Francisco Bay Area",
              "@referredType": "GeographicAddress",
              "@type": "PlaceRef"
            }
          }
        ],
        "description": "Here is an example of a request for updating a product offering price by adding a geographic area."
      },
      "Product_Offering_Price_Update_JSON_Patch_response": {
        "value": {
          "id": "1747",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOfferingPrice/1747",
          "name": "Recurring Charge for Business Firewall",
          "description": "This pricing describes the recurring charge for a firewall service that can be deployed in business customer premise.",
          "version": "2.0",
          "validFor": {
            "startDateTime": "2020-11-06T00:00:00Z",
            "endDateTime": "2021-11-06T00:00:00Z"
          },
          "priceType": "recurring",
          "recurringChargePeriodType": "monthly",
          "recurringChargePeriodLength": 1,
          "lastUpdate": "2020-09-23T00:00:00Z",
          "isBundle": false,
          "lifecycleStatus": "Active",
          "unitOfMeasure": {
            "amount": 1,
            "units": "Month"
          },
          "price": {
            "unit": "EUR",
            "value": 50
          },
          "percentage": 0,
          "productOfferingTerm": [
            {
              "name": "12 Month",
              "description": "12 month contract",
              "duration": {
                "amount": 12,
                "units": "Month"
              },
              "validFor": {
                "startDateTime": "2020-09-22T16:42:23Z",
                "endDateTime": "2021-09-22T00:00:00Z"
              },
              "@type": "ProductOfferingTerm"
            }
          ],
          "place": [
            {
              "id": "2707",
              "href": "https://mycsp.com:8080/tmf-api/geographicAddressManagement/v5/geographicAddress/2707",
              "name": "San Francisco Bay Area",
              "@referredType": "GeographicAddress",
              "@type": "PlaceRef"
            },
            {
              "id": "2807",
              "href": "https://mycsp.com:8080/tmf-api/geographicAddressManagement/v5/geographicAddress/2807",
              "name": "San Francisco Bay Area",
              "@referredType": "GeographicAddress",
              "@type": "PlaceRef"
            }
          ],
          "policy": [
            {
              "@referredType": "Policy",
              "name": "PriceRuleNo1",
              "id": "2503",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/policy/2503",
              "@type": "PolicyRef"
            }
          ],
          "pricingLogicAlgorithm": [
            {
              "id": "2777",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/PricingLogicAlgorithm/2777",
              "name": "RecurringRatingPLA",
              "description": "Algorithm that rates Recurring event",
              "plaSpecId": "2801",
              "validFor": {
                "startDateTime": "2020-09-22T16:42:23Z",
                "endDateTime": "2021-09-22T00:00:00Z"
              },
              "@type": "PricingLogicAlgorithm"
            }
          ],
          "tax": [
            {
              "taxAmount": {
                "unit": "EUR",
                "value": 10
              },
              "taxCategory": "VAT",
              "taxRate": 20,
              "@type": "TaxItem"
            }
          ],
          "popRelationship": [
            {
              "id": "1741",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOfferingPrice/1741",
              "relationshipType": "discountedBy",
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z",
                "endDateTime": "2021-09-22T00:00:00Z"
              },
              "role": "A-Charge",
              "@referredType": "ProductOfferingPriceAlteration",
              "@type": "ProductOfferingPriceRelationship"
            }
          ],
          "@type": "ProductOfferingPrice"
        },
        "description": "The updated product offering price with geographic area"
      },
      "Product_Offering_Price_Update_JSON_Patch_Query_request": {
        "value": [
          {
            "op": "remove",
            "path": "/place?id=2807"
          }
        ],
        "description": "Here is an example of a request for updating a product offering price by removing a specific geographic area."
      },
      "Product_Offering_Price_Update_JSON_Patch_Query_response": {
        "value": {
          "id": "1747",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOfferingPrice/1747",
          "name": "Recurring Charge for Business Firewall",
          "description": "This pricing describes the recurring charge for a firewall service that can be deployed in business customer premise.",
          "version": "2.0",
          "validFor": {
            "startDateTime": "2020-11-06T00:00:00Z",
            "endDateTime": "2021-11-06T00:00:00Z"
          },
          "priceType": "recurring",
          "recurringChargePeriodType": "monthly",
          "recurringChargePeriodLength": 1,
          "lastUpdate": "2020-09-23T00:00:00Z",
          "isBundle": false,
          "lifecycleStatus": "Active",
          "unitOfMeasure": {
            "amount": 1,
            "units": "Month"
          },
          "price": {
            "unit": "EUR",
            "value": 50
          },
          "percentage": 0,
          "productOfferingTerm": [
            {
              "name": "12 Month",
              "description": "12 month contract",
              "duration": {
                "amount": 12,
                "units": "Month"
              },
              "validFor": {
                "startDateTime": "2020-09-22T16:42:23Z",
                "endDateTime": "2021-09-22T00:00:00Z"
              },
              "@type": "ProductOfferingTerm"
            }
          ],
          "place": [
            {
              "id": "2707",
              "href": "https://mycsp.com:8080/tmf-api/geographicAddressManagement/v5/geographicAddress/2707",
              "name": "San Francisco Bay Area",
              "@referredType": "GeographicAddress",
              "@type": "PlaceRef"
            }
          ],
          "policy": [
            {
              "@referredType": "Policy",
              "name": "PriceRuleNo1",
              "id": "2503",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/policy/2503",
              "@type": "PolicyRef"
            }
          ],
          "pricingLogicAlgorithm": [
            {
              "id": "2777",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/PricingLogicAlgorithm/2777",
              "name": "RecurringRatingPLA",
              "description": "Algorithm that rates Recurring event",
              "plaSpecId": "2801",
              "validFor": {
                "startDateTime": "2020-09-22T16:42:23Z",
                "endDateTime": "2021-09-22T00:00:00Z"
              },
              "@type": "PricingLogicAlgorithm"
            }
          ],
          "tax": [
            {
              "taxAmount": {
                "unit": "EUR",
                "value": 10
              },
              "taxCategory": "VAT",
              "taxRate": 20,
              "@type": "TaxItem"
            }
          ],
          "popRelationship": [
            {
              "id": "1741",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOfferingPrice/1741",
              "relationshipType": "discountedBy",
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z",
                "endDateTime": "2021-09-22T00:00:00Z"
              },
              "role": "A-Charge",
              "@referredType": "ProductOfferingPriceAlteration",
              "@type": "ProductOfferingPriceRelationship"
            }
          ],
          "@type": "ProductOfferingPrice"
        },
        "description": "The updated product offering price with removed geographic area"
      },
      "Product_Specification_Update_Patch_Merge_example_request": {
        "value": {
          "version": "3.1",
          "validFor": {
            "startDateTime": "2020-11-24T00:00:00Z",
            "endDateTime": "2022-11-24T00:00:00Z"
          },
          "@type": "ProductSpecification"
        },
        "description": "Here is an example of a request for updating a product specification."
      },
      "Product_Specification_Update_Patch_Merge_example_response": {
        "value": {
          "id": "9881",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/9881",
          "name": "Cisco Firepower NGFW",
          "brand": "Cisco",
          "productNumber": "CSC-340-NGFW",
          "description": "Powerful product that integrates with a firewall, including intrusion prevention, advanced malware protection, cloud-based sandboxing, URL filtering, endpoint protection, web gateway, email security, network traffic analysis, network access control and CASB.",
          "isBundle": true,
          "lastUpdate": "2020-09-23T16:42:23Z",
          "lifecycleStatus": "Active",
          "version": "3.1",
          "validFor": {
            "startDateTime": "2020-11-24T00:00:00Z",
            "endDateTime": "2022-11-24T00:00:00Z"
          },
          "relatedParty": [
            {
              "role": "Owner",
              "@type": "RelatedPartyRefOrPartyRoleRef",
              "partyOrPartyRole": {
                "id": "1234",
                "href": "https://mycsp.com:8080/tmf-api/partyManagement/v5/partyRole/1234",
                "name": "Gustave Flaubert",
                "@type": "PartyRef",
                "@referredType": "Individual"
              }
            }
          ],
          "attachment": [
            {
              "id": "22",
              "href": "https://mycsp.com:8080/tmf-api/documentManagement/v5/attachment/22",
              "name": "Product Picture",
              "mimeType": "image/jpeg",
              "url": "https://mycsp.com:7070/docloader?docnum=774451234",
              "@referredType": "Attachment",
              "@type": "AttachmentRefOrValue"
            },
            {
              "id": "33",
              "href": "https://mycsp.com:8080/tmf-api/documentManagement/v5/attachment/22",
              "name": "Product Manual",
              "mimeType": "application/pdf",
              "url": "https://mycsp.com:7070/docloader?docnum=774454321",
              "@referredType": "Attachment",
              "@type": "AttachmentRefOrValue"
            }
          ],
          "bundledProductSpecification": [
            {
              "id": "15",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/15",
              "name": "URL Filter",
              "@type": "BundledProductSpecification",
              "@baseType": "",
              "lifecycleStatus": "Active"
            },
            {
              "id": "64",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/64",
              "name": "Malware Protector",
              "@type": "BundledProductSpecification",
              "@baseType": "",
              "lifecycleStatus": "Active"
            }
          ],
          "targetProductSchema": {
            "@type": "Firewall",
            "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Product/Firewall.schema.json"
          },
          "productSpecificationRelationship": [
            {
              "id": "23",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/23",
              "relationshipType": "OptionalFor",
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z"
              },
              "name": "DataPlan",
              "role": "A-Item",
              "@referredType": "ProductSpecification",
              "@type": "ProductSpecificationRelationship"
            }
          ],
          "serviceSpecification": [
            {
              "id": "22",
              "href": "https://mycsp.com:8080/tmf-api/serviceCatalogManagement/v5/serviceSpecification/22",
              "name": "Firewall",
              "version": "1.0",
              "@referredType": "ServiceSpecification",
              "@type": "ServiceSpecificationRef"
            }
          ],
          "resourceSpecification": [
            {
              "id": "63",
              "href": "https://mycsp.com:8080/tmf-api/resourceCatalogManagement/v5/resourceSpecification/63",
              "name": "Firewall Port",
              "version": "1.0",
              "@referredType": "PhysicalResourceSpecification",
              "@type": "ResourceSpecificationRef"
            }
          ],
          "productSpecCharacteristic": [
            {
              "name": "Number of Ports",
              "description": "The total Number of Ports for this product",
              "valueType": "number",
              "configurable": true,
              "minCardinality": 1,
              "maxCardinality": 1,
              "isUnique": true,
              "@type": "CharacteristicSpecification",
              "productSpecCharRelationship": [
                {
                  "parentSpecificationId": "43",
                  "parentSpecificationHref": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/43",
                  "characteristicSpecificationId": "2",
                  "relationshipType": "Dependency",
                  "name": "Bandwidth",
                  "validFor": {
                    "startDateTime": "2020-09-23T16:42:23-04:00"
                  },
                  "@type": "CharacteristicSpecificationRelationship"
                }
              ],
              "characteristicValueSpecification": [
                {
                  "isDefault": true,
                  "valueType": "number",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2022-11-24T00:00:00Z"
                  },
                  "value": 8,
                  "@type": "NumberCharacteristicValueSpecification"
                },
                {
                  "isDefault": false,
                  "valueType": "number",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2022-11-24T00:00:00Z"
                  },
                  "value": 16,
                  "@type": "NumberCharacteristicValueSpecification"
                },
                {
                  "isDefault": false,
                  "valueType": "number",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2022-11-24T00:00:00Z"
                  },
                  "value": 24,
                  "@type": "NumberCharacteristicValueSpecification"
                }
              ],
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z"
              }
            },
            {
              "name": "Color",
              "description": "Color of the Firewall housing",
              "valueType": "string",
              "configurable": true,
              "minCardinality": 1,
              "maxCardinality": 1,
              "extensible": true,
              "isUnique": true,
              "@type": "CharacteristicSpecification",
              "characteristicValueSpecification": [
                {
                  "isDefault": true,
                  "valueType": "string",
                  "value": "Black",
                  "@type": "StringCharacteristicValueSpecification"
                },
                {
                  "isDefault": false,
                  "valueType": "string",
                  "value": "White",
                  "@type": "StringCharacteristicValueSpecification"
                }
              ],
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z"
              }
            }
          ],
          "@type": "ProductSpecification"
        },
        "description": "Here is an example of a response for updating a product specification using JSON Patch."
      },
      "Product_Specification_Update_Implicit_Merge_example_request": {
        "value": {
          "version": "3.1",
          "validFor": {
            "startDateTime": "2020-11-24T00:00:00Z",
            "endDateTime": "2022-11-24T00:00:00Z"
          },
          "@type": "ProductSpecification"
        },
        "description": "Here is an example of a request for updating a product specification."
      },
      "Product_Specification_Update_Implicit_Merge_example_response": {
        "value": {
          "id": "9881",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/9881",
          "name": "Cisco Firepower NGFW",
          "brand": "Cisco",
          "productNumber": "CSC-340-NGFW",
          "description": "Powerful product that integrates with a firewall, including intrusion prevention, advanced malware protection, cloud-based sandboxing, URL filtering, endpoint protection, web gateway, email security, network traffic analysis, network access control and CASB.",
          "isBundle": true,
          "lastUpdate": "2020-09-23T16:42:23Z",
          "lifecycleStatus": "Active",
          "version": "3.1",
          "validFor": {
            "startDateTime": "2020-11-24T00:00:00Z",
            "endDateTime": "2022-11-24T00:00:00Z"
          },
          "relatedParty": [
            {
              "role": "Owner",
              "@type": "RelatedPartyRefOrPartyRoleRef",
              "partyOrPartyRole": {
                "id": "1234",
                "href": "https://mycsp.com:8080/tmf-api/partyManagement/v5/partyRole/1234",
                "name": "Gustave Flaubert",
                "@type": "PartyRef",
                "@referredType": "Individual"
              }
            }
          ],
          "attachment": [
            {
              "id": "22",
              "href": "https://mycsp.com:8080/tmf-api/documentManagement/v5/attachment/22",
              "name": "Product Picture",
              "mimeType": "image/jpeg",
              "url": "https://mycsp.com:7070/docloader?docnum=774451234",
              "@referredType": "Attachment",
              "@type": "AttachmentRefOrValue"
            },
            {
              "id": "33",
              "href": "https://mycsp.com:8080/tmf-api/documentManagement/v5/attachment/22",
              "name": "Product Manual",
              "mimeType": "application/pdf",
              "url": "https://mycsp.com:7070/docloader?docnum=774454321",
              "@referredType": "Attachment",
              "@type": "AttachmentRefOrValue"
            }
          ],
          "bundledProductSpecification": [
            {
              "id": "15",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/15",
              "name": "URL Filter",
              "@type": "BundledProductSpecification",
              "@baseType": "",
              "lifecycleStatus": "Active"
            },
            {
              "id": "64",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/64",
              "name": "Malware Protector",
              "@type": "BundledProductSpecification",
              "@baseType": "",
              "lifecycleStatus": "Active"
            }
          ],
          "targetProductSchema": {
            "@type": "Firewall",
            "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Product/Firewall.schema.json"
          },
          "productSpecificationRelationship": [
            {
              "id": "23",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/23",
              "relationshipType": "OptionalFor",
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z"
              },
              "name": "DataPlan",
              "role": "A-Item",
              "@referredType": "ProductSpecification",
              "@type": "ProductSpecificationRelationship"
            }
          ],
          "serviceSpecification": [
            {
              "id": "22",
              "href": "https://mycsp.com:8080/tmf-api/serviceCatalogManagement/v5/serviceSpecification/22",
              "name": "Firewall",
              "version": "1.0",
              "@referredType": "ServiceSpecification",
              "@type": "ServiceSpecificationRef"
            }
          ],
          "resourceSpecification": [
            {
              "id": "63",
              "href": "https://mycsp.com:8080/tmf-api/resourceCatalogManagement/v5/resourceSpecification/63",
              "name": "Firewall Port",
              "version": "1.0",
              "@referredType": "PhysicalResourceSpecification",
              "@type": "ResourceSpecificationRef"
            }
          ],
          "productSpecCharacteristic": [
            {
              "name": "Number of Ports",
              "description": "The total Number of Ports for this product",
              "valueType": "number",
              "configurable": true,
              "minCardinality": 1,
              "maxCardinality": 1,
              "isUnique": true,
              "@type": "CharacteristicSpecification",
              "productSpecCharRelationship": [
                {
                  "parentSpecificationId": "43",
                  "parentSpecificationHref": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/43",
                  "characteristicSpecificationId": "2",
                  "relationshipType": "Dependency",
                  "name": "Bandwidth",
                  "validFor": {
                    "startDateTime": "2020-09-23T16:42:23-04:00"
                  },
                  "@type": "CharacteristicSpecificationRelationship"
                }
              ],
              "characteristicValueSpecification": [
                {
                  "isDefault": true,
                  "valueType": "number",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2022-11-24T00:00:00Z"
                  },
                  "value": 8,
                  "@type": "NumberCharacteristicValueSpecification"
                },
                {
                  "isDefault": false,
                  "valueType": "number",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2022-11-24T00:00:00Z"
                  },
                  "value": 16,
                  "@type": "NumberCharacteristicValueSpecification"
                },
                {
                  "isDefault": false,
                  "valueType": "number",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2022-11-24T00:00:00Z"
                  },
                  "value": 24,
                  "@type": "NumberCharacteristicValueSpecification"
                }
              ],
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z"
              }
            },
            {
              "name": "Color",
              "description": "Color of the Firewall housing",
              "valueType": "string",
              "configurable": true,
              "minCardinality": 1,
              "maxCardinality": 1,
              "extensible": true,
              "isUnique": true,
              "@type": "CharacteristicSpecification",
              "characteristicValueSpecification": [
                {
                  "isDefault": true,
                  "valueType": "string",
                  "value": "Black",
                  "@type": "StringCharacteristicValueSpecification"
                },
                {
                  "isDefault": false,
                  "valueType": "string",
                  "value": "White",
                  "@type": "StringCharacteristicValueSpecification"
                }
              ],
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z"
              }
            }
          ],
          "@type": "ProductSpecification"
        },
        "description": "Here is an example of a response for updating a product specification using JSON Patch."
      },
      "Product_Specification_Update_JSON_Patch_request": {
        "value": [
          {
            "op": "add",
            "path": "/relatedParty",
            "value": {
              "role": "Technical Expert",
              "@type": "RelatedPartyRefOrPartyRoleRef",
              "partyOrPartyRole": {
                "id": "4321",
                "href": "https://mycsp.com:8080/tmf-api/partyManagement/v5/partyRole/4321",
                "name": "Jean Jones",
                "@type": "PartyRefOrPartyRoleRef",
                "@referredType": "PartyRole"
              }
            }
          }
        ],
        "description": "Here is an example of a request for updating a product specification by adding a related party."
      },
      "Product_Specification_Update_JSON_Patch_response": {
        "value": {
          "id": "9881",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/9881",
          "name": "Cisco Firepower NGFW",
          "brand": "Cisco",
          "productNumber": "CSC-340-NGFW",
          "description": "Powerful product that integrates with a firewall, including intrusion prevention, advanced malware protection, cloud-based sandboxing, URL filtering, endpoint protection, web gateway, email security, network traffic analysis, network access control and CASB.",
          "isBundle": true,
          "lastUpdate": "2020-09-23T16:42:23Z",
          "lifecycleStatus": "Active",
          "version": "3.1",
          "validFor": {
            "startDateTime": "2020-11-24T00:00:00Z",
            "endDateTime": "2022-11-24T00:00:00Z"
          },
          "relatedParty": [
            {
              "role": "Owner",
              "@type": "RelatedPartyRefOrPartyRoleRef",
              "partyOrPartyRole": {
                "id": "1234",
                "href": "https://mycsp.com:8080/tmf-api/partyManagement/v5/partyRole/1234",
                "name": "Gustave Flaubert",
                "@type": "PartyRef",
                "@referredType": "Individual"
              }
            },
            {
              "role": "Technical Expert",
              "@type": "RelatedPartyRefOrPartyRoleRef",
              "partyOrPartyRole": {
                "id": "4321",
                "href": "https://mycsp.com:8080/tmf-api/partyManagement/v5/partyRole/4321",
                "name": "Jean Jones",
                "@type": "PartyRefOrPartyRoleRef",
                "@referredType": "PartyRole"
              }
            }
          ],
          "attachment": [
            {
              "id": "22",
              "href": "https://mycsp.com:8080/tmf-api/documentManagement/v5/attachment/22",
              "name": "Product Picture",
              "mimeType": "image/jpeg",
              "url": "https://mycsp.com:7070/docloader?docnum=774451234",
              "@referredType": "Attachment"
            },
            {
              "id": "33",
              "href": "https://mycsp.com:8080/tmf-api/documentManagement/v5/attachment/22",
              "name": "Product Manual",
              "mimeType": "application/pdf",
              "url": "https://mycsp.com:7070/docloader?docnum=774454321",
              "@referredType": "Attachment"
            }
          ],
          "bundledProductSpecification": [
            {
              "id": "15",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/15",
              "name": "URL Filter",
              "@type": "BundledProductSpecification",
              "lifecycleStatus": "Active"
            },
            {
              "id": "64",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/64",
              "name": "Malware Protector",
              "@type": "BundledProductSpecification",
              "lifecycleStatus": "Active"
            }
          ],
          "targetProductSchema": {
            "@type": "Firewall",
            "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Product/Firewall.schema.json"
          },
          "productSpecificationRelationship": [
            {
              "id": "23",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/23",
              "relationshipType": "OptionalFor",
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z"
              },
              "name": "DataPlan",
              "role": "A-Item",
              "@referredType": "ProductSpecification",
              "@type": "ProductSpecificationRelationship"
            }
          ],
          "serviceSpecification": [
            {
              "id": "22",
              "href": "https://mycsp.com:8080/tmf-api/serviceCatalogManagement/v5/serviceSpecification/22",
              "name": "Firewall",
              "version": "1.0",
              "@referredType": "ServiceSpecification",
              "@type": "ServiceSpecificationRef"
            }
          ],
          "resourceSpecification": [
            {
              "id": "63",
              "href": "https://mycsp.com:8080/tmf-api/resourceCatalogManagement/v5/resourceSpecification/63",
              "name": "Firewall Port",
              "version": "1.0",
              "@referredType": "PhysicalResourceSpecification",
              "@type": "ResourceSpecificationRef"
            }
          ],
          "productSpecCharacteristic": [
            {
              "name": "Number of Ports",
              "description": "The total Number of Ports for this product",
              "valueType": "number",
              "configurable": true,
              "minCardinality": 1,
              "maxCardinality": 1,
              "isUnique": true,
              "@type": "ProductSpecificationCharacteristic",
              "productSpecCharRelationship": [
                {
                  "parentSpecificationId": "43",
                  "parentSpecificationHref": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/43",
                  "characteristicSpecificationId": "2",
                  "relationshipType": "Dependency",
                  "name": "Bandwidth",
                  "validFor": {
                    "startDateTime": "2020-09-23T16:42:23-04:00"
                  },
                  "@type": "CharacteristicSpecificationRelationship"
                }
              ],
              "characteristicValueSpecification": [
                {
                  "isDefault": true,
                  "valueType": "number",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2022-11-24T00:00:00Z"
                  },
                  "value": 8,
                  "@type": "NumberCharacteristicValueSpecification"
                },
                {
                  "isDefault": false,
                  "valueType": "number",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2022-11-24T00:00:00Z"
                  },
                  "value": 16,
                  "@type": "NumberCharacteristicValueSpecification"
                },
                {
                  "isDefault": false,
                  "valueType": "number",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2022-11-24T00:00:00Z"
                  },
                  "value": 24,
                  "@type": "NumberCharacteristicValueSpecification"
                }
              ],
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z"
              }
            },
            {
              "name": "Color",
              "description": "Color of the Firewall housing",
              "valueType": "string",
              "configurable": true,
              "minCardinality": 1,
              "maxCardinality": 1,
              "extensible": true,
              "isUnique": true,
              "@type": "CharacteristicSpecification",
              "characteristicValueSpecification": [
                {
                  "isDefault": true,
                  "valueType": "string",
                  "value": "Black",
                  "@type": "StringCharacteristicValueSpecification"
                },
                {
                  "isDefault": false,
                  "valueType": "string",
                  "value": "White",
                  "@type": "StringCharacteristicValueSpecification"
                }
              ],
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z"
              }
            }
          ],
          "@type": "ProductSpecification"
        },
        "description": "The updated product specification with related party"
      },
      "Product_Specification_Update_JSON_Patch_Query_request": {
        "value": [
          {
            "op": "replace",
            "path": "/productSpecCharacteristic/characteristicValueSpecification/isDefault?value=/productSpecCharacteristic/characteristicValueSpecification/Black",
            "value": false
          },
          {
            "op": "replace",
            "path": "/productSpecCharacteristic/characteristicValueSpecification/isDefault?value=/productSpecCharacteristic/characteristicValueSpecification/White",
            "value": true
          }
        ],
        "description": "Here is an example of a request for updating a product specification by changing the default value for a characteristic."
      },
      "Product_Specification_Update_JSON_Patch_Query_response": {
        "value": {
          "id": "9881",
          "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/9881",
          "name": "Cisco Firepower NGFW",
          "brand": "Cisco",
          "productNumber": "CSC-340-NGFW",
          "description": "Powerful product that integrates with a firewall, including intrusion prevention, advanced malware protection, cloud-based sandboxing, URL filtering, endpoint protection, web gateway, email security, network traffic analysis, network access control and CASB.",
          "isBundle": true,
          "lastUpdate": "2020-09-23T16:42:23Z",
          "lifecycleStatus": "Active",
          "version": "3.1",
          "validFor": {
            "startDateTime": "2020-11-24T00:00:00Z",
            "endDateTime": "2022-11-24T00:00:00Z"
          },
          "relatedParty": [
            {
              "role": "Owner",
              "@type": "RelatedPartyRefOrPartyRoleRef",
              "partyOrPartyRole": {
                "id": "1234",
                "href": "https://mycsp.com:8080/tmf-api/partyManagement/v5/partyRole/1234",
                "name": "Gustave Flaubert",
                "@type": "PartyRef",
                "@referredType": "Individual"
              }
            },
            {
              "role": "Technical Expert",
              "@type": "RelatedPartyRefOrPartyRoleRef",
              "partyOrPartyRole": {
                "id": "4321",
                "href": "https://mycsp.com:8080/tmf-api/partyManagement/v5/partyRole/4321",
                "name": "Jean Jones",
                "@type": "PartyRefOrPartyRoleRef",
                "@referredType": "PartyRole"
              }
            }
          ],
          "attachment": [
            {
              "id": "22",
              "href": "https://mycsp.com:8080/tmf-api/documentManagement/v5/attachment/22",
              "name": "Product Picture",
              "mimeType": "image/jpeg",
              "url": "https://mycsp.com:7070/docloader?docnum=774451234",
              "@referredType": "Attachment"
            },
            {
              "id": "33",
              "href": "https://mycsp.com:8080/tmf-api/documentManagement/v5/attachment/22",
              "name": "Product Manual",
              "mimeType": "application/pdf",
              "url": "https://mycsp.com:7070/docloader?docnum=774454321",
              "@referredType": "Attachment"
            }
          ],
          "bundledProductSpecification": [
            {
              "id": "15",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/15",
              "name": "URL Filter",
              "@type": "BundledProductSpecification",
              "lifecycleStatus": "Active"
            },
            {
              "id": "64",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/64",
              "name": "Malware Protector",
              "@type": "BundledProductSpecification",
              "lifecycleStatus": "Active"
            }
          ],
          "targetProductSchema": {
            "@type": "Firewall",
            "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Product/Firewall.schema.json"
          },
          "productSpecificationRelationship": [
            {
              "id": "23",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/23",
              "relationshipType": "OptionalFor",
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z"
              },
              "name": "DataPlan",
              "role": "A-Item",
              "@referredType": "ProductSpecification",
              "@type": "ProductSpecificationRelationship"
            }
          ],
          "serviceSpecification": [
            {
              "id": "22",
              "href": "https://mycsp.com:8080/tmf-api/serviceCatalogManagement/v5/serviceSpecification/22",
              "name": "Firewall",
              "version": "1.0",
              "@referredType": "ServiceSpecification",
              "@type": "ServiceSpecificationRef"
            }
          ],
          "resourceSpecification": [
            {
              "id": "63",
              "href": "https://mycsp.com:8080/tmf-api/resourceCatalogManagement/v5/resourceSpecification/63",
              "name": "Firewall Port",
              "version": "1.0",
              "@referredType": "PhysicalResourceSpecification",
              "@type": "ResourceSpecificationRef"
            }
          ],
          "productSpecCharacteristic": [
            {
              "name": "Number of Ports",
              "description": "The total Number of Ports for this product",
              "valueType": "number",
              "configurable": true,
              "minCardinality": 1,
              "maxCardinality": 1,
              "isUnique": true,
              "@type": "ProductSpecificationCharacteristic",
              "productSpecCharRelationship": [
                {
                  "parentSpecificationId": "43",
                  "parentSpecificationHref": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/43",
                  "characteristicSpecificationId": "2",
                  "relationshipType": "Dependency",
                  "name": "Bandwidth",
                  "validFor": {
                    "startDateTime": "2020-09-23T16:42:23-04:00"
                  },
                  "@type": "CharacteristicSpecificationRelationship"
                }
              ],
              "characteristicValueSpecification": [
                {
                  "isDefault": true,
                  "valueType": "number",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2022-11-24T00:00:00Z"
                  },
                  "value": 8,
                  "@type": "NumberCharacteristicValueSpecification"
                },
                {
                  "isDefault": false,
                  "valueType": "number",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2022-11-24T00:00:00Z"
                  },
                  "value": 16,
                  "@type": "NumberCharacteristicValueSpecification"
                },
                {
                  "isDefault": false,
                  "valueType": "number",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2022-11-24T00:00:00Z"
                  },
                  "value": 24,
                  "@type": "NumberCharacteristicValueSpecification"
                }
              ],
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z"
              }
            },
            {
              "name": "Color",
              "description": "Color of the Firewall housing",
              "valueType": "string",
              "configurable": true,
              "minCardinality": 1,
              "maxCardinality": 1,
              "extensible": true,
              "isUnique": true,
              "@type": "CharacteristicSpecification",
              "characteristicValueSpecification": [
                {
                  "isDefault": false,
                  "valueType": "string",
                  "value": "Black",
                  "@type": "StringCharacteristicValueSpecification"
                },
                {
                  "isDefault": true,
                  "valueType": "string",
                  "value": "White",
                  "@type": "StringCharacteristicValueSpecification"
                }
              ],
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23Z"
              }
            }
          ],
          "@type": "ProductSpecification"
        },
        "description": "The updated product specification with changed default value for a characteristic"
      },
      "CreateCatalogEvent_request": {
        "value": {
          "correlationId": "95003dd3-e325",
          "description": "CatalogCreateEvent illustration",
          "domain": "Commercial",
          "eventId": "4010-9b59-509a64cf85a8",
          "eventTime": "2022-08-25T12:18:12.171Z",
          "eventType": "CatalogCreateEvent",
          "priority": "1",
          "timeOcurred": "2022-08-25T12:18:06.252Z",
          "title": "CatalogCreateEvent",
          "event": {
            "catalog": {
              "id": "3830",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v4/Catalog/3830",
              "name": "Catalog Wholesale Business",
              "description": "This catalog describes Product Offerings and technical specifications intended to address the wholesale business segment.",
              "catalogType": "ProductCatalog",
              "version": "1.0",
              "validFor": {
                "startDateTime": "2020-08-29T00:00:00Z",
                "endDateTime": "2024-03-25T00:00:00Z"
              },
              "lastUpdate": "2020-08-27T00:00:00Z",
              "lifecycleStatus": "Active",
              "relatedParty": [
                {
                  "role": "vendor",
                  "@type": "RelatedPartyRefOrPartyRoleRef",
                  "partyOrPartyRole": {
                    "id": "3426",
                    "href": "https://mycsp.com:8080/tmf-api/partyManagement/v5/organization/3426",
                    "name": "Broadly Broad Ltd",
                    "@type": "PartyRef",
                    "@referredType": "Organization"
                  }
                }
              ],
              "@type": "Catalog"
            }
          },
          "reportingSystem": {
            "id": "759",
            "name": "APP-745",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "source": {
            "id": "705",
            "name": "APP-317",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "@baseType": "Event",
          "@type": "CatalogCreateEvent"
        },
        "description": "Message example for CatalogCreateEvent event"
      },
      "CatalogAttributeValueChangeEvent_request": {
        "value": {
          "correlationId": "f3a34f89-0046",
          "description": "CatalogAttributeValueChangeEvent illustration",
          "domain": "Commercial",
          "eventId": "4996-b9b1-e533c09a0186",
          "eventTime": "2022-08-25T12:17:59.636Z",
          "eventType": "CatalogAttributeValueChangeEvent",
          "priority": "2",
          "timeOcurred": "2022-08-25T12:17:55.035Z",
          "title": "CatalogAttributeValueChangeEvent",
          "event": {
            "catalog": {
              "id": "3830",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v4/Catalog/3830",
              "version": "2.0",
              "validFor": {
                "startDateTime": "2020-08-29T00:00:00Z"
              },
              "@type": "Catalog"
            }
          },
          "reportingSystem": {
            "id": "868",
            "name": "APP-394",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "source": {
            "id": "372",
            "name": "APP-92",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "@baseType": "Event",
          "@type": "CatalogAttributeValueChangeEvent"
        },
        "description": "Message example for CatalogAttributeValueChangeEvent event"
      },
      "CatalogStateChangeEvent_request": {
        "value": {
          "correlationId": "f3a34f89-0046",
          "description": "CatalogStateChangeEvent illustration",
          "domain": "Commercial",
          "eventId": "4996-b9b1-e533c09a0186",
          "eventTime": "2022-08-25T12:17:59.636Z",
          "eventType": "CatalogStateChangeEvent",
          "priority": "2",
          "timeOcurred": "2022-08-25T12:17:55.035Z",
          "title": "CatalogStateChangeEvent",
          "event": {
            "catalog": {
              "id": "3830",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v4/Catalog/3830",
              "lifecycleStatus": "Active",
              "@type": "Catalog"
            }
          },
          "reportingSystem": {
            "id": "868",
            "name": "APP-394",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "source": {
            "id": "372",
            "name": "APP-92",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "@baseType": "Event",
          "@type": "CatalogStateChangeEvent"
        },
        "description": "Message example for CatalogStateChangeEvent event with ?fields=state property only"
      },
      "CatalogDeleteEvent_request": {
        "value": {
          "correlationId": "f3a34f89-0046",
          "description": "CatalogDeleteEvent illustration",
          "domain": "Commercial",
          "eventId": "4996-b9b1-e533c09a0186",
          "eventTime": "2022-08-25T12:17:59.636Z",
          "eventType": "CatalogDeleteEvent",
          "priority": "2",
          "timeOcurred": "2022-08-25T12:17:55.035Z",
          "title": "CatalogDeleteEvent",
          "event": {
            "catalog": {
              "id": "3830",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v4/Catalog/3830",
              "@type": "Catalog"
            }
          },
          "reportingSystem": {
            "id": "868",
            "name": "APP-394",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "source": {
            "id": "372",
            "name": "APP-92",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "@baseType": "Event",
          "@type": "CatalogDeleteEvent"
        },
        "description": "Message example for CatalogDeleteEvent event"
      },
      "CategoryCreateEvent_request": {
        "value": {
          "correlationId": "be58c421-12cf",
          "description": "Category CreateEvent illustration",
          "domain": "Commercial",
          "eventId": "4a0a-9a52-86f728494b4e",
          "eventTime": "2022-08-25T12:17:59.603Z",
          "eventType": "CategoryCreateEvent",
          "priority": "3",
          "timeOcurred": "2022-08-25T12:17:52.237Z",
          "title": "CategoryCreateEvent",
          "event": {
            "Category": {
              "id": "9881",
              "href": "http://servername/Category/9881",
              "name": "Cloud Services",
              "description": "A category to hold all available cloud service offers.",
              "lastUpdate": "2020-09-23T16:42:23.0Z",
              "lifecycleStatus": "Active",
              "isRoot": true,
              "version": "2.0",
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23.0Z"
              },
              "subCategory": [
                {
                  "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/6086",
                  "id": "6086",
                  "description": "A category to hold all available cloud service offers.",
                  "name": "Cloud Storage",
                  "version": "1.0",
                  "@referredType": "Category",
                  "@type": "CategoryRef"
                }
              ],
              "productOffering": [
                {
                  "id": "7655",
                  "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOffering/7655",
                  "name": "Hosted Basic Firewall for business",
                  "@referredType": "ProductOffering",
                  "@type": "ProductOfferingRef"
                }
              ]
            }
          },
          "@baseType": "Event",
          "@type": "CategoryCreateEvent"
        },
        "description": "Message example for CategoryCreateEvent event"
      },
      "CategoryAttributeValueChangeEvent_request": {
        "value": {
          "correlationId": "d107a5f0-9257",
          "description": "CategoryAttributeValueChangeEvent illustration",
          "domain": "Commercial",
          "eventId": "456b-8663-72338e38d4f0",
          "eventTime": "2022-08-25T12:18:12.181Z",
          "eventType": "CategoryAttributeValueChangeEvent",
          "priority": "1",
          "timeOcurred": "2022-08-25T12:18:11.750Z",
          "title": "CategoryAttributeValueChangeEvent",
          "event": {
            "category": {
              "href": "http://servername/Category/9881",
              "id": "3180",
              "@type": "Category",
              "version": "2.0",
              "validFor": {
                "startDateTime": "2020-09-23T16:42:23.0Z"
              }
            }
          },
          "reportingSystem": {
            "id": "759",
            "name": "APP-745",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "source": {
            "id": "705",
            "name": "APP-317",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "@baseType": "Event",
          "@type": "CategoryAttributeValueChangeEvent"
        },
        "description": "Message example for CategoryAttributeValueChangeEvent event"
      },
      "CategoryStateChangeEvent_request": {
        "value": {
          "correlationId": "d991dd5c-cb42",
          "description": "CategoryStateChangeEvent illustration",
          "domain": "Commercial",
          "eventId": "4768-a3c5-c47b06010b06",
          "eventTime": "2022-08-25T12:17:59.625Z",
          "eventType": "CategoryStateChangeEvent",
          "priority": "4",
          "timeOcurred": "2022-08-25T12:17:58.436Z",
          "title": "CategoryStateChangeEvent",
          "event": {
            "Category": {
              "id": "9881",
              "href": "http://servername/Category/9881",
              "@type": "Category",
              "lifecycleStatus": "Active"
            }
          },
          "reportingSystem": {
            "id": "868",
            "name": "APP-394",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "source": {
            "id": "372",
            "name": "APP-92",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "@baseType": "Event",
          "@type": "CategoryStateChangeEvent"
        },
        "description": "Message example for CategoryStateChangeEvent event with ?fields=state property only"
      },
      "CategoryDeleteEvent_request": {
        "value": {
          "correlationId": "90cfc73d-deb7",
          "description": "CategoryDeleteEvent illustration",
          "domain": "Commercial",
          "eventId": "47d6-9751-40e4f01440c9",
          "eventTime": "2022-08-25T12:18:12.202Z",
          "eventType": "CategoryDeleteEvent",
          "priority": "4",
          "timeOcurred": "2022-08-25T12:18:07.224Z",
          "title": "CategoryDeleteEvent",
          "event": {
            "category": {
              "id": "9881",
              "href": "http://servername/Category/9881",
              "@type": "Category"
            }
          },
          "reportingSystem": {
            "id": "759",
            "name": "APP-745",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "source": {
            "id": "705",
            "name": "APP-317",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "@baseType": "Event",
          "@type": "CategoryDeleteEvent"
        },
        "description": "Message example for CategoryDeleteEvent event"
      },
      "ProductOfferingCreateEvent_request": {
        "value": {
          "correlationId": "be58c421-12cf",
          "description": "ProductOffering CreateEvent illustration",
          "domain": "Commercial",
          "eventId": "4a0a-9a52-86f728494b4e",
          "eventTime": "2022-08-25T12:17:59.603Z",
          "eventType": "ProductOfferingCreateEvent",
          "priority": "3",
          "timeOcurred": "2022-08-25T12:17:52.237Z",
          "title": "ProductOfferingCreateEvent",
          "event": {
            "productOffering": {
              "id": "7655",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOffering/7655",
              "name": "Basic Firewall for Business",
              "description": "This product offering suggests a firewall service that can be deployed in business customer premise.",
              "version": "2.1",
              "validFor": {
                "startDateTime": "2020-09-23T00:00:00Z",
                "endDateTime": "2021-08-25T00:00:00Z"
              },
              "lastUpdate": "2020-09-27T00:00:00Z",
              "lifecycleStatus": "Active",
              "isBundle": false,
              "isSellable": true,
              "statusReason": "Released for sale",
              "place": [
                {
                  "id": "9979",
                  "href": "https://mycsp.com:8080/tmf-api/geographicAddressManagement/v5/geographicAddress/9979",
                  "name": "San Francisco Bay Area",
                  "@referredType": "GeographicAddress",
                  "@type": "PlaceRef"
                }
              ],
              "productOfferingCharacteristic": [
                {
                  "name": "complexityRank",
                  "description": "Gives an indication of how complex this is to deploy",
                  "valueType": "number",
                  "configurable": false,
                  "productOfferingCharacteristicValue": [
                    {
                      "valueType": "number",
                      "value": 8,
                      "@type": "NumberCharacteristicValueSpecification"
                    }
                  ],
                  "@type": "ProductOfferingCharacteristic"
                }
              ],
              "allowedAction": [
                {
                  "action": "add",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2021-08-25T00:00:00Z"
                  },
                  "channel": [
                    {
                      "id": "4407",
                      "href": "https://mycsp.com:8080/tmf-api/salesChannelManagement/v5/channel/4407",
                      "name": "Assisted Channel",
                      "@referredType": "SalesChannel",
                      "@type": "ChannelRef"
                    },
                    {
                      "id": "4406",
                      "href": "https://mycsp.com:8080/tmf-api/salesChannelManagement/v5/channel/4406",
                      "name": "Online Channel",
                      "@referredType": "SalesChannel",
                      "@type": "ChannelRef"
                    }
                  ],
                  "@type": "AllowedProductAction"
                },
                {
                  "action": "remove",
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2023-08-25T00:00:00Z"
                  },
                  "channel": [
                    {
                      "id": "4407",
                      "href": "https://mycsp.com:8080/tmf-api/salesChannelManagement/v5/channel/4407",
                      "name": "Assisted Channel",
                      "@referredType": "SalesChannel",
                      "@type": "ChannelRef"
                    }
                  ],
                  "@type": "AllowedProductAction"
                }
              ],
              "bundledGroupProductOfferingOption": [
                {
                  "id": "1",
                  "name": "Software Add-ons",
                  "numberRelOfferLowerLimit": 1,
                  "numberRelOfferUpperLimit": 2,
                  "productOffering": [
                    {
                      "id": "7688",
                      "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOffering/7688",
                      "name": "Reporting Widget",
                      "isDefault": false,
                      "@referredType": "ProductOffering",
                      "@type": "BundledGroupProductOffering"
                    },
                    {
                      "id": "7689",
                      "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOffering/7689",
                      "name": "Deep Packet Inspector",
                      "isDefault": false,
                      "@referredType": "ProductOffering",
                      "@type": "BundledGroupProductOffering"
                    }
                  ],
                  "@type": "BundledGroupProductOfferingOption"
                }
              ],
              "serviceLevelAgreement": {
                "id": "8082",
                "href": "https://mycsp.com:8080/tmf-api/slaManagement/v5/sla/8082",
                "name": "Gold SLA for Business",
                "@referredType": "ServiceLevelAgreement",
                "@type": "ServiceLevelAgreementRef"
              },
              "productSpecification": {
                "id": "9881",
                "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/9881",
                "version": "1.1",
                "name": "Robotics999",
                "@referredType": "ProductSpecification",
                "@type": "ProductSpecificationRef"
              },
              "channel": [
                {
                  "id": "4406",
                  "href": "https://mycsp.com:8080/tmf-api/salesChannelManagement/v5/channel/4406",
                  "name": "Online Channel",
                  "@referredType": "SalesChannel",
                  "@type": "ChannelRef"
                }
              ],
              "serviceCandidate": {
                "id": "8167",
                "href": "https://mycsp.com:8080/tmf-api/serviceCatalogManagement/v5/serviceCandidate/8167",
                "version": "1.0",
                "name": "Mega Max",
                "@referredType": "ServiceCandidate",
                "@type": "ServiceCandidateRef"
              },
              "category": [
                {
                  "id": "2646",
                  "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category/2646",
                  "version": "2.0",
                  "name": "Cloud",
                  "@referredType": "Category",
                  "@type": "CategoryRef"
                }
              ],
              "resourceCandidate": {
                "id": "8937",
                "href": "https://mycsp.com:8080/tmf-api/resourceCatalogManagement/v5/resourceCandidate/8937",
                "name": "Mega Band",
                "@referredType": "ResourceCandidate",
                "@type": "ResourceCandidateRef"
              },
              "productOfferingTerm": [
                {
                  "name": "New Client Condition",
                  "description": "This product offering term is for new client at fix duration of less than a year",
                  "duration": {
                    "amount": 12,
                    "units": "Month"
                  },
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2021-09-23T00:00:00Z"
                  },
                  "@type": "ProductOfferingTerm"
                }
              ],
              "productOfferingPrice": [
                {
                  "id": "1747",
                  "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOfferingPrice/1747",
                  "name": "Recurring Monthly Price for Business Firewall",
                  "@referredType": "ProductOfferingPrice",
                  "@type": "ProductOfferingPrice"
                }
              ],
              "agreement": [
                {
                  "id": "5537",
                  "href": "https://mycsp.com:8080/tmf-api/agreementManagement/v5/agreement/5537",
                  "name": "Moon",
                  "@referredType": "Agreement",
                  "@type": "AgreementRef"
                }
              ],
              "attachment": [
                {
                  "description": "This attachment gives a block diagram of the firewall.",
                  "href": "https://mycsp.com:8080/tmf-api/documentManagement/v5/attachment/22",
                  "mimeType": "image/jpeg",
                  "id": "22",
                  "url": "https://mycsp.com:7070/docloader?docnum=3534536",
                  "@referredType": "Attachment",
                  "@type": "AttachmentRefOrValue"
                }
              ],
              "marketSegment": [
                {
                  "id": "1266",
                  "href": "https://mycsp.com:8080/tmf-api/productOfferingReferences/v5/marketSegment/1266",
                  "name": "North Region",
                  "@referredType": "MarketSegment",
                  "@type": "MarketSegmentRef"
                }
              ],
              "bundledProductOffering": [],
              "productOfferingRelationship": [
                {
                  "id": "331",
                  "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOffering/331",
                  "relationshipType": "DependsOn",
                  "validFor": {
                    "startDateTime": "2020-09-23T16:42:23Z"
                  },
                  "role": "A-Role",
                  "name": "Carrier Grade NAT",
                  "@referredType": "ProductOffering",
                  "@type": "ProductOfferingRelationship"
                }
              ],
              "prodSpecCharValueUse": [
                {
                  "name": "Number of Ports",
                  "id": "3331",
                  "description": "The total Number of Ports for this product",
                  "valueType": "number",
                  "minCardinality": 1,
                  "maxCardinality": 1,
                  "validFor": {
                    "startDateTime": "2020-09-23T00:00:00Z",
                    "endDateTime": "2021-09-23T00:00:00Z"
                  },
                  "@type": "ProductSpecificationCharacteristicValueUse",
                  "productSpecCharacteristicValue": [
                    {
                      "isDefault": true,
                      "valueType": "number",
                      "validFor": {
                        "startDateTime": "2020-09-23T00:00:00Z",
                        "endDateTime": "2021-09-23T00:00:00Z"
                      },
                      "value": 8,
                      "@type": "NumberCharacteristicValueSpecification"
                    },
                    {
                      "isDefault": false,
                      "valueType": "number",
                      "validFor": {
                        "startDateTime": "2020-09-23T00:00:00Z",
                        "endDateTime": "2021-09-23T00:00:00Z"
                      },
                      "value": 16,
                      "@type": "NumberCharacteristicValueSpecification"
                    }
                  ],
                  "productSpecification": {
                    "id": "9881",
                    "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/9881",
                    "version": "1.1",
                    "name": "Robotics999",
                    "@referredType": "ProductSpecification",
                    "@type": "ProductSpecificationRef"
                  }
                }
              ],
              "@type": "ProductOffering"
            }
          },
          "reportingSystem": {
            "id": "759",
            "name": "APP-745",
            "@type": "ProductOffering",
            "@referredType": "LogicalResource"
          },
          "source": {
            "id": "705",
            "name": "APP-317",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "@baseType": "Event",
          "@type": "ProductOfferingPriceAttributeValueChangeEvent"
        },
        "description": "Message example for ProductOfferingCreateEvent event"
      },
      "ProductOfferingAttributeValueChangeEvent_request": {
        "value": {
          "correlationId": "d107a5f0-9257",
          "description": "ProductOfferingAttributeValueChangeEvent illustration",
          "domain": "Commercial",
          "eventId": "456b-8663-72338e38d4f0",
          "eventTime": "2022-08-25T12:18:12.181Z",
          "eventType": "ProductOfferingAttributeValueChangeEvent",
          "priority": "1",
          "timeOcurred": "2022-08-25T12:18:11.750Z",
          "title": "ProductOfferingAttributeValueChangeEvent",
          "event": {
            "productOffering": {
              "id": "7655",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOffering/7655",
              "name": "Basic Firewall for Business (corrected)",
              "description": "This product offering suggests a firewall service that can be deployed in business customer premise (corrected).",
              "version": "2.2",
              "validFor": {
                "startDateTime": "2021-08-25T00:00:00Z",
                "endDateTime": "2022-08-25T00:00:00Z"
              },
              "@type": "ProductOffering"
            }
          },
          "reportingSystem": {
            "id": "759",
            "name": "APP-745",
            "@type": "ProductOffering",
            "@referredType": "LogicalResource"
          },
          "source": {
            "id": "705",
            "name": "APP-317",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "@baseType": "Event",
          "@type": "ProductOfferingAttributeValueChangeEvent"
        },
        "description": "Message example for ProductOfferingAttributeValueChangeEvent event"
      },
      "ProductOfferingStateChangeEvent_request": {
        "value": {
          "correlationId": "d991dd5c-cb42",
          "description": "ProductOfferingStateChangeEvent illustration",
          "domain": "Commercial",
          "eventId": "4768-a3c5-c47b06010b06",
          "eventTime": "2022-08-25T12:17:59.625Z",
          "eventType": "ProductOfferingStateChangeEvent",
          "priority": "4",
          "timeOcurred": "2022-08-25T12:17:58.436Z",
          "title": "ProductOfferingStateChangeEvent",
          "event": {
            "ProductOffering": {
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v4/productOffering/1747",
              "id": "1747",
              "@type": "ProductOffering",
              "lifecycleStatus": "Active"
            }
          },
          "reportingSystem": {
            "id": "868",
            "name": "APP-394",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "source": {
            "id": "372",
            "name": "APP-92",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "@baseType": "Event",
          "@type": "ProductOfferingStateChangeEvent"
        },
        "description": "Message example for ProductOfferingStateChangeEvent event with ?fields=state property only"
      },
      "ProductOfferingDeleteEvent_request": {
        "value": {
          "correlationId": "90cfc73d-deb7",
          "description": "ProductOffering illustration",
          "domain": "Commercial",
          "eventId": "47d6-9751-40e4f01440c9",
          "eventTime": "2022-08-25T12:18:12.202Z",
          "eventType": "ProductOfferingDeleteEvent",
          "priority": "4",
          "timeOcurred": "2022-08-25T12:18:07.224Z",
          "title": "ProductOfferingDeleteEvent",
          "event": {
            "productOffering": {
              "id": "1747",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productOffering/1747",
              "@type": "ProductOffering"
            }
          },
          "reportingSystem": {
            "id": "759",
            "name": "APP-745",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "source": {
            "id": "705",
            "name": "APP-317",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "@baseType": "Event",
          "@type": "ProductOfferingDeleteEvent"
        },
        "description": "Message example for ProductOfferingDeleteEvent event"
      },
      "ProductOfferingPriceCreateEvent_request": {
        "value": {
          "correlationId": "be58c421-12cf",
          "description": "ProductOfferingPrice CreateEvent illustration",
          "domain": "Commercial",
          "eventId": "4a0a-9a52-86f728494b4e",
          "eventTime": "2022-08-25T12:17:59.603Z",
          "eventType": "ProductOfferingPriceCreateEvent",
          "priority": "3",
          "timeOcurred": "2022-08-25T12:17:52.237Z",
          "title": "ProductOfferingPriceCreateEvent",
          "event": {
            "productOfferingPrice": {
              "id": "1747",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v4/productOfferingPrice/1747",
              "name": "Recurring Charge for Business Firewall",
              "description": "This pricing describes the recurring charge for a firewall service that can be deployed in business customer premise.",
              "version": "1.0",
              "validFor": {
                "startDateTime": "2020-09-22T00:00:00Z",
                "endDateTime": "2021-09-22T00:00:00Z"
              },
              "priceType": "recurring",
              "recurringChargePeriodType": "monthly",
              "recurringChargePeriodLength": 1,
              "lastUpdate": "2020-09-23T00:00:00Z",
              "isBundle": false,
              "lifecycleStatus": "Active",
              "unitOfMeasure": {
                "amount": 1,
                "units": "Month"
              },
              "price": {
                "unit": "EUR",
                "value": 50
              },
              "percentage": 0,
              "productOfferingTerm": [
                {
                  "name": "12 Month",
                  "description": "12 month contract",
                  "duration": {
                    "amount": 12,
                    "units": "Month"
                  },
                  "validFor": {
                    "startDateTime": "2020-09-22T16:42:23.0Z",
                    "endDateTime": "2021-09-22T00:00:00.0Z"
                  },
                  "@type": "ProductOfferingTerm"
                }
              ],
              "place": [
                {
                  "id": "2707",
                  "href": "https://mycsp.com:8080/tmf-api/geographicAddressManagement/v4/geographicAddress/2707",
                  "name": "San Francisco Bay Area",
                  "@referredType": "GeographicAddress",
                  "@type": "PlaceRef"
                }
              ],
              "policy": [
                {
                  "@referredType": "Policy",
                  "name": "PriceRuleNo1",
                  "id": "2503",
                  "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/policy/2503",
                  "@type": "PolicyRef"
                }
              ],
              "pricingLogicAlgorithm": [
                {
                  "id": "2777",
                  "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v4/PricingLogicAlgorithm/2777",
                  "name": "RecurringRatingPLA",
                  "description": "Algorithm that rates Recurring event",
                  "plaSpecId": "2801",
                  "validFor": {
                    "startDateTime": "2020-09-22T16:42:23.0Z",
                    "endDateTime": "2021-09-22T00:00:00.0Z"
                  },
                  "@type": "PricingLogicAlgorithm"
                }
              ],
              "tax": [
                {
                  "taxAmount": {
                    "unit": "EUR",
                    "value": 10
                  },
                  "taxCategory": "VAT",
                  "taxRate": 20,
                  "@type": "TaxItem"
                }
              ],
              "popRelationship": [
                {
                  "id": "1741",
                  "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v4/productOfferingPrice/1741",
                  "relationshipType": "discountedBy",
                  "validFor": {
                    "startDateTime": "2020-09-23T16:42:23.0Z",
                    "endDateTime": "2021-09-22T00:00:00.0Z"
                  },
                  "role": "A-Charge",
                  "@referredType": "ProductOfferingPriceAlteration",
                  "@type": "ProductOfferingPriceRelationship"
                }
              ],
              "bundledPopRelationship": [],
              "@type": "ProductOfferingPrice"
            }
          },
          "reportingSystem": {
            "id": "759",
            "name": "APP-745",
            "@type": "ProductOfferingPrice",
            "@referredType": "LogicalResource"
          },
          "source": {
            "id": "705",
            "name": "APP-317",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "@baseType": "Event",
          "@type": "ProductOfferingPriceAttributeValueChangeEvent"
        },
        "description": "Message example for ProductOfferingPriceCreateEvent event"
      },
      "ProductOfferingPriceAttributeValueChangeEvent_request": {
        "value": {
          "correlationId": "d107a5f0-9257",
          "description": "ProductOfferingPriceAttributeValueChangeEvent illustration",
          "domain": "Commercial",
          "eventId": "456b-8663-72338e38d4f0",
          "eventTime": "2022-08-25T12:18:12.181Z",
          "eventType": "ProductOfferingPriceAttributeValueChangeEvent",
          "priority": "1",
          "timeOcurred": "2022-08-25T12:18:11.750Z",
          "title": "ProductOfferingPriceAttributeValueChangeEvent",
          "event": {
            "productOfferingPrice": {
              "id": "1747",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v4/productOfferingPrice/1747",
              "@type": "ProductOfferingPrice",
              "place": [
                {
                  "id": "2707",
                  "href": "https://mycsp.com:8080/tmf-api/geographicAddressManagement/v4/geographicAddress/2707",
                  "name": "San Francisco Bay Area",
                  "@referredType": "GeographicAddress",
                  "@type": "PlaceRef"
                }
              ]
            }
          },
          "reportingSystem": {
            "id": "759",
            "name": "APP-745",
            "@type": "ProductOfferingPrice",
            "@referredType": "LogicalResource"
          },
          "source": {
            "id": "705",
            "name": "APP-317",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "@baseType": "Event",
          "@type": "ProductOfferingPriceAttributeValueChangeEvent"
        },
        "description": "Message example for ProductOfferingPriceAttributeValueChangeEvent event"
      },
      "ProductOfferingPriceStateChangeEvent_request": {
        "value": {
          "correlationId": "d991dd5c-cb42",
          "description": "ProductOfferingPriceStateChangeEvent illustration",
          "domain": "Commercial",
          "eventId": "4768-a3c5-c47b06010b06",
          "eventTime": "2022-08-25T12:17:59.625Z",
          "eventType": "ProductOfferingPriceStateChangeEvent",
          "priority": "4",
          "timeOcurred": "2022-08-25T12:17:58.436Z",
          "title": "ProductOfferingPriceStateChangeEvent",
          "event": {
            "ProductOfferingPrice": {
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v4/productOfferingPrice/1747",
              "id": "1747",
              "@type": "ProductOfferingPrice",
              "lifecycleStatus": "Active"
            }
          },
          "reportingSystem": {
            "id": "868",
            "name": "APP-394",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "source": {
            "id": "372",
            "name": "APP-92",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "@baseType": "Event",
          "@type": "ProductOfferingPriceStateChangeEvent"
        },
        "description": "Message example for ProductOfferingPriceStateChangeEvent event with ?fields=state property only"
      },
      "ProductOfferingPriceDeleteEvent_request": {
        "value": {
          "correlationId": "90cfc73d-deb7",
          "description": "ProductOfferingPrice illustration",
          "domain": "Commercial",
          "eventId": "47d6-9751-40e4f01440c9",
          "eventTime": "2022-08-25T12:18:12.202Z",
          "eventType": "ProductOfferingPriceDeleteEvent",
          "priority": "4",
          "timeOcurred": "2022-08-25T12:18:07.224Z",
          "title": "ProductOfferingPriceDeleteEvent",
          "event": {
            "productOfferingPrice": {
              "id": "1747",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v4/productOfferingPrice/1747",
              "@type": "ProductOfferingPrice"
            }
          },
          "reportingSystem": {
            "id": "759",
            "name": "APP-745",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "source": {
            "id": "705",
            "name": "APP-317",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "@baseType": "Event",
          "@type": "ProductOfferingPriceDeleteEvent"
        },
        "description": "Message example for ProductOfferingPriceDeleteEvent event"
      },
      "ProductSpecificationCreateEvent_request": {
        "value": {
          "correlationId": "be58c421-12cf",
          "description": "ProductSpecificationCreateEvent illustration",
          "domain": "Commercial",
          "eventId": "4a0a-9a52-86f728494b4e",
          "eventTime": "2022-08-25T12:17:59.603Z",
          "eventType": "ProductSpecificationCreateEvent",
          "priority": "3",
          "timeOcurred": "2022-08-25T12:17:52.237Z",
          "title": "ProductSpecificationCreateEvent",
          "event": {
            "productSpecification": {
              "id": "9881",
              "href": "http://servername/productSpecification/9881",
              "name": "Cisco Firepower NGFW",
              "brand": "Cisco",
              "productNumber": "CSC-340-NGFW",
              "description": "Powerful product that integrates with a firewall, including intrusion prevention, advanced malware protection, cloud-based sandboxing, URL filtering, endpoint protection, web gateway, email security, network traffic analysis, network access control and CASB.",
              "isBundle": true,
              "lastUpdate": "2020-09-23T16:42:23Z",
              "lifecycleStatus": "Active",
              "validFor": {
                "startDateTime": "2020-09-23T00:00:00Z",
                "endDateTime": "2022-11-24T16:42:23Z"
              },
              "version": "2.0",
              "relatedParty": [
                {
                  "role": "Owner",
                  "@type": "RelatedPartyRefOrPartyRoleRef",
                  "partyOrPartyRole": {
                    "id": "1234",
                    "href": "https://mycsp.com:8080/tmf-api/partyManagement/v5/partyRole/1234",
                    "name": "Gustave Flaubert",
                    "@type": "PartyRefOrPartyRoleRef",
                    "@referredType": "PartyRole"
                  }
                }
              ],
              "attachment": [
                {
                  "id": "22",
                  "href": "https://mycsp.com:8080/tmf-api/documentManagement/v5/attachment/22",
                  "name": "Product Picture",
                  "mimeType": "image/jpeg",
                  "url": "https://mycsp.com:7070/docloader?docnum=774451234",
                  "@referredType": "Attachment",
                  "@type": "AttachmentRefOrValue"
                },
                {
                  "id": "33",
                  "href": "https://mycsp.com:8080/tmf-api/documentManagement/v5/attachment/22",
                  "name": "Product Manual",
                  "mimeType": "application/pdf",
                  "url": "https://mycsp.com:7070/docloader?docnum=774454321",
                  "@referredType": "Attachment",
                  "@type": "AttachmentRefOrValue"
                }
              ],
              "bundledProductSpecification": [
                {
                  "id": "15",
                  "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/15",
                  "name": "URL Filter",
                  "@type": "BundledProductSpecification",
                  "lifecycleStatus": "Active"
                },
                {
                  "id": "64",
                  "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/64",
                  "name": "Malware Protector",
                  "@type": "BundledProductSpecification",
                  "lifecycleStatus": "Active"
                }
              ],
              "targetProductSchema": {
                "@type": "Firewall",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Product/Firewall.schema.json"
              },
              "productSpecificationRelationship": [
                {
                  "id": "23",
                  "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/23",
                  "relationshipType": "OptionalFor",
                  "validFor": {
                    "startDateTime": "2020-09-23T16:42:23Z"
                  },
                  "name": "DataPlan",
                  "role": "A-Item",
                  "@referredType": "ProductSpecification",
                  "@type": "ProductSpecificationRelationship"
                }
              ],
              "serviceSpecification": [
                {
                  "id": "22",
                  "href": "https://mycsp.com:8080/tmf-api/serviceCatalogManagement/v5/serviceSpecification/22",
                  "name": "Firewall",
                  "version": "1.0",
                  "@referredType": "ServiceSpecification",
                  "@type": "ServiceSpecificationRef"
                }
              ],
              "resourceSpecification": [
                {
                  "id": "63",
                  "href": "https://mycsp.com:8080/tmf-api/resourceCatalogManagement/v5/resourceSpecification/63",
                  "name": "Firewall Port",
                  "version": "1.0",
                  "@referredType": "PhysicalResourceSpecification",
                  "@type": "ResourceSpecificationRef"
                }
              ],
              "productSpecCharacteristic": [
                {
                  "name": "Number of Ports",
                  "description": "The total Number of Ports for this product",
                  "valueType": "number",
                  "configurable": true,
                  "minCardinality": 1,
                  "maxCardinality": 1,
                  "isUnique": true,
                  "@type": "CharacteristicSpecification",
                  "productSpecCharRelationship": [
                    {
                      "parentSpecificationId": "43",
                      "parentSpecificationHref": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/productSpecification/43",
                      "characteristicSpecificationId": "2",
                      "relationshipType": "Dependency",
                      "name": "Bandwidth",
                      "validFor": {
                        "startDateTime": "2020-09-23T16:42:23-04:00"
                      },
                      "@type": "CharacteristicSpecificationRelationship"
                    }
                  ],
                  "characteristicValueSpecification": [
                    {
                      "isDefault": true,
                      "valueType": "number",
                      "validFor": {
                        "startDateTime": "2020-09-23T00:00:00Z",
                        "endDateTime": "2022-11-24T00:00:00Z"
                      },
                      "value": 8,
                      "@type": "NumberCharacteristicValueSpecification"
                    },
                    {
                      "isDefault": false,
                      "valueType": "number",
                      "validFor": {
                        "startDateTime": "2020-09-23T00:00:00Z",
                        "endDateTime": "2022-11-24T00:00:00Z"
                      },
                      "value": 16,
                      "@type": "NumberCharacteristicValueSpecification"
                    },
                    {
                      "isDefault": false,
                      "valueType": "number",
                      "validFor": {
                        "startDateTime": "2020-09-23T00:00:00Z",
                        "endDateTime": "2022-11-24T00:00:00Z"
                      },
                      "value": 24,
                      "@type": "NumberCharacteristicValueSpecification"
                    }
                  ],
                  "validFor": {
                    "startDateTime": "2020-09-23T16:42:23Z"
                  }
                },
                {
                  "name": "Color",
                  "description": "Color of the Firewall housing",
                  "valueType": "string",
                  "configurable": true,
                  "minCardinality": 1,
                  "maxCardinality": 1,
                  "extensible": true,
                  "isUnique": true,
                  "@type": "CharacteristicSpecification",
                  "characteristicValueSpecification": [
                    {
                      "isDefault": true,
                      "valueType": "string",
                      "value": "Black",
                      "@type": "StringCharacteristicValueSpecification"
                    },
                    {
                      "isDefault": false,
                      "valueType": "string",
                      "value": "White",
                      "@type": "StringCharacteristicValueSpecification"
                    }
                  ],
                  "validFor": {
                    "startDateTime": "2020-09-23T16:42:23Z"
                  }
                }
              ],
              "@type": "ProductSpecification"
            }
          },
          "reportingSystem": {
            "id": "868",
            "name": "APP-394",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "source": {
            "id": "372",
            "name": "APP-92",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "@baseType": "Event",
          "@type": "ProductSpecificationCreateEvent"
        },
        "description": "Message example for ProductSpecificationCreateEvent event"
      },
      "ProductSpecificationAttributeValueChangeEvent_request": {
        "value": {
          "correlationId": "4eeb06e2-8210",
          "description": "ProductSpecificationAttributeValueChangeEvent illustration",
          "domain": "Commercial",
          "eventId": "46c2-8e2b-0182de193a9c",
          "eventTime": "2022-08-25T12:17:59.613Z",
          "eventType": "ProductSpecificationAttributeValueChangeEvent",
          "priority": "2",
          "timeOcurred": "2022-08-25T12:17:57.413Z",
          "title": "ProductSpecificationAttributeValueChangeEvent",
          "event": {
            "productSpecification": {
              "href": "http://servername/productSpecification/9881",
              "id": "9881",
              "@type": "ProductSpecification",
              "attachment": [
                {
                  "id": "22",
                  "href": "https://mycsp.com:8080/tmf-api/documentManagement/v5/attachment/22",
                  "name": "Product Picture",
                  "mimeType": "image/jpeg",
                  "url": "https://mycsp.com:7070/docloader?docnum=774451234",
                  "@referredType": "Attachment",
                  "@type": "AttachmentRefOrValue"
                },
                {
                  "id": "33",
                  "href": "https://mycsp.com:8080/tmf-api/documentManagement/v5/attachment/22",
                  "name": "Product Manual",
                  "mimeType": "application/pdf",
                  "url": "https://mycsp.com:7070/docloader?docnum=774454321",
                  "@referredType": "Attachment",
                  "@type": "AttachmentRefOrValue"
                }
              ]
            }
          },
          "reportingSystem": {
            "id": "868",
            "name": "APP-394",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "source": {
            "id": "372",
            "name": "APP-92",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "@baseType": "Event",
          "@type": "ProductSpecificationAttributeValueChangeEvent"
        },
        "description": "Message example for ProductSpecificationAttributeValueChangeEvent event"
      },
      "ProductSpecificationStateChangeEvent_request": {
        "value": {
          "correlationId": "d991dd5c-cb42",
          "description": "ProductSpecificationStateChangeEvent illustration",
          "domain": "Commercial",
          "eventId": "4768-a3c5-c47b06010b06",
          "eventTime": "2022-08-25T12:17:59.625Z",
          "eventType": "ProductSpecificationStateChangeEvent",
          "priority": "4",
          "timeOcurred": "2022-08-25T12:17:58.436Z",
          "title": "ProductSpecificationStateChangeEvent",
          "event": {
            "productSpecification": {
              "href": "http://servername/productSpecification/9881",
              "id": "9881",
              "@type": "ProductSpecification",
              "lifecycleStatus": "Active"
            }
          },
          "reportingSystem": {
            "id": "868",
            "name": "APP-394",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "source": {
            "id": "372",
            "name": "APP-92",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "@baseType": "Event",
          "@type": "ProductSpecificationStateChangeEvent"
        },
        "description": "Message example for ProductSpecificationStateChangeEvent event with ?fields=state property only"
      },
      "ProductSpecificationDeleteEvent_request": {
        "value": {
          "correlationId": "f3a34f89-0046",
          "description": "ProductSpecificationDeleteEvent illustration",
          "domain": "Commercial",
          "eventId": "4996-b9b1-e533c09a0186",
          "eventTime": "2022-08-25T12:17:59.636Z",
          "eventType": "ProductSpecificationDeleteEvent",
          "priority": "2",
          "timeOcurred": "2022-08-25T12:17:55.035Z",
          "title": "ProductSpecificationDeleteEvent",
          "event": {
            "productSpecification": {
              "id": "9881",
              "href": "http://servername/productSpecification/9881",
              "@type": "ProductSpecification"
            }
          },
          "reportingSystem": {
            "id": "868",
            "name": "APP-394",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "source": {
            "id": "372",
            "name": "APP-92",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "@baseType": "Event",
          "@type": "ProductSpecificationDeleteEvent"
        },
        "description": "Message example for ProductSpecificationDeleteEvent event"
      },
      "ImportJobCreateEvent_request": {
        "value": {
          "correlationId": "95003dd3-e325",
          "description": "ImportJobCreateEvent illustration",
          "domain": "Commercial",
          "eventId": "4010-9b59-509a64cf85a8",
          "eventTime": "2022-08-25T12:18:12.171Z",
          "eventType": "ImportJobCreateEvent",
          "priority": "1",
          "timeOcurred": "2022-08-25T12:18:06.252Z",
          "title": "ImportJobCreateEvent",
          "event": {
            "importJob": {
              "id": "2341",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/importJob/2341",
              "contentType": "application/json",
              "creationDate": "2020-08-25T00:00:00Z",
              "completionDate": "2020-08-25T00:01:31Z",
              "path": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/",
              "status": "Running",
              "url": "ftp://ftp.mycsp.com/productCatalogManagement/1866.json",
              "errorLog": "http://my-platform/logging/errors.log",
              "@type": "ImportJob"
            }
          },
          "reportingSystem": {
            "id": "759",
            "name": "APP-745",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "source": {
            "id": "705",
            "name": "APP-317",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "@baseType": "Event",
          "@type": "ImportJobCreateEvent"
        },
        "description": "Message example for ImportJobCreateEvent event"
      },
      "ImportJobStateChangeEvent_request": {
        "value": {
          "correlationId": "f3a34f89-0046",
          "description": "ImportJobStateChangeEvent illustration",
          "domain": "Commercial",
          "eventId": "4996-b9b1-e533c09a0186",
          "eventTime": "2022-08-25T12:17:59.636Z",
          "eventType": "ImportJobStateChangeEvent",
          "priority": "2",
          "timeOcurred": "2022-08-25T12:17:55.035Z",
          "title": "ImportJobStateChangeEvent",
          "event": {
            "importJob": {
              "id": "2341",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/importJob/2341",
              "status": "Succeeded",
              "@type": "ImportJob"
            }
          },
          "reportingSystem": {
            "id": "868",
            "name": "APP-394",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "source": {
            "id": "372",
            "name": "APP-92",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "@baseType": "Event",
          "@type": "ImportJobStateChangeEvent"
        },
        "description": "Message example for ImportJobStateChangeEvent event"
      },
      "ExportJobCreateEvent_request": {
        "value": {
          "correlationId": "95003dd3-e325",
          "description": "ExportJobCreateEvent illustration",
          "domain": "Commercial",
          "eventId": "4010-9b59-509a64cf85a8",
          "eventTime": "2022-08-25T12:18:12.171Z",
          "eventType": "ExportJobCreateEvent",
          "priority": "1",
          "timeOcurred": "2022-08-25T12:18:06.252Z",
          "title": "ExportJobCreateEvent",
          "event": {
            "exportJob": {
              "id": "5435",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/exportJob/5435",
              "contentType": "application/json",
              "creationDate": "2020-09-23T00:00:00Z",
              "path": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/category",
              "query": "category.id=7757",
              "status": "Running",
              "url": "ftp://ftp.mycsp.com/productCatalogManagement/1866.json",
              "errorLog": "http://my-platform/logging/errors.log",
              "@type": "ExportJob"
            }
          },
          "reportingSystem": {
            "id": "759",
            "name": "APP-745",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "source": {
            "id": "705",
            "name": "APP-317",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "@baseType": "Event",
          "@type": "ExportJobCreateEvent"
        },
        "description": "Message example for ExportJobCreateEvent event"
      },
      "ExportJobStateChangeEvent_request": {
        "value": {
          "correlationId": "f3a34f89-0046",
          "description": "ExportJobStateChangeEvent illustration",
          "domain": "Commercial",
          "eventId": "4996-b9b1-e533c09a0186",
          "eventTime": "2022-08-25T12:17:59.636Z",
          "eventType": "ExportJobStateChangeEvent",
          "priority": "2",
          "timeOcurred": "2022-08-25T12:17:55.035Z",
          "title": "ExportJobStateChangeEvent",
          "event": {
            "exportJob": {
              "id": "5435",
              "href": "https://mycsp.com:8080/tmf-api/productCatalogManagement/v5/exportJob/5435",
              "status": "Succeeded",
              "@type": "ExportJob"
            }
          },
          "reportingSystem": {
            "id": "868",
            "name": "APP-394",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "source": {
            "id": "372",
            "name": "APP-92",
            "@type": "ReportingResource",
            "@referredType": "LogicalResource"
          },
          "@baseType": "Event",
          "@type": "ExportJobStateChangeEvent"
        },
        "description": "Message example for ExportJobStateChangeEvent event"
      }
    }
  }
};

module.exports = data;