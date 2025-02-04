from django.db import models

class Student(models.Model):
    roll_number = models.CharField(max_length=10)
    name = models.CharField(max_length=100)
    age = models.PositiveIntegerField()
    degree = models.CharField(max_length=50)
    passed_out_year = models.CharField(max_length=4)
    emailid = models.EmailField(unique=True)
    mobile = models.CharField(max_length=10)

    def __str__(self):
        return self.name
