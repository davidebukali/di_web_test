# Generated by Django 2.2.2 on 2019-09-20 15:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('publications', '0006_auto_20190920_1500'),
    ]

    operations = [
        migrations.AlterField(
            model_name='publicationpage',
            name='download_report_body',
            field=models.TextField(blank=True, null=True),
        ),
    ]
