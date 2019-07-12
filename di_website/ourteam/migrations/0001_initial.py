# Generated by Django 2.2.2 on 2019-07-12 18:36

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import wagtail.core.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0003_delete_userprofile'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('wagtailimages', '0001_squashed_0021'),
        ('wagtailcore', '0041_group_collection_permissions_verbose_name_plural'),
    ]

    operations = [
        migrations.CreateModel(
            name='TeamMemberPage',
            fields=[
                ('page_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='wagtailcore.Page')),
                ('name', models.CharField(blank=True, max_length=255, null=True)),
                ('email', models.EmailField(blank=True, max_length=254, null=True)),
                ('telephone', models.CharField(blank=True, max_length=255, null=True)),
                ('department', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='users.Department')),
                ('image', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image')),
                ('position', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='users.JobTitle')),
                ('user', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Team Member Page',
            },
            bases=('wagtailcore.page',),
        ),
        migrations.CreateModel(
            name='OurTeamPage',
            fields=[
                ('page_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='wagtailcore.Page')),
                ('hero_title', models.CharField(blank=True, help_text='Leave blank if you want it to match the page title', max_length=255)),
                ('hero_image_credit_name', models.CharField(blank=True, help_text='Name of source of image used in hero if any', max_length=50, null=True, verbose_name='Image credit name')),
                ('hero_image_credit_url', models.URLField(blank=True, help_text='A Link to the original source of the image if any', null=True, verbose_name='Image credit url')),
                ('hero_text', wagtail.core.fields.RichTextField(blank=True, help_text='A description of the page content', null=True)),
                ('hero_link_caption', models.CharField(blank=True, help_text='Text to display on the link button', max_length=255)),
                ('hero_image', models.ForeignKey(blank=True, help_text='Hero Image', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image')),
                ('hero_link', models.ForeignKey(blank=True, help_text='Choose a page to link to for the Call to Action', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailcore.Page', verbose_name='Hero link')),
            ],
            options={
                'verbose_name': 'Our Team Page',
            },
            bases=('wagtailcore.page',),
        ),
    ]
