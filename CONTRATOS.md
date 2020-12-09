# ABMC Productos

### Alta producto
```
curl --location --request POST '0.0.0.0:5000/api/product/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name" : "Pelota",
    "short_description": "Pelota de futbol 5",
    "long_description": "Una pelota de futbol muy buena marca Adidas."
}'
```
Response
```
{
  "id": "5fd147799cda34f0c3872455",
  "image": "mock_image/pelota.jpeg",
  "long_description": "Una pelota de rugby muy buena marca Adidas.",
  "name": "Pelota",
  "short_description": "Pelota de rugby",
  "show_catalog": true,
  "trending": false
}
```

### Consulta producto listado

A esto le podemos agregar 3 query params: 

- show_catalog (false | true)
- trending (false | true)
- query (String)

En caso de que algun parametro esté ausente, no se lo tiene en cuenta. Para productos destacados:

```
curl --location --request GET '0.0.0.0:5000/api/product?trending=true'
``` 

Para el search, se debe insertar la query como string:
```
curl --location --request GET '0.0.0.0:5000/api/product?query=Pelota'
```
Response
```
{
  "products": [
        {
          "id": "5fd147799cda34f0c3872455",
          "image": "mock_image/pelota.jpeg",
          "long_description": "Una pelota de rugby muy buena marca Adidas.",
          "name": "Pelota",
          "short_description": "Pelota de rugby",
          "show_catalog": true,
          "trending": false
        }
  ]
}
```


### Consulta producto por id

```
curl --location --request GET '0.0.0.0:5000/api/product/<id>'
```
Response
```
{
  "id": "5fd147799cda34f0c3872455",
  "image": "mock_image/pelota.jpeg",
  "long_description": "Una pelota de rugby muy buena marca Adidas.",
  "name": "Pelota",
  "short_description": "Pelota de rugby",
  "show_catalog": true,
  "trending": false
}
```

### Modificación producto (por ejemplo atributo name)

```
curl --location --request PUT '0.0.0.0:5000/api/product/1' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name" : "Pelotita"
}'
```
Response:
```
{
  "id": "5fd147799cda34f0c3872455",
  "image": "mock_image/pelota.jpeg",
  "long_description": "Una pelota de rugby muy buena marca Adidas.",
  "name": "Pelotita",
  "short_description": "Pelota de rugby",
  "show_catalog": true,
  "trending": false
}
```


### Baja producto
```
curl --location --request DELETE '0.0.0.0:5000/api/product/1'
```