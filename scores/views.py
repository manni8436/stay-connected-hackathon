from django.shortcuts import render
from django.views import generic, View
from django.views.generic.edit import CreateView
from django.http import HttpResponseRedirect


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


        if traffic_msg_form.is_valid():
            traffic_msg_form.instance.author_id = request.user.id
            traffic_msg_form.instance.status = 1

            traffic_message = traffic_msg_form.save(commit=False)
            traffic_message.save()

        else:
            return HttpResponseRedirect('/')

        return HttpResponseRedirect('/')
