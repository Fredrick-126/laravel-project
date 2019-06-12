import React from 'react';
import {connect} from "react-redux";
import TwitterLogin  from "react-twitter-auth";
import FacebookButton from './FacebookButton';
import {startLogin} from "../actions/auth";
import {startSetChannels} from "../actions/channels";
import {startSetProfile} from "../actions/profile";
import {twitterRequestTokenUrl, twitterAccessTokenUrl, backendUrl, facebookAppId, linkedinAppId, pinterestAppId} from "../config/api";
import {LoaderWithOverlay} from "./Loader";
import LinkedInButton from "./LinkedInButton";
import PinterestButton from "./PinterestButton";

export class LoginPage extends React.Component{

    state = {
        loading: false
    }

    constructor(props) {
        super(props);
    }

    onFailure = (response) => {
        console.log(response);
    };

    onTwitterSuccess = (response) => {
        this.setState(() => ({loading: true}));
        response.json().then(body => {
            this.props.startLogin(body, "twitter").then(() => {
                this.props.startSetProfile();
                this.props.startSetChannels();
            }).catch(error => {
                this.setState(() => ({loading: false}));
            });
        });
    };

    onFacebookSuccess = (response) => {
        this.setState(() => ({loading: true}));
        this.props.startLogin(response, "facebook").then(() => {
            this.props.startSetProfile();
            this.props.startSetChannels();
        }).catch(error => {
            this.setState(() => ({loading: false}));
        });
    };

    onLinkedInSuccess = (response) => {
        this.setState(() => ({loading: true}));
        this.props.startLogin(response, "linkedin").then(() => {
            this.props.startSetProfile();
            this.props.startSetChannels();
        }).catch(error => {
            this.setState(() => ({loading: false}));
        });
    };

    onPinterestSuccess = (response) => {
        this.setState(() => ({loading: true}));
        this.props.startLogin(response, "pinterest").then(() => {
            this.props.startSetProfile();
            this.props.startSetChannels();
        }).catch(error => {
            this.setState(() => ({loading: false}));
        });
    };

    render(){
        return (
            <div className="login-container">
                {this.state.loading && <LoaderWithOverlay />}
                <div className="box-container">
                    <a href={backendUrl} className="brand"><img className="brand-img" src="/images/uniclix.png"/></a>
                    <div className="divider"></div>
                    <TwitterLogin loginUrl={twitterAccessTokenUrl}
                                onFailure={this.onFailure} onSuccess={this.onTwitterSuccess}
                                requestTokenUrl={twitterRequestTokenUrl}
                                showIcon={false}
                                >
                    </TwitterLogin>

                    <FacebookButton
                        appId={facebookAppId}
                        onSuccess={this.onFacebookSuccess} />

                    <LinkedInButton 
                        clientId={linkedinAppId}
                        redirectUri={`${backendUrl}/api/linkedin/callback`}
                        onSuccess={this.onLinkedInSuccess}
                        onError={this.onFailure}
                    />

                    <PinterestButton 
                        clientId={pinterestAppId}
                        redirectUri={`${backendUrl}/api/pinterest/callback`}
                        onSuccess={this.onPinterestSuccess}
                        onError={this.onFailure}
                    />
                </div>
            </div>  
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    startLogin: (body, network) => dispatch(startLogin(body, network)),
    startSetProfile: () => dispatch(startSetProfile()),
    startSetChannels: () => dispatch(startSetChannels())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);