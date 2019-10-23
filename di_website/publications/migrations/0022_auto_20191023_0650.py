# Generated by Django 2.2.2 on 2019-10-23 06:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('publications', '0021_auto_20191009_1541'),
    ]

    operations = [
        migrations.AlterField(
            model_name='legacypublicationpage',
            name='hero_image_credit_name',
            field=models.TextField(blank=True, help_text='Name of source of image used in hero if any', null=True, verbose_name='Image credit name'),
        ),
        migrations.AlterField(
            model_name='publicationappendixpage',
            name='hero_image_credit_name',
            field=models.TextField(blank=True, help_text='Name of source of image used in hero if any', null=True, verbose_name='Image credit name'),
        ),
        migrations.AlterField(
            model_name='publicationchapterpage',
            name='hero_image_credit_name',
            field=models.TextField(blank=True, help_text='Name of source of image used in hero if any', null=True, verbose_name='Image credit name'),
        ),
        migrations.AlterField(
            model_name='publicationindexpage',
            name='hero_image_credit_name',
            field=models.TextField(blank=True, help_text='Name of source of image used in hero if any', null=True, verbose_name='Image credit name'),
        ),
        migrations.AlterField(
            model_name='publicationpage',
            name='hero_image_credit_name',
            field=models.TextField(blank=True, help_text='Name of source of image used in hero if any', null=True, verbose_name='Image credit name'),
        ),
        migrations.AlterField(
            model_name='publicationsummarypage',
            name='hero_image_credit_name',
            field=models.TextField(blank=True, help_text='Name of source of image used in hero if any', null=True, verbose_name='Image credit name'),
        ),
        migrations.AlterField(
            model_name='shortpublicationpage',
            name='hero_image_credit_name',
            field=models.TextField(blank=True, help_text='Name of source of image used in hero if any', null=True, verbose_name='Image credit name'),
        ),
    ]
