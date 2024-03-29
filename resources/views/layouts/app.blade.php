<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Plataforma Inventario') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fabicons -->
    {{-- <link rel="icon" type="image/x-icon" href="{{ asset('/img/favicons/favicon.ico') }}" /> --}}
    <!-- For new browsers - multisize ico  -->
    <link rel="icon" type="image/x-icon" sizes="16x16 32x32" href="{{ asset('/img/favicons/favicon.ico') }}">
    
    <!-- For iPad with high-resolution Retina display running iOS ≥ 7: -->
    <link rel="apple-touch-icon" sizes="152x152" href="{{ asset('/img/favicons/favicon-152-precomposed.png') }}">
    
    <!-- For iPad with high-resolution Retina display running iOS ≤ 6: -->
    <link rel="apple-touch-icon" sizes="144x144" href="{{ asset('/img/favicons/favicon-144-precomposed.png') }}">
    
    <!-- For iPhone with high-resolution Retina display running iOS ≥ 7: -->
    <link rel="apple-touch-icon" sizes="120x120" href="{{ asset('/img/favicons/favicon-120-precomposed.png') }}">
    
    <!-- For iPhone with high-resolution Retina display running iOS ≤ 6: -->
    <link rel="apple-touch-icon" sizes="114x114" href="{{ asset('/img/favicons/favicon-114-precomposed.png') }}">
    
    <!-- For iPhone 6+ -->
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('/img/favicons/favicon-180-precomposed.png') }}">
    
    <!-- For first- and second-generation iPad: -->
    <link rel="apple-touch-icon" sizes="72x72" href="{{ asset('/img/favicons/favicon-72-precomposed.png') }}">
    
    <!-- For non-Retina iPhone, iPod Touch, and Android 2.1+ devices: -->
    <link rel="apple-touch-icon" sizes="57x57" href="{{ asset('/img/favicons/favicon-57.png') }}">

    <!-- Chrome for Android -->
    <link rel="manifest" href="{{ asset('/img/favicons/manifest.json') }}">
    <link rel="icon" sizes="192x192" href="{{ asset('/img/favicons/favicon-192.png') }}">

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body class="has-background-black-bis">
    <div id="app">
        @auth
            <router-view
                :last_data_counters='@json($last_data_counters)'
                :app_name="'{{ config('app.name') }}'"
                :user='@json(auth()->user())'
                :user_permissions='@json(auth()->user()->permissions)'
                :last_updated_data='@json($last_updated_data)'
                :is_dark_mode="'{{ $darkMode }}'"
            ></router-view>
        @else
             @if(isset($username))
                <router-view 
                    :username='@json($username)' 
                    :password='@json($password)'>
                </router-view>
            @else
                <router-view :app_name="'{{ config('app.name') }}'"></router-view>
            @endif
        @endauth
    </div>
</body>
</html>
