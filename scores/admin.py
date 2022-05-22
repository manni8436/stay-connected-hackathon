from django.contrib import admin
from .models import CardGameScore


# @admin.register(CardGameScore)
class CardGameScoreAdmin(admin.ModelAdmin):
    '''
    class enabling admin see the scores for card game
    '''
    list_display = ('player', 'level', 'moves',)
    search_fields = ['player', 'level']
    list_filter = ('player', 'level')


admin.site.register(CardGameScore)
