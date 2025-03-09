# from rest_framework.permissions import AllowAny
# from rest_framework import viewsets
# from .models import Profissao
# from .serializers import ProfissaoSerializer

# class ProfissaoViewSet(viewsets.ModelViewSet):
#     queryset = Profissao.objects.all()
#     serializer_class = ProfissaoSerializer
#     permission_classes = [AllowAny]
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status
from .models import Profissao
from .serializers import ProfissaoSerializer
from rest_framework.permissions import AllowAny

class ProfissaoViewSet(viewsets.ModelViewSet):
    queryset = Profissao.objects.all()
    serializer_class = ProfissaoSerializer
    permission_classes = [AllowAny]

    @action(detail=False, methods=["post"])
    def create_profissao(self, request):
        """Endpoint para criar uma nova profissão."""
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
