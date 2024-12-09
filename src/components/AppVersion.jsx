import React from "react";
import { version } from "../../package.json";

export default function AppVersion() {
  return (
    <div>
      <p>{version}</p>
    </div>
  );
}
