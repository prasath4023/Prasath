from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.add_student, name='add_student'),
    path('read/', views.student_list, name='student_list'),
    path('edit/<int:pk>/', views.edit_student, name='edit_student'),
    path('delete/<int:pk>/', views.delete_student, name='delete_student'),
]
