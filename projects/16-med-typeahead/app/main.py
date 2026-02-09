"""
Typeahead Autocomplete — System Design Implementation
Design a real-time search autocomplete system
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Typeahead Autocomplete",
    description="Design a real-time search autocomplete system",
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
        "service": "Typeahead Autocomplete",
        "status": "running",
        "version": "0.1.0",
    }


@app.get("/health")
async def health_check():
    return {"status": "healthy"}


# TODO: Add routes for Typeahead Autocomplete
# from app.routes import router
# app.include_router(router)
