# Generated by Django 2.2.16 on 2020-10-14 16:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('visualisation', '0037_advancedchartpage_use_echarts'),
    ]

    operations = [
        migrations.AddField(
            model_name='advancedchartpage',
            name='subtitle',
            field=models.TextField(blank=True, help_text='Optional: subtitle to appear underneath the chart title.', null=True),
        ),
        migrations.AddField(
            model_name='chartpage',
            name='subtitle',
            field=models.TextField(blank=True, help_text='Optional: subtitle to appear underneath the chart title.', null=True),
        ),
    ]