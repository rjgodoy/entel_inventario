@component('mail::message')
# Solicitud Aceptada

Su solicitud de ingreso a Inventario Infraestructura ha sido aceptada.

Puede ingresar mediante el siguiente link:

@component('mail::button', ['url' => 'http://172.16.100.102'])
Ingresar a Inventario
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
