'''views for home app'''
from django.shortcuts import render


def get_index(request):
    '''
    view to return index page
    '''
    return render(request, 'index.html')


def get_group_dashboard(request):
    '''
    view to return group dashboard page
    '''
    return render(request, 'group-dashboard.html')


def get_rock_paper_scissors(request):
    '''
    view to return rock paper scizors game page
    '''
    return render(request, 'games/rock-paper-scissors.html')


def get_card_game(request):
    '''
    view to return card game page
    '''
    return render(request, 'games/card-game.html')


def get_quizanaughts_welcome(request):
    '''
    view to return the view to display welcome page wor quizanaughts
    '''
    return render(request, 'games/quiz-game-home.html')


def get_quizanaughts_game(request):
    '''
    view to return the view to game page for quizanaughts
    '''
    return render(request, 'games/quiz-game.html')


def get_canvas_art(request):
    '''
    view to return canvas art game
    '''
    return render(request, 'games/canvas-art.html')


def get_game_5(request):
    '''
    view to return game 5
    '''
    return render(request, 'games/game-5.html') 


def get_game_6(request):
    '''
    view to return game 6
    '''
    return render(request, 'games/game-6.html')
