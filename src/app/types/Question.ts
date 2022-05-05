export interface Question {
  questions?: (QuestionsEntity)[] | null;
}
export interface QuestionsEntity {
  questionText: string;
  options?: (OptionsEntity)[] | null;
  explanation: string;
}
export interface OptionsEntity {
  text: string;
  correct?: boolean | null;
}
