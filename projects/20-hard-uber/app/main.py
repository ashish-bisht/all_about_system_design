"""
Uber Ride Sharing — System Design Implementation
Design a ride-sharing service with real-time matching
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Uber Ride Sharing",
    description="Design a ride-sharing service with real-time matching",
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
        "service": "Uber Ride Sharing",
        "status": "running",
        "version": "0.1.0",
    }


@app.get("/health")
async def health_check():
    return {"status": "healthy"}


# TODO: Add routes for Uber Ride Sharing
# from app.routes import router
# app.include_router(router)
