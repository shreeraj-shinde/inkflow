import React from "react";
import { Tldraw } from "tldraw";
import { useSyncDemo } from "@tldraw/sync";
import "tldraw/tldraw.css";

const Board = () => {
  const store = useSyncDemo({ roomId: "123" });
  console.log(store);
  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Tldraw store={store} onUiEvent={(e) => console.log(store)} />
    </div>
  );
};

export default Board;
