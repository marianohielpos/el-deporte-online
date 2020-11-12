import os
from dotenv import load_dotenv

load_dotenv(verbose=True)

ENV_PATH = '/.env'
load_dotenv(dotenv_path=ENV_PATH)


class Config:
    RETRY_WRITES = os.getenv("RETRY_WRITES", "false").lower() == "true"
    DATABASE_NAME = os.getenv("DATABASE_NAME", "shop")
    DATABASE_SSL = os.getenv("DATABASE_SSL", "false").lower() == "true"
    DATABASE_HOST = os.getenv("DATABASE_HOST", "localhost")
    DATABASE_PORT = int(os.getenv("DATABASE_PORT", "27017"))
    DATABASE_PASSWORD = os.getenv("DATABASE_PASSWORD", "password")
    DATABASE_USERNAME = os.getenv("DATABASE_USERNAME", "app")
    DATABASE_AUTH_SOURCE = os.getenv("DATABASE_AUTH_SOURCE", "shop")
