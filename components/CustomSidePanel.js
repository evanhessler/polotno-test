import { SidePanel, DEFAULT_SECTIONS } from "polotno/side-panel";
import React from "react";
import { observer } from "mobx-react-lite";
import { InformationSection, InformationTab } from "./InformationSection";
import { CustomBackgroundSection } from "./CustomBackgroundSection";
import { CustomSizesPanel } from "./CustomSizesPanel";

export const CustomSidePanel = (props) => {
  const sections = [
    { name: "information", Tab: InformationTab, Panel: InformationSection },
    CustomBackgroundSection,
    CustomSizesPanel,
    ...DEFAULT_SECTIONS,
  ];

  return <SidePanel store={props.store} sections={sections} />;
};
