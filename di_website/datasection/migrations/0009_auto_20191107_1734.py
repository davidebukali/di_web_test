# Generated by Django 2.2.2 on 2019-11-07 17:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('datasection', '0008_auto_20191107_1707'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='datasetpage',
            name='csv_link',
        ),
        migrations.RemoveField(
            model_name='datasetpage',
            name='xlsx_link',
        ),
        migrations.RemoveField(
            model_name='figurepage',
            name='csv_link',
        ),
        migrations.RemoveField(
            model_name='figurepage',
            name='dataset_id',
        ),
        migrations.RemoveField(
            model_name='figurepage',
            name='dataset_title',
        ),
        migrations.RemoveField(
            model_name='figurepage',
            name='xlsx_link',
        ),
        migrations.AddField(
            model_name='figurepage',
            name='figure_id',
            field=models.CharField(blank=True, max_length=255, null=True, unique=True),
        ),
        migrations.AddField(
            model_name='figurepage',
            name='figure_title',
            field=models.TextField(blank=True, help_text='Descriptive title of the chart', null=True),
        ),
        migrations.AddField(
            model_name='figurepage',
            name='publication_name',
            field=models.TextField(blank=True, help_text='Imported publication name', verbose_name='Name'),
        ),
        migrations.AlterField(
            model_name='figurepage',
            name='name',
            field=models.TextField(blank=True, help_text='The name of this figure in the publication e.g Figure 1.1', verbose_name='Name'),
        ),
    ]
