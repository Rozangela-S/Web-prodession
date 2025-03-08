from rest_framework.permissions import AllowAny
from rest_framework import viewsets
from .models import Profissao
from .serializers import ProfissaoSerializer

class ProfissaoViewSet(viewsets.ModelViewSet):
    queryset = Profissao.objects.all()
    serializer_class = ProfissaoSerializer
    permission_classes = [AllowAny]
