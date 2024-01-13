# Real-estate restful API
## Description
Build Restful CRUD API with Node.js, Express and MongoDB. In this project we build a RESTful API to provide a platform for managing real estate properties, which offers a comprehensive system where users can access, update property. 
<p>The RESTful architecture ensures clear communication between clients and servers, employing standard HTTP methods for data manipulation, retrieval, and modification.</p> 

<!-- <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*gyUa6Qx-xcOR1vHg1IoVkw.png" width="600"> -->

<!-- ## Project Design -->

## Endpoints:

Properties:
      - **GET /properties:** Retrieve a list of all properties.
      - **GET /properties/{property_id}:** Retrieve details of a specific property.
      - **POST /properties:** Create a new property.
      - **PUT /properties/{property_id}:** Update details of a specific property.
      - **DELETE /properties/{property_id}:** Delete a specific property.

Tenants:
      - **GET /tenants:** Retrieve a list of all tenants.
      - **GET /tenants/{tenant_id}:** Retrieve details of a specific tenant.
      - **POST /tenants:** Create a new tenant.
      - **PUT /tenants/{tenant_id}:** Update details of a specific tenant.
      - **DELETE /tenants/{tenant_id}:** Delete a specific tenant.

Request and Response Formats:
   - Using JSON for both request and response formats.
   - Including appropriate error handling and status codes in responses.

Pagination:
   - Implementing pagination for large result sets using query parameters (`page`, `limit`).

Versioning:
   - Including versioning in the API to manage future changes (`/v1/properties`).

Documentation:
   - Providing comprehensive API documentation using Swagger.

<!-- ## UML Diagram 

## Packages:
- Express: A web framework for creating RESTful APIs.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB.
- Body-parser: Middleware for parsing request bodies.
- CORS: Middleware for enabling Cross-Origin Resource Sharing.
- Helmet: Middleware for adding security headers.
- JWT: A package for working with JSON Web Tokens (JWT) to implement authentication. -->

## Author
- [@HichamAf](https://github.com/HichamAf)



### Swagger Documentation:
https://app.swaggerhub.com/apis/HichamAf/SSJ_API_OSA3.0/1.0.0

<!-- ```yaml
openapi: 3.0.0
info:
  version: 1.0.0
  title: SSJ-Estate API
  description: >-
    A Restful webservice for property owners to manage their real estate properties, the tenants , rent payment, maintenance expenses and reports.
  termsOfService: https://ssj-estate.com/terms-of-use
  contact:
    name: SSJ-Estate Office
    url: ssj-estate.com
    email: hichamaf@ssj-estate.com
  license:
    name: SSJ-Estate License
    url: http://license.ssj-estate.com
    
servers:
  - description: Estate Server
    url: https://ssjestate.com
      
paths:
  /properties:
    post:
      summary: Add a new property to the portfolio
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                name:
                  type: string
                  description: Name of the property
                address:
                  type: string
                  description: Address of the property
      responses:
        201:
          description: Property added successfully
        400:
          description: Bad request
  /properties/{propertyId}:
    put:
      summary: Edit an existing property in the portfolio
      parameters:
        - name: propertyId
          in: path
          description: ID of the property to edit
          required: true
          schema:
            type: integer
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                name:
                  type: string
                  description: Name of the property
                address:
                  type: string
                  description: Address of the property
      responses:
        200:
          description: Property edited successfully
        400:
          description: Bad request
        404:
          description: Property not found
    delete:
      summary: Delete a property from the portfolio
      parameters:
        - name: propertyId
          in: path
          description: ID of the property to delete
          required: true
          schema:
            type: integer
      responses:
        200:
          description: Property deleted successfully
        404:
          description: Property not found
  /tenants:
    post:
      summary: Add a new tenant to a property
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                name:
                  type: string
                  description: Name of the tenant
                propertyId:
                  type: integer
                  description: ID of the property to assign the tenant to
      responses:
        201:
          description: Tenant added successfully
        400:
          description: Bad request
  /tenants/{tenantId}:
    put:
      summary: Edit an existing tenant
      parameters:
        - name: tenantId
          in: path
          description: ID of the tenant to edit
          required: true
          schema:
            type: integer
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                name:
                  type: string
                  description: Name of the tenant
                propertyId:
                  type: integer
                  description: ID of the property to assign the tenant to
      responses:
        200:
          description: Tenant edited successfully
        400:
          description: Bad request
        404:
          description: Tenant not found
    delete:
      description: Delete a tenant
      parameters:
        - name: tenantId
          in: path
          description: ID of the tenant to delete
          required: true
          schema:
            type: string
      responses:
        204:
          description: Tenant successfully deleted
        404:
          description: Tenant not found
  /tenants/{tenantId}/properties/{propertyId}:
    put:
      description: Assign a tenant to a property
      parameters:
        - in: path
          name: tenantId
          description: ID of the tenant to assign
          required: true
          schema:
            type: string
        - in: path
          name: propertyId
          description: ID of the property to assign the tenant to
          required: true
          schema:
            type: string
      responses:
        200:
          description: Tenant successfully assigned to property
        404:
          description: Tenant or property not found
``` -->

