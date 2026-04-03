const TOOLS = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    category: "General Assistant",
    url: "https://chat.openai.com/",
    icon: "https://www.google.com/s2/favicons?domain=chat.openai.com&sz=64",
    seedUses: 220
  },
  {
    id: "claude",
    name: "Claude",
    category: "General Assistant",
    url: "https://claude.ai/",
    icon: "https://www.google.com/s2/favicons?domain=claude.ai&sz=64",
    seedUses: 200
  },
  {
    id: "gemini",
    name: "Gemini",
    category: "General Assistant",
    url: "https://gemini.google.com/",
    icon: "https://www.google.com/s2/favicons?domain=gemini.google.com&sz=64",
    seedUses: 195
  },
  {
    id: "perplexity",
    name: "Perplexity",
    category: "Research",
    url: "https://www.perplexity.ai/",
    icon: "https://www.google.com/s2/favicons?domain=www.perplexity.ai&sz=64",
    seedUses: 180
  },
  {
    id: "notebooklm",
    name: "NotebookLM",
    category: "Research",
    url: "https://notebooklm.google.com/",
    icon: "https://www.google.com/s2/favicons?domain=notebooklm.google.com&sz=64",
    seedUses: 150
  },
  {
    id: "midjourney",
    name: "Midjourney",
    category: "Image Generation",
    url: "https://www.midjourney.com/",
    icon: "https://www.google.com/s2/favicons?domain=www.midjourney.com&sz=64",
    seedUses: 140
  },
  {
    id: "leonardo",
    name: "Leonardo AI",
    category: "Image Generation",
    url: "https://leonardo.ai/",
    icon: "https://www.google.com/s2/favicons?domain=leonardo.ai&sz=64",
    seedUses: 130
  },
  {
    id: "runway",
    name: "Runway",
    category: "Video",
    url: "https://runwayml.com/",
    icon: "https://www.google.com/s2/favicons?domain=runwayml.com&sz=64",
    seedUses: 120
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    category: "Audio",
    url: "https://elevenlabs.io/",
    icon: "https://www.google.com/s2/favicons?domain=elevenlabs.io&sz=64",
    seedUses: 110
  },
  {
    id: "gamma",
    name: "Gamma",
    category: "Presentation",
    url: "https://gamma.app/",
    icon: "https://www.google.com/s2/favicons?domain=gamma.app&sz=64",
    seedUses: 105
  },
  {
    id: "cursor",
    name: "Cursor",
    category: "Coding",
    url: "https://www.cursor.com/",
    icon: "https://www.google.com/s2/favicons?domain=www.cursor.com&sz=64",
    seedUses: 100
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    category: "Coding",
    url: "https://github.com/features/copilot",
    icon: "https://www.google.com/s2/favicons?domain=github.com&sz=64",
    seedUses: 98
  },
  {
    id: "huggingface",
    name: "Hugging Face",
    category: "Models",
    url: "https://huggingface.co/",
    icon: "https://www.google.com/s2/favicons?domain=huggingface.co&sz=64",
    seedUses: 95
  },
  {
    id: "replicate",
    name: "Replicate",
    category: "Models",
    url: "https://replicate.com/",
    icon: "https://www.google.com/s2/favicons?domain=replicate.com&sz=64",
    seedUses: 85
  },
  {
    id: "zapier-ai",
    name: "Zapier AI",
    category: "Automation",
    url: "https://zapier.com/ai",
    icon: "https://www.google.com/s2/favicons?domain=zapier.com&sz=64",
    seedUses: 80
  },
  {
    id: "mistral-chat",
    name: "Mistral Le Chat",
    category: "General Assistant",
    url: "https://chat.mistral.ai/",
    icon: "https://www.google.com/s2/favicons?domain=chat.mistral.ai&sz=64",
    seedUses: 78
  },
  {
    id: "grok",
    name: "Grok",
    category: "General Assistant",
    url: "https://grok.com/",
    icon: "https://www.google.com/s2/favicons?domain=grok.com&sz=64",
    seedUses: 77
  },
  {
    id: "pi",
    name: "Pi",
    category: "General Assistant",
    url: "https://pi.ai/",
    icon: "https://www.google.com/s2/favicons?domain=pi.ai&sz=64",
    seedUses: 75
  },
  {
    id: "phind",
    name: "Phind",
    category: "Coding",
    url: "https://www.phind.com/",
    icon: "https://www.google.com/s2/favicons?domain=www.phind.com&sz=64",
    seedUses: 74
  },
  {
    id: "codeium",
    name: "Codeium",
    category: "Coding",
    url: "https://codeium.com/",
    icon: "https://www.google.com/s2/favicons?domain=codeium.com&sz=64",
    seedUses: 72
  },
  {
    id: "tabnine",
    name: "Tabnine",
    category: "Coding",
    url: "https://www.tabnine.com/",
    icon: "https://www.google.com/s2/favicons?domain=www.tabnine.com&sz=64",
    seedUses: 70
  },
  {
    id: "v0",
    name: "v0",
    category: "Design to Code",
    url: "https://v0.dev/",
    icon: "https://www.google.com/s2/favicons?domain=v0.dev&sz=64",
    seedUses: 69
  },
  {
    id: "bolt",
    name: "Bolt.new",
    category: "Design to Code",
    url: "https://bolt.new/",
    icon: "https://www.google.com/s2/favicons?domain=bolt.new&sz=64",
    seedUses: 67
  },
  {
    id: "lovable",
    name: "Lovable",
    category: "Design to Code",
    url: "https://lovable.dev/",
    icon: "https://www.google.com/s2/favicons?domain=lovable.dev&sz=64",
    seedUses: 66
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    category: "Productivity",
    url: "https://www.notion.so/product/ai",
    icon: "https://www.google.com/s2/favicons?domain=www.notion.so&sz=64",
    seedUses: 65
  },
  {
    id: "grammarly",
    name: "Grammarly",
    category: "Writing",
    url: "https://www.grammarly.com/",
    icon: "https://www.google.com/s2/favicons?domain=www.grammarly.com&sz=64",
    seedUses: 63
  },
  {
    id: "quillbot",
    name: "QuillBot",
    category: "Writing",
    url: "https://quillbot.com/",
    icon: "https://www.google.com/s2/favicons?domain=quillbot.com&sz=64",
    seedUses: 60
  },
  {
    id: "wordtune",
    name: "Wordtune",
    category: "Writing",
    url: "https://www.wordtune.com/",
    icon: "https://www.google.com/s2/favicons?domain=www.wordtune.com&sz=64",
    seedUses: 58
  },
  {
    id: "otter",
    name: "Otter.ai",
    category: "Meetings",
    url: "https://otter.ai/",
    icon: "https://www.google.com/s2/favicons?domain=otter.ai&sz=64",
    seedUses: 57
  },
  {
    id: "fireflies",
    name: "Fireflies",
    category: "Meetings",
    url: "https://fireflies.ai/",
    icon: "https://www.google.com/s2/favicons?domain=fireflies.ai&sz=64",
    seedUses: 55
  },
  {
    id: "loom-ai",
    name: "Loom AI",
    category: "Meetings",
    url: "https://www.loom.com/ai",
    icon: "https://www.google.com/s2/favicons?domain=www.loom.com&sz=64",
    seedUses: 52
  },
  {
    id: "canva-ai",
    name: "Canva AI",
    category: "Design",
    url: "https://www.canva.com/ai-image-generator/",
    icon: "https://www.google.com/s2/favicons?domain=www.canva.com&sz=64",
    seedUses: 50
  },
  {
    id: "figma-ai",
    name: "Figma AI",
    category: "Design",
    url: "https://www.figma.com/ai/",
    icon: "https://www.google.com/s2/favicons?domain=www.figma.com&sz=64",
    seedUses: 48
  },
  {
    id: "removebg",
    name: "remove.bg",
    category: "Image Editing",
    url: "https://www.remove.bg/",
    icon: "https://www.google.com/s2/favicons?domain=www.remove.bg&sz=64",
    seedUses: 47
  },
  {
    id: "clipdrop",
    name: "Clipdrop",
    category: "Image Editing",
    url: "https://clipdrop.co/",
    icon: "https://www.google.com/s2/favicons?domain=clipdrop.co&sz=64",
    seedUses: 45
  },
  {
    id: "adobe-firefly",
    name: "Adobe Firefly",
    category: "Image Generation",
    url: "https://firefly.adobe.com/",
    icon: "https://www.google.com/s2/favicons?domain=firefly.adobe.com&sz=64",
    seedUses: 44
  },
  {
    id: "ideogram",
    name: "Ideogram",
    category: "Image Generation",
    url: "https://ideogram.ai/",
    icon: "https://www.google.com/s2/favicons?domain=ideogram.ai&sz=64",
    seedUses: 42
  },
  {
    id: "pika",
    name: "Pika",
    category: "Video",
    url: "https://pika.art/",
    icon: "https://www.google.com/s2/favicons?domain=pika.art&sz=64",
    seedUses: 41
  },
  {
    id: "luma-dream-machine",
    name: "Luma Dream Machine",
    category: "Video",
    url: "https://lumalabs.ai/dream-machine",
    icon: "https://www.google.com/s2/favicons?domain=lumalabs.ai&sz=64",
    seedUses: 39
  },
  {
    id: "descript",
    name: "Descript",
    category: "Audio/Video Editing",
    url: "https://www.descript.com/",
    icon: "https://www.google.com/s2/favicons?domain=www.descript.com&sz=64",
    seedUses: 38
  },
  {
    id: "heygen",
    name: "HeyGen",
    category: "Avatars",
    url: "https://www.heygen.com/",
    icon: "https://www.google.com/s2/favicons?domain=www.heygen.com&sz=64",
    seedUses: 36
  },
  {
    id: "synthesia",
    name: "Synthesia",
    category: "Avatars",
    url: "https://www.synthesia.io/",
    icon: "https://www.google.com/s2/favicons?domain=www.synthesia.io&sz=64",
    seedUses: 34
  },
  {
    id: "deepl-write",
    name: "DeepL Write",
    category: "Translation/Writing",
    url: "https://www.deepl.com/write",
    icon: "https://www.google.com/s2/favicons?domain=www.deepl.com&sz=64",
    seedUses: 33
  },
  {
    id: "jasper",
    name: "Jasper",
    category: "Marketing",
    url: "https://www.jasper.ai/",
    icon: "https://www.google.com/s2/favicons?domain=www.jasper.ai&sz=64",
    seedUses: 32
  },
  {
    id: "copy-ai",
    name: "Copy.ai",
    category: "Marketing",
    url: "https://www.copy.ai/",
    icon: "https://www.google.com/s2/favicons?domain=www.copy.ai&sz=64",
    seedUses: 30
  },
  {
    id: "tome",
    name: "Tome",
    category: "Presentation",
    url: "https://tome.app/",
    icon: "https://www.google.com/s2/favicons?domain=tome.app&sz=64",
    seedUses: 29
  },
  {
    id: "beautiful-ai",
    name: "Beautiful.ai",
    category: "Presentation",
    url: "https://www.beautiful.ai/",
    icon: "https://www.google.com/s2/favicons?domain=www.beautiful.ai&sz=64",
    seedUses: 28
  },
  {
    id: "make",
    name: "Make",
    category: "Automation",
    url: "https://www.make.com/",
    icon: "https://www.google.com/s2/favicons?domain=www.make.com&sz=64",
    seedUses: 27
  },
  {
    id: "n8n",
    name: "n8n",
    category: "Automation",
    url: "https://n8n.io/",
    icon: "https://www.google.com/s2/favicons?domain=n8n.io&sz=64",
    seedUses: 26
  },
  {
    id: "relevance-ai",
    name: "Relevance AI",
    category: "Automation",
    url: "https://relevanceai.com/",
    icon: "https://www.google.com/s2/favicons?domain=relevanceai.com&sz=64",
    seedUses: 25
  },
  {
    id: "poe",
    name: "Poe",
    category: "General Assistant",
    url: "https://poe.com/",
    icon: "https://www.google.com/s2/favicons?domain=poe.com&sz=64",
    seedUses: 24
  },
  {
    id: "you-com",
    name: "You.com",
    category: "Research",
    url: "https://you.com/",
    icon: "https://www.google.com/s2/favicons?domain=you.com&sz=64",
    seedUses: 23
  },
  {
    id: "consensus",
    name: "Consensus",
    category: "Research",
    url: "https://consensus.app/",
    icon: "https://www.google.com/s2/favicons?domain=consensus.app&sz=64",
    seedUses: 22
  },
  {
    id: "elicit",
    name: "Elicit",
    category: "Research",
    url: "https://elicit.com/",
    icon: "https://www.google.com/s2/favicons?domain=elicit.com&sz=64",
    seedUses: 21
  }
];

