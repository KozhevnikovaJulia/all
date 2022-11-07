import React from 'react';
import './Hero.css';
import logo from '../../assets/images/Logo.png';

export const Hero = () => {
  return (
    <div class="hero">
        <div class="flex-hero">
            <div class="logo--text">
                <img class="logo" alt="MI logo" src={logo} />
                <div class="hero-text">
                    <h1 class="hero--mi">
                      <p class="strok-1">Инструменты <span class="mi--magic">Media Instinct Group</span></p>
                      <p class="stroke-2">под различные типы задач</p>
                    </h1>
                </div>
            </div>      
            <p class="advice"> Для перехода на страницы софтов или скачивания инструментов необходим <span class="bold">включенный корпоративный VPN</span></p>
        </div>
    </div>
  );
};
