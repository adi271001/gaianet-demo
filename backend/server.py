
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

@app.get("/node_status")
def node_status():
    return {"modelVersion": "v1.2", "accuracy": 0.94, "lastUpdated": 1711180800}
