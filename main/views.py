from django.shortcuts import render
from .models import My_news,My_news_project,My_stat



def index(request):
    return render(request, 'main/index.html')


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