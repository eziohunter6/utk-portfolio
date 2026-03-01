import { lexicalEditor } from "@payloadcms/richtext-lexical";
import type { GlobalConfig } from "payload";

export const CarComparison: GlobalConfig = {
  slug: "car-comparison",
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
      defaultValue: "Car Comparison",
    },
    {
      type: "collapsible",
      label: "Hero",
      admin: { initCollapsed: false },
      fields: [
        {
          name: "carHeroMeta",
          type: "array",
          label: "Meta items",
          fields: [{ name: "item", type: "text", required: true }],
        },
        { name: "carHeroSubtitle", type: "text" },
        { name: "carHeroParagraph", type: "textarea" },
        {
          name: "carHeroBentoItems",
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
          ],
        },
      ],
    },
    {
      type: "collapsible",
      label: "Opportunity",
      admin: { initCollapsed: false },
      fields: [
        {
          name: "opportunityParagraphs",
          type: "array",
          fields: [
            {
              name: "content",
              type: "richText",
              required: true,
              editor: lexicalEditor(),
            },
          ],
        },
        {
          name: "opportunityImage",
          type: "upload",
          relationTo: "media",
          filterOptions: { mimeType: { contains: "image" } },
        },
      ],
    },
    {
      type: "collapsible",
      label: "Problem",
      admin: { initCollapsed: false },
      fields: [
        { name: "problemListHeading", type: "text" },
        {
          name: "problemListItems",
          type: "array",
          fields: [{ name: "item", type: "text", required: true }],
        },
        { name: "problemHeading", type: "text" },
        { name: "problemParagraph", type: "textarea" },
        {
          name: "problemImage",
          type: "upload",
          relationTo: "media",
          filterOptions: { mimeType: { contains: "image" } },
        },
      ],
    },
    {
      type: "collapsible",
      label: "Hypothesis",
      admin: { initCollapsed: false },
      fields: [
        { name: "hypothesisHeading", type: "text" },
        {
          name: "hypothesisListItems",
          type: "array",
          fields: [{ name: "item", type: "text", required: true }],
        },
      ],
    },
    {
      type: "collapsible",
      label: "Design Exploration",
      admin: { initCollapsed: false },
      fields: [
        { name: "designExplorationHeading", type: "text" },
        {
          name: "designExplorationContent",
          type: "richText",
          editor: lexicalEditor(),
        },
        {
          name: "designExplorationImage",
          type: "upload",
          relationTo: "media",
          filterOptions: { mimeType: { contains: "image" } },
        },
      ],
    },
    {
      type: "collapsible",
      label: "Floor Testing",
      admin: { initCollapsed: false },
      fields: [
        { name: "floorTestingParagraph", type: "textarea" },
        { name: "floorTestingHeading1", type: "text" },
        {
          name: "floorTestingList1",
          type: "array",
          fields: [{ name: "item", type: "text", required: true }],
        },
        { name: "floorTestingHeading2", type: "text" },
        {
          name: "floorTestingList2",
          type: "array",
          fields: [{ name: "item", type: "text", required: true }],
        },
        { name: "floorTestingClosing", type: "textarea" },
        {
          name: "floorTestingImages",
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
      label: "Final Designs",
      admin: { initCollapsed: false },
      fields: [
        { name: "carFinalDesignsParagraph", type: "textarea" },
        { name: "carFinalDesignsHeading", type: "text" },
        {
          name: "carFinalDesignsListItems",
          type: "array",
          fields: [{ name: "item", type: "text", required: true }],
        },
        {
          name: "carFinalDesignsImage",
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
        { name: "carOutcomeIntro", type: "textarea" },
        {
          name: "carOutcomeBusinessMetrics",
          type: "array",
          label: "Business Metrics",
          fields: [
            { name: "label", type: "text", required: true },
            { name: "value", type: "text", required: true },
          ],
        },
        {
          name: "carOutcomeUserMetrics",
          type: "array",
          label: "Key User Metrics",
          fields: [
            { name: "label", type: "text", required: true },
            { name: "value", type: "text", required: true },
          ],
        },
      ],
    },
    {
      type: "collapsible",
      label: "Reflections",
      admin: { initCollapsed: false },
      fields: [
        {
          name: "carReflectionsParagraphs",
          type: "array",
          fields: [{ name: "paragraph", type: "textarea", required: true }],
        },
      ],
    },
  ],
};
