import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Table from './components/MedalTable.jsx'
import Form from './components/Form.jsx'
import './App.css'


function App() {

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

    addCounty: (newCountry) => {
      setConList([...countryList, newCountry])
    },


    removeCounty: (targetCountryName) => {
      alert("삭제테스트")
      setConList(countryList.filter((country) => {
        return country.countryName !== targetCountryName;
      }))
    },
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