import { Toolbar } from "polotno/toolbar/toolbar";
import React from "react";
import { Button } from "@blueprintjs/core";
import { DownloadButton } from "polotno/toolbar/download-button";

export const CustomToolbar = (props) => {
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

  // Additional UI components to show the custom action buttons
  const ActionControls = () => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <DownloadButton store={props.store} />
      <Button
        icon="floppy-disk"
        intent="none" // This removes any default BlueprintJS styling
        onClick={() => alert("Design Saved")}
        style={{
          marginLeft: "10px",
          backgroundColor: "#fff", // Background color for the non-hover state
          color: "#1C2127", // Text color for the non-hover state
          border: "none", // Remove border
          borderRadius: "3px", // Keep rounded corners
          boxShadow: "none",
          ":hover": {
            backgroundColor: "rgba(143, 153, 168, 0.15)", // Hover background color
          },
        }}
        className="bp3-minimal" // Blueprint class to apply minimal styling
      >
        Save
      </Button>
      <Button
        intent="primary"
        onClick={() => alert("Design Approved")}
        style={{ marginLeft: "10px" }}
      >
        Approve Design
      </Button>
    </div>
  );

  return (
    <Toolbar
      store={props.store}
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
        ActionControls, // Include the custom action controls with the Save and Approve Design buttons
      }}
    />
  );
};
