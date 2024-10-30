from django.urls import path
from .views import index, calcular_imc

urlpatterns = [
    path('inicio', index, name='inicio'),
    path('calcular_imc',calcular_imc, name='calcular_imc')
]