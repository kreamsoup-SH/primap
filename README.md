PRIMAP
===
Korea Prichan Arcade Map
---
### 업데이트 중단됨. 2022년6월이후의 정보가 반영되어있지 않습니다.   
### 지역정보 업데이트 과정이 비효율적이라고 판단되어 차후 작동방식을 완전히 바꿔 다시 만들예정...이지만 할지는 모름,,   
### ~~시한부인생 프리채널 아케이드의 위치를 나타내주는 지도입니다.~~   
### ~~1.21버전입니다. 전국의 모든 위치정보가 반영되어있습니다.~~   
### ~~현재 위치 보기 기능이 추가되었습니다. (1.1x -> 1.2x)~~   
   
## :point_right: [<PRIMAP홈페이지로>](https://kreamsoup-sh.github.io/primap/) :point_left:   
:bulb: 사용법 :bulb:
- 위 페이지주소로 접속후 지도 이용.   
- 우측 아래의 현재위치 보기 버튼 클릭시 현재 위치가 맵에 표시됨.
- 마커 클릭시 해당장소의 이름이 담긴 팝업 표시됨.
- 팝업의 장소명을 클릭시 해당 장소정보가 카카오맵으로 열림.   
- [공식홈페이지](https://www.pri-ch.com/pages/설치장소)의 리스트를 바탕으로하며 [우리동네프리채널](https://blog.naver.com/PostList.naver?blogId=prichannel&from=postList&categoryNo=16) 신규 포스트에 따라 장소를 업데이트중입니다.   
- 직접 설치현황을 실제로 확인하는건 현실적으로 불가능하므로 **실제 상황과 다른 정보가 있을수있습니다.**   
- **!!!실제 상황과 다른 정보가 있을수있습니다.!!!**   
      
> ## 지원 지역 목록   
> - :o: 서울, 인천, 경기, 부산, 세종, 대전, 대구, 울산, 광주, 제주, 충남, 충북, 강원, 전북, 경남, 전남   
> - :x: x   
>   
> [프리채널 공식홈페이지-설치장소](https://www.pri-ch.com/pages/설치장소)   
> [우리동네프리채널](https://blog.naver.com/PostList.naver?blogId=prichannel&from=postList&categoryNo=16)   
> [설치장소리스트 구글시트](https://docs.google.com/spreadsheets/d/1ykRN37NTBEiTTfkTME0LTriJMuhhCFsEMg6a7qgxebo/edit?usp=sharing)   
> 
> 우리동네프리채널 블로그 포스팅을 보고 위치정보 업데이트중입니다.   
> 가끔 생각날때마다 하는거라 정보 반영이 늦을수도 있습니다.   
> ![icon_16](https://user-images.githubusercontent.com/60608787/164990278-6bd265f7-3c3a-47ca-b766-5517e86d5af1.png)   
   
잘못된 정보,누락된 정보 수정요청은 댓글이나 메일로 연락   
contact : <alexalex225225@icloud.com>   


내용물은 대충 이렇게 생김   

<img src="https://user-images.githubusercontent.com/60608787/164986175-b1d2c23b-5369-4147-9bf7-d9c802e6f823.png" width="70%">

**구버전(ver 1.10과 그 이전) 설명사진입니다. 사실상 현재 기능은 별거 없으니 모양 이렇게 생겼다 정도만 참고해주세요.**
   
   
   
---
   
> ## To do list   
> 아마 안할거같은 ToDoList   
> + 장소 검색기능 추가하기.(원하는 지역별 설치현황을 보고싶을때 사용가능하도록)   
> + ~~update locations~~   
>   - ~~*locations_{City}_addressonly.csv* -> convert to *locations.js* by *csvtojson.py*~~   
>   - ~~City : 서울, 경기, 인천 ...~~     
> + ~~connect .cvs to "script.js"-{markers[]}~~  
> + ~~**change API 要請方式**~~   
> + ~~**add "find my position"**~~   
> + ~~update unsupported location data~~    
> + security update (hide key)   
> + reconstruct js code so as to make map lighter   
> + make user comment page. This may help update prichan-informations.   
> + make page more **pretty**   
> + error handling code   
> ...   
> ~~위치 데이터(주소,좌표,.etc)를 로컬에 저장시켜야할듯.<-이용약관 위반인지 확인해야함~~   
> ~~DB저장불가능...ㅠㅠ 현재(ver.1.10)보다 나은 방식이 없나 찾는중.~~   
> ![icon_16](https://user-images.githubusercontent.com/60608787/164990278-6bd265f7-3c3a-47ca-b766-5517e86d5af1.png)   
   
   
---
> 업데이트 기록   
> ver.1.01 서울, 인천 위치 데이터만으로 첫 게시   
> ver.1.02 경기, 부산 위치 데이터 추가   
> ver.1.03 세종, 대전, 대구, 울산, 광주, 제주 위치데이터 추가   
> ver.1.10 충남, 충북, 강원, 전북, 경남, 전남 위치데이터 추가 (전국의 위치정보 추가완료)   
> ver.1.11 작동방식 변경. 마커 클릭시 장소명이 팝업, 텍스트 클릭시 해당 장소의 카카오맵으로 이동   
> ver.1.20 현재위치보기 기능 추가   
> ver.1.21 "이마트 상봉점" 추가   
> ver.1.21.01 "홈플러스 청주점" 추가   
> ver.1.21.02 "영풍문고 신림포도몰점" 추가   
> ver.1.21.03 "가챠샵 언양점", "GS25 인천공항교통센터점" 추가, "GS25 수원행리단길점" 삭제   
   
---
내가 보려고 만드는 프리챤 지도다조   
<img src="https://user-images.githubusercontent.com/60608787/164990147-a84d24bf-0e28-4ea1-80b1-ecdf69ca382e.png">
