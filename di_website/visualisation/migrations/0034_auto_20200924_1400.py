# Generated by Django 2.2.16 on 2020-09-24 14:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('visualisation', '0033_advancedchartpage_d3_version'),
    ]

    operations = [
        migrations.AlterField(
            model_name='advancedchartpage',
            name='d3_version',
            field=models.CharField(choices=[('v4', 'Version 4'), ('v5', 'Version 5'), ('v6', 'Version 6')], default='v4', max_length=50, verbose_name='D3 Version'),
        ),
    ]