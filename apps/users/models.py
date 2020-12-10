from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _


class Group(models.Model):

    name = models.CharField(max_length=256, unique=True)
    course = models.PositiveSmallIntegerField()


class User(AbstractUser):

    username = None
    email = models.EmailField(_('email address'), unique=True)
    is_student = models.BooleanField('student status', default=False)
    is_teacher = models.BooleanField('teacher status', default=False)
    is_assistant = models.BooleanField('assistant status', default=True)
    group = models.ForeignKey(Group, on_delete=models.CASCADE, related_name='group', null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email
