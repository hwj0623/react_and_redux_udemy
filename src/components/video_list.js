import React from 'react';
import VideoListItem from './video_list_item';

/**
 * <VideoList videos={this.state.videos} />
 * 로 부터 가져온 videos 프로퍼티는 props
 */

const VideoList = (props) => {
    //For loop 대신에 Array의 map 메소드 사용
    //컴포넌트 배열을 저장한다.
    const videoItems = props.videos.map((video)=> {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video = {video}/>)
    })
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
}

export default VideoList;