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
