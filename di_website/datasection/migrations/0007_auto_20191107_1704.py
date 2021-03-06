# Generated by Django 2.2.2 on 2019-11-07 17:04

from django.db import migrations, models
import wagtail.core.blocks
import wagtail.core.fields


class Migration(migrations.Migration):

    dependencies = [
        ('datasection', '0006_auto_20191107_1429'),
    ]

    operations = [
        migrations.AddField(
            model_name='datasetpage',
            name='csv_link',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='datasetpage',
            name='dataset_id',
            field=models.CharField(blank=True, max_length=255, null=True, unique=True),
        ),
        migrations.AddField(
            model_name='datasetpage',
            name='dataset_title',
            field=models.TextField(blank=True, null=True, unique=True),
        ),
        migrations.AddField(
            model_name='datasetpage',
            name='xlsx_link',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='figurepage',
            name='csv_link',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='figurepage',
            name='dataset_id',
            field=models.CharField(blank=True, max_length=255, null=True, unique=True),
        ),
        migrations.AddField(
            model_name='figurepage',
            name='dataset_title',
            field=models.TextField(blank=True, null=True, unique=True),
        ),
        migrations.AddField(
            model_name='figurepage',
            name='xlsx_link',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='datasetpage',
            name='meta_data',
            field=wagtail.core.fields.StreamField([('description', wagtail.core.blocks.TextBlock(required=True)), ('provenance', wagtail.core.blocks.TextBlock()), ('variables', wagtail.core.blocks.TextBlock()), ('geography', wagtail.core.blocks.TextBlock()), ('geograpic_coding', wagtail.core.blocks.TextBlock()), ('unit', wagtail.core.blocks.TextBlock()), ('internal_notes', wagtail.core.blocks.TextBlock()), ('lead_analyst', wagtail.core.blocks.TextBlock()), ('licence', wagtail.core.blocks.TextBlock()), ('citation', wagtail.core.blocks.TextBlock())], help_text='A description is expected, but only one of each shall be shown', verbose_name='Content'),
        ),
        migrations.AlterField(
            model_name='figurepage',
            name='meta_data',
            field=wagtail.core.fields.StreamField([('description', wagtail.core.blocks.TextBlock(required=True)), ('provenance', wagtail.core.blocks.TextBlock()), ('variables', wagtail.core.blocks.TextBlock()), ('geography', wagtail.core.blocks.TextBlock()), ('geograpic_coding', wagtail.core.blocks.TextBlock()), ('unit', wagtail.core.blocks.TextBlock()), ('internal_notes', wagtail.core.blocks.TextBlock()), ('lead_analyst', wagtail.core.blocks.TextBlock()), ('licence', wagtail.core.blocks.TextBlock()), ('citation', wagtail.core.blocks.TextBlock())], help_text='A description is expected, but only one of each shall be shown', verbose_name='Content'),
        ),
    ]
