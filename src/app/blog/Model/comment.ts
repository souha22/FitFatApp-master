export interface Comment{
  "@context": "string",
  "@id": "string",
  "@type": "string",
  name: string,
  id: number,
  blogs : string,
  message : string,
  DatePublication : Date
}

export class commentClass implements Comment {
  "@context": "string";
  "@id": "string";
  "@type": "string";
  blogs: string;
  DatePublication: Date;
  id: number;
  message: string;
  name: string;

  constructor() {
  }
}

