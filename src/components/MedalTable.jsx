
//정보가 추가되면 이 객체 베열에서 요소 추가되면됨
function Table({ countryList, handleCountryList }) {
  //countryList에 아무것도 없으면 테이블 출력안함
  if (countryList.length === 0) return <></>
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>국가명</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
            <th>액션</th>
          </tr>
        </thead>
        <tbody>
          {renderTableRows(countryList, handleCountryList)}
        </tbody>
      </table>
    </>
  )
}

//countryList를 기준으로 tbody부분의 tr생성
const renderTableRows = (countryList, handleCountryList) => {
  return countryList.map((country) => {
    return (
      <tr key={country.countryName}>
        <td>{country.countryName}</td>
        <td>{country.goldMedalCount}</td>
        <td>{country.silverMedalCount}</td>
        <td>{country.bronzeMedalCount}</td>
        <td><button onClick={() => { handleCountryList.removeCountry(country.countryName) }}>삭제</button></td>
      </tr>
    )
  })
}



export default Table;