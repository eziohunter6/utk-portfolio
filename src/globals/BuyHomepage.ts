import type { GlobalConfig } from "payload";

export const BuyHomepage: GlobalConfig = {
  slug: "buy-homepage",
  admin: {
    group: "Pages",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      defaultValue: "Buy Homepage",
    },
    {
      type: "collapsible",
      label: "Hero",
      admin: { initCollapsed: false },
      fields: [
        {
          name: "heroMeta",
          type: "array",
          label: "Meta items",
          fields: [{ name: "item", type: "text", required: true }],
        },
        { name: "heroSubtitle", type: "text" },
        {
          name: "heroParagraphs",
          type: "array",
          fields: [{ name: "paragraph", type: "textarea", required: true }],
        },
        {
          name: "heroBentoItems",
          type: "array",
          label: "Bento grid items",
          fields: [
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              required: true,
              filterOptions: { mimeType: { contains: "image" } },
            },
            { name: "title", type: "text" },
            { name: "subtitle", type: "text" },
            {
              name: "tags",
              type: "array",
              fields: [{ name: "tag", type: "text", required: true }],
            },
          ],
        },
      ],
    },
    {
      type: "collapsible",
      label: "Process",
      admin: { initCollapsed: false },
      fields: [
        { name: "processProblemHeading", type: "text" },
        {
          name: "processProblemParagraphs",
          type: "array",
          fields: [{ name: "paragraph", type: "textarea", required: true }],
        },
        { name: "processApproachHeading", type: "text" },
        { name: "processApproachParagraph", type: "textarea" },
        {
          name: "processImages",
          type: "array",
          maxRows: 2,
          fields: [
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              required: true,
              filterOptions: { mimeType: { contains: "image" } },
            },
          ],
        },
      ],
    },
    {
      type: "collapsible",
      label: "Analysis",
      admin: { initCollapsed: false },
      fields: [
        { name: "analysisHeading", type: "text" },
        { name: "analysisParagraph", type: "textarea" },
        {
          name: "analysisImage",
          type: "upload",
          relationTo: "media",
          filterOptions: { mimeType: { contains: "image" } },
        },
      ],
    },
    {
      type: "collapsible",
      label: "Strategy & Limitations",
      admin: { initCollapsed: false },
      fields: [
        { name: "strategyHypothesisHeading", type: "text" },
        { name: "strategyHypothesisParagraph", type: "textarea" },
        { name: "strategyConstraintsHeading", type: "text" },
        { name: "strategyConstraintsParagraph", type: "textarea" },
        {
          name: "strategyImages",
          type: "array",
          maxRows: 2,
          fields: [
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              required: true,
              filterOptions: { mimeType: { contains: "image" } },
            },
          ],
        },
      ],
    },
    {
      type: "collapsible",
      label: "Exploration & Tradeoffs",
      admin: { initCollapsed: false },
      fields: [
        { name: "explorationParagraph", type: "textarea" },
        {
          name: "explorationImage",
          type: "upload",
          relationTo: "media",
          filterOptions: { mimeType: { contains: "image" } },
        },
      ],
    },
    {
      type: "collapsible",
      label: "Final Designs",
      admin: { initCollapsed: false },
      fields: [
        {
          name: "finalDesignsParagraphs",
          type: "array",
          fields: [{ name: "paragraph", type: "textarea", required: true }],
        },
        { name: "finalDesignsSubheading", type: "text" },
        {
          name: "finalDesignsImage",
          type: "upload",
          relationTo: "media",
          filterOptions: { mimeType: { contains: "image" } },
        },
      ],
    },
    {
      type: "collapsible",
      label: "Outcome",
      admin: { initCollapsed: false },
      fields: [
        { name: "outcomeIntro", type: "textarea" },
        {
          name: "outcomeMetrics",
          type: "array",
          fields: [
            { name: "label", type: "text", required: true },
            { name: "value", type: "text", required: true },
          ],
        },
        { name: "outcomeClosing", type: "textarea" },
      ],
    },
    {
      type: "collapsible",
      label: "Reflections",
      admin: { initCollapsed: false },
      fields: [{ name: "reflectionsParagraph", type: "textarea" }],
    },
  ],
};
