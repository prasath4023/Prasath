# Generated by Django 5.1.5 on 2025-02-04 11:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student', '0003_rename_students_student'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='degree',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='student',
            name='passed_out_year',
            field=models.CharField(max_length=4),
        ),
        migrations.AlterField(
            model_name='student',
            name='roll_number',
            field=models.CharField(max_length=10),
        ),
    ]
