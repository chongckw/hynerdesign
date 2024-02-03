import { useState } from 'react';

import {Input, Row, Select } from 'antd';

export const ContactUs = () => {

  const [priceRange, setPriceRange] = useState("RM 0");

  const onChangeHouseType = (e) => {
    switch (e) {
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

      case 'Bangalow':
        setPriceRange("RM 30,000 ~ RM 38,000");
        break;
    }
  }
  return (
    <section className="contact-us container">
        <h1>Contact Us</h1>

        <Row justify={'center'}>
          <Input placeholder="Name" />
          <Input placeholder="Address" />
          <Input placeholder="Contact No." />
          <Select
            onChange={onChangeHouseType}
            placeholder="House Type"
            options={[
              {
                value: 'Condo',
                label: 'Condo',
              },
              {
                value: 'Single Storey',
                label: 'Single Storey',
              },
              {
                value: 'Double Storey',
                label: 'Double Storey',
              },
              {
                value: 'Double Storey Semi-D & Cluster',
                label: 'Double Storey Semi-D & Cluster',
              },
              {
                value: 'Triple Storey Semi-D & Cluster',
                label: 'Triple Storey Semi-D & Cluster',
              },
              {
                value: 'Bungalow',
                label: 'Bungalow',
              },
            ]}
          />
          <Input disabled placeholder='Price range' value={priceRange}/>

          <button type='button'>Submit</button>
        </Row>
    </section>
  )
}
