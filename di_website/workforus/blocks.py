from wagtail.core.blocks import (
    PageChooserBlock,
    RichTextBlock,
    StreamBlock,
    StructBlock,
    TextBlock
)
from wagtail.images.blocks import ImageChooserBlock

from di_website.common.constants import RICHTEXT_FEATURES
from di_website.common.blocks import LinkBlock


class BenefitsBlock(StructBlock):
    title = TextBlock()
    body = RichTextBlock(required=False)
    image = ImageChooserBlock(required=False)

    class Meta():
        icon = 'fa-heart'
        template = 'includes/partials/project.html'

class BenefitsStreamBlock(StreamBlock):
    body = RichTextBlock(required=False)
    place = BenefitsBlock()
    required = False
