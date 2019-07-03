# Generated by Django 2.2.2 on 2019-07-03 16:50

from django.db import migrations, models
import django.db.models.deletion
import wagtail.core.fields


class Migration(migrations.Migration):

    dependencies = [
        ('wagtailimages', '0001_squashed_0021'),
        ('wagtailcore', '0041_group_collection_permissions_verbose_name_plural'),
        ('ourteam', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='ourteam',
            name='hero_image',
            field=models.ForeignKey(blank=True, help_text='Hero Image', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image'),
        ),
        migrations.AddField(
            model_name='ourteam',
            name='hero_image_credit_name',
            field=models.CharField(blank=True, help_text='Name of source of image used in hero if any', max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='ourteam',
            name='hero_image_credit_url',
            field=models.URLField(blank=True, help_text='A Link to the original source of the image if any', null=True),
        ),
        migrations.AddField(
            model_name='ourteam',
            name='hero_link',
            field=models.ForeignKey(blank=True, help_text='Choose a page to link to for the Call to Action', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailcore.Page', verbose_name='Hero link'),
        ),
        migrations.AddField(
            model_name='ourteam',
            name='hero_link_caption',
            field=models.CharField(blank=True, help_text='Text to display on the link button', max_length=255),
        ),
        migrations.AddField(
            model_name='ourteam',
            name='hero_text',
            field=wagtail.core.fields.RichTextField(blank=True, help_text='A description of the page content', null=True),
        ),
    ]
