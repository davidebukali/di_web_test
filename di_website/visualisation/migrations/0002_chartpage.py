# Generated by Django 3.0.7 on 2020-06-11 12:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('wagtailcore', '0045_assign_unlock_grouppagepermission'),
        ('visualisation', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ChartPage',
            fields=[
                ('page_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='wagtailcore.Page')),
            ],
            options={
                'verbose_name': 'Chart Page',
            },
            bases=('wagtailcore.page',),
        ),
    ]