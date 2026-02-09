"""
Bitly URL Shortener — System Design Implementation
Design a URL shortening service like bit.ly
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Bitly URL Shortener",
    description="Design a URL shortening service like bit.ly",
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
        "service": "Bitly URL Shortener",
        "status": "running",
        "version": "0.1.0",
    }


@app.get("/health")
async def health_check():
    return {"status": "healthy"}


# TODO: Add routes for Bitly URL Shortener
# from app.routes import router
# app.include_router(router)
