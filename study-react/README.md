# React를 사용하는 이유?

### 1. 재사용 가능한 Component 기반의 UI 라이브러리이기 때문이다.

### 2. 명령형 프로그래밍이 아닌 선언형 프로그래밍을 사용한다.

&nbsp;&nbsp;&nbsp;**i. 명령형 프로그래밍:** 절차를 모두 나열하는 방식 ex) jQuery<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;① 결과를 표시할 요소를 가져온다.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;② 현재 결과값을 10진수 기준, 숫자형으로 변환해서 가져와 상수에 저장한다.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;③ 상수에 저장된 값에  다시+1 혹은 -1 한 결과값을 넣는다. <br/>
<br/>

&nbsp;&nbsp;&nbsp;**ii. 선언형 프로그래밍:** 목적을 바로 말하는 방식 ex) React<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;① +를 누르면 결과값에 +1을, -를 누르면 결과값에 -1을 한다.


### 3. Virtual DOM을 사용한다.
브라우저가 HTML을 해석하여 실제로 사용하는 객체를 DOM(Document Object Model)이라고 하는데,<br/>
엘리먼트가 추가되고 삭제될 때마다 업데이트가 되고 업데이트가 잦은 경우 성능 저하로 이어질 수 있다.<br/>
<br/>
반면, React를 사용할 경우 실제 DOM이 아닌 Virtual DOM, 즉 가상의 DOM에 변화된 요소를 업데이트 시켜보고<br/>
달라진 부분만을 연산하여 한 번에 실제 DOM에 반영하게 된다. 여기서 가상의 DOM에 변화된 요소를 업데이트<br/>
시킬 때는 실제로 그리는 것이 아니기 때문에 그만큼의 **연산을 절약할 수 있게 되고, 불필요한 잦은 업데이트를 방지**할 수 있다.<br/>
