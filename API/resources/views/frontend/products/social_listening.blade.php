@extends('layouts.homepage')

@section('content')

@include('frontend.includes.projects_menu')

<div class="product-pages">
    <div class="p-first-section">
        <div class="container">
            <div class="row standard-padding text-center">
                <div class="col-xs-12">
                    <h2>People are talking, make sure your listening.</h2>
                    <p>A great way to manage mentions and Monitor keywords and hashtags</p>
                    <img class="img-responsive" src="{{asset('/images/social-listening-img-1.png')}}">
                </div>
            </div>

            <div class="row standard-padding">
                <div class="col-md-6 col-xs-12">
                    <h2>Create custom social streams</h2>
                    <p>Setup and track custom streams of social content, all organized by tabs so you can monitor them by category. Respond & comment directly on the content of your interest from the streams.</p>
                </div>
                <div class="col-md-6 col-xs-12">
                    <img class="img-responsive" src="{{asset('/images/sl-image-2.png')}}">
                </div>
            </div>

            <div class="row standard-padding">
                <div class="col-md-6 col-xs-12">
                    <img class="img-responsive" src="{{asset('/images/sl-image-3.png')}}">
                </div>
                <div class="col-md-6 col-xs-12">
                    <h2>Search by keyword or hashtag</h2>
                    <p>Setup, and discover social conversation by hashtag, keyword in all languages to hear what people are saying about your industry, competition and your brand.</p>
                </div>
            </div>

        </div>
    </div>

    @include('frontend.includes.compareplans')

    <div class="container standard-padding">
        <div class="row">
            <div class="col-xs-12 text-center">
                <h2>Learn more about twitter booster</h2>
                <p>Grow your community on Twitter by targeting the right audience. Think of our Booster tool as a matchmaker that connects you with people most interested in what you have to offer.</p>
                <div class="card panel-shadow mt50">
                    <h5>Twitter Booster</h5>
                    <p>Grow your community on Twitter by targeting the right audience.</p>
                    <a href="#">Learn more</a>
                </div>
            </div>
        </div>
    </div>
</div>

@include('frontend.includes.footer')

@endsection
