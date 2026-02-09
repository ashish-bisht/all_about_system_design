"""
Stock Exchange — System Design Implementation
Design a real-time stock trading platform
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Stock Exchange",
    description="Design a real-time stock trading platform",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {
        "service": "Stock Exchange",
        "status": "running",
        "version": "0.1.0",
    }


@app.get("/health")
async def health_check():
    return {"status": "healthy"}


# TODO: Add routes for Stock Exchange
# from app.routes import router
# app.include_router(router)
