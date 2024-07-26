import React from "react";
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno";
import { Toolbar } from "polotno/toolbar/toolbar";
import { PagesTimeline } from "polotno/pages-timeline";
import { ZoomButtons } from "polotno/toolbar/zoom-buttons";
import { SidePanel } from "polotno/side-panel";
import { Workspace } from "polotno/canvas/workspace";
import { createStore } from "polotno/model/store";
import { Button, Icon } from "@blueprintjs/core";

import "@blueprintjs/core/lib/css/blueprint.css";

const store = createStore({
  key: "nFA5H9elEytDyPyvKL7T",
  showCredit: true,
});

store.addPage();

const CustomSidebar = ({ store }) => {
  const handleOpenNewTab = () => {
    const newWindow = window.open(
      "https://example.com",
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div style={{ width: "200px", padding: "10px", background: "lightgray" }}>
      <Button onClick={handleOpenNewTab} minimal>
        <Icon icon="document-open" iconSize={20} />
        Open New Tab
      </Button>
      {/* Add your custom tools and components here */}
    </div>
  );
};

export const Editor = () => {
  return (
    <PolotnoContainer style={{ width: "100vw", height: "100vh" }}>
      <SidePanelWrap>
        <SidePanel store={store} />
        <CustomSidebar store={store} />
      </SidePanelWrap>
      <WorkspaceWrap>
        <Toolbar store={store} downloadButtonEnabled />
        <Workspace store={store} />
        <ZoomButtons store={store} />
        <PagesTimeline store={store} />
      </WorkspaceWrap>
    </PolotnoContainer>
  );
};

export default Editor;
