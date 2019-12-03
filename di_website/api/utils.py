from di_website.home.models import FooterSection, NewsLetter


def object_to_dict(obj, fields):
    """
    Takes in an object and an array of strings and returns a dictionary
    """
    result = {}
    for field in fields:
        result[field] = getattr(obj, field)

    return result


def serialise_page(page, request):
    """
    Returns a dictionary of the required fields from a Wagtail page (mostly for spotlights)
    """
    result = object_to_dict(page, ['title', 'full_url', 'active'])
    result['relative_url'] = page.relative_url(request.site, request)

    return result


def fetch_and_serialise_newsletters():
    """
    Returns a dictionary of newsletters
    """
    newsletters = NewsLetter.objects.all()
    result = []
    for letter in newsletters:
        result.append(object_to_dict(letter, ['caption', 'link_label', 'link_url']))

    return result


def fetch_and_serialise_footer_sections(request):
    """
    Returns the footer sections and their links
    """
    result = []
    footer_sections = FooterSection.objects.all()
    for footer_section in footer_sections:
        serialised_section = object_to_dict(footer_section, ['title', 'show_navigation_links'])
        section_links = footer_section.footer_section_links.all().order_by('sort_order')
        serialised_section['section_links'] = []
        for link in section_links:
            serialised_section_link = object_to_dict(link, ['label', 'link_url'])
            if link.page:
                serialised_section_link['page_url'] = link.page.full_url
            serialised_section['section_links'].append(serialised_section_link)

        social_links = footer_section.footer_social_links.all().order_by('sort_order')
        serialised_section['social_links'] = []
        for link in social_links:
            serialised_social_link = object_to_dict(link, ['social_platform', 'link_url'])
            serialised_social_link['image_url'] = 'svg/source/' + link.social_platform + '.svg'
            serialised_section['social_links'].append(serialised_social_link)

        result.append(serialised_section)

    return result