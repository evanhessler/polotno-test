import React from "react";
import { observer } from "mobx-react-lite";
import { SectionTab } from "polotno/side-panel";
import { GiResize } from "react-icons/gi";
import { Button } from "@blueprintjs/core";

export const CustomSizesPanel = {
  name: "sizes",
  Tab: (props) => (
    <SectionTab name="Sizes" {...props}>
      <GiResize icon="new-text-box" />
    </SectionTab>
  ),
  Panel: observer(({ store }) => {
    const AVAILABLE_SIZES = [
      { width: 500, height: 500, label: "20x20 inches" },
      { width: 1000, height: 500, label: "40x20 inches" },
      { width: 1000, height: 1000, label: "40x40 inches" },
      { width: 1500, height: 750, label: "60x30 inches" },
    ];

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
