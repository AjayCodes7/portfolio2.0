import {
  PageHeader,
  PageHeaderHeading,
} from "@/components/page-header";

import Skills from '@/components/Skills';

const SkillsToolsPage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Skills & Tools</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 mb-10 text-muted-foreground">
          Learned by coding and debugging all day!
        </PageHeaderHeading>
        <Skills/>
      </PageHeader>
    </>
  );
};
export default SkillsToolsPage;
