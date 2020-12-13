from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import Group
from .permissions import IsOwnerOrReadOnly, GroupPermission
from .serializers import GroupSerializer


class GroupList(generics.ListCreateAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [IsAuthenticated&GroupPermission]
