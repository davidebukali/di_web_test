# Generated by Django 2.2.4 on 2020-06-18 12:04

from django.db import migrations, models
import django.db.models.deletion
import modelcluster.fields


class Migration(migrations.Migration):

    dependencies = [
        ('wagtailcore', '0041_group_collection_permissions_verbose_name_plural'),
        ('publications', '0057_auto_20200618_1027'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='publicationforewordpage',
            name='highlight_image',
        ),
        migrations.CreateModel(
            name='PublicationForewordPageDataset',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sort_order', models.IntegerField(blank=True, editable=False, null=True)),
                ('dataset', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='+', to='wagtailcore.Page')),
                ('item', modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='publication_datasets', to='publications.PublicationForewordPage')),
            ],
            options={
                'ordering': ['sort_order'],
                'abstract': False,
            },
        ),
    ]
