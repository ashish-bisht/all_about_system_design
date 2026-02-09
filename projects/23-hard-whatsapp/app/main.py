"""
WhatsApp Messaging — System Design Implementation
Design an end-to-end encrypted messaging platform
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="WhatsApp Messaging",
    description="Design an end-to-end encrypted messaging platform",
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
        "service": "WhatsApp Messaging",
        "status": "running",
        "version": "0.1.0",
    }


@app.get("/health")
async def health_check():
    return {"status": "healthy"}


# TODO: Add routes for WhatsApp Messaging
# from app.routes import router
# app.include_router(router)
