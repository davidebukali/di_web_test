# Generated by Django 3.1 on 2020-10-14 11:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0032_auto_20200702_1244'),
    ]

    operations = [
        migrations.AddField(
            model_name='eventpage',
            name='timezone',
            field=models.CharField(blank=True, help_text='Timezone information for event', max_length=160, null=True),
        ),
    ]
