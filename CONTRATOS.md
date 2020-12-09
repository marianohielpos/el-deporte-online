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

```
curl --location --request GET '0.0.0.0:5000/api/product/'
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