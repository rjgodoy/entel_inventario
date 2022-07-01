@component('mail::message')
# Solicitud rechazada

Su solicitud de ingreso a Inventario ha sido rechazada. Si tiene dudas, favor contactar con el administrador.

@component('mail::button', ['url' => 'mailto:nponce@dataenergy.cl'])
Contactar
@endcomponent

Gracias,<br>
{{ config('app.name') }}
@endcomponent
