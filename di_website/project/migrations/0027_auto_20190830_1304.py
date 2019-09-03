# Generated by Django 2.2.3 on 2019-08-30 13:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0026_delete_focusareaspagerelatedlink'),
    ]

    operations = [
        migrations.AlterField(
            model_name='focusareaspagelink',
            name='image',
            field=models.ForeignKey(blank=True, help_text='Add an image to this focus area', null=True, on_delete=django.db.models.deletion.SET_NULL, to='wagtailimages.Image', verbose_name='Image'),
        ),
    ]
