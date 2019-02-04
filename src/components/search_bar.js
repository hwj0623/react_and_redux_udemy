import React, {Component} from 'react';

//import {Component} == const Component = React.Component와 동일

//ES6
//클래스 기반 컴포넌트
//상태값 조정 가능.
//React의 컴포넌트를 상속받아서 render 메소드정의
class SearchBar extends Component{ //React.Component 대신
    //생성자를 통해 state 초기화
    constructor(props){
        super(props);
        //컴포넌트 내 다른곳에서 state 변경시에는 this.setState로 변경시켜야 한다.
        this.state = {term: ''};
    }

    //render 메소드 정의
    render(){
        // return <input onChange={this.handleInputChange}/>
        // 간결한 이벤트핸들러는 다음과 같이 정의도 가능
        return (
            <div className="search-bar">
                <input
                    value = {this.state.term}
                    //이벤트 핸들러에 의해 this.setState가 호출되면, 해당 컴포넌트는 다시 렌더링되며
                    //이 때, state.term이 변경되므로 인풋값(value)의 인위적인 변경 없이 자연스럽게 상태값이 변경되는 것이다.
                    // onChange={ event => this.setState({term: event.target.value})}
                    onChange={event=> this.onInputChange(event.target.value)}
                />
            </div>
        )
    }
    //onSearchTermChange과 관련된 이벤트 핸들러를 별도로 작성한다.
    onInputChange(term){
        this.setState({term}) //update term
        this.props.onSearchTermChange(term)  //put into updated term
    }
    //이벤트 등록은  onEventName={이벤트핸들러메소드} 를 추가하는 것
    //이벤트 핸들러 메소드
    // handleInputChange(event) {
    //     console.log(event.target.value);
    // }
}

//ES5
// 함수형 컴포넌트
// 상태값을 알 수 없음. 다른 컴포넌트와 소통 불가
// const SearchBar = () => {
//     return <input />    //babel으로 React.CreateElement로 변환됨
// }


export default SearchBar;
//애플리케이션의 어느곳에서도 접근가능하도록 컴포넌트 내보내기.