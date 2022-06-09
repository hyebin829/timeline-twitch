# Timeline-twitch

스트리밍 플랫폼 Twitch 스트리머들의 방송 기록을 조회할 수 있는 서비스입니다.

배포 주소 http://ec2-3-39-122-180.ap-northeast-2.compute.amazonaws.com:3001/  

현재조회 가능한 ID : hanryang1125 , kss7749, saddummy , swab85 , zilioner

시작 화면에서 스트리머 아이디를 검색한 후, 결과 화면에서 날짜를 선택할 수 있습니다. 

---
- Frontend : typescript , react, recoil 

- Backend : javascript , express, sequelize, MySQL

- formatting : eslint, stylelint, prettier

- Production : docker , NginX

---

## 주요 기능

### 검색 , 날짜 선택

![search](https://user-images.githubusercontent.com/80376561/172764618-51011328-1f5e-4474-8eff-5f88788d9519.gif)

- 메인 화면에서 스트리머 아이디를 입력한 후 검색하면 검색한 스트리머의 당일 방송 타임라인이 조회됩니다.  
- 타임라인에는 카테고리, 방송 제목, 시작 시간이 표시됩니다.  
- 방송 제목 또는 카테고리가 바뀌면 새로운 방송으로 간주되어 타임라인에 기록됩니다.   
- 데이터를 1분 간격으로 받아와 시작 시간에는 약 1-2분의 오차가 있을 수 있습니다.   
- 달력에서 날짜를 선택하여 해당 날의 방송 타임라인을 조회할 수 있습니다.   
- 방송 데이터가 있는 날은 달력에 작은 동그라미로 표시되어 있습니다.   


### 즐겨찾기

![addfavorite2](https://user-images.githubusercontent.com/80376561/172765252-4b004550-c5d7-4988-97bc-0f65a7d830de.gif)

- 조회 결과에서 즐겨찾기 버튼을 클릭하여 즐겨찾기 목록에 추가하거나 해제할 수 있습니다. 
- 즐겨찾기 한 스트리머의 아이디를 누르면 스트리머의 당일 방송 타임라인으로 이동합니다. 
- 삭제 버튼을 눌러 목록에서 삭제할 수 있습니다.


### 다크 모드 지원

![darkmode](https://user-images.githubusercontent.com/80376561/172764645-1a9972c0-f303-4214-8df7-79556df2da24.gif)

