// backend/utils/datauri.js
import DataURIParser from "datauri/parser.js";
import path from "path";

const parser = new DataURIParser();

const getDataUri = (file) => {
    // safety: if file is undefined/null, return null
    if (!file) return null;

    // extname should be a string (fallback to empty string)
    const extName = path.extname(file.originalname || "").toString();
    return parser.format(extName, file.buffer);
};

export default getDataUri;
