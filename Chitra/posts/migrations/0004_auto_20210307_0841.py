# Generated by Django 3.1.7 on 2021-03-07 02:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0003_auto_20210307_0837'),
    ]

    operations = [
        migrations.AlterField(
            model_name='all_posts',
            name='image',
            field=models.ImageField(upload_to='all_posts'),
        ),
    ]
