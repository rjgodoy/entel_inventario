@extends('layouts.app')

@section('content')

    <form class="box" method="POST" action="{{ route('login') }}">
        @csrf

        <div class="field is-size-4 has-text-link has-text-weight-bold">{{ __('Login') }}</div>

        <div class="field">
            <label for="username" class="label has-text-weight-normal">{{ __('Usuario') }}</label>
            <p class="control has-icon has-icon-right">
                <input id="username" type="text" class="input @error('username') is-invalid @enderror" name="username" placeholder="" value="{{ old('username') }}" required autocomplete="username" autofocus>

                @error('username')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </p>
        </div>

        <div class="field">
            <label for="password" class="label has-text-weight-normal">Password</label>
            <p class="control has-icon has-icon-right">
                <input id="password" type="password" placeholder="" class="input @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                @error('password')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </p>
        </div>

        <div class="field">
            <input class="is-checkradio is-link is-small" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
            <label for="remember" class="checkbox">{{ __('Recordarme') }}</label>
        </div>

        <hr>
        <p class="control">
            <button class="button is-link">{{ __('Login') }}</button>
        </p>
    </form>

    <p class="has-text-centered">
        @if (Route::has('password.request'))
            <a href="{{ route('password.request') }}" class="is-size-6">{{ __('Recuperar contraseña') }}</a>
        @endif
    </p>

@endsection
