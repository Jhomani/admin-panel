@extends("layouts.mainViews")

@section('app')
  <div id="app">
    @if(Auth::check())
      <mainapp :user="{{ Auth::user()}}"/>
    @else
      <mainapp :user="false"/>
    @endif
  </div>
@endsection
