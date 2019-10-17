@extends('layouts.app')

@section('content')
<section class="hero is-fullheight is-dark is-bold has-background">
    <img alt="Fill Murray" class="hero-background is-transparent" src="{{ asset('img/bg-hero.jpeg') }}" />
    <div class="hero-body">
        <div class="container">
            <div class="columns is-vcentered">
                <div class="column is-6 is-offset-3">
                    <figure class="image is-128x128 is-clearfix">
                        <img src="{{ asset('img/iconografia/entel-logo-negativo.png') }}">
                    </figure>
                    <br/>
                    <h1 class="title">
                        {{ __('Login') }}
                    </h1>
                    <div class="box">
                        <form method="POST" action="{{ route('login') }}">
                            @csrf

                            <div class="field">
                                <label for="username" class="label">{{ __('Username') }}</label>
                                <p class="control has-icon has-icon-right">
                                    <input id="username" type="text" class="input @error('username') is-invalid @enderror" name="username" placeholder="username" value="{{ old('username') }}" required autocomplete="username" autofocus>

                                    @error('username')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </p>
                            </div>

                            <div class="field">
                                <label for="password" class="label">Password</label>
                                <p class="control has-icon has-icon-right">
                                    <input id="password" type="password" placeholder="●●●●●●●" class="input @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                    @error('password')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </p>
                            </div>

                            <div class="field">
                                <input class="is-checkradio has-background-color" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                                <label for="remember" class="checkbox">{{ __('Remember Me') }}</label>
                            </div>

                            <hr>
                            <p class="control">
                                <button class="button is-primary">{{ __('Login') }}</button>
                            </p>

                        </form>
                    </div>
                    <p class="has-text-centered">
                        @if (Route::has('password.request'))
                            <a href="{{ route('password.request') }}">{{ __('Forgot Your Password?') }}</a>
                        @endif
                    </p>
                </div>
            </div>
        </div>
    </div>

</section>
@endsection
