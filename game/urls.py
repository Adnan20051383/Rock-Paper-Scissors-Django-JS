from django.urls import path

from game import views

urlpatterns = [
    path('', views.home, name='home'),
    path('game-starter/', views.game_starter, name='game-starter'),
    path('game/', views.game, name='game'),
]
