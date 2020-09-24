<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Fullstack Blog</title>
  <link rel="stylesheet" href="/css/app.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script>
    (function () {
      window.Laravel = {
        csrfToken:'{{ csrf_token() }}'
      }
    })();
  </script>

</head>
<body>
  @yield('app')

  <script src="{{mix('/js/app.js')}}"></script>
</body>
</html>
