@extends('layouts.main')

@section('content')

@if(session()->get('message'))
<div class="notification is-primary alert is-dismissable" role="alert">
    <button aria-hidden="true" data-dismiss="alert" class="delete" type="button"></button>
    {{ session()->get('message') }}
</div>
@endif

<pop-detail
	:message="'{{ session()->get('message') }}'"
	:pop='@json($pop)'
	:pop_menu='@json($pop_menu)'
	:attention='@json($attention)'
	:attentions='@json($attentions)'
	:attention_priority='@json($attention_priority)'
	:attention_priorities='@json($attention_priorities)'
	:autonomy='@json($autonomy)'
	:autonimies='@json($autonomies)'
	:category='@json($category)'
	:categories='@json($categories)'
	:classification='@json($classification)'
	:classifications='@json($classifications)'
	:coverage='@json($coverage)'
	:coverages='@json($coverages)'
	:dependences='@json($dependences)'
	:derivation='@json($derivation)'
	:derivations='@json($derivations)'
	:nets='@json($nets)'
	:net='@json($net)'
	:pop_classes='@json($pop_classes)'
	:pop_class='@json($pop_class)'
	:rcas='@json($rcas)'
	:sites='@json($sites)'
	:site='@json($site)'
    :tec2g1900='@json($tec2g1900)'
    :tec3g900='@json($tec3g900)'
    :tec3g1900='@json($tec3g1900)'
    :tec4g700='@json($tec4g700)'
    :tec4g1900='@json($tec4g1900)'
    :tec4g2600='@json($tec4g2600)'
    :transports='@json($transports)'
    :transport='@json($transport)'
/>

@endsection
