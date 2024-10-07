from pydantic_settings import BaseSettings
from dotenv import load_dotenv
import os

load_dotenv()


class Settings(BaseSettings):
    CMC_API_KEY: str

    model_config = {
        "env_file": ".env",
        "env_file_encoding": "utf-8",
    }


settings = Settings()
print(f"CMC_API_KEY from env: {os.getenv('CMC_API_KEY')}")
print(f"CMC_API_KEY from Pydantic: {settings.CMC_API_KEY}")
