# Generated by Django 2.2.16 on 2020-09-24 12:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('visualisation', '0028_auto_20200924_1153'),
    ]

    operations = [
        migrations.AddField(
            model_name='advancedchartpage',
            name='use_d3',
            field=models.BooleanField(blank=True, default=False, verbose_name='Use D3'),
        ),
    ]
