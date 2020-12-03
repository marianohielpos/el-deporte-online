# ABMC Productos

### Alta producto
```
curl --location --request POST '0.0.0.0:5000/product/' \
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
  "id": "1",
  "image": "mock_image/pelota.jpeg",
  "long_description": "Una pelota de futbol muy buena marca Adidas.",
  "name": "Pelota",
  "short_description": "Pelota de futbol 5",
  "show_catalog": true
}
```

### Consulta producto listado

```
curl --location --request GET '0.0.0.0:5000/product/'
```
Response
```
{
  "products": [
    {
      "id": "1",
      "image": "mock_image/pelota.jpeg",
      "long_description": "Una pelota de futbol muy buena marca Adidas.",
      "name": "Pelota",
      "short_description": "Pelota de futbol 5",
      "show_catalog": true
    }
  ]
}
```


### Consulta producto por id

```
curl --location --request GET '0.0.0.0:5000/product/<id>'
```
Response
```
{
  "id": "1",
  "image": "mock_image/pelota.jpeg",
  "long_description": "Una pelota de futbol muy buena marca Adidas.",
  "name": "Pelota",
  "short_description": "Pelota de futbol 5",
  "show_catalog": true
}
```

### Modificación producto (por ejemplo atributo name)

```
curl --location --request PUT '0.0.0.0:5000/product/1' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name" : "Pelotita"
}'
```
Response:
```
{
  "id": "1",
  "image": "mock_image/pelota.jpeg",
  "long_description": "Una pelota de futbol muy buena marca Adidas.",
  "name": "Pelotita",
  "short_description": "Pelota de futbol 5",
  "show_catalog": true
}
```


### Baja producto
```
curl --location --request DELETE '0.0.0.0:5000/product/1'
```