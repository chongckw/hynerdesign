import { useEffect, useRef, useState } from 'react';

import {Input, Row } from 'antd';
import emailjs from '@emailjs/browser'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { getTranslation } from '../../helper';
import { FormattedMessage } from 'react-intl';

// eslint-disable-next-line react/prop-types
export const ContactUs = ({ closeModal }) => {

  const [priceRange, setPriceRange] = useState("RM 0");
  const [loading, setLoading] = useState(false);
  const [emailed, setEmailed] = useState(false);
  const [googled, setGoogled] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();

  const onChangeHouseType = (e) => {
    switch (e.target.value) {
      case 'Condo':
        setPriceRange("RM 9,000 ~ RM 12,000");
        break;

      case 'Single Storey':
          setPriceRange("RM 12,000 ~ RM 15,000");
          break;

      case 'Double Storey':
        setPriceRange("RM 20,000 ~ RM 24,000");
        break;

      case 'Double Storey Semi-D & Cluster':
        setPriceRange("RM 25,000 ~ RM 30,000");
        break;

      case 'Triple Storey Semi-D & Cluster':
          setPriceRange("RM 28,000 ~ RM 32,000");
          break;

      case 'Bungalow':
        setPriceRange("RM 30,000 ~ RM 38,000");
        break;
      default:
        setPriceRange("RM 0");
    }
  }

  const submit = (e) => {
    const formEle = document.querySelector("form");
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(formEle);

    fetch("https://script.google.com/macros/s/AKfycbwqARBsVmGZhqWrXatnGSrx7Xqdiu3FqFD8RrhwjaPQegNSD_zBcSTn5CfcAaaTsf8/exec", {
      redirect: "follow",
      method: "POST",
      body: formData,
    }).then((response)=> {
      setGoogled(true);
    }).finally(() => {
    });

    emailjs
        .sendForm('service_fwtfbs8', 'template_q7yrsfy', form.current, {
          publicKey: 'uvlAiKD61zoDXqvid',
      })
    .then(
      () => {
        setEmailed(true);
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
  }

  useEffect(() => {
    if(googled || emailed) {
      setLoading(false);
      setSubmitted(true);
    }

  },[googled, emailed])

  return (
    <section className="contact-us">
        <h1>{getTranslation('build-your-dream-house')}</h1>
        
      {
        loading ?  <Spin
        indicator={
          <LoadingOutlined
            style={{
              fontSize: 24,
            }}
            spin
          />
        }
      /> : submitted ? 
          <h1 className='submitted-message'>{getTranslation('we-got-your-msg')} <br /><br /> {getTranslation('we-will-serve-you')}</h1>
      : 
      <form onSubmit={(e) => submit(e)} ref={form}>
          <Row justify={'center'}>
            <FormattedMessage id="name">
                {
                  placeholder => <Input placeholder={placeholder} name="Name" required/>
                }
            </FormattedMessage>
            <FormattedMessage id="address">
                {
                  placeholder => <Input placeholder={placeholder} name="Address" required/>
                }
            </FormattedMessage>
            <FormattedMessage id="contact-no">
                {
                  placeholder => <Input placeholder={placeholder} name="ContactNo" required/>
                }
            </FormattedMessage>
            <select onChange={onChangeHouseType} required name="HouseType">
              <option value=""> {getTranslation('house-type')} </option>
              <option value="Condo"> Condo </option>
              <option value="Single Storey"> Single Storey </option>
              <option value="Double Storey"> Double Storey </option>
              <option value="Double Storey Semi-D & Cluster"> Double Storey Semi-D & Cluster </option>
              <option value="Triple Storey Semi-D & Cluster"> Triple Storey Semi-D & Cluster </option>
              <option value="Bungalow"> Bungalow </option>
            </select>
            <Input disabled placeholder='Price range' value={priceRange}/>

            <button type='submit' style={{marginTop: '15px'}}>{getTranslation('submit')}</button>
          </Row>
        </form>
      }
    </section>
  )
}
