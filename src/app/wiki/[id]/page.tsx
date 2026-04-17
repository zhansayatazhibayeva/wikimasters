import { notFound } from "next/navigation";
import WikiArticleViewer from "@/components/wiki-article-viewer";
import { getArticleById } from "@/lib/data/articles";

interface ViewArticlePageProps {
  params: {
    id: string;
  };
}

export default async function ViewArticlePage({
  params,
}: ViewArticlePageProps) {
  const { id } = params;

  const canEdit = true;

  const article = await getArticleById(+id);

  if (!article) {
    notFound();
  }

  return <WikiArticleViewer article={article} canEdit={canEdit} />;
}
