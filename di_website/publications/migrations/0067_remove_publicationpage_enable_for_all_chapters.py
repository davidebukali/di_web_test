# Generated by Django 2.2.13 on 2020-07-16 06:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('publications', '0066_publicationpage_enable_for_all_chapters'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='publicationpage',
            name='enable_for_all_chapters',
        ),
    ]