from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.schemas.user import User, UserUpdate
from app.models.user import User as UserModel
from app.services.auth import get_current_user
from app.db.session import get_db

router = APIRouter()

@router.get("/", response_model=List[User])
async def get_users(
    db: Session = Depends(get_db),
    skip: int = 0,
    limit: int = 100,
) -> Any:
    """
    Retrieve users.
    """
    users = db.query(UserModel).offset(skip).limit(limit).all()
    return users

@router.get("/me", response_model=User)
async def read_user_me(
    current_user: User = Depends(get_current_user),
) -> Any:
    """
    Get current user.
    """
    return current_user

@router.put("/me", response_model=User)
async def update_user_me(
    *,
    db: Session = Depends(get_db),
    password: str = None,
    full_name: str = None,
    email: str = None,
    current_user: User = Depends(get_current_user),
) -> Any:
    """
    Update own user.
    """
    current_user_data = UserUpdate(**current_user.dict())
    if password is not None:
        current_user_data.password = password
    if full_name is not None:
        current_user_data.full_name = full_name
    if email is not None:
        current_user_data.email = email
    
    user = db.query(UserModel).filter(UserModel.id == current_user.id).first()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    
    update_data = current_user_data.dict(exclude_unset=True)
    for field, value in update_data.items():
        setattr(user, field, value)
    
    db.add(user)
    db.commit()
    db.refresh(user)
    return user 