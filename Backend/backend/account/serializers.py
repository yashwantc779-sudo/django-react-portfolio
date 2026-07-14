from rest_framework import serializers
from .models import Feedback, EmailSubscribe


class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = ["id", "name", "email", "phone", "subject", "message", "created_at", "updated_at"]
        read_only_fields = ["id", "created_at", "updated_at"]


class EmailSubscribeSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailSubscribe
        fields = ["id", "email", "created_at"]
        read_only_fields = ["id", "created_at"]
