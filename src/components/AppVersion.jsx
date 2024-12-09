import React from "react";
import { version } from "../../package.json";

export default function AppVersion() {
  return (
    <div className="flex justify-end">
      <p className="text-xs text-black">{version}</p>
    </div>
  );
}
