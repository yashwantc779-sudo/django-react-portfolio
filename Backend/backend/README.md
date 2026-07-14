# Company Portfolio — Django Backend

Django + Django REST Framework backend built to match the React frontend found
in `Company_Portfolio_1-main`. It powers two features:

1. **Contact form** (`src/Component/Contact .jsx`) — saves name, email, phone,
   subject, message.
2. **Newsletter subscribe** (footer, `src/Component/footer.jsx`) — saves an
   email address.

The endpoint paths, methods, and trailing-slash quirks match exactly what
`src/Api/CoreApi.jsx` calls, so you can drop this in without touching the
frontend code.

## Endpoints

| Method | URL                                   | Purpose                  |
|--------|----------------------------------------|---------------------------|
| GET    | `/account/feedback/`                  | List all feedback         |
| POST   | `/account/feedback/`                  | Create feedback (Contact) |
| GET    | `/account/feedback/<id>/`             | Retrieve one               |
| PUT    | `/account/feedback/<id>/`             | Update                     |
| DELETE | `/account/feedback/<id>/`             | Delete                     |
| GET    | `/account/email_suscribe/`            | List subscribers          |
| POST   | `/account/email_suscribe` (no slash)  | Subscribe an email        |
| PUT    | `/account/email_suscribe/<id>/`       | Update                     |
| DELETE | `/account/email_suscribe//<id>/`      | Delete (matches frontend's double-slash call) |

Admin panel: `/admin/`

## Setup

```bash
# 1. Create & activate a virtual environment
python3 -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate

# 2. Install dependencies
pip install -r requirements.txt

# 3. Run migrations
python manage.py makemigrations
python manage.py migrate

# 4. Create an admin user (optional, to view submissions in /admin/)
python manage.py createsuperuser

# 5. Run the dev server
python manage.py runserver
```

The API will be available at `http://127.0.0.1:8000/`, which matches the
`baseURL` already set in the frontend's `src/Config/Config.jsx`.

## CORS

`django-cors-headers` is configured in `core/settings.py` to allow requests
from `http://localhost:3000` and `http://127.0.0.1:3000` (React's default dev
server). Add your production frontend domain to `CORS_ALLOWED_ORIGINS` before
deploying.

## Project structure

```
backend/
├── core/               # Django project (settings, root urls)
├── account/            # App: Feedback + EmailSubscribe models/views
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   ├── urls.py
│   └── admin.py
├── manage.py
└── requirements.txt
```

## Production notes

Before deploying:
- Set `DEBUG = False` and set a real `SECRET_KEY` via environment variable.
- Set `ALLOWED_HOSTS` to your domain.
- Switch from SQLite to Postgres/MySQL for production traffic.
- Consider adding rate limiting / captcha to the contact form to prevent spam.
