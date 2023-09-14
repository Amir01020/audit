from django.db import models

class My_news(models.Model):
    title = models.CharField('название новости ', max_length=250)
    full_text = models.TextField('новость')
    data = models.DateField('время выхода новости')
    

    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = 'новасть'
        verbose_name_plural = 'новасти'


class My_news_project(models.Model):
    stir = models.CharField("СТИР", max_length=100)
    names = models.CharField("Ташкилотининг номи", max_length=250)
    text = models.CharField("Хлоса", max_length=250)
    data = models.DateField("Дата")
    img = models.ImageField(upload_to ='media/')
    

    def __str__(self):
        return self.stir
    
    class Meta:
        verbose_name = 'проект'
        verbose_name_plural = 'проектЫ'




class My_stat(models.Model):
    title = models.CharField('название статьи ', max_length=250)
    full_text = models.TextField('статья')
    data = models.DateField('время выхода статьи')
    

    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = 'статья'
        verbose_name_plural = 'статьи'



class This_project(models.Model):
    stir = models.CharField("СТИР", max_length=100)
    names = models.CharField("Ташкилотининг номи", max_length=250)
    text = models.CharField("Хлоса", max_length=250)
    data = models.DateField("Дата")
    img = models.ImageField(upload_to ='media/')
    

    def __str__(self):
        return self.stir
    
    class Meta:
        verbose_name = 'проект_'
        verbose_name_plural = 'проектЫ_'



class Newe_comment(models.Model):
    name = models.CharField('имя', max_length=70)
    full_text = models.CharField('коментарий', max_length=70)
   
    

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = 'коментарий'
        verbose_name_plural = 'коментарии'

