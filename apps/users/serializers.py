from rest_framework import serializers

from .models import User, Group


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = (
            'id',
            'email',
            'is_student',
            'is_teacher',
            'is_assistant',
            'group',
        )


class GroupSerializer(serializers.ModelSerializer):

    users = UserSerializer(many=True, read_only=True)
    
    class Meta:
        model = Group
        fields = (
            'id',
            'name',
            'course',
            'users',
        )