const STORAGE_KEYS = {
  usage: "aiToolsUsage"
};

const toolListEl = document.getElementById("toolsList");
const searchInputEl = document.getElementById("searchInput");
const clearSearchBtnEl = document.getElementById("clearSearchBtn");
const visibleCountEl = document.getElementById("visibleCount");

let usageMap = {};

function loadFromStorage() {
  const usageRaw = localStorage.getItem(STORAGE_KEYS.usage);

  if (usageRaw) {
    try {
      usageMap = JSON.parse(usageRaw);
    } catch (err) {
      usageMap = {};
    }
  }
}

function saveUsage() {
  localStorage.setItem(STORAGE_KEYS.usage, JSON.stringify(usageMap));
}

function getToolUses(tool) {
  if (typeof usageMap[tool.id] === "number") {
    return usageMap[tool.id];
  }
  return tool.seedUses;
}

function getSortedTools() {
  return [...TOOLS].sort((a, b) => getToolUses(b) - getToolUses(a));
}

function buildToolItem(tool) {
  const li = document.createElement("li");
  li.className = "tool-item";

  const link = document.createElement("a");
  link.className = "tool-link";
  link.href = tool.url;
  link.target = "_blank";
  link.rel = "noreferrer noopener";

  link.addEventListener("click", () => {
    usageMap[tool.id] = getToolUses(tool) + 1;
    saveUsage();
    renderTools();
  });

  const icon = document.createElement("img");
  icon.className = "tool-icon";
  icon.src = tool.icon;
  icon.alt = `${tool.name} icon`;
  icon.loading = "lazy";

  const textWrap = document.createElement("div");

  const name = document.createElement("div");
  name.className = "tool-name";
  name.textContent = tool.name;

  const meta = document.createElement("div");
  meta.className = "tool-meta";
  meta.textContent = tool.category;

  textWrap.append(name, meta);
  link.append(icon, textWrap);
  li.appendChild(link);
  return li;
}

