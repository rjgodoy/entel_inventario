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
        {{-- <img class="hero-background" src="{{ asset('img/bg-hero.jpeg') }}" /> --}}
        
        <nav class="navbar is-spaced {{-- is-transparent --}} has-background-black-ter" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item height-40" href="{{ url('/') }}" style="background: url({{ asset('img/iconografia/entel-logo-negativo.png') }}) no-repeat center center; background-size: contain; width: 60px;">
                </a>
                <div class="navbar-item" href="{{ url('/') }}">
                    <div class="title is-4 has-text-grey-light">{{ config('app.name', 'INVENTARIO') }}</div>
                </div>

                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
    
            <div id="navbarBasicExample" class="navbar-menu">

                <div class="navbar-start" style="flex-grow: 1; justify-content: center;">
                    <div class="columns has-text-weight-normal desktop" style="width: 60%;">
                        @foreach(Helper::menus() as $menu)
                        <div class="column has-text-centered">
                            <a class="has-text-dark" href="/{{ $menu->path }} {{-- {{ route($menu->path).'.index' }} --}}">
                                <i class="{{ $menu->ico }} fa-2x {{ strpos(Request::path(), $menu->path) !== false  ? 'has-text-primary' : 'has-text-grey-light' }}"></i>
                                <p class="is-size-7 {{ strpos(Request::path(), $menu->path) !== false ? 'has-text-dark' : 'has-text-grey-light' }}">{{ $menu->title }}</p>
                                @if(strpos(Request::path(), $menu->path) !== false)
                                <div class="has-text-primary" style="border-bottom: 3px solid; padding-top: 5px;"></div>
                                @endif
                            </a>
                        </div>
                        @endforeach
                    </div>
                    
                    @can('create', App\Pop::class)
                        <div class="column has-text-centered">
                            <a class="has-text-dark" href="admin">
                                <i class="fas fa-cog fa-2x {{ Request::path() === 'admin' ? 'has-text-primary' : 'has-text-grey-light' }}"></i>
                                <p class="is-size-7 {{ Request::path() === 'admin' ? 'has-text-dark' : 'has-text-grey-light' }}">Administración</p>
                                @if(Request::path() === 'admin')
                                <div class="has-text-primary" style="border-bottom: 3px solid; padding-top: 5px;"></div>
                                @endif
                            </a>
                        </div>
                    @endcan
                </div>

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
                            <a class="navbar-link has-text-grey-light">
                                {{ Auth::user()->name }} <span class="caret"></span>
                            </a>

                            <div class="navbar-dropdown">
                                <a class="navbar-item has-text-grey-light" href="{{ route('logout') }}" onclick="event.preventDefault();
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
            </div>
        </nav>

        <main class="py-4">
            @yield('content')
        </main>
    </div>
</body>
</html>
