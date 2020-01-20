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
            <navbar
                :app_name="'{{ config('app.name') }}'"
                :user='@json(Auth::user())'
            ></navbar>

            {{-- <section class="columns has-background-black-ter" style="margin: -20px 0 -20px 0;">
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
                        <div class="">
                            <ul class="columns">
                                @foreach(Helper::menus(auth()->user()) as $menu)
                                <li class="column has-text-centered {{ strpos(Request::path(), $menu->path) !== false  ? 'is-active' : '' }}">
                                    <a class="" href="/{{ $menu->path }}">
                                        <b-icon pack="fas" icon="{{ $menu->icon }}" size="2x" class="{{ strpos(Request::path(), $menu->path) !== false  ? 'has-text-link' : 'has-text-grey-light' }}"></b-icon>
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
                            <div class="navbar-item dropdown is-hoverable" style="margin: -5px 0 -5px 0;">

                                <div class="navbar-menu">
                                    <div class="navbar-end">
                                        <b-dropdown                    
                                            position="is-bottom-left"
                                            aria-role="menu">
                                            <a
                                                class="navbar-item has-text-grey-light has-text-weight-semibold"
                                                style="margin-bottom: -10px;"
                                                slot="trigger"
                                                role="button">
                                                <span>{{ Auth::user()->nombre }}</span>
                                                &nbsp;
                                                <b-icon pack="fas" icon="angle-down"></b-icon>
                                            </a>

                                            <b-dropdown-item custom aria-role="menuitem">
                                                Logged as <b>Rafael Beraldo</b>
                                            </b-dropdown-item>

                                            <hr class="dropdown-divider">

                                            <b-dropdown-item has-link aria-role="menuitem">
                                                <a href="https://google.com" target="_blank">
                                                    <b-icon pack="fas" icon="link"></b-icon>
                                                    Google (link)
                                                </a>
                                            </b-dropdown-item>

                                            <b-dropdown-item value="home" aria-role="menuitem">
                                                <b-icon pack="fas" icon="home"></b-icon>
                                                Home
                                            </b-dropdown-item>

                                            <b-dropdown-item value="products" aria-role="menuitem">
                                                <b-icon pack="fas" icon="cart"></b-icon>
                                                Products
                                            </b-dropdown-item>

                                            <b-dropdown-item value="blog" disabled aria-role="menuitem">
                                                <b-icon pack="fas" icon="book-open"></b-icon>
                                                Blog
                                            </b-dropdown-item>

                                            <hr class="dropdown-divider" aria-role="menuitem">

                                            <b-dropdown-item value="settings" has-link aria-role="menuitem">
                                                <a class="" 
                                                    href="{{ route('logout') }}" 
                                                    onclick="event.preventDefault();
                                                    document.getElementById('logout-form').submit();">
                                                    <b-icon icon="user-edit"></b-icon>
                                                    {{ __('Perfil') }}
                                                </a>
                                            </b-dropdown-item>

                                            <b-dropdown-item value="logout" has-link aria-role="menuitem">
                                                <a class="" 
                                                    href="{{ route('logout') }}" 
                                                    onclick="event.preventDefault();
                                                    document.getElementById('logout-form').submit();">
                                                    <b-icon pack="fas" icon="sign-out-alt"></b-icon>
                                                    {{ __('Logout') }}
                                                </a>
                                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                                    @csrf
                                                </form>
                                            </b-dropdown-item>
                                        </b-dropdown>
                                    </div>
                                </div>

                            </div>
                            @endguest
                        </div>
                        <div class="navbar-end">
                            <div class="" style="margin: 0px 20px">
                                <clock></clock>
                            </div>
                        </div>
                    </div>
                </div>
            </section> --}}

           {{--  <main class="py-4">
                @yield('content')
            </main> --}}


    </div>
</body>
</html>
