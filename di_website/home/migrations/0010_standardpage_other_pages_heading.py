# Generated by Django 2.2.3 on 2019-08-12 08:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0009_auto_20190812_0804'),
    ]

    operations = [
        migrations.AddField(
            model_name='standardpage',
            name='other_pages_heading',
            field=models.CharField(blank=True, default='More about', max_length=255, verbose_name='Heading'),
        ),
    ]
