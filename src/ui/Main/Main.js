import React from 'react';
import { useSelector } from 'react-redux';
import './Main.css';
import frequencyScheduler from '../../assets/files/Частотный планировщик.rar';
import regBudgetCalculator from '../../assets/files/18_04_2022_Reg budget calculator.xlsm';
import { IoCaretForwardCircleOutline, IoPieChartOutline, IoVolumeMediumOutline, IoTvOutline, IoCashOutline, IoPulseOutline } from 'react-icons/io5';

export const Main = () => {
  const isInitialized = useSelector(state => state.app.isInitialized);

  return (
    <section class="section-tools">

    <div class="container grid grid--4-cols">


              <div class="tool">
                <div class="tool-content">
                  <div class="tool-tags">
                      <IoPieChartOutline className="tool-img color--mediamix"/>                      
                  </div>
                  <div class="tool-flex">
                    <div class="tags">
                      <span class="tag tag--tv">TV</span>
                      <span class="tag tag--digital">Digital</span>
                      <span class="tag tag--radio">Radio</span>
                      <span class="tag tag--ooh">OOH</span>
                    </div> 
                  <h2 class="tool-title"><span class="redcolor">Flight Media</span> <br/>Mix Calculator</h2>
                </div>
    
                <div class="btn-flex">
                  <a href="https://mediamix.mediainstinctgroup.ru/" target={"https://mediamix.mediainstinctgroup.ru/"} class="btn-act btn--download">ПЕРЕЙТИ &rarr;</a>
                </div>
              </div>

                <div class="tool-card">
                  <p class="top-tool"><span class="just-bold">Определить <span class="bold">МЕДИАМИКС</span> на эффективной частоте для рекламной кампании</span>
                    </p> 
                  </div>
              </div>
    


    
              <div class="tool">
                <div class="tool-content">
                  <div class="tool-tags">                  
                    <IoCaretForwardCircleOutline className="tool-img color--mediamix"/>
                  </div>
                  <div class="tool-flex">
                    <div class="tags">
                      <span class="tag tag--tv">TV</span>
                      <span class="tag tag--olv">OLV</span>
                    </div>
                  <h2 class="tool-title videotron"><span class="redcolor">Video</span>
                    Tron 1.5</h2>
                  </div> 

                <div class="btn-flex">
                  <a href="https://videotron.mediainstinctgroup.ru/" target={"https://videotron.mediainstinctgroup.ru/"} class="btn-act btn--download">ПЕРЕЙТИ &rarr;</a>
                </div>
              </div>
      
                <div class="tool-card">
                  <p class="top-tool"><span class="just-bold">Определить <span class="bold">СПЛИТ OLV ПЛОЩАДОК или ДОВЕС OLV к TV</span> флайту, Охват OLV и TV&OLV  на эффективной частоте</span>
                  </p>
                </div>
              </div>


              <div class="tool">
                <div class="tool-content">
                  <div class="tool-tags">
                    <IoVolumeMediumOutline className="tool-img color--mediamix"/>                  
                  </div>
                  <div class="tool-flex">
                    <div class="tags">
                      <span class="tag tag--radio">Radio</span>
                      <span class="tag tag--digital-audio">Digital Audio</span>
                    </div>

                  <h2 class="tool-title videotron"><span class="redcolor">Audio</span>
                    Tron</h2>
                  </div>
               
                <div class="btn-flex">
                  <a href="https://audiotron.mediainstinctgroup.ru/" target={"https://audiotron.mediainstinctgroup.ru/"} class="btn-act btn--download">ПЕРЕЙТИ &rarr;</a>
                </div>
              </div>
               
                <div class="tool-card">
                  <p class="top-tool"><span class="just-bold">Определить сплит <span class="bold">DIGITAL AUDIO</span> или довес к <span class="bold">РАДИО</span> на эффективной частоте</span></p>
                </div>
              </div>



              <div class="tool">
                <div class="tool-content">
                  <div class="tool-tags">
                      <IoTvOutline className="tool-img color--mediamix"/>
                  </div>
                  <div class="tool-flex">
                    <div class="tags">
                   <span class="tag tag--tv">TV</span>
                  </div>
                  <h2 class="tool-title"><span class="redcolor">Selected</span><br/>TV Planner</h2>
                </div>
               
                <div class="btn-flex">
                  <a href="https://stage.tvplanner.mediainstinctgroup.ru/" target={"https://stage.tvplanner.mediainstinctgroup.ru/"} class="btn-act btn--download">ПЕРЕЙТИ &rarr;</a>
                </div>
              </div>
               
                <div class="tool-card">
                  <p class="top-tool"><span class="just-bold">Определить <span class="bold">ЭФФЕКТИВНЫЙ СПЛИТ КАНАЛОВ</span> на базе гранулярного планирования тайм слотов</span></p>
                </div>
              </div>
            </div>
              

           <div class="container--2 grid grid--2-cols"> 

              <div class="tool">
                <div class="tool-content">
                  <div class="tool-tags">
                      <IoCashOutline className="tool-img color--mediamix"/>                    
                  </div>
                  <div class="tool-flex">
                    <div class="tags">
                    <span class="tag tag--tv">REG TV</span>
                    <span class="tag tag--radio">REG RADIO</span>
                    <span class="tag tag--ooh">OOH</span>
                  </div>
                  <h2 class="tool-title"><span class="redcolor">Reg Budget</span><br/>Calculator</h2>
                </div>
               
                <div class="btn-flex">
                  <a href={isInitialized ? regBudgetCalculator : "#top"} class={isInitialized ? "btn-act btn--download" : "btn-act btn--disabled"}>СКАЧАТЬ &darr;</a>
                </div>
              </div>
          
                <div class="tool-card">
                  <p class="top-tool"><span class="just-bold">Оценить необходимый <span class="bold">БЮДЖЕТ РЕГ ТВ, ООН, РЕГ РАДИО</span> исходя из целей по охвату и эффективной частоты в каждом медиа для каждого региона</span></p>
                </div>
              </div>
    

              <div class="tool">
                <div class="tool-content">
                  <div class="tool-tags">
                    <IoPulseOutline className="tool-img color--mediamix"/>                    
                  </div>
    
                  <div class="tool-flex">
                    <div class="tags">
                      <span class="tag tag--tv">TV</span>
                    </div> 

                  <h2 class="tool-title"><span class="redcolor">Frequency</span> Planner</h2>
                </div>
                <div class="btn-flex">
                  <a href={isInitialized ? frequencyScheduler : "#top"} class={isInitialized ? "btn-act btn--download" : "btn-act btn--disabled"}>СКАЧАТЬ &darr;</a>
                </div>
              </div>
                <div class="for-line">
                </div>
                  <div class="tool-card">
                    <p class="top-tool"><span class="just-bold">Определить <span class="bold"><br/>ЭФФЕКТИВНУЮ ЧАСТОТУ</span> для рекламной кампании</span></p>
                </div>
              </div>

              
                </div>
              
              
          </section> 
  );
};












     