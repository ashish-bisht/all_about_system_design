"""
Payment System — System Design Implementation
Design a payment processing system like Stripe
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Payment System",
    description="Design a payment processing system like Stripe",
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
        "service": "Payment System",
        "status": "running",
        "version": "0.1.0",
    }


@app.get("/health")
async def health_check():
    return {"status": "healthy"}


# TODO: Add routes for Payment System
# from app.routes import router
# app.include_router(router)
