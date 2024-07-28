import { Toolbar } from "polotno/toolbar/toolbar";
import React, { useState } from "react";

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
      }}
    />
  );
};
