from mongoengine import Document, StringField, BooleanField


class Product(Document):
    name = StringField()
    short_description = StringField()
    long_description = StringField()
    show_catalog = BooleanField(default=True)
    image = StringField(default='mock_image/pelota.jpeg')
    trending = BooleanField(default=False)
