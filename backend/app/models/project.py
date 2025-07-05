from sqlalchemy import Boolean, Column, Integer, String, Text, DateTime, JSON
from sqlalchemy.sql import func

from app.db.session import Base

class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False, index=True)
    description = Column(Text, nullable=False)
    image_url = Column(String, nullable=True)
    github_url = Column(String, nullable=True)
    live_url = Column(String, nullable=True)
    technologies = Column(JSON, nullable=True)  # List of technology strings
    featured = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now()) 