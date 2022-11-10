import React, { useState, useEffect } from 'react';
import './Modal.css';
import { InputText } from '../InputText/InputText';
import { Select } from '../Select/Select';

export const Modal = (props) => {
  const { formActive, setFormActive } = props
  const [userNameEmpty, setUserNameEmpty] = useState (false);
  const [userEmailEmpty, setUserEmailEmpty] = useState(false);
  const [userEmailError, setUserEmailError] = useState(false);

  const onClickClose = () => {
    setFormActive(false)
  }
  const [selectedTool, setSelectedTool] = useState('')
  const onChangeTool = (newSelectedTool) => {
    setSelectedTool(newSelectedTool)
  }
  const [selectedTheme, setSelectedTheme] = useState('')
  const onChangeTheme = (newSelectedTheme) => {
    setSelectedTheme(newSelectedTheme)
  }
  const [userName, setUserName] = useState('')
  const onChangeUserName = (newName) => {
    validateName(newName);
    setUserName(newName)
  }

  const [userEmail, setUseEmail] = useState('')
  const onChangeUserEmail = (newEmail) => {
    validateEmail(newEmail);
    setUseEmail(newEmail)
  }
  const validateEmail = userAddress => {
     // eslint-disable-next-line no-useless-escape
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(userAddress === '') {
      setUserEmailEmpty(true)
    } else if (reg.test(userAddress) === false) {
      setUserEmailError(true);
      setUserEmailEmpty(false);
      return false;
    } else {
      setUserEmailError(false);
      setUserEmailEmpty(false)
    }
  };
  const validateName = userName => {
    if (userName === '') {
      setUserNameEmpty(true);
      return false;
    } else {
      setUserNameEmpty(false);
    }
  };
  const findUserEmailError = () => {
      if (userEmailEmpty) {
      return "error_text error"
      } else if (userEmailError) {
      return  "error_text ext errorEmail"
      } else {
        return "error_text"
      }
        }
  useEffect(() => {
    const selectLink = () => {
      const link = document.getElementById('hyperlink');
      const mainAddresses = selectedTheme === 'Технические вопросы, проблемы' ? `ivan.pekarchuk@mediainstinctgroup.ru` : 'Anna.Shvayko@mediainstinctgroup.ru';
      const copyAddresses = selectedTheme === 'Технические вопросы, проблемы' ? 'Igor.Ekimenkov@mediainstinctgroup.ru' : 'alexey.martynov@mediainstinctgroup.ru';
      const mailAddressTwo = selectedTheme === 'Технические вопросы, проблемы' ? `alexey.martynov@mediainstinctgroup.ru` : 'Igor.Ekimenkov@mediainstinctgroup.ru';
        
      link.href = `mailto:${mainAddresses}?subject=Имя пользователя: ${userName}; Email для обратной связи с пользователем: ${userEmail}; Инструмент: ${selectedTool}&cc=${copyAddresses}&to=${mailAddressTwo}`;
    };
    selectLink();
  }, [selectedTheme, selectedTool, userEmail, userName]);
  return (
    <>
       <div class={formActive ? "modal" : "modal hidden"}>
           <button class="btn--close-modal" onClick={onClickClose}>&times;</button>
           <h2 class="modal__header"> Написать письмо <span class="colorpink">разработчику</span></h2>
           <form id="form" class="modal__form" name="myForm" action="action.php" onsubmit="return validateForm()" method="post" >
               <label>Ваше имя</label>
               <div class={userNameEmpty ? "error_text error" : "error_text"}><InputText type="text" value={userName} onChange={onChangeUserName} /></div>
               <label>Ваш e-mail</label>
               <div class={findUserEmailError()}><InputText type="email" value={userEmail} onChange={onChangeUserEmail} /></div> 
               <label>Выберите инструмент</label>
               <Select placeholderText={'-- Инструменты --'} name={'tool'} value={selectedTool} onChange={onChangeTool} items={[ 'Flight Media Mix Calculator', 'VideoTron 1.5', 'AudioTron', 'Reg Budget Calculator', 'Frequency Planner' ]} />     
               <label>Выберите тему письма</label>
               <Select placeholderText={'-- Тема --'} name={'theme'} value={selectedTheme} onChange={onChangeTheme} items={['Технические вопросы, проблемы', 'Интерфейс: вопросы, предложения']} />
               <a id='hyperlink' href="#top" class={selectedTool === '' ||  selectedTheme === '' || userName ==='' || userEmail ===''? "btn btn--disabled btn-flex" : "btn btn--download btn-flex"}>Написать письмо</a>             
           </form>         
       </div>
       <div class={formActive ? "overlay" : "overlay hidden"}></div>
   </>
  );
};












     