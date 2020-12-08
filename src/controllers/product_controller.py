from flask import Blueprint, jsonify, request
from model.product import Product

from schemas.product_schema import CreateProductSchema, ProductDetailSchema

PRODUCT_BLUEPRINT = Blueprint('product', __name__)


@PRODUCT_BLUEPRINT.route('/', methods=['GET'])
def list_products():
    all_products = Product.objects
    product_list = []
    for product in all_products:
        product_list.append(ProductDetailSchema().dump(product))

    return jsonify({'products': product_list})


@PRODUCT_BLUEPRINT.route('/<_id>', methods=['GET'])
def get(_id):
    try:
        product = Product.objects.get(id=_id)
        response = ProductDetailSchema().dump(product)
        return jsonify(response)
    except:
        return "Not found", 404


@PRODUCT_BLUEPRINT.route('/', methods=['POST'])
def post():
    content = request.get_json()
    product_schema = CreateProductSchema()
    product_data = product_schema.load(content)

    product = Product.objects.create(
        name=product_data.get('name'),
        short_description=product_data.get('short_description'),
        long_description=product_data.get('long_description'),
        show_catalog=product_data.get('show_catalog'),
        image=product_data.get('image')
    )
    response = ProductDetailSchema().dump(product)
    return jsonify(response)


@PRODUCT_BLUEPRINT.route('/<_id>', methods=['PUT'])
def update(_id):
    try:
        product = Product.objects.get(id=_id)
        product_changes = request.get_json()

        product.update(**product_changes)
        response = ProductDetailSchema().dump(Product.objects.get(id=_id))
        return jsonify(response)
    except:
        return "Not found", 404


@PRODUCT_BLUEPRINT.route('/<_id>', methods=['DELETE'])
def remove(_id):
    try:
        product = Product.objects.get(id=_id)
        return jsonify(product.delete())
    except:
        return "Not found", 404
