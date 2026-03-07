import Link from "next/link";
import React from "react";

const deployHookUrl = process.env.DEPLOY_HOOK_URL || "";

const DeployHookButton: React.FC = () => {
  return (
    <Link
      href={deployHookUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="This will trigger a deployment of the site"
      style={{
        textDecoration: "none",
        color: "inherit",
        font: "inherit",
        textAlign: "center",
        display: "block",
      }}
    >
      Deploy
    </Link>
  );
};

export default DeployHookButton;
