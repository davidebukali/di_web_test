# Generated by Django 2.2.2 on 2019-08-12 18:29

from django.db import migrations
import wagtail.core.blocks
import wagtail.core.fields
import wagtail.documents.blocks
import wagtail.images.blocks


class Migration(migrations.Migration):

    dependencies = [
        ('ourstory', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ourstorypage',
            name='timeline_items',
            field=wagtail.core.fields.StreamField([('items', wagtail.core.blocks.StructBlock([('month', wagtail.core.blocks.CharBlock(help_text='Month abbreviation E.g. Apr', required=False)), ('year', wagtail.core.blocks.CharBlock(help_text='Year E.g. 2008', required=False)), ('title', wagtail.core.blocks.CharBlock(required=False)), ('image', wagtail.images.blocks.ImageChooserBlock(required=False)), ('text', wagtail.core.blocks.RichTextBlock(required=False)), ('documents', wagtail.core.blocks.StructBlock([('document_box_heading', wagtail.core.blocks.CharBlock(icon='title', required=False)), ('documents', wagtail.core.blocks.StreamBlock([('document', wagtail.documents.blocks.DocumentChooserBlock())], required=False)), ('dark_mode', wagtail.core.blocks.BooleanBlock(default=False, help_text='Red on white if true. White on dark grey if false.', required=False))], required=False))]))]),
        ),
    ]
