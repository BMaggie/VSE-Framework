import { QueryClient } from "@tanstack/react-query";
import { RouterProvider, createMemoryHistory, createRouter } from "@tanstack/react-router";
import { render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// The framework strip must be owned by the pages that want it, never appended
// globally by the root route: Home and About show it once, Contact never.
async function renderPage(path: string) {
  const router = createRouter({
    routeTree,
    history: createMemoryHistory({ initialEntries: [path] }),
    context: { queryClient: new QueryClient() },
    defaultPreload: false,
  });

  await router.load();
  const view = render(<RouterProvider router={router} />);

  return view.container.querySelectorAll(".framework").length;
}

describe("Framework section placement", () => {
  afterEach(() => {
    // Keep the root route's splash timers from leaking between pages.
    window.sessionStorage.clear();
  });

  it.each([
    ["/", 1],
    ["/about", 1],
    ["/contact", 0],
  ] as const)("%s shows the framework section %i time(s)", async (path, expected) => {
    expect(await renderPage(path)).toBe(expected);
  });
});
