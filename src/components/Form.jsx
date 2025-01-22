import { useState } from "react";


const Form = ({ handleCountryList }) => {
  //onchane로 벨류값 받아서, 저장버튼 누르면 배열에 저장
  const handleSubmit = (e) => {
    e.preventDefault();
    handleCountryList.addCounty({
      countryName: country,
      goldMedalCount: gold,
      silverMedalCount: silver,
      bronzeMedalCount: bronze,
    })
  }

  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBonze] = useState(0);

  console.log(country, gold, silver, bronze)

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <label id="country">국가명</label>
          <input onChange={(e) => { setCountry(e.target.value) }} type="text" id="country" placeholder="한글 국가명을 입력하세요" required />
        </div>

        <div className='input-group'>
          <label id="gold">금메달</label>
          <input onChange={(e) => { setGold(e.target.value) }} type="number" id="gold" min="0" placeholder="금메달 수" required />
        </div>

        <div className='input-group'>
          <label id="silver">은메달</label>
          <input onChange={(e) => { setSilver(e.target.value) }} type="number" id="silver" min="0" placeholder="은메달 수" required />
        </div>

        <div className='input-group'>
          <label id="bronze">동메달</label>
          <input onChange={(e) => { setBonze(e.target.value) }} type="number" id="bronze" min="0" placeholder="동메달 수" required />
        </div>
        <button name="add">국가추가</button>
        <button name="update">업데이트</button>
      </form>
    </>
  )
}


export default Form;
