import React, {Component} from 'react';
import { VideoPlayer } from '../';
import { Stomp } from '@stomp/stompjs';

export default class Room extends Component {
    constructor(props){
        super();

        this.state = {
            publishAdaptor: null,
            videoJsOptions: {
                autoplay: true,
                controls: true,
                sources: null,
                poster: "//vjs.zencdn.net/v/oceans.png"
            },
            stompClient: null
        }
        this.onStreamClick = this.onStreamClick.bind(this);
        this.onStopClick = this.onStopClick.bind(this);
        this.setClientVidSrc = this.setClientVidSrc.bind(this);
    }

    componentDidMount(){

        //setting up the socket for stream info signalling
        const stompClient = Stomp.over(new window.SockJS('/meerkat-websocket'));
        stompClient.connect({}, function(frame) {
            console.log('Connected: ', frame);
            stompClient.subscribe('/topics/rooms/stream1', function(content) {
                const message = JSON.parse(content.body);
                if(message.messageType == 'start stream') {
                    this.setClientVidSrc(message.streamId);
                } else if(message.messageType == 'stop stream') {
                    this.setClientVidSrc(null);
                }
            });
        });
        
        //setting up adaptor for screen recording and publishing
        var publishAdaptor = new window.WebRTCAdaptor({
            websocket_url: 'ws://localhost:5080/WebRTCApp/websocket',
            mediaConstraints: {
                video: 'screen+camera',
                audio: true
            },
            peerconnection_config: null,
            sdp_constraints: {
                OfferToReceiveAudio: false,
                OfferToReceiveVideo: false
            },
            localVideoId: 'stream',
            debug: true,
            callback: function(info, obj) {
                if (info == 'initialized') {
                    console.log('initialized');
                    //disable stream publish button, enable stop stream publish
                } else if (info == 'publish_started') {
                    console.log('publish started');
                } else if (info == 'publish_finished') {
                    //send 'stop stream' message over socket
                } 
            },
            callbackError: function(error, message) {
                console.log('error callback: ' + JSON.stringify(error));
                if (typeof message != 'undefined') {
                    errorMessage = message;
                }
                var errorMessage = JSON.stringify(error);
                alert(errorMessage);
            }
        });

        this.setState({ publishAdaptor, stompClient });
    }

    setClientVidSrc(streamId) {
        var videoJsOptions = this.state.videoJsOptions;
        const srcUrl = null;
        if(streamId) {
            videoJsOptions.sources = [{
                src: `http://localhost:5080/WebRTCApp/streams/${streamId}.m3u8`,
                type: 'application/x-mpegURL'
            }];
        } else {
            videoJsOptions.sources = null;
        }
        
        this.setState({ videoJsOptions });
    }

    async onStreamClick(event) {
        try {
            await this.state.publishAdaptor.publish('stream1');
            this.state.publishAdaptor.switchDesktopCapture('stream1');
            
            this.state.stompClient.send('/streams/start', {}, JSON.stringify({'streamId': 'stream1'}));

        } catch(err) {
            console.log(err);
        }
    }

    onStopClick(event){
        this.state.publishAdaptor.stop('stream1');
        this.state.stompClient.send('/streams/stop', {}, JSON.stringify({'streamId': 'stream1'}));
    }

    render(){
        return (
            <div>
                <h1>Party Room</h1>
                <video 
                        id='stream' 
                        controls
                        width="620" >
                </video>
                <VideoPlayer { ...this.state.videoJsOptions } />
                <br></br>
                <button id='btn1' onClick={ this.onStreamClick }>Stream your screen</button>
                <button id='btn3' onClick={ this.onStopClick}>Stop stream</button>
                <br></br>
            </div>
        );
    }
}

