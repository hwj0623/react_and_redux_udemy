/**
 * create a new component . This component should produce
 * some HTML
 *
 * REACT, please put component that I made into the DOM
 * Take this component's generated HTML and put it on the page ( in the DOM )
 * const, like final when initialization done then never changed.
 * JSX 는 리액트의 부분적인 템플릿 혹은 변형 자바스크립트. 자바스크립트 안에 HTML 과 같은 코드 작성 가능
 * 실제 HTML로 변환되어 DOM에 삽입된다.
 * 궁극적으로 자바스크립트를 HTML로 만들기 위해서 사용.
 */
import _ from 'lodash';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import API_KEY from '../setting/setting.js';
//API KEY는 gitignore 파일에 세팅해서 임포트 할 것




/**ES6, () => 는 function()과 같다.
//다만, 함수 내의 this 가 가리키는 것에 차이 존재
//state 컨셉이 존재하지 않으면 함수형 컴포넌트도 무관
//함수형 컴포넌트는 어떤 정보와 JSX로 분리될 때 주로 이용
//함수형 컴포넌트는 클래스 기반 컴포넌트를 지닐 수 있다.
 const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}
 */
class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            videos : [],
            selectedVideo : null
        }

        this.videoSearch('lunar revel 2019')
    }
    //검색 함수
    videoSearch(term){

        YTSearch({key:API_KEY, term: term},  (videos) => {
            this.setState({
                videos: videos,
                selectedVideo : videos[0]
            }); //{videos:videos}

        })
    }
    render(){
        {/** lodash 모듈의 debounce 함수를 통해 검색어의 조회 시기를 조절한다
             이후에는 debounce로 정의된 videoSearch를 호출하도록 한다. */}
        const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300)

        return (
            <div>
                {/** SearchBar 컴포넌트에 onSearchTermChange 프로퍼티로 term 을 전달하여
                     videoSearch를 호출하도록 만든다.*/}
                {/*<SearchBar onSearchTermChange={term => this.videoSearch(term)}/>*/}

                <SearchBar onSearchTermChange={videoSearch}/>
                {/** undefined error handling 해야 한다
                 리액트는 위의 YTSearch로부터 데이터를 모두 다 로딩하지 않더라도
                 즉시 return 구문의 내용을 렌더링 할 것인데, 이때, this.state.videos가
                 아직 데이터가 없는 상태여서 문제가 생길 수 있다.
                 ==> 해당 컴포넌트에서 체크사항을 추가해야 함*/}
                 <VideoDetail video={this.state.selectedVideo} />
                {/** App에서 VideoList로
                 전달하는 데이터는 props를 참조하게 된다. */}
                {/** onVideoSelect 이벤트를 통해 selectedVideo의 상태를 변경시켜준다. */}
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos} />

            </div>
        )
    }
}


//ReactDom.render 파라미터로 1.HTML Element, 2.HTML Element 삽입 위치 전달
ReactDom.render(<App />, document.querySelector('.container'))