@component('mail::message')
# Solicitud rechazada

Su solicitud de ingreso a Inventario ha sido rechazada. Si tiene dudas, favor contactar con el administrador.

@component('mail::button', ['url' => 'mailto:proyectosinfraestructura@entel.cl'])
Contactar
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
