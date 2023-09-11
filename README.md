# Tests

- 'module' is not defined
  - agregar al archivo .eslintrc.cjs node:true

````js
module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true, // No hace falta, a menos que tengas error "ECMAScript module"
    node: true,
  },
 
//--Resto del código--
 
};
````