from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request): #carrega a página Inicial
    return render(request, 'imc_calc/index.html')
def calcular_imc(request):#carrega a página de calcular IMC
    return render(request, 'imc_calc/calcular_imc.html')