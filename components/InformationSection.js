import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { FormGroup, InputGroup, Button } from "@blueprintjs/core";
import { SectionTab } from "polotno/side-panel";
import FaShapes from "@meronex/icons/fa/FaShapes";

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
        icon={<FaShapes icon="exchange" />}
      >
        Switch People
      </Button>
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
      <h3>Person 2</h3>
      <FormGroup label="First Name">
        <InputGroup
          value={person2.firstName}
          onChange={(e) =>
            handleInputChange(person2, setPerson2, "firstName", e.target.value)
          }
        />
      </FormGroup>
      <FormGroup label="Middle Name">
        <InputGroup
          value={person2.middleName}
          onChange={(e) =>
            handleInputChange(person2, setPerson2, "middleName", e.target.value)
          }
        />
      </FormGroup>
      <FormGroup label="Last Name">
        <InputGroup
          value={person2.lastName}
          onChange={(e) =>
            handleInputChange(person2, setPerson2, "lastName", e.target.value)
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
    </div>
  );
});

export const InformationTab = (props) => (
  <SectionTab name="Information" {...props}>
    <FaShapes icon="new-text-box" />
  </SectionTab>
);
