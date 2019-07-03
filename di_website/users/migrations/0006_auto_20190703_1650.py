# Generated by Django 2.2.2 on 2019-07-03 16:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_department_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='department',
            name='slug',
            field=models.SlugField(blank=True, help_text='Optional. Will be auto-generated from name if left blank.', max_length=255, null=True),
        ),
    ]
