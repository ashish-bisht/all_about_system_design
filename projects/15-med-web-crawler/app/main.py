"""
Distributed Web Crawler — System Design Implementation
Design a large-scale distributed web crawler
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Distributed Web Crawler",
    description="Design a large-scale distributed web crawler",
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
        "service": "Distributed Web Crawler",
        "status": "running",
        "version": "0.1.0",
    }


@app.get("/health")
async def health_check():
    return {"status": "healthy"}


# TODO: Add routes for Distributed Web Crawler
# from app.routes import router
# app.include_router(router)
