from allauth.account.views import confirm_email
from django.conf.urls import url
from django.urls import path, include

urlpatterns = [
    url(r'^auth/', include('rest_auth.urls')),
    url(r'^auth/registration/', include('rest_auth.registration.urls')),
    url(r'^account/', include('allauth.urls')),
]
