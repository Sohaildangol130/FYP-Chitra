from django.shortcuts import render, redirect
from .models import all_posts

# Create your views here.
def view_post(request, id):
    post = all_posts.objects.filter(id=id)
    return render (request, 'view_post.html', {'post': post})

def upload_post(request):
    if request.method == 'POST' and request.FILES['image']:
        post_name = request.POST['post_name']
        description = request.POST['description']
        image = request.FILES['image']
        price = request.POST['price']
        if request.user.is_authenticated:
            user = request.user
            post = all_posts(post_name=post_name, description=description, image=image, user=user, price=price)
            post.save()
            return redirect('/')
        
    else:
        return render(request, 'upload_post.html')