import { useState, useEffect } from "react";

const Form = ({ handleCountryList }) => {
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  //입력폼을 초기화시켜주는 함수
  const clearInput = () => {
    setCountry("");
    setGold(0);
    setSilver(0);
    setBronze(0);
    return;
  };

  //폼 제출시 실행
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCountry = {
      countryName: country,
      goldMedalCount: gold,
      silverMedalCount: silver,
      bronzeMedalCount: bronze,
    };
    handleCountryList.addCountry(newCountry) && clearInput();
  };

  //업데이트버튼클릭시 실행
  const handleUpdate = () => {
    const updateCountry = {
      countryName: country,
      goldMedalCount: gold,
      silverMedalCount: silver,
      bronzeMedalCount: bronze,
    };
    handleCountryList.updateCountry(updateCountry) && clearInput();
  };

  //(TIL)
  //NaN이 넘버벨류라서 오류...
  //NaN인지 판별해주는함수(Number.isNaN(gold)

  // useEffect(() => {
  //   if (Number.isNaN(silver)) setSilver(0);
  // }, [silver]);

  // useEffect(() => {
  //   if (Number.isNaN(bronze)) setBronze(0);
  // }, [bronze]);
  // //useEffect()는 외부 데이터를 동기화 할때만 사용할 것

  //(TIL)
  //input type number 사용하지말기(00001같은 숫자가 이상하게 처리됨)
  //검증하는건 js코드로 직접하기
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="country">국가명</label>
          <input
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            type="text"
            id="country"
            placeholder="국가명을 입력하세요"
          />
        </div>

        <div className="input-group">
          <label htmlFor="gold">금메달</label>
          <input
            value={gold}
            onChange={(e) => {
              if (Number.isNaN(+e.target.value) || +e.target.value < 0) {
                alert("숫자만입력");
                return;
              }
              setGold(+e.target.value);
            }}
            type="text"
            id="gold"
            placeholder="금메달 수"
          />
        </div>

        <div className="input-group">
          <label htmlFor="silver">은메달</label>
          <input
            value={silver}
            onChange={(e) => {
              if (Number.isNaN(+e.target.value) || +e.target.value < 0) {
                alert("숫자만입력");
                return;
              }
              setSilver(+e.target.value);
            }}
            type="text"
            id="silver"
            placeholder="은메달 수"
          />
        </div>

        <div className="input-group">
          <label htmlFor="bronze">동메달</label>
          <input
            value={bronze}
            onChange={(e) => {
              if (Number.isNaN(+e.target.value) || +e.target.value < 0) {
                alert("숫자만입력");
                return;
              }
              setBronze(+e.target.value);
            }}
            type="text"
            id="bronze"
            placeholder="동메달 수"
          />
        </div>

        <button type="submit" name="add">
          국가추가
        </button>
        <button type="button" onClick={handleUpdate} name="update">
          업데이트
        </button>
      </form>
    </>
  );
};

export default Form;
