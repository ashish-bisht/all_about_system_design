"""
Yelp Nearby Search — System Design Implementation
Design a location-based business discovery service
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Yelp Nearby Search",
    description="Design a location-based business discovery service",
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
        "service": "Yelp Nearby Search",
        "status": "running",
        "version": "0.1.0",
    }


@app.get("/health")
async def health_check():
    return {"status": "healthy"}


# TODO: Add routes for Yelp Nearby Search
# from app.routes import router
# app.include_router(router)
