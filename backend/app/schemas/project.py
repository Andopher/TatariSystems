from typing import Optional, List
from pydantic import BaseModel

class ProjectBase(BaseModel):
    title: str
    description: str
    image_url: Optional[str] = None
    github_url: Optional[str] = None
    live_url: Optional[str] = None
    technologies: Optional[List[str]] = None
    featured: bool = False

class ProjectCreate(ProjectBase):
    pass

class ProjectUpdate(ProjectBase):
    title: Optional[str] = None
    description: Optional[str] = None

class Project(ProjectBase):
    id: int

    class Config:
        from_attributes = True 