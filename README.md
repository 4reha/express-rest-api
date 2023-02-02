# express-rest-api

To getting started:  
`npm install`  
`npm run build`  
`npm start`

Or try it at `https://express-rest-api-avn6.onrender.com/`  
Supported methods:  

For user creation and signing requests:  
`POST https://express-rest-api-avn6.onrender.com/user`  
`POST https://express-rest-api-avn6.onrender.com/signin`  
Required info: `{"username":"string", "password":"string"}`

for Creating/Getting/Updating/deleting a product:  
`POST https://express-rest-api-avn6.onrender.com/api/product`  
`GET https://express-rest-api-avn6.onrender.com/api/product`  
`GET https://express-rest-api-avn6.onrender.com/api/product/:id`  
`PUT https://express-rest-api-avn6.onrender.com/api/product/:id`  
`DELETE https://express-rest-api-avn6.onrender.com/api/product/:id`  
Required info: `{"name":"string"}` (only for post and put methods)

for Creating/Getting/Updating/deleting an Update:  
`POST https://express-rest-api-avn6.onrender.com/api/update`  
`GET https://express-rest-api-avn6.onrender.com/api/update`  
`GET https://express-rest-api-avn6.onrender.com/api/update/:id`  
`PUT https://express-rest-api-avn6.onrender.com/api/update/:id`  
`DELETE https://express-rest-api-avn6.onrender.com/api/update/:id`  
Required info: `{"title":"string", "body":"string", "productId":"string"}` (only for post and and optional for put methods)
