from typing import Union
from datetime import datetime

from fastapi import FastAPI

app = FastAPI()

@app.get("/health")
def read_root():
    response = {
        "status": "Backend Developer",
        "name": "João Batista Lisboa Peçanha",
        "local": "Brasil - Rio de Janeiro",
        "skills": ["Python", "FastAPI", "Flask", "Django", "Node.js", "Docker", "Kubernetes", "AWS", "React", "MongoDB", "PostgreSQL", "MySql", "Sonar"],
        "timestamp": datetime.now().isoformat()
    }
    return response

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
