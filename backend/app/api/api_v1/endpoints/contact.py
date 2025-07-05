from typing import Any
from fastapi import APIRouter, HTTPException, status
from pydantic import EmailStr

from app.schemas.contact import ContactCreate, ContactResponse
from app.services.email import send_contact_email

router = APIRouter()

@router.post("/", response_model=ContactResponse)
async def create_contact(
    *,
    contact_in: ContactCreate,
) -> Any:
    """
    Create a new contact form submission.
    """
    try:
        # Send email notification
        await send_contact_email(
            name=contact_in.name,
            email=contact_in.email,
            subject=contact_in.subject,
            message=contact_in.message
        )
        
        return ContactResponse(
            success=True,
            message="Thank you for your message! We'll get back to you soon."
        )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to send contact form. Please try again later."
        ) 