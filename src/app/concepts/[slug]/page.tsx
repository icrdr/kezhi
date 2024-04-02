import Columns from "@/components/Columns";
import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph";
import Frame from "@/components/Frame";
import ReferenceList from "@/components/ReferenceList";
import ConceptList from "@/components/ConceptList";

import CONCEPTS from "@/data.json";
import PAGE_CONTENT from "./data.json";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="container mx-auto lg:px-24 px-8 space-y-4">
      {params.slug}
      <Title
        content={PAGE_CONTENT.concept.name}
        subtitle={PAGE_CONTENT.concept.alias[0]}
      />
      <Paragraph content={PAGE_CONTENT.concept.description} />
      {/* <Columns sizes={[1, 2]}>
        <Frame source="/images/nav.png" />
        <Frame source="/images/anatomy.png" />
      </Columns> */}

      <div className={`grid grid-cols-3 gap-4`}>
        <div className={`col-span-1`}>
          <Frame source="/images/nav.png" />
        </div>
        <div className={`col-span-2`}>
          <Frame source="/images/nav.png" />
        </div>
      </div>

      <ConceptList
        concepts={PAGE_CONTENT.concepts.map((name, index) => CONCEPTS[name])}
      />
      <ReferenceList references={PAGE_CONTENT.references} />
    </div>
  );
}
