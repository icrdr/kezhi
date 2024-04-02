import Columns from "@/components/Columns";
import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph";
import Frame from "@/components/Frame";

const PAGE_CONTENT = {
  concept: {
    name: "上肢骨连结 - 肘关节",
    alias: ["articulations - elbow joint"],
    description:
      "由肱骨远侧端，桡骨和尺骨近端关节面组成。在结构上包括三个关节，它们共同被包在一个关节囊内。",
  },
  records: [
    {
      name: "肘关节",
      description: "",
      source: [],
    },
  ],
};

export default function Home() {
  return (
    <main className="container mx-auto p-6 space-y-2">
      <Title
        content={PAGE_CONTENT.concept.name}
        subtitle={PAGE_CONTENT.concept.alias[0]}
      />
      <Paragraph content={PAGE_CONTENT.concept.description} />
      <Paragraph content="一级关联" />
      <Paragraph content="参考文献" />
    </main>
  );
}
