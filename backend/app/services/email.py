import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from app.core.config import settings

async def send_contact_email(name: str, email: str, subject: str, message: str):
    """
    Send contact form email notification
    """
    if not all([settings.SMTP_HOST, settings.SMTP_USER, settings.SMTP_PASSWORD]):
        # In development, just log the email
        print(f"Contact form from {name} ({email}): {subject}")
        print(f"Message: {message}")
        return
    
    # Create message
    msg = MIMEMultipart()
    msg['From'] = settings.EMAILS_FROM_EMAIL
    msg['To'] = settings.EMAILS_FROM_EMAIL
    msg['Subject'] = f"Contact Form: {subject}"
    
    # Email body
    body = f"""
    New contact form submission:
    
    Name: {name}
    Email: {email}
    Subject: {subject}
    
    Message:
    {message}
    """
    
    msg.attach(MIMEText(body, 'plain'))
    
    # Send email
    try:
        server = smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT)
        server.starttls()
        server.login(settings.SMTP_USER, settings.SMTP_PASSWORD)
        text = msg.as_string()
        server.sendmail(settings.EMAILS_FROM_EMAIL, settings.EMAILS_FROM_EMAIL, text)
        server.quit()
    except Exception as e:
        print(f"Failed to send email: {e}")
        # Don't raise exception in development
        pass 