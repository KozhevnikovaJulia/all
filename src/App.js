import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { Modal } from './ui/Modal/Modal';
import { Letter } from './ui/Letter/Letter';
import { Hero } from './ui/Hero/Hero';
import { Main } from './ui/Main/Main';
import { getStartIp } from './bll/app_reducer';

export const App = () => {
  const [formActive, setFormActive] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStartIp());
  }, [dispatch]);
  return (
   <>
    
    <Letter setFormActive={setFormActive}/>
    <Hero/>
    <main>
      <Modal formActive={formActive} setFormActive={setFormActive}/>
      <Main/>
    </main>
   
   </>

  );
};
