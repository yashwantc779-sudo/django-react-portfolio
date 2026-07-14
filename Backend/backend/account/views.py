from rest_framework import viewsets, permissions
from .models import Feedback, EmailSubscribe
from .serializers import FeedbackSerializer, EmailSubscribeSerializer


class FeedbackViewSet(viewsets.ModelViewSet):
    """
    Handles the Contact Us form.
    GET    /account/feedback/        -> list all feedback
    POST   /account/feedback/        -> create new feedback
    GET    /account/feedback/<id>/   -> retrieve one
    PUT    /account/feedback/<id>/   -> update
    DELETE /account/feedback/<id>/   -> delete
    """

    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
    permission_classes = [permissions.AllowAny]


class EmailSubscribeViewSet(viewsets.ModelViewSet):
    """
    Handles the newsletter / email subscribe form (footer).
    GET    /account/email_suscribe/        -> list all subscribers
    POST   /account/email_suscribe/        -> subscribe new email
    GET    /account/email_suscribe/<id>/   -> retrieve one
    PUT    /account/email_suscribe/<id>/   -> update
    DELETE /account/email_suscribe/<id>/   -> delete
    """

    queryset = EmailSubscribe.objects.all()
    serializer_class = EmailSubscribeSerializer
    permission_classes = [permissions.AllowAny]
