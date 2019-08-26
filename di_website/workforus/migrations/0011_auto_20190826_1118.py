# Generated by Django 2.2.4 on 2019-08-26 11:18

from django.db import migrations, models
import wagtail.core.blocks
import wagtail.core.fields


class Migration(migrations.Migration):

    dependencies = [
        ('workforus', '0010_workforuspage_logos'),
    ]

    operations = [
        migrations.AddField(
            model_name='workforuspage',
            name='values',
            field=wagtail.core.fields.StreamField([('title', wagtail.core.blocks.CharBlock(classname='full title')), ('paragraph', wagtail.core.blocks.RichTextBlock(classname='full title'))], blank=True, null=True, verbose_name='Values'),
        ),
        migrations.AddField(
            model_name='workforuspage',
            name='values_text',
            field=models.TextField(blank=True, default='Values text', max_length=255, verbose_name='Short descriptve text for values section'),
        ),
    ]
