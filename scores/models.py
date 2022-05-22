'''models for scores app'''
# pylint: disable=no-member
# pylint: disable=C0103
# pylint: disable=unused-argument
from django.db import models
from django.contrib.auth.models import User


class CardGameScore(models.Model):
    """
    model for storing the scores from the card game
    """
    player = models.ForeignKey(User, on_delete=models.CASCADE)
    team = models.CharField(
        max_length=80, null=True, blank=True)
    scored_on = models.DateTimeField(auto_now=True)
    level = models.CharField(
        max_length=20, null=True, blank=True)
    moves = models.IntegerField(default=0)

    class Meta:
        '''orders the scores in database by number of moves'''
        ordering = ['-moves']

    def __str__(self):
        return f'{self.player.username} {self.level} {self.moves}'
