import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { FormGroup, InputGroup, Button, Icon } from "@blueprintjs/core";
import { SectionTab } from "polotno/side-panel";
import FaShapes from "@meronex/icons/fa/FaShapes";
import { FaUser } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { TbSwitch2 } from "react-icons/tb";

export const InformationSection = observer(({ store }) => {
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
  const [showSecondPerson, setShowSecondPerson] = useState(false);

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

  const toggleSecondPerson = () => {
    setShowSecondPerson(!showSecondPerson);
  };

  return (
    <div>
      <div className="button-container">
        <Button
          onClick={toggleSecondPerson}
          icon={showSecondPerson ? <FaUser /> : <BsPeopleFill />}
        >
          {showSecondPerson ? "Hide Second Person" : "Show Second Person"}
        </Button>
        <Button
          onClick={swapPersons}
          disabled={!showSecondPerson}
          icon={<TbSwitch2 />}
        >
          Swap People
        </Button>
      </div>
      <h3>Person 1</h3>
      <FormGroup label="First Name">
        <InputGroup
          value={person1.firstName}
          onChange={(e) =>
            handleInputChange(person1, setPerson1, "firstName", e.target.value)
          }
        />
      </FormGroup>
      <FormGroup label="Middle Name">
        <InputGroup
          value={person1.middleName}
          onChange={(e) =>
            handleInputChange(person1, setPerson1, "middleName", e.target.value)
          }
        />
      </FormGroup>
      <FormGroup label="Last Name">
        <InputGroup
          value={person1.lastName}
          onChange={(e) =>
            handleInputChange(person1, setPerson1, "lastName", e.target.value)
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
      {showSecondPerson && (
        <>
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
            />
          </FormGroup>
          <FormGroup label="Date of Birth">
            <InputGroup
              type="date"
              value={person2.dob}
              onChange={(e) =>
                handleInputChange(person2, setPerson2, "dob", e.target.value)
              }
            />
          </FormGroup>
          <FormGroup label="Date of Death">
            <InputGroup
              type="date"
              value={person2.dod}
              onChange={(e) =>
                handleInputChange(person2, setPerson2, "dod", e.target.value)
              }
            />
          </FormGroup>
        </>
      )}
    </div>
  );
});

export const InformationTab = (props) => (
  <SectionTab name="Information" {...props}>
    <FaShapes icon="new-text-box" />
  </SectionTab>
);
