export interface Section {
  sectionOccurrenceId: string;
  status: string;
  issueStatus: {
    hardStopCount: number;
    issueCount: number;
    remidiatedCount: number;
    skippedCount: number;
  };
  name: string;
  description: string | null;
  numberLevel: string;
  totalQuestions: string;
  answeredQuestions: string;
}
