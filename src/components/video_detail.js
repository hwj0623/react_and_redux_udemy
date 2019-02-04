import React from 'react';


const VideoDetail = ({video}) =>{
    /** null/undefined check*/
    if(!video){
        return <div>Loading...</div>
    }

    const videoId = video.id.videoId;
    const url = 'https://www.youtube.com/embed/'+videoId;
    //vectics 문자열(`)로 다음과 같이 표기 가능
    // const url = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className="video-detail col-md-8">
            {/** video coverage i-frame*/}
            <div className='embed-responsive embed-responsive-16by9'>
                <iframe className="embed-responsive-item" src={url} ></iframe>
            </div>
            <div className="details">
                {/** title */}
                <div>{video.snippet.title}</div>
                {/** contents */}
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
}

export default VideoDetail;