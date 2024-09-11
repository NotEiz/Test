export type Psychologist = {
  name: string;
  averageScore: number;
  feedbacks: Feedback[];
};

export type Feedback = {
  reviewer: string;
  rating: number;
  comment: string;
};
