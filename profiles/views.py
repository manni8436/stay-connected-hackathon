
"""views for profiles app"""
# pylint: disable=no-member
from django.shortcuts import render, get_object_or_404
from django.contrib import messages
from django.contrib.auth.decorators import login_required

from .models import UserProfile
from .forms import UserProfileForm


@login_required
def profile(request):
    """
    Display the user's profile
    """
    current_user = request.user
    user_profile = get_object_or_404(UserProfile, user=current_user)

    if request.method == 'POST':
        form = UserProfileForm(request.POST, instance=user_profile)
        if form.is_valid():
            form.save()
            messages.success(request, 'Profile updated successfully')
        else:
            messages.error(request,
                           'Update failed. Please ensure the form is valid')
    else:
        form = UserProfileForm(instance=user_profile)

    form = UserProfileForm(instance=user_profile)

    template = 'profiles/profile.html'
    context = {
        'form': form,
        'user_profile': user_profile,
    }
    return render(request, template, context)
