from django.conf.urls import url
from django.urls import path, include

from allauth.account.views import confirm_email

from . import views

urlpatterns = [
    path('groups/', views.GroupList.as_view()),
    path('group/<int:pk>/', views.GroupDetail.as_view()),
    url(r'^auth/', include('rest_auth.urls')),
    url(r'^auth/registration/', include('rest_auth.registration.urls')),
    url(r'^account/', include('allauth.urls')),
]
