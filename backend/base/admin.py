from django.contrib import admin

from .models import Task


class TaskAdmin(admin.ModelAdmin):
    list_display = ("description", "completed")


admin.site.register(Task, TaskAdmin)
