import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Table from './components/MedalTable.jsx'
import Form from './components/Form.jsx'
import { } from './components/localStorageUtils.js'
import './App.css'
import { ssrModuleExportsKey } from 'vite/module-runner'



function App() {
  //처음 컨트리 리스트가 선언될때 로컬스토리지에서 읽어온값으로 선언되면 될듯요
  //업데이트 되거나 삭제되거나 추가될때 로컬스토리지를 조작하는 로직 같이 실행!
  const [sortOption, setSortOption] = useState("goldMedal")
  const [countryList, setConList] = useState([
    {
      countryName: "한국",
      goldMedalCount: 10,
      silverMedalCount: 10,
      bronzeMedalCount: 30,
    },
    {
      countryName: "중국",
      goldMedalCount: 3,
      silverMedalCount: 10,
      bronzeMedalCount: 30,
    },
    {
      countryName: "일본",
      goldMedalCount: 7,
      silverMedalCount: 10,
      bronzeMedalCount: 30,
    }
  ])


  const handleCountryList = {
    isCountryInList: (targetCountryName) => {
      return countryList.some((county) => county.countryName === targetCountryName)
    },

    sortByMedal: (conlist) => {
      switch (sortOption) {
        case 'goldMedal':
          conlist.sort((a, b) => {
            return b.goldMedalCount - a.goldMedalCount
          })
          break;
        case 'totalMedal':
          conlist.sort((a, b) => {
            return (b.goldMedalCount + b.silverMedalCount + b.bronzeMedalCount) - (a.goldMedalCount + a.silverMedalCount + a.bronzeMedalCount)
          })
          break;
      }
    },


    addCountry: (newCountry) => {
      if (handleCountryList.isCountryInList(newCountry.countryName)) {
        alert("포함 되어있는 나라")
        return false;
      }
      const newConList = [...countryList, newCountry]
      handleCountryList.sortByMedal(newConList)
      setConList(newConList)
      alert("추가완료")
      return true;
    },


    removeCountry: (targetCountryName) => {
      setConList(countryList.filter((country) => {
        return country.countryName !== targetCountryName;
      }))
    },


    updateCountry: (targetCountry) => {
      if (!handleCountryList.isCountryInList(targetCountry.countryName)) {
        alert("포함 되어있지 않은 나라")
        return false;
      }
      const updateConList = countryList.map(country => {
        if (country.countryName !== targetCountry.countryName) { return country }
        return {
          countryName: targetCountry.countryName,
          goldMedalCount: targetCountry.goldMedalCount,
          silverMedalCount: targetCountry.silverMedalCount,
          bronzeMedalCount: targetCountry.bronzeMedalCount,
        }
      })
      handleCountryList.sortByMedal(updateConList)
      setConList(updateConList)
      alert("변경완료")
      return true;
    }
  }

  useEffect(() => {
    const countriesListToSort = [...countryList]
    handleCountryList.sortByMedal(countriesListToSort)
    setConList(countriesListToSort)
  }, [sortOption])

  //로컬스토리지 저장(처음 도시리스트 선언할때 읽어와서 초기화)
  //도시 리스트 바뀔때마다 로컬스토리지에 써주기(useEffect()쓰면될듯)
  return (
    <>
      <main>
        <h1>2024 파리 올림픽</h1>
        {/* {입력폼섹션} */}
        <section>
          <div>
            <label htmlFor="sortByGold">금메달 수 정렬</label>
            <input type="radio" id="sortByGold" name="SortOption" onChange={() => {
              setSortOption("goldMedal")

            }} />
            <label htmlFor="sortByTotal">총메달 수 정렬</label>
            <input type="radio" id="sortByTotal" name="SortOption" onChange={() => {
              setSortOption("totalMedal")
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
  // 서밋버튼 누르면 국가명, 금메달,은베달, 동메달 객체저장
}

export default App


//로컬에서 업데이트하기 인데
//지금은 conlist를 여기에서 불러움
//그럼 여기서 불러온느 conlist를 로컬에서 불러와서 가공하면 될듯
//그럼 그냥 편하게 변수 사용하던 위치는 그대로 두고, 그냥 변경이 일어나면 동기화만 해주는 로직 작성하면 될듯이요!
//페이지가 처음로딩되거나