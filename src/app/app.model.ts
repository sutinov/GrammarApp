export class Quote {
  constructor(
    public text?: string,
    public author?: string // public source?: string, // public id?: number
  ) {}
}
export class ApiResponse {
  constructor(
    public status?: number,
    public message?: string,
    public count?: number,
    public quotes?: Quote[]
  ) {}
}
export class Info {
  constructor(
    public message?: string,
    public shortMessage?: string,
    public sentence?: string
  ) {}
}
