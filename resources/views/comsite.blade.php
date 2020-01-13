@extends('layouts.main')

@section('content')
<section class="level has-background-dark is-marginless" >
    <div class="level-item" style="margin: 10px 0 10px 0;">
        <div class="has-text-centered is-size-5 has-text-weight-bold has-text-white is-uppercase">{{ Request::path() }}</div>
    </div>
</section>

<comsite-table
	:message="'{{ session()->get('message') }}'"
	:last_updated="'{{ $last_updated }}'"
></comsite-table>

@endsection
