# Generated by Django 2.2.4 on 2019-11-21 09:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('wagtailcore', '0041_group_collection_permissions_verbose_name_plural'),
        ('wagtailimages', '0001_squashed_0021'),
        ('datasection', '0022_merge_20191120_1518'),
    ]

    operations = [
        migrations.AddField(
            model_name='datasetlisting',
            name='hero_image',
            field=models.ForeignKey(blank=True, help_text='Hero Image', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image'),
        ),
        migrations.AddField(
            model_name='datasetlisting',
            name='hero_image_credit_name',
            field=models.TextField(blank=True, help_text='Name of source of image used in hero if any', null=True, verbose_name='Image credit name'),
        ),
        migrations.AddField(
            model_name='datasetlisting',
            name='hero_image_credit_url',
            field=models.URLField(blank=True, help_text='A Link to the original source of the image if any', null=True, verbose_name='Image credit url'),
        ),
        migrations.AddField(
            model_name='datasetlisting',
            name='hero_link',
            field=models.ForeignKey(blank=True, help_text='Choose a page to link to for the Call to Action', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailcore.Page', verbose_name='Hero link'),
        ),
        migrations.AddField(
            model_name='datasetlisting',
            name='hero_link_caption',
            field=models.CharField(blank=True, help_text='Text to display on the link button', max_length=255),
        ),
        migrations.AddField(
            model_name='datasetlisting',
            name='search_image',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image', verbose_name='Search image'),
        ),
    ]
