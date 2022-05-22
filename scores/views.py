'''views to display games and scores'''
# pylint: disable=no-member
from django.shortcuts import render
from django.views import generic, View
from django.views.generic.edit import CreateView
from django.http import HttpResponseRedirect
from django.contrib.auth.mixins import LoginRequiredMixin
from .forms import CardGameForm
from .models import CardGameScore


class CardGameView(LoginRequiredMixin, CreateView):
    '''
    class view in get - gets the traffic_msg_form and in post - posts the form
    and creates new traffic alert
    '''
    template_name = 'games/card-game.html'

    # success_url = 'card_game_scores'

    def get(self, request, *args, **kwargs):

        return render(request, self.template_name)

    def post(self, request, *args, **kwargs):
        form = CardGameForm(request.POST or None, request.FILES or None)
        form.instance.player = request.user

        if form.is_valid():
            form.save()
            return HttpResponseRedirect('/')

        else:
            return HttpResponseRedirect('/')

        return HttpResponseRedirect('/')


class CardGameEasyScoresView(LoginRequiredMixin, generic.ListView):
    '''
    view to display list of scores
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
