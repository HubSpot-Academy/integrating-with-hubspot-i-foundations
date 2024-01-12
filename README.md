# Welcome to Integrating With HubSpot I: Foundations
This is the official repository for the Integrating With HubSpot I: Foundations Certification Course. For more information, please go to [HubSpot Academy](https://academy.hubspot.com).

## In This Repository
**[The Foundation of Authenticating Integrations Lesson](https://academy.hubspot.com)**
1. The Basics of the OAuth Flow
2. Refreshing an Access Token<sup>1</sup>
3. The Basics of Using a Private App

**[Coding Basic Web Apps to Make API Calls Lesson](https://academy.hubspot.com)**
1. Building a Hello World App with HubSpot APIs
2. API POST Requests and Custom CRM Properties

<sup>1</sup> There's a step in the "Refreshing an Access Token" video that's accidentally omitted. To use the accessTokenCache constant, you must require the Node library Node-Cache. Then, underneath the `const refreshTokenStore = {};`, you must add in `const accessTokenCache = new NodeCache({ deleteOnExpire: true});`. This is reflected in the finished index.js file.
