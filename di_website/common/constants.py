SIMPLE_RICHTEXT_FEATURES = [
    'bold',
    'italic',
    'ol',
    'ul',
    'link'
]
RICHTEXT_FEATURES = [
    'h2',
    'h3',
    'h4',
    'bold',
    'italic',
    'ol',
    'ul',
    'link',
    'document',
    'image',
    'embed',
    'anchor'
]
MAX_RELATED_LINKS = 3
MAX_OTHER_PAGES = 4
MAX_PAGE_SIZE = 9

RICHTEXT_FEATURES_NO_FOOTNOTES = RICHTEXT_FEATURES.copy()
RICHTEXT_FEATURES_NO_FOOTNOTES.remove('anchor')

FOOTNOTE_RICHTEXT_FEATURES = [
    'footnote',
]
