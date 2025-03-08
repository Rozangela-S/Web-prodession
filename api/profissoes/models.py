from django.db import models
from areas.models import Area

def data():
    return {
    "name": "",
    "category": "",
    "description": "",
    "salary-min": 0.0,
    "salary-max":0.0,
    "skills": [],
    "growth": "",
    "rating": 0.0
    }

class Profissao(models.Model):
    area = models.ForeignKey(Area, on_delete=models.CASCADE, related_name='profissoes')
    data = models.JSONField(default=data)

    def __str__(self):
        return self.data.name
