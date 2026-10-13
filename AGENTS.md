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

## Application rules

- Keep the public learning game on the index route; split onboarding, lessons, and partner controls into focused components so each flow stays independently maintainable.
- Store signed-in progress and shared-space membership in Cloud; guest progress is browser-local and must never determine membership or authorization.
- Score lesson submissions in authenticated server functions from canonical lesson data; clients never supply earned XP.
- Use privileged writes only after authenticated canonical scoring to persist XP; keep direct result writes denied so learners cannot award arbitrary points.
- Authorize partner visibility with database membership policies and use random, revocable invitation codes for explicit two-person joining.
- Keep age ranges, teaching content, and resource links in the lesson catalog; weekly ranges guide learning rather than prescribe developmental deadlines.
