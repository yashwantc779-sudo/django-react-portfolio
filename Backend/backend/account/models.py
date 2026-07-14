from django.db import models


class Feedback(models.Model):
    """Model for the Contact Us form submissions (name, email, phone, subject, message)."""

    name = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    subject = models.CharField(max_length=255)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "Feedback"
        verbose_name_plural = "Feedback"

    def __str__(self):
        return f"{self.name} - {self.subject}"


class EmailSubscribe(models.Model):
    """Model for newsletter/email subscription (footer subscribe form)."""

    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "Email Subscriber"
        verbose_name_plural = "Email Subscribers"

    def __str__(self):
        return self.email


'''
Admin panel 
username - yash
password - 1234

'''