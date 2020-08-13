<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'larata-cms') }}</title>

    <!-- Scripts -->
    <script>
        const CSRF = '{{ csrf_token() }}';
        const BASE_URL = '{{url("")}}';
    </script>
    <script src="{{ asset('js/app_admin.js') }}" defer></script>
    <link href="{{ asset('css/app_admin.css') }}" rel="stylesheet">
</head>
<body>
    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
        @csrf
    </form>

    <div id="app" ></div>
</body>
</html>
