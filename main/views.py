from django.shortcuts import render,redirect
from .models import My_news,My_news_project,My_stat,Newe_comment
from .forms import Newe_comment_Forms



def index(request):

    if request.method == 'POST':
        form = Newe_comment_Forms(request.POST)
        if form.is_valid:
            form.save()
        
        else:
            error = 'Форма не коректно заполнина'

    form = Newe_comment_Forms()
    arr = Newe_comment.objects.all()
    return render(request, 'main/index.html',{"arr":arr,"form":form})


def services(request):
    return render(request, 'main/services.html')

def about(request):
    return render(request, 'main/about.html')


def project(request):
    arr = My_news_project.objects.all()
    return render(request, 'main/project.html', {"arr":arr})

def news(request):
    arr = My_news.objects.order_by('-data')

    return render(request, 'main/news.html', {"arr":arr})

def stat(request):
    arr = My_stat.objects.order_by('-data')

    return render(request, 'main/stat.html', {"arr":arr})