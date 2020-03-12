@extends('layouts.main')

@section('content')

@if(session()->get('message'))
<div class="notification is-primary alert is-dismissable" role="alert">
    <button aria-hidden="true" data-dismiss="alert" class="delete" type="button"></button>
    {{ session()->get('message') }}
</div>
@endif

<pop-detail
/>

@endsection
