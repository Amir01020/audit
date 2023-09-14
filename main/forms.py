from .models import Newe_comment
from django.forms import ModelForm,TextInput


class Newe_comment_Forms(ModelForm):
    class Meta:
        model = Newe_comment
        fields = ['name','full_text']
        widgets = {
            "name":TextInput(attrs={
                "placeholder":'Имя'
            }),
            "full_text":TextInput(attrs={
                "placeholder":'Отзыв'
            })
        }