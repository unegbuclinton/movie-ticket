export interface radioProps {
  legend?: string;
  name?: string;
  id?: string;
  selectedValue: string;
  onChange: (x: string) => void;
  fieldStyle?: string;
  radioData: Array<{ title: string; id: string; value: string }>;
}
