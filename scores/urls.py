'''urls for profiles app'''
from django.urls import path
from . import views


urlpatterns = [
    path('games/card_game/', views.CardGameView.as_view(), name='card_game'),
    path(
        'scores/card_game_easy/', views.CardGameEasyScoresView.as_view(),
        name='card_game_easy'),
    path(
        'scores/card_game_medium/', views.CardGameMediumScoresView.as_view(),
        name='card_game_medium'),
    path(
        'scores/card_game_hard/', views.CardGameHardScoresView.as_view(),
        name='card_game_hard'),
]
