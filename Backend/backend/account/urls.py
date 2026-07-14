from django.urls import path, re_path
from rest_framework.routers import DefaultRouter
from .views import FeedbackViewSet, EmailSubscribeViewSet

router = DefaultRouter()
router.register(r"feedback", FeedbackViewSet, basename="feedback")
router.register(r"email_suscribe", EmailSubscribeViewSet, basename="email_suscribe")

urlpatterns = router.urls

# --- Extra safety patterns to match the exact calls made by the React frontend ---
# The frontend posts to "account/email_suscribe" WITHOUT a trailing slash,
# and deletes using "account/email_suscribe//<id>/" (double slash typo).
# These patterns make sure those exact requests still work instead of 404-ing.
urlpatterns += [
    path(
        "email_suscribe",
        EmailSubscribeViewSet.as_view({"get": "list", "post": "create"}),
    ),
    re_path(
        r"^email_suscribe/+(?P<pk>[^/.]+)/$",
        EmailSubscribeViewSet.as_view(
            {"get": "retrieve", "put": "update", "patch": "partial_update", "delete": "destroy"}
        ),
    ),
]
