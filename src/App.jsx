import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <main>
        <h1>2024 파리 올림픽</h1>
        <section>
          <form action="/submit">
            <div className='input-group'>
              <label id="country">국가명</label>
              <input type="text" id="country" name="country" placeholder="한글 국가명을 입력하세요" required />
            </div>

            <div className='input-group'>
              <label id="gold">금메달</label>
              <input type="number" id="gold" name="gold" min="0" placeholder="금메달 수" required />
            </div>

            <div className='input-group'>
              <label id="silver">은메달</label>
              <input type="number" id="silver" name="silver" min="0" placeholder="은메달 수" required />
            </div>

            <div className='input-group'>
              <label id="bronze">동메달</label>
              <input type="number" id="bronze" name="bronze" min="0" placeholder="동메달 수" required />
            </div>
            <button type="submit">국가추가</button>
            <button type="submit">업데이트</button>
          </form>
        </section >

        <section>
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
              <tr>
                <td>한국</td>
                <td>10</td>
                <td>8</td>
                <td>8</td>
                <button>삭제</button>
              </tr>
              <tr>
                <td>한국</td>
                <td>10</td>
                <td>8</td>
                <td>8</td>
                <button>삭제</button>
              </tr>
              <tr>
                <td>한국</td>
                <td>10</td>
                <td>8</td>
                <td>8</td>
                <button>삭제</button>
              </tr>
              <tr>
                <td>한국</td>
                <td>10</td>
                <td>8</td>
                <td>8</td>
                <button>삭제</button>
              </tr>
              <tr>
                <td>한국</td>
                <td>10</td>
                <td>8</td>
                <td>8</td>
                <button>삭제</button>
              </tr>
              <tr>
                <td>한국</td>
                <td>10</td>
                <td>8</td>
                <td>8</td>
                <button>삭제</button>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>

  )
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