@component('mail::message')
# Nueva solicitud de Credenciales

El usuario {{ $user->name }} {{ $user->apellido }} ha solicitado credenciales para ingresar a inventario.

@component('mail::button', ['url' => 'http:://172.16.100.102/admin'])
Ver solicitud
@endcomponent


Gracias,<br>
{{ config('app.name') }}
@endcomponent
