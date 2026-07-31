import type { ReactNode } from "react";

const S_BLOCK_RESPONSIVE_CSS = `
.sblockRoute .sbnHeader .sbnTabs {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  align-items: stretch;
  overflow: visible;
  padding-bottom: 0;
}

.sblockRoute .sbnHeader .sbnTab {
  display: flex;
  width: 100%;
  min-width: 0;
  min-height: 62px;
  box-sizing: border-box;
  align-items: center;
  white-space: normal;
  overflow-wrap: anywhere;
  line-height: 1.35;
}

.sblockRoute .sbnLessonGrid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: stretch;
}

.sblockRoute .sbnLessonCard {
  height: 100%;
}

@media (max-width: 1100px) {
  .sblockRoute .sbnHeader .sbnTabs,
  .sblockRoute .sbnLessonGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .sblockRoute .sbnHeader .sbnTabs,
  .sblockRoute .sbnLessonGrid {
    grid-template-columns: minmax(0, 1fr);
  }

  .sblockRoute .sbnHeader .sbnTab {
    min-height: 0;
    padding: 12px 14px;
  }
}
`;

export default function SBlockLayout({ children }: { children: ReactNode }) {
  return (
    <div className="sblockRoute">
      <style>{S_BLOCK_RESPONSIVE_CSS}</style>
      {children}
    </div>
  );
}
