# Generated by Django 2.2.16 on 2020-09-24 11:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('visualisation', '0026_auto_20200924_1131'),
    ]

    operations = [
        migrations.AddField(
            model_name='advancedchartpage',
            name='plotly_bundle',
            field=models.CharField(blank=True, choices=[('basic', 'Basic'), ('cartesian', 'Cartesian')], help_text='https://github.com/plotly/plotly.js/blob/master/dist/README.md#partial-bundles', max_length=100),
        ),
        migrations.AddField(
            model_name='advancedchartpage',
            name='use_plotly',
            field=models.BooleanField(blank=True, default=False),
        ),
    ]
