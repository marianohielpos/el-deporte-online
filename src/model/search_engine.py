from model.product import Product
from mongoengine import Q


class SearchEngine:

    def search(self, query, show_catalog, trending):
        show_catalog_param = self.get_show_catalog(show_catalog)
        trending_param = self.get_trending(trending)

        filter = Q()
        if trending_param is not None:
            filter = filter & Q(trending=trending_param)

        if show_catalog_param is not None:
            filter = filter & Q(show_catalog=show_catalog_param)

        if query is not None:
            filter = filter & (Q(name__icontains=query) | Q(short_description__icontains=query) | Q(long_description__icontains=query))

        return Product.objects(filter)

    def get_show_catalog(self, show_catalog):
        if show_catalog == 'false':
            return False

        if show_catalog == 'true':
            return True

        return None

    def get_trending(self, trending):
        if trending == 'false':
            return False

        if trending == 'true':
            return True

        return None
