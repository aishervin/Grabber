import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎯 خوش‌آمدید به Grabber</h1>
        <p>سایت شما با Cloudflare Pages استقرار یافته است!</p>
        
        <div className="card">
          <h2>تعداد کلیک‌ها: {count}</h2>
          <button onClick={() => setCount(count + 1)}>
            کلیک کنید
          </button>
        </div>

        <div className="info">
          <h3>✨ ویژگی‌های پروژه:</h3>
          <ul>
            <li>React 18</li>
            <li>Cloudflare Pages</li>
            <li>پاسخ‌دهی خودکار</li>
            <li>اپلیکیشن تک صفحه‌ای</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
