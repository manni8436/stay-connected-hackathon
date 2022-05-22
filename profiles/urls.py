'''urls for profiles app'''
from django.urls import path
from . import views


urlpatterns = [
    path('', views.profile_form_view, name='profile_form_view'),
]
