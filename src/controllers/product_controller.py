from database.database import Database
from flask import Blueprint, jsonify, request
from model.product import Product

PRODUCT_BLUEPRINT = Blueprint('product', __name__)

@PRODUCT_BLUEPRINT.route('/', methods=['GET'])
def list_products():
    all_products = Database.instance().db.get('product',{})
    product_list = []
    for product_id in all_products:
        product = all_products.get(product_id)
        product_dict = product.serialize()
        product_dict["id"] = product_id
        product_list.append(product_dict)

    return jsonify({'products': product_list})

@PRODUCT_BLUEPRINT.route('/<_id>', methods=['GET'])
def get(_id):
    product = Database.instance().db.get('product').get(_id, {})
    if not product:
        return product, 404

    response = product.serialize()
    response['id'] = _id
    return jsonify(response)

@PRODUCT_BLUEPRINT.route('/', methods=['POST'])
def post():
    content = request.get_json()
    product = Product(content)
    product_id = str(len(Database.instance().db.get('product')) + 1)
    Database.instance().db.get('product')[product_id] = product
    response = product.serialize()
    response['id'] = product_id
    return jsonify(response)

@PRODUCT_BLUEPRINT.route('/<_id>', methods=['PUT'])
def update(_id):
    product = Database.instance().db.get('product').get(_id, {})
    if not product:
        return product, 404

    product_changes = request.get_json()
    product_dict = product.serialize()
    for attribute in product_changes:
        product_dict[attribute] = product_changes[attribute]

    updated_product = Product(product_dict)
    Database.instance().db.get('product')[_id] = updated_product
    response = updated_product.serialize()
    response['id'] = _id
    return jsonify(response)


@PRODUCT_BLUEPRINT.route('/<_id>', methods=['DELETE'])
def remove(_id):
    product = Database.instance().db.get('product').get(_id, {})
    if not product:
        return product, 404

    Database.instance().db.get('product').pop(_id)
    return jsonify({})


