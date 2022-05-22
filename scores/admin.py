from django.contrib import admin
from .models import CardGameScore


# @admin.register(CardGameScore)
class CardGameScoreAdmin(admin.ModelAdmin):
    '''
    class enabling admin see the scores for card game
    '''
    list_display = ('user', 'level', 'moves',)
    search_fields = ['user', 'level']
    list_filter = ('user', 'level')


admin.site.register(CardGameScore)
