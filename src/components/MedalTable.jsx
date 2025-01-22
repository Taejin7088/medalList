
//정보가 추가되면 이 객체 베열에서 요소 추가되면됨
function Table({ countryList, handleCountryList }) {
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
        {/* tbody가 렌더링되면 될듯요 */}
        <tbody>
          {renderTableRows(countryList, handleCountryList)}
        </tbody>
      </table>
    </>
  )
}


const renderTableRows = (countryList, handleCountryList) => {
  return countryList.map((country) => {
    return (
      <tr key={country.countryName}>
        <td> {country.countryName}</td>
        <td>{country.goldMedalCount}</td>
        <td>{country.silverMedalCount}</td>
        <td>{country.bronzeMedalCount}</td>
        <td><button onClick={() => { handleCountryList.removeCounty(country.countryName) }}>삭제</button></td>
      </tr>
    )
  })
}



export default Table;