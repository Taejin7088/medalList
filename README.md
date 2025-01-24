
# 국가별 메달 CRUD

국가명을 기준으로 금,은,동메달 수를 확인, 추가, 수정, 삭제할 수 있으며 금메달,총메달 수로 정렬 할 수 있는 리엑트프로젝트입니다.




# 페이지 소개
![App Screenshot](https://velog.velcdn.com/images/taejin7088/post/bd94291e-3d51-499e-98e3-331be640646e/image.png)
![App Screenshot](https://velog.velcdn.com/images/taejin7088/post/57cb3ec0-36e4-49df-a2d6-6cb1a26c324d/image.png)

### 1. CRUD
국가명을 기준으로 금,은,동메달 수를 확인, 추가, 수정, 삭제

- 국가추가 : 국가가 포함되어 있으면 '포함되어있는나라' 알람이 뜨고 추가 방지
- 업데이트 : 국가가 포함되어 있지 않으면 '포함되어있지않은나라' 알람이 뜨고 업데이트 방지

### 2. 정렬
금메달 수, 총메달 수를 선택하여 많은 순서대로 정렬, 정렬 옵션 변경을하면 표시 테이블 재정렬

- 금메달 수 정렬 : 금메달수를 기준으로 정렬
- 총메달 수 정렬 : 금,은,동 메달의 합계를 계산하여 정렬

### 3. 국가 리스트 저장소
로컬스토리지를 활용하여 페이지 새로고침후에도 저장된 정보 유지

# 설치방법
```
 1. 리포지토리 클론
   # git clone https://github.com/username/project-name.git
2. 의존성 설치
   # yarn install
3. 개발 서버 실행
   # yarn dev
```


    
# **프로젝트 상세**

### 컴포넌트 설명

- App.jsx  
    Form.jsx,MedalTable.jsx 의 상위요소로 국가리스트의 상태를 관리하는 코드가 작성되어 있음, 정렬하는 옵션을 선택하는 버튼의 input폼도 포함되어있음

- Form.jsx  
    입력하는 폼이 작성되어있음, 폼이 입력,업데이트 되면 부모요소의 메서드를 활용하며 국가리스트 State 업데이트

- MedalTable.jsx  
    출력을 담당하는 Table이 작성되어있음, countryList State가 업데이트될때마다 리렌더링하여 테이블 출력, 삭제는 부모요소의 메서드를 활용하여 삭제버튼클릭시 해당 국가 삭제

### 로컬스토리지 사용 설명
- 국가객체가 있는 배열을 문자열로 파싱해서 저장 (키 값:0)
- 페이지가 로딩될때 로컬스토리지에서 읽어옴  
```
const countryListInLocalStorage = JSON.parse(window.localStorage.getItem(0))
const [countryList, setConList] = useState(countryListInLocalStorage)
```
- countryList State의 업데이트가 있을때마다 로컬스토리지 업데이트
```
 useEffect(() => {
    window.localStorage.setItem(0, JSON.stringify(countryList));
  }, [countryList]);
```

### countryList 조작 함수 모음
- App.jsx : handleCountryLis{}

        - addCountry : 들어온 국가객체를 countryList에 저장(리턴값 boolean)  
        - removeCountry : 들어온 국가이름을 기준 countryList에서 삭제(리턴값 X)  
        - updateCountry : 들어온 국가이름을 비교해서 겹치는게있으면 countryList 업데이트(리턴값boolean)
        - sortByMedal : 들어온 국가리스트를 옵션에 따라 정렬(리턴값 X)  
        - isCountryInList : 해당 국가 이름이 있는지 countryList에서 검색(리턴값boolean)




#### Tech Stack : **React**


