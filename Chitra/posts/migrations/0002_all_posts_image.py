# Generated by Django 3.1.7 on 2021-03-07 02:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='all_posts',
            name='image',
            field=models.ImageField(default=0, upload_to='images/all_posts'),
            preserve_default=False,
        ),
    ]
