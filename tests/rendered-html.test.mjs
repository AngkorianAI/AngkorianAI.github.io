import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html", host: "localhost" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Angkorian-AI research site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Angkorian–AI \| Khmer Heritage Intelligence<\/title>/i);
  assert.match(html, /Computational research for/);
  assert.match(html, /Angkorian-KSI: A Multi-task Benchmark/);
  assert.match(html, /Angkorian-HeritageObj: AI-Assisted Visual Condition/);
  assert.match(html, /ICDAR 2026 \(Vienna, Austria\)/);
  assert.match(html, /ICPR 2026 \(Lyon, France\)/);
  assert.match(html, /GitHub repository/);
  assert.match(html, /Led by Dr\. Nimol Thuon\./);
  assert.match(html, /more than a decade/);
  assert.match(html, /profile\/nimol-thuon\.jpg/);
  assert.match(html, /href="https:\/\/github\.com\/back-kh"/);
  assert.match(html, /partners\/ecole-polytechnique\.webp/);
  assert.match(html, /partners\/unesco-twas\.webp/);
  assert.ok(
    html.indexOf("partners/ecole-polytechnique.webp") < html.indexOf("partners/nerc-slip.webp"),
    "partner logos are rendered newest-first",
  );
  assert.doesNotMatch(html, /class="team-list"/);
  assert.match(html, />3,493</);
  assert.match(html, /href="#publications"/);
  assert.match(html, /og\.png/);
});

test("removes starter-only metadata and dependencies", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(layout, /summary_large_image/);
});
