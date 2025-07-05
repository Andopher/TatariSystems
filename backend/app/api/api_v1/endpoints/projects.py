from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.schemas.project import Project, ProjectCreate, ProjectUpdate
from app.models.project import Project as ProjectModel
from app.db.session import get_db

router = APIRouter()

@router.get("/", response_model=List[Project])
async def get_projects(
    db: Session = Depends(get_db),
    skip: int = 0,
    limit: int = 100,
) -> Any:
    """
    Retrieve projects.
    """
    projects = db.query(ProjectModel).offset(skip).limit(limit).all()
    return projects

@router.get("/{project_id}", response_model=Project)
async def get_project(
    *,
    db: Session = Depends(get_db),
    project_id: int,
) -> Any:
    """
    Get project by ID.
    """
    project = db.query(ProjectModel).filter(ProjectModel.id == project_id).first()
    if not project:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Project not found"
        )
    return project

@router.post("/", response_model=Project)
async def create_project(
    *,
    db: Session = Depends(get_db),
    project_in: ProjectCreate,
) -> Any:
    """
    Create new project.
    """
    project = ProjectModel(
        title=project_in.title,
        description=project_in.description,
        image_url=project_in.image_url,
        github_url=project_in.github_url,
        live_url=project_in.live_url,
        technologies=project_in.technologies,
        featured=project_in.featured,
    )
    db.add(project)
    db.commit()
    db.refresh(project)
    return project

@router.put("/{project_id}", response_model=Project)
async def update_project(
    *,
    db: Session = Depends(get_db),
    project_id: int,
    project_in: ProjectUpdate,
) -> Any:
    """
    Update project.
    """
    project = db.query(ProjectModel).filter(ProjectModel.id == project_id).first()
    if not project:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Project not found"
        )
    
    update_data = project_in.dict(exclude_unset=True)
    for field, value in update_data.items():
        setattr(project, field, value)
    
    db.add(project)
    db.commit()
    db.refresh(project)
    return project

@router.delete("/{project_id}")
async def delete_project(
    *,
    db: Session = Depends(get_db),
    project_id: int,
) -> Any:
    """
    Delete project.
    """
    project = db.query(ProjectModel).filter(ProjectModel.id == project_id).first()
    if not project:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Project not found"
        )
    
    db.delete(project)
    db.commit()
    return {"message": "Project deleted successfully"} 