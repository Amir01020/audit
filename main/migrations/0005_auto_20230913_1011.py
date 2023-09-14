# Generated by Django 3.0.5 on 2023-09-13 05:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_auto_20230913_0953'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='my_news_project',
            name='full_text',
        ),
        migrations.RemoveField(
            model_name='my_news_project',
            name='gmail',
        ),
        migrations.RemoveField(
            model_name='my_news_project',
            name='phone',
        ),
        migrations.RemoveField(
            model_name='my_news_project',
            name='title',
        ),
        migrations.RemoveField(
            model_name='my_news_project',
            name='url_site',
        ),
        migrations.AddField(
            model_name='my_news_project',
            name='names',
            field=models.CharField(default=1, max_length=250, verbose_name='Ташкилотининг номи'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='my_news_project',
            name='stir',
            field=models.CharField(default=1, max_length=100, verbose_name='СТИР'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='my_news_project',
            name='text',
            field=models.CharField(default=1, max_length=250, verbose_name='Хлоса'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='my_news_project',
            name='data',
            field=models.DateField(verbose_name='Дата'),
        ),
    ]
