from django.db import models
from django.core.validators import validate_email

from wagtail.admin.edit_handlers import (
    FieldPanel,
    InlinePanel,
    MultiFieldPanel,
    StreamFieldPanel
)
from wagtail.core.fields import StreamField
from wagtail.snippets.models import register_snippet

from di_website.common.base import StandardPage
from di_website.common.blocks import BaseStreamBlock
from di_website.users.models import Department


@register_snippet
class OfficeLocation(models.Model):
    """
    Keeps things uniform; better than freetext
    """
    location = models.CharField(
        blank=False,
        max_length=100,
        help_text='e.g. Bristol, UK | Kampala, UG | Nairobi, KE'
    )

    class Meta():
        db_table = 'office_location'
        verbose_name = 'Office Location'
        verbose_name_plural = 'Office Locations'

    def __str__(self):
        return self.location


class VacanciesPage(StandardPage):
    """
    Shows a list of available vacancies
    """
    class Meta:
        db_table = 'vacancies_page'
        verbose_name = 'Vacancies Page'

    parent_page_types = ['home.HomePage']
    subpage_types = ['VacancyPage']

    def get_context(self, request):
        context = super().get_context(request)

        departments = Department.objects.all()
        context['vacancies'] = VacancyPage.objects.live()
        context['departments'] = departments

        email = {
            'id': 'email_address',
            'label': 'Email address',
            'placeholder': 'Your email address'
        }
        if request.method == 'POST':
            data = request.POST.copy()
            email_address = data.get('email_address', None)
            email['value'] = email_address
            try:
                if email_address:
                    validate_email(email_address)
                else:
                    email['field_error'] = 'This field is required'
            except validate_email.ValidationError:
                email['field_error'] = 'Invalid email'

            monitored_departments = []
            for department in departments:
                if data.get(department.slug, None) == 'on':
                    monitored_departments.append(department)

        context['form'] = {'email': email}

        return context


class VacancyPage(StandardPage):
    vacancy = models.ForeignKey(
        'users.JobTitle',
        null=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    duration = models.CharField(null=True, max_length=255)
    location = models.ForeignKey(
        OfficeLocation,
        null=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    salary_scale = models.CharField(blank=True, max_length=255)
    application_close_date = models.DateField(
        blank=True,
        null=True,
        auto_now=False,
        auto_now_add=False
    )
    first_interview_date = models.DateField(
        blank=True,
        null=True,
        auto_now=False,
        auto_now_add=False
    )
    job_start_date = models.DateField(
        blank=True,
        null=True,
        auto_now=False,
        auto_now_add=False
    )
    body = StreamField(
        BaseStreamBlock(),
        verbose_name="Page Body",
        blank=True
    )
    other_pages_heading = models.CharField(
        blank=True,
        max_length=255,
        verbose_name='Heading',
        default='Other pages in this section'
    )

    content_panels = StandardPage.content_panels + [
        MultiFieldPanel([
            FieldPanel('vacancy'),
            FieldPanel('duration'),
            FieldPanel('location'),
            FieldPanel('salary_scale')
        ], heading='Vacancy Info'),
        MultiFieldPanel([
            FieldPanel('application_close_date'),
            FieldPanel('first_interview_date'),
            FieldPanel('job_start_date')
        ], heading='Dates'),
        StreamFieldPanel('body'),
        MultiFieldPanel([
            FieldPanel('other_pages_heading'),
            InlinePanel('other_pages', label='Other Pages')
        ], heading='Other Pages')
    ]

    parent_page_types = [
        'VacanciesPage'
    ]

    class Meta():
        db_table = 'vacancy_page'
        verbose_name = 'Vacancy Page'
