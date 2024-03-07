<%*
tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = ["NPC/Trader"];
    frontmatter["hide"] = true;
  });
});
_%>
```meta-bind-embed
[[system/schema/NPCs/Trader]]
```