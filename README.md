# react-native-hello-json
tutorial for api json call.

dev env is window 7(64bit. I know, it's old and annoying in dev apps.), atom editor, android avd.

리액트 네이티브 API 호출 연습용 프로젝트입니다.


## Used/referenced
사용한 툴이나 도움이 많이 된 사이트를 모았습니다.

+ rnpm (react package manager), https://github.com/rnpm/rnpm
+ React native, https://facebook.github.io/react-native/
+ React tutorial korean, https://www.gitbook.com/book/g6ling/react-native-tutorial-korean
+ React native router flux, https://github.com/aksonov/react-native-router-flux
+ React Native Doc(0.19), fetching data, http://facebook.github.io/react-native/releases/0.19/docs/tutorial.html
+ React Native Doc(0.40), Networking, http://facebook.github.io/react-native/releases/0.40/docs/network.html
+ Ionic Ionicon, http://ionicframework.com/docs/v2/ionicons/
+ Genymotion, https://www.genymotion.com/

## Note
<p align="center">
    <img src ="https://github.com/Lenir/react-native-hello-json/blob/master/starwarsAPI.png" width="300"/>
    <img src ="https://github.com/Lenir/react-native-hello-json/blob/master/starwarsAPI2.png" width="300"/>


</p>
<p align="center">
looks like this. hmmmm..
</p>




## Issues
I want 'fetchData' operates only when i clicked 'search' button, but it doesn't. it operates continuously. I fixed this issue by correcting arrow function ( () =>). I do not wrote onPress function with arrow function, that causes issue. i fixed it.
