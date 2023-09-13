from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('services', views.services, name='services'),
    path('about', views.about, name='about'),
    path('project', views.project, name='project'),
    path('news', views.news, name='news'),
    path('stat', views.stat, name='stat'),
]


