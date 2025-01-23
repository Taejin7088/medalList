import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Table from './components/MedalTable.jsx'
import Form from './components/Form.jsx'
import './App.css'
import { ssrModuleExportsKey } from 'vite/module-runner'



function App() {
  //처음 랜더링 될 때 로컬스토리지에 있는 0번째의 밸류(배열)를 가져옴
  const countryListInLocalStorage = JSON.parse(window.localStorage.getItem(0))
  const [countryList, setConList] = useState(countryListInLocalStorage)


  //conutryList를 조작하는 함수들
  const handleCountryList = {
    //conutryList에 해당 국가가 있는지 국가명을 기준으로 판별(boolean값 리턴)
    isCountryInList: (targetCountryName) => {
      return countryList.some((county) => county.countryName === targetCountryName)
    },

    //체크되어있는 정렬옵션 기준으로 입력된 배열 정렬실행(리턴값없음)
    sortByMedal: (conlist) => {
      switch (sortOption) {
        case 'goldMedal':
          conlist.sort((a, b) => {
            return Number(b.goldMedalCount) - Number(a.goldMedalCount)
          })
          break;
        case 'totalMedal':
          conlist.sort((a, b) => {
            return (Number(b.goldMedalCount) + Number(b.silverMedalCount) + Number(b.bronzeMedalCount)) - (Number(a.goldMedalCount) + Number(a.silverMedalCount) + Number(a.bronzeMedalCount))
          })
          break;
      }
    },

    //입력된 국가객체를 conuntrylist에 추가
    //이미 있는 국가면 false리턴
    addCountry: (newCountry) => {
      if (handleCountryList.isCountryInList(newCountry.countryName)) {
        alert("포함 되어있는 나라")
        return false;
      }
      const tempConList = [...countryList, newCountry]
      handleCountryList.sortByMedal(tempConList)
      setConList(newConList)
      alert("추가완료")
      return true;
    },

    //입력된 나라이름을 기준으로 conuntrylist에서 삭제
    removeCountry: (targetCountryName) => {
      setConList(countryList.filter((country) => {
        return country.countryName !== targetCountryName;
      }))
    },

    //입력된 국가객체와 똑같은 이름의 국가가 있으면 해당 국가에 해당하는 객체 변경
    //없는 국가면 false리턴
    updateCountry: (targetCountry) => {
      if (!handleCountryList.isCountryInList(targetCountry.countryName)) {
        alert("포함 되어있지 않은 나라")
        return false;
      }
      const tempConList = countryList.map(country => {
        if (country.countryName !== targetCountry.countryName) { return country }
        return {
          countryName: targetCountry.countryName,
          goldMedalCount: targetCountry.goldMedalCount,
          silverMedalCount: targetCountry.silverMedalCount,
          bronzeMedalCount: targetCountry.bronzeMedalCount,
        }
      })
      handleCountryList.sortByMedal(tempConList)
      setConList(tempConList)
      alert("변경완료")
      return true;
    }
  }

  //정렬옵션을 바꾸면 해당 옵션에 맞게 정렬실행
  let sortOption = "goldMedal"
  const handleSortOption = (option) => {
    sortOption = option
    const tempConList = [...countryList]
    handleCountryList.sortByMedal(tempConList)
    setConList(tempConList)
  }

  //countryList의 상태가 변경될 때 실행,(처음 렌더링될때도실행(안중요)) 
  //로컬스토리지에 문자열로 파싱해서 저장
  useEffect(() => {
    window.localStorage.setItem(0, JSON.stringify(countryList));
  }, [countryList]);

  return (
    <>
      <main>
        <h1>2024 파리 올림픽</h1>
        {/* {입력폼섹션} */}
        <section>
          <div className='sort-options'>
            <label htmlFor="sortByGold">금메달 수 정렬</label>
            <input defaultChecked={true} type="radio" name="SortOption" onChange={() => {
              handleSortOption("goldMedal")
            }} />
            <label htmlFor="sortByTotal">총메달 수 정렬</label>
            <input type="radio" name="SortOption" onChange={() => {
              handleSortOption("totalMedal")
            }} />
          </div>
          <Form handleCountryList={handleCountryList} />
        </section >

        {/* {테이블섹션} */}
        <section>
          <Table countryList={countryList} handleCountryList={handleCountryList} />
        </section>
      </main>
    </>
  )
}

export default App