function renderTools() {
  const query = searchInputEl.value.trim().toLowerCase();
  const tools = getSortedTools().filter((tool) => {
    return (
      tool.name.toLowerCase().includes(query) ||
      tool.category.toLowerCase().includes(query)
    );
  });

  toolListEl.innerHTML = "";

  if (!tools.length) {
    const empty = document.createElement("li");
    empty.className = "empty-msg";
    empty.textContent = query ? "No tools match your search." : "No tools available.";
    toolListEl.appendChild(empty);
  } else {
    tools.forEach((tool) => toolListEl.appendChild(buildToolItem(tool)));
  }

  visibleCountEl.textContent = `${tools.length} tools`;
  clearSearchBtnEl.hidden = !query;
}

function clearSearch() {
  searchInputEl.value = "";
  renderTools();
  searchInputEl.focus();
}

function handleShortcuts(event) {
  if (event.key === "Escape" && searchInputEl.value) {
    clearSearch();
  }

  if (event.key === "/" && document.activeElement !== searchInputEl) {
    event.preventDefault();
    searchInputEl.focus();
  }
}

function init() {
  loadFromStorage();
  renderTools();
  searchInputEl.addEventListener("input", renderTools);
  clearSearchBtnEl.addEventListener("click", clearSearch);
  document.addEventListener("keydown", handleShortcuts);
}

init();
