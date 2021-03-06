# Generated by Django 2.2.2 on 2019-11-07 17:07

from django.db import migrations
import wagtail.core.blocks
import wagtail.core.fields


class Migration(migrations.Migration):

    dependencies = [
        ('datasection', '0007_auto_20191107_1704'),
    ]

    operations = [
        migrations.AlterField(
            model_name='datasetpage',
            name='meta_data',
            field=wagtail.core.fields.StreamField([('description', wagtail.core.blocks.TextBlock(required=True)), ('provenance', wagtail.core.blocks.TextBlock(required=False)), ('variables', wagtail.core.blocks.TextBlock(required=False)), ('geography', wagtail.core.blocks.TextBlock(required=False)), ('geograpic_coding', wagtail.core.blocks.TextBlock(required=False)), ('unit', wagtail.core.blocks.TextBlock(required=False)), ('internal_notes', wagtail.core.blocks.TextBlock(required=False)), ('lead_analyst', wagtail.core.blocks.TextBlock(required=False)), ('licence', wagtail.core.blocks.TextBlock(required=False)), ('citation', wagtail.core.blocks.TextBlock(required=False))], help_text='A description is expected, but only one of each shall be shown', verbose_name='Content'),
        ),
        migrations.AlterField(
            model_name='figurepage',
            name='meta_data',
            field=wagtail.core.fields.StreamField([('description', wagtail.core.blocks.TextBlock(required=True)), ('provenance', wagtail.core.blocks.TextBlock(required=False)), ('variables', wagtail.core.blocks.TextBlock(required=False)), ('geography', wagtail.core.blocks.TextBlock(required=False)), ('geograpic_coding', wagtail.core.blocks.TextBlock(required=False)), ('unit', wagtail.core.blocks.TextBlock(required=False)), ('internal_notes', wagtail.core.blocks.TextBlock(required=False)), ('lead_analyst', wagtail.core.blocks.TextBlock(required=False)), ('licence', wagtail.core.blocks.TextBlock(required=False)), ('citation', wagtail.core.blocks.TextBlock(required=False))], help_text='A description is expected, but only one of each shall be shown', verbose_name='Content'),
        ),
    ]
