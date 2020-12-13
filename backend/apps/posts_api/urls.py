from django.urls import path

from rest_framework.urlpatterns import format_suffix_patterns

from . import views

urlpatterns = [
    path('posts/', views.PostList.as_view()),
    path('post/<int:pk>/', views.PostDetail.as_view()),
    path('comments/', views.CommentList.as_view()),
    path('comment/<int:pk>/', views.CommentDetail.as_view()),
    path('likes/', views.LikeList.as_view()),
    path('like/<int:pk>/', views.LikeDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
