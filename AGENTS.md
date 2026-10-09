<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Website architecture
- Keep Home, About and Contact as TanStack file routes, with shared navigation and footer at the root; preserve the framework's routing and avoid duplicated chrome.
- Keep shared brand content and metadata helpers in the site module; ensure every leaf page has its own sharing metadata.
- Keep the contact form client-side and generate an explicit email draft without claiming delivery; email sending is not connected.
- Use the global semantic design system and Button variants for all website controls; keep visual roles consistent across pages.

- Keep booking destinations and page-photo URLs in the shared brand module, with reusable booking and portrait controls in the site layout; this keeps all pages consistent.
- Keep the first-load splash in a root-mounted overlay with the page mounted underneath; this avoids layout shifts and route-change replays.
