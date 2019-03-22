import React from 'react';
import StreamFeedItem from './StreamFeedItem';
import {getStreamFeed} from '../../requests/streams';

class StreamFeed extends React.Component{
    state = {
        items: []
    };

    componentDidMount(){
        const {streamItem} = this.props;

        getStreamFeed(streamItem.type, streamItem.network, streamItem.channel_id).then((response) => {
            if(!response.length) return;
            this.setState(() => ({
                items: response
            }));
        });
    }

    render(){
        
        return (
            <div>
                {this.state.items.length ? this.state.items.map(item => (
                    <StreamFeedItem  feedItem={item} key={item.id} />
                )) : <div>No data</div>}
            </div>
        );
    }
}

export default StreamFeed;