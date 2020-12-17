from mongoengine import Document, StringField, BooleanField, IntField, ReferenceField, FloatField


class Product(Document):
    name = StringField()
    short_description = StringField()
    long_description = StringField()
    show_catalog = BooleanField(default=True)
    image = StringField(default='mock_image/pelota.jpeg')
    trending = BooleanField(default=False)
    price = FloatField(default=100.0)


class Evaluation(Document):
    product = ReferenceField(Product)
    comment = StringField()
    rating = IntField()