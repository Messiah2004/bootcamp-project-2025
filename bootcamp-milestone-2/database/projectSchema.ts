import mongoose, { Schema } from "mongoose";

export type Project = {
  name: string;
  slug: string;
  description: string;
  image: string;
  image_alt: string;
  link: string; // ✅ now required
};

const projectSchema = new Schema<Project>({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  image_alt: { type: String, required: true },
  link: { type: String, required: true },
});

const ProjectModel =
  mongoose.models.projects ||
  mongoose.model<Project>("projects", projectSchema);

export default ProjectModel;
