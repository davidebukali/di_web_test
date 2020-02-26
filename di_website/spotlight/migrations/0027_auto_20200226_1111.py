# Generated by Django 2.2.6 on 2020-02-26 11:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('spotlight', '0026_auto_20200224_1725'),
    ]

    operations = [
        migrations.AlterField(
            model_name='spotlightindicator',
            name='content_template',
            field=models.TextField(blank=True, default='', help_text='JSON config of the indicator content. A bit complex - talk to Edwin', null=True),
        ),
        migrations.AlterField(
            model_name='spotlightindicator',
            name='data_format',
            field=models.TextField(choices=[('percent', 'Percentage'), ('plain', 'Plain'), ('currency', 'Currency')], default='plain', help_text='Options are plain, currency, percent', max_length=100),
        ),
    ]
