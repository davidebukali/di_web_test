# Generated by Django 3.1 on 2020-11-03 13:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0035_auto_20201103_1256'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='eventpage',
            name='end_time',
        ),
        migrations.RemoveField(
            model_name='eventpage',
            name='location',
        ),
        migrations.RemoveField(
            model_name='eventpage',
            name='start_time',
        ),
    ]
