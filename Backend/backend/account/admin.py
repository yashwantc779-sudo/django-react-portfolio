from django.contrib import admin
from .models import Feedback, EmailSubscribe


@admin.register(Feedback)
class FeedbackAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "email", "phone", "subject", "created_at")
    search_fields = ("name", "email", "phone", "subject")
    list_filter = ("created_at",)
    readonly_fields = ("created_at", "updated_at")


@admin.register(EmailSubscribe)
class EmailSubscribeAdmin(admin.ModelAdmin):
    list_display = ("id", "email", "created_at")
    search_fields = ("email",)
    list_filter = ("created_at",)
    readonly_fields = ("created_at",)
