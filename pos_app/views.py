from django.shortcuts import render
from .models import Product

def pos_home(request):
    products = Product.objects.all()
    return render(request, 'pos_app/pos_home.html', {'products': products})
