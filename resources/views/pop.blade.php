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
	:nets='@json($nets)'
	:net='@json($net)'
	:pop_classes='@json($pop_classes)'
	:pop_class='@json($pop_class)'
	:sites='@json($sites)'
	:site='@json($site)'
	:rcas='@json($rcas)'
    :csrf="'{{ csrf_token() }}'"
/>

@endsection
