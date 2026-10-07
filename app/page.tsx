"use client";

import { useState } from "react";

const cases = [
  { img: "/kp-images/p04-00.png", title: "Личный бренд", number: "10 000", note: "подписчиков за 1 месяц через Reels" },
  { img: "/kp-images/p05-00.png", title: "Контент, который продаёт", number: "40M+", note: "тенге заработали клиенты" },
  { img: "/kp-images/p06-00.png", title: "Виральные Reels", number: "80M+", note: "просмотров на видео" },
  { img: "/kp-images/p07-00.png", title: "Эксперты и бренды", number: "+500K", note: "подписчиков для клиентов" },
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(0);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <main>
      <header className="nav">
        <button className="brand" onClick={() => scrollTo("top")} aria-label="В начало">AKZHAN<span>.</span>MX</button>
        <nav className={menu ? "open" : ""}>
          <button onClick={() => { scrollTo("about"); setMenu(false); }}>Обо мне</button>
          <button onClick={() => { scrollTo("work"); setMenu(false); }}>Кейсы</button>
          <button onClick={() => { scrollTo("contact"); setMenu(false); }}>Контакты</button>
        </nav>
        <a className="nav-cta" href="https://www.instagram.com/akzhan.mx/" target="_blank" rel="noreferrer">Instagram ↗</a>
        <button className="menu" aria-label="Открыть меню" onClick={() => setMenu(!menu)}><i></i><i></i></button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">CONTENT STRATEGIST · ALMATY / WORLDWIDE</p>
          <h1>Делаю Reels,<br/><em>которые</em> смотрят<br/>миллионы.</h1>
          <p className="intro">Акжан Максатовна — контент-продюсер и стратег. Превращаю личные бренды в медиа, которым доверяют и у которых покупают.</p>
          <div className="hero-actions">
            <button className="button coral" onClick={() => scrollTo("work")}>Смотреть кейсы <b>↓</b></button>
            <a className="text-link" href="https://wa.me/" target="_blank" rel="noreferrer">Написать в WhatsApp <span>↗</span></a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="orbit orbit-one">REELS · STRATEGY · GROWTH · REELS ·</div>
          <div className="portrait"><img src="/kp-images/p01-00.png" alt="Акжан Максатовна" /></div>
          <div className="float-card"><b>80 000 000+</b><span>просмотров</span></div>
          <div className="scroll-note">SCROLL TO DISCOVER <span>↓</span></div>
        </div>
      </section>

      <section className="marquee" aria-label="Направления работы"><div>ВИРУСНЫЙ КОНТЕНТ <span>✦</span> ЛИЧНЫЙ БРЕНД <span>✦</span> REELS-СТРАТЕГИЯ <span>✦</span> ВИРУСНЫЙ КОНТЕНТ <span>✦</span></div></section>

      <section className="about" id="about">
        <p className="eyebrow">01 / ОБО МНЕ</p>
        <div className="about-grid">
          <h2>Я создаю<br/>не просто <em>контент.</em><br/>Я создаю<br/>движение.</h2>
          <div className="about-text">
            <p>Пять лет в маркетинге, десятки крупных брендов, экспертов, блогеров и даже кино. За каждым роликом — система, эмоция и точное попадание в аудиторию.</p>
            <div className="metrics"><div><b>5</b><span>лет в маркетинге</span></div><div><b>6</b><span>успешных потоков<br/>обучения Reels</span></div><div><b>40M+</b><span>тенге принесли<br/>стратегии клиентам</span></div></div>
          </div>
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-head"><div><p className="eyebrow">02 / ВЫБРАННЫЕ КЕЙСЫ</p><h2>Цифры, за которыми<br/><em>стоит контент.</em></h2></div><p>Каждый проект — это стратегия, визуал, сценарии и работа на измеримый результат.</p></div>
        <div className="case-grid">
          {cases.map((item, index) => <button className={`case-card ${active === index ? "active" : ""}`} onClick={() => setActive(index)} key={item.title}>
            <img src={item.img} alt={item.title}/><div className="case-tint"></div><div className="case-content"><span>0{index + 1}</span><h3>{item.title}</h3><b>{item.number}</b><p>{item.note}</p><i>↗</i></div>
          </button>)}
        </div>
        <div className="client-showcase"><div><p className="eyebrow">КЛИЕНТЫ</p><h3>Эксперты, которым<br/>важен результат.</h3><a href="https://www.instagram.com/akzhan.mx/" target="_blank" rel="noreferrer">Больше проектов в Instagram ↗</a></div><img src="/kp-images/p03-00.png" alt="Клиенты Акжан" /></div>
      </section>

      <section className="contact" id="contact"><p className="eyebrow">03 / НАЧНЁМ?</p><h2>Ваш следующий<br/>миллион — <em>видео.</em></h2><p>Расскажите о задаче — соберём стратегию, которая станет следующим громким кейсом.</p><div><a className="button light" href="https://wa.me/" target="_blank" rel="noreferrer">WhatsApp <b>↗</b></a><a className="button outline" href="https://www.instagram.com/akzhan.mx/" target="_blank" rel="noreferrer">Instagram <b>↗</b></a></div></section>
      <footer><span>© 2026 AKZHAN.MX</span><a href="https://www.instagram.com/akzhan.mx/" target="_blank" rel="noreferrer">@akzhan.mx ↗</a><button onClick={() => scrollTo("top")}>НАВЕРХ ↑</button></footer>
    </main>
  );
}
