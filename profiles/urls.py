from django.contrib import admin
from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.profile_form_view, name='profile_form_view'),
]
