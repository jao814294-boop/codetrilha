export function searchModules(query: string, items: Array<{ id: string; nome: string; descricao: string }>) {
  const normalized = query.trim().toLowerCase();

  if (!normalized) return items;

  return items.filter((item) => {
    return item.nome.toLowerCase().includes(normalized) || item.descricao.toLowerCase().includes(normalized);
  });
}
