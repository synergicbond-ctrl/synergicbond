/** Presentation-only shared visual system for the D-block course. */
export default function DBlockVisualSystem() {
  return (
    <style>{`
      .dblock-page { min-height: 100vh; background: #02060b !important; color: #f5f7fb; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
      .dblock-page > div { max-width: 72rem !important; padding: 1.25rem 1rem 3rem !important; }
      .dblock-page header { border: 1px solid #17364a !important; border-radius: 1rem !important; background: #071321 !important; padding: 1.25rem !important; box-shadow: 0 16px 42px rgba(0,0,0,.28) !important; }
      .dblock-page header h1 { color: #f5f7fb !important; font-size: 1.875rem !important; line-height: 1.15 !important; }
      .dblock-page header > p { margin-top: .75rem !important; color: #a8b3c1 !important; font-size: 1rem !important; line-height: 1.65 !important; }
      .dblock-page header span { border-color: #17364a !important; background: #071321 !important; color: #4ee7ff !important; }
      .dblock-page header span + span { color: #b69aff !important; }
      .dblock-page nav.sticky { border: 1px solid #17364a !important; border-radius: .75rem !important; background: #071321 !important; padding: .4rem !important; box-shadow: 0 10px 24px rgba(0,0,0,.26) !important; }
      .dblock-page nav.sticky a { border-color: #17364a !important; border-radius: .5rem !important; background: #02060b !important; color: #a8b3c1 !important; padding: .45rem .65rem !important; }
      .dblock-page nav.sticky a:hover { border-color: #4ee7ff !important; color: #f5f7fb !important; }
      .dblock-page section { border: 1px solid #17364a !important; border-radius: 1rem !important; background: #071321 !important; padding: 1.25rem !important; box-shadow: 0 14px 34px rgba(0,0,0,.2) !important; }
      .dblock-page section > div:first-child > span { border-radius: .6rem !important; background: #4ee7ff !important; color: #02060b !important; }
      .dblock-page section > div:first-child p:first-child { color: #a8b3c1 !important; }
      .dblock-page section > div:first-child p:last-child { color: #f5f7fb !important; }
      .dblock-page figure { border-color: #17364a !important; border-radius: .75rem !important; background: #02060b !important; box-shadow: 0 12px 30px rgba(0,0,0,.22) !important; }
      .dblock-page figure > div, .dblock-page figure > figcaption { border-color: #17364a !important; }
      .dblock-page figure > div { padding: .9rem 1rem !important; }
      .dblock-page figure h3 { color: #f5f7fb !important; font-size: 1.125rem !important; line-height: 1.3 !important; }
      .dblock-page figure figcaption { background: #071321 !important; color: #a8b3c1 !important; padding: .7rem 1rem !important; }
      .dblock-page .katex-display { overflow-x: auto; overflow-y: hidden; margin: 1rem 0; padding: .75rem 1rem; border: 1px solid #17364a; border-radius: .5rem; background: #02060b; }
      @media (min-width: 640px) { .dblock-page > div { padding: 1.5rem 1.5rem 4rem !important; } .dblock-page header, .dblock-page section { padding: 1.5rem !important; } .dblock-page header h1 { font-size: 2.25rem !important; } }
      @media (min-width: 1024px) { .dblock-page > div { padding-inline: 2rem !important; } .dblock-page header h1 { font-size: 3rem !important; } }
    `}</style>
  );
}
