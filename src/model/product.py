
class Product:
    name = ''
    short_description = ''
    long_description = ''
    show_catalog = True
    image = ''

    def __init__(self, hash):
        self.name = hash.get('name')
        self.short_description = hash.get('short_description')
        self.long_description = hash.get('long_description')
        self.show_catalog = True
        self.image = hash.get('image','mock_image/pelota.jpeg')

    def serialize(self):
        return {
            "name": self.name,
            "short_description": self.short_description,
            "long_description": self.long_description,
            "show_catalog": self.show_catalog,
            "image": self.image
        }