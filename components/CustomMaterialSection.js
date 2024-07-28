import React from "react";
import { observer } from "mobx-react-lite";
import { SectionTab } from "polotno/side-panel";
import FaShapes from "@meronex/icons/fa/FaShapes";

export const CustomMaterialSection = {
  name: "customBackground",
  Tab: (props) => (
    <SectionTab name="Material" {...props}>
      <FaShapes icon="new-text-box" />
    </SectionTab>
  ),
  Panel: observer(({ store }) => {
    const backgroundUrls = [
      "https://static.vecteezy.com/system/resources/thumbnails/030/188/390/small_2x/beautiful-natural-stone-background-ai-photo.jpg",
      "https://example.com/background2.jpg",
      "https://example.com/background3.jpg",
    ];

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
