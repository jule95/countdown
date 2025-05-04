export interface IDateInputProps {
  error: boolean;
  label: string;
  name: string;
  onChange: (name: string, value: Date | null) => void;
  value: Date | null;
}
