# Generated by Django 2.2.13 on 2020-07-17 10:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('visualisation', '0019_auto_20200717_0953'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='chartpage',
            name='image_title',
        ),
        migrations.AddField(
            model_name='chartpage',
            name='image_caption',
            field=models.TextField(blank=True, help_text='Optional: appears in the image download at the bottom of the chart. If blank, the chart title is used instead', null=True),
        ),
    ]