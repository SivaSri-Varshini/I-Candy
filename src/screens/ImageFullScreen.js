import React from "react";

import AppScreen from "../components/AppScreen";
import ImageFullSize from "../components/ImageFullSize";

function ImageFullScreen({ route }) {
  const listing = route.params;

  return (
    <AppScreen>
      <ImageFullSize imageUri={listing} />
    </AppScreen>
  );
}

export default ImageFullScreen;
