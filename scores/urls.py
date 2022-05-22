'''urls for profiles app'''
from django.urls import path
from . import views


urlpatterns = [
    path('games/card_game/', views.CardGameView.as_view(), name='card_game'),
    # path('scores/card_game/', views.card_game_scores, name='card_game_scores'),
]
