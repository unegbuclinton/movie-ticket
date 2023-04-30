export interface checkboxProp {
  selectedValue: string;
  onChange: (x: string) => void;
  legend?: string;
  checkboxData: Array<{ title: string; id: string; value: string }>;
}
