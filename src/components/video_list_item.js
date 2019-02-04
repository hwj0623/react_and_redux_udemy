import React from 'react';

//props.video 와 {video}는 동일한 역할
const VideoListItem = ({video, onVideoSelect}) => { // 함수에서 파라미터로 props로 전달하는 것과 동일
    // const video = props.video;
    // const onVideoSelect = props.onVideoSelect;
    // console.log(video);
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        /** 유저의 li 클릭시 이벤트를 구현한다. props로부터 onVideoSelect를 계속 넘겨받아서 가능 */
        <li onClick={()=> onVideoSelect(video)}
            className="list-group-item">
          <div className="video-list media">
              <div className="media-left">
                  {/*thumbnail Image*/}
                <img className="media-object" src={imageUrl} />
              </div>
              <div className="media-body">
                  {/*Title */}
                  <div className={"media-heading"}>
                      {video.snippet.title}
                  </div>
              </div>
          </div>
        </li>
    )
}

export default VideoListItem;