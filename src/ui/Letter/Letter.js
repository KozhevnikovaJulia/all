import React from 'react';
import './Letter.css';
import { AiOutlineMessage } from 'react-icons/ai';


export const Letter = (props) => {
  const { setFormActive  } = props
  return (
    <div class="letter-tool">
        <p class="letter">Написать <br/>разработчику</p>
        <a href="#top" class="btn--letter btn--show-modal" style={{ color: '#4f5052', display: 'flex', alignItems: 'center', justifyContent: 'center'}} onClick={()=> {setFormActive(true)}}>
        <AiOutlineMessage style={{width:"3rem", height:"3rem"}}/>       
        </a>
    </div>
  );
};