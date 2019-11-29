@extends('layouts.main')

@section('content')
<section class="level has-background-dark is-marginless" >
    <div class="level-item" style="margin: 10px 0 10px 0;">
        <div class="has-text-centered is-size-5 has-text-weight-bold has-text-white is-uppercase">{{ Request::path() }}</div>
    </div>
</section>

@if(session()->get('message'))
<div class="section">
	<div class="notification is-primary alert is-dismissable" role="alert">
	    <button aria-hidden="true" data-dismiss="alert" class="delete" type="button"></button>
	    {{ session()->get('message') }}
	</div>
</div>
@endif

<admin
	:message="'{{ session()->get('message') }}'"
/>

@endsection
