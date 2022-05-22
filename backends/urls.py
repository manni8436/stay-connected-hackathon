"""backends URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from home import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.get_index, name='home'),
    path('accounts/', include('allauth.urls')),
    path('profile/', include('profiles.urls')),
    path('', include('scores.urls')),
    path('dashboard/', views.get_group_dashboard, name='group_dashboard'),

    path('games/rock_paper_scissors/', views.get_rock_paper_scissors,
         name='rock_paper_scissors'),
    path('games/quizanaughts/welcome', views.get_quizanaughts_welcome,
         name='quizanaughts_welcome'),
    path('games/quizanaughts/game', views.get_quizanaughts_game,
         name='quizanaughts_game'),
    path('games/canvas_art/', views.get_canvas_art, name='canvas_art'),
    path('games/ping_pong/', views.get_ping_pong, name='ping_pong'),
    path('games/tetris/', views.get_tetris, name='tetris'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
