from django.contrib import admin
from . models import Hot_place

class Hot_placeAdmin(admin.ModelAdmin):

    list_display = ['pk','title','contents','address','number','time','photo1']

admin.site.register(Hot_place,Hot_placeAdmin)
