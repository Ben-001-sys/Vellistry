# Vellistry logo concepts (SVG adaptations)

Status: **Proposed visual assets — owner visual approval still required**.

The seven SVG files are newly constructed vector adaptations of the chosen Vellistry **V / fountain-pen nib / gold quill** direction. They are **not copies of the original AI-generated PNG artwork** and should not be described as final approved brand masters until the owner compares their shapes, colors, and proportions with the chosen reference.

| Asset | Proposed use |
|---|---|
| `logo-stacked-light.svg` | Landing page, introduction, promotional artwork on white |
| `logo-horizontal.svg` | Website header and navigation |
| `app-icon.svg` | Icon-only app/PWA artwork (not a PNG manifest icon) |
| `logo-stacked-dark.svg` | Dark sections and splash artwork |
| `logo-monochrome.svg` | Single-color print, watermarks, simple backgrounds |
| `mark.svg` | Standalone compact symbol |
| `pwa-maskable.svg` | Full-bleed PWA tile with a safe-zone-centered mark |

## Font-independent wordmarks

The four SVG wordmarks are now **outlined paths**, rather than live SVG `<text>`, so the letterforms no longer depend on locally installed fonts or device-specific fallbacks. The vector outline was constructed from **EB Garamond 12 Regular**, whose font software is licensed under the **SIL Open Font License 1.1** (copyright © Georg A. Duffner and Siva Kalyan). No font binary is embedded or redistributed by this change. The outline is a proposed typography approximation, **not a claim that the original image generator used EB Garamond**. Final shape and typography approval remains with the owner.

## Maskable icon

The `pwa-maskable.svg` mark was re-centered and reduced to `translate(126 136) scale(.46)` within its 512×512 full-bleed tile. The approximate design bounds (x 147–365; y 147–367) lie well inside the 80%-diameter circular safe region centered at (256,256). This is a geometric safe-area check, **not actual Android/iOS hardware validation**; preview circular and squircle crops on representative devices before promotion.

## Pending final-production tasks

- Compare the proposed SVGs with the original selected PNG image and obtain visual signoff from the owner.
- Review PWA artwork at 48px, 192px and 512px, including real device masks.
- Bring in approved original PNG variants and tested favicon, Apple-touch and PWA PNG exports. Original source raster assets remain in the separately supplied brand-assets ZIP, not this PR.
- Only after signoff, connect the selected asset paths to the application metadata/manifest.

This proposal **does not modify any application source, metadata, configuration or runtime behavior**, and is not a production rollout.
