"""
Distributed Cache — System Design Implementation
Design a distributed caching layer like Memcached
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Distributed Cache",
    description="Design a distributed caching layer like Memcached",
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
        "service": "Distributed Cache",
        "status": "running",
        "version": "0.1.0",
    }


@app.get("/health")
async def health_check():
    return {"status": "healthy"}


# TODO: Add routes for Distributed Cache
# from app.routes import router
# app.include_router(router)
