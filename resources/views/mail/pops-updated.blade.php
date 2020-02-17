@component('mail::message')
# Base de POP actualizada

<div>
    El número total de pops ingresados el día de hoy es: {{ $count->totalPops }}
</div>
<div>
    El número total de sitios ingresados el día de hoy es: {{ $count->totalSites }}
</div>

@component('mail::button', ['url' => url('/pop')])
Button Text
@endcomponent

Saludos a todos, menos a uno...<br>
{{ config('app.name') }}
@endcomponent
