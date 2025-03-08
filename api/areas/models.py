from django.db import models

def data():
    return {
        "name": "",
        "category": "",
        "description": ""
    }

class Area(models.Model):
    data = models.JSONField(default= data)

    def __str__(self):
        return self.data.name
