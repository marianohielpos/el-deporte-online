from app import APP
from mongoengine import disconnect, connect
import pytest


@pytest.fixture
def client():
    APP.config['TESTING'] = True
    disconnect()
    connect('mongoenginetest', host='mongomock://localhost')
    client = APP.test_client()

    yield client

    disconnect()
