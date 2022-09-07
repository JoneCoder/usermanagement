<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <meta http-equiv="content-type" content="text/html;charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="base-url" content="{{URL::to('/')}}" />
    <link rel='icon' type='image/png' sizes='32x32' href="{{asset('assets/frontend/images/favicon.ico')}}">
    <script>
        window.laravel = {
            csrfToken: '{{ csrf_token() }}',
            baseurl: '{{URL::to("/")}}'
        }
    </script>
    <title>{{ config('app.frontend_app') }}</title>
    

    <!--CDN Resources-->
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Material+Icons"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    />

    <script
      type="text/javascript"
      src="//app.storyblok.com/f/storyblok-latest.js"
    ></script>

</head>

<body>

    <div id="app">
        <app />
    </div>

    <!-- App js -->
    <script src="{{ asset('js/frontend_app.js') }}"></script>
</body>

</html>