import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Menu.scss';

const TAGS = {
  DECAF: { ABBREVIATION: 'D', TEXT: 'Decaf' },
  VEGETARIAN: { ABBREVIATION: 'V', TEXT: 'Vegetarian' },
  VEGAN: { ABBREVIATION: 'VE', TEXT: 'Vegan' },
  DAIRY_FREE: { ABBREVIATION: 'DF', TEXT: 'Dariy Free'},
  NUT_FREE: { ABBREVIATION: 'NF', TEXT: 'Nut Free' }
};

function TagDetails() {
  return (
    <div className="d-flex flex-wrap gap-5 mt-4 justify-content-center">
      {
        Object.entries(TAGS).map(([key, tag]) => (
          <div className="d-flex align-items-center">
            <Tag tag={tag} showDetails key={key}/>
            <div>{tag.TEXT}</div>
          </div>
        ))
      }
    </div>
  )
}

function Tag({ tag }) {
  return (
      <div className="d-flex flex-row align-items-center me-2 ms-2">
        <div className="tag-icon">{tag.ABBREVIATION}</div>
      </div>
  )
};

export default function Menu() {
  return (
    <div className="m-5">
    <h1>Menu</h1>
    <TagDetails/>
    <Tabs
    defaultActiveKey="Coffee"
    id="menu-tabs"
    className="m-5"
    justify
    variant="pills"
    style={{ fontSize: '1.2rem'}}
  >
    <Tab eventKey="Coffee" title="Coffee">
      <h3>Coffee</h3>
      <div className="d-flex align-items-center">Espresso <Tag tag={TAGS.DECAF} /></div>
    </Tab>
    <Tab eventKey="Tea" title="Tea">
      <h3>Tea</h3>
    </Tab>
    <Tab eventKey="Hot Chocolate" title="Hot Chocolate">
    <h3>Hot Chocolate</h3>
    </Tab>
    <Tab eventKey="Snacks/Dessert" title="Snacks/Dessert">
      <h3>Snacks/Dessert</h3>
    </Tab>
  </Tabs>
  </div>
  )
}
