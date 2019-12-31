<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

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
        <main class="">
            <section class="hero is-fullheight is-black has-background">
                <img alt="Fill Murray" class="hero-background is-transparent" src="{{ asset('img/bg-hero-satellite.jpg') }}" />
                <div class="hero-body">
                    <div class="container">
                        <div class="columns is-centered">
                            <div class="column is-5-tablet is-5-desktop is-5-widescreen">
                                <figure class="image is-128x128 has-image-centered" style="margin: -200px auto -30px auto;">
                                    <img class="" src="{{ asset('img/iconografia/entel-logo-negativo.png') }}">
                                </figure>
                                <br/>
                                <div class=" has-text-centered">
                                    <h1 class="is-size-2 has-text-weight-bold">{{ config('app.name', 'Laravel') }}</h1>
                                    <div class="is-size-4 has-text-light has-text-weight-semibold">Subgerencia Infraestructura, Poder y Clima</div>
                                    <div class="is-size-5 has-text-light has-text-weight-normal">Gerencia O&M Redes de Acceso</div>
                                </div>

                                <div class="is-divider" style="margin: 20px auto 20px auto"></div>
                                
                                @yield('content')

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</body>
</html>
