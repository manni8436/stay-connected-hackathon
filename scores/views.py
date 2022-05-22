from django.shortcuts import render
from django.views import generic, View
from django.views.generic.edit import CreateView
from django.http import HttpResponseRedirect
from .forms import CardGameForm


class CardGameView(CreateView):
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
            new_score = form.save()

            print(f'NEW SCORE {new_score}')
            return HttpResponseRedirect('/')

        else:
            return HttpResponseRedirect('/')

        return HttpResponseRedirect('/')
