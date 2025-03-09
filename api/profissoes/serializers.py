from rest_framework import serializers
from .models import Profissao

class ProfissaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profissao
        fields = '__all__'

    def validate_caracteristicas(self, value):
        """Valida que 'ram' seja um número inteiro."""
        if "salary_max" in value and not isinstance(value["salary_max"], float):
            raise serializers.ValidationError("'salary_max' deve ser um número.")
        if "salary_min" in value and not isinstance(value["salary_min"], float):
            raise serializers.ValidationError("'salary_min' deve ser um número.")
        if "rating" in value and not isinstance(value["rating"], float):
            raise serializers.ValidationError("'rating' deve ser um número.")
        return value
    


    def to_representation(self, instance):
        """Converte 'salary-min' e 'salary-max' para 'salary_min' e 'salary_max'"""
        data = super().to_representation(instance)
        data["salary_min"] = data.pop("salary-min", None)
        data["salary_max"] = data.pop("salary-max", None)
        return data