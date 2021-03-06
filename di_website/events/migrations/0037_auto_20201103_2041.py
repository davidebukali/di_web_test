# Generated by Django 3.1 on 2020-11-03 20:41

from django.db import migrations


def set_time_field(apps, schema_editor):
    EventPage = apps.get_model('events', 'EventPage')
    for event in EventPage.objects.all():
        if event.start_time and event.end_time:
            event.time = '%s - %s' % (event.start_time.strftime("%H:%M"), event.end_time.strftime("%H:%M"))
        elif event.start_time:
            event.time = '%s' % (event.start_time.strftime("%H:%M"))
        elif event.end_time:
            event.time = '%s' % (event.end_time.strftime("%H:%M"))
        else:
            event.time = ''
        event.save()

def clear_time_field(apps, schema_editor):
    EventPage = apps.get_model('events', 'EventPage')
    for event in EventPage.objects.all():
        event.time = ''
        event.save()


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0036_eventpage_time'),
    ]

    operations = [
        migrations.RunPython(set_time_field, clear_time_field),
    ]
