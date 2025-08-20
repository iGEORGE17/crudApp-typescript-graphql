import { Document } from "mongoose";

type MaybeDocument = Document & { [key: string]: any };

export const mapDocumentToGraphQL = (doc: MaybeDocument | any) => {
  // If doc has toObject, it's a Mongoose Document
  const obj =
    doc && typeof (doc as MaybeDocument).toObject === "function"
      ? (doc as MaybeDocument).toObject()
      : doc;

  return {
    ...obj,
    id: obj._id.toString(),
  };
};

// For arrays
export const mapDocumentsToGraphQL = (docs: (MaybeDocument | any)[]) => {
  return docs.map(mapDocumentToGraphQL);
};
