from rest_framework.permissions import AllowAny
from rest_framework import viewsets
from areas.models import Area
from .serializers import AreaSerializer

class AreaViewSet(viewsets.ModelViewSet):
    queryset = Area.objects.all()
    serializer_class = AreaSerializer
    permission_classes = [AllowAny]
