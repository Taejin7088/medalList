import { useState } from "react";


const Form = ({ handleCountryList }) => {
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBonze] = useState(0);

  //입력폼을 초기화시켜주는 함수
  const clearInput = () => {
    setCountry("")
    setGold(0)
    setSilver(0)
    setBonze(0)
  }

  //폼 제출시 실행
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCountry = {
      countryName: country,
      goldMedalCount: gold,
      silverMedalCount: silver,
      bronzeMedalCount: bronze,
    }
    handleCountryList.addCountry(newCountry) && clearInput()
  }

  //업데이트버튼클릭시 실행 
  const handleUpdate = () => {
    const updateCountry = {
      countryName: country,
      goldMedalCount: gold,
      silverMedalCount: silver,
      bronzeMedalCount: bronze,
    }
    handleCountryList.updateCountry(updateCountry) && clearInput()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <label htmlFor="country">국가명</label>
          <input value={country} onChange={(e) => { setCountry(e.target.value) }} type="text" id="country" placeholder="한글 국가명을 입력하세요" required />
        </div>

        <div className='input-group'>
          <label htmlFor="gold">금메달</label>
          <input value={gold} onChange={(e) => { setGold(e.target.value) }} type="number" id="gold" min="0" placeholder="금메달 수" required />
        </div>

        <div className='input-group'>
          <label htmlFor="silver">은메달</label>
          <input value={silver} onChange={(e) => { setSilver(e.target.value) }} type="number" id="silver" min="0" placeholder="은메달 수" required />
        </div>

        <div className='input-group'>
          <label htmlFor="bronze">동메달</label>
          <input value={bronze} onChange={(e) => { setBonze(e.target.value) }} type="number" id="bronze" min="0" placeholder="동메달 수" required />
        </div>
        <button type="submit" name="add">국가추가</button>
        <button type="button" onClick={handleUpdate} name="update">업데이트</button>
      </form >
    </>
  )
}


export default Form;
