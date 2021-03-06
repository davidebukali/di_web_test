# Generated by Django 2.2.3 on 2019-10-30 11:58

import datetime
from django.db import migrations, models
import django.db.models.deletion
import modelcluster.contrib.taggit
import modelcluster.fields
import wagtail.core.blocks
import wagtail.core.fields
import wagtail.documents.blocks
import wagtail.embeds.blocks
import wagtail.images.blocks


class Migration(migrations.Migration):

    dependencies = [
        ('wagtaildocs', '0010_document_file_hash'),
        ('wagtailcore', '0041_group_collection_permissions_verbose_name_plural'),
        ('wagtailimages', '0001_squashed_0021'),
        ('taggit', '0002_auto_20150616_2121'),
        ('datasection', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='DataSetListing',
            fields=[
                ('page_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='wagtailcore.Page')),
                ('body', wagtail.core.fields.StreamField([('paragraph_block', wagtail.core.blocks.RichTextBlock(features=['h2', 'h3', 'h4', 'bold', 'italic', 'ol', 'ul', 'hr', 'link', 'document-link', 'image', 'embed', 'anchor'], icon='fa-paragraph', template='blocks/paragraph_block.html')), ('block_quote', wagtail.core.blocks.StructBlock([('text', wagtail.core.blocks.TextBlock()), ('source', wagtail.core.blocks.TextBlock(help_text='Who is this quote acredited to?', required=False))])), ('button_block', wagtail.core.blocks.StructBlock([('caption', wagtail.core.blocks.CharBlock(help_text='Leave blank if you wish to use the page title as a caption', required=False)), ('page', wagtail.core.blocks.PageChooserBlock(help_text='For the link/button to show, either this or the url are required', required=False)), ('url', wagtail.core.blocks.URLBlock(help_text='An alternative to an internal page', required=False))])), ('link_block', wagtail.core.blocks.StructBlock([('caption', wagtail.core.blocks.CharBlock(help_text='Leave blank if you wish to use the page title as a caption', required=False)), ('page', wagtail.core.blocks.PageChooserBlock(help_text='For the link/button to show, either this or the url are required', required=False)), ('url', wagtail.core.blocks.URLBlock(help_text='An alternative to an internal page', required=False))])), ('image', wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock(required=True)), ('credit_name', wagtail.core.blocks.CharBlock(help_text='Name of the image source', required=False)), ('credit_url', wagtail.core.blocks.URLBlock(help_text='URL of the image source', required=False))])), ('video', wagtail.embeds.blocks.EmbedBlock(help_text='Insert an embed URL e.g https://www.youtube.com/embed/SGJFWirQ3ks', icon='fa-video-camera', required=False, template='blocks/embed_block.html'))], blank=True, null=True, verbose_name='Page Body')),
                ('hero_text', wagtail.core.fields.RichTextField(blank=True, help_text='A description of the page content', null=True)),
                ('other_pages_heading', models.CharField(blank=True, default='More about', max_length=255, verbose_name='Heading')),
            ],
            options={
                'verbose_name': 'DataSet Listing',
            },
            bases=('wagtailcore.page', models.Model),
        ),
        migrations.CreateModel(
            name='DatasetPage',
            fields=[
                ('page_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='wagtailcore.Page')),
                ('hero_image_credit_name', models.TextField(blank=True, help_text='Name of source of image used in hero if any', null=True, verbose_name='Image credit name')),
                ('hero_image_credit_url', models.URLField(blank=True, help_text='A Link to the original source of the image if any', null=True, verbose_name='Image credit url')),
                ('hero_text', wagtail.core.fields.RichTextField(blank=True, help_text='A description of the page content', null=True)),
                ('hero_link_caption', models.CharField(blank=True, help_text='Text to display on the link button', max_length=255)),
                ('body', wagtail.core.fields.StreamField([('paragraph_block', wagtail.core.blocks.RichTextBlock(features=['h2', 'h3', 'h4', 'bold', 'italic', 'ol', 'ul', 'hr', 'link', 'document-link', 'image', 'embed', 'anchor'], icon='fa-paragraph', template='blocks/paragraph_block.html')), ('block_quote', wagtail.core.blocks.StructBlock([('text', wagtail.core.blocks.TextBlock()), ('source', wagtail.core.blocks.TextBlock(help_text='Who is this quote acredited to?', required=False))])), ('button_block', wagtail.core.blocks.StructBlock([('caption', wagtail.core.blocks.CharBlock(help_text='Leave blank if you wish to use the page title as a caption', required=False)), ('page', wagtail.core.blocks.PageChooserBlock(help_text='For the link/button to show, either this or the url are required', required=False)), ('url', wagtail.core.blocks.URLBlock(help_text='An alternative to an internal page', required=False))])), ('link_block', wagtail.core.blocks.StructBlock([('caption', wagtail.core.blocks.CharBlock(help_text='Leave blank if you wish to use the page title as a caption', required=False)), ('page', wagtail.core.blocks.PageChooserBlock(help_text='For the link/button to show, either this or the url are required', required=False)), ('url', wagtail.core.blocks.URLBlock(help_text='An alternative to an internal page', required=False))])), ('image', wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock(required=True)), ('credit_name', wagtail.core.blocks.CharBlock(help_text='Name of the image source', required=False)), ('credit_url', wagtail.core.blocks.URLBlock(help_text='URL of the image source', required=False))])), ('video', wagtail.embeds.blocks.EmbedBlock(help_text='Insert an embed URL e.g https://www.youtube.com/embed/SGJFWirQ3ks', icon='fa-video-camera', required=False, template='blocks/embed_block.html'))], blank=True, null=True, verbose_name='Page Body')),
                ('release_date', models.DateField(default=datetime.datetime.now)),
                ('authors', wagtail.core.fields.StreamField([('internal_author', wagtail.core.blocks.PageChooserBlock(icon='fa-user', page_type=['ourteam.TeamMemberPage'], required=False)), ('external_author', wagtail.core.blocks.StructBlock([('name', wagtail.core.blocks.CharBlock(required=False)), ('title', wagtail.core.blocks.CharBlock(required=False)), ('photograph', wagtail.images.blocks.ImageChooserBlock(required=False)), ('page', wagtail.core.blocks.URLBlock(required=False))], icon='fa-user'))], blank=True)),
                ('meta_data', wagtail.core.fields.StreamField([('description', wagtail.core.blocks.RichTextBlock(required=True)), ('provenance', wagtail.core.blocks.RichTextBlock()), ('variables', wagtail.core.blocks.RichTextBlock()), ('geography', wagtail.core.blocks.RichTextBlock()), ('licence', wagtail.core.blocks.RichTextBlock()), ('citation', wagtail.core.blocks.RichTextBlock())], help_text='A description is expected, but only one of each shall be shown', verbose_name='Content')),
                ('other_pages_heading', models.CharField(blank=True, default='More about', max_length=255, verbose_name='Heading')),
                ('related_datasets_title', models.CharField(blank=True, default='Related datasets', max_length=255, verbose_name='Section Title')),
                ('hero_image', models.ForeignKey(blank=True, help_text='Hero Image', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image')),
                ('hero_link', models.ForeignKey(blank=True, help_text='Choose a page to link to for the Call to Action', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailcore.Page', verbose_name='Hero link')),
            ],
            options={
                'verbose_name': 'Data Set Page',
            },
            bases=('wagtailcore.page', models.Model),
        ),
        migrations.CreateModel(
            name='DataSource',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, unique=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('organisation', models.CharField(blank=True, max_length=255)),
                ('link_to_metadata', models.URLField(blank=True)),
                ('geography', models.CharField(blank=True, max_length=255)),
                ('link_to_data', models.URLField(blank=True)),
                ('slug', models.SlugField(blank=True, help_text='Optional. Will be auto-generated from title if left blank.', max_length=255, null=True)),
            ],
            options={
                'verbose_name': 'Data Source',
                'verbose_name_plural': 'Data Sources',
                'ordering': ['title'],
            },
        ),
        migrations.CreateModel(
            name='FigurePage',
            fields=[
                ('page_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='wagtailcore.Page')),
                ('hero_image_credit_name', models.TextField(blank=True, help_text='Name of source of image used in hero if any', null=True, verbose_name='Image credit name')),
                ('hero_image_credit_url', models.URLField(blank=True, help_text='A Link to the original source of the image if any', null=True, verbose_name='Image credit url')),
                ('hero_text', wagtail.core.fields.RichTextField(blank=True, help_text='A description of the page content', null=True)),
                ('hero_link_caption', models.CharField(blank=True, help_text='Text to display on the link button', max_length=255)),
                ('body', wagtail.core.fields.StreamField([('paragraph_block', wagtail.core.blocks.RichTextBlock(features=['h2', 'h3', 'h4', 'bold', 'italic', 'ol', 'ul', 'hr', 'link', 'document-link', 'image', 'embed', 'anchor'], icon='fa-paragraph', template='blocks/paragraph_block.html')), ('block_quote', wagtail.core.blocks.StructBlock([('text', wagtail.core.blocks.TextBlock()), ('source', wagtail.core.blocks.TextBlock(help_text='Who is this quote acredited to?', required=False))])), ('button_block', wagtail.core.blocks.StructBlock([('caption', wagtail.core.blocks.CharBlock(help_text='Leave blank if you wish to use the page title as a caption', required=False)), ('page', wagtail.core.blocks.PageChooserBlock(help_text='For the link/button to show, either this or the url are required', required=False)), ('url', wagtail.core.blocks.URLBlock(help_text='An alternative to an internal page', required=False))])), ('link_block', wagtail.core.blocks.StructBlock([('caption', wagtail.core.blocks.CharBlock(help_text='Leave blank if you wish to use the page title as a caption', required=False)), ('page', wagtail.core.blocks.PageChooserBlock(help_text='For the link/button to show, either this or the url are required', required=False)), ('url', wagtail.core.blocks.URLBlock(help_text='An alternative to an internal page', required=False))])), ('image', wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock(required=True)), ('credit_name', wagtail.core.blocks.CharBlock(help_text='Name of the image source', required=False)), ('credit_url', wagtail.core.blocks.URLBlock(help_text='URL of the image source', required=False))])), ('video', wagtail.embeds.blocks.EmbedBlock(help_text='Insert an embed URL e.g https://www.youtube.com/embed/SGJFWirQ3ks', icon='fa-video-camera', required=False, template='blocks/embed_block.html'))], blank=True, null=True, verbose_name='Page Body')),
                ('release_date', models.DateField(default=datetime.datetime.now)),
                ('authors', wagtail.core.fields.StreamField([('internal_author', wagtail.core.blocks.PageChooserBlock(icon='fa-user', page_type=['ourteam.TeamMemberPage'], required=False)), ('external_author', wagtail.core.blocks.StructBlock([('name', wagtail.core.blocks.CharBlock(required=False)), ('title', wagtail.core.blocks.CharBlock(required=False)), ('photograph', wagtail.images.blocks.ImageChooserBlock(required=False)), ('page', wagtail.core.blocks.URLBlock(required=False))], icon='fa-user'))], blank=True)),
                ('meta_data', wagtail.core.fields.StreamField([('description', wagtail.core.blocks.RichTextBlock(required=True)), ('provenance', wagtail.core.blocks.RichTextBlock()), ('variables', wagtail.core.blocks.RichTextBlock()), ('geography', wagtail.core.blocks.RichTextBlock()), ('licence', wagtail.core.blocks.RichTextBlock()), ('citation', wagtail.core.blocks.RichTextBlock())], help_text='A description is expected, but only one of each shall be shown', verbose_name='Content')),
                ('other_pages_heading', models.CharField(blank=True, default='More about', max_length=255, verbose_name='Heading')),
                ('name', models.CharField(blank=True, help_text='The name of this figure in the publication e.g Figure 1.1', max_length=255, verbose_name='Name')),
                ('related_figures_title', models.CharField(blank=True, default='Related figures', max_length=255, verbose_name='Section Title')),
                ('hero_image', models.ForeignKey(blank=True, help_text='Hero Image', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image')),
                ('hero_link', models.ForeignKey(blank=True, help_text='Choose a page to link to for the Call to Action', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailcore.Page', verbose_name='Hero link')),
                ('publication', models.ForeignKey(blank=True, help_text='The publication in which this figure appears', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailcore.Page')),
            ],
            options={
                'verbose_name': 'Figure Page',
            },
            bases=('wagtailcore.page', models.Model),
        ),
        migrations.AddField(
            model_name='datasectionpage',
            name='dataset_info',
            field=models.TextField(default='', help_text='A description of the datasets'),
        ),
        migrations.AddField(
            model_name='datasectionpage',
            name='other_pages_heading',
            field=models.CharField(blank=True, default='More about', max_length=255, verbose_name='Heading'),
        ),
        migrations.AddField(
            model_name='datasectionpage',
            name='quotes',
            field=wagtail.core.fields.StreamField([('team_member', wagtail.core.blocks.StructBlock([('quote_text', wagtail.core.blocks.TextBlock()), ('team_member', wagtail.core.blocks.PageChooserBlock(page_type=['ourteam.TeamMemberPage'], required=False))])), ('external_member', wagtail.core.blocks.StructBlock([('quote_text', wagtail.core.blocks.TextBlock()), ('name', wagtail.core.blocks.TextBlock()), ('role', wagtail.core.blocks.TextBlock()), ('organisation', wagtail.core.blocks.TextBlock()), ('external_member_photo', wagtail.images.blocks.ImageChooserBlock(required=False))]))], blank=True, null=True, verbose_name='Quotes'),
        ),
        migrations.AddField(
            model_name='datasectionpage',
            name='sections',
            field=wagtail.core.fields.StreamField([('paragraph_block', wagtail.core.blocks.StructBlock([('text', wagtail.core.blocks.RichTextBlock(features=['h2', 'h3', 'h4', 'bold', 'italic', 'ol', 'ul', 'hr', 'link', 'document-link', 'image', 'embed', 'anchor'])), ('center', wagtail.core.blocks.BooleanBlock(default=False, required=False))])), ('block_quote', wagtail.core.blocks.StructBlock([('text', wagtail.core.blocks.TextBlock()), ('source', wagtail.core.blocks.TextBlock(help_text='Who is this quote acredited to?', required=False)), ('center', wagtail.core.blocks.BooleanBlock(default=False, required=False))])), ('banner_block', wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock(required=False)), ('video', wagtail.embeds.blocks.EmbedBlock(help_text='Insert an embed URL e.g https://www.youtube.com/embed/SGJFWirQ3ks', icon='fa-video-camera', required=False, template='blocks/embed_block.html')), ('text', wagtail.core.blocks.StreamBlock([('text_heading', wagtail.core.blocks.CharBlock(icon='title', required=False, template='blocks/banner/text_heading.html')), ('text', wagtail.core.blocks.TextBlock(template='blocks/banner/text.html')), ('richtext', wagtail.core.blocks.RichTextBlock(template='blocks/banner/richtext.html')), ('list', wagtail.core.blocks.ListBlock(wagtail.core.blocks.StructBlock([('title', wagtail.core.blocks.TextBlock(help_text='An optional title to the list item', required=False)), ('content', wagtail.core.blocks.TextBlock(help_text='The list item content', required=True))], template='blocks/banner/list_item.html'), icon='list-ul', template='blocks/banner/list.html'))])), ('meta', wagtail.core.blocks.CharBlock(help_text='Anything from a name, location e.t.c - usually to provide credit for the text', required=False)), ('buttons', wagtail.core.blocks.StreamBlock([('button', wagtail.core.blocks.StructBlock([('caption', wagtail.core.blocks.CharBlock(help_text='Leave blank if you wish to use the page title as a caption', required=False)), ('page', wagtail.core.blocks.PageChooserBlock(help_text='For the link/button to show, either this or the url are required', required=False)), ('url', wagtail.core.blocks.URLBlock(help_text='An alternative to an internal page', required=False))])), ('document_box', wagtail.core.blocks.StructBlock([('box_heading', wagtail.core.blocks.CharBlock(icon='title', required=False)), ('documents', wagtail.core.blocks.StreamBlock([('document', wagtail.documents.blocks.DocumentChooserBlock())], required=False)), ('dark_mode', wagtail.core.blocks.BooleanBlock(default=False, help_text='Red on white if unchecked. White on dark grey if checked.', required=False))]))], required=False)), ('media_orientation', wagtail.core.blocks.ChoiceBlock(choices=[('left', 'Left'), ('right', 'Right')], required=False)), ('light', wagtail.core.blocks.BooleanBlock(default=False, help_text='Sets the background to a lighter colour', required=False))])), ('downloads', wagtail.core.blocks.StructBlock([('section_heading', wagtail.core.blocks.TextBlock(required=False)), ('section_sub_heading', wagtail.core.blocks.TextBlock(required=False)), ('document_box_heading', wagtail.core.blocks.CharBlock(icon='title', required=False)), ('document_boxes', wagtail.core.blocks.StreamBlock([('document_box', wagtail.core.blocks.StructBlock([('box_heading', wagtail.core.blocks.CharBlock(icon='title', required=False)), ('documents', wagtail.core.blocks.StreamBlock([('document', wagtail.documents.blocks.DocumentChooserBlock())], required=False)), ('dark_mode', wagtail.core.blocks.BooleanBlock(default=False, help_text='Red on white if unchecked. White on dark grey if checked.', required=False))]))], required=False))])), ('image', wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock(required=True)), ('credit_name', wagtail.core.blocks.CharBlock(help_text='Name of the image source', required=False)), ('credit_url', wagtail.core.blocks.URLBlock(help_text='URL of the image source', required=False))])), ('image_duo', wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock(required=True)), ('credit_name', wagtail.core.blocks.CharBlock(help_text='Name of the image source', required=False)), ('credit_url', wagtail.core.blocks.URLBlock(help_text='URL of the image source', required=False)), ('side_text', wagtail.core.blocks.RichTextBlock(features=['h2', 'h3', 'h4', 'bold', 'italic', 'ol', 'ul', 'hr', 'link', 'document-link', 'image', 'embed', 'anchor'], icon='fa-paragraph', required=True, template='blocks/paragraph_block.html')), ('button', wagtail.core.blocks.StructBlock([('caption', wagtail.core.blocks.CharBlock(help_text='Leave blank if you wish to use the page title as a caption', required=False)), ('page', wagtail.core.blocks.PageChooserBlock(help_text='For the link/button to show, either this or the url are required', required=False)), ('url', wagtail.core.blocks.URLBlock(help_text='An alternative to an internal page', required=False))])), ('alt', wagtail.core.blocks.BooleanBlock(default=False, help_text='White background if checked.'))])), ('video_duo', wagtail.core.blocks.StructBlock([('heading', wagtail.core.blocks.CharBlock(help_text='Section heading', icon='fa-heading', required=False)), ('video', wagtail.embeds.blocks.EmbedBlock(help_text='Insert an embed URL e.g https://www.youtube.com/embed/SGJFWirQ3ks', icon='fa-video-camera', required=False, template='blocks/embed_block.html')), ('side_text', wagtail.core.blocks.RichTextBlock(features=['h2', 'h3', 'h4', 'bold', 'italic', 'ol', 'ul', 'hr', 'link', 'document-link', 'image', 'embed', 'anchor'], icon='fa-paragraph', required=True, template='blocks/paragraph_block.html')), ('button', wagtail.core.blocks.StructBlock([('caption', wagtail.core.blocks.CharBlock(help_text='Leave blank if you wish to use the page title as a caption', required=False)), ('page', wagtail.core.blocks.PageChooserBlock(help_text='For the link/button to show, either this or the url are required', required=False)), ('url', wagtail.core.blocks.URLBlock(help_text='An alternative to an internal page', required=False))])), ('alt', wagtail.core.blocks.BooleanBlock(default=False, help_text='White background if checked.'))]))], blank=True, null=True, verbose_name='Sections'),
        ),
        migrations.AlterField(
            model_name='datasectionpage',
            name='body',
            field=wagtail.core.fields.StreamField([('paragraph_block', wagtail.core.blocks.RichTextBlock(features=['h2', 'h3', 'h4', 'bold', 'italic', 'ol', 'ul', 'hr', 'link', 'document-link', 'image', 'embed', 'anchor'], icon='fa-paragraph', template='blocks/paragraph_block.html')), ('block_quote', wagtail.core.blocks.StructBlock([('text', wagtail.core.blocks.TextBlock()), ('source', wagtail.core.blocks.TextBlock(help_text='Who is this quote acredited to?', required=False))])), ('button_block', wagtail.core.blocks.StructBlock([('caption', wagtail.core.blocks.CharBlock(help_text='Leave blank if you wish to use the page title as a caption', required=False)), ('page', wagtail.core.blocks.PageChooserBlock(help_text='For the link/button to show, either this or the url are required', required=False)), ('url', wagtail.core.blocks.URLBlock(help_text='An alternative to an internal page', required=False))])), ('link_block', wagtail.core.blocks.StructBlock([('caption', wagtail.core.blocks.CharBlock(help_text='Leave blank if you wish to use the page title as a caption', required=False)), ('page', wagtail.core.blocks.PageChooserBlock(help_text='For the link/button to show, either this or the url are required', required=False)), ('url', wagtail.core.blocks.URLBlock(help_text='An alternative to an internal page', required=False))])), ('image', wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock(required=True)), ('credit_name', wagtail.core.blocks.CharBlock(help_text='Name of the image source', required=False)), ('credit_url', wagtail.core.blocks.URLBlock(help_text='URL of the image source', required=False))])), ('video', wagtail.embeds.blocks.EmbedBlock(help_text='Insert an embed URL e.g https://www.youtube.com/embed/SGJFWirQ3ks', icon='fa-video-camera', required=False, template='blocks/embed_block.html'))], blank=True, null=True, verbose_name='Page Body'),
        ),
        migrations.AlterField(
            model_name='datasectionpage',
            name='hero_image_credit_name',
            field=models.TextField(blank=True, help_text='Name of source of image used in hero if any', null=True, verbose_name='Image credit name'),
        ),
        migrations.CreateModel(
            name='FigureTopic',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content_object', modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='figure_topics', to='datasection.FigurePage')),
                ('tag', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='datasection_figuretopic_items', to='taggit.Tag')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='FigureSource',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('page', modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='figure_sources', to='datasection.FigurePage')),
                ('source', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='datasection.DataSource', verbose_name='Data Source')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='FigurePageRelatedLink',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sort_order', models.IntegerField(blank=True, editable=False, null=True)),
                ('other_page', models.ForeignKey(blank=True, help_text='A page to link to in the "Other Pages or Related Links" section', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailcore.Page', verbose_name='Page')),
                ('page', modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='related_figures', to='datasection.FigurePage')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='FigurePageDownloads',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sort_order', models.IntegerField(blank=True, editable=False, null=True)),
                ('title', models.CharField(blank=True, help_text='Optional: document title, defaults to the file name if left blank', max_length=255)),
                ('file', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtaildocs.Document')),
                ('page', modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='figure_downloads', to='datasection.FigurePage')),
            ],
            options={
                'ordering': ['sort_order'],
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='figurepage',
            name='topics',
            field=modelcluster.contrib.taggit.ClusterTaggableManager(blank=True, help_text='A comma-separated list of tags.', through='datasection.FigureTopic', to='taggit.Tag', verbose_name='Topics'),
        ),
        migrations.CreateModel(
            name='FigureDataSet',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sort_order', models.IntegerField(blank=True, editable=False, null=True)),
                ('dataset', models.ForeignKey(blank=True, help_text='A dataset on which this figure is based', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='datasection.DatasetPage', verbose_name='Data Set')),
                ('page', modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='figure_datasets', to='datasection.FigurePage')),
            ],
            options={
                'ordering': ['sort_order'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='DataSourceTopic',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content_object', modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='datasource_topics', to='datasection.DataSource')),
                ('tag', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='datasection_datasourcetopic_items', to='taggit.Tag')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='datasource',
            name='topics',
            field=modelcluster.contrib.taggit.ClusterTaggableManager(blank=True, help_text='A comma-separated list of tags.', through='datasection.DataSourceTopic', to='taggit.Tag', verbose_name='Topics'),
        ),
        migrations.CreateModel(
            name='DataSetTopic',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content_object', modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='dataset_topics', to='datasection.DatasetPage')),
                ('tag', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='datasection_datasettopic_items', to='taggit.Tag')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='DataSetSource',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('page', modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='dataset_sources', to='datasection.DatasetPage')),
                ('source', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='datasection.DataSource', verbose_name='Data Source')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='DatasetPageRelatedLink',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sort_order', models.IntegerField(blank=True, editable=False, null=True)),
                ('other_page', models.ForeignKey(blank=True, help_text='A page to link to in the "Other Pages or Related Links" section', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailcore.Page', verbose_name='Page')),
                ('page', modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='related_datasets', to='datasection.DatasetPage')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='datasetpage',
            name='topics',
            field=modelcluster.contrib.taggit.ClusterTaggableManager(blank=True, help_text='A comma-separated list of tags.', through='datasection.DataSetTopic', to='taggit.Tag', verbose_name='Topics'),
        ),
        migrations.CreateModel(
            name='DatasetDownloads',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sort_order', models.IntegerField(blank=True, editable=False, null=True)),
                ('title', models.CharField(blank=True, help_text='Optional: document title, defaults to the file name if left blank', max_length=255)),
                ('file', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtaildocs.Document')),
                ('page', modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='dataset_downloads', to='datasection.DatasetPage')),
            ],
            options={
                'ordering': ['sort_order'],
                'abstract': False,
            },
        ),
    ]
