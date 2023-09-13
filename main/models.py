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
    title = models.CharField('СТИР', max_length=250)
    full_text = models.CharField('Аудиторлик ташкилотининг номи', max_length=250)
    data = models.DateField('Реестрга киритиш санаси ')
    gmail = models.CharField('почта', max_length=100)
    phone = models.CharField('номер', max_length=13)
    url_site = models.CharField('ссылка', max_length=250)
    

    def __str__(self):
        return self.title
    
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