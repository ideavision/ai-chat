"""Main entrypoint for the app."""

import asyncio
from typing import Optional, Union
from uuid import UUID

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from langserve import add_routes
from pydantic import BaseModel
import uvicorn

from chain import ChatRequest, answer_chain

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"],
)

add_routes(
    app, answer_chain, path="/chat", input_type=ChatRequest, config_keys=["metadata"]
)

if __name__ == "__main__":

    uvicorn.run(app, host="0.0.0.0", port=8080)
