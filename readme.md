# foundark 프론트

`게임 lostark의 원하는 각인에 맞게 최적의 악세사리를 찾아주는 서비스`

- 원하는 악세사리의 각인을 맞추기위해 악세마다 각인과 특성을 계산하는 번거로움을 줄이기위해
- [사이트로 이동 loa.deokisys.xyz](http://loa.deokisys.xyz)
---


## 화면 구성

- 하브렐 계산기
  - ![하브렐계산기](https://user-images.githubusercontent.com/24247768/208651499-e143b1e6-8aa9-4728-8696-b0eca01c2228.png)

- 엘라 생성기
  - 한글을 입력하면 엘라어로 변환해줍니다.
![엘라어변환](https://user-images.githubusercontent.com/24247768/208651567-e45dc43a-f43a-4a5e-9fd3-6ca6f0b4a784.png)
  - 엘라어 타자가 존재하여 직접 클릭하여 엘라어->한글로 변환이 가능합니다.
![엘라어변환2](https://user-images.githubusercontent.com/24247768/208651788-2157c022-ffcc-4e2d-a6b4-064afdb9e810.png)

- 각인 검색
![각인검색기](https://user-images.githubusercontent.com/24247768/208651863-cd3d35c2-ed8d-4561-9448-9fa6325fb64f.png)


## 설치

### node 깔기
- nvm이라는 node버젼 관리하는거 설치하기
- [설치법](https://deokisys.github.io/%EC%9B%B9/2021/06/11/nodejs%EC%84%A4%EC%B9%98.html)

### 설치
- npm으로 필요한 설치파일 설치
```
npm install
``` 

### 환경변수
- env폴더 생성
  - .development.env와 .production.env를 생성
  - API의 IP를 추가해준다

### 실행
- webpack build하기
```
npm run build
```
- 서버 실행
```
npm start
```
