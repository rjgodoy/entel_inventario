@extends('layouts.app')

@section('content')

    <form method="POST" class="box" action="{{ route('password.update') }}">
        @csrf

        <div class="field is-size-4 has-text-link has-text-weight-bold">{{ __('Cambiar Contraseña') }}</div>

        <input type="hidden" name="token" value="{{ $token }}">

        <div class="field">
            <label for="email" class="label has-text-weight-normal">{{ __('Email') }}</label>

            <p class="control has-icon has-icon-right">
                <input id="email" type="email" class="input @error('email') is-invalid @enderror" name="email" value="{{ $email ?? old('email') }}" required autocomplete="email" autofocus>

                @error('email')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </p>
        </div>

        <div class="field">
            <label for="password" class="label has-text-weight-normal">{{ __('Contraseña') }}</label>

            <p class="control has-icon has-icon-right">
                <input id="password" type="password" class="input @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                @error('password')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </p>
        </div>

        <div class="field">
            <label for="password-confirm" class="label has-text-weight-normal">{{ __('Repetir contraseña') }}</label>

            <p class="control has-icon has-icon-right">
                <input id="password-confirm" type="password" class="input" name="password_confirmation" required autocomplete="new-password">
            </p>
        </div>

        <div class="form-group row mb-0">
            <div class="col-md-6 offset-md-4">
                <button type="submit" class="button is-link">
                    {{ __('Reset Password') }}
                </button>
            </div>
        </div>
    </form>
                
@endsection
