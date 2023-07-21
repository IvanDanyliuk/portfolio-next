import { g, auth, config } from '@grafbase/sdk';

const Project = g.model('Project', {
  title: g.string(),
  description: g.string().list(),
  mainImageUrl: g.url(),
  category: g.string(),
  techStack: g.relation(() => Technology).list(),
  frontEndRepoUrl: g.url().optional(),
  backendEndRepoUrl: g.url().optional(),
  deploymentLink: g.url().optional(),
  features: g.relation(() => Feature).list().optional()
});

const Feature = g.model('Feature', {
  description: g.string(),
  featureImageUrl: g.url(),
});

const Technology = g.model('Technology', {
  title: g.string().unique()
});

const SkillsPageContent = g.model('SkillsPageContent', {
  title: g.string(),
  story: g.string(),
  photoUrl: g.url(),
  techStack: g.relation(() => Technology).list()
})

export default config({
  schema: g
});