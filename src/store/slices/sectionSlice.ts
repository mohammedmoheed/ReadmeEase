import { createSlice, current } from "@reduxjs/toolkit";

export interface SectionDataItem {
  id: string;
  slug: string;
  title: string;
  body: string;
  isSelected: boolean;
  isFocused: boolean;
}

interface SectionData {
  data: Array<SectionDataItem | null>;
}

const initialState: SectionData = {
  data: [
    {
      id: "nah5pfZFeW",
      slug: "title-and-description",
      title: "Title and Description",
      body: "# Project Title\r\n\r\nA brief description of what this project does and who it's for",
      isSelected: true,
      isFocused: true,
    },
    {
      id: "CZo51sEgSj",
      slug: "roadmap",
      title: "Roadmap",
      body: "## Roadmap\r\n\r\n- Additional browser support\r\n\r\n- Add more integrations\r\n\r\n",
      isSelected: false,
      isFocused: false,
    },
  ],
};

export const sectionSlice = createSlice({
  name: "section",
  initialState,
  reducers: {
    updateSelectedSlugBody: (state, action) => {
      const { id, body } = action.payload;
      const updatedSectionData = state.data.map((item: any) => {
        if (item.id === id) {
          item.body = body;
        }
        return item;
      });
      state.data = updatedSectionData;
    },
    updateSelectedSlug: (state, action) => {
      const id = action.payload;
      const updatedSectionData = state.data.map((item: any) =>
        item.id === id
          ? { ...item, isSelected: true, isFocused: true }
          : { ...item, isFocused: false }
      );
      state.data = updatedSectionData;
    },
  },
});
// get all section's data
export const getSectionData = (state: any) => state.sections.data;
// get all section's body code
export const getSectionBodyData = (state: any) =>
  state.sections.data
    .filter((item: any) => item.isSelected)
    .map((item: any) => item.body);
// get focused section
export const getFocusedSectionData = (state: any) =>
  state.sections.data.find((item: any) => item.isFocused);

export const { updateSelectedSlug, updateSelectedSlugBody } =
  sectionSlice.actions;

export default sectionSlice.reducer;
