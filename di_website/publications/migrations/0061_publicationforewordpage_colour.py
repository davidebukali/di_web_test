# Generated by Django 2.2.13 on 2020-06-26 04:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('publications', '0060_auto_20200625_1242'),
    ]

    operations = [
        migrations.AddField(
            model_name='publicationforewordpage',
            name='colour',
            field=models.CharField(choices=[('poppy', 'Red'), ('bluebell', 'Blue'), ('rose', 'Pink'), ('sunflower', 'Yellow'), ('marigold', 'Orange'), ('lavendar', 'Purple'), ('leaf', 'Green')], default='poppy', max_length=256),
        ),
    ]
