from marshmallow import Schema, fields


class CreateProductSchema(Schema):
    name = fields.Str(required=True)
    short_description = fields.Str(default='Short Description', required=True)
    long_description = fields.Str(default='Long Description', required=True)
    show_catalog = fields.Boolean(default=True)
    image = fields.Str(default='mock_image/pelota.jpeg')
    trending = fields.Boolean(default=False)

    class Meta:
        fields = ('name', 'short_description', 'long_description', 'show_catalog', 'image', 'trending')


class ProductDetailSchema(Schema):
    name = fields.Str(required=True)
    short_description = fields.Str(default='Short Description', required=True)
    long_description = fields.Str(default='Long Description', required=True)
    show_catalog = fields.Boolean(default=True, required=True)
    image = fields.Str(default='mock_image/pelota.jpeg', required=True)
    trending = fields.Boolean(default=False, required=True)

    class Meta:
        fields = ('id', 'name', 'short_description', 'long_description', 'show_catalog', 'image', 'trending')
