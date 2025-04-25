export interface ICountdownState {
  countdown: {
    months: number;
    weeks: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }
  labels: string[];
}
