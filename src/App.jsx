import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Table from './components/MedalTable.jsx'
import Form from './components/Form.jsx'
import './App.css'
import { ssrModuleExportsKey } from 'vite/module-runner'


function App() {
  //처음 컨트리 리스트가 선언될때 로컬스토리지에서 읽어온값으로 선언되면 될듯요
  //업데이트 되거나 삭제되거나 추가될때 로컬스토리지를 조작하는 로직 같이 실행!
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
      //countryList 배열에 해당 이름을 가진 객체가 있으면 True를 반환
      return countryList.some((county) => county.countryName === targetCountryName)
    },

    addCountry: (newCountry) => {
      if (handleCountryList.isCountryInList(newCountry.countryName)) {
        alert("포함되어있는 도시")
        return;
      }
      setConList([...countryList, newCountry])
    },

    removeCountry: (targetCountryName) => {
      setConList(countryList.filter((country) => {
        return country.countryName !== targetCountryName;
      }))
    },

    updateCountry: (country) => {
      if (!handleCountryList.isCountryInList(country.countryName)) {
        alert("포함안된 도시")
        return;
        //해당하는값이 없으면 리턴하고 종료 있으면 false값 넘어오면 ! 이프문 실행
        //이프문 넘어오면 도시 이름 기준 필터해서 세로운 배열 만들어서 set해주기
      }

    }
  }

  return (
    <>
      <main>
        <h1>2024 파리 올림픽</h1>

        {/* {입력폼섹션} */}
        <section>
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

{/* <div className="card">
<button onClick={() => setCount((count) => count + 1)}>
  count is {count}
</button>
<p>
  Edit <code>src/App.jsx</code> and save to test HMR
</p>
</div>
<p className="read-the-docs">
Click on the Vite and React logos to learn more
</p> */}