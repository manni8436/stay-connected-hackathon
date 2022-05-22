'''views to display games and scores'''
# pylint: disable=no-member
from django.shortcuts import render
from django.views import generic, View
from django.views.generic.edit import CreateView
from django.http import HttpResponseRedirect
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse_lazy
from .forms import CardGameForm
from .models import CardGameScore


class CardGameView(LoginRequiredMixin, CreateView):
    '''
    class view in get - gets the traffic_msg_form and in post - posts the form
    and creates new traffic alert
    '''
    template_name = 'games/card-game.html'

    # success_url = 'card_game_easy'

    def get(self, request, *args, **kwargs):

        return render(request, self.template_name)

    def post(self, request, *args, **kwargs):
        form = CardGameForm(request.POST or None, request.FILES or None)
        form.instance.player = request.user

        if form.is_valid():
            score = form.save(commit=False)
            score.save()
            
        else:
            return HttpResponseRedirect('/')

        return HttpResponseRedirect(reverse_lazy('card_game_easy'))


class CardGameEasyScoresView(LoginRequiredMixin, generic.ListView):
    '''
    view to display list of scores for Easy level
    '''
    # TODO add filter by the team, once teams are created
    # def get_queryset(self):
    #     queryset = super(ScoresListView, self).get_queryset()

    #     queryset = (
    #         CardGameScore.objects
    #         .filter(player=self.request.user))
    #     return queryset
    quesryset = CardGameScore.objects.filter(level='easy')
    model = CardGameScore
    template_name = 'scores/card_game_scores.html'
    paginate_by = 6


class CardGameMediumScoresView(LoginRequiredMixin, generic.ListView):
    '''
    view to display list of scores for Medium level
    '''
    quesryset = CardGameScore.objects.filter(level='medium')
    model = CardGameScore
    template_name = 'scores/card_game_scores.html'
    paginate_by = 6


class CardGameHardScoresView(LoginRequiredMixin, generic.ListView):
    '''
    view to display list of scores for Hard level
    '''
    quesryset = CardGameScore.objects.filter(level='hard')
    model = CardGameScore
    template_name = 'scores/card_game_scores.html'
    paginate_by = 6
