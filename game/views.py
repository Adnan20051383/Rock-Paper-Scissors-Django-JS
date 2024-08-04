from django.shortcuts import render, redirect
from django.urls import reverse


def home(request):
    return render(request, 'home.html')


def game_starter(request):
    if request.method == "POST":
        num1 = request.POST['numOfEfforts']
        num2 = request.POST['numOfWins']
        if int(num1) < int(num2):
            error_message = "Number of efforts must be greater than or equal to number of wins."
            return render(request, 'game-starter.html', {'error': error_message})
        request.session['numOfEfforts'] = num1
        request.session['numOfWins'] = num2
        return redirect('game')
    return render(request, 'game-starter.html', {'error': ""})


def game(request):
    numOfEfforts = request.session.get('numOfEfforts', 1)
    numOfWins = request.session.get('numOfWins', 1)
    return render(request, 'game.html', {'numOfEfforts': numOfEfforts, 'numOfWins': numOfWins})

