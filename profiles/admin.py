'''admin for profiles app'''
from django.contrib import admin
from .models import UserProfile


class UserProfileAdmin(admin.ModelAdmin):
    '''
    admin for User Profile
    '''

    fields = ('user',)
    # restrict the columns that show up in order list
    list_display = ('user',)


admin.site.register(UserProfile)
