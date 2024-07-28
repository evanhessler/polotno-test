import { SidePanel } from "polotno/side-panel";
import React, { useState } from "react";
import {
  TextSection,
  PhotosSection,
  ElementsSection,
  UploadSection,
  BackgroundSection,
  SizeSection,
  SectionTab,
  DEFAULT_SECTIONS,
} from "polotno/side-panel";
import { observer } from "mobx-react-lite";
import { Button, InputGroup, FormGroup, Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { GiResize } from "react-icons/gi";
import FaShapes from "@meronex/icons/fa/FaShapes";
import { InformationSection, InformationTab } from "./InformationSection";

export const CustomSidePanel = (props) => {
  const backgroundUrls = [
    "https://static.vecteezy.com/system/resources/thumbnails/030/188/390/small_2x/beautiful-natural-stone-background-ai-photo.jpg",
    "https://example.com/background2.jpg",
    "https://example.com/background3.jpg",
  ];

  const AVAILABLE_SIZES = [
    { width: 500, height: 500, label: "20x20 inches" },
    { width: 1000, height: 500, label: "40x20 inches" },
    { width: 1000, height: 1000, label: "40x40 inches" },
    { width: 1500, height: 750, label: "60x30 inches" },
  ];

  const CustomSection = {
    name: "custom",
    Tab: (props) => (
      <SectionTab name="Information" {...props}>
        <FaShapes icon="new-text-box" />
      </SectionTab>
    ),
    Panel: observer(({ store }) => {
      const [person1, setPerson1] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        dob: "",
        dod: "",
      });
      const [person2, setPerson2] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        dob: "",
        dod: "",
      });

      const handleInputChange = (person, setPerson, field, value) => {
        setPerson({
          ...person,
          [field]: value,
        });
      };

      const swapPersons = () => {
        const temp = { ...person1 };
        setPerson1(person2);
        setPerson2(temp);
      };

      const isAnyPerson1FieldFilled = Object.values(person1).some(
        (value) => value !== ""
      );
      const isAnyPerson2FieldFilled = Object.values(person2).some(
        (value) => value !== ""
      );

      return (
        <div>
          <Button
            onClick={swapPersons}
            disabled={!isAnyPerson1FieldFilled || !isAnyPerson2FieldFilled}
            style={{ marginBottom: "10px" }}
            icon={<Icon icon={IconNames.EXCHANGE} />}
          >
            Switch People
          </Button>
          <h3>Person 1</h3>
          <FormGroup label="First Name">
            <InputGroup
              value={person1.firstName}
              onChange={(e) =>
                handleInputChange(
                  person1,
                  setPerson1,
                  "firstName",
                  e.target.value
                )
              }
            />
          </FormGroup>
          <FormGroup label="Middle Name">
            <InputGroup
              value={person1.middleName}
              onChange={(e) =>
                handleInputChange(
                  person1,
                  setPerson1,
                  "middleName",
                  e.target.value
                )
              }
            />
          </FormGroup>
          <FormGroup label="Last Name">
            <InputGroup
              value={person1.lastName}
              onChange={(e) =>
                handleInputChange(
                  person1,
                  setPerson1,
                  "lastName",
                  e.target.value
                )
              }
            />
          </FormGroup>
          <FormGroup label="Date of Birth">
            <InputGroup
              type="date"
              value={person1.dob}
              onChange={(e) =>
                handleInputChange(person1, setPerson1, "dob", e.target.value)
              }
            />
          </FormGroup>
          <FormGroup label="Date of Death">
            <InputGroup
              type="date"
              value={person1.dod}
              onChange={(e) =>
                handleInputChange(person1, setPerson1, "dod", e.target.value)
              }
            />
          </FormGroup>
          <h3>Person 2</h3>
          <FormGroup label="First Name">
            <InputGroup
              value={person2.firstName}
              onChange={(e) =>
                handleInputChange(
                  person2,
                  setPerson2,
                  "firstName",
                  e.target.value
                )
              }
              disabled={!isAnyPerson1FieldFilled}
            />
          </FormGroup>
          <FormGroup label="Middle Name">
            <InputGroup
              value={person2.middleName}
              onChange={(e) =>
                handleInputChange(
                  person2,
                  setPerson2,
                  "middleName",
                  e.target.value
                )
              }
              disabled={!isAnyPerson1FieldFilled}
            />
          </FormGroup>
          <FormGroup label="Last Name">
            <InputGroup
              value={person2.lastName}
              onChange={(e) =>
                handleInputChange(
                  person2,
                  setPerson2,
                  "lastName",
                  e.target.value
                )
              }
              disabled={!isAnyPerson1FieldFilled}
            />
          </FormGroup>
          <FormGroup label="Date of Birth">
            <InputGroup
              type="date"
              value={person2.dob}
              onChange={(e) =>
                handleInputChange(person2, setPerson2, "dob", e.target.value)
              }
              disabled={!isAnyPerson1FieldFilled}
            />
          </FormGroup>
          <FormGroup label="Date of Death">
            <InputGroup
              type="date"
              value={person2.dod}
              onChange={(e) =>
                handleInputChange(person2, setPerson2, "dod", e.target.value)
              }
              disabled={!isAnyPerson1FieldFilled}
            />
          </FormGroup>
        </div>
      );
    }),
  };

  const CustomBackgroundSection = {
    name: "customBackground",
    Tab: (props) => (
      <SectionTab name="Custom Background" {...props}>
        <FaShapes icon="new-text-box" />
      </SectionTab>
    ),
    Panel: observer(({ store }) => {
      const handleBackgroundSelect = (url) => {
        console.log("Selected background URL:", url);
        store.activePage?.set({
          background: url,
        });
        console.log("Updated active page:", store.activePage);
      };

      return (
        <div>
          <p>Select a custom background image:</p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {backgroundUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Background ${index + 1}`}
                style={{
                  cursor: "pointer",
                  marginBottom: "10px",
                  maxWidth: "100%",
                }}
                onClick={() => handleBackgroundSelect(url)}
              />
            ))}
          </div>
        </div>
      );
    }),
  };

  const CustomSizesPanel = {
    name: "sizes",
    Tab: (props) => (
      <SectionTab name="Sizes" {...props}>
        <GiResize icon="new-text-box" />
      </SectionTab>
    ),
    Panel: observer(({ store }) => {
      return (
        <div>
          {AVAILABLE_SIZES.map(({ width, height, label }, i) => (
            <Button
              key={i}
              style={{ width: "100%", marginBottom: "20px" }}
              onClick={() => {
                if (store.activePage) {
                  store.activePage.set({
                    width: width,
                    height: height,
                  });
                }
              }}
            >
              {label}
            </Button>
          ))}
        </div>
      );
    }),
  };

  const sections = [
    { name: "information", Tab: InformationTab, Panel: InformationSection },
    CustomBackgroundSection,
    CustomSizesPanel,
    ...DEFAULT_SECTIONS,
  ];

  return <SidePanel store={props.store} sections={sections} />;
};
