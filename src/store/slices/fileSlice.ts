import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface FileItem {
  id: String;
  title: String;
  body: String;
  createdAt: Number;
  updatedAt: Number;
}

interface UserFileState {
  files: Array<FileItem | null>;
}

const initialState: UserFileState = {
  files: [],
};

export const fileSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    createNewFile: (state) => {
      const time = Date.now();
      const newFileData: FileItem = {
        id: uuidv4(),
        title: "File_" + (state.files.length + 1) + "_With_" + time,
        body: "",
        createdAt: time,
        updatedAt: time,
      };
      state.files.push(newFileData);
    },
  },
});
// get all created user files
export const getUserFiles = (state: any) => state.userFiles.files;
// get file by Id
export const getFileById =
  (id: any): any =>
  (state: any) =>
    state.userFiles.files.find((file: FileItem) => file.id === id);

export const { createNewFile } = fileSlice.actions;

export default fileSlice.reducer;
