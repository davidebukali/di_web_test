# Generated by Django 2.2.16 on 2020-09-23 15:22

import di_website.visualisation.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('visualisation', '0024_auto_20200923_1503'),
    ]

    operations = [
        migrations.AddField(
            model_name='advancedchartpage',
            name='css',
            field=di_website.visualisation.fields.AceEditorField(blank=True),
        ),
        migrations.AddField(
            model_name='advancedchartpage',
            name='html',
            field=di_website.visualisation.fields.AceEditorField(blank=True),
        ),
        migrations.AlterField(
            model_name='advancedchartpage',
            name='javascript',
            field=di_website.visualisation.fields.AceEditorField(blank=True),
        ),
    ]