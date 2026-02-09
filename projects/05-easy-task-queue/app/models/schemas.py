"""
Pydantic schemas for Task Queue
"""
from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class BaseResponse(BaseModel):
    success: bool = True
    message: str = "OK"
    timestamp: datetime = datetime.utcnow()


# TODO: Add request/response schemas for Task Queue
