import React from 'react';
import Recipi from './component/Recipi';

const App = () => {
  return (
    <>
      <h1>タスク一覧</h1>
      <Recipi title="買い物" />
      <Recipi title="ランニング" />
      <Recipi title="プログラミングの勉強" />
    </>
  );
}

export default App;
