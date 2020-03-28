<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>
    <link href="https://pro.fontawesome.com/releases/v5.11.2/css/all.css" rel="stylesheet" type="text/css">

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <app
            :crms='@json($crms)'
            :menu_data='@json($menu)'
            :last_data_counters='@json($last_data_counters)'
            :message="'{{ session()->get('message') }}'"
            :app_name="'{{ config('app.name') }}'"
            :user='@json(Auth::user())'
        ></app>
    </div>
</body>
</html>
