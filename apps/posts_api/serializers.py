from rest_framework import serializers

from apps.posts.models import Post, Comment, Like


class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = (
            'id',
            'user',
            'pub_date',
            'content',
            'post',
        )


class LikeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Like
        fields = (
            'id',
            'user',
            'post',
        )


class PostSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True)
    class Meta:
        model = Post
        fields = (
            'id',
            'title',
            'content',
            'pub_date',
            'user',
            'likes',
            'comments',
        )
