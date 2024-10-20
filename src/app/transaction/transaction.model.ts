export interface Transaction {
  amount: number;
  type: 'income' | 'expense';
  title: string;
}
