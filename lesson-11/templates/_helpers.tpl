{{- define "course-app.name" -}}
    {{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}

{{- define "course-app.fullname" -}}
    {{- if .Values.fullnameOverride }}
        {{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" }}
    {{- else }}
        {{- printf "%s-%s" .Release.Name (include "course-app.name" .) | trunc 63 | trimSuffix "-" }}
    {{- end }}
{{- end }}

{{- define "course-app.redisHost" -}}
    {{- printf "%s-redis-master" .Release.Name }}
{{- end }}
