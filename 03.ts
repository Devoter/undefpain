interface SimpleObject {
  id: number;
  name: string | null;
  desc: string | undefined; // эквивалентно записи `desc?: string;`
}