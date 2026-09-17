'use client';

import {useEffect} from 'react';
import {visuals} from '@/src/config/visuals';

export function PortfolioMotion() {
  useEffect(() => {
    const progress = document.querySelector<HTMLElement>('[data-progress]');
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) {
        entry.target.classList.add('isVisible');
        observer.unobserve(entry.target);
      }
    }, {threshold: .25});
    if (progress) observer.observe(progress);
    const hero = document.querySelector<HTMLElement>('[data-parallax]');
    const media = matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    let frame = 0;
    const reset = () => {
      cancelAnimationFrame(frame);
      hero?.style.removeProperty('--pointer-x');
      hero?.style.removeProperty('--pointer-y');
    };
    const move = (event: PointerEvent) => {
      if (!hero || !media.matches) return;
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        hero.style.setProperty('--pointer-x', `${x * 8}px`);
        hero.style.setProperty('--pointer-y', `${y * 8}px`);
      });
    };
    hero?.addEventListener('pointermove', move);
    hero?.addEventListener('pointerleave', reset);
    media.addEventListener('change', reset);
    return () => {
      observer.disconnect();
      reset();
      hero?.removeEventListener('pointermove', move);
      hero?.removeEventListener('pointerleave', reset);
      media.removeEventListener('change', reset);
    };
  }, []);
  return null;
}

export function NeryoScreens() {
  return <div className="featuredVisual" aria-label="Бренд-концепция NERYO; реальные экраны готовятся к публикации">
    <div className="featuredOrbit"/>
    {visuals.neryoScreens.map((src, index) => <div className={`featuredPhone phone${index}`} key={index}>
      {src ? <img src={src} alt={`Реальный экран NERYO ${index + 1}`} width="240" height="460" loading="lazy"/> : <>
        <span className="phoneNotch"/>
        <small>NERYO / {index === 0 ? 'БРЕНД' : 'ПРОДУКТ'}</small>
        <b>{index === 0 ? 'N' : '◉'}</b>
        <strong>{index === 0 ? <>Встречи,<br/>а не свайпы.</> : <>Ближе<br/>к настоящему.</>}</strong>
        <span className="screenNote">Бренд-концепция<br/>Реальные экраны — скоро</span>
      </>}
    </div>)}
    <div className="productFragment"><i/>От интереса к встрече <span>→</span></div>
  </div>;
}

export function Portrait() {
  return <div className="portraitSlot">
    {visuals.portrait ? <img src={visuals.portrait} alt="Max Volkov" width="320" height="320" loading="lazy"/> : <div className="portraitBrand" aria-label="Монограмма Max Volkov"><span>MV</span><small>MAX VOLKOV</small></div>}
  </div>;
}
