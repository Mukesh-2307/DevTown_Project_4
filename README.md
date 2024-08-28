# DevTown_Project_4

> while importing models, we can import multiple models at once by exporting models through index.js file. 
---
> while importing we can skip the index.js as it will enter into the index.js file no matter what
```
const {userModel, bookModel} = require("../models/index.js");
const {userModel, bookModel} = require("../models");
```
> so, both the above codes are valid
---
> while exporting, there are two ways to export :
```
const getAllBooks = () => {};

modules.exports = {getAllBooks};
```
```
exports.getAllBooks = () => {};
```