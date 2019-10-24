@extends('layouts.main')

@section('content')
<section class="level has-background-dark is-marginless" >
    <div class="level-item" style="margin: 10px 0 10px 0;">
        <div class="has-text-centered is-size-5 has-text-weight-bold has-text-white is-uppercase">{{ Request::path() }}</div>
    </div>
</section>

<pop-detail
    :csrf="'{{ csrf_token() }}'"
></pop-detail>

@endsection
