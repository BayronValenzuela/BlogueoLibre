from rest_framework import permissions

#Comments
class IsOwnerOrReadOnly(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True
        # Return if the user is the owner.
        return obj.user == request.user


class CommentPermission(permissions.BasePermission):

    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user.is_teacher or request.user.is_assistant

    def has_object_permission(self, request, view, obj):
        # To modify a comment, user must be the owner.
        return obj.user == request.user


class PostPermission(permissions.BasePermission):

    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True

        return request.user.is_student

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True

        # To modify a post, user must be the owner or
        # part of the group that created the post.
        return (obj.user == request.user) or (request.user.group == obj.user.group)


class LikePermission(permissions.BasePermission):

    def has_permission(self, request, view):
        return True

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in ['DELETE', 'PUT']:
            return request.user == obj.user

        return True


class GroupPermission(permissions.BasePermission):

    def has_permission(self, request, view):
        # Solo un profesor/asistente puede crear o ver.
        return request.user.is_assistant or request.user.is_teacher

    def has_object_permission(self, request, view, obj):
        # Solo un profesor/asistente puede modificar.
        return request.user.is_assistant or request.user.is_teacher
