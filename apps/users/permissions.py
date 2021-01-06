from rest_framework import permissions


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
        # Anyone can view comments
        if request.method in permissions.SAFE_METHODS:
            return True
        # Only a teacher or assistant can create a comment
        return request.user.is_teacher or request.user.is_assistant

    def has_object_permission(self, request, view, obj):
        # To modify a comment, user must be the owner,
        # but teachers can delete them.
        if request.method in ['DELETE']:
            return request.user.is_teacher
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
        # Only the owner of a post can modify or delete it
        if request.method in ['DELETE', 'PUT']:
            return request.user == obj.user

        return True


class GroupPermission(permissions.BasePermission):

    def has_permission(self, request, view):
        # Only a teacher can create or view groups
        return request.user.is_teacher

    def has_object_permission(self, request, view, obj):
        # Only a teacher can modify or delete groups
        return request.user.is_teacher
