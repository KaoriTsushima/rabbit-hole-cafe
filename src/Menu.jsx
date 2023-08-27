import React from "react";
import Tab from 'react-bootstrap/Tab';
import { Nav } from "react-bootstrap";
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
    <div className="d-flex flex-wrap gap-4 m-4 justify-content-center">
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

    <Tab.Container defaultActiveKey="Coffee">
      <div className="d-flex flex-column mx-4 mt-5 gap-5">
        <Nav variant="pills" fill>
          <Nav.Item>
            <Nav.Link eventKey="Coffee">Coffee</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Tea">Tea</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Hot Chocolate">Hot Chocolate</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Snacks/Dessert">Snack/Dessert</Nav.Link>
          </Nav.Item>
        </Nav>
      <TagDetails/>
        <Tab.Content>
          <Tab.Pane eventKey="Coffee">
            <h3>Coffee</h3>
            <div className="d-flex align-items-center">Espresso <Tag tag={TAGS.DECAF} /></div>
          </Tab.Pane>
          <Tab.Pane eventKey="Tea">
            <h3>Tea</h3>
          </Tab.Pane>
          <Tab.Pane eventKey="Hot Chocolate">
            <h3>Hot Chocolate</h3>
          </Tab.Pane>
          <Tab.Pane eventKey="Snacks/Dessert">
            <h3>Snacks/Dessert</h3>
          </Tab.Pane>
        </Tab.Content>
      </div>
    </Tab.Container>
</div>
  )
}
