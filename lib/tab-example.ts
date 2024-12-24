export const tabAcitveOptions = ["horizontal", "vertical"] as const;

export type TabActiveOptions = (typeof tabAcitveOptions)[number];
