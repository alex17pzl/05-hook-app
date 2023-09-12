# Tests

- 'module' is not defined
  - agregar al archivo .eslintrc.cjs node:true

````js
module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true, // Este es para que no aparezca el warning en el describe ni en el test
    node: true,
  },
 
//--Resto del código--
 
};
````

Commit con los cambios a realizar para preparar el proyecto para las pruebas:
- https://github.com/alex17pzl/05-hook-app/commit/49dec7f0594f9b2d31829e749f5b8eaca8c7a27d

babel.config.js --> babel.config.cjs