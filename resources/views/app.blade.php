<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel + Vue</title>
    {{-- 這邊的 @vite 會將 resources/css/app.css 和 resources/js/app.js 載入到 HTML 中 --}}
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body>
    {{-- 這邊的 id 會對應到 resources/js/app.js 中的 el: '#app' --}}
    <div id="app"></div>
</body>

</html>
