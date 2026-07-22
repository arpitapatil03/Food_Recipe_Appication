from rest_framework import generics
from django.db.models import Q

from .models import Recipe
from .serializers import RecipeSerializer


class RecipeList(generics.ListAPIView):

    serializer_class = RecipeSerializer

    def get_queryset(self):

        queryset = Recipe.objects.all()

        search = self.request.GET.get("search")

        if search:
            queryset = queryset.filter(
                Q(name__icontains=search) |
                Q(ingredients__icontains=search)
            )

        return queryset


class RecipeDetail(generics.RetrieveAPIView):

    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer