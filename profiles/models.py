'''models for profiles app'''
# pylint: disable=no-member
# pylint: disable=C0103
# pylint: disable=unused-argument
from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


class UserProfile(models.Model):
    """
    A user profile model
    """
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(
        max_length=80, null=True, blank=True)
    last_name = models.CharField(
        max_length=80, null=True, blank=True)

    def __str__(self):
        return f'{self.user.username}'


# should go to signals.py
@receiver(post_save, sender=User)
def create_or_update_user_profile(sender, instance, created, **kwargs):
    """
    Create or update the user profile
    """
    if created:
        UserProfile.objects.create(user=instance)
    # Existing users: just save the profile
    instance.userprofile.save()
