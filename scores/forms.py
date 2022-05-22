'''forms for scores app'''
from django import forms
from .models import CardGameScore


class CardGameForm(forms.ModelForm):
    '''
    form to input the scores from card game
    '''

    class Meta:
        model = CardGameScore
        fields = (
            'team',
            'level',
            'moves',
        )
