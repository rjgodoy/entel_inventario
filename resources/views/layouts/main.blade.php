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
    <div id="app" class="">
        {{-- <img class="hero-background" src="{{ asset('img/bg-hero.jpeg') }}" /> --}}

        <section class="columns has-background-black-ter {{-- is-transparent --}}" style="margin: -20px 0 -20px 0;">
            <div class="column is-3 hero is-small">
                <div class="hero-body">
                    <nav class="navbar">
                        <div class="navbar-brand">
                            <a class="navbar-item" href="{{ url('/') }}" style="background: url({{ asset('img/iconografia/entel-logo-negativo.png') }}) no-repeat center center; background-size: contain; width: 60px;">
                            </a>
                            <div class="navbar-item">
                                <div class="title is-5 has-text-grey-light">
                                    <div class="is-5 has-text-white">{{ config('app.name', 'INVENTARIO') }}</div>
                                    <div class="title is-6 has-text-grey-light">Subgerencia Infraestructura, Poder y Clima</div>
                                    <div class="subtitle is-7 has-text-grey-light">Gerencia O&M Redes de Acceso</div>
                                </div>
                            </div>

                            {{-- <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a> --}}
                            <span class="navbar-burger burger" data-target="navbarMenuHeroB">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                    </nav>
                </div>
            </div>
            <div class="column is-6 hero is-small" style="margin-top: 20px;">
                <div class="hero-body">
                    <div class="{{-- is-fullwidth --}}">
                        <ul class="columns">
                            @foreach(Helper::menus() as $menu)
                            <li class="column has-text-centered {{ strpos(Request::path(), $menu->path) !== false  ? 'is-active' : '' }}">
                                <a class="" href="/{{ $menu->path }}">
                                    <i class="{{ $menu->ico }} fa-2x {{ strpos(Request::path(), $menu->path) !== false  ? 'has-text-link' : 'has-text-grey-light' }}"></i>
                                    <p class="is-size-7 {{ strpos(Request::path(), $menu->path) !== false ? 'has-text-white' : 'has-text-grey-light' }}">{{ $menu->title }}</p>
                                    @if(strpos(Request::path(), $menu->path) !== false)
                                    <div class="has-text-link" style="border-bottom: 3px solid; padding-top: 5px;"></div>
                                    @endif
                                </a>
                            </li>
                            @endforeach
                        </ul>
                    </div>
                </div>
            </div>
            <div class="column hero is-small" style="margin-top: 10px;">
                <div class="hero-head is-size-7">
                    <div class="navbar-end">
                        @guest
                        <div class="navbar-item">
                            <div class="buttons">
                                @if (Route::has('register'))
                                <a class="button is-primary" href="{{ route('register') }}">
                                    <strong>{{ __('Register') }}</strong>
                                </a>
                                @endif
                                <a class="button is-light" href="{{ route('login') }}">
                                    {{ __('Login') }}
                                </a>
                            </div>
                        </div>
                        @else
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link has-text-grey-light has-background-black-ter">
                                {{ Auth::user()->nombre }} <span class="caret"></span>
                            </a>

                            <div class="navbar-dropdown is-size-7 has-background-black-ter">
                                <a class="navbar-item has-text-grey-light has-background-black-ter" href="{{ route('logout') }}" onclick="event.preventDefault();
                                             document.getElementById('logout-form').submit();">
                                    {{ __('Logout') }}
                                </a>

                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    @csrf
                                </form>
                            </div>
                        </div>
                        @endguest
                    </div>
                    <div class="navbar-end">
                        <div class="" style="margin: 0px 20px">
                            <clock></clock>
                        </div>
                    </div>
                    {{-- <div class="has-text-right">
                        <div class="title is-5 has-text-grey-light">Subgerencia Infraestructura, Poder y Clima</div>
                        <div class="subtitle is-6">Gerencia O&M Redes de Acceso</div>
                    </div> --}}
                </div>
            </div>
        </section>

        <main class="py-4">
            @yield('content')
        </main>

    </div>
</body>
</html>
