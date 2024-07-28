import React from "react";
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno";
import { Toolbar } from "polotno/toolbar/toolbar";
import { ZoomButtons } from "polotno/toolbar/zoom-buttons";
import { SidePanel } from "polotno/side-panel";
import { Workspace } from "polotno/canvas/workspace";
import { createStore } from "polotno/model/store";
import { observer } from "mobx-react-lite";
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
import FaShapes from "@meronex/icons/fa/FaShapes";
import "@blueprintjs/core/lib/css/blueprint.css";

// Create the Polotno store
const store = createStore({
  key: "nFA5H9elEytDyPyvKL7T",
  showCredit: true,
});

store.addPage({
  width: 1000,
  height: 500,
});

// Define custom components that return null for color options, transparency, stroke options, and shadow options
const TextFill = () => null;
const ImageFill = () => null;
const SvgFill = () => null;
const FigureFill = () => null;
const LineColor = () => null;
const Opacity = () => null;
const Stroke = () => null;
const Shadow = () => null;
const Effects = () => null;
const FigureStroke = () => null;
const FigureSettings = () => null;
const FigureFilters = () => null;

// Define the custom section
const CustomSection = {
  name: "custom",
  Tab: (props) => (
    <SectionTab name="Information" {...props}>
      <FaShapes icon="new-text-box" />
    </SectionTab>
  ),
  Panel: observer(({ store }) => {
    return (
      <div>
        <p>Here we will define our own custom tab.</p>
        <p>Elements on the current page: {store.activePage?.children.length}</p>
      </div>
    );
  }),
};

console.log("STORE ", store.toJSON());

const sections = [CustomSection, ...DEFAULT_SECTIONS];

export const Editor = () => {
  return (
    <PolotnoContainer style={{ width: "100vw", height: "100vh" }}>
      <SidePanelWrap>
        <SidePanel store={store} sections={sections} />
      </SidePanelWrap>
      <WorkspaceWrap>
        <Toolbar
          store={store}
          downloadButtonEnabled
          components={{
            TextFill, // Disable text fill color picker
            ImageFill, // Disable image fill color picker
            SvgFill, // Disable SVG fill color picker
            FigureFill, // Disable figure fill color picker
            LineColor, // Disable line color picker
            Opacity, // Disable transparency options
            Stroke, // Disable stroke options
            Shadow, // Disable shadow options
            Effects, // Disable the entire effects section
            FigureStroke,
            FigureSettings,
            FigureFilters,
          }}
        />
        <Workspace store={store} />
        <ZoomButtons store={store} />
      </WorkspaceWrap>
    </PolotnoContainer>
  );
};

export default Editor;
