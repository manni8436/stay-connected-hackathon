'''forms for profiles app'''
from django import forms
from .models import UserProfile


class UserProfileForm(forms.ModelForm):
    '''
    form to update profile for the user
    '''
    class Meta:
        '''form reffers to model User Profile'''
        model = UserProfile
        # important - don't forget coma at the end of the list of fields
        fields = ('first_name', 'last_name', )
