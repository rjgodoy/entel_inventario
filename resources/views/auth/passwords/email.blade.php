@extends('layouts.app')

@section('content')

    <div class="">
        @if(session('status'))
        <div class="notification is-primary alert is-dismissable" role="alert">
            <button aria-hidden="true" data-dismiss="alert" class="delete" type="button"></button>
            {{ session('status') }}
        </div>
        @endif

        <form method="POST" class="box" action="{{ route('password.email') }}">
            @csrf

            <div class="field is-size-4 has-text-link has-text-weight-bold">{{ __('Recuperar Contraseña') }}</div>

            <div class="field">
                <label for="email" class="label has-text-weight-normal">{{ __('Email') }}</label>
                <p class="control has-icon has-icon-right">
                    <input id="email" type="email" class="input @error('email') is-invalid @enderror" name="email" placeholder="" value="{{ old('email') }}" required autocomplete="email" autofocus>

                    @error('email')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </p>
            </div>

            <p class="control">
                <button type="submit" class="button is-link">
                    {{ __('Enviar link de recuperación') }}
                </button>
                <a class="button is-link is-outlined" href="{{ route('login') }}">
                    {{ __('Login') }}
                </a>
            </p>
        </form>
    </div>

@endsection
